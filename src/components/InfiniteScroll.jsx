import React, { useState } from 'react'

const InfiniteScroll = () => {
  const[data,setData] = useState([...Array(25).fill(0)]);
  const THRESHOLD = 20;
  const loadMore = () =>{
     setTimeout(()=>{
      setData((prev)=>[...prev,...Array(15).fill(0)]);
     },1000)
  }
  const scrollHandler = (e) =>{
    const clientHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    const scrollHeight = e.target.scrollHeight;
    if(THRESHOLD>=scrollHeight-clientHeight-scrollTop){
      loadMore();
    }
  }
  return (
    <div onScroll={scrollHandler} style={{backgroundColor:"green",height:"300px",width:"100%",overflow:"auto"}}>
       {
        data.map((__,index)=>{
          return <div style={{backgroundColor:index%2==0?"red":"yellow"}}>{index+1}</div>
        })
       }
    </div>
  )
}

export default InfiniteScroll
