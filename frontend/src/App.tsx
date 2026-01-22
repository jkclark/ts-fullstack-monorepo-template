import { UserProfile } from "./components/UserProfile"

function App() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <div className="mx-auto max-w-3xl p-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title">Monorepo Demo</h1>
            <p>
              This is a demo of a TypeScript monorepo with shared code between
              frontend and backend.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost">Cancel</button>
              <button className="btn btn-primary">Primary</button>
            </div>
          </div>
        </div>

        <div className="divider" />

        <main className="w-full">
          <UserProfile />
        </main>

        <footer className="mt-8 text-center">
          <p className="text-sm opacity-70">TypeScript Monorepo Template</p>
        </footer>
      </div>
    </div>
  )
}

export default App
