import { useEffect, useRef } from 'react'
import { Easing } from 'react-native'
import { Image } from 'react-native'
import { Animated } from 'react-native'
import { View, Text } from 'react-native'
import Draggable from 'react-native-draggable'
import { people } from '../data'

function SomeAnimation() {
	const fadeAnim = useRef(new Animated.Value(0)).current
	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 2,
			easing: Easing.ease,
			useNativeDriver: true,
		}).start()
	}, [fadeAnim])
	return (
		<View>
			<Animated.View style={{ opacity: fadeAnim }}>
				<Draggable>
          <Image source={people[0].img} />
        </Draggable>
			</Animated.View>
			<Text>fsdfsdf</Text>
		</View>
	)
}

export default SomeAnimation
