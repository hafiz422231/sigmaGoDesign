import React , {useState} from 'react'
import './comments.css';
import { FaPaperPlane } from 'react-icons/fa';

const Comments = () => {

    const [comments,setComments] = useState([
        {commentId: 1, srcUrl: '761076.png', comment: 'very informative content! Thank you', name: 'John Doe' },
        {commentId: 2, srcUrl: '761076.png', comment: 'very informative content! Thank you', name: 'John Doe' },
        {commentId: 3, srcUrl: '761076.png', comment: 'very informative content! Thank you', name: 'John Doe' },
        {commentId: 4, srcUrl: '761076.png', comment: 'very informative content! Thank you', name: 'John Doe' }
    ]);

    return (
        <div className="comments-wrapper">
            <p className="pl-3 pt-2">Comments</p>

            <div className="row pl-3" id="comments-design">
                
                {
                    comments.map(comment => (
                        <div className="mt-2 mb-2 w-100 d-flex pl-3 pr-3" key={comment.id}>
                            
                            <img alt="" src={comment.srcUrl} className="commentor-img" />
                            <div className="comment-name-date w-100 pr-4">
                                <span className="comment">{comment.comment}</span>
                                <span className="name-date">
                                    {comment.name} - 03:00 {new Date().toLocaleDateString()}
                                </span>
                                <hr />
                            </div>
                        
                        </div>
                    ))
                }

            </div>

            <div className="row">
                <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                    <div className="comment-input-wrapper">
                        <div className="row p-0 m-0">
                            <div className="col-sm-11 p-0 col-10 col-md-11 col-lg-11 col-xl-11">
                                <input type="text" placeholder="comment" />
                            </div>
                            <div className="col-sm-1 col-2 p-0 pl-3 col-md-1 col-lg-1 col-xl-1">
                                <FaPaperPlane className="paper-plane" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Comments;
