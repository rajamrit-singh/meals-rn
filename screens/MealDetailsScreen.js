import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import { Fontisto } from '@expo/vector-icons'; 

const MealDetailsScreen = ({ route, navigation }) => {
    const meal = MEALS.find((meal) => meal.id === route.params.itemId);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Pressable>
                        <View>
                        <Fontisto name="favorite" size={24} color="white" />
                        </View>
                    </Pressable>
                )
            }
        })
    }, [])
    return (
        <ScrollView style={styles.root}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: meal.imageUrl }} />
                <Text style={styles.title}>{meal.title}</Text>
                <MealDetails complexity={meal.complexity} affordability={meal.affordability} duration={meal.duration} textStyle={styles.detailStyle} />
                <View style={styles.listOuterContainer}>
                    <View style={styles.listContainer}>
                        <Subtitle>Ingredients</Subtitle>
                        <List data={meal.ingredients} />
                        <Subtitle>Steps</Subtitle>
                        <List data={meal.steps} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        marginBottom: 16
    },
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailStyle: {
        color: 'white'
    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    rightButtonContainer: {

    }
})