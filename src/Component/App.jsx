import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login";
import Browse from "./Browse";

const App = () => {

  const appRouter =createBrowserRouter([
    {
      path:"/",
      element:<Browse/>
    },
    {
      path:"/login",
      element:<Login/>
    }

    ]);


  return (
    <div>
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </div>
  )
}

export default App