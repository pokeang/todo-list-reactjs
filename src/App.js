import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Todo from './page/Todo'
import Header from './components/Header'

function App() {
  return (
    <div className='ui container'>
      <Router>
        <Header title="Todo manager" />
        <Switch></Switch>
        <Route path="/" exact component={Todo}></Route>
        <Route>404 Not Found!</Route>
      </Router>
      {/* <Todo /> */}
    </div>
  );
}

export default App;
