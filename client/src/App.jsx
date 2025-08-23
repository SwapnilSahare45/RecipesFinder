import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { ToastContainer, Bounce } from 'react-toastify';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer position="top-right" autoClose={3000} transition={Bounce} />
    </BrowserRouter >
  )
}

export default App