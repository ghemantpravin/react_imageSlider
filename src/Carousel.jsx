import React, { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const images = [
    'https://images.unsplash.com/photo-1749741340022-434e924e8312?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1750779940698-f24b28d76fd9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1749741340022-434e924e8312?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

function Carousel() {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    function Prev(){
      setCurrent((prev) => (prev + 1) % length)
    }

    function Next(){  
      setCurrent((prev) => (prev - 1 + length) % length);
    }

  return (
    <div style={{margin : "auto", display : "table", width : "100%"}}>
          
            {
              images.map((values, index)=>{
                return (
                  <div key={index}>
                    {index === current && 
                    <img src={values} 
                    alt={`Slide ${index}`} 
                    style={{margin : "auto", display : "table", width : "50%"}}/>}
                  </div>
                )
              })
            }
            <div style={{margin : "auto", display : "table"}}>
              <button onClick={Prev}>
                prev
              </button>
              <button onClick={Next}>
                next
              </button>
              
          </div>
    </div>
  );
}

export default Carousel;
