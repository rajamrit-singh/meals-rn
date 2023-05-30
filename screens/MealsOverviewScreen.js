import { useLayoutEffect } from 'react';
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { View, FlatList, StyleSheet, Platform } from 'react-native';

const MealsOverviewScreen = ({ navigation, route }) => {
    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS?.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(category => category.id === categoryId);
        navigation.setOptions({
            title: categoryTitle.title
        });
    }, [categoryId, navigation])
    const renderMealItem = ({ item }) => {
        
        const navigateToMealDetail = () => {
            navigation.navigate('MealDetailsScreen', {
                itemId: item.id,
                categoryId
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
                onPress={navigateToMealDetail}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}/>
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})