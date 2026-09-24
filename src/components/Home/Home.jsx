
import{useEffect, useState} from "react"

export default function Home()
{
    const [count , setCount] = useState(0);
    const [name , setName] = useState('');

    useEffect(()=>{
        console.log('component didMount')
        return ()=>{
            console.log('component will unMount');
        }
    } , [])
    





    useEffect(()=>{
        console.log('component didUpdate (count updated)')
    } , [count])



    function changeCount()
    {
        setCount(Math.random())
    }

    return<>
    <h4>Count : {count}</h4>
    <h1>Home</h1>
    <button className='btn btn-info my-2 w-100' onClick={changeCount}>change count</button>
    </>
    
}