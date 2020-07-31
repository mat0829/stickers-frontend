const adultCreateAvatar = () => {
  return dispatch => {
    let userChoice
    let avatar
    const robotNumber = Math.floor((Math.random() * 1000) + 1)
    const catNumber = Math.floor((Math.random() * 415) + 1)
    const dogNumber = Math.floor((Math.random() * 100) + 1)
    const monsterNumber = Math.floor((Math.random() * 750) + 1)
    
    userChoice = prompt("Choose between a random Robot, Cat, Dog, Monster Avatar or type in a Noun(person, place, or thing)")
      if (userChoice === 'Robot' || userChoice === 'robot') {
        avatar = `https://robohash.org/Random-Robot-Avatar${robotNumber}.png` // Generates a random Robot avatar
      } else if (userChoice === 'Cat' || userChoice === 'cat') {
          avatar = `https://cataas.com/cat?${catNumber}` // Generates a random Cat avatar
      } else if (userChoice === 'Dog' || userChoice === 'dog') {
          avatar = `https://placedog.net/500/280/?id=${dogNumber}` // Generates a random Dog avatar
      } else if (userChoice === 'Monster' || userChoice === 'monster') {
          avatar = `https://api.adorable.io/avatars/200/${monsterNumber}.png` // Generates a random Monster avatar
      } else {
          avatar = `http://loremflickr.com/320/240/${userChoice}` // Generates an avatar based on the word given
      }

    return (
      dispatch({
        type: 'CREATE_ADULT_AVATAR',
        payload: avatar
      })
    )
  }
}

export default adultCreateAvatar