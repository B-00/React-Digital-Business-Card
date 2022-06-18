import React from "react";
import Email from "../images/email_logo.jpg";
import Linkedln from "../images/link_logo.png";
import Face from "../images/face_pfp.PNG";

export default function Info() {
    return (
        <div className="info">
            <img className="face_pfp" src={Face} alt="face_pfp" />
            <h1>Laura Smith</h1>
            <h4>Frontend Developer</h4>
            <p>laurasmith.website</p>
            <a
                className='email'
                href='mailto:laurasmith@mail.com'
                target='_blank'
                rel='noreferrer'
            >
                <button className='email-btn pf-btn'>
                    <img
                        className='email-icon'
                        src={Email}
                        alt='Email Logo'
                    />
                    <p>Email</p>
                </button>
            </a>
            <a
                className='linkedln'
                href='https://linkedln.com/laurasmith'
                target='_blank'
                rel='noreferrer'
            >
                <button className='linkedln-btn pf-btn'>
                    <img
                        className='linkedln-icon'
                        src={Linkedln}
                        alt='Linkedln Logo'
                    />
                    <p>Linkedln</p>
                </button>
            </a>
        </div>
    );
}