import React,{useEffect, useState} from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import { useSelector } from 'react-redux';

const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state)=> state.paste.pastes);
  const paste = allPastes.filter((p)=>p._id===id)[0];




  return (
    <div>
      <div className='flex flex-row gap-5 place-content-between'>
      <input
        className='p-1 rounded-2xl mt-2 w-[66%] pl-4'
        type='text'
        placeholder='Enter title here'
        value={paste.title}
        disabled
        onChange={(e)=>setTitle(e.target.value)}
      />

    </div>

    <div className='mt-7'>
      <textarea 
        className='rounded-2xl min-w-[500px] p-4'
        value={paste.content}
        placeholder='Enter Content Here'
        onChange={(e)=>setValue(e.target.value)}
        rows={20}
        disabled
      />

    </div>
    </div>
  )
}

export default ViewPaste
