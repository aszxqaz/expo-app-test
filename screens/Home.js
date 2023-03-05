import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import { useLayoutEffect } from 'react'
import { TextInput } from 'react-native'
import { View, Text } from 'react-native'
import { Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
	AdjustmentsHorizontalIcon,
	ChevronDownIcon,
	MagnifyingGlassIcon,
	UserIcon,
} from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import SomeAnimation from '../components/SomeAnimation'

function Home() {
	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])

	return (
		<SafeAreaView style={{ backgroundColor: 'white', paddingTop: 16 }}>
			{/* Header */}
			<View className="flex-row pb-3 items-center mx-4 space-x-2">
				<Image
					className="h-7 w-7 bg-gray-300"
					source={{ uri: 'https://links.papareact.com/wru' }}
				/>
				<View className="flex-1">
					<DeliverText>Deliver Now!</DeliverText>
					<Text className="font-bold text-xl">
						Current Location
						<ChevronDownIcon size={20} color="#00CCBB" />
					</Text>
				</View>
				<UserIcon size={35} color="#00CCBB" />
			</View>
			{/* Search */}
			<View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
				<View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
					<MagnifyingGlassIcon color="gray" size={20} />
					<TextInput placeholder="Restaurants and cuisines" />
				</View>
				<AdjustmentsHorizontalIcon color="#00CCBB" />
			</View>
			{/* Body */}
			<View
				// className="bg-gray-100 flex-1"
				contentContainerStyle={{
					paddingBottom: '100px',
				}}>
				{/** Categories */}
				{/* <Categories /> */}
        <Text>dsfsdfd</Text>
        <SomeAnimation />
				{/** Featured */}
				{/* <FeaturedRow
					title="Featured"
					description="Paid placements our partners"
					featuredCategory="featured"
				/>
				<FeaturedRow
					title="Tasty Discounts"
					description="Everyone's been enjoying these juicy discounts!"
					featuredCategory="discounts"
				/>
				<FeaturedRow
					title="Offers near you!"
					description="Why not support your local restaurant tonight!"
					featuredCategory="offers"
				/> */}
			</View>
		</SafeAreaView>
	)
}

const DeliverText = styled.Text`
	font-weight: bold;
	color: gray;
	font-size: 14px;
`

export default Home
