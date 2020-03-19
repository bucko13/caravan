import React from 'react';
import { AppBar, Toolbar, Button,  makeStyles, Typography, Menu, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Button color="inherit" href="#/">Caravan</Button>
          </Typography>


          <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" onClick={handleClick} >
            Advanced
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><Button color="inherit" href="#/address">Create</Button></MenuItem>
            <MenuItem onClick={handleClose}><Button color="inherit" href="#/spend">Interact</Button></MenuItem>
            <MenuItem onClick={handleClose}><Button color="inherit" href="#/help">Help</Button></MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
    </div>
  );

}

export default Navbar;
