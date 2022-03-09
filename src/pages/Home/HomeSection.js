import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/homeSectionStyle'
import globalStyles from 'assets/jss/PLUTEX'
import videoSrc from 'assets/images/Home/Video.mp4'

const useStyles = makeStyles(styles)
const useGlobalStyles = makeStyles(globalStyles)

const HomeSection = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()
  return (
    <Box className={classes.homeSectionArea}>
      <Box className={classes.videoPlayer}>
        <video width="100%" height="auto" loop muted autoPlay>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </Box>
      <Box className={classes.homeContainer}>
        <Box className={classes.container}>
          {/* <Box className={classes.homeImage}> */}
          <Box className={classes.content}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography className={classes.title}>What is ASTROHEDZ?</Typography>
              <Typography className={globalClasses.text21}>
                Unique digital art collection made completely by Artificial intelligence backed by gold.
                We adopted Paxos PAXG token for highly accessible, trusted, redeemable and flexible low fee backing.One fine troy ounce of gold equals one PAXG token (1:1). NFT owners can claim PAXG tokens depending on NFT rarity. Each rarity level has different amount of PAXG tokens available for claim, but also number of copy's available.
                Common NFT - 0.5 $PAXG token
                Rare NFT - 1 $PAXG token
                Mystic NFT - 2 $PAXG token
                Legendary NFT - 5 $PAXG token
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeSection
