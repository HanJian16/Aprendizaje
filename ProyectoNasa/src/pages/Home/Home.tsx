import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import fetchApi from '../../utils/fetch';
import { useEffect, useState } from "react";

const Home = () => {

    const [apiData, setApiData] = useState();

    useEffect(() => {
        const loadImage = async () => {
            try {
                const todayImage = await fetchApi();
                setApiData(() => todayImage);
            } catch (error) {
                console.error(error);
                setApiData(undefined)
            }
        };

        loadImage().catch(null);
    }, [])

    return(
        <View style={styles.container}>
            <Header />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
});

export default Home;