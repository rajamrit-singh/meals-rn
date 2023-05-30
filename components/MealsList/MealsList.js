import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

const MealsList = ({ items, navigation }) => {

    const renderMealItem = ({ item }) => {

        const navigateToMealDetail = () => {
            navigation.navigate('MealDetailsScreen', {
                itemId: item.id,
            });
        }
        const {
            title,
            imageUrl,
            duration,
            affordability,
            complexity
        } = item
        return (
            <MealItem
                title={title}
                imageUrl={imageUrl}
                duration={duration}
                complexity={complexity}
                affordability={affordability}
                onPress={navigateToMealDetail} />
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem} />
        </View>
    )
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})