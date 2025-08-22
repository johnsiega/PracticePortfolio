const form = document.getElementById("form");
const firstname_input = document.getElementById("fNameInput"); // This will be null on the login page
const email_input = document.getElementById("EmailInput");
const password_input = document.getElementById("PWordInput");
const Rpword_input = document.getElementById("RPWordInput"); // This will be null on the login page
const error_message = document.getElementById("error-message");

const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Get the current page to determine if it's signup or login
const isSignupPage = !!firstname_input; // True if firstname_input exists (signup page)
form.addEventListener("submit", (e) => {
    let errors = [];

    // Clear previous error messages and styling
    error_message.innerText = "";
    if (firstname_input) firstname_input.parentElement.classList.remove("incorrect");
    email_input.parentElement.classList.remove("incorrect");
    password_input.parentElement.classList.remove("incorrect");
    if (Rpword_input) Rpword_input.parentElement.classList.remove("incorrect");

    if (isSignupPage) {
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, Rpword_input.value);
        if (errors.length === 0) {
            // Successful Signup: Store user data and redirect to login
            const user = {
                firstname: firstname_input.value,
                email: email_input.value,
                password: password_input.value
            };
            localStorage.setItem("registeredUser", JSON.stringify(user));
            alert("Registration successful! Please log in.");
            window.location.href = "login.html"; // Redirect to login page
            e.preventDefault(); // Prevent default form submission to allow redirection
        }
    } else {
        errors = getLoginFormErrors(email_input.value, password_input.value);
        if (errors.length === 0) {
            // Successful Login: Verify credentials
            const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

            if (storedUser && storedUser.email === email_input.value && storedUser.password === password_input.value) {
                // Login successful! Redirect to a welcome page
                window.location.href = `welcome.html?firstname=${storedUser.firstname}`;
                e.preventDefault(); // Prevent default form submission to allow redirection
            } else {
                errors.push("Invalid email or password.");
                // Apply 'incorrect' class to email and password for visual feedback
                email_input.parentElement.classList.add("incorrect");
                password_input.parentElement.classList.add("incorrect");
                e.preventDefault(); // Prevent form submission if login failed
            }
        }
    }

    if (errors.length > 0) {
        e.preventDefault(); // Prevents submission if there are validation errors
        error_message.innerText = errors.join(". ");
    }
});

function getSignupFormErrors(firstname, email, password, Rpword) {
    let errors = [];

    if (firstname === '' || firstname == null) {
        errors.push("Firstname is required");
        firstname_input.parentElement.classList.add("incorrect");
    }
    if (email === '' || email == null) {
        errors.push("Email is required");
        email_input.parentElement.classList.add("incorrect");
    } else if (!emailValid.test(email)) {
        errors.push("Please enter a valid Email!");
        email_input.parentElement.classList.add("incorrect");
    }
    if (password === '' || password == null) {
        errors.push("Password is required");
        password_input.parentElement.classList.add("incorrect");
    } else if (!passwordValid.test(password)) {
        errors.push("Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number");
        password_input.parentElement.classList.add("incorrect");
    }
    if (password !== Rpword) {
        errors.push("Password does not match");
        password_input.parentElement.classList.add("incorrect");
        Rpword_input.parentElement.classList.add("incorrect");
    }

    return errors;
}

function getLoginFormErrors(email, password) {
    let errors = [];

    if (email === '' || email == null) {
        errors.push("Email is required");
        email_input.parentElement.classList.add("incorrect");
    } else if (!emailValid.test(email)) {
        errors.push("Please enter a valid Email!");
        email_input.parentElement.classList.add("incorrect");
    }
    if (password === '' || password == null) {
        errors.push("Password is required");
        password_input.parentElement.classList.add("incorrect");
    }
    return errors;
}

const AllInputs = [firstname_input, email_input, password_input, Rpword_input].filter(input => input != null);
AllInputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.parentElement.classList.contains("incorrect")) {
            input.parentElement.classList.remove("incorrect");
            error_message.innerText = "";
        }
    });
});