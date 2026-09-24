import { Component} from "react";
import  Home  from "./Home/Home";
import { About } from "./About";
import Gallery from "./Gallery/Gallery";
import Parent from "./Parent/Parent";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Layout/Layout";
import NotFound from "./NotFound/NotFound";
import Web from "./Web/Web";
import Mobile from "./Mobile/Mobile";

let routers = createBrowserRouter([
  {path:'/' , element:<Layout/> ,errorElement:<NotFound/> , children:[
    {index:true , element:<Home/>} , 
    {path:'about' , element:<About/>} , 
    {path:'gallery' , element:<Gallery/> , children:[
      {path:'web' , element:<Web/> },
      {path:'mobile' , element:<Mobile/> }

    ]} , 
    {path:'parent' , element:<Parent/>} , 
    {path:'*' , element:<NotFound/>} , 
    

  ]}
])




    export default class App extends Component
    {
    state={}



    render(){
    return <RouterProvider router={routers}/>;
    }

  }



      
      
      
      






    