import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BugList from "./components/BugList";
import BugForm from "./components/BugForm";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Bug Tracker</h1>
        <Routes>
          <Route path="/" element={<BugList />} />
          <Route path="/new" element={<BugForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;