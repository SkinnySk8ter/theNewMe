import React from "react";
import './HomePage.css'
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="mainContainer">
            <Link to="/" className="btn btn-primary">Start Over</Link>
            <h1 className="mainHeader">Hello and welcome! Please take a look around!</h1>
            <div className="mainText">
            <p className="mainP">My name is Jody and I am a full stack developer. 
                I have a main focus on front end web design/development with React. I also have experience with backend database design in C#/.NET.
                I have also worked with database organization with MYSQL and SQL. 
                Take a look at some of my projects to see what I have been up to lately. 
                This page will be updated from time to time with new projects as I grow my abilities!</p>
                </div>
        {/* <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
        </div> */}
      </div>
    )
}

export default HomePage;