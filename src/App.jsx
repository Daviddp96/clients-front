import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main id='detail'>
        <Outlet />
      </main>
    </>
  )
}

export default App
