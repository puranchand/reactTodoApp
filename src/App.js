import React, { Component } from 'react';
import { updateValue } from './actions/Action';
import {connect} from 'react-redux';
import { Jumbotron, Button,Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      show:true,
      dropdownOpen: false,
    }
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


  handleClick = () =>{
     this.props.dispatch(updateValue('red'));
  }

  handleChange = () =>{
     this.props.dispatch(updateValue('green'));
  }

  handleYellow = () =>{
     this.props.dispatch(updateValue('#ffc107'));
  }

  handleGrey = () =>{
     this.props.dispatch(updateValue('#6c757d'));
  }



  render() {
    let {data} = this.props.data

    return (

      <div className="App" style={{background:data}}>
        <Jumbotron className='jumbotron'>

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.handleClick.bind(this)}>Red</DropdownItem>
          <DropdownItem onClick={this.handleChange.bind(this)}>Green</DropdownItem>
          <DropdownItem onClick={this.handleGrey.bind(this)}>Grey</DropdownItem>
          <DropdownItem onClick={this.handleYellow.bind(this)}>Yellow</DropdownItem>
        </DropdownMenu>
      </Dropdown>

        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
        
        <h4>{data}</h4>
        <p className="lead">
          
          {data !== 'red' ? 
            <Button color="danger"  onClick={this.handleClick.bind(this)}>Danger!</Button>
            :
            <Button color="primary" onClick={this.handleChange.bind(this)}>Learn More</Button>
          }
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
