import { Grid, CardMedia, CardContent, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import deneme from '../../images/investors1.png'
import { StyledBox, StyledText } from './styled'
import axios from 'axios'

type IRecipe = {
  id: number;
  title: string;
  description: string;
  createDate?: string;
}

const RecipeFullCard = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const recipeData = async () => {
    try {
      const res = await axios.get('https://localhost:7163/api/Recipes');
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
          <StyledBox>
            <Grid item xs={12}>
              <CardMedia src={deneme} sx={{ height: '350px', borderRadius: '3px' }} component={'img'} />
            </Grid>
            <CardContent>
              <Grid item xs={12}>
                <StyledText minHeight={'60px'}>
                  {recipe.title}
                </StyledText>
              </Grid>
              <Grid item xs={12}>
                <StyledText minHeight={'180px'} fontSize={'24px'}>
                  {recipe.description}
                </StyledText>
              </Grid>
            </CardContent>
            <Grid item xs={12} sx={{ bgcolor: 'red' }}>
              <Box>
                sapfkasşk
              </Box>
            </Grid>
          </StyledBox>
        )
      })}
    </>
  )
}

export default RecipeFullCard;