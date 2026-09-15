
import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {

state ={
    // productName:'toshiba c3' ,
    // productPrice:6000

    products:[
    {id:1 , name:'oppo' , count:9 , price:9000 , onSale:false} ,
    {id:2 , name:'oppo reno' , count:5 , price:8000 , onSale:false} ,
    {id:3 , name:'toshiba' , count:9 , price:2000 , onSale:false} ,
    {id:4 , name:'samsung' , count:6 , price:6000 , onSale:false} ,
    {id:5 , name:'iphone' , count:20 , price:5000 , onSale:false}

    ]
};


render() {
    return <>
    <div className="container ">
        <div className=" row gy-s2">

    {this.state.products.map((product)=> <Child productInfo={product}/>)}

        </div>

    {/* <h4>Parent Component</h4> */}
    {/* <Child price={this.state.productPrice} productInfo={this.state.productName}/> */}
    




    </div>
    </>
    
    
    
}
}
