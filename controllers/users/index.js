const postUser = require('./postUser');
const loginUser = require('./loginUser');
const logoutUser = require('./logoutUser');
const currentUser = require('./currentUser');
const updateSubscriptionUser = require('./patchSubscriptionUser')
const patchAvatarUser = require('./patchAvatarUser')

module.exports = {
    postUser,
    loginUser,
    logoutUser,
    currentUser,
    updateSubscriptionUser,
    patchAvatarUser,
}