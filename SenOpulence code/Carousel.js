import React, { useState } from 'react'
import pic1 from "./pictures/bgimg1.jpg";
import pic2 from "./pictures/bgimg2.jpg";
import pic3 from "./pictures/bgimg3.jpg";
const Carousel = () => {
const [image, setImage]=useState(pic1)
const styleImg={
    width:"99.5vw",
    height:"45vw"
}
const arr=[
    pic1,pic2,pic3
]
let j=0;
const fun=()=>{

while(0){       
    for(var i=0;i<=10000;i++)
       {
        i=i+1;
        console.log(i);
       }
       setImage(arr[j]);
    console.log(image);
       if(j===2)
       {
        j=0;
        console.log(j);
       }
       j=j+1;
       console.log(j);}
}

let i=0;
  return (
    <div>
        <div className='img1'>
            <img style={styleImg} src={image}></img>
        </div>
        <button id="randi">clicked me</button>
    </div>
  )
}
export default Carousel