// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Netflixmain from "./Component/Netflixmain";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Component/Login";
import Browse from "./Component/Browse";
import { Provider } from "react-redux";
import store from "./utils/store";
import App from "./Component/App";
import Gptsearch from "./Component/Gptsearch";
import Moviedetailscard from "./Component/Moviedetailscard";
import Chatgptdetailcard from "./Component/Chatgptdetailcard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,//index route represents the case where there is no additional path after the parent
        element: <Browse />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "main",
        element: <Netflixmain />,
        children:[
          {
            path:":movieid",
            element:<Moviedetailscard />
          }
        ]
      },
      {
        path: "gptsearch",
        element: <Gptsearch />,
        children:[
          {
            path:":movieid",//nested dynamic url
            element:<Chatgptdetailcard />
          },
        ]
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>,
);
