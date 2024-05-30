import { createContext, useEffect, useState } from "react";
export let data1=createContext()
export function TodoList({children}){
    let [data,setval]=useState([])
    let [flame,set]=useState(false)
    function fetchData(){
        fetch("http://localhost:3000/posts").then((res)=>res.json()).then((res)=>{setval(res)})
    }
    useEffect(()=>{
        fetchData()
    },[])

    return(
        <data1.Provider value={{data,fetchData,flame,set}}>
            {children}
        </data1.Provider>
    )
    
}