import React from 'react';
import './auth.css';
import { useInput } from '../../hooks';
import { Button } from '../Buttons';
import { Social } from '../Social';
import { TEXT } from '../../constants';

type AuthProps = {
  onBack: () => void;
};

export const Auth: React.FC<AuthProps> = (props) => {
  const { onBack } = props;
  const borderRadius =  '1.8em';
  const [email, InputEmail] = useInput({
    className: 'auth-input border-gradient',
    placeholder: 'Email',
    initialValue: '',
    name: 'email',
    type: 'email'
  });
  const [password, InputPassword] = useInput({
    className: 'auth-input border-gradient',
    placeholder: 'Password',
    initialValue: '',
    name: 'password',
    type: 'password',
  });
  const { AUTH, BUTTON } = TEXT;

  const handleInput = () => {
    alert(`${email}, ${password}, Filled Data`);
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-logo-wrapper">
          <img
            src={'/assets/images/trade.jpg'}
            alt="trade"
          />
        </div>
        <p className="auth-description conthrax">
          {AUTH.DESCRIPTION}
        </p>
        <div className="auth-signup">
          <p className="auth-signup-description">
            {AUTH.SIGNUP_DESCRIPTION}
          </p>
          <div className="auth-signup-fields">
            <div
              className="gradient-border gradient"
              style={{borderRadius}}>
              {InputEmail}
            </div>
            <div
              className="gradient-border gradient"
              style={{borderRadius}}>
              {InputPassword}
            </div>
          </div>
        </div>
        <div className="auth-cookie">
          <p className="auth-cookie-description">
            {AUTH.COOKIE_DESCRIPTION}
          </p>
          <div className="auth-cookie-btn-wrapper">
            <Button
              className="gradient"
              disabled={!email || !password}
              onClick={handleInput}
              style={{
                padding: '1.6em 1em',
                marginBottom: '2em',
                fontSize: '0.8em',
                borderRadius,
              }}
            >
              {BUTTON.ACCEPT_AND_CREATE}
            </Button>
            <div
              className="gradient-border gradient"
              style={{
                fontSize: '0.8em',
                borderRadius,
              }}>
              <Button
                className="border-gradient"
                onClick={() => {}}
                style={{
                  padding: '1.6em 1em',
                  fontSize: '1em',
                  background: 'var(--black)',
                  borderRadius,
                }}
              >
                {BUTTON.SKIP_AND_CREATE}
              </Button>
            </div>
          </div>
          <Social/>
        </div>
        <button className="auth-back gradient" onClick={onBack}>{BUTTON.BACK}</button>
      </div>
    </div>
  )
}
