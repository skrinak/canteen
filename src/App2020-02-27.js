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
    uploadedURLs: [],
    photoLabels: [],
    photos: [],
  }
  
  // identifyFromFile(event) {    
  //   Predictions.identify({
  //     labels: {
  //       source: event,
  //       type: "ALL" 
  //     }
  //   })
  //   .then( data => { this.setState({ photoLabels: [...this.state.photoLabels, data.labels] })  })
  //   .catch(err => { console.log(err) })
  // }
  
  // loadPhotos = () => {
  //   Storage.list('')
  //   .then(result => {
  //     result.forEach(element => {
  //       Storage.get(element.key)
  //       .then( data => { this.setState({ uploadedURLs: [...this.state.uploadedURLs, data] })  })
  //       .then( this.identifyFromFile(element))
  //       .catch( err => { console.log(err)})
  //     });
  //   })
  //   .catch(err => console.log(err));   
  // }

  async identifyFromFile(event) {    
    return Predictions.identify({
      labels: {
        source: event,
        type: "ALL" 
      }
    });
  }

  loadPhotos = async () => {
    console.log('loadPhotos start');
    const files = await Storage.list('');
    const photos = [];
    console.log('Files', files);
    files.forEach(async file => {
      console.log('Getting labels for file', file.key);
      const photoUrl = await Storage.get(file.key);
      const labels = await this.identifyFromFile(file);
      photos.push({
        url: photoUrl,
        labels: labels.labels,
      });
    });
    console.log('Photos length=', photos.length);
    return this.setState({ photos });
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
    })
    .catch( err=> { console.log(err) })
  }
  
  render() {

    // if(!!this.state.photos.length){
    //   return (
    //     <div>Loading...</div>
    //   );
    // }
    console.log('State=', this.state.photos.length);
    const photos = this.state.photos.map(photo => {
      // const photoLabels = labels.map(label => {
      //   return (
      //     <li>{label.name}</li>
      //   );
      // });
      console.log('Photo=', photo);
      return (
        <div>
          <img src={photo.url} height="300" /><br />
        </div>
      );
    });

    return (
      <div className="App">
        <h1>Canteen</h1>
        <input type='file' onChange={this.handleChange} />
        <img alt={this.state.fileURL} src={this.state.fileURL} />
        <button onClick={this.saveFile}>Save File</button>
        <hr></hr>
        {photos}
      </div>
    );
  }
}
  
  export default withAuthenticator( App, { includeGreetings: true });
  