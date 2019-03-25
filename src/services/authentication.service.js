import { getAllUsers } from "../storage/user.storage";


/** This function fakes logging in a user and persists the user in an insecure manner.
 * If this were a production application user authentication would be handled on the server
 * which is communicating with the database. */
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

const logOut = () => {
  sessionStorage.removeItem("user");
  return true;
};

const getCurrentUser = () => sessionStorage.getItem("user");

const isAuthenticated = () => !!getCurrentUser();

const AuthService = {
  getCurrentUser,
  logIn,
  logOut,
  isAuthenticated
};
export default AuthService;