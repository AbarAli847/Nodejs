import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = [];

const shownMenu = () => {
    console.log("\n--- TODO APP ---");
    console.log("1: Add Task");
    console.log("2: View Tasks");
    console.log("3: Exit");  
    rl.question("\nChoose an option: ", handleinput);
} 

const handleinput = (option) => {
    // option (string) ko number mein convert kar rahe hain
    const choice = parseInt(option);

    if (choice === 1) {
        rl.question("Enter your task: ", (task) => {
            todos.push(task);
            console.log(`Added: "${task}"`);
            shownMenu();
        });
    }
    else if (choice === 2) {
        console.log("\n--- Your Todo List ---");
        if (todos.length === 0) {
            console.log("List is Empty!");
        } else {
            todos.forEach((task, index) => {
                console.log(`${index + 1}: ${task}`);
            });
        }
        shownMenu();
    }
    else if (choice === 3) {
        console.log("Good Bye! 👋");
        rl.close();
    } 
    else {
        console.log("Invalid option. Please try again.");
        shownMenu();
    }
    
}

shownMenu();