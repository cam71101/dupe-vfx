import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const VideoPlayer = styled.iframe`
  position: absolute;
  width: 70rem;
  height: 100%;
  transform: scale(1.07) translate(-250px);
  @media ${({ theme }) => theme.tablet} {
    width: 90rem;
    transform: scale(1.07) translate(-210px);
  }
  @media ${({ theme }) => theme.laptop} {
    width: 100%;
    transform: scale(1.07);
  }
`;

const BcorpVideoPlayer = styled(VideoPlayer)`
  transform: scale(1.2) translate(-250px);
  @media ${({ theme }) => theme.tablet} {
    width: 90rem;
    transform: scale(1.2) translate(-210px);
  }
  @media ${({ theme }) => theme.laptop} {
    width: 100%;
    transform: scale(1.07);
  }
`;

const Video = ({ videoSrcURL, videoTitle, onLoad, loaded, bCorp }) => {
  let opacity = 0;

  if (!loaded) {
    opacity = 1;
  }

  return (
    <VideoContainer>
      {!bCorp ? (
        <VideoPlayer
          style={{
            transition: 'opacity 500ms ease',
            opacity: opacity,
          }}
          onLoad={onLoad}
          src={videoSrcURL}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allow="autoplay; fullscreen"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          width="1920"
          height="1080"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      ) : (
        <BcorpVideoPlayer
          style={{
            transition: 'opacity 500ms ease',
            opacity: opacity,
          }}
          onLoad={onLoad}
          src={videoSrcURL}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allow="autoplay; fullscreen"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          width="1920"
          height="1080"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
      )}
    </VideoContainer>
  );
};

export default Video;
