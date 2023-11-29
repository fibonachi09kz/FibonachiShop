import Product from "../models/product";
import Category from "../models/category";
export const CATEGORIES = [
	new Category(
		1,
		"Ассорти",
		"https://samurai-sushi.kz/upload/iblock/72a/72af9efc6f5fe3773ed49380a70610b0.jpg"
	),
	new Category(
		2,
		"Большие роллы",
		"https://samurai-sushi.kz/upload/iblock/72a/72af9efc6f5fe3773ed49380a70610b0.jpg"
	),
	new Category(
		3,
		"Гункан суши",
		"https://samurai-sushi.kz/upload/iblock/bef/bef6b7a8eb75787a52aed2dd822325f5.jpg"
	),
	new Category(
		4,
		"Допы",
		"https://samurai-sushi.kz/upload/iblock/78d/78db2f2debc5579d166a966fd95c5b24.png"
	),
	new Category(
		5,
		"Жаренные роллы",
		"https://samurai-sushi.kz/upload/iblock/0be/0be67c0e41ba3a65666ddcf3c199c5ad.jpg"
	),
	new Category(
		6,
		"Маленькие роллы",
		"https://samurai-sushi.kz/upload/iblock/388/388012b3459a8b94657656412bcd8630.jpg"
	),
	new Category(
		7,
		"Нигири",
		"https://samurai-sushi.kz/upload/iblock/146/14659e87ddc5324ac955d26c5fadee75.jpg"
	),
	new Category(
		8,
		"НОВИНКИ",
		""
	),
	new Category(
		9,
		"Пицца",
		"https://samurai-sushi.kz/upload/iblock/114/114fce930699f32ced5819db1376ef24.jpg"
	),
	new Category(
		10,
		"Салаты",
		"https://samurai-sushi.kz/upload/iblock/2c2/2c24434c2862c9d1de02d75197b9e708.jpg"
	),
	new Category(
		11,
		"Супы",
		"https://samurai-sushi.kz/upload/iblock/41c/41cf96cd51b071487f6b197904e70f9b.jpg"
	),
];

export const PRODUCTS = [
	new Product(
		1,
		"Сет темпура (70шт.)",
		"сингапур темпура маки, осака темпура маки, эби темпура маки, сикай темпура маки, банзай маки, унаги темпура маки, roll 005, хаманиши маки, roll 004",
		11099,
		[1],
		[1],
		"https://samurai-sushi.kz/upload/iblock/590/590ce72a68210d138f757281542a0cc9.jpg",
		true
	),
	new Product(
		2,
		"Сет ассорти (70шт.)",
		"филадельфия маки, сейко маки, якудза маки, майами маки, roll 004, калифорния маки new, канада маки, хаманиши маки, сикай темпура маки",
		12099,
		[1],
		[1],
		"https://samurai-sushi.kz/upload/resize_cache/iblock/719/480_480_1/7195e27f1bab56554968af78156fe592.jpg",
		false
	),
	new Product(
		3,
		"Сет запеченный (48шт.)",
		"якудза маки, лава маки, калифорния с угрем, roll 001, roll 002, roll 003",
		7049,
		[1],
		[1],
		"https://samurai-sushi.kz/upload/resize_cache/iblock/d65/480_480_1/d6547995dc66d2fab543782a84daa7d6.jpg",
		false
	),
	new Product(
		4,
		"Самурай",
		"окинава маки, калифорния маки NEW, бонито маки, сикай темпура маки",
		4849,
		[1],
		[1],
		"https://samurai-sushi.kz/upload/iblock/177/177976894f7698df4171b97420b2e4e4.jpg",
		true
	),
	new Product(
		5,
		"Фуне",
		"Филадельфия гриль маки 4шт, Филадельфия маки 4шт, Калифорния маки 4 шт, Калифорния маки NEW 4шт",
		3299,
		[1],
		[1],
		"https://samurai-sushi.kz/upload/resize_cache/iblock/ecb/480_480_1/ecb62665858c3a9e035c70f66eb34d48.jpeg",
		true
	),
	new Product(
		6,
		"Сакура",
		"Аляска маки, сяке маки, сяке кунсей маки, сяке нигири 2 шт, сяке кунсей нигири 2шт",
		3799,
		[1],
		[1],
		"https://samurai-sushi.kz/upload/iblock/bfc/bfc6cb14838663f37ecb1d5ea9393a1d.jpg",
		true
	),
	new Product(
		7,
		"Император",
		"Запеченный лосось 2шт, запеченный угорь 2шт, запеченная креветка 2шт, запеченный краб 2шт",
		4549,
		[1],
		[1],
		"https://samurai-sushi.kz/upload/iblock/ad3/ad37a4ce7e678dd1fe300950688efb59.jpg",
		true
	),
	new Product(
		8,
		"Нансей",
		"Унаги маки, сяке маки, каппа маки, Сяке 1шт, унаги кунсей 1шт, магуро 1шт, амадзу эби 1 шт",
		3099,
		[1],
		[1],
		"https://samurai-sushi.kz/upload/iblock/2eb/2eb827de75df4740842b3516fc489d21.jpg",
		true
	),
	new Product(
		9,
		"Гендзи",
		"Эби темпура маки, осака темпура маки, сингапур темпура маки, запеченный лосось 2шт, запеченная",
		4399,
		[1],
		[1],
		"https://samurai-sushi.kz/upload/iblock/e5e/e5ee298b3fba5c8cf2603c53527bb821.jpg",
		true
	)
]