
import React, { Component } from 'react'

export default class Child extends Component {
render() {

let {name ,id , price , count , onSale}=this.props.productInfo;
// console.log(this.props);


    return <>
    <div className='col-md-3'>
        <div className="product bg-white p-2 position-relative">

    <h5>name:{name}</h5>
    <h5>id:{id}</h5>
    <h5 className={price>5000?'text-danger' : ''}>   price:{price}</h5>
    <h5>count:{count}</h5>
    {onSale==true? <div className="sale bg-danger p-1 text-white position-absolute top-0 end-0">Sale </div> :''}
    <button onClick={()=>this.props.delete(this.props.productIndex)} className='btn btn-outline-danger  btn-sm w-100'>Delete</button>
    <button onClick={()=>this.props.update(this.props.productIndex)} className='btn btn-outline-danger  btn-sm w-100'>+</button>


        </div>
    {/* <h4>productName - from parent {this.props.productInfo}</h4>
        <h5>price: {this.props.price}</h5> */}




    </div>
    </>
    
    
}
}
