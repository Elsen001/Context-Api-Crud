import './App.scss';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ContextProvider } from './context/State';
import Infos from './comp/Infos';
import Add from './comp/Add';
import Edit from './comp/Edit';




const App = () => {

  return (
    <BrowserRouter>
    <ContextProvider>
      <Route exact path="/" component={Infos} />
        <Switch>
         <Route path="/add" component={Add} />
         <Route path="/edit/:id" component={Edit}  />
        </Switch>
    </ContextProvider>
      </BrowserRouter>
  )
}

export default App
