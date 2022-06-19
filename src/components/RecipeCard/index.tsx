import { Grid, CardContent, CardMedia, CardActionArea } from '@mui/material'
import React from 'react'
import { StyledCard, StyledText } from './styled'
import deneme from '../../images/investors1.png'

const RecipeCard = () => {
    return (
        <>
            <Grid item sx={{ margin: '1rem' }}>
                <CardActionArea>
                    <StyledCard>
                        <Grid item xs={12}>
                            <CardMedia src={deneme} sx={{ height: '170px', borderRadius: '3px' }} component={'img'} />
                        </Grid>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Grid item xs={12}>
                                <StyledText>
                                    Selamlar
                                </StyledText>
                            </Grid>
                            <Grid item xs={12}>
                                <StyledText fontSize={'14px'} minHeight={'100px'} marginTop={'5%'}>
                                    vagara vugara vagara vurgara
                                </StyledText>
                            </Grid>
                        </CardContent>
                    </StyledCard>
                </CardActionArea>
            </Grid>
        </>
    )
}

export default RecipeCard