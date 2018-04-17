### Contributors
* hmccaule
* jh138
* msnower

### Exploits/Attacks Used
* SQL Injection attacks (many possible locations including login)
* Javascript Injection attacks to inject infinitely looping while loops to the server, which cause it to crash (This was done in the eval functions in the contributions.js file)
* Javascript Injections were also used to read the file contents from the server.

### Defenses Used / How the Server Was Strengthened
* The server was first defending against basic SQL injection attacks by using prepared statements instead of concatenating unchecked user inputs
* Whenever the server takes plain text from users in client side it runs the risk of executing malicious javascript code. To prevent this, all user inputs were stripped of javascript tags
* The server also changed benefits.js to check for a null date input, which crashed the server in the past
* The eval functions in contributions.js were changed to parseInt() which is safe from Javascript injection attacks.
