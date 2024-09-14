import React from 'react';
function CommentSection({ comments }) {
    return (
        <div>
            <h4>Comments</h4>
            {comments.map((comment) => (
                <div key={comment._id}>
                    <p>{comment.text}</p>
                    {/* Render replies if any */}
                </div>
            ))}
        </div>
    );
}

export default CommentSection;
