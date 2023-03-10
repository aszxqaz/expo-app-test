import { ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'

function FeaturedRow({ title, description, featuredCategory }) {
	return (
		<View>
			<View className="mt-4 flex-row items-center justify-between px-4">
				<Text className="font-bold text-lg">{title}</Text>
				<ArrowRightIcon color="#00CCBB" />
			</View>
			<Text className="text-xs text-gray-500 px-4">{description}</Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: 15,
				}}
				className="pt-4"></ScrollView>
		</View>
	)
}

export default FeaturedRow
