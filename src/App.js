import React, { useState, useEffect } from "react";

import "./App.css";

const URL = "https://api.adviceslip.com/advice";

const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      });
  };

  return (
    <div className="container">
      {console.log(advice)}
      <h1>{advice}</h1>
      <button onClick={fetchAdvice}>Fetch Advice</button>
    </div>
  );
};

export default App;
