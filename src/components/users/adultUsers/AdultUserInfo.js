import React from 'react'

import AdultUserAvatar from './AdultUserAvatar'
import ChildUserAvatar from '../childUsers/ChildUserAvatar'
import { NavLink } from 'react-router-dom'

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, purple, teal)'
}

const liStyle = {
  fontSize: '20px',
  textAlign: 'center',
  margin: '0 0 8px 0',
  listStyle: 'square',
  listStylePosition: 'inside'
}

const spanStyle = {
  display: 'inline-flex'
}

const divStyle = {
  display: 'inline-block',
  padding: '5px',
  border: '3px solid transparent',
  borderImage: 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)',
  borderImageSlice: '1',
  margin: '30px',
  alignItems: 'flex-end'
}

const AdultUserInfo = (props) => {
  const adultUser = props.adultUser
  const children = adultUser.children

  const uniqueChildren = Array.from(new Set(children.map(child => child.name)))
    .map(name => {
      return children.find(child => child.name === name)
  })
  
  const currentTasks = (array, childId) => 
    array.filter(task => task.taskReceiverId === childId && task.completed === false).map(filteredTask => (
      <li key={filteredTask.id} style={liStyle}>
        {filteredTask.name}
      </li>
    )
  )

  const completedTasks = (array, childId) => 
    array.filter(task => task.taskReceiverId === childId && task.completed === true).map(filteredTask => (
      <li key={filteredTask.id} style={liStyle}>
        {filteredTask.name}
      </li>
    )
  )

  const childrenDetails = uniqueChildren.map( (child, id) => (
    <div style={divStyle} key={id}>
      {
        <>
          <h2>{child.name}</h2>
          <ChildUserAvatar imgURL={child.avatar}/>
          <h3>Sticker Points: {child.points}</h3>
          <h3>Stickers: {child.stickers.length}</h3>
          <h3>Prizes: {child.prizes.length}</h3>
          <h2>Current Tasks:</h2>
          {currentTasks(adultUser.parent_tasks, child.id)}
          <h2>Completed Tasks:</h2>
          {completedTasks(adultUser.parent_tasks, child.id)}
        </>
      }
    </div>
  ))
  
  return (
    <div ref={props.refProp} id="adult-user-info">
      <h1>{adultUser.name}</h1>
      <AdultUserAvatar imgURL={adultUser.avatar}/>

      <NavLink to={`/adult/profile/edit`}>
        <button 
          style={btnStyle}>
            Edit User {adultUser.name}
        </button>
      </NavLink>

      <button 
        onClick={() => props.adultUserDelete(adultUser.id)}
        style={btnStyle}> 
          Delete User {adultUser.name}
      </button><br/><br/>

      <h1>Children:</h1>
      <span style={spanStyle}>{childrenDetails}</span><br/><br/>

      <button 
        style={btnStyle} 
        onClick={() => props.scrollToTop()}>
          Top of Page 
      </button>
    </div>
  )
}

export default AdultUserInfo