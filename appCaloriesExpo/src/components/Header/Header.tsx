import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "@rneui/themed";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = () => {

    const { canGoBack, goBack } = useNavigation();

    return (
        <View style={styles.container}>
            {canGoBack() ? (
                <View style={styles.arrowContainer}>
                    <Button icon={<Icon name='arrow-back' size={24}/>} type="clear" onPress={() => goBack()}/>
                </View>
            ) : null}
            <View style={styles.content}>
                <Text style={styles.title}>Hello Han Des</Text>
                <Text style={styles.subtitle}>Welcome back to your goal</Text>
            </View>
            <View style={styles.containerImage}>
                <Image source={require('../../../assets/favicon.png')} style={styles.image} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    containerImage: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        color: '#808080'
    },
    image: {
        width: 50,
        height: 50,
    },
    arrowContainer:{},
});

export default Header;