import React, { Component } from 'react'

const btnStyle1 = {
  fontSize: '8px',
  backgroundColor: 'white'
}

const btnStyle2 = {
  fontSize: '8px',
  backgroundColor: 'white',
  border: '7px solid transparent',
  borderImage: 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)',
  borderImageSlice: 1,
}

class TaskVoteButton extends Component {

  state = {
    favorite: false,
    status: 'Favorite',
    btnStyle: btnStyle1
  }

  handleClick = () => {
    let {favorite, btnStyle} = this.state
    favorite = !favorite
    let statement
    let buttonStyle = btnStyle
    if (favorite) {
      statement = 'Unfavorite'
      buttonStyle = btnStyle2
    }
    if (!favorite) {
      statement = 'Favorite'
      buttonStyle = btnStyle1
    }
    this.setState({
      favorite: favorite,
      status: statement,
      btnStyle: buttonStyle
    })
  }

  render() {
    return <button
             onClick={this.handleClick}
             style={this.state.btnStyle}
           >
             Click to {this.state.status} this Task 
           </button>
  }
}

export default TaskVoteButton