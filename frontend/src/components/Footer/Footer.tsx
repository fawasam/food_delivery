import "./footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            mollitia, rem veniam fugiat placeat maiores vero esse inventore,
            omnis accusamus quae ipsa sunt, voluptatibus nesciunt quibusdam
            aliquid! Corporis, vitae hic.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 1122334455</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <p className="footer-copyright">
          Copyright 2024 @ Tomato.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
