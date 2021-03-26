import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';

import { END } from 'redux-saga';
import { loadData } from '../redux/action';
import Page from '../components/page';
import { wrapper } from '../redux/store';

const Index: NextPage = () => {

  return <Page />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {

  if (!store.getState().products) {
    store.dispatch(loadData());

    store.dispatch(END);
  }
  await store.sagaTask?.toPromise();
});

export default Index;
