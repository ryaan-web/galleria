import React from 'react';
import withStyles from 'react-jss';

import Layout from './common/Layout/Layout';
import Header from './common/Header/Header';

const styles = {
  Gallery: {
    color: 'red'
  },
  welcomeText: {
    color: 'red'
  }
};

const Gallery = () => {
  return (
    <Layout>
      <Header></Header>
    </Layout>
  );
};

const styledGallery = withStyles(styles)(Gallery);

export default styledGallery;