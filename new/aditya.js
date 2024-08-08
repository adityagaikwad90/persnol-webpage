// JavaScript for toggling the profile picture and other animations
$(".explore-btn").on("click", function() {
  window.location.href = "contact.html";
});

$(".name").click(function() {
  $(".profile-pic").toggle();
});
