
import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'

export default class Gallery extends Component {


state = {
  count:0
}


changeCount = ()=>
{
  this.setState({count : Math.random()})
}

render(){
  return<>

  <div className="row">
    <div className="col-md-2">
      <ul>
        <li> <link to='web'>Web</link>   </li>
        <li> <link to='mobile'>Mobile</link>   </li>
      </ul>
    </div>
    <div className="col-md-10">
      <Outlet></Outlet>

      
    </div>
  </div>

  

  </>
}




}
