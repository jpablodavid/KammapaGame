import React from 'react'
import { Dimensions, StyleSheet,  View } from 'react-native'
import { BoardProps } from '@/types/gameTypes'
import Tile from '@/components/tile'


export default function Board({ tiles, onTilePress, orixa }: BoardProps){
    
    // Calcular tamanho do tile baseado na largura da tela
    const screenWidth = Dimensions.get('window').width
    const size = (screenWidth - 20) / tiles[0].length - 4
    
    return (
        <View 
            style={[styles.board, { 
                width: size * tiles[0].length,
                height: size * tiles.length,
                position: 'relative' // Container relativo para tiles absolutos
            }]}
        >
            {tiles.flat().map((tile) => (
                <Tile 
                    key={tile.id}
                    tile={tile}
                    tileSize={size}
                    orixa={orixa}
                    onPress={() => onTilePress(tile)}
                />
            ))}
        </View>
    )
}

export const styles = StyleSheet.create({
    board: {
        alignSelf: 'center',
    },
})