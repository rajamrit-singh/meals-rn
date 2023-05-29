import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

const CategoryGridTile = ({ title, color }) => {
    return (
        <View style={styles.gridItem}>
            <Pressable style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} android_ripple={{color: '#ccc'}}>
                <View style={[styles.innerContainer, , {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 2},
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer:{
        flex: 1,
        padding: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default CategoryGridTile;