import React, {useState}from 'react'
import night from '../img/night.webp'
import light from '../img/sunny.webp'
const ModeBtn = ({ color, setColor }) => {
    const [state,setState] = useState(false);
    const switchColor = () => {
        (setState(!state))
        setColor(color === 'light' ? 'dark' : 'light');  
   
      
    }
  return (
    <div>
      <button id='lightMode' onClick={switchColor} className={(state ? "lightMode" :"darkMode")}><img src={ (state ? light : night)}  className={(state ? "lightMode" :"darkMode")} alt="" /></button>
    </div>
  )
}

export default ModeBtn