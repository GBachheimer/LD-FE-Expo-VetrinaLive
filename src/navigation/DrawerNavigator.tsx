import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from 'src/screens/Dashboard/Dashboard';
import Product from 'src/screens/Product';
import Plan from 'src/screens/Plan';
import Payments from 'src/screens/Payments';
import Admin from 'src/screens/Admin';
import { handleSignOut } from 'src/api/auth/handleSignOut';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons'; 
import { styles } from './DrawerNavigation.style';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator 
            initialRouteName = 'Login'
            drawerContent = {props => {
                return (
                    <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props} />
                        <DrawerItem label = 'Logout' onPress={handleSignOut}/>
                    </DrawerContentScrollView>
                )
            }}
            screenOptions={({ navigation }) => ({
                headerLeft: props => 
                    <Feather 
                        name = 'menu' 
                        size = {24} 
                        color = '#103B66' 
                        onPress = {navigation.toggleDrawer} 
                        style = {styles.menuIcon}
                    />,
                headerTitleStyle: { ...styles.title }
            })}
        >
            <Drawer.Screen name = 'Dashboard' component = {Dashboard} />
            <Drawer.Screen name = 'Product' component = {Product} />
            <Drawer.Screen name = 'Plan' component = {Plan} />
            <Drawer.Screen name = 'Payments' component = {Payments} />
            <Drawer.Screen name = 'Admin' component = {Admin} />
        </Drawer.Navigator>
    )
};

export default DrawerNavigator