# Session Eleven


## Homework


### Routing

https://reacttraining.com/react-router/web/guides/quick-start

`$ npm install react-router-dom --save`

We want to render Pirates at a `/pirates` endpoint.

index.js:

````
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
```

```
class Routes extends Component {
  render () {
    return (

      )
  }
}
````


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

Create our first route:

```js
class Routes extends Component {
  render () {
    return (
      <Router>
      <div className="container">
        <Route path='/pirates' component={App} />
      </div>
      </Router>
      )
  }
}
```

Note: the divs are absolutely necessary!

And use Routes as the root:

```
ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
```

Build navbar - stateless functional component

```
import React, { Component } from 'react'

import './css/Nav.css'

function Nav(){
  return (
    <ul className='nav'>

    </ul>
  )
}

module.exports = Nav
```

css for navbar:

```
.nav {
  padding: 0;
  list-style: none;
  display: flex;
}
```

Nav.js:

```
import { Link , NavLink } from 'react-router-dom'
```

Link > a, NavLink allows dynamic style changes

```
<ul className='nav'>
  <li>
    <NavLink activeClassName='active' to='/'>Home</NavLink>
  </li>
</ul>
```

css for active:

```
.nav .active {
  font-weight: bold;
}

.nav li {
  margin-right: 16px;
}

.nav a {
  text-decoration: none;
} 
```

exact property


`<NavLink exact activeClassName='active' to='/'>Home</NavLink>`

Final Nav function:

```
function Nav(){
  return (
    <ul className='nav'>
      <li>
        <NavLink activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/pirates'>Pirates</NavLink>
      </li>
    </ul>
  )
}
```


### Use the Nav component

import into index.js

`import Nav from './Nav'`

Render inside container

```
return (
  <Router>
  <div className="container">
    <Nav />
    <Route path='/pirates' component={App} />
  </div>
  </Router>
  )
```

Create the Home page

```
import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Dueling Pirates!</h1>
      </div>
      )
  }
}

export default Home;
```

Link it to duel

```
import { Link } from 'react-router-dom'
import './css/Home.css'

...

      <div className="home-container">
        <h1>Dueling Pirates!</h1>
        <Link className='button' to '/duel'>
          Duel!
        </Link>
      </div>
```

```
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  
}
```










































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




















































### Routing

https://reacttraining.com/react-router/web/guides/quick-start

`> npm install react-router-dom --save`

index.js

```
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class Main extends React.Component {
  render() {
    return (
    <Router>
    <div>
      <Route exact path="/" component={App}/>
    </div>
  </Router>
      )
  }
}

ReactDOM.render(
  <Main />,
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

`<Route path="/pirate/:pid" component={PirateDetail} />`:

```
import PirateDetail from './PirateDetail';

class Main extends React.Component {
  render() {
    return (
    <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/pirate/:pid" component={PirateDetail} />
    </div>
  </Router>
      )
  }
}
```

We probably want the routing to occur in App.js to keep the header and replace <Pirate /> and PirateForm />






### Validation Homework

Note the dependencies in package.json.

`npm install`

`npm run boom!`

Note the classes Angular adds to the input fields as they are manipulated by the user in `static/partials/pirate-list.template.html`

Give the form a name:

`<form ng-submit="addPirate(pirate)" name="addform">`

Disable the submit button:

`<button ng-disabled="addform.$invalid" type="submit">Add Pirate</button>`

Note: you can visually identify the button as being disabled using:

```css
button[disabled] {
  background: #bbb;
  cursor: not-allowed;
  border: none;
}
```

https://www.w3schools.com/csSref/playit.asp?filename=playcss_cursor&preval=not-allowed

Give the input a name. Add a paragraph with ng-show conditions.

```html
<div class="form-group">
  <label>
    <input ng-model="$ctrl.pirate.name" required ng-minlength="6" placeholder="Name" name="pname" />
    <svg viewBox="0 0 20 20" class="icon">
      <path d="M0 0 L10 10 L0 20"></path>
    </svg>
  </label>
  <p class="error" ng-show="addform.pname.$invalid && addform.pname.$touched"> A name must have at least 6 characters.</p>
</div>
```

Note the svg. 

```css
.error {
  color: red;
} 

label {
  display: flex;
  height: 2rem;
}

input {
  width: 100%;
  height: 1.6rem;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid hsl(0%, 0%, 85%);
  order: 1;
}
```

https://www.sitepoint.com/closer-look-svg-path-data/

Ref: this video from [frontend.center](https://www.youtube.com/watch?v=af4ZQJ14yu8).

```
input:focus {
  outline: none;
  border-color: hsl(0%, 0%, 25%)
}

.icon {
  width: 1rem;
  opacity: 0;
  transition: all 0.5s;
  transform: translateX(-100%)
  // stroke-dasharray: 0, 20;
  // stroke-dashoffset: -14.642;
}

.icon path {
  stroke: black;
  fill: none;
  stroke-width: 1px;
}

input:focus + .icon {
  opacity: 1;
  transform: translateX(0)
  // stroke-dasharray: 28.284, 20;
  // stroke-dashoffset: 0;
}

.ng-valid.ng-not-empty {
  border-color: hsl(166, 72%, 40%)
}

.ng-invalid.ng-dirty {
  border-color: hsl(0, 100%, 40%)
}

```

Using the dash effect:

```
.icon {
  width: 1rem;
  // opacity: 0;
  transition: all 0.5s;
  // transform: translateX(-100%)
  stroke-dasharray: 0, 20;
  stroke-dashoffset: -14.642;
}

.icon path {
  stroke: black;
  fill: none;
  stroke-width: 1px;
}

input:focus + .icon {
  // opacity: 1;
  // transform: translateX(0)
  stroke-dasharray: 28.284, 20;
  stroke-dashoffset: 0;
}
```


See https://www.w3schools.com/angular/angular_validation.asp for a complete set of examples for Angular validation.






### Notes










































