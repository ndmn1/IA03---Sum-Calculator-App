import React, { useState } from "react";
import styles from "./SumCalculator.module.scss";

/**
 * SumCalculator
 * A simple component that takes two inputs and calculates their sum.
 * - Uses controlled inputs (useState)
 * - Validates inputs (empty or not a number)
 * - Shows error messages and the calculated result
 */
export default function SumCalculator() {
  const [a, setA] = useState(""); // store as string to allow empty input
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Validate and calculate the sum when the button is clicked
  function handleCalculate() {
    setError("");
    setResult(null);

    if (a.trim() === "" || b.trim() === "") {
      setError("Both inputs are required.");
      return;
    }

    // Try to parse as floats to allow decimal input
    const na = Number(a);
    const nb = Number(b);

    if (Number.isNaN(na) || Number.isNaN(nb)) {
      setError("Please enter valid numbers in both fields.");
      return;
    }

    setResult(na + nb);
  }

  return (
    <div className={styles.sumCalculator}>
      <h2>Sum Calculator</h2>

      <div className={styles.field}>
        <label htmlFor="num1">Number 1:</label>
        <input
          id="num1"
          type="text"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Enter first number"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="num2">Number 2:</label>
        <input
          id="num2"
          type="text"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Enter second number"
        />
      </div>

      <div className={styles.actions}>
        <button onClick={handleCalculate}>Calculate Sum</button>
      </div>

      <div className={styles.output}>
        {error && <div className={styles.error}>{error}</div>}
        {result !== null && (
          <div className={styles.result}>
            Result: <strong>{result}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
