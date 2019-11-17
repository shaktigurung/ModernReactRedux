import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className = "ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    image = {faker.image.avatar()} 
                    author ="Sam" 
                    timeAgo="Today at 4:50 PM"  
                    text="Nice blog post!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    image = {faker.image.avatar()} 
                    author ="Alex" 
                    timeAgo="Yesterday at 2:50 PM" 
                    text="Nice blog post!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    image = {faker.image.avatar()} 
                    author ="Jack" 
                    timeAgo="Today at 4:00 PM" 
                    text="Thank you for the comments!"/>
            </ApprovalCard>  
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)