import { Component} from "react";
import { Home } from "../components/Home";
import { About } from "../components/About";
import Gallery from "./Gallery/Gallery";
import Parent from "./Parent/Parent";


    export default class App extends Component
    {
    state={}



    render(){
    return <>
      <Parent/>
      <Home/>
      <About/>
      <Gallery/>
        <h1>App component??</h1>
        <h2>web design</h2>
        </>
    
    }
}