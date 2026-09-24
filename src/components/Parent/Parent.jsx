
import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {

state ={
    // productName:'toshiba c3' ,
    // productPrice:6000

    products:[
    {id:1 , name:'oppo' , count:9 , price:9000 , onSale:false } ,
    {id:2 , name:'oppo reno' , count:5 , price:8000 , onSale:true} ,
    {id:3 , name:'toshiba' , count:9 , price:2000 , onSale:false} ,
    {id:4 , name:'samsung' , count:6 , price:3000 , onSale:true} ,
    {id:5 , name:'iphone' , count:20 , price:5000 , onSale:true} ,
    {id:6 , name:'hawawi' , count:25 , price:6000 , onSale:true} ,
    {id:7 , name:'iphone' , count:30 , price:2500 , onSale:false} ,
    {id:8 , name:'hawawi' , count:19 , price:4000 , onSale:true} ,
    {id:9 , name:'hawawi' , count:10 , price:7000 , onSale:false}




    ]
};

x;


deleteProduct = (productId) =>
{

// 1- deep copy state
// let products =[...this.state.products];
// products.splice(productIndex , 1)
// this.setState({products})

let myProducts = this.state.products.filter((product)=>product.id !== productId);
this.setState({products:myProducts});




//2- action copy
// myProducts = products.filter((product)=>product.id !== productId);
// this.setState({products:myProducts})









    // this.state.products.filter((product)=>product.id !== productId);
    // console.log(`Delete ${productId}` );

}



updateCount =(productId)=>{
let myProducts = this.state.products.map((product) =>
product.id === productId ? {...product , count: product.count +1} : product) ;
this.setState({products:myProducts});







// let myProducts =[...this.state.products];
// myProducts[productIndex].count++;
// this.setState({products:myProducts});


    // console.log('update')
}



componentDidMount()
{
   this.x = setInterval(()=>{
        console.log('Hello....')
    } , 500)
    console.log('parent componentDidMount call');
}

componentDidUpdate()
{
    console.log('parent componentDidUpdate call');
}

componentWillUnmount()
{

    console.log('parent componentWillUnmount call');
    clearInterval(this.x);
}













render() {
    return <>
    <div className="container bg-dark py-2 ">
        <div className=" row gy-s2">

    {/* {this.state.products.filter((product)=>product.onSale == true).map ((product)=> <Child delete={this.deleteProduct}  productInfo={product}/>)} */}
    {/* {this.state.products.filter((product)=>product.onSale == false).map ((product)=> <Child productInfo={product}/>)} */}




    {this.state.products.map ((product)=> <Child   update={this.updateCount}  productIndex={product.id}   delete={this.deleteProduct}   productInfo={product}/>)}

        </div>

    {/* <h4>Parent Component</h4> */}
    {/* <Child price={this.state.productPrice} productInfo={this.state.productName}/> */} 
    




    </div>
    </>
    
    
    
}
}
