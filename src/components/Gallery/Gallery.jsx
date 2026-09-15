
import React, { Component } from 'react'

export default class Gallery extends Component {

state ={
  productName:'toshiba c3' ,
};
welcome()
{
  return `welcome user`;
}


  render() {
    return <>
    <h4 className='bg-danger'>{this.state.productName}    <i className='fas fa-home'></i></h4>   
    <h5>{ this.welcome()}</h5>
    </>
  }
}
