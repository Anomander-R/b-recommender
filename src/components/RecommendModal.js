import React, { useEffect, useState } from 'react';
import {Button, Box, Typography, Modal, RecommendedBook} from '.';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function RecommendModal({book, randomNumber, setRandomNumber}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    useEffect(()=>{
        if (randomNumber > -1) {
            setOpen(true);
          } 
    },[randomNumber])
  

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelled-by="modal-modal-title"
        aria-described-by="modal-modal-description"
      >
        <Box sx={style}>
        <RecommendedBook
            book={book}
            randomNumber={randomNumber}
            setRandomNumber={setRandomNumber}
        /> 
        </Box>
      </Modal>
    </div>
  );
}
