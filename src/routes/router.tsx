// src/App.tsx
import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('../pages/Home'))

const routes = [
  { path: '/', element: <Home />}
]

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
