export type StatusType = 'error' | 'success';

export interface LoginResponseInterface {
    status: StatusType,
    message?: string,
    token?: string,
    username?: string;
    props?: any
}

export interface CommentPostResponseInterface {
    status: StatusType,
    message: string
}

export interface MovieInterface {
    id?: number,
    date: string,
    title: string,
    content: string,
    author: string
}

export interface CommentInterface {
    id?: number,
    date: string,
    content?: string,
    author: string
}
