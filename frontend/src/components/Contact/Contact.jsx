import "./Contact.css";
import Email from "./Contact_photos/gmail.png";
import Location from "./Contact_photos/map.png";
import Phone from "./Contact_photos/telephone.png";
import WhatsApp from "./Contact_photos/whatsapp.png";
import Instagram from "./Contact_photos/instagram.png";
import { Link } from 'react-router-dom';

const Contact = () => {

  const url = `https://wa.me/${+919657284424}`;

  return (
    <div className="contactContainer">
      <div className="contact-main">

        <div className="contact-box">
          <Link to={url}>

            <div className="contact-image">
              <img src={WhatsApp} alt="WhatsApp" />
            </div>
            <div className="contact-username">
              WhatsApp
            </div>
          </Link>
        </div>


        <div className="contact-box">
          <div className="contact-image">
            <img src={Instagram} alt="WhatsApp" />
          </div>
          <div className="contact-username">
            Instagram
          </div>
        </div>


        <div className="contact-box">
          <div className="contact-image">
            <img src={Location} alt="WhatsApp" />
          </div>
          <div className="contact-username">
            Location
          </div>
        </div>


        <div className="contact-box">
          <a href="tel:+917620707855">
            <div className="contact-image">
              <img src={Phone} alt="WhatsApp" />
            </div>
            <div className="contact-username">
              Phone
            </div>
          </a>
        </div>


        <div className="contact-box">
          <a href="mailto:youremail@example.com">
            <div className="contact-image">
              <img src={Email} alt="WhatsApp" />
            </div>
            <div className="contact-username">
              Email
            </div>
          </a>
        </div>



      </div>
    </div>
  );
};

export default Contact;
