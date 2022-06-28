import { Grid } from '@mui/material'
import { FC, useEffect } from 'react';
import MyRecipeCard from '../../components/MyRecipeCard'
import RecipeModal from '../../components/RecipeModal'

const Myrecipes: FC = () => {
    useEffect(() => {
        if (localStorage.getItem('userName') && localStorage.getItem('userId')) {
            return;
        } else {
            window.location.href = "/login";
        }
    }, []);
    return (
        <>
            <Grid container justifyContent={'center'} direction={'row'}>
                <RecipeModal type={'add'} />
            </Grid>
            <Grid
                container justifyContent={'center'} direction={'row'}
                sx={{ overflowX: 'hidden', width: '100%', height: '93vh' }}>
                <MyRecipeCard />
            </Grid>
        </>
    )
}

export default Myrecipes