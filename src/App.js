// RICORDIAMOCI DI INCLUDERE IN APP.JS IL FILE CSS DI BOOTSTRAP PRESENTE IN NODE_MODULES
// !!!
import 'bootstrap/dist/css/bootstrap.min.css'
// !!!
import './App.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main>
        <Home />
      </main>
    </>
  )
}

export default App
