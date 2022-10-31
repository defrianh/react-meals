import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './pages/Home';
import Category from './pages/Category';
import Detail from './pages/Detail';


function App() {
  return (
    <Container>
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Fragment>
      </Router>
    </Container>
  );
}

export default App;
