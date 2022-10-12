import React, { useEffect, useContext } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { LendsqrUserContext } from './utils/Provider';

const App: React.FC = () => {
  const store = useContext(LendsqrUserContext)
  let isLoggedIn = store.user.isLoggedIn
  let routess = useRoutes(routes(isLoggedIn))

  return (
    <>
      {routess}
    </>
  );
}

export default App;
