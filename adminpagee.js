const resetPasswordButton = document.querySelector('.edit-button');
const saveButton = document.querySelector('.save-button');
const passwordInput = document.querySelector('input[type="password"]');

// Add event listener to the button
resetPasswordButton.addEventListener('click', function () {
  // Toggle the disabled attribute of the password input field
  passwordInput.disabled = !passwordInput.disabled;
});

saveButton.addEventListener('click', function () {
  // Disable the password input field
  passwordInput.disabled = true;

  // Display a success message
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: 'Password updated',
    confirmButtonText: 'OK'
  });
});