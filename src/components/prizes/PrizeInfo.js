import React from 'react'
import {NavLink} from 'react-router-dom'

import ChildUserAvatar from '../users/childUsers/ChildUserAvatar'

const prizeImgStyle = {
  maxWidth: '400px',
  maxHeight: '200px'
}

const btnStyle = {
  color: 'white',
  backgroundImage: 'linear-gradient(to right, blue, red)'
}

const PrizeInfo = (props) => {
  const prize = props.prize
  const history = props.history
  
  if (Object.keys(props.adultUser).length !== 0) {

    return (
      <div ref={props.refProp} id="adult-prize-info">
        {(() => {
          if (prize.purchased) {
            return (
              <>
                <h2>{prize.prize_child.name} has purchased: "{prize.name}"!</h2>
                <ChildUserAvatar imgURL={prize.prize_child.avatar}/>

                <h2>{prize.prize_child.name} and added:</h2>

                <img 
                  src={prize.image} 
                  alt="prize img" 
                  style={prizeImgStyle}
                />

                <h2>to their Prize Collection!</h2>
              </>
            )
          }
          else {
            return (
              <>
                <h2 id="h2">{prize.name} has not been purchased yet.</h2>
                <h3>~ Created for: {prize.prize_child.name}</h3>
  
                <img 
                  src={prize.image} 
                  alt="prize img" 
                  style={prizeImgStyle}
                />

                <h2>Cost: {prize.cost} Points!</h2>
              </>
            )
          }
        })()}

        <NavLink to={`/prizes/${prize.id}/edit`}>
          <button
            type="button"
            style={btnStyle}>
              Edit this Prize
          </button>
        </NavLink>

        <button
          type="button"
          onClick={() => props.deletePrize(props.prize.id, history)}
          style={btnStyle}>
            Delete this Prize
        </button><br/><br/>

        <NavLink to="/prizes/new">
          <button
            type="button"
            style={btnStyle}>
              Create another new Prize
          </button><br/><br/>
        </NavLink> 
  
        <button
          type="button"
          style={btnStyle}
          onClick={() => props.scrollToTop()}>
            Top of Page
        </button><br/><br/>
      </div>
    )
  } 
  else if (Object.keys(props.childUser).length !== 0) {
    return (
      <div ref={props.refProp} id="child-prize-info">
        {(() => {
          if (prize.purchased) {
            return (
              <>
                <h1>Congratulations {prize.prize_child.name}!</h1>
                <ChildUserAvatar imgURL={prize.prize_child.avatar}/>

                <h2>You purchased "{prize.name}"!</h2>

                <h2>You also added:</h2>

                <img 
                  src={prize.image} 
                  alt="prize img" 
                  style={prizeImgStyle}
                />

                <h2>to your Prize Collection!</h2>
              </>
            )
          } 
          else {
            return (
              <>
                <h1>"{prize.name}"!</h1>
                
                <h3>~ Created by: {prize.prize_parent.name}</h3>

                <img 
                  src={prize.image} 
                  alt="prize img"
                  style={prizeImgStyle}
                />

                <h2>Cost: {prize.cost} Points!</h2>

                <button
                  type="button"
                  style={btnStyle}
                  onClick={() => props.purchasePrize(prize, props.childUser, history)}>
                    Purchase this Prize
                </button><br/><br/>
              </>
            )
          }
        })()}
        
        <button
          type="button"
          style={btnStyle}
          onClick={() => props.scrollToTop()}>
            Top of Page
        </button><br/><br/>
      </div>
    )
  }
}

export default PrizeInfo