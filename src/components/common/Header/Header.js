import React from 'react';
import withStyles from 'react-jss';

const styles = {
  header: {
    display: 'block',
    padding: '30px 0px',
    height: 'auto',
    color: '#eeeeee',
    marginBottom: '10px!important',
    marginTop: '10px!important',
    backgroundColor: '#341620'
  }
}

const Header = ({ classes }) => {
  return (
    <div>
      <h1 className = { classes.header }>
        Use Galleria to manage your photos
      </h1>
    </div>
  )
}

const styledHeader = withStyles(styles)(Header);

export default styledHeader;