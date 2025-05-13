import { SoundType } from '@/types/gameTypes'
import { Sound } from 'expo-av/build/Audio'
import { musicFiles, musics, soundFiles, sounds } from './data'
/**
 * Carrega todos os sons necessários
 */
export const loadSounds = async () => {
    try {
        // Carrega cada som individualmente
        await Promise.all(
        Object.keys(sounds).map(async (key) => {
            const soundType = key as SoundType
            const { sound } = await Sound.createAsync(soundFiles[soundType])
            sounds[soundType] = sound
        })
        )
        console.log('Todos os sons foram carregados')
    } catch (error) {
        console.error('Erro ao carregar sons:', error)
    }
}

/**
 * Carrega todos os sons necessários
 */
export const loadMusics = async () => {
    try {
        // Carrega cada som individualmente
        await Promise.all(
        Object.keys(musics).map(async (key) => {
            const musicType = key as any
            const { sound } = await Sound.createAsync(musicFiles[musicType])
            musics[musicType] = sound
            
            await sound.setIsLoopingAsync(true)// Configura a música de fundo para loop
            
        })
        )
        console.log('Todos as musicas foram carregados')
    } catch (error) {
        console.error('Erro ao carregar musicas:', error)
    }
}

/**
 * Toca um som específico
 * @param type Tipo do som a ser tocado
 * @param volume Volume (0 a 1)
 */
export const playSound = async (type: SoundType, volume: number = 1) => {
    try {
        const sound = sounds[type]
        if (sound) {
            await sound.setVolumeAsync(volume)
            await sound.replayAsync()
        }
    } catch (error) {
        console.error(`Erro ao tocar som ${type}:`, error)
    }
}

/**
 * Toca um som específico
 * @param type Tipo do som a ser tocado
 * @param volume Volume (0 a 1)
 */
export const playMusic = async (type: any, volume: number = 0.1) => {
    try {
        const music = musics[type]
        if (music) {
            await music.setVolumeAsync(volume)
            await music.replayAsync()
        }

    } catch (error) {
        console.error(`Erro ao tocar musica ${type}:`, error)
    }
}

/**
 * Para todos os sons
 */
export const stopAllSounds = async () => {
    try {
        await Promise.all(
            Object.values(sounds).map(async (sound) => {
                if (sound) {
                    await sound.stopAsync()
                }
            })  
        )
    } catch (error) {
        console.error('Erro ao parar sons:', error)
    }
}

/**
 * Para todos as musicas
 */
export const stopMusic = async () => {
    try {
        await Promise.all(
            Object.values(musics).map(async (music) => {
                if (music) {
                    await music.stopAsync()
                }
            })  
        )
    } catch (error) {
        console.error('Erro ao parar sons:', error)
    }
}

// variáveis para controlar volume e colocar no mudo
let isMuted = false
let soundVolumes: Record<SoundType, number> = {} as Record<SoundType, number>
let musicVolumes: Record<string, number> = {}

/**
 * Configura o mute geral
 * @param muted Se deve mutar ou não
 */
export const setMuted = async (muted: boolean) => {
    try {
        isMuted = muted
        
        if (muted) {
            // Salva os volumes atuais antes de mutar
            await Promise.all(
                Object.keys(sounds).map(async (key) => {
                    const soundType = key as SoundType
                    const sound = sounds[soundType]
                    if (sound) {
                        const status = await sound.getStatusAsync()
                        if (status.isLoaded) {
                            soundVolumes[soundType] = status.volume || 1
                        }
                    }
                })
            )
            
            await Promise.all(
                Object.keys(musics).map(async (key) => {
                    const musicType = key
                    const music = musics[musicType]
                    if (music) {
                        const status = await music.getStatusAsync()
                        if (status.isLoaded) {
                            musicVolumes[musicType] = status.volume || 0.1
                        }
                    }
                })
            )
            
            // Define todos os volumes como 0
            await Promise.all([
                ...Object.values(sounds).map(async (sound) => {
                    if (sound) {
                        await sound.setVolumeAsync(0)
                    }
                }),
                ...Object.values(musics).map(async (music) => {
                    if (music) {
                        await music.setVolumeAsync(0)
                    }
                })
            ])
        } else {
            // Restaura os volumes anteriores
            await Promise.all([
                ...Object.keys(sounds).map(async (key) => {
                    const soundType = key as SoundType
                    const sound = sounds[soundType]
                    if (sound) {
                        const originalVolume = soundVolumes[soundType] ?? 1
                        await sound.setVolumeAsync(originalVolume)
                    }
                }),
                ...Object.keys(musics).map(async (key) => {
                    const musicType = key
                    const music = musics[musicType]
                    if (music) {
                        const originalVolume = musicVolumes[musicType] ?? 0.1
                        await music.setVolumeAsync(originalVolume)
                    }
                })
            ])
        }
    } catch (error) {
        console.error('Erro ao configurar mute:', error)
    }
}

/**
 * Alterna o estado de mute (útil para botões de mute)
 */
export const toggleMuted = async () => {
    await setMuted(!isMuted)
}

/**
 * Verifica se o áudio está mutado
 */
export const getIsMuted = () => {
    return isMuted
}