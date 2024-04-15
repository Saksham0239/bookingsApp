export const defaultStateReducer = (state, action) => {
  const { payload } = action;

  return {
    ...state,
    ...payload,
  };
};
