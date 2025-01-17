
import './App.css'
import Home from './components/Home'
import NoPage from './components/NoPage';
import SingleMovies from './components/SingleMovies'
import { Routes, Route } from "react-router-dom";
import { AppProvider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';  // Using the minified version



function App() {


  return (
    <>
      <AppProvider>
        <Routes>

          {/* <Home /> */}
          <Route index element={<Home />} />

          <Route path="movie/:id" element={<SingleMovies />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        {/* <Home /> */}
      </AppProvider>
    </>
  )
}

export default App
