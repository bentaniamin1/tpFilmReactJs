

export function registerReducer(state = {}, action: any) {
  switch (action.type) {
    case "Register":
      return action.payload;
    default:
      return state
  }
}