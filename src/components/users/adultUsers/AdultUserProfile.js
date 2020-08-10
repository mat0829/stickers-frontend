import React, { Component } from 'react'
import {connect} from 'react-redux'

import adultUserProfile from '../../../actions/users/adultUsers/adultUserProfile'
import adultUserDelete from '../../../actions/users/adultUsers/adultUserDelete'
import AdultUserInfo from './AdultUserInfo'

class AdultUserProfile extends Component {

  componentDidMount() {
    this.props.adultUserProfile()
  }

  state = {
    showingUserProfile: true,
    showingEditForm: false 
  }

  handleClick = () => {
    const {showingUserProfile, showingEditForm} = this.state
    this.setState({showingUserProfile: !showingUserProfile, 
        showingEditForm: !showingEditForm
    })
  }
  
  render() {
    return (
      <div>
        <AdultUserInfo
          adultUserDelete={this.props.adultUserDelete}
          profileState={this.state} 
          handleClick={this.handleClick}
          currentUser={this.props.currentUser}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.adultUserReducer.currentUser
  }
}

export default connect(mapStateToProps, {adultUserProfile, adultUserDelete})(AdultUserProfile)