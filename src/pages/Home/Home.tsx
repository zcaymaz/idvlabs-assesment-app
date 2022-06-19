import { Grid } from '@mui/material'
import RecipeFullCard from '../../components/RecipeFullCard'

const Home = () => {
  return (
    <>
      <Grid container justifyContent={'center'} direction={'row'} sx={{ bgcolor: '', height: '93vh' }}>
        <RecipeFullCard/>
      </Grid>
    </>
  )
}

export default Home