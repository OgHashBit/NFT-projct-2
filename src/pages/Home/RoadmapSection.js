import React from 'react'
import { Box, Typography } from '@material-ui/core'
// core components
import Roadmap from 'components/Roadmap/Roadmap'
// images
import roadmap1 from 'assets/images/Home/10.png'
import roadmap2 from 'assets/images/Home/20.png'
import roadmap3 from 'assets/images/Home/30.png'
import roadmap4 from 'assets/images/Home/40.png'
import roadmap5 from 'assets/images/Home/50.png'
import roadmap6 from 'assets/images/Home/60.png'
import roadmap7 from 'assets/images/Home/70.png'
import roadmap8 from 'assets/images/Home/80.png'
import roadmap9 from 'assets/images/Home/80.png'
import roadmap10 from 'assets/images/Home/100.png'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import styles from 'assets/jss/pages/Home/roadmapSectionStyle'

const useStyles = makeStyles(styles)

const RoadmapSection = () => {
  const classes = useStyles()

  return (
    <Box className={classes.buySectionArea}>
      {/* <Box className={classes.container}> */}
      <Box className={classes.content}>
        <Typography className={clsx(classes.roadmapTitle, classes.title)}>ROADMAP</Typography>
      </Box>
      <Box className={classes.roadmapContainer}>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap1} percentage={10} description={'Expand to more Blockchain networks'} />
        </Box>
        <Box style={{ marginLeft: '120px' }}>
          <Roadmap
            image={roadmap2}
            percentage={20}
            description={'$GLD token and DEX launch'}
          />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap3} percentage={30} description={'Distribution of rewards for early supporters'} />
        </Box>
        <Box style={{ marginLeft: '0px' }}>
          <Roadmap
            image={roadmap4}
            percentage={40}
            description={'Expand to diamond,gemstone and jewelry backed art'}
          />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap5} percentage={50} description={'GoldenArt NFT marketplace and minter'} />
        </Box>
        <Box style={{ marginLeft: '120px' }}>
          <Roadmap image={roadmap6} percentage={60} description={'Special one-kind collections launch'} />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap image={roadmap7} percentage={70} description={'Decentralized chat app for users'} />
        </Box>
        <Box style={{ marginLeft: '0px' }}>
          <Roadmap image={roadmap8} percentage={80} description={'Development of DAPP to showcase your NFTs'} />
        </Box>
        <Box style={{ marginLeft: '60px' }}>
          <Roadmap
            image={roadmap9}
            percentage={90}
            description={'Liqudity pools and staking'}
          />
        </Box>
        <Box style={{ marginLeft: '120px' }}>
          <Roadmap
            image={roadmap10}
            percentage={100}
            description={'Update roadmap'}
          />
        </Box>
      </Box>
      {/* </Box> */}
    </Box>
  )
}

export default RoadmapSection
