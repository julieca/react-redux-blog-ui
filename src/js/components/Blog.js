import React from "react"
import { connect } from "react-redux"

import { fetchById, add, update } from "../actions/blogActions"

@connect((store) => {
  return {
    blog: store.blog.blog,
  };
})

export default class Blog extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      blog: {...props.blog}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchById())
  }

  handleChange = name => event => {
    const blogData = { ...this.state.blog,  [name]: event.target.value }
    this.setState({
      blog: blogData
    });
  }

  handleSubmit(event) {
    this.props.dispatch(add(this.state.blog))
    event.preventDefault();
  }

  render() {
    categories= ['Technology', 'Lifestyles']

    const mappedCat = categories.map(c => 
      <MenuItem key={categories.index} value={c}>{c}</MenuItem>);

    return <div>
      <form>
        <TextField
          label="Title"
          value={this.state.blog.title}
          onChange={this.handleChange('title')}
        />
        <TextField
          label="Content"
          value={this.state.blog.content}
          onChange={this.handleChange('content')}
        />
        <FormControl>
          <InputLabel >Category</InputLabel>
          <Select
            value={this.state.blog.category}
            onChange={this.handleChange('category')}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {mappedCat}
          </Select>
        </FormControl>
      </form>
    </div>
  }
}
