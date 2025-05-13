import { Text, ImageBackground, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import StoryView from '@/components/storiesView'
import { router } from 'expo-router'
import { storieEndBackground, storiesEndTexts } from '@/utils/data'
import { stopMusic } from '@/utils/audioManager'


export default function StoryScreenEnd() {
    
    const { id } = useLocalSearchParams()

    const initialIndex = typeof id === 'string' ? parseInt(id) : 0

    const nextLevel = Number(id) + 1

    const skipStorie = () => {
        stopMusic()
        // se for a fase de olorun ele direciona para o video final e não para o levelSelect
        if(nextLevel <= 5){
            router.navigate({pathname: '/levelSelect', params: { levelId: nextLevel }})// Redireciona para a tela game se pular o storie
        }else {
            router.navigate('/finalScreen')// Redireciona para o video final 
        }    
    }
    
    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground 
                source={storieEndBackground[initialIndex]}
                style={styles.container}
                resizeMode="cover"  
            >   
                <TouchableOpacity style={styles.skipButton} onPress={skipStorie}>
                    <Text style={styles.skipText}>Pular Stories</Text>
                </TouchableOpacity>

                <StoryView 
                    texts={storiesEndTexts[initialIndex]}
                    id={nextLevel.toString()}
                    start={false}
                /> 
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10,
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