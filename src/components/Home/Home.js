import React, { Component } from 'react';
import axios from 'axios';
import Styles from "./Home.css";


export default class Home extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    axios.get(
      'https://3.basecampapi.com/3134260/projects.json',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          "Authorization": "Bearer BAhbB0kiAbB7ImNsaWVudF9pZCI6ImZlNDQyYTgzN2Q3MTBiY2YyYjkwYjEzZjg4Nzk3YmY4ZDA5ZTE0YWIiLCJleHBpcmVzX2F0IjoiMjAxOC0wNS0wN1QxODowOTowN1oiLCJ1c2VyX2lkcyI6WzMxMjc2NTQ3XSwidmVyc2lvbiI6MSwiYXBpX2RlYWRib2x0IjoiNzMzMGQyNmM4NTg0MzQ5NzI5NGIwY2NjNjc2Zjk3ZDIifQY6BkVUSXU6CVRpbWUN8pAdwJ7tdyQJOg1uYW5vX251bWkB5DoNbmFub19kZW5pBjoNc3VibWljcm8iByKAOgl6b25lSSIIVVRDBjsARg==--1a89542a4c1d6652bdb3f62bc01f899f75da45a3"
        }
      }
    )
      .then((response) => {
        var projects = response.data;
        this.setState({ projects });
      },
        (error) => {
          var status = error.status
        }
      );
  }

  render() {
    return (
      <div className={Styles.homeContainer}>
        <div className={Styles.hero}>
          <h1>Home</h1>
        </div>
      </div>
    )
  }
}