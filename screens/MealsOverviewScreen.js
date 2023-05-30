import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { StyleSheet } from 'react-native';
import MealsList from '../components/MealsList/MealsList';

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


    return (
        <MealsList items={displayedMeals} navigation={navigation} />
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})