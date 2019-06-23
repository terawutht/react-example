import React from 'react'
import '../App.css'

const ButtonCol = ({name,isActive}) =>{
    return(
        <div className={`text-center ${(isActive)?'is-active-box':'box'}`}>{name}</div>
    )
}

export default ButtonCol