"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage(); // Implement this function to display all stories on the page
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
  $navLogin.hide();
  $navUserProfile.hide();
  $navLogOut.hide();
}

$navLogin.on("click", navLoginClick);

/** When a user first logs in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** When a user logs out, update the navbar to reflect that. */

function updateNavOnLogout() {
  console.debug("updateNavOnLogout");
  $(".main-nav-links").hide();
  $navLogin.show();
  $navLogOut.hide();
  $navUserProfile.hide();
}

// Example of how to handle user logout
$navLogOut.on("click", function () {
  // Perform logout action here, e.g., clear tokens, reset user state, etc.
  // Then update the navbar accordingly:
  updateNavOnLogout();
});

