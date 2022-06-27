import { Card, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import { FC, useEffect, useState } from 'react'
import deneme from '../../images/investors1.png'

type IComment = {
    id: number;
    zComment: string;
    userId: number;
    recipeId: number;
}
type IRecipe = {
    id: number;
    title: string;
    description: string;
    createDate?: string;
}
const RecipeFullCard: FC = () => {
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);

    const recipeData = async () => {
        try {
            const res = await axios.get(`https://localhost:7163/api/Recipes/byUserId/${localStorage.getItem('userId')}`);
            setRecipes(res.data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    const commentData = async () => {
        try {
            const res = await axios.get<IComment>(
                `https://localhost:7163/api/Comment/byUserAndRecipeId${localStorage.getItem('RecipeId')}`);
            setComments(res.data);
            console.log(res);
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
                            Başlık
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ height: '180px', bgcolor: 'khaki' }}>
                        <Typography>
                            Açıklama
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ width: '100%', bgcolor: 'yellow', textAlign: 'center' }}>
                            {/* {recipes.zComment} */}
                        </Typography>
                    </Grid>
                </Card>
            </Grid>
        </>
    )
}

export default RecipeFullCard