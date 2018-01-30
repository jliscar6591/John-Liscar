$(document).ready(function(){
    $('.parallax').parallax();
  });

$('#contact-form').submit(function(e) {
  var first_name = document.getElementById('first_name'),
      last_name  = document.getElementById('last_name'),
      email  = document.getElementById('email'),
      text  = document.getElementById('text');

if (!first_name.value || !last_name.value || !email.value || !text.value) {
  throw error;
} else {
  $.ajax({
    url: "https://formspree.io/john.liscar@gmail.com", 
    method: "POST",
    data: $(this).serialize(),
    dataType: "json"
});
  e.preventDefault()|
  $(this).get(0).reset()
  alert("Message Sent");
}
})