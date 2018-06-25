import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { updateValue } from './actions/Action';
import {connect} from 'react-redux';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      show:true
    }
  }

  handleClick = () =>{
    // this.props.dispatch(updateValue(true));
  }

  render() {

    let {data} = this.props
    console.log(data ,'data')
    return (
      <div className="App">
      <h4>Data is in console</h4>
      <button >Click it</button>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        data: state.reducer
    };
}

export default connect(mapStateToProps)(App);
