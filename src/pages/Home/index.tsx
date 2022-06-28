import { Grid } from '@mui/material'
import { FC } from 'react'
import RecipeCard from '../../components/RecipeCard'

const Home: FC = () => {
  return (
    <>
      <Grid
        container justifyContent={'center'} direction={'row'}
        sx={{ overflowX: 'hidden', width: '100%', height: '93vh' }}>
        <RecipeCard />
      </Grid>
    </>
  )
}

export default Home