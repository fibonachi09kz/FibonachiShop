interface ProductInterface {
	id: number;
	title: string;
	description: string;
	price: number;
	categoryIds: number[];
	subCategoryIds: number[];
	imageUrl: string;
	isRecommended: boolean;
}

class Product implements ProductInterface {
	id: number;
	title: string;
	description: string;
	price: number;
	categoryIds: number[];
	subCategoryIds: number[];
	imageUrl: string;
	isRecommended: boolean;

	constructor (
		id: number,
		title: string,
		description: string,
		price: number,
		categoryIds: number[],
		subCategoryIds: number[],
		imageUrl: string,
		isRecommended: boolean
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.categoryIds = categoryIds;
		this.subCategoryIds = subCategoryIds;
		this.imageUrl = imageUrl;
		this.isRecommended = isRecommended;
	}
}

export default Product;