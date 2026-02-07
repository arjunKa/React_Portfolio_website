import React from 'react';
import { Navbar, BackToTopButton } from './components';
import { ProjectList, Footer, Header, ProjectDetails } from './containers';
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>

    <ProjectList />
    <ProjectDetails />

    <div className="gradient__bg">
      <Footer />
    </div>

    <BackToTopButton />
  </div>
);

export default App;
