import React, { FC, useState } from 'react'
import { Typography, IconButton, Grid, Button, Input } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { StyledBox, StyledCard, StyledInput, StyledModal, StyledTypography, StyledButton } from './styled';
import axios from 'axios'
import FileUpload from '../FileUpload';

interface IModal {
  type: 'add' | 'edit' | 'delete';
  recipe?: IRecipe;
}

type IRecipe = {
  id: number;
  title: string;
  description: string;
  createDate?: string;
}

const RecipeModal: FC<IModal> = ({ type, recipe }) => {
  const [modal, setModal] = useState({
    id: 0, title: '', description: '',
  })

  const onChangeInput = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setModal({ ...modal, [name]: value })
  }

  const recipesSubmit = async () => {
    try {
      await axios.post('https://localhost:7163/api/Recipes', { ...modal })

      window.location.href = "/";
    } catch (err: any) {
      console.log(err);
    }
  }

  async function updateRecipe() {
    try {
      const { data } = await axios.put<IRecipe>(
        `https://localhost:7163/api/Recipes/${recipe ? recipe.id : 0}`,
        { title: modal.title, description: modal.description },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );

      console.log(JSON.stringify(data, null, 4));

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        // 👇️ error: AxiosError<any, any>
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  async function deleteRecipe() {
    try {
      const { data, status } = await axios.delete<IRecipe>(
        `https://localhost:7163/api/Recipes/${recipe ? recipe.id : 0}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );

      console.log('response is: ', data);

      console.log('response status is: ', status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <StyledButton 
      styleColor={type === 'delete' ? 'red' : ''}
      border={type === 'delete' ? 'red 2px solid' : ''}
      marginLeft={type === 'delete' ? '50' : ''}
      onClick={handleOpen}>
        <Typography>
          {type === 'add' ? 'Yeni Tarif Ekle' : type === 'edit' ? 'Tarifi Düzenle' : 'Tarifi Sil'}
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
                  {type === 'add' ? 'Tarif Ekle' : type === 'edit' ? 'Tarifi Düzenle' : 'Tarifi Sil'}
                </StyledTypography>
              </Grid>
              {type === 'delete' ? (
                ''
              ) : (
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
                      </form>
                    </Grid>
                  </StyledCard>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} sx={{textAlign:'center'}}>
              <StyledButton 
              styleColor={type === 'delete' ? 'red' : ''} 
              border={type === 'delete' ? 'red 2px solid' : ''} 
              onClick={type === 'add' ? () => recipesSubmit() : type === 'edit' ? () => updateRecipe() :() => deleteRecipe()}>
                {type === 'add' ? 'Onayla' : type === 'edit' ? 'Düzenle' : 'Sil'}
              </StyledButton>
            </Grid>
          </StyledBox>
        </Grid>
      </StyledModal>
    </>
  )
}

export default RecipeModal