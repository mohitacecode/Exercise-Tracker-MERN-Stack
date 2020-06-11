import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./components/navbar.component"
import ExerciseList from "./components/exercise-list.component"
import EditExercise from "./components/edit-exercise.component"
import CreateExercise from "./components/create-exercise.component"
import CreateUser from "./components/create-user.component"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
