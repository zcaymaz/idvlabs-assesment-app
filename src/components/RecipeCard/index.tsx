import { Grid, CardContent, CardMedia, CardActionArea } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { StyledCard, StyledText } from './styled'
import image from '../../images/indir.jpeg'
import moment from 'moment';
import { getAllRecipes, TRecipe } from '../../services/recipeServices'

const RecipeCard: FC = () => {
    const [recipes, setRecipes] = useState<TRecipe[]>([]);
    const getRecipes = async () => {
        setRecipes(await getAllRecipes())
      }

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <>
            {recipes.map(recipe => {
                return (
                    <Grid item sx={{ margin: '1rem' }}>
                        <CardActionArea href='/fullrecipes'
                            onClick={() => localStorage.setItem('recipeId', recipe.id.toString())}>
                            <StyledCard>
                                <Grid item xs={12}>
                                    <CardMedia src={image} component={'img'}
                                        sx={{ height: '210px', borderRadius: '3px' }} />
                                </Grid>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Grid item xs={12}>
                                        <StyledText>
                                            {recipe.title}
                                        </StyledText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <StyledText fontSize={'16px'} minHeight={'80px'} marginTop={'5%'}>
                                            {recipe.description}
                                        </StyledText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <StyledText fontSize={'14px'}>
                                            {recipe.userName}
                                        </StyledText>
                                        <StyledText fontSize={'14px'}>
                                            {moment(recipe.createDate).format('MMMM Do YYYY, h:mm:ss a')}
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