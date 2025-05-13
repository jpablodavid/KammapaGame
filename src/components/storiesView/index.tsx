import React, { useState } from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { StoryViewProps } from '@/types/gameTypes'
import Animated, { FadeOutRight, FadeInLeft } from 'react-native-reanimated'
import { router } from 'expo-router'
import { stopMusic } from '@/utils/audioManager'


export default function StoryView({ texts, id, start }: StoryViewProps){

    const [currentStoryIndex, setCurrentStoryIndex] = useState(0)

    const goToNextStory = () => {
        if (currentStoryIndex < texts.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1)
        } else if (start) {
            router.navigate({pathname: '/gameScreen', params: { levelId: id }})// navega para a pagima GameScreen
        } else {
            stopMusic()
            // se for a fase de olorun ele direciona para o video final e não para o levelSelect
            if(id <= "5"){
                router.navigate({pathname: '/levelSelect', params: { levelId: id }})// Redireciona para a tela game se pular o storie
            }else {
                router.navigate('/finalScreen')// Redireciona para o video final 
            }
        }
    }

    const goToPreviousStory = () => {
        if (currentStoryIndex > 0) {
            setCurrentStoryIndex(currentStoryIndex - 1)
        }
    }

    const currentStory = texts[currentStoryIndex]

    return (
        <Animated.View style={styles.container} key={currentStoryIndex} entering={FadeInLeft.duration(500)} exiting={FadeOutRight.duration(200)}>
            <Text  style={styles.title}>
                {currentStory}
            </Text>
            <View style={styles.navigationContainer}>
                <TouchableOpacity 
                    style={styles.navigationButton} 
                    onPress={goToPreviousStory}
                    activeOpacity={0.7}
                    disabled={currentStoryIndex < 1 ? true : false}
                >   
                {currentStoryIndex > 0 ? 
                    <Image source={require("@/assets/images/prevIcon.png")} style={styles.leftButton} />
                    : 
                    <View/>
                }
                    
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.navigationButton} 
                    onPress={goToNextStory}
                    activeOpacity={0.7}
                >
                    {currentStoryIndex < (texts.length - 1) ? 
                        <Image source={require("@/assets/images/nextIcon.png")} style={styles.leftButton} />
                        : 
                        <Text style={[styles.title, { color: '#121211', marginTop: 15}]}> {`FIM >`}</Text>
                    }
                </TouchableOpacity>
            </View>
        </Animated.View >
    )
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fdff77ea',
        padding: 10,
        borderRadius: 15,
        borderColor: '#000',
        borderBottomWidth: 8,
        borderRightWidth: 8,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'textStories'
    },
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    navigationButton: {
        width: 40,
        height: 40,
        marginTop: 5
    },
    leftButton: {
        width: 40,
        height: 40,
    },
    rightButton: {
        width: 40,
        height: 40
    },
})