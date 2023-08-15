import useDebugRender from "tilg";

function App() {
  useDebugRender();

  return (
    <div className="flex h-screen flex-col items-center justify-between text-center">
      <header>
        <h2 className="text-3xl font-bold">Header</h2>
      </header>

      <main>
        <h1 className="text-3xl font-bold underline">React Starter</h1>
      </main>

      <footer>
        <h2 className="text-3xl font-bold">Footer</h2>
      </footer>
    </div>
  );
}

export default App;
