import { View, StyleSheet, Text } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { useContext } from 'react';
import { FavouritesContext } from '../store/context/favourites-context';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

const FavoritesScreen = ({ navigation }) => {
    const favouriteMealIds = useSelector(state => state.favouriteMeals.ids);

    const favouriteMeals = MEALS.filter((meal) => {
        return favouriteMealIds.includes(meal.id);
    });

    if (favouriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favourite meals yet</Text>
            </View>
        )
    }
    return (
        <MealsList items={favouriteMeals} navigation={navigation}/>
    )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})