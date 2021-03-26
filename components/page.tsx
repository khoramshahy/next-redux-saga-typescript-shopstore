import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { AppState } from '../interfaces';
import Product from './product';
import ProductList from './productList';


const selectData = createSelector(
  (state: AppState) => state.error,
  (state: AppState) => state.lastUpdate,
  (state: AppState) => state.light,
  (state: AppState) => state.products,
  (error, lastUpdate, light, products) => ({ error, lastUpdate, light, products }),
);

const Page: React.FC = ( PageProps) => {

  return (
      <ProductList />
  );
};

export default Page;
