import React, { PureComponent } from 'react';

import PostItem from "../components/post_item";
import { fetchPost, fetchPostComments, fetchUser } from "../api/resource-access";
import Loader from "../components/loader";
import withGreeting from "../hoc/withGreeting";
import NotFound from "./not-found";


class Post extends PureComponent {

  state = {
    item: undefined,
  };

  async componentDidMount() {
    // Fetch resources from API
    let post = await fetchPost(this.props.match.params.id);
    let author = await fetchUser(post.userId);
    let comments = await fetchPostComments(post.id);

    this.setState({ item: { post, author, comments } });
  }

  render() {
    let item = this.state.item;

    // Item still loading
    if (!item) return <Loader message={this.props.message}/>;

    // Item not found (received empty object)
    if (!item.post.id) return <NotFound message={this.props.message}/>;

    return (
      <div className="container mt-5">
        <PostItem message={this.props.message}
                  disableLink={true}
                  item={item}/>
      </div>
    );
  }

}

export default withGreeting(Post);