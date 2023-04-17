// Action types
export const ADD_COMMENT = "ADD_COMMENT";

// Action creators
export const addComment = (comment, subDishId) => (dispatch) => {
  dispatch({ type: ADD_COMMENT, payload: { comment, subDishId } });
};
