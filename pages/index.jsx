import React, { Component } from 'react';
import Axios from 'axios';

export default class index extends Component {

  postMovies = () => {
    Axios.post('http://localhost:8080/movies')
    .then((persons)=>{
      console.log(persons);
    })
  }

  getMovies = () => {
    Axios.get('http://localhost:8080/movies')
    .then((persons)=>{
      console.log(persons);
    })
  }

  getMoviesByID = () => {
    Axios.get('http://localhost:8080/movies/:id')
    .then((persons)=>{
      console.log(persons);
    })
  }

  putMovies = () => {
    Axios.put('http://localhost:8080/movies/:id')
    .then((persons)=>{
      console.log(persons);
    })
  }

  deleteMovies = () => {
    Axios.delete('http://localhost:8080/movies/:id')
    .then((persons)=>{
      console.log(persons);
    })
  }

  render() {
    return (
      <div>
        Movies
        <button type="button" onClick={this.postMovies}>Click</button>
        <button type="button" onClick={this.getMovies}>Click</button>
        <button type="button" onClick={this.getMoviesByID}>Click</button>
        <button type="button" onClick={this.putMovies}>Click</button>
        <button type="button" onClick={this.deleteMovies}>Click</button>

      </div>
    );
  }
}
