import { ImageSourcePropType } from "react-native"

// tipo de cores para pegar imagens
export type TileColor = 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'special';
// Tipos para os sons disponíveis
export type SoundType =  'match' | 'win' | 'lose'
// Tipos para as musicas disponíveis
export type MusicType =  'oxossi' | 'ori' | 'ogum' | 'iemanja' | 'olorun'
// tipo de array com indice de cores e imagens
export type LevelImages = Record<TileColor, ImageSourcePropType>
// tipo de array com indice de numeros e LevelImagens{cores dos tiles}
export type TileImages = Record<number, LevelImages>
// tipo de array com indice de numeros e Strings[] textos dos stories
export type TextStories = Record<string, string[]>
// tipo de array com indice de numeros e imagens de backgrounds{tipo de iamgem para usar no <BackgroundImage/>}
export type BackgroundImage = Record<number, ImageSourcePropType>
// tipo de array com indice de strings e imagens de backgrounds{tipo de iamgem para usar no <BackgroundImage/>}
export type Storiesbackground = Record<string, ImageSourcePropType>

// Tipo para uma peça do tabuleiro
export type TileType = {
    id: string
    type: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'special' 
    row: number
    col: number
    matched?: boolean
}

  // Tipo para o estado do jogo
export interface GameState {
    board: TileType[][]
    score: number
    movesLeft: number
    currentLevel: number
    isGameOver: boolean
    isGameWon: boolean
}

  // Tipo para um nível do jogo
export interface Level {
    id: number
    name: string
    targetScore: number
    type: 'oxossi' | 'ori' | 'ogum' | 'iemanja' | 'olorun'
    maxMoves: number
    boardSize: {
        rows: number
        cols: number
    }
    unlocked: boolean
}

// Props do componente Board
export interface BoardProps {
  tiles: TileType[][]
  onTilePress: (tile: TileType) => void
  tileSize: number
  orixa: number
}

// Props do componente tile
export interface TileProps {
  tile: TileType
  onPress: () => void
  tileSize: number
  orixa: number
}

// Tipo para os stories
export interface Story {
  id: string
  images: ImageSourcePropType[]
}

// props dos stories, são passados para storyView
export interface StoryViewProps {
  texts: string[]
  id: string
  start: boolean
}

// props dos storiesScreen, para saber a fase e poder tocar a musica
export interface StoryProps {
  id: string
  orixa: any
}

// props dos Textos, são passados para AnimatedText
export interface TextViewProps {
  texts: string[]
}

// props dos videos, são passados para VideoPlayer
export interface VideoPlayerProps {
  source: any
  onComplete?: () => any
  shouldPlay?: boolean
  isLooping?: boolean
}

// props do Modal
export interface GameModalProps {
    visible: boolean
    onClose: () => void
    isWin: boolean
    nextLevel: () => void
    level: number
}
