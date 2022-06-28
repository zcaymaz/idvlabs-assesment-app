import { FC, useState } from 'react'
import { Typography, IconButton, Grid } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { StyledBox, StyledCard, StyledInput, StyledModal, StyledTypography, StyledButton } from './styled';
import { TRecipe, addRecipe,updateRecipe, deleteRecipe } from '../../services/recipeServices'

interface IModal {
  type: 'add' | 'edit' | 'delete';
  recipe?: TRecipe;
}

const RecipeModal: FC<IModal> = ({ type, recipe }) => {
  const [modal, setModal] = useState<TRecipe>({
    id: 0,
    title: '', 
    description: '', 
    userName: (localStorage.getItem('userName') || ''), 
    userId: parseInt(localStorage.getItem('userId') || '0')
  })

  const onChangeInput = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setModal({ ...modal, [name]: value })
  }

  const addRecipes = async () => {
    setModal(await addRecipe(modal))
    window.location.href = '/'
  }

  const deleteRecipes = async () => {
    await deleteRecipe(recipe ? recipe.id : 0)
  }

  const updateRecipes = async () => {
    await updateRecipe(modal, recipe ? recipe.id : 0)
    window.location.href = '/'
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <StyledButton
        styleColor={type === 'delete' ? 'red' : ''}
        border={type === 'delete' ? 'red 2px solid' : ''}
        marginLeft={type === 'delete' ? '10' : ''}
        onClick={() => handleOpen()}>
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
                      <div style={{width:'100%'}}>
                        <Grid item xs={12}>
                          <Typography>
                            Yemek Adı
                          </Typography>
                          <StyledInput
                            type="text" name="title" id="title"
                            required onChange={(e) => onChangeInput(e)} value={modal.title} />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>
                            Açıklama
                          </Typography>
                          <StyledInput
                            rows={3} multiline required type="text"
                            id="description" name="description" onChange={(e) => onChangeInput(e)}
                            value={modal.description} />
                        </Grid>
                        </div>
                    </Grid>
                  </StyledCard>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <StyledButton
                styleColor={type === 'delete' ? 'red' : ''}
                border={type === 'delete' ? 'red 2px solid' : ''}
                onClick={type === 'add' ? () => addRecipes() : type === 'edit' ? () => updateRecipes() : () => deleteRecipes()}>
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