import { faker } from '@faker-js/faker'

export const products = [
	{
		title: 'Testing',
		imgUrl: faker.image.food(160, 120, true),
	},
	{
		title: 'Testing',
		imgUrl: faker.image.food(160, 120, true),
	},
	{
		title: 'Testing',
		imgUrl: faker.image.food(160, 120, true),
	},
	{
		title: 'Testing',
		imgUrl: faker.image.food(160, 120, true),
	},
	{
		title: 'Testing',
		imgUrl: faker.image.food(160, 120, true),
	},
]

export const people = [
	{
		name: 'Alex',
		img: faker.image.people(undefined, undefined, true),
	},
	{
		name: 'Jack',
		img: faker.image.people(undefined, undefined, true),
	},
	{
		name: 'John',
		img: faker.image.people(undefined, undefined, true),
	},
]
