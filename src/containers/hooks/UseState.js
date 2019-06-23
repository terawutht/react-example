import React, { useState } from 'react'

const UseState = () => {

    const [count, setConut] = useState(1)
    const [color, setColor] = useState(['blue', 'red', 'green'])
    const [newColor, setNewColor] = useState('')
    const [showAlert,setShowAlert] = useState('')
    const [numColor,setNumColor] = useState(color.length)
    console.log('color', color)
    const addColor = () =>{
        if(newColor !== ''){
            setNewColor('')
            setColor([...color,newColor])
            setNumColor(color.length + 1) 
        }else{
            setShowAlert('กรุณาใส่ค่า')
            setTimeout(() => {
                setShowAlert('')
            }, 2000);
        }
    
    }

    const removeColor = i =>{
        color.splice(i,1)
        setColor(color)
        setNumColor(color.length) 
    }

    return (
        <div>
            <h5>Conut is {count}</h5>
            <button onClick={() => { setConut(count + 1) }}>+1</button>
            <h5 className={'mt-4'}>add new color</h5>
            <input type='text' placeholder='color' value={newColor || ''} onChange={(e) => { setNewColor(e.target.value) }} />
            <button onClick={() => addColor()}>add</button>
            <h6 className={'text-danger'}>{showAlert}</h6>
            <h5 className={'mt-4'}>Color List have {numColor} item</h5>
            <ul>
                {color.map((e,i) => {
                    return <li key={i}>{e} <button className={'btn btn-sm'} onClick={()=>removeColor(i)}>x</button></li>
                })}
            </ul>
        </div>
    )
}

export default UseState