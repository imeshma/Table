import React, { Component } from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import  BasicTable  from './components/BasicTable';
import  antdtbl  from './components/antdtbl';
import Antdsearch from './components/antdsearch'


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <BrowserRouter>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/dt' component={BasicTable} />
        <Route path='/antd' component={antdtbl} />
        <Route path='/antdsearch' component={Antdsearch} />
      </Layout>
      </BrowserRouter>
    );
  }
}
