import React from 'react';
import { Navigate} from 'react-router-dom';
import { AppProps } from '../../App';
import APIURL from '../helpers/environments';
import {LoginContainer, LoginForm, LoginH1, LoginInput, LoginLabel, LoginP, LoginRoute, LoginSubmit, LoginWrapper} from './AuthElements';

//TODO: Need to set up form validation

export type LoginProps = {
  sessionToken: AppProps['sessionToken'],
  prevPath: AppProps['prevPath'],
  updateToken: AppProps['updateToken'],
  setSessionToken: AppProps['setSessionToken'],
}

type LoginState = {
  email: string,
  password: string,
  loginErr: string,
  user: string,
  _isMounted: boolean,
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props)

    this.state = {
      email: '',
      password: '',
      loginErr: '',
      user: '',
      _isMounted: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  // ** FETCH ** //
  loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch(`${APIURL}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        }
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      this.props.updateToken(json.sessionToken);
      this.props.setSessionToken(json.sessionToken)
      this.setState({
        user: json.user.id
      });
    })
    .catch(error => console.log(error))
  }
  
  componentDidMount() {
    this.setState({
      _isMounted: true
    })
  }

  componentWillUnmount() {
    this.setState({
      _isMounted: false
    })
  }

  render(): React.ReactNode {
      return (
        <LoginContainer>
          <LoginWrapper>
            <LoginH1>Login</LoginH1>
            <LoginForm onSubmit={this.loginUser}>
              <LoginLabel>Email</LoginLabel>
              <LoginInput type='email' name='email' value={this.state.email} onChange={this.handleChange}/>
              <LoginLabel>Password</LoginLabel>
              <LoginInput type='password' name='password' value={this.state.password} onChange={this.handleChange} />
              <LoginSubmit type='submit'>Login</LoginSubmit>
            </LoginForm>
            <LoginP>New to Meal Prep Market?</LoginP>
            <LoginRoute to='/register'>Sign up here!</LoginRoute>
          </LoginWrapper>
          {this.state.user !== '' && <Navigate to={this.props.prevPath} replace={true}/>}
        </LoginContainer>
      )
  }
}



export default Login;

