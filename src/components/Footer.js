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
            <a href="https://www.instagram.com/pingz247/">
                <InstagramIcon />
            </a>
            <a href="https://twitter.com/pingz247">
                <TwitterIcon />
            </a>
            <a href="https://github.com/pinguin247">
                <GithubIcon />
            </a>            
            <a href="https://www.linkedin.com/in/gao-yiping/">
                <LinkedInIcon />
            </a>          

        </div>
        <p> &copy; 2023 pinguin247.github.io/yiping-portfolio/</p>
    </div>
  )
}

export default Footer