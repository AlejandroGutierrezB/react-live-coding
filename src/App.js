import React, { Suspense } from 'react';
import { Link, Route } from "wouter";
import './App.css';
import { GifsContextProvider } from './context/GifsContext';
import Context from './context/StaticContext';

const HomePage = React.lazy(() => import('./pages/Home'));
const DetailPage = React.lazy(() => import('./pages/Detail'));
const SearchResultsPage = React.lazy(() => import('./pages/SearchResults'));

export default function App () {
  return (
    <Context.Provider value={{
      name: 'midudev',
      suscribeteAlCanal: true
    }}>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
              <figure className="App-logo">
                <img alt='Giffy logo' src='/logo.png' />
              </figure>
            </Link>
            <GifsContextProvider>
              <Route
                component={HomePage}
                path="/"
              />
              <Route
                component={SearchResultsPage}
                path="/search/:keyword" />
              <Route
                component={DetailPage}
                path="/gif/:id"
              />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </Context.Provider>
  );
}
