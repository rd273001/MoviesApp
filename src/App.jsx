import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Movies from './pages/Movies';
import Favorites from './pages/Favorites';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Movies /> } />
          <Route path='favorites' element={ <Favorites /> } />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;