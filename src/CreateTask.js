function CreateTask(task) {
    const { id, val1, val2 } = task;

    let v1, v2

    
    const processing = (val1, val2) => {
        v1 = getRandomInt(10)
        v2 = getRandomInt(100)
        /*
        v1 = val1 + 1000;
        v2 = val2 - 1000;
        */
    }
    processing(val1, val2);

    //console.log(getRandomInt(v1))
    //console.log(getRandomInt(v2))
    
    


    const processedTask = {
    id: id,
    templateid: id,
    text: `What is the result of ${v1} + ${v2}?`,
    help: `Remember to add ${v1} to ${v2} to find the answer.`,
    answer: v1 + v2,
    };
    return processedTask;
    }
    
    export default CreateTask;

    function getRandomInt(max) { 
        return Math.floor(Math.random() * max); // +n die Null ausschl.
        //console.log(Math.floor(Math.random()));
      }