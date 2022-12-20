import {Component} from 'react'
import {v4} from 'uuid'
import CharacterCount from '../CharacterCount'
import './index.css'

class HomePage extends Component {
  state = {characters: '', userEnteredList: []}

  onChangeUserInput = event => {
    this.setState({characters: event.target.value})
  }

  onSubmitInput = event => {
    event.preventDefault()

    const {characters} = this.state
    const newCharacterList = {
      id: v4(),
      userEnteredCharacter: characters,
      textLength: characters.length,
    }
    this.setState(prevState => ({
      userEnteredList: [...prevState.userEnteredList, newCharacterList],
      characters: '',
    }))
  }

  renderUserInput = () => {
    const {userEnteredList} = this.state
    // const count = characters.length

    return userEnteredList.length === 0 ? (
      <img
        alt="no user inputs"
        className="no-user-input-image"
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      />
    ) : (
      <ul>
        {userEnteredList.map(eachCharacter => (
          <CharacterCount
            key={eachCharacter.id}
            characterDetails={eachCharacter}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {characters} = this.state

    return (
      <div className="main-container">
        <div className="display-container">
          <h1 className="heading">
            Count the characters like a <br /> Boss...
          </h1>
          {this.renderUserInput()}
        </div>
        <div className="input-container">
          <h1 className="character-heading">Character Counter</h1>
          <form onSubmit={this.onSubmitInput}>
            <input
              type="text"
              value={characters}
              placeholder="Enter the Characters here"
              className="user-input"
              onChange={this.onChangeUserInput}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default HomePage
