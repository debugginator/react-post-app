import { API_RESOURCES, fetchFromApi } from "./setup";

// Functions for fetching resources

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

function mapCommentsByPost(comments) {
  let commentsByPost = {};
  for (let comment of comments) {
    let comms = commentsByPost[comment.postId] || [];
    comms.push(comment);
    commentsByPost[comment.postId] = comms;
  }
  return commentsByPost;
}


export async function fetchPostsWithCommentsAndAuthor() {

  let users = await fetchAllUsers();
  let posts = await fetchAllPosts();
  let comments = await fetchAllComments();

  let commentsByPost = mapCommentsByPost(comments);

  let merged = posts.map(post => {
    return {
      post,
      author: users[post.userId - 1],
      comments: commentsByPost[post.id]
    };
  });

  return merged;
}