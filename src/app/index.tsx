import React, { useEffect } from 'react'
import { router } from "expo-router"
import { Text, TouchableOpacity, ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import { loadMusics, loadSounds, } from '@/utils/audioManager'

export default function Index() {

    useEffect(() => {
        loadSounds()
        loadMusics()
    }, [])

    const handlePlayPress = () => {
        router.navigate("/introScreen")
    }

    return (
        <SafeAreaView style={styles.container}>
        {/* Logo do jogo */}
            <ImageBackground 
                source={require('@/assets/images/background.jpg')} 
                style={styles.background} 
                resizeMode="cover"
            >
                {/* Botão de jogar */}
                <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.5} 
                    onPress={handlePlayPress}
                >
                    <Text style={styles.buttonText}>JOGAR</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView >
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 40,
    },
    button: {
        backgroundColor: '#CC7722',
        borderColor: '#cc77',
        borderWidth: 2,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 5,
    },
    buttonText: {
        color: '#FFFFED',
        fontSize: 24,
        fontWeight: 'bold',
    },
})
