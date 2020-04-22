import React, { useState } from 'react';
import ResourceList from './ResourceList';

/* class App extends Component {
  state = { 
    resourceName: 'posts'
  }
  render() { 
    return ( 
      <React.Fragment>
      <h2>React hooks</h2>
        <button onClick={() => this.setState({ resourceName: 'posts' })}>Posts</button>
        <button onClick={() => this.setState({ resourceName: 'todos' })}>Todos</button>
        <ResourceList resourceName={this.state.resourceName} />
      </React.Fragment>
    );
  }
} */

const App = () => {
  const [resourceName, setResourceName] = useState('posts');
// resourceName === currentState resourceName
// setResourceName === function that changes resourceName
// useState === function (param === initialState)
    return ( 
      <React.Fragment>
        <h3>Refactor class based components</h3>
        <h3>into functional components</h3>
        <h3>using React hooks</h3>
        <h3>useState, useEffect</h3>
        <h3>custom Rect hooks</h3>
        <button onClick={() => setResourceName('posts')}>Posts</button>
        <button onClick={() =>  setResourceName('todos')}>Todos</button>
        <ResourceList resourceName={resourceName} />
      </React.Fragment>
    );  
}

export default App;