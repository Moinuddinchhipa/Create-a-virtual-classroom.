import React from 'react';

function LectureView({ lecture }) {
    return (
        <div>
            <h3>{lecture.title}</h3>
            <p>{lecture.content}</p>
            {/* Add the CommentSection component here */}
        </div>
    );
}

export default LectureView;
