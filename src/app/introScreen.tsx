import React from 'react'
import { StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import { router } from 'expo-router'
import VideoPlayer from '@/components/videoPlayer'

export default function IntroScreen() {
    
    const handleVideoComplete = () => {
        router.navigate({pathname: '/levelSelect', params: { levelId: 1 }}) // Redireciona para a tela levelSelect após o vídeo
    };

    const skipIntro = () => {
        router.navigate({pathname: '/levelSelect', params: { levelId: 1 }}) // Redireciona para a tela levelSelect se pular o video
    };

    return (
        <SafeAreaView style={styles.container}>
            <VideoPlayer
                source={require('@/assets/videos/intro.mp4')}
                onComplete={handleVideoComplete}
            />

            <TouchableOpacity style={styles.skipButton} onPress={skipIntro}>
                <Text style={styles.skipText}>Pular Introdução</Text>
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
