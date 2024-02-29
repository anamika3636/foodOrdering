import React, { lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
 
const Grocery = lazy(()=>import("./components/Grocery"))
const About = lazy(()=>import("./components/About"))
const Applayout = () => {
  const [userName, setUserName] = useState();
  useEffect(()=>{
    const data ={
      name: "anamika",
    };
    setUserName(data.name)
  },[])
  return (
<Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="app">
    
      <Header />
      
      <Outlet />

    </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element:<Suspense fallback={<Shimmer/>}><About /></Suspense> ,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
        errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>loading.....</h1>}><Grocery/></Suspense>,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart/>,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
