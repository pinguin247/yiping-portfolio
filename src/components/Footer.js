import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <InstagramIcon />
            <TwitterIcon />            
            <GithubIcon />
            <LinkedInIcon />

        </div>
        <p> &copy; 2023 yipingportfolio.com</p>
    </div>
  )
}

export default Footer