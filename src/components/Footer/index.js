import { BsArrowRightShort } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import './index.css'

const Footer=()=>(
    <section className="footer-area">
    <div className='footer'>
        <div className='first-side'>
            <a href="/"><img src="https://www.qwackedu.com/static/media/logo.2a487917892639ad5b74.png" alt="logo" className='footerapp-logo'/></a>
            <p className='lets-practice'>Let's Practice Grammar</p>
            <a href="https://www.qwackedu.com/AboutUs"><div className="text-icon">
            <p className='read-more'>Read More</p> <p className="arrow-icon"><BsArrowRightShort size={25} style={{textDecoration:'none',color:'#0e1133'}}  /> </p>
            </div></a>
            <div className="social-media-icons">
                <div className="icon"><FaFacebookF /></div> 
                <div className="icon"><FaTwitter /></div> 
                <div className="icon"><IoLogoInstagram /></div> 
                <div className="icon"><FaLinkedinIn /></div> 
            </div>
        </div>
        <div className="mid-side">
            <h1 className="quick-links">Quick links</h1>
            <a href="https://www.qwackedu.com/AboutUs"><p className="about-us">About Us</p></a>
            <a href="https://www.qwackedu.com/T&C"><p className="about-us">Terms and Conditions</p></a>
            <a href="https://www.qwackedu.com/privacy"><p className="about-us">Privacy Policy</p></a>
        </div>
        <div className="last-side">
            <h1 className="quick-links">Get In Touch</h1>
            <a href="/"><div className="icon-text">
            <HiOutlineMail size={24} style={{marginTop:'10px',marginRight:'10px', color: '#2b70fa'}} />
            <p className="about-us">contact@qwackedu.com</p>
            </div></a>
            <a href="/">
            <div className="icon-text">
            <SlLocationPin size={24} style={{marginTop:'10px',marginRight:'10px', color: '#2b70fa'}} />
            <p className="about-us">SF - 204 Aayna Complex <br/> Nr. Zydus Hospital, Habatpur Road <br/>Thaltej - Ahmedabad Gujarat - 380054</p>
            </div></a>
        </div>
    </div>
    <hr/>

    <div className="copy-rights">
        <p className="copirights">Copyright © 2022 Q.W.A.C.K. All rights reserved.</p>
    </div>
    </section>
)

export default Footer