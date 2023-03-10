import { IconButton, Paper } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
    return (
        <Paper
            component="form"
            onSubmit={() => { }}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}

        >
            <input
                className='search-bar'
                placeholder='Search...'
                value=""
                onChange={() => { }}
            />
            <IconButton type="button" sx={{
                p: '10px',
                color: '#000'

            }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar