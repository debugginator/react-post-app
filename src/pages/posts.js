import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { fetchPostsWithCommentsAndAuthor } from "../api/resource-access";

// Components
import withGreeting from "../components/hoc/withGreeting";
import PostItem from '../components/post_item';
import Loader from "../components/loader";
import InfoBox from "../components/info_box";


/**
 * Component which renders the Posts page (on the /app route), displaying all the posts and their comments.
 * Enables filtering components by the authors' full name.
 */
class Posts extends PureComponent {

  /** Initial state */
  state = {
    /** Is the component still loading posts from the api */
    isLoading: true,
    /** Placeholder for all posts array */
    allPosts: undefined,
    /** Placeholder for the render-ready array of post items */
    postItems: undefined,
    /** Placeholder for the filtered render-ready array of post items */
    filteredItems: undefined,
  };

  /**
   * Builds a render-ready array of JSX elements.
   * @param items Array of objects of the following form {post, author, comments}.
   * @returns {array}
   */
  buildPostItems = items => items.map(
    item => <PostItem message={this.props.message}
                      key={item.post.id}
                      item={item}/>
  );

  /** Lifecycle method used for fetching all the posts from the API. */
  componentDidMount() {
    fetchPostsWithCommentsAndAuthor()
      .then(allPosts => this.setState({
        allPosts,
        postItems: this.buildPostItems(allPosts),
        isLoading: false
      }))
      .catch(err => console.log(err));
  }

  /** Handles the event of a new input in the filter input field. */
  onFilterChange = event => {
    let filter = event.target.value;
    let filteredPosts = this.state.allPosts.filter(post =>
      post.author.name
        .toLowerCase()
        .includes(filter.toLowerCase())
    );

    let filteredItems;
    if (filteredPosts.length !== 0) {
      filteredItems = this.buildPostItems(filteredPosts);
    } else {
      filteredItems = <InfoBox message={this.props.message}
                               infoMessage="Found no posts by user matching your filter."/>
    }
    this.setState({ filteredItems });
  };

  render() {
    if (this.state.isLoading) return <Loader message={this.props.message}/>;

    return (
      <div className="animate-bottom posts-container mx-auto px-1">
        <div className="text-center title-header">
          <h1> Posts </h1>
          <p> Here you can read all of the latest fake posts. </p>
          <input className="form-control mb-2"
                 autoFocus={true}
                 type="search"
                 id="search"
                 placeholder="Start typing to filter posts by user's full name"
                 aria-label="Search"
                 onChange={this.onFilterChange}
          />
        </div>
        {this.state.filteredItems ? this.state.filteredItems : this.state.postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  message: PropTypes.string,
};

export default withGreeting(Posts);