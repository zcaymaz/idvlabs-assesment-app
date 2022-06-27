import { Grid } from '@mui/material'
import RecipeFullCard from '../../components/RecipeFullCard'
import RecipeModal from '../../components/RecipeModal'

const Myrecipes = () => {
    return (
        <>
            <Grid container justifyContent={'center'} direction={'row'}>
                <RecipeModal type={'add'} />
            </Grid>
            <Grid container justifyContent={'center'} direction={'row'} sx={{ overflowX: 'hidden', width: '100%', height: '93vh' }}>
                <RecipeFullCard/>
            </Grid>
        </>
    )
}

export default Myrecipes