import React from 'react'
import './Footer.css'
import facebook_icon from '/facebook_icon.png'
import instagram__icon  from '/instagram_icon.png'
import twitter__icon from '/twitter_icon.png'
import youtube__icon from '/youtube_icon.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__icons">
                <img src={facebook_icon} alt="" />
                <img src={instagram__icon} alt="" />
                <img src={twitter__icon} alt="" />
                <img src={youtube__icon} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Centre</li>
                <li>Gift Cards</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <button>Service Code</button>
            <p className="copy__right">&copy; 1997-{new Date().getFullYear()} Netflix, Inc.</p>
        </div>
    )
}

export default Footer