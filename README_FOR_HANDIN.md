### Contributors
* hmccaule
* person 2

### Exploits/Attacks Used
* SQL Injection attacks (many possible locations including login)
* Javascript Injection attacks (eval functions in the contributions.js file)
* 

### Defenses Used / How the Server Was Strengthened
* The server was first defending against basic SQL injection attacks by using prepared statements instead of concatenating unchecked user inputs
*