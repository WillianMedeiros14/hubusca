import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';

import  InformationUser  from '../screens/InformationUser';
import  Home  from '../screens/Home';
import NewPost  from '../screens/NewPost';
import PostUser  from '../screens/PostUser';
import PostUserIdName  from '../screens/PostUserIdName';


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

            <stackRoutes.Screen 
                name="NewPost"
                component={NewPost}
            />

            <stackRoutes.Screen 
                name="PostUserIdName"
                component={PostUserIdName}
            />

        </stackRoutes.Navigator>

    )

}

export default AppRoutes;