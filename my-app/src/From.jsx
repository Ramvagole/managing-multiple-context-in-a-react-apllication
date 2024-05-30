import { useContext, useRef } from "react"
import { data1 } from "./Deep"
export function Display(){
    let tit=useRef()
    let auth=useRef()
    let {data,fetchData,flame,set}=useContext(data1)
    function clear(i){
        fetch(`http://localhost:3000/posts/${i}`,{
            method:"DELETE"
        }).finally(fetchData())
    }
    function update(){
        let a=tit.current.value
        let b=auth.current.value
        let d={title:a,author:b}
        fetch(`http://localhost:3000/posts`,{
            method:"POST",
            body:JSON.stringify(d)
        }).then((res)=>{console.log(res)}).finally(
            fetchData()
        )
    }
    function changeColor(i){
        if(i){
            set(false)
        }else{
            set(true)
        }
    }
    return(
        <div style={{backgroundColor:!flame?"red":"white"}}>
            <button onClick={()=>{changeColor(flame)}}>Dark/Light</button>
            <form onSubmit={update}>
                <input  ref={tit} placeholder="Enter title name" />
                <input  ref={auth} placeholder="enter author name" />
                <input type="submit"/>
            </form>
            {
                data.map((v,i)=>{
                    return(
                        <div key={i}>
                            <h1>Title:{v.title}</h1>
                            <h1>Author:{v.author}</h1>
                            <button onClick={()=>{clear(v.id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}