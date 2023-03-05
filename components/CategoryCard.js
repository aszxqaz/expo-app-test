import { Image } from 'react-native'
import { TouchableOpacity, Text } from 'react-native'
import { View } from 'react-native'

function CategoryCard({ imgUrl, title }) {
	return (
		<TouchableOpacity>
			<Image source={{ url: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
		</TouchableOpacity>
	)
}

export default CategoryCard
