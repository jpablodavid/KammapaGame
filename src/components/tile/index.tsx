import React, { memo, useEffect } from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withSequence,
    withTiming,
    Easing
} from 'react-native-reanimated'
import { TileProps } from '@/types/gameTypes'
import { tileImages } from '@/utils/data'


export default  memo(function Tile({ tile, onPress, tileSize, orixa}: TileProps){

    // Animação de escala (para efeito de clique/pressão)
    const scale = useSharedValue(1)
    // Animação de opacidade (para desaparecimento)
    const opacity = useSharedValue(1)
    // Animação de posição vertical (para queda)
    const translateY = useSharedValue(tile.row * tileSize)

    // Efeito para animar a posição quando o tile é movido
    useEffect(() => {
        translateY.value = withTiming(tile.row * tileSize, {
            duration: 200,
            easing: Easing.out(Easing.quad)
        })
    }, [tile.row])

    // Efeito para animação quando o tile é combinado
    useEffect(() => {
        if (tile.matched) {
            // Sequência de animação: cresce um pouco -> desaparece
            scale.value = withSequence(
                withSpring(1.2, { damping: 2 }),
                withTiming(0, { duration: 200 })
            );
            opacity.value = withTiming(0, { duration: 200 });
        } else {
            // Reset para novos tiles
            scale.value = 1;
            opacity.value = 1;
            translateY.value = withTiming(tile.row * tileSize, {
                duration: 0 // Imediato para novos tiles
            })
        }
    }, [tile.matched])

    // Estilo animado combinado
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: scale.value },
            { translateY: translateY.value }
        ],
        opacity: opacity.value,
    }))

    return (
        <Animated.View style={[
            styles.container,
            animatedStyle,
            { 
                width: tileSize, 
                height: tileSize,
                position: 'absolute', // Importante para animação de queda
                top: 0,
                left: tile.col * tileSize,
            }
        ]}>
            <TouchableOpacity 
                onPress={onPress} 
                activeOpacity={0.7}
                style={styles.touchable}
            >
                <Image 
                    source={tileImages[orixa][tile.type]} 
                    style={[styles.image]} 
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </Animated.View>
    )
})

const styles = StyleSheet.create({
    container: {
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable: {
        width: '99%',
        height: '99%',
        backgroundColor: "#14151456",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: "#f4f4f4a9",
        borderRadius: 7,
    },
    image: {
        width: '90%',
        height: '90%',
    },
})
