import React from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet, Animated, Easing, ImageBackground } from 'react-native'
import { GameModalProps } from '@/types/gameTypes'


export default function GameModal({ visible, onClose ,isWin, nextLevel, level }: GameModalProps){
    
    const scaleValue = new Animated.Value(0);
    const opacityValue = new Animated.Value(0);

    React.useEffect(() => {
        if (visible) {
            Animated.parallel([
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 500,
                easing: Easing.elastic(1),
                useNativeDriver: true,
            }),
            Animated.timing(opacityValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            ]).start()
        } else {
            scaleValue.setValue(0)
            opacityValue.setValue(0)
        }
    }, [visible])

    return (
        <Animated.View style={[styles.overlay, { opacity: opacityValue }]}>
            <Animated.View style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
                <Modal transparent visible={visible}>
                    <ImageBackground
                        source={require('@/assets/images/modal.png')}
                        resizeMode='contain'
                        style={styles.backgroundImage}
                    > 
                        <View style={styles.content}>
                            <Text style={styles.title}>{isWin ? 'Bi báyò!' : 'Ìṣẹ̀ ń jẹ́ àfọ́ràn!'}</Text>
                            
                            <TouchableOpacity 
                                style={[styles.button, styles.mainButton]} 
                                onPress={isWin ? nextLevel : onClose}
                            >
                                <Text style={[styles.buttonText, styles.mainButtonText]}>
                                    {isWin ? (level < 5 ? 'Proximo Orixá' : 'Final da Historia') : 'Tente Outra vez'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </Modal>
            </Animated.View>
        </Animated.View>
    )
}
    
const styles = StyleSheet.create({
    overlay: {
        width: "80%",
        height: "80%",
        position: 'absolute',
    },
    modalContainer: {
        overflow: 'hidden',    
    },
    backgroundImage: {
        width: "100%",
        height: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: "10%",
        left: "1%"
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 50,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        backgroundColor: '#e0e0e0',
        marginTop: 70,
        marginBottom: 70
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
    },
    mainButton: {
        backgroundColor: '#FFD700',
    },
    mainButtonText: {
        color: '#8B4513',
    },
})
    