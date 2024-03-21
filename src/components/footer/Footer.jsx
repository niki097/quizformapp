import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a
                    href="https://github.com/niki097/quizformapp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/nikitasainiofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
