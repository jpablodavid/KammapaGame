import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ImageBackground } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { levelDescription, levelImages, levels } from '@/utils/data'


export default function LevelSelect() {

    const { levelId } = useLocalSearchParams()

    const [unlockedLevels, setUnlockedLevels] = useState<number>(0) // Começa com o nível 1 desbloqueado

    // atualizar o level id desbloqueado
    if (Number(levelId) > unlockedLevels){
        setUnlockedLevels(Number(levelId))
    }

    const handleLevelPress = (level: typeof levels[0]) => {
        if (level.id <= unlockedLevels) {
            router.navigate({
                pathname: './storiesScreenStart',
                params: { 
                    id: level.id, // numero do index do stories desejado
                    orixa: level.type // nome do orixa para a musica
                }
            })
        }
    }

    // função para colocar primeira letra em maiusculo
    const toUpperFirst = (  orixaName : string ) => {
        const upperFirst = orixaName.toUpperCase()
        return upperFirst
    }

    const renderLevelItem = ({ item }: { item: typeof levels[0] }) => (
        <View style={styles.joinContainer}>
            <TouchableOpacity
                style={[
                    styles.levelContainer,
                    item.id > unlockedLevels && styles.lockedLevel
                ]}
                onPress={() => handleLevelPress(item)}
                disabled={item.id < unlockedLevels}
            >
                <ImageBackground 
                    source={levelImages[item.type]}
                    style={styles.image}
                    resizeMode= 'cover'
                >
                    <View style={styles.levelContent}>
                        
                        {item.id > unlockedLevels && (
                            <Image
                                source={require('@/assets/images/locked.png')}
                                style={styles.lockIcon}
                            />
                        )}
                    </View>
                </ImageBackground>
            </TouchableOpacity>
            <View style={styles.descricao}>
                <Text style={styles.levelName}>{toUpperFirst(item.type)}</Text>
                <Text style={styles.textDescricao}>
                        {levelDescription[item.type]}
                </Text>
                <View style={styles.levelRequirements}>
                    <Text style={styles.requirementText}>
                        Objetivo: {item.targetScore} pts
                    </Text>
                    <Text style={styles.requirementText}>
                        Movimentos: {item.maxMoves}
                    </Text>
                </View>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Selecione um Desafio</Text>
            
            <FlatList
                data={levels}
                renderItem={renderLevelItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    joinContainer: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#859cef',
        margin: 5,
        borderRadius: 15,
    },
    descricao:{
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textDescricao:{
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 18,
        fontWeight: '600'
    },
    levelContainer: {
        width: '50%',
        height: '90%',
        margin: 10,
        backgroundColor: '#3e3333',
        borderRadius: 15,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        maxWidth: '45%',
    },
    lockedLevel: {
        opacity: 0.4,
    },
    levelContent: {
        alignItems: 'center',
    },
    levelName: {
        fontSize: 24,
        fontWeight: '900',
        color: '#702e07',
        marginBottom: 5,
    },
    levelRequirements: {
        marginTop: 5,
    },
    requirementText: {
        fontSize: 14,
        color: '#fafaf8',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    lockIcon: {
        alignSelf: 'baseline',
        width: 50,
        height: 50,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: '#f2ea77',
        paddingTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },  
})

