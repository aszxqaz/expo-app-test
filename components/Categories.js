import { ScrollView } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { products } from '../data'
import CategoryCard from './CategoryCard'

function Categories() {
	return (
		<ScrollView
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 10,
			}}
			horizontal
			showsHorizontalScrollIndicator={false}>
			{products.map((product) => (
				<CategoryCard key={product.imgUrl} imgUrl={product.imgUrl} title={product.title} />
			))}
		</ScrollView>
	)
}

export default Categories
