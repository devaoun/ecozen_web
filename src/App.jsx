import AuthContextProvider from "./contexts/AuthContext"
import ProductContextProvider from "./contexts/ProductContext"
import Router from "./routes"
import { ToastContainer, toast, Zoom } from 'react-toastify';


function App() {

  return (
    <>
      <AuthContextProvider>
        <Router />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="colored"
        />
      </AuthContextProvider>
    </>
  )
}

export default App
