import React from 'react';
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';
import "./App.css";
import Nav from './Nav';


function App() {
  return (
    <div className="netflix__clone">
      <Nav />
      <Banner title="name" backgroundImageUrl />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        largePosters={"True"}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;