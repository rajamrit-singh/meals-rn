import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavouritesScreen';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import FavouritesContextProvider from './store/context/favourites-context';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#351401'
      },
      headerTintColor: 'white',
      sceneContainerStyle: {
        backgroundColor: '#3f1902'
      },
      drawerContentStyle: {
        backgroundColor: '#351401',
      },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#e4bf51',
    }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Feather name='list' size={24} color='white' />
          )

        }}
      />
      <Drawer.Screen
        name='Favourites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Fontisto name='favorite' size={24} color='white' />
          )
        }} />
    </Drawer.Navigator>
  )
}
export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style='light'></StatusBar>
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#351401'
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#3f1902'
            },
            headerTitleAlign: 'center'
          }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }} />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen} />
            <Stack.Screen
              name='MealDetailsScreen'
              component={MealDetailsScreen}
              options={{
                title: 'Meal Details',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer >
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
