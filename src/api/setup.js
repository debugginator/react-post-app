/** Access token needed for making requests to the API. */
const API_ACCESS_TOKEN = "bWFydGlhbmFuZG1hY2hpbmU=";

/** Base URL of the API */
const API_BASE_URL = "https://demo.martian.agency/api/";

/** Headers object containing the access token */
const HEADERS = new Headers({
  "X-Auth": API_ACCESS_TOKEN,
});

/** Initialization object for making GET requests to the API. */
const INIT = {
  method: 'GET',
  headers: HEADERS,
  mode: 'cors',
};

/** Function for fetching a resource from the API.
 *
 * @param resource resource to fetch
 * @returns {Promise<any | never>}
 */
export const fetchFromApi = (resource) => {
  let request = new Request(API_BASE_URL + resource, INIT);
  return fetch(request).then(response => response.json());
};

/** API resources that are used in this web application. */
export const API_RESOURCES = {
  POSTS: 'posts/',
  COMMENTS: 'comments/',
  USERS: 'users/'
};