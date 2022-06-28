import { Grid, CardMedia, CardContent } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import image from '../../images/indir.jpeg'
import { StyledBox, StyledText } from './styled'
import axios from 'axios'
import RecipeModal from '../RecipeModal'

type IRecipe = {
  id: number;
  title: string;
  description: string;
  createDate?: string;
}

const MyRecipeCard: FC = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const recipeData = async () => {
    try {
      const res = await axios.get(`https://localhost:7163/api/Recipes/byUserId/${localStorage.getItem('userId')}`);
      setRecipes(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    recipeData();
  }, []);

  return (
    <>
      {recipes.map(recipe => {
        return (
          <StyledBox
            sx={{ width: { xs: '98%', sm: '75%', md: '60%', lg: '45%', xl: '35%' } }}>
            <Grid item xs={12}>
              <CardMedia src={image} component={'img'}
                sx={{ height: '400px', borderRadius: '6px' }} />
            </Grid>
            <CardContent>
              <Grid item xs={12}>
                <StyledText minHeight={'60px'}>
                  {recipe.title}
                </StyledText>
              </Grid>
              <Grid item xs={12}>
                <StyledText minHeight={'120px'} fontSize={'22px'}>
                  {recipe.description}
                </StyledText>
              </Grid>
            </CardContent>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <RecipeModal recipe={recipe} type="edit" />
              <RecipeModal recipe={recipe} type="delete" />
            </Grid>
          </StyledBox>
        )
      })}
    </>
  )
}

export default MyRecipeCard;