import { Card, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import { FC, useEffect, useState } from 'react'
import deneme from '../../images/investors1.png'

type TComment = {
    id: number;
    zComment: string;
    userId: number;
    recipeId: number;
}
type TRecipe = {
    id?: number;
    title?: string;
    description?: string;
    createDate?: string;
    userId?: number;
    userName?: string;
}
const RecipeFullCard: FC = () => {
    const [recipes, setRecipes] = useState<TRecipe>();
    const [comments, setComments] = useState<TComment[]>([]);

    const recipeData = async () => {
        try {
            const res = await axios.get(`https://localhost:7163/api/Recipes/${localStorage.getItem('recipeId')}`);
            setRecipes(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const commentData = async () => {
        try {
            if (localStorage.getItem('recipeId')) {
                const res = await axios.get(
                `https://localhost:7163/api/Comment/byUserAndRecipeId?recipeId=${localStorage.getItem('recipeId')}&userId=${localStorage.getItem('userId')}`);
                setComments(res.data);
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        recipeData();
        commentData();
    }, []);

    return (
        <>
            <Grid container justifyContent={'center'} direction={'row'} sx={{ bgcolor: 'red' }}>
                <Card sx={{ bgcolor: '#ffffff', width: '42rem', minHeight: '42rem' }}>
                    <Grid item xs={12}>
                        <CardMedia src={deneme} sx={{ height: '250px', borderRadius: '3px' }} component={'img'} />
                    </Grid>
                    <Grid item xs={12} sx={{ bgcolor: 'blue', height: '60px' }}>
                        <Typography>
                            {recipes ? recipes.title : ''}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ height: '180px', bgcolor: 'khaki' }}>
                        <Typography>
                            {recipes ? recipes.description : ''}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography sx={{ width: '100%', bgcolor: 'yellow', textAlign: 'center' }}>
                            {comments[0] ? comments[0].zComment : ''}
                        </Typography>
                    </Grid>
                </Card>
            </Grid>
        </>
    )
}

export default RecipeFullCard