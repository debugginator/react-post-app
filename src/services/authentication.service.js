const validUsers = [
  {
    name: "user1",
    email: "user1@test.com",
    password: "test1"
  },
  {
    name: "user2",
    email: "user2@test.com",
    password: "test2"
  }
];


/** This function fakes logging in a user and persists the user in an insecure manner.
 * If this were a production application user authentication would be handled on the server
 * which is communicating with the database. */
const logIn = (email, password) => {
  for (let user of validUsers) {
    if (email === user.email && password === user.password) {
      localStorage.setItem("user", user);
      return user;
    }
  }
  return false;
};

const logOut = () => {
  localStorage.removeItem("user");
  return true;
};

const getCurrentUser = () => localStorage.getItem("user");

const AuthService = {
  getCurrentUser,
  logIn,
  logOut
};
export default AuthService;