import React from "react";
import { LandingState } from "./Landing";
import { ListingCard, ListingH1, ListingImg, ListingPrice, ListingTagContainer, ListingTag, RouteLink } from "../ReusableElements";

type MapState = {
  divClicked: boolean,
  _isMounted: boolean,
}

type MapProps = {
  results: LandingState['results'],
}

class LandingMap extends React.Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props)

    this.state = {
      divClicked: false,
      _isMounted: false,
    }

    this.mapListings = this.mapListings.bind(this);
  }

  mapListings = () => {
    return (
      this.state._isMounted && this.props.results.map((listing): JSX.Element => {
        return (
          <RouteLink href={`/listing/${listing.id}`} key={listing.id}>
            <ListingCard onClick={() => this.setState({divClicked: true})}>
              <ListingH1>{listing.title}</ListingH1>
              <ListingImg src={listing.image} />
              <ListingPrice>${listing.price} USD</ListingPrice>
              <ListingTagContainer>
              {/* <ListingTag src=""/> */}
              </ListingTagContainer>
            </ListingCard>
          </RouteLink>
        )
      })
    )
  }

  componentDidMount() {
    this.setState({
      _isMounted: true,
    });
  }

  componentWillUnmount() {
    this.setState({
      _isMounted: false,
    });
  }

  render(): React.ReactNode {
    return (
      <>
        {this.props.results && this.mapListings()}
      </>
    )
  }
}

export default LandingMap;