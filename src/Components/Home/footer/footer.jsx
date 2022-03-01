import React from "react";
import '../footer/footer.css';
import footerLogo from '../../../assest/LogoFooter.svg';
import ArrowIcon from '../../../assest/arrow-right.svg';
import Mail from '../../../assest/mail.svg';
import Phone from '../../../assest/phone.svg';
import MapPin from '../../../assest/map-pin.svg';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import {IoLogoInstagram} from 'react-icons/io';
import {FaTiktok} from 'react-icons/fa'

function Footer() {

    return (
        <div className="footer">
          <div className="container">
            <div className="row rowFooter">
              <div className="col-4 footerCol">
                <div><img className="footerLogo" src={footerLogo} alt="" /></div>
                <p className="footerText">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <button className="footerBtn">Read more <img src={ArrowIcon} alt="" /></button>
                <div className="footerIcon">
                     <TiSocialFacebook className="smNetworkIcon" /> 
                     <TiSocialTwitter className="smNetworkIcon networMargin" />
                     <IoLogoInstagram  className="smNetworkIcon networMargin"/>
                     <FaTiktok className="smNetworkIcon networMargin" />
                </div>
              </div>
              <div className="col-8 footerCol">
                <div className="row">
                <div className="col-2 col-lg-3 colFooter">
                    <p className='headLine'>Company</p>
                   <div className="innerLineText">
                      <p className="innerLineFooter">About us</p>
                      <p className="innerLineFooter">Courses</p>
                      <p className="innerLineFooter">Study Guide</p>
                      <p className="innerLineFooter">Blog</p>
                      <p className="innerLineFooter">Contact</p>
                   </div>
                </div>
                <div className="col-2 col-lg-3 colFooter footerSupport">
                <p className='headLine headLineEnglish'>Support</p>
                  <div className="innerLineText">
                      <p className="innerLineFooter">Community</p>
                      <p className="innerLineFooter">Resources</p>
                      <p className="innerLineFooter">Faqs</p>
                      <p className="innerLineFooter">Privacy Policy</p>
                      <p className="innerLineFooter">Careers</p>
                  </div>
                </div>
                <div className="col-2 col-lg-3 colFooter footerCompany">
                    <p className='headLine '>Company</p>
                    <div className="innerLineTextCompany">
                    <img className="iconsFooter" src={Mail} alt="" /> <p className="innerLineFooterCompany">  support@ckaplan.com</p>
                    <img className="iconsFooter" src={Phone} alt="" />    <p className="innerLineFooterCompany">  +371 457 855 54 44</p>
                    <img className="iconsFooter" src={MapPin} alt="" />   <p className="innerLineFooterCompany"> 442 Belle Terre St Floor 7, San Francisco, AV 4206</p>
                    </div>
                </div>
                </div>
              </div>
              <hr className="hrFooter" />
              <p className="lastTextFooter">Copyright © 2021. Codekaplan.com All rights reserved.</p>
            </div>
          </div>
        
        </div>
    )
}

export default Footer;
