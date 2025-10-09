import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#030303]">
      <Router>
        <Header />
        <main className="container mx-auto px-4 py-8 border border-blue-500 rounded-lg">
          <Routes>
            <Route></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
