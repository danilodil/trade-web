import React, {useState} from 'react';
import './header.css';
import { Auth } from "../Auth";
import { Button } from "../Buttons";
import { TEXT } from "../../constants";

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleClick = () => {
    setIsVisible(true);
  };

  const handleBack = () => setIsVisible(false);

  if (isVisible) {
    return <Auth onBack={handleBack} />
  }

  return (
    <header>
      <a className="logo conthrax" href='#'>
        <img src={'/assets/images/logo.jpg'} alt={TEXT.TITLE}/>
        {TEXT.TITLE}
      </a>
      <Button
        className="gradient"
        onClick={handleClick}
      >
        {TEXT.BUTTON.SIGN_UP}
      </Button>
    </header>
  );
}
