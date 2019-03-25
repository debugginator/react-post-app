import React, { PureComponent } from 'react';
import PostItem from '../components/post_item';

import { fetchPostsWithCommentsAndAuthor } from "../api/resource-access";
import { Loader } from "../components/loader";

//todo pagination
const buildPostItems = items => items.map(item => <PostItem key={item.post.id} item={item}/>);

export default class Posts extends PureComponent {

  state = {
    isLoading: true,
    postItems: undefined,
  };

  componentDidMount() {
    fetchPostsWithCommentsAndAuthor()
      .then(buildPostItems)
      .then(postItems => this.setState({ postItems, isLoading: false }))
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.isLoading) return <Loader/>;

    return (
      <div className="animate-bottom posts-container mx-auto">
        <div className="text-center title-header">
          <h1>Posts</h1>
          <p>
            Here you can read all of the latest fake posts.
            Feel free to leave some comments.
          </p>
        </div>
        {this.state.postItems}
      </div>
    );
  }
}