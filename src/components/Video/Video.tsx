import React from 'react';
import './video.css';

type VideoProps = {
  autoPlay?: boolean;
  src: string;
  style?: React.CSSProperties,
  type: string;
  width?: string;
  height?: string;
  [key: string]: any;
};

export const Video: React.FC<VideoProps> = (props) => {
  const { autoPlay = false, type, src, ...rest } = props;
  return <>
    <video
      autoPlay={autoPlay}
      {...rest}
    >
      <source
        src={src}
        type={type}
      />
    </video>
  </>
};
