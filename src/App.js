import React from 'react';
//routing
import {BrowserRouter, Route} from "react-router-dom"
//components
import Navbar from "./components/navbar.component"
import ExerciseList from "./components/exercise-list.component"
import EditExercise from "./components/edit-exercise.component"
import CreateExercise from "./components/create-exercise.component"
import CreateUser from "./components/create-user.component"
//styling
import "bootstrap/dist/css/bootstrap.min.css"
//stateless component
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar/>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </BrowserRouter>
  );
}

export default App;
