import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Overview from './components/Overview/Overview'
import Cellar from './components/Cellar/Cellar'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path='/' exact render={(props) => (
            <>
              <Overview />
            </>
          )} />
        <Route path='/cellar' component={Cellar}/>
      </div>
    </Router>
  );
}

export default App;
