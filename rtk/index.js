const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const { fetchPosts } = require("./features/posts/postSlice");
// initial state
console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState());
});

// disptach actions
store.dispatch(counterActions.increment());

store.dispatch(counterActions.increment());

store.dispatch(counterActions.decrement());

// disptach actions
store.dispatch(fetchPosts());