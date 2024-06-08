import AuthContextProvider from "./contexts/AuthContext"
import ProductContextProvider from "./contexts/ProductContext"
import Router from "./routes"


function App() {

  return (
    <>
      <AuthContextProvider>
          <Router />
      </AuthContextProvider>
    </>
  )
}

export default App
