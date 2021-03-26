import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router'

import { wrapper } from '../redux/store';
import { AppState, IProduct } from '../interfaces';
import Product from '../components/product';
import { getRates } from '../redux/action';
import { END } from 'redux-saga';

const More: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {  object }:any  = router.query ;
  const product: IProduct = JSON.parse(object|| '{}'); 

  return <Product product={product} showMore={false} />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  
});

export const getStaticPaths= async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: true //indicates the type of fallback
  }
}

export default More;
