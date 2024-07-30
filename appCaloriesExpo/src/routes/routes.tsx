import Home from "../views/Home";
import AddFood from "../views/AddFood";
import { RoutesTypesParams } from "../types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RoutesTypesParams>();

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="AddFood" component={AddFood} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;