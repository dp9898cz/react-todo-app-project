import React, { useContext } from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, useTheme } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ThemeSwitchContext } from '@/theme/theme'

export const Header = () => {
    const themeMaterial = useTheme()
    const { toggleColorMode } = useContext(ThemeSwitchContext)
    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant={'h6'} component={'div'}>
                    TODO app
                </Typography>
                <Box>
                    {themeMaterial.palette.mode} mode
                    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
                        {themeMaterial.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
