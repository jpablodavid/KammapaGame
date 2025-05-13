import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Image, Text, ImageBackground, View, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import GameBoard from '@/components/gameBoard'
import { GameState, Level, TileType } from '@/types/gameTypes'
import { createBoard, findMatches, removeMatchedTiles, checkGameOver, areTilesAdjacent, swapTiles } from '@/utils/gameLogic'
import { playSound, setMuted } from '@/utils/audioManager'
import GameModal from '@/components/gameModal'
import { iconBackground, levelBackground, levels } from '@/utils/data'


export default function GameScreen() {

    const { levelId } = useLocalSearchParams()

    // responsavel pelo modal
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [isWin, setIsWin] = useState<boolean>(false)


    const [selectedTile, setSelectedTile] = useState<TileType | null>(null)
    const [isMuted, setIsMuted] = useState(false)

    //Encontra o nível selecionado
    const level = levels.find((l: Level) => l.id === Number(levelId))
    
    if (!level) {
        throw new Error(`Nível com ID ${levelId} não encontrado`)
    }

    // Estado do jogo
    const [gameState, setGameState] = useState<GameState>({
        board: createBoard(level.boardSize.rows, level.boardSize.cols),
        score: 0,
        movesLeft: level.maxMoves,
        currentLevel: Number(levelId),
        isGameOver: false,
        isGameWon: false,
    })

    // function que leva para stroies apos a vitoria do level
    const handleWinPress = () => {
        router.navigate({
            pathname: './storiesScreenEnd',
            params: { 
                id: levelId,// numero do index do stories desejado
                orixa: level.type // nome do orixa pra parar a musica
            }
        }) 
    }

    const handleClose = () => {
        setModalVisible(false)
        setIsWin(false)
        router.back()
    };
    
    
    // Verifica se o jogo terminou
    useEffect(() => {
        const { isGameOver, isGameWon } = checkGameOver(gameState)
        
        if (isGameOver) {
            setGameState(prev => ({ ...prev, isGameOver, isGameWon }))
        
            if (isGameWon) {
                playSound('win')
                setIsWin(true)
                setModalVisible(true)
            } else {
                playSound('lose')
                setIsWin(false)
                setModalVisible(true)
            }
        }
    }, [gameState.score, gameState.movesLeft, gameState.board])

    // Lógica para lidar com o pressionar de um tile
    const handleTilePress = useCallback((tile: TileType) => {
        if (gameState.isGameOver) return
        
        // Se nenhum tile está selecionado, seleciona este
        if (!selectedTile) {
            setSelectedTile(tile)
            // Marca visualmente o tile selecionado
            setGameState(prev => ({
                ...prev,
                board: prev.board.map(row => 
                    row.map(t => 
                        t.id === tile.id ? { ...t } : t
                    )
                )
            }))
            return
        }
        
        // Se o mesmo tile foi clicado duas vezes, desseleciona
        if (selectedTile.id === tile.id) {
            setSelectedTile(null)
            setGameState(prev => ({
                ...prev,
                board: prev.board.map(row => 
                    row.map(t => 
                        t.id === tile.id ? { ...t } : t
                    )
                )
            }))
            return
        }
        
        // Verifica se os tiles são adjacentes
        if (!areTilesAdjacent(selectedTile, tile)) {
            // Desseleciona o tile anterior e seleciona o novo
            setGameState(prev => ({
                ...prev,
                board: prev.board.map(row => 
                    row.map(t => 
                        t.id === selectedTile.id ? { ...t } : 
                        t.id === tile.id ? { ...t } : t
                    )
                )
            }))
            setSelectedTile(tile)
            return
        }
        
        // Desseleciona ambos os tiles
        setGameState(prev => ({
            ...prev,
            board: prev.board.map(row => 
                row.map(t => 
                    t.id === selectedTile.id || t.id === tile.id ? { ...t } : t
                )
            )
        }))
        
        // Troca os tiles
        const newBoard = swapTiles(gameState.board, selectedTile, tile)
        
        // Verifica combinações após a troca
        const { newBoard: matchedBoard, score: matchScore } = findMatches(newBoard)
        
        // Se não houve combinação, desfaz a troca
        if (matchScore === 0) {
            setGameState(prev => ({
                ...prev,
                board: swapTiles(newBoard, tile, selectedTile), // Desfaz a troca
                movesLeft: prev.movesLeft - 1,
            }))
        } else {
            // Atualiza o estado com a pontuação
            setGameState(prev => ({
                ...prev,
                board: matchedBoard,
                score: prev.score + matchScore,
                movesLeft: prev.movesLeft - 1,
            }))
        
            playSound('match')
            
            // Remove os tiles combinados e preenche com novos após animação
            setTimeout(() => {
                setGameState(prev => {
                    const updatedBoard = removeMatchedTiles(prev.board)
                    const { newBoard: newMatchedBoard, score: newMatchScore } = findMatches(updatedBoard)
                    
                    // Verifica se há novas combinações após o preenchimento (combos)
                    if (newMatchScore > 0) {
                        playSound('match')
                        return {
                            ...prev,
                            board: newMatchedBoard,
                            score: prev.score + newMatchScore,
                        }
                    }
                    
                    return {
                        ...prev,
                        board: updatedBoard,
                    }
                })
            }, 500) // Tempo para animação de desaparecimento
        }
        
        setSelectedTile(null)
    }, [gameState, selectedTile])

    // Alternar mute
    const toggleMute = () => {
        setIsMuted(prev => {
            setMuted(!prev)
            return !prev
        })
    } 

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.container}
                source={levelBackground[gameState.currentLevel]} 
                resizeMode="cover"    
            >
                {/* Painel de informações */}
                <View style={styles.infoPanel}>
                    <ImageBackground 
                        source={require("@/assets/images/pontos-icon.png")} 
                        resizeMode="contain" 
                        style={styles.itemPanel}
                    >
                        <Text style={styles.score}>{gameState.score}</Text>
                    </ImageBackground>

                    <Image
                        source={iconBackground[gameState.currentLevel]}  
                        style={styles.itemCaracter}
                    />

                    <ImageBackground 
                        source={require("@/assets/images/jogadas-icon.png")} 
                        resizeMode="contain" 
                        style={styles.itemPanel}
                    >
                        <Text style={styles.moves}>{gameState.movesLeft}</Text>
                    </ImageBackground>
                </View>
                {/* Tabuleiro do jogo */}
                <GameBoard 
                    tiles={gameState.board} 
                    onTilePress={handleTilePress}
                    orixa={gameState.currentLevel}
                    tileSize={Math.min(
                        Math.floor((Dimensions.get('window').width - 40) / level.boardSize.cols),
                        Math.floor((Dimensions.get('window').height - 200) / level.boardSize.rows)
                    )}
                />

                <TouchableOpacity onPress={toggleMute} style={styles.muteButton}>
                    <Image 
                        source={isMuted 
                            ? require('../assets/images/mute.png') 
                            : require('../assets/images/unmute.png')} 
                        style={styles.muteIcon}
                    />
                </TouchableOpacity>
                <View>
                    <GameModal
                        visible={modalVisible}
                        onClose={handleClose}
                        isWin={isWin}
                        nextLevel={handleWinPress}
                        level={gameState.currentLevel}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {   
        flex: 1,
        justifyContent: 'space-around',
    },
    infoPanel: {
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
    },
    itemPanel:{
        width: 120,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemCaracter:{
        width: 130,
        height: 130,
    },
    score: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#d0f308',
    },
    moves: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f6fa0a',
    },
    muteButton: {
        width: "15%",
        margin: 15,
        marginLeft: 25,
    },  
    muteIcon: {
        width: 40,
        height: 40,
    }
})