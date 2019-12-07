import React from 'react';
import faker from 'faker'; // creates fake data for dev

const CommentDetail = (props) => {
    return (
        <div className = "comment">
                <a href = "/" className = "avatar">
                    <img alt = "avatar" src={props.portrait}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author} 
                    </a>
                    <div className = "metadata">
                        <span className = "date">
                            {props.timeAgo}
                        </span>
                    </div>
                    <div className="text">
                        {props.commentText}
                    </div>
                </div>
            </div>
    );
};

// export and make this component available to the rest of the project.
export default CommentDetail;