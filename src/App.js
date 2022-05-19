
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageTask from './components/ManageTask/ManageTask';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/addtask"
          element={
          <RequireAuth>
            <AddTask></AddTask>
          </RequireAuth>}
        ></Route>
        <Route
          path="/managetask"
          element={
          <RequireAuth>
            <ManageTask></ManageTask>
          </RequireAuth>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
