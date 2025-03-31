// // import { useState } from 'react'
// // import { BrowserRouter,Route,Routes,createBrowserRouter,RouterProvider } from 'react-router-dom'




// // function App() {
// //   const [count, setCount] = useState(0)
// //   const routes = createBrowserRouter([
// //     {
// //       path: '/',
// //       element: <OverViewPage />,
// //       children:[
// //         {index:true, element: <OverViewPage />},
// //         { path: '/products', element: <ProductPage /> },
// //         { path: '/about', element: <About /> },
// //         { path: '/contact', element: <Contact /> },
// //         { path: '/dashboard', element: <Dashboard count={count} setCount={setCount} /> },
// //         { path: '*', element: <NotFound /> }
// //       ]
// //     }
// //   ])

// //   return (
// //     <>
// //       <BrowserRouter>
// //         <RouterProvider router={routes}>
// //         </RouterProvider>
// //       </BrowserRouter>
// //     </>
// //   )
// // }

// // export default App


// import { BrowserRouter } from "react-router-dom";
// import { useState } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import OverViewPage from "./pages/OverViewPage";
// import ProductPage from "./pages/ProductPage";

// import UserPage from "./pages/Users.tsx";
// import Sales from "./pages/Sales.tsx";
// import Orders from "./pages/Orders.tsx";
// import Analytics from "./pages/Analytics.tsx";
// import Settings from "./pages/Settings.tsx";
// import NotFound from "./pages/NotFound.tsx";

// import SideBar from "./components/SideBar.tsx";

// function App() {
//   const [count, setCount] = useState(0);

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <SideBar />,
//       children: [
//         { path: 'overview', element: <OverViewPage /> },
//         { path: "products", element: <ProductPage /> },
//         {path: 'users', element: <UserPage />},
//         {path: 'sales', element: <Sales/>},
//         {path: "orders", element: <Orders/>},
//         {path: "analytics", element: <Analytics />},
//         {path:'settings', element: <Settings/>},
//         { path: "*", element: <NotFound/> },

//       ],
//     },
//   ]);

//   return <>
//     <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
//         <div className="fixed inset-0 -z-10">
//             <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-700"></div>
//             <div className="absolute inset-0 backdrop-blur-sm"></div>
//             <h1>Hello</h1>
//         </div>
//         <Sidebar></Sidebar>
//         <RouterProvider router={router} />
//     </div>
    
//   </>;
// }

// export default App;



// import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import OverViewPage from "./pages/OverViewPage";
import ProductPage from "./pages/ProductPage";
import UserPage from "./pages/Users.tsx";
import Sales from "./pages/Sales.tsx";
import Orders from "./pages/Orders.tsx";
import Analytics from "./pages/Analytics.tsx";
import Settings from "./pages/Settings.tsx";
import NotFound from "./pages/NotFound.tsx";
import SideBar from "./components/SideBar.tsx";

function Layout() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-6 relative">
        <Outlet /> {/* This will render the selected page */}
      </div>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Sidebar + Outlet
      children: [
        { index: true, element: <OverViewPage /> },
        { path: "products", element: <ProductPage /> },
        { path: "users", element: <UserPage /> },
        { path: "sales", element: <Sales /> },
        { path: "orders", element: <Orders /> },
        { path: "analytics", element: <Analytics /> },
        { path: "settings", element: <Settings /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <div className="relative">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-700"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* Router Provider */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
