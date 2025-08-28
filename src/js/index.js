const signUpForm = document.getElementById("sign-up-form");
const successPop = document.getElementById("success-pop");
const successText = document.getElementById("success-text");
const emailField = document.getElementById("email");
const sendButton = document.getElementById("send-button");
const dismissButton = document.getElementById("dimiss-button");

function showError(message) {
	alert(message);
	signUpForm.classList.add("invalid");
}

function showSuccess(email) {
	signUpForm.classList.add("filled");
	successPop.classList.add("show");
	successText.innerHTML = `
		A confirmation email has been sent to <strong>${email}</strong>.
		Please open it and click the button inside to confirm your subscription.
	`;
}

function resetForm() {
	signUpForm.classList.remove("filled", "invalid");
	successPop.classList.remove("show");
	emailField.value = "";
}

function handleSubmit() {
	const email = emailField.value.trim();

	signUpForm.classList.remove("invalid");

	if (emailField.checkValidity() && email.length > 3) {
		showSuccess(email);
	} else {
		if (!email) {
			showError("The field is left empty");
		} else if (!emailField.checkValidity()) {
			showError("The email address is not formatted correctly");
		}
	}
}

// Events
sendButton.addEventListener("click", handleSubmit);
dismissButton.addEventListener("click", resetForm);
