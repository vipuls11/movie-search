import React, { createContext, useContext, useEffect, useState } from 'react';

// Create your context

// const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=titanic`;
export const API_URL = `http://www.omdbapi.com/?apikey=e5aebbed`;

const AppContext = createContext();

// Context provider component
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [movie, setMovie] = useState([])
  const [isError, setIsError] = useState({
    show: "false",
    msg: ""
  });
  const [query, setQuery] = useState("marvel");
  const getMovies = async (url) => {
    try {
      const response = await fetch(url)
      const result = await response.json()
      console.log(result)
      if (result.Response === 'True') {
        setLoading('false')
        setMovie(result.Search)
      } else {
        setIsError({
          show: "true",
          msg: result.Error
        })
      }
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    const Timeouter = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);

    }, 800);
    return () => clearTimeout(Timeouter)
  }, [query])
  return (
    <AppContext.Provider value={{ loading, setLoading, movie, isError, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

//global custom hook
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };
