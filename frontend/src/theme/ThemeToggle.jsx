// components/ThemeToggle.jsx
import React from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../theme/ThemeContext';

const ThemeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();
  const theme = useTheme();

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton
        onClick={toggleColorMode}
        color="inherit"
        sx={{
          ml: 1,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'rotate(30deg)',
            backgroundColor: theme.palette.mode === 'light' 
              ? 'rgba(0, 0, 0, 0.04)' 
              : 'rgba(255, 255, 255, 0.08)',
          },
        }}
      >
        {mode === 'light' ? (
          <Brightness4Icon sx={{ color: 'inherit' }} />
        ) : (
          <Brightness7Icon sx={{ color: 'yellow' }} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;