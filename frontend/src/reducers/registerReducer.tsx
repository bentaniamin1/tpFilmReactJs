import useRegister from "../Hook/useRegister";


export function registerReducer(state = {}, action: any) {
  const registerReducer = useRegister()
  switch (action.type) {
    case "Register":
      return action.payload;
    default:
      return state
  }
}