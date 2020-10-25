import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar';


export default class data extends Component {

   constructor(props){
      super(props);

      this.state = {
        search_value : ''
      };
    }

    handleParentData = (formModel) => {
      console.log(formModel);

      this.setState({...formModel});
    }


  render() {
    return (
        <div>
         
          <Navbar handleData={this.handleParentData}/>
          <p>{this.state.searchParams}</p>  
      
        
        </div>
    )
  }
}
