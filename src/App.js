import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Todo from './page/Todo'
import Header from './components/Header'

function App() {
  return (
    <div className='ui container'>
      <Router>
        <Header title="Todo manager" />
        <Routes>
          <Route path="/" element={<Todo/>}></Route>
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
      {/* <Todo /> */}
    </div>
  );
}

export default App;
