import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Layout from "./components/Layout"
import Blog from "./components/Blog"
import store from "./store"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  <Layout />
  {/* <Router history={hashHistory}>
    <Route path="/" name="index" component={Layout}></Route>
    <Route path="blog(/:cuid)" name="blog" component={Blog}></Route>
  </Router> */}
</Provider>, app);
