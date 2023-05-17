function Task({ task, showHelp, showResult, toggleShowHelp }) {
    const { text, help, answer } = task;
    return (
    <div className="Task">
    <h3>{text}</h3>
    {showHelp && <p className="help-text">{help}</p>}
    {showResult && <h3 className="help-text">{answer}</h3>}
    </div>
    );
    }
    
    export default Task;