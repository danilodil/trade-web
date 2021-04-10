import React from "react";

import './social.css';

export const Social: React.FC = () => (
  <div className="social">
    <p className="social_title conthrax">
      Or continue with
    </p>
    <div className="social-items">
      <a className="social_btn-item google">
        Google
      </a>
      <a href='/' className="social_btn-item telegram">
        Telegram
      </a>
      <a href='/' className="social_btn-item discord">
        Discord
      </a>
      <a href='/' className="social_btn-item facebook">
        Facebook
      </a>
      <a href='/' className="social_btn-item instagram">
        Instagram
      </a>
      <a href='/' className="social_btn-item twitter">
        Twitter
      </a>
    </div>
  </div>
);