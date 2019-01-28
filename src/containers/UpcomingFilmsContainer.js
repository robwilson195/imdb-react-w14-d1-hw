import React, {Component} from 'react';
import FilmList from '../components/FilmList.js';
import MoreReleases from '../components/MoreReleases';

class UpcomingFilmsContainer extends Component{

  render() {
    return(
      <>
      <h1>Upcoming Film Releases for UK</h1>

      <FilmList films = {this.props.films} />
      <MoreReleases />
      </>
    )
  }

}

export default UpcomingFilmsContainer;
