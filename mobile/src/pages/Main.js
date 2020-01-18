import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main() {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if(granted){
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });
                
                const { latitude, longitude } = coords;
    
                setCurrentRegion({
                    latitude,
                    longitude,
                    longitudeDelta: 0.04,
                    latitudeDelta: 0.04
                });
            }

        }

        loadInitialPosition();
    }, []);

    if(!currentRegion){
        return null;
    }

    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{ latitude: -16.0252124, longitude: -48.055769 }}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/37983059?s=460&v=4' }} />

                <Callout>
                    <View style={styles.callout}>
                        <Text style={styles.name}>Heron Rodrigues</Text>
                        <Text style={styles.bio}>Graduando em Engenharia de Software</Text>
                        <Text style={styles.techs}>React Native, Node.js</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff'
    },

    callout: {
        width: 260,
    },

    name: {
        fontWeight: 'bold',
        fontSize: 16
    },

    bio: {
        color: '#666',
        marginTop: 5
    },

    techs: {
        marginTop: 3
    }
});

export default Main;