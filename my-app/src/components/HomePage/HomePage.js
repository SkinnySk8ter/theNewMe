import React from "react";
import './HomePage.css'
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {

    const cardOneClick = () => {
        window.open("http://json-bourne-ui.herokuapp.com/");
    }

    const cardTwoClick = () => {
        window.open("https://anzook.github.io/The-Git-Gud-Team/jobsearch.html")
    }

    const cardThreeClick = () => {
        window.open("https://github.com/SkinnySk8ter?tab=repositories")
    }

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
            <div className="cardContainer">
                <div className="card text-center border border-primary shadow-0 ">
                    <div className="cardOne">
                        <h5 className="card-title">Json Bourne App</h5>
                        <p className="card-text">
                            An app showcasing React front end while using C# .NET back end.
                        </p>

                        <button type="button" onClick={cardOneClick}>Json Bourne!</button>
                    </div>
                </div>
                <div className="card text-center border border-primary shadow-0 ">
                    <div className="cardOne">
                        <h5 className="card-title">Cohort Collab App</h5>
                        <p className="card-text">
                            An app showcasing Basic HTML, CSS, and Javascript elements. This is the first piece of work that was done with an emphasis on group work.
                        </p>

                        <button type="button" onClick={cardTwoClick}>To Cohort Collab!</button>
                    </div>
                </div>
                <div className="card text-center border border-primary shadow-0 ">
                    <div className="cardOne">
                        <h5 className="card-title">Github</h5>
                        <p className="card-text">
                           Take a look at my github account to see past and upcoming projects!
                        </p>

                        <button type="button" onClick={cardThreeClick}>To Github</button>
                    </div>
                </div>
            </div>
           
            <div className="extraInterests">
                <h1>Extra stuff!</h1>
                <ul>
                    <li>Music</li>
                    <li>Gaming - Big time fan of Battlefield and Street Fighter</li>
                    <li>Animal Lover *I'm a sucker for cats -_-*</li>
                    <li>Trying new Restaurants</li>
                </ul>
            </div>
            <div>
            <Footer/>
            </div>
        </div>

    )
}

export default HomePage;