import React from 'react';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';

export function Routes() {
    return(
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )
}