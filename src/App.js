import React, { Component } from 'react';
import './App.css';
import { updateValue } from './actions/Action';
import {connect} from 'react-redux';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      show:true,
    }
  }

  handleClick = () =>{
     this.props.dispatch(updateValue('red'));
  }

  handleChange = () =>{
    let {data} = this.props.data
     this.props.dispatch(updateValue('green'));
  }



  render() {
    let {data} = this.props.data

    return (

      <div className="App" style={{background:data}}>
      
        <h4>{data}</h4>

        {data !== 'red' ? 
          <button onClick={this.handleClick.bind(this)}>Click it</button>
          :
          <button onClick={this.handleChange.bind(this)}>Click it</button>
        }

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
