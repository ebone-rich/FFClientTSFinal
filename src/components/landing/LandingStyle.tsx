mport { Link } from "react-router-dom";
import styled from "styled-components";
import { LandingProps } from "./Landing";

type Props = {
  sessionToken: LandingProps['sessionToken'],
}

export const LandingContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
`

export const LandingWrapper = styled.div<Props>`
  max-width: 100%;
  margin-top: ${props => (props.sessionToken === '' ? '0' : '10rem')};
  transition: margin-top 0.3s ease-in-out;
  padding: 0 50px;
  @media screen and (max-width: 1215px) {
    margin-top: ${props => (props.sessionToken === '' ? '0' : '9.5rem')};
  }
  @media screen and (max-width: 1032px) {
    margin-top: ${props => (props.sessionToken === '' ? '0' : '8rem')};
  }
  @media screen and (max-width: 768px) {
    margin-top: ${props => (props.sessionToken === '' ? '0' : '6.5rem')};
  }
  @media screen and (max-width: 480px) {
    margin-top: ${props => (props.sessionToken === '' ? '0' : '6.5rem')};
  }
`

export const Banner = styled.div`
  position: relative;
  left: calc(-50vw + 50%);
  margin-top: 4rem;
  width: 100vw;
  padding: 0.5rem 0 1.4rem 0;
  background: #05386b;
  color: #edf5e1;
  text-align: center;
  @media screen and (max-width: 1407px) and (min-width: 1216px) {
    margin-top: 7.5rem;
  }
  @media screen and (max-width: 1215px) and (min-width: 1033px) {
    margin-top: 6.5rem;
  }
  @media screen and (max-width: 1032px) and (min-width: 769px) {
    margin-top: 5rem;
  }
`

export const BannerH1 = styled.h1`
  font-weight: 400;
  transition: 0.2s ease-in-out;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const BannerP = styled.p`
  font-weight: 300;
  transition: 0.2s ease-in-out;
  margin-bottom: 2rem;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`

export const BannerButton = styled(Link)`
  text-decoration: none;
  width: fit-content;
  color: #05386b;
  background: #5cdb95;
  padding: 4px 8px 4px 8px;
  border: solid 2px #5cdb95;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px rgba(92, 219, 149, 0.5);
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #8ee4af;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`