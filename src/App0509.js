import { useState, useEffect } from "react";
import firebase from "./firebase";
import Task from "./Task";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({});
  const [showHelp, setShowHelp] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // const tasksRef = firebase.firestore().collection("tasks");
    const tasksRef = firebase.firestore().collection("templates");
    tasksRef.onSnapshot((snapshot) => {
      const tasksList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksList);
    });
  }, []);

  const getRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setCurrentTask(tasks[randomIndex]);
    setShowHelp(false);
    setShowResult(false);
    setDisabled(false);
  };

  const toggleShowHelp = () => {
    setShowHelp(!showHelp);
  };

  const toggleShowResult = () => {
    setShowResult(!showResult);
  };

  const saveTask = () => {
    const tasksRef = firebase.firestore().collection("savedTasks");
    tasksRef.add(currentTask);
    setDisabled(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://mathbydoing.app/apple-touch-icon.png" alt="logo" />
        <h1 className="App-title">MathByDoing</h1>
        <h2 className="App-subtitle">
          Practice Math and Boost Your Brainpower!
        </h2>
      </header>
      <main>
        
        {currentTask && (
          <Task
            key={currentTask.id}
            task={currentTask}
            showHelp={showHelp}
            toggleShowHelp={toggleShowHelp}
            showResult={showResult}
            toggleShowResult={toggleShowResult}
          />
        )}
        
        <div className="buttons-container">
          <button onClick={getRandomTask}>Get New Task</button>
          <button onClick={toggleShowHelp}>Get Help</button>
          <button onClick={toggleShowResult}>Show Result</button>
          <button onClick={saveTask} disabled={disabled}>Save Task</button>
        </div>
      </main>
      <footer className="App-footer">
        <p>Practice math, it powers your success!</p>
      </footer>
    </div>
  );
}

export default App;
