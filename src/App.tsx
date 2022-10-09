import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  let routess = useRoutes(routes)
  return (
    <>
      {routess}
    </>
  );
}

export default App;
