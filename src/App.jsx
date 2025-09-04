import './css/App.css'
import { Favorite } from './pages/favorite';
import { Home } from './pages/home';
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './component/NavBar';
import { MovieProvider } from './contexts/movieContext';

function App() {
  return (
    <>
      <MovieProvider>
        <NavBar/>  
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Favourite' element={<Favorite />} />

          </Routes>
        </main>
      </MovieProvider>

    </>

  )
}

export default App
