import React from 'react'

import ChildUserAvatar from './ChildUserAvatar'
import { NavLink } from 'react-router-dom'

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, purple, teal)'
}

const liStyle = {
  fontSize: '25px',
  textAlign: 'center',
  margin: '0 0 8px 0',
  listStyle: 'square',
  listStylePosition: 'inside'
}

const ChildUserInfo = (props) => {
  const childUser = props.childUser
  const tasks = props.childUser.child_tasks

  let currentTasks = tasks.filter(task => task.completed !== true).map(filteredTask => (
    <li key={filteredTask.id} style={liStyle}>
      {filteredTask.name}
    </li>
  ))
  if (currentTasks.length === 0) {
    currentTasks = <li style={liStyle}>'You currently have 0 tasks. Ask your parent(s) or guardians(s) to create some for you.'</li>
  }

  const completedTasks = tasks.filter(task => task.completed === true).map(filteredTask => (
    <li key={filteredTask.id} style={liStyle}>
      {filteredTask.name}
    </li>
  ))


  return (
    <div ref={props.refProp} id="child-user-info">
      <h1>{childUser.name}</h1>
      <ChildUserAvatar imgURL={childUser.avatar}/>
      <h2>Sticker Points: {childUser.points}</h2>
      <h2>Stickers: {childUser.stickers.length}</h2>
      <h2>Prizes: {childUser.prizes.length}</h2>

      <NavLink to={`/child/profile/edit`}>
        <button
          style={btnStyle}>
            Edit User {childUser.name}
        </button>
      </NavLink>

      <button 
        onClick={() => props.childUserDelete(childUser.id)}
        style={btnStyle}> 
          Delete User {childUser.name}
      </button>

      <h2>Current Tasks:</h2>
      <ul>{currentTasks}</ul>

      <h2>Completed Tasks:</h2>
      <ul>{completedTasks}</ul>

      <button 
        style={btnStyle} 
        onClick={() => props.scrollToTop()}>
          Top of Page 
      </button>
    </div>
  )
}

export default ChildUserInfo