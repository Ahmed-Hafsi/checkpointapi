import './App.css';
import UserList from './components/UserList';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
     <NavBar/>

        <UserList/>
        <Home/>
      
    </div>
  );
}

export default App;
