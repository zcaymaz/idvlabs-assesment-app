import { CardMedia, Divider, Grid, } from '@mui/material'
import axios from 'axios';
import { FC, useEffect, useState } from 'react'
import image from '../../images/indir1.jpeg'
import { StyledButton, StyledCard, StyledInput, StyledText } from './styled';

type TComment = {
    id: number;
    zComment: string;
    userId: number;
    recipeId: number;
    userName?: string;
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
    const [zcomments, setZcomments] = useState({
        id: 0, zComment: '', userName:(localStorage.getItem('userName')) , recipeId: parseInt(localStorage.getItem('recipeId') || '0'), userId: parseInt(localStorage.getItem('userId') || '0')
    })

    const onChangeInput = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setZcomments({ ...zcomments, [name]: value })
    }

    const commentSubmit = async () => {
        try {
            await axios.post('https://localhost:7163/api/Comment/byUserAndRecipeId', { ...zcomments })
            commentData();
        } catch (err: any) {
            console.log(err);
        }
    }

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
                    `https://localhost:7163/api/Comment/byRecipeId/${localStorage.getItem('recipeId')}`);
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
                <StyledCard
                    sx={{ width: { xs: '98%', sm: '70%', md: '50%', lg: '35%', xl: '30%' } }}>
                    <Grid item xs={12}>
                        <CardMedia src={image} component={'img'}
                            sx={{ height: '300px', borderRadius: '3px' }} />
                    </Grid>
                    <Grid item xs={12} sx={{ height: '60px', width: '100%' }}>
                        <StyledText>
                            {recipes ? recipes.title : ''}
                            <Divider />
                        </StyledText>
                    </Grid>
                    <Grid item xs={12} sx={{ height: '180px', width: '100%' }}>
                        <StyledText fontSize={'22px'}>
                            {recipes ? recipes.description : ''}
                        </StyledText>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledText fontSize={'20px'}>
                            Yorumlar
                        </StyledText>
                        <hr />
                    </Grid>
                    {comments.map(comment => {
                        return (
                            <>
                                <Grid item xs={12} direction={'row'} alignItems={'center'}>
                                    <StyledText Border={'1px #000 solid'} BorderRadius={'3px'} Bgcolor={'#f5f5f5'}>
                                        <Grid container>
                                            <Grid item xs={3}>
                                                <StyledText
                                                    fontSize={'16px'} Border={'1px #000 solid'} BorderRadius={'3px'}
                                                    Bgcolor={'#f5f5f5'} Height={'48px'}>
                                                    {comment.userName}
                                                </StyledText>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <StyledText
                                                    fontSize={'16px'} Border={'1px #000 solid'}
                                                    BorderRadius={'3px'} Bgcolor={'#f5f5f5'} Height={'48px'}>
                                                    {comment.zComment}
                                                </StyledText>
                                            </Grid>
                                        </Grid>
                                    </StyledText>
                                </Grid>
                            </>
                        )
                    })}
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <StyledInput
                            value={zcomments.zComment} placeholder="Yorum Yap..."
                            multiline rows={2} name="zComment" onChange={onChangeInput} />
                        <StyledButton onClick={commentSubmit}>
                            Gönder
                        </StyledButton>
                    </Grid>
                </StyledCard>
            </Grid>
        </>
    )
}

export default RecipeFullCard