// components/VideoPlayer.tsx
import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Video, ResizeMode } from 'expo-av'
import { VideoPlayerProps } from '@/types/gameTypes'


export default function VideoPlayer({ source, onComplete, shouldPlay = true, isLooping = false}: VideoPlayerProps){

    const videoRef = useRef<Video>(null)

    const [status, setStatus] = useState<any>({})

    useEffect(() => {
        if (status.didJustFinish && !isLooping) {
            onComplete?.()
        }
    }, [status.didJustFinish])

    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                style={styles.video}
                source={source}
                shouldPlay={shouldPlay}
                isLooping={isLooping}
                resizeMode= {ResizeMode.CONTAIN}
                useNativeControls={false}
                onPlaybackStatusUpdate={setStatus}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
    },
    video: {
        width: '100%',
        height: '100%',
    },
    controlButton: {
        alignSelf: 'baseline',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 24,
        padding: 8,
        marginBottom: 5
    },
})
