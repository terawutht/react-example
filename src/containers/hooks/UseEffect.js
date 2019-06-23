import React, { useState, useEffect } from 'react';


function UseEffect() {
  const [count, setCount] = useState(0);
  const [countRender,setCountRender] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {     
    // Update the document title using the browser API
       document.title = `You clicked ${count} times`;
  },{});

//  setCountRender(countRender + 1)
  console.log('countRender >>>',countRender)

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>Conponent render is  {countRender} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default UseEffect