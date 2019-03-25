const API_ACCESS_TOKEN = "bWFydGlhbmFuZG1hY2hpbmU=";
const API_BASE_URL = "https://demo.martian.agency/api/";

const HEADERS = new Headers({
  "X-Auth": API_ACCESS_TOKEN,
});

const INIT = {
  method: 'GET',
  headers: HEADERS,
  mode: 'cors',
};

export const fetchFromApi = (resource) => {
  let request = new Request(API_BASE_URL + resource, INIT);
  return fetch(request).then(response => response.json());
};

export const API_RESOURCES = {
  POSTS: 'posts/',
  COMMENTS: 'comments/',
  USERS: 'users/'
};