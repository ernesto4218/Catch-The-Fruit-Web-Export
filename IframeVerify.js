	<script>
	window.onload = function() {
	  // Run your JavaScript code here
	// Check for the presence of the iframe element
	if (window.self !== window.top) {
	  // The website is being accessed inside an iframe, so check the value of the Referer header
	  var referer = document.referrer;

	  if (referer === "https://nesgentgames.com/") {
	    // The website is being accessed inside an iframe on the specified page, so allow access to the content
	  } else {
	    // The website is not being accessed inside an iframe on the specified page, so block access to the content
		window.location.replace("http://www.w3schools.com");
	  }
	} else {
	  // The website is not being accessed inside an iframe, so block access to the content
	}

	}

</script>
