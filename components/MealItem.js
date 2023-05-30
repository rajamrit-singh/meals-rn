import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native';
import MealDetails from './MealDetails';

const MealItem = ({ title, imageUrl, duration, complexity, affordability, onPress }) => {
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}} onPress={onPress}>
                <View>
                    <Image style={styles.image} source={{uri: imageUrl}}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        padding: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        margin: 8
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },

    
})