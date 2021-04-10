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
          width: '100%',
          height: '100%',
        }}
      />
    </>
  );
};
