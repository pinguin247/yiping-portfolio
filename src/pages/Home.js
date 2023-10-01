import React from 'react'
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css"
import image1 from "../assets/profilepic.jpg"

function Home() {
  return (
    <div className="home">
        <div className='about'>
            <div class="icon-container">
                <img src={image1} class="icon"/>
            </div>
            
            <h2>Hi, My Name is Gao Yiping</h2>
            <div className='prompt'>
                <p>Aspiring Software Engineer with a drive to make a difference through technology</p>
                <LinkedInIcon />
                <EmailIcon />
                <GithubIcon />
            </div>
        </div>
        <div className='skills'>
            <h1> Skills </h1>
            <ol className="list">
                <li className="item">
                    <h2> Front-End</h2>
                    <span>
                    VueJs, ReactJS, HTML, CSS, React Native,
                    BootStrap, Yarn, TailwindCSS, Quasar, Blazor Web Assembly
                    </span>
                </li>
                <li className="item">
                    <h2>Back-End</h2>
                    <span>
                    .NET, Blazor Web Assembly, MySQL, MongoDB, Django 
                    </span>
                </li>
                <li className="item">
                    <h2>Languages</h2>
                    <span>JavaScript, Java, Python, C#, C, TypeScript, R</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home