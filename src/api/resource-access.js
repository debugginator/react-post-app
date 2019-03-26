import { API_RESOURCES, fetchFromApi } from "./setup";

// Functions for fetching resources from the API with self-explanatory names

export const fetchAllPosts = () => fetchFromApi(API_RESOURCES.POSTS);
export const fetchAllComments = () => fetchFromApi(API_RESOURCES.COMMENTS);
export const fetchAllUsers = () => fetchFromApi(API_RESOURCES.USERS);
export const fetchPost = (id) => fetchFromApi(API_RESOURCES.POSTS + id);
export const fetchUser = (id) => fetchFromApi(API_RESOURCES.USERS + id);
export const fetchPostComments = postId => {
  let resource = API_RESOURCES.POSTS + postId + '/' + API_RESOURCES.COMMENTS;
  return fetchFromApi(resource);
};
export const fetchPostsByAuthor = userId => {
  let resource = API_RESOURCES.USERS + userId + '/' + API_RESOURCES.POSTS;
  return fetchFromApi(resource);
};

/**
 * Function which returns an object where post-id is the key and it's comments array is the value.
 * @param comments
 */
function mapCommentsByPost(comments) {
  let commentsByPost = {};
  for (let comment of comments) {
    let commentsOfPost = commentsByPost[comment.postId] || [];
    commentsOfPost.push(comment);
    commentsByPost[comment.postId] = commentsOfPost;
  }
  return commentsByPost;
}

/**
 * Function which fetches all the posts with their respective author's and comments.
 * It maps the comments and author's to posts manually so as not to send a large number of requests to the API.
 * @returns {Promise<*>}
 */
export async function fetchPostsWithCommentsAndAuthor() {

  let users = await fetchAllUsers();
  let posts = await fetchAllPosts();
  let comments = await fetchAllComments();

  let commentsByPost = mapCommentsByPost(comments);

  let merged = posts.map(post => {
    return {
      post,
      author: users[post.userId - 1], // API returns users in order with ids starting at 1
      comments: commentsByPost[post.id]
    };
  });

  return merged;
}