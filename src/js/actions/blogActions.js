import axios from "axios";

const BASE_API = 'http://localhost:9000/'
const segment = 'posts/'
export function fetch() {
  return function(dispatch) {
    dispatch({type: "FETCHING"});
    axios.get(`${BASE_API}${segment}`)
      .then((response) => {
        if(!response.data.status){
          dispatch({type: "FETCH_REJECTED", payload: response.data.message})
        }
        dispatch({type: "FETCH_BLOGS_FULFILLED", payload: response.data.data})
        dispatch({type: "FETCHED"});
      })
      .catch((err) => {
        dispatch({type: "FETCH_REJECTED", payload: err})
      })
  }
}

export function fetchById(cuid) {
  return function(dispatch) {
    dispatch({type: "FETCHING"});
    axios.get(`${BASE_API}${segment}${cuid}`)
      .then((response) => {
        if(!response.data.status){
          dispatch({type: "FETCH_REJECTED", payload: response.data.message})
        }
        dispatch({type: "FETCH_BLOG_FULFILLED", payload: response.data.data})
        dispatch({type: "FETCHED"});
      })
      .catch((err) => {
        dispatch({type: "FETCH_REJECTED", payload: err})
      })
  }
}

export function add(data) {
  return function(dispatch) {
    dispatch({type: "FETCHING"});
    axios.post(`${BASE_API}${segment}`, data)
      .then((response) => {
        if(!response.data.status){
          dispatch({type: "FETCH_REJECTED", payload: response.data.message})
        }
        dispatch({type: "ADD_BLOG", payload: response.data.data})
        dispatch({type: "FETCHED"});
      })
      .catch((err) => {
        dispatch({type: "FETCH_REJECTED", payload: err})
      })
  }
}

export function update(cuid, text) {
  return {
    type: 'UPDATE_BLOG',
    payload: {
      cuid,
      text,
    },
  }
}

export function remove(cuid) {
  return { type: 'DELETE_BLOG', payload: cuid}
}
