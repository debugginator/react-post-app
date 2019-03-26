import { getAllUsers } from "../storage/user.storage";


/**
 * This function fakes logging in a user and persists the user in an insecure manner.
 * If this were a production application user authentication would be handled on the server
 * which is communicating with the database.
 * @param email User's email
 * @param password User's password
 * @returns boolean|user
 */
const logIn = (email, password) => {
  let users = getAllUsers();
  for (let user of users) {
    if (email === user.email && password === user.password) {
      sessionStorage.setItem("user", user);
      return user;
    }
  }
  return false;
};

/** Clears the user session */
const logOut = () => {
  sessionStorage.removeItem("user");
  return true;
};

/**
 * Returns the current user in the session.
 * @returns object
 */
const getCurrentUser = () => sessionStorage.getItem("user");

/**
 * Returns true if the user is authenticated, false otherwise.
 * @returns {boolean}
 */
const isAuthenticated = () => !!getCurrentUser();

/**
 * Object in which all services are bundled.
 */
const AuthService = {
  getCurrentUser,
  logIn,
  logOut,
  isAuthenticated
};
export default AuthService;