import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import UseStateDemo from './pages/Hook/UseStateDemo/UseStateDemo.js';
import UseEffectDemo from './pages/Hook/UseEffectDemo/UseEffectDemo';
import ClassApi from './pages/ApiDemo/ClassApi';
import FunctionApi from './pages/ApiDemo/FunctionApi';
import DemoFakeBook from './pages/Hook/HookRedux/DemoFakeBook';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/usestate" component={UseStateDemo}/>
        <Route exact path="/useeffect" component={UseEffectDemo}/>
        <Route exact path="/class-api" component={ClassApi}/>
        <Route exact path="/function-api" component={FunctionApi}/>
        <Route exact path="/hookredux" component={DemoFakeBook}/>

      </Switch>


      {/* <Route path="/home" render={(propsRoute) => {
        return <div>
          <h1>Menu</h1>
          <Home/>
        </div>
      }}/> */}

    </BrowserRouter>
  );
}

export default App;
