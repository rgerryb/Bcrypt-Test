const bcrypt = require('bcrypt');
const colors = require(`colors`);

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("makers", salt, function(err, hash) {
        // Store hash in your password DB.
        console.log("passwordnya jadi", hash.rainbow)
    });
});