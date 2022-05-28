import React from 'react'
import stop from '../assets/stop.gif' 
import clock from '../assets/clock.gif' 
import { Container, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import Clock from './Clock'
import StopWatch from './StopWatch'
const Timer = () => {
  return (
    <Container height='500px' maxW='container.sm'   color='white' borderRadius='2xl' border='1px solid gray'>
    <Tabs color='blackAlpha.800'   borderBottomColor='gray.200' >
  <TabList>
    <Tab   width='50%' type="whiteAlpha"><img width='40px' src={stop} ></img>  Timer</Tab>
    <Tab   width='50%'  type="whiteAlpha"><img width='40px' src={clock} ></img>StopWatch</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Clock></Clock>
    </TabPanel>
    <TabPanel>
      <StopWatch></StopWatch>
    </TabPanel>
  </TabPanels>
</Tabs>
</Container>
  )
}

export default Timer