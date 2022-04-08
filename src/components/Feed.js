import Footer from './Footer';
import React from 'react';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  FadeOut,
} from 'react-scroll-motion';

function Feed() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
      <ScrollContainer>
        <ScrollPage page={0}>
          <div id="home">
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <span style={{ fontSize: '40px' }}>👋Hi, I'm Maciej Zygmunt</span>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: '40px' }}>👨‍💻Web Front-end Developer</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <div id="skills">
            <Animator animation={FadeUp}>
              <span style={{ fontSize: '40px' }}>🤹Skills:</span>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage page={3}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <span
              style={{
                fontSize: '40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Animator animation={MoveIn(-1000, 0)}>HTML5</Animator>
              <Animator animation={MoveIn(1000, 0)}>CSS3</Animator>
              <Animator animation={MoveIn(-1000, 0)}>React.js</Animator>
              <Animator animation={MoveIn(1000, 0)}>Redux</Animator>
              <Animator animation={MoveIn(-1000, 0)}>React Router</Animator>
              <Animator animation={MoveIn(1000, 0)}>Styled Components</Animator>
              <Animator animation={MoveIn(-1000, 0)}>Git</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(FadeIn(), Sticky(), FadeOut())}>
            <span style={{ fontSize: '40px' }}>Done</span>
            <br />
            <span style={{ fontSize: '30px' }}>
              There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <div id="contactme">
        <Footer />
      </div>
    </>
  );
}

export default Feed;
