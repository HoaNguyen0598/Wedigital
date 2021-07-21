import React from 'react'

export default function ClickTop({...props}) {
    return (
        <svg {...props} width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.2" cx={25} cy={25} r={25} fill="#78C9FF" />
            <path d="M30.3137 20.6562L24.6569 14.9994L19 20.6562" stroke="#F7FAFF" />
            <line x1="24.675" y1={35} x2="24.675" y2={15} stroke="#F7FAFF" />
        </svg>
      
    )
}
