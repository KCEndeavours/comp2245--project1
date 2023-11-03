/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function(){
    const frm = document.getElementsByTagName("form")[0];
    const emailInput = document.getElementById("email");
    const msg = document.querySelector('.message');

    frm.addEventListener('submit', function(event){
        event.preventDefault();
        const userEmail = emailInput.value;
        if (!validateEmail(userEmail)) {
            msg.textContent = "Please enter a valid email address.";
        } else {
            msg.textContent = `Thank you! Your email ${userEmail} has been added to our mailing list!`;
        }
        // msg.textContent = `Thank you! Your email ${userEmail} has been added to our mailing list!`
    });
});

//Function to Validate Email Address
function validateEmail(email) {
    regEx= /\S+@\S+.\S+/;
    return regEx.test(email);
};
