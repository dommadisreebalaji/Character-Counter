import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-left: 100px;
  margin-right: 100px;
`

export const CounterDisplayContainer = styled.div`
  width: 50%;
  background-color: #ffc533;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 80vh;
`
export const DisplayContainerHeading = styled.h1`
  font-family: Roboto;
  color: #0f172a;
  background-color: #ffbf1f;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 50px;
  padding-bottom: 50px;
`
export const CounterContainer = styled.div`
  width: 50%;
  background-color: #0f172a;
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CounterContainerHeading = styled.h1`
  font-family: Roboto;
  color: #ffbf1f;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;
`

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
`

export const TextInput = styled.input`
  outline: none;
  background-color: #ffffff;
  color: #475569;
  border-radius: 3px;
  font-family: Roboto;
  height: 40px;
  width: 250px;
  padding-left: 10px;
`

export const AddButton = styled.button`
  background-color: #ffbf1f;
  color: #1e293b;
  font-family: Roboto;
  height: 40px;
  margin-left: 10px;
  border-radius: 4px;
  font-weight: bold;
  width: 70px;
`
export const UserInputsList = styled.ul`
  margin-top: 50px;
`

export const EmptyImage = styled.img`
  height: 400px;
  padding: 50px;
  margin-bottom: 10px;
`
