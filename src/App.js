import React, { Component } from 'react';
import './App.css';

import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Storage } from 'aws-amplify';
import Predictions, { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

class App extends Component {
  state = { 
    fileURL: '', 
    file: '', 
    filename: '', 
    photos: [],
  }

  async loadPredictions(event) {    
    return Predictions.identify({
      labels: {
        source: event,
        type: "ALL" 
      }
    });
  }

  loadPhotos = async () => {
    const files = await Storage.list('');
    const photos = [];
    for (const file of files) {
      if (file.key.length) {
        const photo = await Storage.get(file.key);
        let labels = await this.loadPredictions(file);

        photos.push({
          url: photo,
          labels: labels.labels,
        });
      }
    }
    this.setState({ photos });
  }

  componentDidMount() { this.loadPhotos() }
  
  handleChange = element => {
    const file = element.target.files[0]
    this.setState ({
      fileURL: URL.createObjectURL(file), 
      file, 
      filename: file.name
    })
  }
  
  saveFile = () => {
    Storage.put( this.state.filename, this.state.file )
    .then(() => {
      console.log('Successfully saved file: ',  + this.state.filename)
      this.setState({ fileURL: '', file: '', filename: '' })
      this.loadPhotos()
    })
    .catch( err=> { console.log(err) })
  }
  
  render() {

    const photos = this.state.photos.map(photo => {
      let tags = []
      photo.labels.forEach(tag => {
        tags.push(tag.name)
        tags.push(', ')
      })
      tags.pop()

      return (
        <div>
          <img alt={photo.url} src={photo.url} height="300" /><br />
          <p>{tags}</p>
          <p>&nbsp;</p>
        </div>
      );
    });

    return (
      <div className="App">
        <h1>Photo Canteen</h1>
        <input type='file' onChange={this.handleChange} />
        <img alt={this.state.fileURL} src={this.state.fileURL} />
        <button onClick={this.saveFile}>Save File</button>
        <hr></hr>
        {photos.length ? photos : <h1>Upload some photos to start.</h1>}
      </div>
    );
  }
}

export default withAuthenticator( App, { includeGreetings: true });
  