import React, {FC} from 'react';
import styled from '@emotion/styled';

// Assets
import logo from 'assets/images/POAP.svg';
import builtOnEth from 'assets/images/built-on-eth.png';
import twitter from 'assets/images/twitter-logo.svg';
import twitterHover from 'assets/images/twitter-logo-hover.svg';
import github from 'assets/images/github-logo.svg';
import githubHover from 'assets/images/github-logo-hover.svg';
import reddit from 'assets/images/reddit-logo.svg';
import redditHover from 'assets/images/reddit-logo-hover.svg';
import telegram from 'assets/images/telegram-logo.svg';
import telegramHover from 'assets/images/telegram-logo-hover.svg';
import discord from 'assets/images/discord-logo.svg';
import discordHover from 'assets/images/discord-logo-hover.svg';

// UI
import Container from 'ui/styled/Container';

// Constnats
import {BREAKPOINTS, FONT_SIZE} from 'lib/styles';

// Styled Components
const FooterWrapper = styled.footer`
  box-shadow: inset 0px 1px 0px var(--system-light-grey);
  display: flex;
  flex-direction: column;
  background: var(--system-white);
  z-index: 2;
  position: relative;
`;
const FooterContent = styled.div`
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  @media (max-width: ${BREAKPOINTS.xs}) {
    padding: 50px 0 0 !important;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 30px 24px 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    row-gap: 52px;
    column-gap: 10px;
  }
`;
const LogoContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  @media (max-width: ${BREAKPOINTS.sm}) {
    grid-area: 3 / 1 / 3 / 1;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }
  img {
    width: 59px;
    height: 78px;
    @media (min-width: ${BREAKPOINTS.sm}) {
      width: 49px;
      height: 65px;
    }
  }
`;
const AboutContainer = styled.div`
  grid-area: 1 / 1 / 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${BREAKPOINTS.sm}) {
    grid-area: 1 / 2 / 2 / 3;
    align-items: flex-start;
  }
  .about-list {
    list-style: none;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
    @media (min-width: ${BREAKPOINTS.sm}) {
      max-width: 400px;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(2, 1fr);
      column-gap: 48px;
      row-gap: 5px;
      padding: 0;
      margin: 0;
    }
    li {
      width: max-content;
      margin-bottom: 5px;
      @media (max-width: ${BREAKPOINTS.sm}) {
        padding: 0 30px;
        margin: 10px 0;
      }
    }
    a {
      text-decoration: none;
      color: var(--font-color-2);
      &:hover {
        color:var(--main-color);
      }
    }
  }
`;
const CommunityContainer = styled.div`
  grid-area: 2 / 1 / 2 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${BREAKPOINTS.sm}) {
    grid-area: 1 / 3 / 2 / 4;
    align-items: flex-end;
  }
  .social-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    a {
      height: 28px;
      width: 28px;
      display: inline-flex;
      margin: 8px;
      &:not(:last-child) {
        margin-right: 4px;
        @media (min-width: ${BREAKPOINTS.sm}) {
          margin-right: 8px;
        }
      }
      @media (min-width: ${BREAKPOINTS.sm}) {
        margin: 0px;
        height: 24px;
        width: 24px;
      }
    }
    .social-link {
      height: 100%;
      width: 100%;
      &.twitter {
        background: url(${twitter}) center / contain no-repeat;
        &:hover{
          background: url(${twitterHover}) center / contain no-repeat;
        }
      }
      &.github {
        background: url(${github}) center / contain no-repeat;
        &:hover{
          background: url(${githubHover}) center / contain no-repeat;
        }
      }
      &.telegram {
        background: url(${telegram}) center / contain no-repeat;
        &:hover{
          background: url(${telegramHover}) center / contain no-repeat;
        }
      }
      &.reddit {
        background: url(${reddit}) center / contain no-repeat;
        &:hover{
          background: url(${redditHover}) center / contain no-repeat;
        }
      }
      &.discord {
        background: url(${discord}) center / contain no-repeat;
        &:hover{
          background: url(${discordHover}) center / contain no-repeat;
        }
      }
    }
  }
`;
const BuiltContainer = styled.div`
  width: 100%;
  text-align: center;
  background: var(--grey-eth);
  img {
    height: 30px;
  }
`;
const Title = styled.h5`
  color: var(--main-color);
  font-family: var(--alt-font);
  font-size: ${FONT_SIZE.md};
  margin: 0 0 15px;
`;

const Footer: FC = () => (
  <FooterWrapper>
    <Container>
      <FooterContent>
        <LogoContainer>
          <img src={logo} alt={'POAP'}/>
        </LogoContainer>
        <AboutContainer>
          <Title>POAP Ecosystem</Title>
          <ul className="about-list">
            <li>
              <a
                href="https://www.poap.xyz/"
                className="text-subtitle2"
                target="_blank"
                rel="noreferrer"
              >
                poap.xyz
              </a>
            </li>
            <li>
              <a
                href="https://poap.fun/"
                className="text-subtitle2"
                target="_blank"
                rel="noreferrer"
              >
                poap.fun
              </a>
            </li>
            <li>
              <a
                href="https://poap.chat/"
                className="text-subtitle2"
                target="_blank"
                rel="noreferrer"
              >
                poap.chat
              </a>
            </li>
            <li>
              <a
                href="https://poap.gallery/"
                className="text-subtitle2"
                target="_blank"
                rel="noreferrer"
              >
                poap.gallery
              </a>
            </li>
            <li>
              <a
                href="https://poap.delivery/"
                className="text-subtitle2"
                target="_blank"
                rel="noreferrer"
              >
                poap.delivery
              </a>
            </li>
            <li>
              <a
                href="https://www.poap.xyz/"
                className="text-subtitle2"
                target="_blank"
                rel="noreferrer"
              >
                POAP App
              </a>
            </li>
          </ul>
        </AboutContainer>
        <CommunityContainer>
          <Title>Join our Community!</Title>
          <div className="social-container">
            <a
              href="https://twitter.com/poapxyz"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-link twitter"/>
            </a>
            <a
              href="https://github.com/poapxyz"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-link github"/>
            </a>
            <a
              href="https://t.me/poapxyz"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-link telegram"/>
            </a>
            <a
              href="https://discord.com/invite/9s8U8Bn"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-link discord"/>
            </a>
            <a
              href="https://www.reddit.com/r/poap/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-link reddit"/>
            </a>
          </div>
        </CommunityContainer>
      </FooterContent>
    </Container>
    <BuiltContainer>
      <img src={builtOnEth} alt={'Built on Ethereum'}/>
    </BuiltContainer>
  </FooterWrapper>
);

export default Footer;
