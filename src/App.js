import React, { Component } from 'react';
import { updateValue } from './actions/Action';
import {connect} from 'react-redux';
import { Jumbotron, Button } from 'reactstrap';


class App extends Component {


  handleClick = () =>{
     this.props.dispatch(updateValue('Puran'))
  }



  render() {
    let {data} = this.props.data

    return (

      <div className="App">
      
        <Jumbotron>
        <h1 className="display-3">Hello, {data}!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary" onClick={this.handleClick}>Learn More</Button>
        </p>
      </Jumbotron>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        data: state.reducersdata
    };
}

export default connect(mapStateToProps)(App);
