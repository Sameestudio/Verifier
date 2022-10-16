import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { About } from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import QrScan from './pages/QrScan';
import Team from './pages/Team';
import Search from './pages/Search';

function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* <Header/> */}
        <ToastContainer position='top-right'/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddEdit} />
          <Route path="/update/:id" component={AddEdit} />
          <Route path="/qrscan" component={QrScan} />
          <Route path="/team" component={Team} />
          <Route path="/about" component={About} />
          <Route path="/search" component={Search} />

        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
