import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import Home from '../screens/Home';
import NewPost from '../screens/NewPost';
import PostUser from '../screens/PostUser';

import AppRoutes from './stack.routes';

import { MaterialIcons } from '@expo/vector-icons';


const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    const theme = useTheme();
    
    return (
        <AppTab.Navigator 
            tabBarOptions={{
                activeTintColor: theme.colors.primary,
                inactiveTintColor: theme.colors.user,
                
                showLabel: false,
                keyboardHidesTabBar: true,
                style: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 70,
                    position: 'absolute',
                    // bottom: 10,
                    left: 20,
                    right: 20,
                    backgroundColor: '#FFFF',
                    borderTopLeftRadius: 15 ,
                    borderTopRightRadius: 15,
                    ...styles.shadow
                },

            }}
        >
            <AppTab.Screen 
                name="Home"
                component={AppRoutes}
                options={{
                    tabBarIcon:(({ size, color }) => (
                        <MaterialIcons 
                            name="home"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            /> 

            <AppTab.Screen 
                name="NovoPost"
                component={NewPost}
                options={{
                    tabBarIcon:(({ size, color }) => (
                        <MaterialIcons 
                            name="add-circle-outline"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            /> 

            <AppTab.Screen 
                name="PostUser"
                component={PostUser}
                options={{
                    tabBarIcon:(({ size, color }) => (
                        <MaterialIcons 
                            name="email"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            /> 
        </AppTab.Navigator>
    )
}

export const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default AuthRoutes;