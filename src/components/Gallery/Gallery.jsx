
import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
        <li> <Link to='web'>Web</Link>   </li>
        <li> <Link to='mobile'>Mobile</Link>   </li>
      </ul>
    </div>
    <div className="col-md-10">
      <Outlet></Outlet>

      
    </div>
  </div>

  

  </>
}




}
