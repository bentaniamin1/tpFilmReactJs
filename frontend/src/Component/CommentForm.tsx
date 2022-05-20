import React, {useState} from "react";
import {LocalCommentPost} from "../Interface/LocalCommentPost";
import usePostComment from "../Hook/usePostComment";
import {CommentInterface, LoginResponseInterface} from "../Interface/ResponsesInterfaces";
import { useDispatch, useSelector } from  'react-redux';


interface CommentFormPropsInterface {
    loggedUser: LoginResponseInterface,
    setNeedsUpdate: React.Dispatch<boolean>
}

export default function CommentForm({loggedUser, setNeedsUpdate}: CommentFormPropsInterface) {
    const [localComment, setLocalComment] = useState<LocalCommentPost>({content: "", title: ""})
    
    
    // const postComment = usePostComment();


    const handleChange = ({target}: any) => {
        setLocalComment(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (loggedUser.token != null) {
            // postComment(loggedUser.token, localComment)
            //     .then(data => {
            //         console.log(data)
            //         setLocalComment({content: "", title: ""})
            //         setNeedsUpdate(true);
            //     })


        }
    }

    return (
        <form className='mx-auto' style={{maxWidth: '350px'}} onSubmit={handleSubmit}>
            <h2 className='mb-3 text-center'>Feel like a writer ?</h2>
            <div className="mb-3 form-floating">
                <textarea className="form-control" placeholder="Write here" id="floatingTextarea" name='content'
                          style={{height: '100px'}} onChange={handleChange} value={localComment.content}/>
                <label htmlFor="floatingTextarea">Content</label>
            </div>
            <button type='submit' className='btn btn-primary w-100'>Send</button>
        </form>
    )
}
