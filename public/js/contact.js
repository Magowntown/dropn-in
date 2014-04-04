$(document).ready(function() {
  $("#contactForm").submit(function(e) {
    e.preventDefault();
    $.post("/contact", $(this).serialize(), function(data) {
      createAlert(data.type, data.message);
    });
    $(this)[0].reset();
  });
});