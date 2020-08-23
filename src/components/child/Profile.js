import React from 'react'
import profileimg from '../../assets/profile.jpg'
import '../../scss/_profile.scss'
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'
import IosCloudDownloadOutline from 'react-ionicons/lib/IosCloudDownloadOutline'
import IosArrowForward from 'react-ionicons/lib/IosArrowForward'


const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-img">
                <img src={profileimg} alt="user" ></img>
            </div>
            <h1 className="myh1">Emma Doe</h1>
            <h2 className="myh2">Web Developer</h2>
            <div className="social">
                <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/"><LogoFacebook color='orange' /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><LogoTwitter color='orange' /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/"><LogoGithub color='orange' /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.spotify.com/"><LogoInstagram color='orange' /></a>
            </div>
            <div className="btns">
                <button href="#" className="btn left" >Download C.V  <IosCloudDownloadOutline color="white" className="icon" /></button>
                <button href="#" className="btn right">Contact Me  <IosArrowForward color="white" className="icon" /></button>
            </div>
        </div>
    )
}
export default Profile;