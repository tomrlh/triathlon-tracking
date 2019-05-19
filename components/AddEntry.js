import React, { Component } from 'react'
import { View } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'
import Slider from './Slider'
import Stepper from './Stepper'
import DateHeader from './DateHeader'

function SubmitBtn ({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text>SUBMIT</Text>
		</TouchableOpacity>
	)
}

export default class AddEntry extends Component {
	state = {
		run: 0,
		bike: 10,
		swim: 0,
		sleep: 0,
		eat: 0,
	}

	increment = (metric) => {
		const { max, sleep } = getMetricMetaInfo(metric)

		this.setState((state) => {
			return {
				...state,
				[metric]: count < 0 ? 0 : count
			}
		})
	}
	decrement = (metric) => {
		const { max, sleep } = getMetricMetaInfo(metric)

		this.setState((state) => {
			const count = state[metric] - step

			return {
				...state,
				[metric]: count > max ? max : count
			}
		})
	}
	slide = (metric, value) => {
		this.setState(() =>  ({
			[metric]: value
		}))
	}
	submit = () => {
		const key = timeToString()
		const entry = this.state

		// Udate Redux
		this.setState(() => ({
			run: 0,
			bike: 0,
			swim: 0,
			sleep: 0,
			eat: 0,
		}))
		// Navigate to Home
		// Save to 'DB'
		// Clear local notification
	}


	render() {
		const metaInfo = getMetricMetaInfo()
		return (
			<View>
				<DateHeader date={(new Date()).toLocaleDateString()}/>
				<Text>{JSON.stringify(this.state)}</Text>
				{Object.keys(metaInfo).map((key) => {
					const { getIcon, type, ...rest } = metaInfo[key]
					const value = this.state[key]

					return (
						<View key={key}>
							{getIcon()}
							{type === 'slider'
								? <Slider
									value={value}
									onChange={(value) => this.slide(key, value)}
									{...rest}
								/>
								: <Stepper
									value={value}
									onIncrement={() => this.increment(key)}
									ondecrement={() => this.decrement(key)}
									{...rest}
								/>
							}
						</View>
					)
				})}
				<SubmitBtn onPress={this.submit}/>
			</View>
		)
	}
}