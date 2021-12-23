import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Details from './components/Details';
import Add from './components/Add';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

const FILM_DATA = [
  {
      id: 1,
      title: "Matrix Ressurrection",
      poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
      description: 'Neo comes back to the real world and finds his father missing. He is taken in by the rebel leader, Morpheus, and together with his crew, they investigate the truth behind the apparent',
      genre: 'Action',
      duration: '2h 30m',
      rating: '8.5',
      year: '1999',
      director: 'Lana Wachowski, Lilly Wachowski',
      actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving'

  },
  {
      id: 2,
      title: "The Witcher",
      poster: 'https://m.media-amazon.com/images/M/MV5BN2FiOWU4YzYtMzZiOS00MzcyLTlkOGEtOTgwZmEwMzAxMzA3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
      genre: 'Action',
      duration: '2h 30m',
      rating: '8.5',
      year: '1999',
      director: 'Lana Wachowski, Lilly Wachowski',
      actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving'
  },
  {
      id: 3,
      title: "Arcane",
      poster: 'https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      description: 'A young apprentice is selected for a secret society for the purpose of unraveling the mystery of the organization.',
      genre: 'Action',
      duration: '2h 30m',
      rating: '8.5',
      year: '1999',
      director: 'Lana Wachowski, Lilly Wachowski',
      actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving'
  },
  {
      id: 4,
      title: "Matrix Ressurrection",
      poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
      description: 'Neo comes back to the real world and finds his father missing. He is taken in by the rebel leader, Morpheus, and together with his crew, they investigate the truth behind the apparent',
      genre: 'Action',
      duration: '2h 30m',
      rating: '8.5',
      year: '1999',
      director: 'Lana Wachowski, Lilly Wachowski',
      actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving'
  },
  {
      id: 5,
      title: "Matrix Ressurrection",
      poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
      description: 'Neo comes back to the real world and finds his father missing. He is taken in by the rebel leader, Morpheus, and together with his crew, they investigate the truth behind the apparent',
      genre: 'Action',
      duration: '2h 30m',
      rating: '8.5',
      year: '1999',
      director: 'Lana Wachowski, Lilly Wachowski',
      actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving'
  },
  {
      id: 6,
      title: "Matrix Ressurrection",
      poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg',
      description: 'Neo comes back to the real world and finds his father missing. He is taken in by the rebel leader, Morpheus, and together with his crew, they investigate the truth behind the apparent',
      genre: 'Action',
      duration: '2h 30m',
      rating: '8.5',
      year: '1999',
      director: 'Lana Wachowski, Lilly Wachowski',
      actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving'
  }


]


const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home FILM_DATA={FILM_DATA} />} />
    <Route path="signin" element={<SignIn />} />
    <Route path="signup" element={<SignUp />} />

      {FILM_DATA.map(film => (
      <Route path={`details/${film.id}`} element={<Details film={film}/>} />
    ))}

    <Route path="add" element={<Add />} />
    </Routes>
  </BrowserRouter>,
  rootElement
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//    <Route path="add" element={<Add />} />
// <Route path="details" element={<Details />} />
reportWebVitals();
