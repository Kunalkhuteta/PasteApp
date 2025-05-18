
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './paste.css'
import { removeFromPaste } from '../Slice/pasteSlice'
import toast from 'react-hot-toast'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import ShareIcon from '@mui/icons-material/Share'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {
  Typography,
  Box,
} from '@mui/material'



const paste = () => {
    const Paste=useSelector((state)=>
        state.Paste.pastes
    )
    const [searchTerm, setSearchTerm]=useState("");

    const dispatch=useDispatch();


    //here filter that  for every paste title condition works and finding the serachedterm value found in the pastes
    const filteredData=Paste.filter((Paste)=>
        Paste.title.toLowerCase().includes(searchTerm.toLowerCase()))

    function handleDelete(pasteId){
        dispatch(removeFromPaste(pasteId))
    }

  return (
    <div>
      <input className='pastecss'
        type='search'
        placeholder='search here'
        value={searchTerm}
        onChange={(e)=>{
            setSearchTerm(e.target.value)
        }}
      />
        <div className='p'>
            {
            filteredData.length > 0 && filteredData.map(
                (Paste)=>{
                    return (
                       <div className='pc' key={Paste?._id}>
                            <div>
                                {Paste.title}
                            </div>
                            <div>
                                {Paste.content}
                            </div>
                            <div className='IC'>
                                <button>
                                    <a href={`/?pasteId=${Paste?._id}`}>
                                        <EditIcon />
                                    </a>
                                </button>
                                <button>
                                    <a href={`/pastes/${Paste?._id}`}>
                                    <VisibilityIcon /></a>
                                </button>
                                <button onClick={()=>handleDelete(Paste?._id)}>
                                    <DeleteIcon />
                                </button>
                                <button onClick={()=>{
                                    navigator.clipboard.writeText(Paste?.content)
                                    toast.success("Copied To Clipboard")
                                }}>
                                    <ContentCopyIcon />
                                </button>
                                <button>
                                    <ShareIcon />
                                </button>
                            </div>
                            <div>
                                
                               <span> <Box mt={2} sx={{ display:'flex' , flexDirection:'row',justifyContent:'center'}}>
 <Typography variant="body2" color="text.secondary" sx={{ backgroundColor:'gray', width:'250px', display:'flex', flexDirection:'row', justifyContent:'center', justifyItems:'center'}}>
    📅 {' '}
    {new Date(Paste.CreatedAt).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
      
    })}
  </Typography>
</Box></span>
                                </div>
                       </div>
                    )
            })
    }
        </div>
    </div>
  )
}

export default paste
