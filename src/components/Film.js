import React, {Component, Fragment} from 'react';

class Film extends Component {

  render(){
    return(
      <Fragment>
      <p><a href={this.props.link}>{this.props.name}</a></p>
      </Fragment>
    )
  }

}

export default Film;
