import React from "react";
import twitter from "../images/twitter_logo.png"
import facebook from "../images/facebook_logo.png"
import insta from "../images/insta_logo.png"
import github from "../images/github_logo.png"

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-list">
                <li>
                    <a
                        href='https://twitter.com/laurasmith/'
                        target='_blank'
                        rel="noreferrer"
                    >
                        <img src={twitter} alt='twitter' />
                    </a>
                </li>
                <li>
                    <a
                        href='https://facebook.com/laurasmith/'
                        target='_blank'
                        rel="noreferrer"
                    >
                        <img src={facebook} alt='facebook' />
                    </a>
                </li>
                <li>
                    <a
                        href='https://instagram.com/laurasmith/'
                        target='_blank'
                        rel="noreferrer"
                    >
                        <img src={insta} alt='instagram' />
                    </a>
                </li>
                <li>
                    <a
                        href='https://github.com/laurasmith/'
                        target='_blank'
                        rel="noreferrer"
                    >
                        <img src={github} alt='github' />
                    </a>
                </li>
            </ul>
        </footer>

    );
}