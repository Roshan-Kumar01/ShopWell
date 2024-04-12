import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import InstagramIcon from '@mui/icons-material/Instagram';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/rosh_an14323/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dgigi68vd/image/upload/v1712822738/avatars/cwnyovyv4kxyj4gjdmms.png"
              alt="Founder"
            />
            <Typography>Roshan Kumar</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This wesbite made by @rosh_an14323. Only with the
              purpose to learn MERN Stack.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://roshan-s-portfolio-website.onrender.com/"
              target="blank"
            >
              <WorkHistoryIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/rosh_an14323/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;