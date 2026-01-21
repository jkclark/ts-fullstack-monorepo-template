import "./App.css";
import { UserProfile } from "./components/UserProfile";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Monorepo Demo</h1>
        <p>This is a demo of a TypeScript monorepo with shared code between frontend and backend</p>
      </header>
      <main>
        <UserProfile />
      </main>
      <footer className="app-footer">
        <p>TypeScript Monorepo Template</p>
      </footer>
    </div>
  );
}

export default App;
