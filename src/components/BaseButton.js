import React from 'react'
import './BaseButton.css'


const STYLES=[
    'btn--primary',
    'btn--empty',
    'btn--onbanner'
]

const SIZES=[
    'btn--medium',
    'btn--small'
]


export const BaseButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize

})=>{
    const chceckButtonStyle = STYLES.includes(buttonStyle)?buttonStyle :STYLES[0];

    const chceckButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <button className={`btn ${chceckButtonStyle} ${chceckButtonSize}`} onClick={onClick}
        type={type}>
            {children}
            </button>
        
    )
}