import { ADD_COMMENT } from "../actions/comments";

const initialState = {
  comments: {},
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      const { comment, subDishId } = action.payload;
      return {
        ...state,
        comments: {
          ...state.comments,
          [subDishId]: state.comments[subDishId]
            ? [...state.comments[subDishId], comment]
            : [comment],
        },
      };
    default:
      return state;
  }
}
