export function getReducer(state = {}, action: any) {
    switch (action.type) {
      case "getComment":
        return "comment";
      case "getMovie":
        return "getMovie";
      default:
        return state
    }
  }