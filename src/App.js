import React from 'react';
import Header from './Header';
import Body from './Body';

const App = () => {
  return (
    <div>
      <Header text="Hello World"/>
      <Body number={3}/>
    </div>
  );
};

export default App;