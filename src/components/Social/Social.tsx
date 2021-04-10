import React from "react";

import './social.css';

export const Social: React.FC = () => (
  <div className="social">
    <p className="social_title conthrax">
      Or continue with
    </p>
    <div className="social-items">
      <button className="social_btn-item google">Google</button>
      <button className="social_btn-item telegram">Telegram</button>
      <button className="social_btn-item discord">Discord</button>
      <button className="social_btn-item facebook">Facebook</button>
      <button className="social_btn-item instagram">Instagram</button>
      <button className="social_btn-item twitter">Twitter</button>
    </div>
  </div>
);