import { Fontisto } from '@expo/vector-icons';
import { View, StyleSheet, Pressable } from 'react-native';

const IconButton = ({ onPress, icon, color }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <View>
                <Fontisto name={icon} size={24} color={color} />
            </View>
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})