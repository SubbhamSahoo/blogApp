
export const fetchAllblogsReducer = (state = {}, action) => {
    switch (action.type) {
      case "BLOGS_FETCH_REQUEST":
        return { loading: true };
  
      case "BLOGS_FETCH_SUCCESS":
        return { loading: false, blogs: action.payload };
  
      case "BLOGS_FETCH_FAIL":
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
};

export const fetchBlogById = (state = {}, action) => {
  switch (action.type) {
    case "BLOG_FETCHBYID_REQUEST":
      return { loading: true };

    case "BLOG_FETCHBYID_SUCCESS":
      return { loading: false, blogs: action.payload };

    case "BLOG_FETCHBYID_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}