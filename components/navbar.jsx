import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  TextField,
  Container,
  Stack,
  Paper,
} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'

const navbar = () => {
  return (
    
    <div className='navbar'>
      <AppBar position="static" sx={{ backgroundColor: '#111827'}}>
        <Typography variant="h6" sx={{ flexGrow: 1,display:'flex', flexDirection:'row', gap:'2em' , placeContent:'space-evenly' }}>
      <span style={{ color: '#3B82F6' }}><NavLink
      to="/">
        Home
      </NavLink></span>

      <span><NavLink
      to="/pastes"
      >
        Pastes
      </NavLink>
      </span>
      </Typography>
      </AppBar>
    </div>
  )
}

export default navbar
