import React, {Component} from 'react';
import Film from './Film.js';

class FilmList extends Component {
  render() {
    const listOfFilms = this.props.films.map((film, index) => {
      return <Film key={index} name={film.name} link={film.url} />
    });
    return (
      <>
        {listOfFilms}
      </>
    );
  }

}

export default FilmList;
