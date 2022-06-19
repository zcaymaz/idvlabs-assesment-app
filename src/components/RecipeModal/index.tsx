import React from 'react'
import { Typography, IconButton, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { StyledBox, StyledCard, StyledInput, StyledModal, StyledTypography, StyledButton } from './styled';

const RecipeModal = () => {
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
                    <form style={{ width: '100%' }}>
                      <Grid item xs={12}>
                        <Typography>
                          Yemek Adı
                        </Typography>
                        <StyledInput type="text" name="name" id="name" />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>
                          Açıklama
                        </Typography>
                        <StyledInput rows={3} multiline type="text" name="description" id="description" />
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