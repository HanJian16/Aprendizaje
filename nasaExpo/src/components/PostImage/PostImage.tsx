import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet } from "react-native";
import { PostImage as PostImageType, PostImageNavigationProps } from "../../types";

const PostImage: FC<PostImageType> = ({ title, date, url, explanation }) => {

    const {navigate} = useNavigation<PostImageNavigationProps>();

    const handleViewPress = () => {
        navigate('Detail', {title, date, url, explanation})
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.buttonContainer}>
                <Button title="View" color={'rgba(18, 39, 113, 255)'} onPress={handleViewPress}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(18, 39, 113, 255)',
        borderRadius: 20,
        marginBottom: 12,
        padding: 16,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
    },
    date: {
        color: '#fff',
    },
    buttonContainer: {
        alignItems: 'flex-end'
    },
});

export default PostImage;