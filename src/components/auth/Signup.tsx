import React from 'react';
import { Navigate } from 'react-router-dom';
import APIURL from '../helpers/environments';
import { AppProps } from '../../App';
import { SignupContainer, SignupForm, SignupInput, SignupLabel, SignupSubmit, SignupWrapper, SignupRoute, SignupP, SignupH1, RoleSwitch, RoleCheck, SwitchDiv, RoleDiv, RoleP } from './AuthElements';
// import { signupValidation } from '../helpers/FormValidation';

//TODO: Need to set up form validation

type Role = 'primary' | 'secondary';

export type SignupProps = {
  sessionToken: AppProps['sessionToken'],
  prevPath: AppProps['prevPath'],
  updateToken: AppProps['updateToken'],
  setSessionToken: AppProps['setSessionToken'],
}

export type SignupState = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  role: Role,
  firstNameErr: string,
  lastNameErr: string,
  emailErr: string,
  emailRegex: RegExp,
  passErr: string,
  passRegex: RegExp,
  confirmPassErr: string,
  user: string,
  _isMounted: boolean
}

class Signup extends React.Component<SignupProps, SignupState> {

  constructor(props: SignupProps) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'secondary',
      firstNameErr: '',
      lastNameErr: '',
      emailErr: '',
      emailRegex: /()/,
      passErr: '',
      passRegex: /()/,
      confirmPassErr: '',
      user: '',
      _isMounted: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.changeRole = this.changeRole.bind(this);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  changeRole = () => {
    if(this.state.role === 'primary') {
      this.setState({
        role: 'secondary'
      })
    } else {
      this.setState({
        role: 'primary'
      })
    }
  }

  registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await fetch(`${APIURL}/user/register`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          role: this.state.role,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
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
      this.state._isMounted && this.setState({
        user: json.user.id
      });
      this.state._isMounted && this.props.updateToken(json.sessionToken);
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
        <SignupContainer>
          <SignupWrapper>
            <SignupH1>Sign Up</SignupH1>
            <SignupForm onSubmit={this.registerUser}>
              <SignupLabel htmlFor='firstName'>First Name</SignupLabel>
              <SignupInput type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} />
              <SignupLabel htmlFor='lastName'>Last Name</SignupLabel>
              <SignupInput type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
              <SignupLabel htmlFor='email'>Email</SignupLabel>
              <SignupInput type='text' name='email' value={this.state.email} onChange={this.handleChange}/>
              <SignupLabel htmlFor='password'>Password</SignupLabel>
              <SignupInput type='password' name='password' value={this.state.password} onChange={this.handleChange}/><SignupLabel htmlFor='lastName'>Confirm Password</SignupLabel>
              <SignupInput type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange}/>
              <RoleDiv>
                <RoleP>User</RoleP>
                <SwitchDiv>
                  <RoleCheck id='role' type='checkbox' onChange={this.changeRole}/>
                  <RoleSwitch htmlFor='role'/>
                </SwitchDiv>
              </RoleDiv>
              <SignupSubmit type='submit'>Submit</SignupSubmit>
            </SignupForm>
            <SignupP>Already a FurFriend?</SignupP>
            <SignupRoute to='/login'>Login here!</SignupRoute>
          </SignupWrapper>
          {this.state.user !== '' && <Navigate to={this.props.prevPath} replace={true}/>}
        </SignupContainer>
      )
  }
}

export default Signup;
