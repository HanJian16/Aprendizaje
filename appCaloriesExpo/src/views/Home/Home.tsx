import Header from "../../components/Header";
import { View, StyleSheet, Text } from "react-native";
import { Button, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RoutesTypesParams } from "../../types";

const Home = () => {

    const {navigate} = useNavigation<NativeStackNavigationProp<RoutesTypesParams, 'Home'>>();
    const handleAddCaloriesPress = () => {
        navigate('AddFood');
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.caloriesContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.caloriesLegend}> Calories</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Button icon={<Icon name="add-circle-outline" color='#fff' />}
                        radius='lg'
                        color='#4ecb71'
                        onPress={handleAddCaloriesPress}
                    />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#fff',
    },
    caloriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,
    },
    leftContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    caloriesLegend: {
        fontSize: 20,
    },
});

export default Home;