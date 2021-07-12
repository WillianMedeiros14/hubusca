import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';

import  InformationUser  from '../screens/InformationUser';
import  Home  from '../screens/Home';



const stackRoutes = createStackNavigator();

const AppRoutes = () => {
    const theme = useTheme();

    return(

        <stackRoutes.Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.primary
                }
            }}
        >
            <stackRoutes.Screen 
                name="Home"
                component={Home}
            />

            <stackRoutes.Screen 
                name="InformationUser"
                component={InformationUser}
            />

        </stackRoutes.Navigator>

    )

}

export default AppRoutes;