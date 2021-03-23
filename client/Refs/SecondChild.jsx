import React from 'react';

const SecondChild = React.forwardRef((props, ref) => (
  <div>
    <input ref={ref} type="text"/>
    <button >button</button>
  </div>
));

export default SecondChild;
