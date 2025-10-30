import "./App.css";
import SumCalculator from "./components/SumCalculator";

function App() {
  return (
    <div className="app-root">
      <header>
        <h1>Sum Calculator App</h1>
        <p>
          Enter two numbers and click <strong>Calculate Sum</strong>.
        </p>
      </header>

      <main>
        <SumCalculator />
      </main>
    </div>
  );
}

export default App;
