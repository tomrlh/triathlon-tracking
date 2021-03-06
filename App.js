import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
	state = {
		value: 0,
		input: 'tomrlh',
		showInput: false
	}
	handleToggleSwitch = () => {
		this.setState((state) => ({showInput: !state.showInput}))
	}
	handleTextChange = (input) => {
		this.setState(() => ({input}))
	}

	render() {
		return (
			<Provider store={createStore(reducer)}>
				<View style={{flex: 1}}>
					<AddEntry/>
				</View>
			</Provider>
		)
	}
}