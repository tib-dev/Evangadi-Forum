import React from "react";
import logo_footer from "../../assets/images/evangadi-logo-footer.png";
import classes from "./footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
function Footer() {
  return (
    <div className={classes.footer_wrapper}>
      <div className={classes.footer_container}>
        <div className={classes.social_media_links}>
          <div className={classes.footer_logo}></div>
          <Link to="/">
            <img src={logo_footer} alt="logo" />
          </Link>

          <div className={classes.socail_media_icon_container}>
            <div className={classes.socail_media_wrapper}>
              <a href="" className={classes.socail_media_icon}>
                <FaFacebookF className={classes.facebook_icon} />
              </a>
            </div>
            <div className={classes.socail_media_wrapper}>
              <a href="" className={classes.socail_media_icon}>
                <FaInstagram className={classes.instagram_icon} />
              </a>
            </div>
            <div className={classes.socail_media_wrapper}>
              <a
                href="https://www.youtube.com/@EvangadiTech/featured"
                className={classes.socail_media_icon}
              >
                <IoLogoYoutube className={classes.youtube_icon} />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.useful_links}>
          <h3>Usefull Links</h3>
          <ul>
            <li>
              <a href="">How it works</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className={classes.contacts}>
          <h3>Contacts</h3>
          <ul>
            <li>Evangadi Networks</li>
            <li>support@evangadi.com</li>
            <li>+1-202-386-2702</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
