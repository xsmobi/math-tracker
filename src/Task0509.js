function Task({ task, showHelp, showResult, toggleShowHelp }) {
    const { text, help, answer } = task;
    //console.log(task)
    return (
      <div className="Task">
        <h3>{text}</h3>
        {showHelp && <p className="help-text">{help}</p>}
        {showResult && <p className="help-text">{answer}</p>}
      </div>
    );  
  }
  export default Task;
  