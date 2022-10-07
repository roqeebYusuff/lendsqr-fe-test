import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
// import './App.css';

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/auth" element={<Auth />} />
      {/* <Route path="/auth" element={<Auth />} />
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={
              <ProtectedtRoutes>
                <route.layout>
                  <route.component />
                </route.layout>
              </ProtectedtRoutes>
            }
          />
        );
      })} */}
    </Routes>
  );
}

export default App;
