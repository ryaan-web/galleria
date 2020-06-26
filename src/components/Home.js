import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from 'react-jss';

import Layout from './common/Layout/Layout';
import Header from './common/Header/Header';

const styles = {
  home: {
    color: 'red'
  },
  welcomeText: {
    color: 'red'
  }
};

const Home = () => {
  
  return (
    <Layout>
      <Header></Header>
    </Layout>
  );
};

const styledHome = withStyles(styles)(Home);

export default styledHome;