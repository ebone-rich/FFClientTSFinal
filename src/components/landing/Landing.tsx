
import React from "react";
import { AppProps } from "../../App";
import APIURL from "../helpers/environments";
import { ListingCards } from "../ReusableElements";
import { Banner, BannerButton, BannerH1, BannerP, LandingContainer, LandingWrapper } from './LandingElements'
import LandingMap from "./LandingMap";

export type LandingProps = {
  sessionToken: AppProps['sessionToken'],
  setPrevPath: AppProps['setPrevPath'],
}

export type LandingState = {
  results: {
    id: string,
    name: string,
    image: string,
    
  }[],
  _isMounted: boolean,
}

class Landing extends React.Component<LandingProps, LandingState> {
  constructor(props: LandingProps) {
    super(props)

    this.state = {
      results: [{
        id: '',
        name: '',
        image: '',
       
      }],
      _isMounted: false,
    }
  }

  fetchPet = async ():Promise<void> => {
    await fetch(`${APIURL}/listing/`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(res => {
      this.state._isMounted && this.setState({
        results: [...res]
      })
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.setState({
      _isMounted: true
    });
    this.props.setPrevPath('/');
    this.fetchListings();
  }

  componentWillUnmount() {
    this.setState({
      _isMounted: false
    });
  }

  render(): React.ReactNode {
    return (
      <LandingContainer>
        {!localStorage.getItem('Authorization') && 
          <Banner>
            <BannerH1>Let's Find Your New Fur Friend!</BannerH1>
            <BannerButton to='/login'>Search FurFriends</BannerButton>
          </Banner>
        }
        <LandingWrapper sessionToken={this.props.sessionToken}>
          <ListingCards>
            {this.state.results && <LandingMap results={this.state.results} />}
          </ListingCards>
        </LandingWrapper>
      </LandingContainer>
    )
  }
}

export default Landing;
