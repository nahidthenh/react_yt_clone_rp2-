import { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import { Sidebar, Videos } from './'
function Feed() {

  const [selectedCategory, setSelectedCategory] = useState('New')

  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  }, [selectedCategory])


  return (
    <Stack sx={{
      flexDirection: { sx: 'column', md: 'row' }
    }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2023 YouTube.
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h5' fontWeight='bold' mb={2} sx={{ color: '#fff' }}>
          New <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>
        <Videos videos={[]} ></Videos>
      </Box>
    </Stack >
  )
}

export default Feed