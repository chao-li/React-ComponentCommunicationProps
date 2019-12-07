import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'; // don't need to end with .js
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className = "ui container comments">
            <ApprovalCard/>
            <CommentDetail 
                portrait = {faker.image.avatar()}
                author = "Sam" 
                timeAgo = "Today at 4:45PM"
                commentText = "Hi, what's up?"
                            />
            <CommentDetail 
                portrait = {faker.image.avatar()}
                author = "Alex" 
                timeAgo = "Today at 2:00AM"
                commentText = "What a nice day!"
                            />
            <CommentDetail 
                portrait = {faker.image.avatar()}
                author = "Jane" 
                timeAgo = "Yesterday at 5:00PM"
                commentText = "Going to dinner!"
                            />

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));