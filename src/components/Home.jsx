import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../assets/Pair_programming.png';

const Home = ({ user, setUser }) => {
  const startBtn = user ? '/projects' : '/login'

  return (
    <div className='home-container'>
     <section className="home-text">

      <h1>Software. Faster.</h1>
      <p>
        From planning to production,  Project management software can help you with 
        time management using features for building work calendars, creating gantt charts, 
        scheduling staff,  and analyzing where resources are going (and when).
      </p>
      <NavLink to={startBtn}>
        <button>Start  project</button>
      </NavLink>
     </section>
     <section className="home-img">
      <img src={img} alt="Programming" />
     </section>
    </div>
  );
};

export default Home;
