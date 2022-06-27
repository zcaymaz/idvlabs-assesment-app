import { Grid } from '@mui/material'
import RecipeCard from '../../components/RecipeCard'

const Home = () => {
  return (
    <>
      <Grid container justifyContent={'center'} direction={'row'} sx={{ overflowX:'hidden', width:'100%', height: '93vh'}}>
        <RecipeCard/>
      </Grid>
    </>
  )
}

export default Home