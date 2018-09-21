import React from "react"
import { connect } from "react-redux"

import { fetch } from "../actions/blogActions"

@connect((store) => {
  return {
    blogs: store.blog.blogs,
  };
})

export default class Layout extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetch())
  }

  fetchBlog = () => {
    this.props.dispatch(fetch())
  }
  render() {
    const { blogs } = this.props;
    console.log(blogs)
    const mappedBlogs = blogs.map(blog => <div key={blog.index}>
      <div>{blog.title}</div>
      <div>{blog.text}</div>
      <div>{blog.category}</div>
      <div>{blog.id}</div>
    </div>);
    
    return <div>
      {blogs}
      haha
      <ul>{mappedBlogs}</ul>
    </div>
  }
}
