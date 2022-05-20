export function  postComment(payload: any) {
    return {
        type: 'postComment',
        payload: payload
    }

}

export function  postMovie() {
    return {
        type: 'postMovie',
    }

}