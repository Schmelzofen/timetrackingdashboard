import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Main from "./components/Main"
import Content from "./components/weekly/Content"
import ContentDaily from "./components/daily/ContentDaily"
import ContentMonthly from "./components/monthly/ContentMonthly"

function App() {
  return (
    <div className="App">
      <Router>
        <Main />
        <Routes>
          <Route path="/" element={<ContentDaily />} />
          <Route path="/weekly" element={<Content />} />
          <Route path="/monthly" element={<ContentMonthly />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
