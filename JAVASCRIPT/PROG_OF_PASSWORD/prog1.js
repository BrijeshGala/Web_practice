function checkPassword() {
  var password = document.getElementById('password').value;
  var passwordMessage = document.getElementById('passwordMessage');

  if (password.length < 8) {
    showError('Password is not strong enough. Please use at least 8 characters.');
    return;
  }

  if (!/[A-Z]/.test(password)) {
    showError('Password should contain at least one uppercase letter.');
    return;
  }

  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
    showError('Password should contain at least one special character.');
    return;
  }


  showSuccess('Password is strong!');
}

function showError(message) {
  updateMessage(message, 'red');
}

function showSuccess(message) {
  updateMessage(message, 'green');
}

function updateMessage(message, color) {
  var passwordMessage = document.getElementById('passwordMessage');
  passwordMessage.textContent = message;
  passwordMessage.className = color;
}

function togglePassword() {
  var passwordInput = document.getElementById('password');
  var showPasswordCheckbox = document.getElementById('showPassword');

  // Toggle the password input type between "password" and "text"
  passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
}