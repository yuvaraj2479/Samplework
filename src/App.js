import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FormFile from './Dynamic Form/Form/FormFile';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<FormFile />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
