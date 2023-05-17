function CreateTask(task) {
    const { id, val1, val2 } = task;

    // val1, val2 sind Minimum und Maximum
    /*
    let v1, v2
    const processing = () => {
        v1 = getRandomInt(val1)
        v2 = getRandomInt(val2) //test
    }
    processing();
    */
    //
    let aufgabeDaten = add(val1,val2)
    
    // processing in die Aufgabe
    

    const processedTask = {
    id: id,
    templateid: id,
    //text: `What is the result of ${v1} + ${v2}?`,
    text: `${aufgabeDaten[0]}`,
    //help: `Remember to add ... to ... to find the answer.`,
    help: `${aufgabeDaten[2]}`,
    //answer: v1 + v2,
    answer: `${aufgabeDaten[1]}`
    };
    return processedTask;
    }
    
    export default CreateTask;


function add(max, min){
    let op, aufgabe, loesung, help
    let op1 = getRandomInt(max-min) + min;
    let op2 = getRandomInt(max-min) + min;
    if (Math.random() < 0.5){
        op = "+";
        loesung = op1 + op2;
    } else {
        op = "-";
        loesung = op1 - op2;
    }
    if (op2 < 0) {
        aufgabe = op1 + " " + op + " (" + op2 + ")";
    } else {
        aufgabe = op1 + " "  + op + " " + op2;
    }
    help = "Eine Zahl addieren, heißt, die Gegenzahl subtrahieren und umgekehrt"
    //console.log(aufgabe)
    //console.log(loesung)
    //return aufgabe;
    return [aufgabe, loesung, help];
}

function getRandomInt(n) { 
  return Math.floor(Math.random() * n); // +n die Null ausschl.
}

    