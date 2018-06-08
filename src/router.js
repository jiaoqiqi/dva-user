import React from 'react'
import { Router, Route, Switch, Redirect, routerRedux } from 'dva/router'
import IndexPage from './routes/IndexPage'

import dynamic from 'dva/dynamic' // 路由按需加载

const { ConnectedRouter } = routerRedux

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    component: () => import('./routes/IndexPage')
  })
  const Users = dynamic({
    app,
    component: () => import('./routes/Users')
  })
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/users" exact component={Users} />
      </Switch>
    </ConnectedRouter>
  )
}

export default RouterConfig
