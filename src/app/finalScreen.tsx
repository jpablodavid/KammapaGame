import React from 'react';
import { StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import { router } from 'expo-router'
import VideoPlayer from '@/components/videoPlayer'

export default function finalScreen() {
    
    const skipIntro = () => {
        router.navigate({pathname: '/'}) // Redireciona para a tela levelSelect se pular o video
    }

    return (
        <SafeAreaView style={styles.container}>
            <VideoPlayer
                source={require('@/assets/videos/final.mp4')}
                onComplete={skipIntro}
                shouldPlay={true}
                isLooping={false}
            />

            <TouchableOpacity style={styles.skipButton} onPress={skipIntro}>
                <Text style={styles.skipText}>Pular Final</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    skipButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        borderRadius: 20,
    },
    skipText: {
        color: 'white',
        fontSize: 16,
    },
})
