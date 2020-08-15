import React, { Component } from 'react'
import {connect} from 'react-redux'

import childUserProfile from '../../../actions/users/childUsers/childUserProfile'
import childUserDelete from '../../../actions/users/childUsers/childUserDelete'
import ChildUserInfo from './ChildUserInfo'
import ErrorsContainer from '../../../containers/ErrorsContainer'

class ChildUserProfile extends Component {

  state = {
    currentErrors: null,
    showingUserProfile: true,
    showingEditForm: false 
  }

  componentDidMount() {
    this.props.childUserProfile()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      if (this.props.errors !== null) {
        this.handleClick()
        this.setState({
          currentErrors: this.props.errors
        })
      }
    }
  }

  handleClick = () => {
    const {showingUserProfile, showingEditForm} = this.state
    this.setState({
      showingUserProfile: !showingUserProfile, 
      showingEditForm: !showingEditForm
    })
  }

  renderUpdateErrors = () => {
    const currentErrors = this.state.currentErrors
    if (currentErrors) {
      return (
        <ErrorsContainer
          errors={this.props.errors}
        />
      )
    }
    else return null
  }
  
  render() {
    return (
      <div>
        <ChildUserInfo
          renderUpdateErrors={this.renderUpdateErrors}
          childUserDelete={this.props.childUserDelete}
          profileState={this.state} 
          handleClick={this.handleClick}
          currentUser={this.props.currentUser}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.childUserReducer.currentUser,
    errors: state.childUserReducer.errors
  }
}

export default connect(mapStateToProps, {childUserProfile, childUserDelete})(ChildUserProfile)