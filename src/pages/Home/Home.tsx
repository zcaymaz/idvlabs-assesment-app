import { Grid } from '@mui/material'
import RecipeFullCard from '../../components/RecipeFullCard'
import RecipeCard from '../../components/RecipeCard'
import RecipeModal from '../../components/RecipeModal'

const Home = () => {
  return (
    <>
      <RecipeModal/>
      <Grid container justifyContent={'center'} direction={'row'} sx={{ bgcolor: '', height: '93vh' }}>
        <RecipeCard/>
      </Grid>
    </>
  )
}

export default Home