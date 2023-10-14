
export const loaderReducer = (state = {}, action) => {
    switch (action.type) {
      case "START_LOADER":
        return { loading: true };
  
      case "HIDE_LOADER":
        return { loading: false };

      default:
        return state;
    }
  };