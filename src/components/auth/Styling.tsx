import { Link } from "react-router-dom";
import styled from "styled-components";


//  Main div 
export const LoginContainer = styled.div`
  padding: 48px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 2000px;
  height: 100vh;
  transition: all 0.3s ease-in-out;
`

//  Wrapper 
export const LoginWrapper = styled.div`
  width: 25%;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 7px;
  padding: 50px 0;
  background: #edf5e1;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1407px){
    width: 30%;
  }
  @media screen and (max-width: 1215px) {
    width: 35%;
  }
  @media screen and (max-width: 1032px) {
    width: 45%
  }
  @media screen and (max-width: 768px) {
    width: 65%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`

// * Login Header * //
export const LoginH1 = styled.h1`
  font-weight: 400;
  text-align: center;
  margin-top: -4vh;
  color: #05386b;
`

// * Form */
export const LoginForm = styled.form`
  display: grid;
  grid-gap: 3vh;
  grid-template-columns: 90%;
  justify-content: center;
`

// * Input * //
export const LoginInput = styled.input`
  border-radius: 4px;
  border: thin solid #05386b;
`

// * Labels * //
export const LoginLabel = styled.label`
  margin-bottom: -5vh;
  color: #05386b;
`

// * Submit Button * //
export const LoginSubmit = styled.button`
  font-family: 'Open Sans', sans-serif;
  width: fit-content;
  margin: -1.5vh auto 0 auto;
  color: #edf5e1;
  background: #05386b;
  border: none;
  border-radius: 7px;
  box-shadow: 0 0 2px 1px rgba(5, 56, 107, 0.4);
  font-size: 1.1rem;
  padding: 3px 10px 5px 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #05386b;
    background: #5cdb95;
    box-shadow: 0 0 2px 1px rgba(92, 219, 149, 0.4);
  }
`

// new user
export const LoginP = styled.p`
  text-align: center;
  transition: all 0.3s ease-in-out;
  color: #05386b;
  @media screen and (max-width: 768px) {
    font-size: 0.85rem;
  }
`

// Sign up  
export const LoginRoute = styled(Link)`
  text-align: center;
  margin-top: -2.6vh;
  color: #379683;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #05386b;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.85rem;
  }
`


// * Main Div * //
export const SignupContainer = styled.div`
  padding: 21vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 2000px;
  height: 100vh;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1032px) {
    padding: 17vh 0;
  }
  @media screen and (max-width: 768px) {
    padding: 15vh 0;
  }
  @media screen and (max-width: 480px) {
    padding: 15vh 0;
  }
`

//  Wrapper 
export const SignupWrapper = styled.div`
  width: 35vw;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 7px;
  padding: 50px 0 30px 0;
  background: #edf5e1;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1407px){
    width: 35%;
  }
  @media screen and (max-width: 1215px) {
    width: 40%;
  }
  @media screen and (max-width: 1032px) {
    width: 50%
  }
  @media screen and (max-width: 768px) {
    width: 65%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`

// Signup Header 
export const SignupH1 = styled.h1`
  font-weight: 400;
  font-size: 1.7rem;
  text-align: center;
  margin-top: -4vh;
  color: #05386b;
`

// 
export const SignupForm = styled.form`
  display: grid;
  grid-gap: 2.5vh;
  grid-template-columns: 100%;
  justify-content: center;
`

//
export const SignupInput = styled.input`
  border-radius: 4px;
  border: thin solid #05386b;
`

// Labels 
export const SignupLabel = styled.label`
  margin-bottom: -2.5vh;
  font-size: 0.85rem;
  color: #05386b;
`

// Submit Button
export const SignupSubmit = styled.button`
  font-family: 'Open Sans', sans-serif;
  width: fit-content;
  margin: 0 auto;
  color: #edf5e1;
  background: #05386b;
  border: none;
  border-radius: 7px;
  box-shadow: 0 0 1px 1px rgba(5, 56, 107, 0.3);
  font-size: 0.85rem;
  padding: 3px 10px 4px 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #05386b;
    background: #5cdb95;
    box-shadow: 0 0 1px 1px rgba(92, 219, 149, 0.3);
  }
`

// Already have an account? 
export const SignupP = styled.p`
  font-size: 0.85rem;
  margin-top: 1vh;
  text-align: center;
  transition: all 0.3s ease-in-out;
`

// Login Here 
export const SignupRoute = styled(Link)`
  font-size: 0.85rem;
  text-align: center;
  margin-top: -2.3vh;
  color: #379683;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #05386b;
  }
`

// Role Switch
export const RoleDiv = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: -2.5vh;
  margin-bottom: -2vh;
  margin-left: -2.5vw;
`

export const RoleP = styled.p`
  color: #05386b;
  margin-left: 2.3vw;
`

export const SwitchDiv = styled.div`
  position: relative;
  margin-top: 1.2vh;
`

export const RoleSwitch = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 0.5vw;
  width: 32px;
  height: 16px;
  border-radius: 22px;
  background: #bebebe;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 13.5px;
    height: 13.5px;
    margin: 1.1px 1.1px 1.1px 1.4px;
    background: #fff;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
`

export const RoleCheck = styled.input`
  opacity: 0;
  z-index: 1;
  width: 32px;
  height: 16px;
  border-radius: 22px;
  &:checked + ${RoleSwitch} {
    background: #5cdb95;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 13.5px;
      height: 13.5px;
      margin-left: 17px;
      transition: 0.3s;
    }
  }
`