function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    let returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    let name = document.forms['form']["name"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    let email = document.forms['form']["email"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    // let phone = document.forms['form']["subject"].value;
    // if (phone.length != 10){
    //     seterror("phone", "*Phone number should be of 10 digits!");
    //     returnval = false;
    // }

    // let password = document.forms['form']["fpass"].value;
    // if (password.length < 6){

    //     // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
    //     seterror("pass", "*Password should be atleast 6 characters long!");
    //     returnval = false;
    // }

    // let cpassword = document.forms['form']["fcpass"].value;
    // if (cpassword != cpassword){
    //     seterror("cpass", "*Password and Confirm password should match!");
    //     returnval = false;
    // }

    return returnval;
}
