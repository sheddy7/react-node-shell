import React from 'react';

const ExampleComponent = (props) => {
  const { welcome } = props.data;

  return (
    <p>{welcome}</p>
  );
};

export default ExampleComponent;