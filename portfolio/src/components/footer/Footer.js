import React from 'react';
import './styles.css';

function Footer() {

    return (
        <div>
            <ul>
                <li>
                    <a><i className="far fa-envelope fa-4x"></i></a>
                </li>
                <li>
                    <a href="https://github.com/randipsbh" target="_blank" rel="noopener">
                        <i className="fab fa-github-square fa-4x"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-linkedin fa-4x"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;
