import { UserProfile } from "./components/UserProfile";

function App() {
  return (
    <div className="app text-slate-900 bg-slate-500">
      <header className="app-header">
        <h1 className="text-3xl font-bold tracking-tight">Monorepo Demo</h1>
        <p>This is a demo of a TypeScript monorepo with shared code between frontend and backend</p>
      </header>
      <main className="w-full">
        <UserProfile />
      </main>
      <footer className="app-footer">
        <p className="text-sm text-slate-500">TypeScript Monorepo Template</p>
      </footer>
    </div>
  );
}

export default App;
