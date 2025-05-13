import { useLocalSearchParams } from 'expo-router'
import StoryView from '@/components/storiesView'
import { router } from 'expo-router'
import { Text, ImageBackground, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { storiesStartTexts, storieStartBackground } from '@/utils/data'
import { playMusic } from '@/utils/audioManager'


export default function StoryScreenStart() {

    const { id, orixa } = useLocalSearchParams()

    playMusic(orixa)
    
    const initialIndex = typeof id === 'string' ? parseInt(id) : 0
    
    const skipStorie = () => {
        router.navigate({pathname: '/gameScreen', params: { levelId: id }}) // Redireciona para a tela gamese pular o stories
    }
    
    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground 
                source={storieStartBackground[initialIndex]}
                style={styles.container}
                resizeMode="cover"  
            > 
                <TouchableOpacity style={styles.skipButton} onPress={skipStorie}>
                    <Text style={styles.skipText}>Pular Stories</Text>
                </TouchableOpacity>
                
                <StoryView 
                    texts={storiesStartTexts[initialIndex]} 
                    id={id.toString()}
                    start={true}
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
        padding: 20,
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