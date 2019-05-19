import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Slider
} from 'react-native'
import AddEntry from './components/AddEntry'
import Br from './components/globals/Br'

export default class App extends React.Component {
	state = {
		value: 0
	}
	render() {
		return (
			<View>
				<AddEntry/>
			</View>
		)
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginLeft: 10,
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	btn: {
		backgroundColor: '#E53224',
		padding: 10,
		paddingLeft: 50,
		paddingRight: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5
	},
	btnText: {
		color: '#fff'
	}
})