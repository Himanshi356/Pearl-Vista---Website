window.onload = function () {
  showPage("landingPage");
};

function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.style.display = "none";
  });
  const page = document.getElementById(pageId);
  if (page) page.style.display = "flex";
}

function showSignUp() {
  hideAll();
  document.getElementById("signUpPage").style.display = "flex";
}

function showVerification() {
  hideAll();
  document.getElementById("verifyPage").style.display = "flex";
}

function showResend() {
  hideAll();
  document.getElementById("resendPage").style.display = "flex";
}

function hideAll() {
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("signUpPage").style.display = "none";
  document.getElementById("verifyPage").style.display = "none";
  document.getElementById("resendPage").style.display = "none";
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("recoveryPage").style.display = "none";
  document.getElementById("securityPage").style.display = "none";
  document.getElementById("passwordPage").style.display = "none";
  document.getElementById("homePage").style.display = "none";

}


function showCreatePassword() {
  hideAll();
  document.getElementById("passwordPage").style.display = "flex";
}
function togglePassword(id, toggleSpan) {
  const input = document.getElementById(id);
  const icon = toggleSpan.querySelector("i");

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

function submitPassword() {
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  //Valididate Password
 /* if (newPassword === "" || confirmPassword === "") {
    alert("Please fill in both fields.");
  } else if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
  } else {
    alert("Password set successfully!");
    // You can redirect or hide form here
  }*/
}

// Validate signup , Verification, Password
/*function validateSignUp() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  if (username === "" || email === "") {
    alert("Please fill in both username and email.");
    return;  // Prevent transition if fields are empty
  } else {
    showVerification();  // Proceed to next page
  }
}
  function showVerification() {
  const question = document.getElementById("securityQuestion").value;
  const answer = document.getElementById("securityAnswer").value.trim();

  if (!question) {
    alert("Please select a security question.");
    return;
  }

  if (!answer) {
    alert("Please provide an answer to your security question.");
    return;
  }

  hideAll();
  document.getElementById("verifyPage").style.display = "flex";
}


function validateVerification() {
  const verificationCode = document.getElementById("verificationCode").value;

  if (verificationCode === "") {
    alert("Please enter the verification code.");
    return;  // Prevent transition if code is empty
  } else {
    showCreatePassword();  // Proceed to next page
  }
}

function validatePassword() {
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (newPassword === "" || confirmPassword === "") {
    alert("Please fill in both password fields.");
    return;  // Prevent transition if fields are empty
  } else if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return;  // Prevent transition if passwords don't match
  } else {
    alert("Password set successfully!");
    // You can redirect or hide the form here, depending on your next step
    showLandingPage();  // For example, redirect to the landing page or homepage
  }
}*/

function showLogin() {
  hideAll();
  document.getElementById("loginPage").style.display = "flex";
}



function showRecovery() {
  hideAll();
  document.getElementById("recoveryPage").style.display = "flex";
}


function showSecurityQuestion() {
  hideAll();
  document.getElementById("securityPage").style.display = "flex";
}

/*function verifySecurityQuestion() {
  const question = document.getElementById("securityQuestionSelect").value;
  const answer = document.getElementById("securityAnswerInput").value.trim();

  if (!question || question === "Select a Security Question") {
    alert("Please select a security question.");
    return;
  }

  if (!answer) {
    alert("Please provide your answer.");
    return;
  }

  alert("Security verified. You can now reset your password.");
  showCreatePassword(); // Go to password reset page
}
*/

/*function submitPassword() {
  // Optional validation (skip this if not needed)
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Optional validation block (you can remove it if you want no checks)
  /*
  if (newPassword === "" || confirmPassword === "") {
    alert("Please fill in both password fields.");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }
  */

  // ✅ Hide other pages and show only the Home Page
function submitPassword() {
  // ✅ Optional: Skip validation for now

  // ✅ Show a temporary banner without modifying the DOM
  const banner = document.createElement("div");
  banner.innerText = "Password created successfully!";
  banner.className = "success-banner";
  document.body.prepend(banner);

  // ✅ Wait for 1.5 seconds, then move to the home page
  setTimeout(() => {
    // Remove success message
    banner.remove();

    // Show home page only
    hideAll();
    document.getElementById("homePage").style.display = "flex";
  }, 1500);
}




function showHomeWithSuccess() {
  hideAll();
  document.getElementById("homePage").style.display = "block";

  const message = document.getElementById("successMessage");
  message.style.display = "block";

  // Optional: auto-hide message after 5 seconds
  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
}

function handleLogin() {
  // ✅ Optional: add validation here for username/password

  // ✅ Show Home Page after login
  hideAll();
  document.getElementById("homePage").style.display = "flex";
}

/*function handleLogin() {
  const username = document.querySelector('#loginPage input[type="text"]').value;
  const password = document.getElementById('loginPassword').value;

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return;
  }

  // Proceed to home
  hideAll();
  document.getElementById("homePage").style.display = "flex";
}
*/

function handleLogin() {
  hideAll();
  document.getElementById("homePage").style.display = "flex";
}

function toggleProfileMenu() {
  const menu = document.getElementById("profileMenu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

window.addEventListener("click", function (e) {
  const userIcon = document.getElementById("userIcon");
  const profileMenu = document.getElementById("profileMenu");

  if (!profileMenu.contains(e.target) && !userIcon.contains(e.target)) {
    profileMenu.style.display = "none";
  }
});

function toggleUserMenu() {
  const menu = document.getElementById("userDropdown");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function showHomePage() {
  hideAllPages();
  document.getElementById("homePage").style.display = "block";
}

function showAvailability() {
  document.getElementById('homeContent').style.display = 'none';
  document.getElementById('availabilitySection').style.display = 'block';

  // Hide overlay if it's still showing
  const overlay = document.querySelector('#homePage .overlay');
  if (overlay) overlay.style.display = 'none';
}


