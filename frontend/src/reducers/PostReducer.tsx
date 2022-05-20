import usePostComment from "../Hook/usePostComment";

export function postReducer(state = {}, action: any) {
    const postComment = usePostComment();

    switch (action.type) {
      case "postComment":
          postComment(loggedUser.token, localComment)
                .then(data => {
                    console.log(data)
                    setLocalComment({content: "", title: ""})
                    setNeedsUpdate(true);
                })
        return ;
      case "getMovie":
        return "getMovie";
      default:
        return state
    }
  }