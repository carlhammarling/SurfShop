import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Drawer,
  List,
  ListItem,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { appBarHeights } from '../../theme'

const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
  ({
    color: 'rgb(35, 35, 35)',
    textDecoration: isActive ? 'underline' : 'none',
    fontSize: 24,
    fontFamily: '"Odibee Sans", "Segoe UI", sans-serif',
    flex: 1,
  }) as const

export default function DropDownMenu ({ setShowMenu, showMenu }: HandleMenuProps): React.JSX.Element {
  function handleClose (): void {
    if (!showMenu) return
    setShowMenu(false)
  }

  return (
    <Drawer
      anchor='right'
      open={showMenu}
      onClose={handleClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        zIndex: t => t.zIndex.drawer,
        '& .MuiDrawer-paper': {
          top: { xs: appBarHeights.xs, md: appBarHeights.md },
          height: {
            xs: `calc(100dvh - ${appBarHeights.xs}px)`,
            md: `calc(100dvh - ${appBarHeights.md}px)`,
          },
          width: { xs: '100%', sm: 500 },
          maxWidth: '100%',
          boxShadow: '-20px 10px 50px 0px rgba(0, 0, 0, 0.1)',
          boxSizing: 'border-box',
        },
      }}
    >
      <List
        sx={{
          px: 2,
          py: 0,
          width: '100%',
        }}
      >
        <ListItem
          sx={{
            py: 4,
            borderBottom: 1,
            borderColor: 'divider',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <NavLink
            to='/'
            end
            onClick={close}
            style={navLinkStyle}
          >
            HOME
          </NavLink>
          <IconButton
            onClick={close}
            aria-label='Close menu'
            edge='end'
            size='small'
          >
            <CloseIcon />
          </IconButton>
        </ListItem>
        <ListItem
          sx={{
            py: 4,
            borderBottom: 1,
            borderColor: 'divider',
            display: 'block',
          }}
        >
          <NavLink
            to='/surfproducts'
            onClick={close}
            style={navLinkStyle}
          >
            SURFBOARDS
          </NavLink>
        </ListItem>
        <ListItem
          sx={{
            py: 4,
            borderBottom: 1,
            borderColor: 'divider',
            display: 'block',
          }}
        >
          <NavLink
            to='/kiteproducts'
            onClick={close}
            style={navLinkStyle}
          >
            KITESURF
          </NavLink>
        </ListItem>
        <ListItem
          sx={{
            py: 4,
            borderBottom: 1,
            borderColor: 'divider',
            display: 'block',
          }}
        >
          <NavLink
            to='/wetsuits'
            onClick={close}
            style={navLinkStyle}
          >
            WETSUITS
          </NavLink>
        </ListItem>
        <ListItem
          sx={{
            py: 4,
            borderBottom: 1,
            borderColor: 'divider',
            display: 'block',
          }}
        >
          <NavLink
            to='/swimwear'
            onClick={close}
            style={navLinkStyle}
          >
            SWIMWEAR
          </NavLink>
        </ListItem>
        <ListItem
          sx={{
            py: 4,
            display: 'block',
          }}
        >
          <NavLink
            to='/admin'
            onClick={close}
            style={({ isActive }) => ({
              ...navLinkStyle({ isActive }),
              color: 'red',
            })}
          >
            ADMIN
          </NavLink>
        </ListItem>
      </List>
    </Drawer>
  )
}
