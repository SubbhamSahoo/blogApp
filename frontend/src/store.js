import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginreducer, userRegisterreducer } from "./reducers/userReducer";
import { fetchAllblogsReducer, fetchBlogById } from "./reducers/blogReducer";


const userLoginStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
const reducer = combineReducers({
  userRegister:userRegisterreducer,
  userLogin: userLoginreducer,
  blogs:fetchAllblogsReducer,
  blogData:fetchBlogById
});

const initialState = {
  userLogin: { userInfo: userLoginStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
