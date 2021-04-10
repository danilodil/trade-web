import React from 'react';
import { Video } from "../../components/Video";
import { VIDEO_DATA } from "../../constants";

export const Home: React.FC = () => {
  return (
    <>
      <Video
        autoPlay
        src={VIDEO_DATA.HOME.src}
        type={VIDEO_DATA.HOME.format}
        style={{
          zIndex: -1,
          position: 'fixed',
          right: 0,
          minWidth: '100%',
          width: '100%',
          minHeight: '100%',
          height: '100%',
        }}
      />
    </>
  );
};
