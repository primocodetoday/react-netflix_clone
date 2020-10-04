import React from 'react';
import { Jumbotron } from 'components';
import jumboData from 'constants/jumboData.json';

// TODO add download animation in mobile section of jumbotron

const StorySection = () => {
  return (
    <>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.CardText>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.CardText>
          <Jumbotron.CardImg>
            <Jumbotron.CardAnimation>
              <Jumbotron.Image src={item.image} alt={item.alt} />
              {item.animation && (
                <Jumbotron.Animation
                  maxHeight={item.animationParams.maxHeight}
                  maxWidth={item.animationParams.maxWidth}
                  top={item.animationParams.top}
                  left={item.animationParams.left}
                >
                  <Jumbotron.Video
                    loop
                    muted
                    playinline
                    autoPlay
                    src={item.animation}
                    type="video/m4v"
                  />
                </Jumbotron.Animation>
              )}
            </Jumbotron.CardAnimation>
          </Jumbotron.CardImg>
        </Jumbotron>
      ))}
    </>
  );
};

export default StorySection;
