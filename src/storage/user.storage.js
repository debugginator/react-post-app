/** An array containing hardcoded mock users that are considered valid for authentication. */
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

/** Returns all "valid user" objects. */
export const getAllUsers = () => validUsers;

/** Returns one "valid user" object. */
export const fakeUser = validUsers[0];