import { RouterProvider, createBrowserRouter } from "react-router-dom";
import useDebugRender from "tilg";
import { routesConfig } from "./routes/routesConfig";
// import Layout from "./layout/Layout";

const router = createBrowserRouter(routesConfig);

function App() {
  useDebugRender();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">React Starter</h1>
      <RouterProvider router={router}>{/* <Layout /> */}</RouterProvider>
    </div>
  );
}

export default App;
