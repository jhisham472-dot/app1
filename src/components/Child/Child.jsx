
import React, { Component } from 'react'

export default class Child extends Component {
render() {

let {name ,id , price , count}=this.props.productInfo;


    return <>
    <div className='col-md-3'>
        <div className="product border p-2">

    <h5>name:{name}</h5>
    <h5>id:{id}</h5>
    <h5>price:{price}</h5>
    <h5>count:{count}</h5>
        </div>
    {/* <h4>productName - from parent {this.props.productInfo}</h4>
        <h5>price: {this.props.price}</h5> */}




    </div>
    </>
    
    
}
}
