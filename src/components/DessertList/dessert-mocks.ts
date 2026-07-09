import type { IDessert, IDessertCatalog } from '../../types/catalog'

export const DESSERTS_CATALOG_MOCK: IDessertCatalog[] = [
	{
		id: 1,
		title: 'Шоколадный торт Прага',
		price: 450,
		image:
			'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
		categories: [
			{ id: 1, title: 'Торты' },
			{ id: 2, title: 'Шоколадные десерты' },
		],
	},
	{
		id: 2,
		title: 'Фисташковый эклер',
		price: 180,
		image:
			'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop',
		categories: [
			{ id: 3, title: 'Пирожные' },
			{ id: 4, title: 'Эклер-бар' },
		],
	},
	{
		id: 3,
		title: 'Чизкейк Нью-Йорк',
		price: 320,
		image:
			'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=300&fit=crop',
		categories: [
			{ id: 1, title: 'Торты' },
			{ id: 10, title: 'Чизкейки' },
		],
	},
	{
		id: 4,
		title: 'Набор макарон (4 шт)',
		price: 360,
		image:
			'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=300&fit=crop',
		categories: [
			{ id: 3, title: 'Пирожные' },
			{ id: 6, title: 'Макароны' },
		],
	},
	{
		id: 5,
		title: 'Лимонный тарт с меренгой',
		price: 260,
		image:
			'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&h=300&fit=crop',
		categories: [
			{ id: 3, title: 'Пирожные' },
			{ id: 5, title: 'Тарты' },
		],
	},
	{
		id: 6,
		title: 'Клубничная Панна-Котта',
		price: 240,
		image:
			'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
		categories: [
			{ id: 7, title: 'В стаканчиках' },
			{ id: 8, title: 'Низкокалорийные' },
		],
	},
	{
		id: 7,
		title: 'Итальянский Тирамису',
		price: 290,
		image:
			'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
		categories: [
			{ id: 3, title: 'Пирожные' },
			{ id: 7, title: 'В стаканчиках' },
		],
	},
	{
		id: 8,
		title: 'Французский круассан',
		price: 130,
		image:
			'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop',
		categories: [{ id: 9, title: 'Выпечка' }],
	},
	{
		id: 9,
		title: 'Морковный торт с карамелью',
		price: 340,
		image:
			'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop',
		categories: [{ id: 1, title: 'Торты' }],
	},
	{
		id: 10,
		title: 'Черничный чизкейк Сан-Себастьян',
		price: 380,
		image:
			'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop',
		categories: [
			{ id: 1, title: 'Торты' },
			{ id: 10, title: 'Чизкейки' },
		],
	},
]

export const DESSERTS_MOCK: IDessert[] = [
	{
		id: 1,
		title: 'Шоколадный торт «Прага»',
		description:
			'Классический бисквитный торт с насыщенным шоколадным кремом и абрикосовым джемом, покрытый глянцевой глазурью.',
		price: 450,
		isActive: true,
		facts: {
			calories: 380,
			protein: 5.2,
			fat: 18.4,
			carbohydrates: 48.1,
			weight: 150,
		},
		images: [
			{
				id: 101,
				url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
				sortOrder: 1,
			},
			{
				id: 102,
				url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop',
				sortOrder: 2,
			},
			{
				id: 103,
				url: 'https://images.unsplash.com/photo-1541783245831-57e6e092a7e9?w=600&h=400&fit=crop',
				sortOrder: 3,
			},
			{
				id: 104,
				url: 'https://images.unsplash.com/photo-1589810635657-232948472d98?w=600&h=400&fit=crop',
				sortOrder: 4,
			},
		],
		categories: [
			{ id: 1, title: 'Торты' },
			{ id: 2, title: 'Шоколадные десерты' },
		],
	},
	{
		id: 2,
		title: 'Фисташковый эклер',
		description:
			'Заварное тесто с нежным авторским кремом на основе натуральной фисташковой пасты и белого шоколада.',
		price: 180,
		isActive: true,
		facts: {
			calories: 290,
			protein: 4.8,
			fat: 15.1,
			carbohydrates: 33.5,
			weight: 80,
		},
		images: [
			{
				id: 201,
				url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=400&fit=crop',
				sortOrder: 1,
			},
			{
				id: 202,
				url: 'https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?w=600&h=400&fit=crop',
				sortOrder: 2,
			},
			{
				id: 203,
				url: 'https://images.unsplash.com/photo-1612203985729-7072690f8a0d?w=600&h=400&fit=crop',
				sortOrder: 3,
			},
			{
				id: 204,
				url: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=400&fit=crop',
				sortOrder: 4,
			},
		],
		categories: [
			{ id: 3, title: 'Пирожные' },
			{ id: 4, title: 'Эклер-бар' },
		],
	},
	{
		id: 3,
		title: 'Чизкейк «Нью-Йорк»',
		description:
			'Традиционный американский чизкейк из нежнейшего сливочного сыра на песочной подложке.',
		price: 320,
		isActive: true,
		facts: {
			calories: 410,
			protein: 6.5,
			fat: 26.0,
			carbohydrates: 37.2,
			weight: 130,
		},
		images: [
			{
				id: 301,
				url: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=400&fit=crop',
				sortOrder: 1,
			},
			{
				id: 302,
				url: 'https://images.unsplash.com/photo-1547928573-a4f2c21b6d9d?w=600&h=400&fit=crop',
				sortOrder: 2,
			},
			{
				id: 303,
				url: 'https://images.unsplash.com/photo-1578015542950-7a18b0e8a77f?w=600&h=400&fit=crop',
				sortOrder: 3,
			},
			{
				id: 304,
				url: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=400&fit=crop',
				sortOrder: 4,
			},
		],
		categories: [
			{ id: 1, title: 'Торты' },
			{ id: 10, title: 'Чизкейки' },
		],
	},
	{
		id: 4,
		title: 'Набор макарон (4 шт)',
		description:
			'Ассорти французских пирожных макарон со вкусами: малина, соленая карамель, манго-маракуйя, ваниль.',
		price: 360,
		isActive: true,
		facts: {
			calories: 340,
			protein: 7.0,
			fat: 14.0,
			carbohydrates: 46.5,
			weight: 90,
		},
		images: [
			{
				id: 401,
				url: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&h=400&fit=crop',
				sortOrder: 1,
			},
			{
				id: 402,
				url: 'https://images.unsplash.com/photo-1558326567-98ae8c3c1ff2?w=600&h=400&fit=crop',
				sortOrder: 2,
			},
			{
				id: 403,
				url: 'https://images.unsplash.com/photo-1542800456-72215b4cc0fd?w=600&h=400&fit=crop',
				sortOrder: 3,
			},
			{
				id: 404,
				url: 'https://images.unsplash.com/photo-1612377360451-097644b63912?w=600&h=400&fit=crop',
				sortOrder: 4,
			},
		],
		categories: [
			{ id: 3, title: 'Пирожные' },
			{ id: 6, title: 'Макароны' },
		],
	},
	{
		id: 5,
		title: 'Лимонный тарт с меренгой',
		description:
			'Хрустящая песочная основа с кислым лимонным курдом и шапкой из обожженной сладкой итальянской меренги.',
		price: 260,
		isActive: true,
		facts: {
			calories: 315,
			protein: 3.9,
			fat: 11.2,
			carbohydrates: 49.8,
			weight: 110,
		},
		images: [
			{
				id: 501,
				url: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&h=400&fit=crop',
				sortOrder: 1,
			},
			{
				id: 502,
				url: 'https://images.unsplash.com/photo-1620336655058-b6fd8fefa622?w=600&h=400&fit=crop',
				sortOrder: 2,
			},
			{
				id: 503,
				url: 'https://images.unsplash.com/photo-1605568003517-dfafb45da54c?w=600&h=400&fit=crop',
				sortOrder: 3,
			},
			{
				id: 504,
				url: 'https://images.unsplash.com/photo-1578995460947-05ef04204c2a?w=600&h=400&fit=crop',
				sortOrder: 4,
			},
		],
		categories: [
			{ id: 3, title: 'Пирожные' },
			{ id: 5, title: 'Тарты' },
		],
	},
	{
		id: 6,
		title: 'Клубничная Панна-Котта',
		description:
			'Традиционный североитальянский десерт из сливок, желатина и ванили, украшенный ярким желе и свежей клубникой.',
		price: 240,
		isActive: true,
		facts: {
			calories: 210,
			protein: 3.1,
			fat: 12.5,
			carbohydrates: 22.0,
			weight: 120,
		},
		images: [
			{
				id: 601,
				url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop',
				sortOrder: 1,
			},
			{
				id: 602,
				url: 'https://images.unsplash.com/photo-1587312653296-7958b5d8f7aa?w=600&h=400&fit=crop',
				sortOrder: 2,
			},
			{
				id: 603,
				url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop',
				sortOrder: 3,
			},
			{
				id: 604,
				url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop',
				sortOrder: 4,
			},
		],
		categories: [
			{ id: 7, title: 'В стаканчиках' },
			{ id: 8, title: 'Низкокалорийные' },
		],
	},
	{
		id: 7,
		title: 'Итальянский Тирамису',
		description:
			'Мягкий кофейный десерт из печенья савоярди, пропитанного эспрессо и крепким ликером, со сливочным кремом маскарпоне.',
		price: 290,
		isActive: true,
		facts: {
			calories: 355,
			protein: 5.8,
			fat: 21.0,
			carbohydrates: 34.4,
			weight: 140,
		},
		images: [
			{
				id: 701,
				url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop',
				sortOrder: 1,
			},
			{
				id: 702,
				url: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf8591a?w=600&h=400&fit=crop',
				sortOrder: 2,
			},
			{
				id: 703,
				url: 'https://images.unsplash.com/photo-1564827179164-5254bb7cc439?w=600&h=400&fit=crop',
				sortOrder: 3,
			},
			{
				id: 704,
				url: 'https://images.unsplash.com/photo-1572309769777-67a6efb62e5c?w=600&h=400&fit=crop',
				sortOrder: 4,
			},
		],
		categories: [
			{ id: 3, title: 'Пирожные' },
			{ id: 7, title: 'В стаканчиках' },
		],
	},
	{
		id: 8,
		title: 'Французский круассан',
		description:
			'Свежевыпеченный круассан из многослойного воздушного теста на натуральном сливочном масле прямо из нашей пекарни.',
		price: 130,
		isActive: true,
		facts: {
			calories: 310,
			protein: 6.2,
			fat: 16.5,
			carbohydrates: 35.0,
			weight: 70,
		},
		images: [
			{
				id: 801,
				url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=400&fit=crop',
				sortOrder: 1,
			},
			{
				id: 802,
				url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=400&fit=crop',
				sortOrder: 2,
			},
			{
				id: 803,
				url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop',
				sortOrder: 3,
			},
			{
				id: 804,
				url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=400&fit=crop',
				sortOrder: 4,
			},
		],
		categories: [{ id: 9, title: 'Выпечка' }],
	},
	{
		id: 9,
		title: 'Морковный торт с карамелью',
		description:
			'Пряные морковные коржи с добавлением грецкого ореха, корицы и апельсиновой цедры под нежным сырным кремом.',
		price: 340,
		isActive: false,
		facts: {
			calories: 395,
			protein: 4.9,
			fat: 22.1,
			carbohydrates: 44.0,
			weight: 140,
		},
		images: [
			{
				id: 901,
				url: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=400&fit=crop',
				sortOrder: 1,
			},
			{
				id: 902,
				url: 'https://images.unsplash.com/photo-1583321500905-1bf5f1f1aa23?w=600&h=400&fit=crop',
				sortOrder: 2,
			},
			{
				id: 903,
				url: 'https://images.unsplash.com/photo-1541783245831-57e6e092a7e9?w=600&h=400&fit=crop',
				sortOrder: 3,
			},
			{
				id: 904,
				url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop',
				sortOrder: 4,
			},
		],
		categories: [{ id: 1, title: 'Торты' }],
	},
	{
		id: 10,
		title: 'Черничный чизкейк Сан-Себастьян',
		description:
			'Знаменитый «жженый» баскский чизкейк со сливочной текстурой без основы, дополненный прослойкой из лесной черники.',
		price: 380,
		isActive: true,
		facts: {
			calories: 430,
			protein: 7.2,
			fat: 29.5,
			carbohydrates: 31.8,
			weight: 150,
		},
		images: [
			{
				id: 1001,
				url: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=400&fit=crop',
				sortOrder: 1,
			},
			{
				id: 1002,
				url: 'https://images.unsplash.com/photo-1547928573-a4f2c21b6d9d?w=600&h=400&fit=crop',
				sortOrder: 2,
			},
			{
				id: 1003,
				url: 'https://images.unsplash.com/photo-1578015542950-7a18b0e8a77f?w=600&h=400&fit=crop',
				sortOrder: 3,
			},
			{
				id: 1004,
				url: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&h=400&fit=crop',
				sortOrder: 4,
			},
		],
		categories: [
			{ id: 1, title: 'Торты' },
			{ id: 10, title: 'Чизкейки' },
		],
	},
]
