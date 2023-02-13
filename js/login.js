// step:1>
//  add click event handler with the btn submit
document.getElementById('btn-submit').addEventListener('click' , function(){
    // step:2
   //get the email address into the email field
    //use .value to get the text from the field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step:3
    // get the pass into the passwordField
    const passwordField = document.getElementById('user-pass');
    const password =passwordField.value;

    // check either the email & password is valid or not
    if(email === 'ss@gmail.com' && password ==='12345'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Wrong input,Please input Correct One!!')
    }


})