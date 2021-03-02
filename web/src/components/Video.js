import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  overflow: hidden;
  transition: opacity 10000ms ease; */}

  position: relative;
  height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  -webkit-backface-visibility: hidden;
  outline: 1px solid transparent;
  box-shadow: 0 0 1px rgba(255,255,255,0);
`;

const VideoPlayer = styled.iframe`
  ${
    '' /* position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%; */
  }

  ${
    '' /* position: absolute;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  top: 50%;
  left: 50%; */
  }

  ${'' /* width: 100% */}
`;

const Test = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  -webkit-backface-visibility: hidden;
  outline: 1px solid transparent;
  ${'' /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */}
`;

const Video = ({ videoSrcURL, videoTitle, onLoad, loaded, ...props }) => {
  let opacity = 0;

  if (!loaded) {
    opacity = 1;
  }

  return (
    <VideoContainer>
      <Test>
        <VideoPlayer
          style={{
            transform: 'scale(1.5) translate(16%, 10%)',
            transition: 'opacity 500ms ease',
            opacity: opacity,
          }}
          onLoad={onLoad}
          src={videoSrcURL}
          title={videoTitle}
          // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allow="autoplay; fullscreen"
          frameBorder="0"
          // webkitallowfullscreen="true"
          // mozallowfullscreen="true"
          // allowFullScreen
          width="1920"
          height="1080"
        />
      </Test>
    </VideoContainer>
  );
};

export default Video;
