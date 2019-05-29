import React, { Component } from 'react';
import Axios from 'axios';

export default class index extends Component {
  postMovies = () => {
    Axios.post('http://localhost:8080/movies')
      .then((persons) => {
        console.log(persons);
      })
  }

  getMovies = () => {
    Axios.get('http://localhost:8080/movies')
      .then((persons) => {
        console.log(persons);
      })
  }

  getMoviesByID = () => {
    Axios.get('http://localhost:8080/movies/:id')
      .then((persons) => {
        console.log(persons);
      })
  }

  putMovies = () => {
    Axios.put('http://localhost:8080/movies/:id')
      .then((persons) => {
        console.log(persons);
      })
  }

  deleteMovies = () => {
    Axios.delete('http://localhost:8080/movies/:id')
      .then((persons) => {
        console.log(persons);
      })
  }

  render() {
    return (
      <div>
        Movies
        <button type="button" onClick={this.postMovies}>post</button>
        <button type="button" onClick={this.getMovies}>get</button>
        <button type="button" onClick={this.getMoviesByID}>getMoviesByID</button>
        <button type="button" onClick={this.putMovies}>put</button>
        <button type="button" onClick={this.deleteMovies}>delete</button>
      </div>
    );
  }
}
