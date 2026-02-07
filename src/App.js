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

    <main>
      <section className="section__wrap" aria-labelledby="projects-title">
        <ProjectList />
      </section>

      <section className="section__wrap section__alt" aria-labelledby="projects-detail-title">
        <ProjectDetails />
      </section>
    </main>

    <div className="gradient__bg">
      <Footer />
    </div>

    <BackToTopButton />
  </div>
);

export default App;
