import React from 'react';
import './List.css';
import UserInfo from '../user-info/UserInfo';
import ChatList from '../chat-list/ChatList';

function List() {
    return (
        <div className='list'>
            <UserInfo />
            <ChatList />
        </div>
    );
}

export default List;