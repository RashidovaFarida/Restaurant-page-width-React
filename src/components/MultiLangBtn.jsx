import React from 'react';
import { useState } from 'react';
import {useTranslation} from "react-i18next";
import '../Languages/i18n'




const MultiLangBtn = () => {
  const[state,setState]=useState(true);
  const toggleLang=()=>{
    setState(!state)
  }



    const { i18n } = useTranslation();
      function handleClick(lang){
         i18n.changeLanguage(lang)
      }
  return (
    <div>
     <button onClick={function(event){handleClick('en');toggleLang()} } className={state ? " btn color-w ms-2 multiBtn" :"d-none" }>En</button>
    <button onClick={function(event){handleClick('az');toggleLang()}} className={state ? "  d-none" :"btn color-w ms-2 multiBtn" }>Az</button>

    </div>
  )
}

export default MultiLangBtn