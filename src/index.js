import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'; // don't need to end with .js


const App = () => {
    return (
        <div className = "ui container comments">
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>



        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));