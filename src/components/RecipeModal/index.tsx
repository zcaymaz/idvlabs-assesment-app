import React, { useState } from 'react'
import { Typography, IconButton, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { StyledBox, StyledCard, StyledInput, StyledModal, StyledTypography, StyledButton } from './styled';
import axios from 'axios'

function RecipeModal () {
  const [modal, setModal] = useState({
    id: 0, title: '', description: ''
})

const onChangeInput = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setModal({ ...modal, [name]: value })
}

const recipesSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    try {
        await axios.post('https://localhost:7163/api/Recipes', { ...modal })

        window.location.href = "/";
    } catch (err: any) {
        console.log(err);
    }
}

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <StyledButton onClick={handleOpen}>
        <Typography>
          Yeni Tarif Ekle
        </Typography>
      </StyledButton>
      <StyledModal open={open} onClose={handleClose}>
        <Grid container justifyContent={'center'}>
          <StyledBox>
            <IconButton onClick={() => handleClose()} sx={{ float: 'right' }}>
              <CloseIcon sx={{ color: '#FFD358' }} fontSize="medium" />
            </IconButton>
            <Grid container>
              <Grid item xs={12}>
                <StyledTypography>
                  Tarif Ekle
                </StyledTypography>
              </Grid>
              <Grid item xs={12}>
                <StyledCard>
                  <Grid container direction='row' sx={{ fontSize: '18px', fontFamily: 'Mulish' }}>
                    <form onSubmit={recipesSubmit} style={{ width: '100%' }}>
                      <Grid item xs={12}>
                        <Typography>
                          Yemek Adı
                        </Typography>
                        <StyledInput type="text" name="title" id="title" required onChange={onChangeInput} value={modal.title} />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>
                          Açıklama
                        </Typography>
                        <StyledInput rows={3} multiline type="text" name="description" id="description" required onChange={onChangeInput} value={modal.description} />
                      </Grid>
                      <Grid item xs={12}>
                        <StyledButton type='submit'>
                          Onayla
                        </StyledButton>
                      </Grid>
                    </form>
                  </Grid>
                </StyledCard>
              </Grid>
            </Grid>
          </StyledBox>
        </Grid>
      </StyledModal>
    </>
  )
}

export default RecipeModal