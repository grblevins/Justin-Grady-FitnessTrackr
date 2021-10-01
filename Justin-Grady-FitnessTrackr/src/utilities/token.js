const SECURE_TOKEN = "SecureToken";

export default {
    grabToken: function() {
        return localStorage.getItem(SECURE_TOKEN);
    },

    saveToken: function(token) {
        localStorage.setItem(SECURE_TOKEN, token);
    },

    deleteToken: function() {
        localStorage.removeItem(SECURE_TOKEN);
    }
}