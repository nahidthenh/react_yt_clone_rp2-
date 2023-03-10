import { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import { borderRight } from '@mui/system'

function Feed() {
  return (
    <Stack sx={{
      flexDirection: { sx: 'column', md: 'row' }
    }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>

      </Box>
    </Stack >
  )
}

export default Feed