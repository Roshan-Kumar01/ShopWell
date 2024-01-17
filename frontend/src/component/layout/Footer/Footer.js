import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import "./Footer.css"
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High Quality is our first priority</p>

        <p>Copyright 2024 &copy; meRoshan</p>
      </div>

      <div className="rightFooter">
        <a href="www.google.com">Instagram</a>
        <a href="www.google.com">Youtube</a>
        <a href="www.google.com">Facebook</a>
      </div>
    </footer>
  )
}

export default Footer