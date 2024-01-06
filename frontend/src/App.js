import "./App.css";
import AddStudent from "./components/AddStudent";
import CounterClass from "./components/CounterClass";
import CounterFunction from "./components/CounterFunction";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <CounterClass />
      <CounterFunction /> */}

        <Header />
        {/* <AddStudent /> */}

        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/" element={<AddStudent />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/home" element={<AddStudent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
