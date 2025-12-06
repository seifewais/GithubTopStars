import React, {useEffect} from "react";
import {View, Text} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import {useDispatch, useSelector} from "react-redux";
import { fetchRepos } from "../store/repos/actions";

export default function HomeScreen(){
    const dispatch = useDispatch();
    const {items, loading, error} = useSelector(state = state.repos);
    useEffect(() => {
        dispatch(fetchRepos());
    }, [dispatch]);

    return(
        <SafeAreaView style={{flex:1}}>
            {loading && <Text>Loading...</Text>}
            {error && <Text>Error: {error}</Text>}
            {items.map(repo => (
                <View key={repo.id}>
                    <Text>{repo.full_name} {repo.stargazers_count}</Text>
                </View>
            ))}
        </SafeAreaView>
    )
}