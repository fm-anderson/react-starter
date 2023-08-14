// import Error from "../pages/Error";

export const routesConfig = [
  {
    path: "/",
    // element: <Layout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        // element: <HomePage />,
        // loader: ,
        // action: ,
        // errorElement: <Error />,
      },
      {
        path: "login",
        // element: <Login />,
        // loader: ,
        // action: ,
        // errorElement: <Error />,
      },
      {
        path: "dashboard",
        // element: <Dashboard />,
        // loader: ,
        // action: ,
        // errorElement: <Error />,
      },
    ],
  },
];
