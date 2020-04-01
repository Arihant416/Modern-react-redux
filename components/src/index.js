import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        {/*Components are an exception if we are to nest it within other components we have to tag it not add it in curly braces. */}
        <CommentDetail
          author='Sam'
          momentofCreation='Today at 4:50PM'
          comment='I am Sam'
          faker={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Alex'
          momentofCreation='Today at 2:30PM'
          comment='I am Alex'
          faker={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Bootstrap'
          momentofCreation='Today at 1:20PM'
          comment='I am Bootstrap'
          faker={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Jane'
          momentofCreation='Today at 1:50AM'
          comment='I am Jane'
          faker={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
