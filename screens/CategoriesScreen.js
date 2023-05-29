import { FlatList, View, Text } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = () => {

    const renderCategoryItem = (itemData) => {
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>;
    }
    return (
        <View>
            <FlatList
                data={CATEGORIES}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    )
}

export default CategoriesScreen;