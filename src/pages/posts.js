import React, { PureComponent } from 'react';
import PostItem from '../components/post_item';

import { fetchPostsWithCommentsAndAuthor } from "../api/resource-access";
import Loader from "../components/loader";
import withGreeting from "../hoc/withGreeting";


class Posts extends PureComponent {

  state = {
    isLoading: true,
    allPosts: undefined,
    postItems: undefined,
    filteredItems: undefined,
  };

  buildPostItems = items => items.map(
    item => <PostItem message={this.props.message}
                      key={item.post.id}
                      item={item}/>
  );

  componentDidMount() {
    fetchPostsWithCommentsAndAuthor()
      .then(allPosts => this.setState({
        allPosts,
        postItems: this.buildPostItems(allPosts),
        isLoading: false
      }))
      .catch(err => console.log(err));
  }

  onFilterChange = event => {
    let filter = event.target.value;
    let filteredPosts = this.state.allPosts.filter(post =>
      post.author.name
        .toLowerCase()
        .includes(filter.toLowerCase())
    );
    let filteredItems = this.buildPostItems(filteredPosts);
    this.setState({ filteredItems });
  };

  render() {
    if (this.state.isLoading) return <Loader message={this.props.message}/>;

    return (
      <div className="animate-bottom posts-container mx-auto">
        <div className="text-center title-header">
          <h1> Posts </h1>
          <p> Here you can read all of the latest fake posts. </p>
          <input className="form-control mb-2"
                 type="search"
                 id="search"
                 placeholder="Start typing to filter posts by user's name"
                 aria-label="Search"
                 onChange={this.onFilterChange}
          />
        </div>
        {this.state.filteredItems ? this.state.filteredItems : this.state.postItems}
      </div>
    );
  }
}

export default withGreeting(Posts);