import CategoryItem from "../CategoriesBlock/CategoryItem";
import { FlatList } from "react-native";

const CatalogCategories = ({ categories, pressHandler }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.ID}
      renderItem={(category) => (
        <CategoryItem category={category.item} pressHandler={pressHandler} />
      )}
      horizontal={true}
      contentContainerStyle={{ columnGap: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default CatalogCategories;
