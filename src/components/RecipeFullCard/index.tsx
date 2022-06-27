import { Grid, CardMedia, CardContent, Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import deneme from '../../images/investors1.png'
import { StyledBox, StyledText } from './styled'
import axios from 'axios'
import RecipeModal from '../RecipeModal'
import { StyledButton } from '../RecipeModal/styled'

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
          <StyledBox sx={{ width: { xs: '95%', sm: '85%', md: '70%', lg: '55%', xl: '45%' } }}>
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

export default RecipeFullCard;