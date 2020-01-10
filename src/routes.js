import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PageOne from './page1'
import PageTwo from './page2'
import PageThree from './page3'

import ContextRoute from './ContextRoute'

import ContextB from './ContextB'

class Router extends Component {

  state = {
    name: 'Garcia'
  }

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={PageOne} estado={'oioioioio'} />
          <ContextRoute exact path='/page2' contextComponent={ContextB} component={PageTwo} />
          <ContextRoute exact path='/page3' contextComponent={ContextB} component={PageThree} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router