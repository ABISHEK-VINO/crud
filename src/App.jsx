
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';
import NotFoundPage from './NotFoundPage'; // Add the NotFoundPage import

function App() {
  return (
    <Router>
         <div><Login/></div>
        <Route exact path="/" component={Signup} />
        <Route exact path="/login" component={Login} />
        {/* Add the NotFoundPage route at the end */}
        <Route component={NotFoundPage} />
      
    </Router>
  );
}

export default App;
