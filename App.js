import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableOpacity,
	TouchableWithoutFeedback
} from 'react-native'
import AddEntry from './components/AddEntry'
import Br from './components/globals/Br'

export default class App extends React.Component {
	handlePress = () => {
		// alert('Hello!')
	}
	
	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight style={styles.btn} onPress={this.handlePress} underlayColor='#d4271b'>
					<Text style={styles.btnText}>Touchable Highlight</Text>
				</TouchableHighlight>
				<Br/>
				<TouchableOpacity style={styles.btn} onPress={this.handlePress} underlayColor='#d4271b'>
					<Text style={styles.btnText}>Touchable Opacity</Text>
				</TouchableOpacity>
				<Br/>
				<TouchableNativeFeedback backgroundstyle={styles.btn} onPress={this.handlePress}>
					<View style={styles.btn}>
						<Text style={styles.btnText}>Touchable Native Feedback</Text>
					</View>
				</TouchableNativeFeedback>
				<Br/>
				<TouchableWithoutFeedback
					background={TouchableNativeFeedback.SelectableBackground()}
					onPress={this.handlePress}>
					<View style={styles.btn}>
						<Text style={styles.btnText}>Touchable Without Feedback</Text>
					</View>
				</TouchableWithoutFeedback>
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