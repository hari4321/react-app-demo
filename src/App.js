import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";
import { Error } from "./pages/Error";
import { Navbar } from "./pages/components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/output" element={<Result />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
