import {Component} from 'react'
import {v4} from 'uuid'
import CounterItem from '../CounterItem'
import {
  AppContainer,
  CounterDisplayContainer,
  DisplayContainerHeading,
  CounterContainer,
  CounterContainerHeading,
  TextInput,
  InputContainer,
  AddButton,
  EmptyImage,
  UserInputsList,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {textInput: '', counterItemsList: []}

  onChangeText = event => {
    this.setState({textInput: event.target.value})
  }

  addToCounterItemsList = event => {
    event.preventDefault()
    const {textInput} = this.state
    const newText = {
      id: v4(),
      userEnteredText: textInput,
      textLength: textInput.length,
    }
    this.setState(prevState => ({
      counterItemsList: [...prevState.counterItemsList, newText],
      textInput: '',
    }))
  }

  renderUserInputs = () => {
    const {counterItemsList} = this.state
    return counterItemsList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      counterItemsList.map(eachItem => (
        <CounterItem key={eachItem.id} userInputDetails={eachItem} />
      ))
    )
  }

  render() {
    const {textInput, counterItemsList} = this.state
    console.log(counterItemsList)
    return (
      <AppContainer>
        <CounterDisplayContainer>
          <DisplayContainerHeading>
            Count the characters like a Boss...
          </DisplayContainerHeading>
          <UserInputsList>{this.renderUserInputs()}</UserInputsList>
        </CounterDisplayContainer>

        <CounterContainer>
          <CounterContainerHeading>Character Counter</CounterContainerHeading>
          <InputContainer>
            <TextInput
              type="text"
              placeholder="Enter the Characters here"
              value={textInput}
              onChange={this.onChangeText}
            />
            <AddButton type="button" onClick={this.addToCounterItemsList}>
              Add
            </AddButton>
          </InputContainer>
        </CounterContainer>
      </AppContainer>
    )
  }
}

export default CharacterCounter
