import React from 'react';
import Child from './Child';
import OtherChild from './OtherChild';

export default function Middle() {
  return (
    <div>
      <Child />
      <OtherChild />
    </div>
  )
}

