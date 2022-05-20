import useEraseCookie from "../Hook/useEraseCookie";
export function SigninReducer(state = {}, action: any) {
    switch (action.type) {
      case "Login":
        return true;
      case "Logout":
        const eraseCookie = useEraseCookie();
        eraseCookie();
        return {
          status: 'error',
          token: "",
          username: ""
        }
      default:
        return state
    }
  }