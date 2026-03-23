const { useSyncExternalStore } = require("react");

//Function to Login
function Login(usename, password)
{
    let user = useSyncExternalStore.find(user=>
        user.username === username && 
        user.password === password
    );

    if(user){
        console.log("Login Successful!");

    } else {
        console.log("invalid username or password.please try again.")
    }
}