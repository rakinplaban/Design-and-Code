import { AppBar, List } from '@mui/material';
import { styled } from '@mui/material';
import { darkTheme as theme } from '~/lib/theme';

export const NavbarWrapper = styled(AppBar)((elem) => ({
  boxShadow: 'none',
  transition: '0.3s',
  [`.nav-grid`]: {
    padding: '15px 0',
  },
  [`.branding-logo`]: {
    width: 75,
  },
  [`.nav-links`]: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 70,
    [`.nav-link`]: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
      fontWeight: 500,
    },
  },
  [`.menu-btn`]: {
    color: theme.palette.primary.gradient1,
  },
}));

export const MobileNavWrapper = styled(List)((elem) => ({
  background: theme.palette.primary.main,
  height: '100%',
  [`.logo-sidebar`]: {
    width: 150,
    height: 150,
    margin: 'auto',
    borderRadius: '100%',
    background:
      'linear-gradient(165.45deg, #2A2D31 7.13%, #2A2D31 7.13%, #282B2F 55.5%, #1F2224 91.72%)',
    boxShadow:
      'inset 0px -10px 20px 2px rgba(0, 0, 0, 0.3), inset 0px 10px 20px 2px rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  [`.branding-title`]: {
    color: theme.palette.text.primary,
    ...theme.palette.text.gradient,
  },
}));
