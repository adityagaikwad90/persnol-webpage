$(document).ready(function() {
  $(".explore-button").click(function() {
    $(".about").toggle({
      bottom: '600px',
      opacity: '0.5',
    });
  });

  $(".explore-button").click(function() {
    $(".top-container").toggle({
      left: '20px',
      opacity: '0.5',
    });
  });

  $(".explore-button").click(function() {
    $(".hobbies").animate({
      bottom: '50px',
      opacity: '0.5',
    });
  });

  $(".name").click(function() {
    $(".raw").toggle();
  });
});
