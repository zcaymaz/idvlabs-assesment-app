import React from "react";
import { Grid, Link, IconButton, Menu, MenuItem, Divider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { NavbarContainer, NavbarButton, NavbarLink, MenuItemLink } from './styled'

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <NavbarContainer container sx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' } }}
        direction={'row'}>
        <Grid container alignItems={'center'}>
          <Grid item paddingLeft={4.7}>
            <Link sx={{ textDecoration: 'none' }} href={'/'}>
              <NavbarButton variant="text">
                <NavbarLink>AnaSayfa</NavbarLink>
              </NavbarButton>
            </Link>
          </Grid>
          <Grid item paddingLeft={2.7}>
            <Link sx={{ textDecoration: 'none' }} href={'/login'}>
              <NavbarButton variant="text">
                <NavbarLink>Giriş Yap</NavbarLink>
              </NavbarButton>
            </Link>
          </Grid>
          <Grid item paddingLeft={2.7}>
            <Link sx={{ textDecoration: 'none' }} href={'/register'}>
              <NavbarButton variant="text">
                <NavbarLink>Üye Ol</NavbarLink>
              </NavbarButton>
            </Link>
          </Grid>
        </Grid>
      </NavbarContainer>

      {/* Mobile Menu */}
      <NavbarContainer sx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none' } }}
        container direction={'row'}>
          <Grid item xs={12}>
            <IconButton
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleOpen}
              sx={{ float: 'right' }}>
              <MenuIcon sx={{ color: '#fff' }} fontSize="large" />
            </IconButton>
            <Menu
              id="demo-positioned-menu"
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}>
              <MenuItem>
                <MenuItemLink href={'/'}>
                  <NavbarLink color={'#000'} textTransform={'uppercase'}>AnaSayfa</NavbarLink>
                </MenuItemLink>
              </MenuItem>
              <Divider className="NavbarDivider" />
              <MenuItem>
                <MenuItemLink href={'/login'}>
                  <NavbarLink color={'#000'} textTransform={'uppercase'}>Giriş Yap</NavbarLink>
                </MenuItemLink>
              </MenuItem>
              <MenuItem>
                <MenuItemLink href={'/register'}>
                  <NavbarLink color={'#000'} textTransform={'uppercase'}>Üye Ol</NavbarLink>
                </MenuItemLink>
              </MenuItem>
            </Menu>
          </Grid>
      </NavbarContainer>
    </>
  )
}
export default Navbar;
