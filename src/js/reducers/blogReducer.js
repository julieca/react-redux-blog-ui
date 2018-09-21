export default function reducer(state={
    blogs: [],
    blog: {},
    fetching: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCHING": {
        return {...state, fetching: true}
      }
      case "FETCHED": {
        return {...state, fetching: false}
      }
      case "FETCH_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_BLOGS_FULFILLED": {
        return {
          ...state,
          blogs: action.payload,
        }
      }
      case "FETCH_BLOG_FULFILLED": {
        return {
          ...state,
          blog: action.payload,
        }
      }
      case "ADD_BLOG": {
        return {
          ...state,
          blogs: [...state.blogs, action.payload],
        }
      }
      case "UPDATE_BLOG": {
        const { cuid, text } = action.payload
        const newBlog = [...state.blogs]
        const tweetToUpdate = newBlog.findIndex(b => b.cuid === cuid)
        newBlog[tweetToUpdate] = action.payload;

        return {
          ...state,
          blogs: newBlog,
        }
      }
      case "DELETE_BLOG": {
        return {
          ...state,
          blogs: state.blogs.filter(b => b.cuid !== action.payload),
        }
      }
    }

    return state
}
