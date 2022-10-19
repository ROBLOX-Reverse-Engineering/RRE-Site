# Join the Discord
<h4 id="please-solve-this-challenge">Please solve this challenge to continue!</h4>

<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    async defer>
</script>
<form action="/api/getDiscord" method="POST" id="captchaForm">
<div id="g-recaptcha"></div>
</form>
<script>
var onloadCallback = function() {
    grecaptcha.render(document.getElementById("g-recaptcha"), {
      'sitekey' : '6Le9nYYiAAAAAD4sZTVWRai4oSfXmfqEINei9mdI',
      'callback' : correctCaptcha
    });
  };

var correctCaptcha = function(response) {
    document.getElementById("captchaForm").submit();
};
</script>