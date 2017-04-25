# Session Eleven

`$ npm install react-router-dom --save`

Routes.js:

```
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';
import PirateDetail from './PirateDetail';

class Routes extends Component {
  render () {
    return (
      <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/detail' component={PirateDetail} />
       </div>
      </Router>
    )
  }
}

export default Routes
```

Note: the divs are absolutely necessary!

```
<div>
  <Route exact path='/' component={App} />
  <Route path='/detail' component={PirateDetail} />
</div>
```

index.js:

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import Routes from './Routes'

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

```

```
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
```

[Basic routing](https://reacttraining.com/react-router/web/example/basic)

Pirate.js:

```
<li>
  <Link to="/header">{details.name}</Link>  
</li>
```

Pirates add: 

`import react-router-dom`

`import HEader from './Header`


Pirate:

```
import React, { Component } from 'react';
import './css/Pirate.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Pirate extends Component {
  render() {
    const {details} = this.props
    return (
        <ul>
          <li>
            <Link to="/detail">{details.name}</Link>  
          </li>
          <li>{details.weapon}</li>
          <li>{details.vessel}</li>
          <li><button onClick={ () => this.props.removePirate(this.props.index) }>X</button></li>
        </ul>
      )
  }
}

export default Pirate;
```

```
<Link to={`/detail`}>{details.name}</Link> 
```

Routes

```
<Route path='/detail/:id' component={PirateDetail} />
```

```
<Link to={`/detail/${this.props.index}`}>{details.name}</Link>  
```




## Homework



## Reboot



### Routing

https://reacttraining.com/react-router/web/guides/quick-start

`> npm install react-router-dom --save`

Routes.js

```
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';
import PirateDetail from './PirateDetail';

class Routes extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={App} />
          <Route path='/detail/:id' component={PirateDetail} />
         </div>
      </Router>
    )
  }
}

export default Routes
```

index.js:

```
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routes from './Routes';
import './css/index.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

```

### Pirate Detail

Use Header.js as a template

```
import React, { Component } from 'react'

class PirateDetail extends Component {
  render() {
    return (
      <div className="pirate-detail">
        <h1>Pirate detail</h1>
      </div>
      )
  }
}

export default PirateDetail;
```


Pirate.js:

```
import React, { Component } from 'react';
import './css/Pirate.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Pirate extends Component {
  render() {
    const {details} = this.props

    return (
      <div>
        <ul>
          <li>
            <Link to={`/detail/${this.props.index}`}>{details.name}</Link>  
          </li>
          <li>{details.weapon}</li>
          <li>{details.vessel}</li>
          <li><button onClick={ () => this.props.removePirate(this.props.index) }>X</button></li>
        </ul>

      </div>
      )
  }
}

    const Child = ({ match }) => (
      <div>
        <h3>ID: {match.params.id}</h3>
      </div>
    )

export default Pirate;
```

Use json stringify to view router props:

```
import React, { Component } from 'react'

class PirateDetail extends Component {
  render() {
    const {details} = this.props

    return (
      <div>
        <pre><code>{JSON.stringify(this.props, null, 4)}</code></pre>
      </div>
      )
  }
}

export default PirateDetail;
```







### Notes










































