import { Grid, CardContent, CardMedia, CardActionArea } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { StyledCard, StyledText } from './styled'
import deneme from '../../images/investors1.png'
import axios from 'axios'

type IRecipe = {
    id: number;
    title: string;
    description: string;
    createDate?: string;
}

const RecipeCard = () => {
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
                    <Grid item sx={{ margin: '1rem' }}>
                        <CardActionArea>
                            <StyledCard>
                                <Grid item xs={12}>
                                    <CardMedia src={deneme} sx={{ height: '170px', borderRadius: '3px' }} component={'img'} />
                                </Grid>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Grid item xs={12}>
                                        <StyledText>
                                            {recipe.title}
                                        </StyledText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <StyledText fontSize={'14px'} minHeight={'100px'} marginTop={'5%'}>
                                            {recipe.description}
                                        </StyledText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <StyledText>
                                            {recipe.createDate}
                                        </StyledText>
                                    </Grid>
                                </CardContent>
                            </StyledCard>
                        </CardActionArea>
                    </Grid>
                )
            })}
        </>
    )
}

export default RecipeCard