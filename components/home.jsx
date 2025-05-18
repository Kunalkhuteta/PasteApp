import React from 'react'
import { useState } from 'react';
import './home.css'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../Slice/pasteSlice';
import { useEffect } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {
    AppBar,
    Toolbar,
    Typography,
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

const home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");

    const dispatch = useDispatch();

    const allPastes = useSelector((state) =>
        state.Paste.pastes
    )
    const handleCopy = () => {
        navigator.clipboard.writeText(value)
    }

    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) =>
                p._id === pasteId);

            setTitle(paste.title)
            setValue(paste.content);
        }
    }, [pasteId])

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            CreatedAt: new Date().toISOString(),
        }
        if (pasteId) {
            //update
            dispatch(updateToPaste(paste))
        }
        else {
            //create
            dispatch(addToPaste(paste));//sending some payload to the reducer 
        }
        setSearchParams({});//once created or updated then reset all for new creation or updation
        setTitle('')
        setValue('')
    }

    return (
        <div>
            <br />
            <div className='homediv'>
                <input className='inputCss' type="text"
                    placeholder='Enter Title Here'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />

                <Button variant="contained" sx={{ backgroundColor: '#3B82F6', mr: 2, borderRadius: '5px', border: '1px solid transparent', padding: '0.6em 1.2em', padding: '0.6em 1.2em', fontWeight: '500', fontFamily: 'inherit', cursor: 'pointer', transition: 'border-color 0.25s' }} onClick={createPaste}>
                    {
                        pasteId ? "Update My Paste" : "Create My Paste"
                    }
                </Button>
            </div>
            <div className='textAreaDiv'>
                <Container maxWidth="md" sx={{ mt: 4 }}>
                        <Stack spacing={3}>
                            <Paper elevation={3}>
                <Box
                    display="flex"
                    alignItems="center"
                    px={1}
                    py={0.5}
                    borderBottom="1px solid #ddd"
                    bgcolor="#f9fafb"
                    borderTopLeftRadius="4px"
                    borderTopRightRadius="4px"
                >
                    <FiberManualRecordIcon sx={{ color: '#f87171', fontSize: 14, mr: 0.5 }} />
                    <FiberManualRecordIcon sx={{ color: '#facc15', fontSize: 14, mr: 0.5 }} />
                    <FiberManualRecordIcon sx={{ color: '#4ade80', fontSize: 14 }} />
                    <Box flexGrow={1} />
                    <IconButton size="small" onClick={handleCopy}>
                        <ContentCopyIcon fontSize="small" />
                    </IconButton>
                </Box>
                <TextField
                              fullWidth
                              multiline
                              minRows={10}
                              placeholder="Paste your content here..."
                              value={value}
                              onChange={(e) => setValue(e.target.value)}
                              variant="standard"
                              
                            />
                            </Paper>
                                    </Stack>
                                  </Container>
            </div>


        </div>
    )
}

export default home
