import React, { lazy, Suspense } from 'react';
import LazyLoad from 'react-lazyload';
import FirstLazyLoad from './First';

// const FirstLazy = lazy(() => import('./First'));
const FirstLazy = lazy(() => (
  new Promise(resolve => setTimeout(resolve, 1000))
    .then(() => import('./First'))
));
// const SecondLazy = lazy(() => import('./Second'));
const SecondLazy = lazy(() => (
  new Promise(resolve => setTimeout(resolve, 2000))
    .then(() => import('./Second'))
));


export default function Lazy() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <FirstLazy />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <SecondLazy />
      </Suspense>
      <LazyLoad>
        <FirstLazyLoad />
      </LazyLoad>
    </>
  );
};