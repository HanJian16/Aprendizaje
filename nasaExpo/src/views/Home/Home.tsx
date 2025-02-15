import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import fetchApi from '../../utils/fetch';
import TodaysImage from "../../components/TodaysImage";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";

const Home = () => {

    const [todaysImage, setTodaysImage] = useState<PostImage>();
    const [lastfiveDaysImages, setLastFiveDaysImages] =useState<PostImage[]>();

    const loadTodayImage = async () => {
        try {
            const todaysImageResponse = await fetchApi();
            setTodaysImage(todaysImageResponse);
        } catch (err) {
            console.error(err);
            setTodaysImage(undefined);
        }
    };

    const loadLastFiveDaysImages = async () => {
        try { 
            const date = new Date();
            const todaysDate = format(date, 'yyyy-MM-dd');
            const fiveDaysAgoDate = format(sub(date, {days: 5}) , 'yyyy-MM-dd');
            
            const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`);
            
            setLastFiveDaysImages(lastFiveDaysImagesResponse);
        } catch (err) { console.error(err) }
    };

    useEffect(() => {
        loadTodayImage().catch(null);
        loadLastFiveDaysImages().catch(null);
    }, []);


    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage} />
            <LastFiveDaysImages postImages={lastfiveDaysImages|| []}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(1, 26, 93, 255)',
    },
})

export default Home;