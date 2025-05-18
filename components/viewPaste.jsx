import React from 'react'
import { useState } from 'react';
import './home.css'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../Slice/pasteSlice';
import { useEffect } from 'react';
import './viewPaste.css'

const viewPaste = () => {

    const {id}=useParams();
    const allPastes=useSelector((state)=>state.Paste.pastes);

    const paste=allPastes.filter((p)=>p._id===id)[0];

  return (
   <div><br />
     <div className='homediv'>
      
      <input className='inputCss'type="text" 
        disabled
        placeholder='enter title here'
        value={paste.title}
        onChange={(e)=>{
            setTitle(e.target.value);
        }}
      />
      
    </div>
    <div className='textAreaDiv'>
        <textarea 
        disabled
        value={paste.content}
        placeholder="enter content here"
        onChange={(e)=>{
            setValue(e.target.value)
        }}
        rows={20}
        />
    </div>
   </div>
  )
}

export default viewPaste
