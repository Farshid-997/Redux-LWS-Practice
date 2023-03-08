const fetch = require("node-fetch");
const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk");
const initialState = {
  loading: false,
  posts: [],
  error: [],
};
// action creators

const fetchPostRequested = () => {
  return {
    type: "posts/requested",
  };
};

const fetchPostsSucceeded = (posts) => {
  return {
    type: "posts/succeeded",
    payload: posts,
  };
};

const fetchPostFailed = (error) => {
  return {
    type: "posts/failed",
    payload: error,
  };
};

//reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/requested":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "posts/succeeded":
      return {
        ...state,
        loading: false,
       
        error: "",
        posts: action.payload,
      };

    case "posts/failed":
      return {
        ...state,
        loading: false,
       
        payload: action.payload.message,
        posts: [],
      };

    default:
      state;
  }
};

//thunk
const fetchPosts=()=>{
    return async(dispatch)=>{
        dispatch(fetchPostRequested());
        try {
            const response=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")

            const posts=await response.json()
            dispatch(fetchPostsSucceeded(posts))
        } catch (error) {
            console.log("hello")
            dispatch(fetchPostFailed(error))
        }
    }
}

// create store
const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch action
store.dispatch(fetchPosts());