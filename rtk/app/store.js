const configureStore = require("@reduxjs/toolkit").configureStore;
const counterReducer = require("../features/counter/counterSlice");
const postReducer = require("../features/posts/postSlice");
// configure store
const store = configureStore({
    reducer: {
        counter: counterReducer,
        post:postReducer
    },
});

module.exports = store;