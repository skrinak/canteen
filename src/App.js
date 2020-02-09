import aws_exports from './aws-exports';
import React, { Component } from 'react';
import './App.css';

import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Storage } from 'aws-amplify';
Amplify.configure(aws_exports);


class App extends Component {
  state = { fileURL: '', file: '', filename: '', uploadedURLs: [] }
  
  loadPhotos = () => {
    Storage.list('')
    .then(result => {
      result.forEach(element => {
        Storage.get(element.key)
        .then( data => { this.setState({ uploadedURLs: [...this.state.uploadedURLs, data] })  })
        .catch( err => { console.log(err)})
      });
    })
    .catch(err => console.log(err));   
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
      console.log('Sucessfully saved file: ',  + this.state.filename)
      this.setState({ fileURL: '', file: '', filename: '' })
    })
    .catch( err=> { console.log(err) })
  }


  render() {
    return (
      <div className="App">
        <h1>Canteen</h1>
        <input type='file' onChange={this.handleChange} />
        <img alt={this.state.fileURL} src={this.state.fileURL} />
        <button onClick={this.saveFile}>Save File</button>
        <hr></hr>
        {this.state.uploadedURLs.map( (photo, index) => {
          return <img height="300" alt={photo} key={index} src={photo} />
        })}
      </div>
    );
  }
}

export default withAuthenticator( App, { includeGreetings: true });
