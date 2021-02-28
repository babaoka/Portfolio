import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

/* Router(BrowserRouter)は繰り返し動作して欲しいものを囲むもの。今回の場合、Navbarはどのページにとんでもついていて欲しいため、Routerの中にはあるが、switchの中には入れなかった。Routeはpathとコンポーネントを要素としてもつ。exactはコード中のパスと実際に置かれているパスが完全一致しないとエラーになるためのもの。各ページに一つのjsxコードを書く必要がある。switchはとりあえず書いていた方が良い*/