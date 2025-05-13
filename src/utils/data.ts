import { BackgroundImage, Level, SoundType, Storiesbackground, TextStories, TileImages } from '@/types/gameTypes'

// Níveis do jogo
export const levels: Level[] = [
    {
        id: 1,
        name: 'Nível Facil',
        targetScore: 300,//300
        maxMoves: 25,//25
        boardSize: { rows: 6, cols: 6},
        type: 'oxossi',
        unlocked: true,
    },
    {
        id: 2,
        name: 'Nível facil',
        targetScore: 350,//350
        maxMoves: 25,//25
        boardSize: { rows: 6, cols: 6 },
        type: 'ori',
        unlocked: true,
    },
    {
        id: 3,
        name: 'Nível Medio',
        targetScore: 500,//500
        maxMoves: 20,//20
        boardSize: { rows: 7, cols: 7 },
        type: 'ogum',
        unlocked: false,
    },
    {
        id: 4,
        name: 'Nível Medio',
        targetScore: 550,//550
        maxMoves: 25,//20
        boardSize: { rows: 7, cols: 7 },
        type: 'iemanja',
        unlocked: false,
    },
    {
        id: 5,
        name: 'Nível dificil',
        targetScore: 750,//750
        maxMoves: 25,//20
        boardSize: { rows: 8, cols: 8 },
        type: 'olorun',
        unlocked: false,
    },
]

// tiles do jogo, separados por cada level orixa
export const tileImages: TileImages = {
    1 : {
        red: require('@/assets/oxossi/images/red.png'),
        blue: require('@/assets/oxossi/images/blue.png'),
        green: require('@/assets/oxossi/images/green.png'),
        yellow: require('@/assets/oxossi/images/yellow.png'),
        purple: require('@/assets/oxossi/images/purple.png'),
        special: require('@/assets/oxossi/images/special.png'),    
    },
    2 : {
        red: require('@/assets/ori/images/red.png'),
        blue: require('@/assets/ori/images/blue.png'),
        green: require('@/assets/ori/images/green.png'),
        yellow: require('@/assets/ori/images/yellow.png'),
        purple: require('@/assets/ori/images/purple.png'),
        special: require('@/assets/ori/images/special.png'),    
    },
    3 : {
        red: require('@/assets/ogum/images/red.png'),
        blue: require('@/assets/ogum/images/blue.png'),
        green: require('@/assets/ogum/images/green.png'),
        yellow: require('@/assets/ogum/images/yellow.png'),
        purple: require('@/assets/ogum/images/purple.png'),
        special: require('@/assets/ogum/images/special.png'),    
    },
    4 : {
        red: require('@/assets/iemanja/images/red.png'),
        blue: require('@/assets/iemanja/images/blue.png'),
        green: require('@/assets/iemanja/images/green.png'),
        yellow: require('@/assets/iemanja/images/yellow.png'),
        purple: require('@/assets/iemanja/images/purple.png'),
        special: require('@/assets/iemanja/images/special.png'),    
    },
    5 : {
        red: require('@/assets/olorun/images/red.png'),
        blue: require('@/assets/olorun/images/blue.png'),
        green: require('@/assets/olorun/images/green.png'),
        yellow: require('@/assets/olorun/images/yellow.png'),
        purple: require('@/assets/olorun/images/purple.png'),
        special: require('@/assets/olorun/images/special.png'),    
    }
}

// textos dos stories iniciais, separados por cada level orixa
export const storiesStartTexts : TextStories = {
    1: [
            "Shaka adentra uma floresta densa e misteriosa, onde a luz do sol mal penetra. Entre as árvores, surge Oxóssi, seu arco firmemente seguro. Seus olhos brilham com a sabedoria da caça.",
            "Oxóssi (com a voz calma, mas penetrante): Filho de Àiyé, o mundo dos vivos não te pertence mais. Por que buscas atravessar Orum?",
            "Shaka (firme, erguendo a cabeça): Minha filha está acorrentada no mundo que deixei. Não descansarei até libertá-la.",
            "Oxóssi (sorrindo, acariciando a flecha em seu arco): A floresta não revela suas presas aos olhos apressados. Para caçar, é preciso ouvir, sentir… e sacrificar. O que estás disposto a perder?",
            "Shaka (sem hesitar): Tudo, menos minha honra e meu propósito.",
            "Oxóssi (aproxima-se, examinando-o): Então prova que és mais que um guerreiro… seja caçador. Encontre o cervo branco(Faça 300 pontos) que habita esta mata. Ele não é de carne, mas de espírito. Só os dignos o veem. Traga-me sua luz… e tua jornada continuará.",
            "Shaka acena em silêncio e mergulha na vegetação, enquanto Oxóssi observa, desaparecendo entre os murmúrios das folhas."
    ],
    2: [
        "Em uma caverna úmida, iluminada apenas por um brilho sobrenatural, Shaka está inconsciente no chão de pedra, até que umas palmadas rápidas e insolentes o sacodem.",
        "EXU (batendo no rosto de Shaka, voz estridente e provocadora): Ei!! Ei!!! Homenzinho, acorda!!! Tá achando que Orun é uma pousada?",
        "SHAKA (acordando de sobressalto, revirando os olhos): Onde eu estou?!",
        "EXU (rindo, os dentes afiados brilhando no escuro): Perdeu a memória? Esqueceu? Você tá em Orun, seu teimoso!",
        "SHAKA (esfregando os olhos, levantando-se aos poucos): Mas eu estava na selva… caçando o cervo branco...",
        "EXU (interrompendo, com um sorriso debochado): Ah, tá! Conheceu Oxóssi, né? Ele te ensinou a usar o arquinho dele? Rs!. (ele faz um gesto de atirar flecha, rindo alto) Agora caiu na casa de Ori e olha, ele não gosta de visitas barulhentas.",
        "SHAKA (irritado, olhando ao redor): E como eu saio daqui? Preciso terminar isso logo!",
        "EXU (encolhendo os ombros, já começando a se dissolver em fumaça): Melhor ele te explicar. Ori!!! Oh Ori!! Tem um morto impaciente querendo...!",
        "Shaka se vira e, de repente, ORI está ali, como uma presença que preenche a caverna. Sua voz é múltipla, ecoando de dentro da própria mente de Shaka.",
        "ORI (calmo, mas inquestionável): Você não sai, guerreiro. Você entende. E só então avança. (estendendo a mão, revelando um caminho de luz entre as sombras) O fim do caminho começa quando você aceita que nunca esteve no controle.",
        "Shaka engole seco. O chão treme. A próxima prova começa (Faça 350 pontos).",
    ],
    3: [
        "Shaka abre os olhos lentamente, a visão ainda turva. Aos poucos, distingue as altas paredes de pedra de um castelo sombrio, iluminado por tochas. À frente, Exu discuti com uma figura imponente sentada no trono. De repente, o orixá ergue uma espada flamejante. Exu recua, escapulindo em direção à saída — exatamente onde Shaka está.", 
        "EXU (passando por Shaka, com um sorriso afiado): Não aguento esses guerreiros! Melhor você desistir dessa loucura, homenzinho... Ou vai acabar em pedacinhos! (exu some em uma risada ecoante)", 
        "Shaka ignora o aviso, avançando com passos firmes em direção ao trono. O Orixá o observa, impassível, os dedos tamborilando no braço do trono.",
        "OGUM (voz trovejante, ecoando na sala): Quem ousa perturbar a paz do Rei?",
        "SHAKA (erguendo o queixo, sem baixar os olhos): Me chamo Shaka. Estou aqui porque preciso voltar ao mundo dos vivos. Minha filha está condenada à escravidão, e só eu posso salvá-la.",
        "OGUM (um riso cortante): E você acha que isso é assunto para um rei? Não me rebaixo a preocupações de seres insignificantes.",
        "SHAKA (os punhos se cerrando): Eu não sou qualquer um. Sou um guerreiro Zulu, e não vou embora até conseguir o que vim buscar.(uma pausa calculada) E se estou no lugar certo... estou falando com um rei que também é um guerreiro.",
        "Silêncio. Ogum inclina a cabeça, os olhos faiscando entre fúria e... curiosidade.",
        "OGUM (gritando, repentinamente furioso): Você ousa comparar um rei a um verme como você?! (subitamente, ri, a voz agora vibrante) Ah, ah, ah! Gostei da sua ousadia. Ninguém fala assim comigo e sai impune. Mas já que você é um guerreiro... não terá problemas com meu desafio. (estende a mão, e uma espada materializa-se no ar) Um duelo. Se vencer, passará.",
        "SHAKA (hesitante): Como posso vencer uma luta contra um Orixá?",
        "OGUM (rindo, desdenhoso): Achou que eu me rebaixaria a lutar contra você? Ridículo! (um estalar de dedos, e uma figura emerge das sombras — idêntica a Shaka, com uma espada em punho) Seu duelo é contra você mesmo. (Ogum entrega a espada a Shaka e agora com a voz grave diz) A maior batalha que um homem pode travar... é o bom combate, aquele que é travado dentro de nós mesmos.",
        "Os dois Shakas se encaram. Ogum recua, sentando-se no trono com um sorriso satisfeito.",
        "OGUM (como um juiz anunciando o início de um combate): Comecem. (Você precisa fazer 500 pontos)"
    ],
    4: [
        "O clarão branco vai se dissipando como névoa ao vento. Shaka pisca, ajustando a visão à luz do dia. Aos poucos, o cenário se revela: uma praia de areia dourada, o mar azul-turquesa batendo suavemente na costa. O ar salgado enche seus pulmões, e então... um canto. Doce, hipnótico, como se as próprias ondas sussurrassem em sua mente, convidando-o a entrar nas águas.", 
        "De repente, as águas se agitam suavemente. Iemanjá surge, majestosa, sua saia feita de espuma e seu rosto adornado com pérolas e conchas. Seus olhos são profundos como o oceano, carregados de sabedoria e doçura.", 
        "IEMANJÁ (com a voz serena, como maré calma): Meu filho... vejo que está cansado. Seu caminho foi difícil?",
        "SHAKA (curvando-se levemente, respeitoso, mas com urgência na voz): Sim, minha rainha. Mas não posso desistir. Quisera eu poder descansar, mas minha filha... ela precisa de mim.",
        "IEMANJÁ (sorri, um gesto maternal em seus lábios): Entendo seu sentimento, meu filho. Sou rainha, mas antes de tudo, sou mãe. Tudo o que faço, faço por meus filhos. (estende a mão, e uma onda gentil lambe os pés de Shaka, como um acalento) Não se preocupe. Seu desafio aqui será simples. (aponta para o mar infinito) Traga-me a joia mais bonita do oceano(Faça 550 pontos). Com essa oferenda, você poderá seguir seu caminho... e encontrar sua filha.",
        "Shaka não hesita. Com um último olhar para Iemanjá, ele mergulha nas águas cristalinas. O mar o recebe como um abraço, e ele nada em direção ao desconhecido, onde as profundezas escondem segredos e belezas além da imaginação humana.",
    ],
    5: [
        "O topo da montanha gelada, ventos cortantes carregam flocos de neve como lâminas. Olorun está sentado em um trono de cristal, suas costas voltadas para Shaka, os olhos fixos no horizonte — como se o próprio mundo girasse sob seu olhar. Shaka, exausto mas determinado, avança, sua respiração formando nuvens no ar congelante.", 
        "SHAKA (gritando contra o vento): Senhor!!!",
        "OLORUN (voz calma, mas distante, sem se virar): Não está vendo que estou ocupado?",
        "SHAKA (a voz quase se quebrando): Preciso da sua atenção agora! Meu tempo está acabando! Eu preciso salvar...",
        "OLORUN (interrompendo, ainda impassível): Sua filha, eu sei. Eu sei tudo sobre todos. (uma pausa quase irônica) Bem... quase tudo. Ainda não sei por que eu deveria ajudar você. (finalmente se vira, seus olhos são como sóis distantes) Você sabe o que está acontecendo lá embaixo? Tanta dor, tanto mal... Por que eu deveria me importar justo com o seu pedido?",
        "SHAKA (firme, mas com os punhos tremendo): Eu cheguei até aqui. Venci todos os desafios! O senhor tem que me ajudar! (então, baixando a voz, quase um sussurro) Mas... se meu pedido o deixou desconfortável... eu mudo... (ergue o rosto, os olhos queimando) Ao invés de me ajudar... ajude todos que estão sendo escravizados. Acabe com a escravidão dos seus filhos.",
        "OLORUN (os olhos se inflamando, a voz agora trovejante): Você ousa me desafiar? Acha que não me importo com meus filhos? (ergue-se, e a montanha treme) Eu não posso fazer nada. Lá embaixo, eles têm livre-arbítrio. Só quando chegam aqui... eu posso ser o pai que sempre quis ser. (sua voz se quebra, mas só por um instante) Aqui, eu lhes dou paz. Mas filhos como você... nunca se satisfazem.",
        "Um clarão. O mundo se dissolve. Quando Shaka abre os olhos, está de volta à África — mas agora é um espectro, invisível, caminhando entre os vivos. Homens de pele branca arrastam corpos acorrentados em direção aos navios. Olorun está gigante, pairando sobre a cena como uma montanha viva, seus olhos refletindo o sofrimento abaixo",
        "OLORUN (olhando para Shaka, sua voz agora um eco que vem da terra e do céu ao mesmo tempo.): É para isso que quer voltar? Para toda essa dor? Esse mundo sem mim?",
        "Shaka não responde com palavras. Em vez disso, ele aponta... no meio da confusão está Ahosi. Sua filha é um dos acorrentados, sangrando, mas rezando.",
        "AHOSI (voz frágil, mas clara): Olorun, meu Pai... não peço por mim. Já aceitei meu destino. Mas... proteja meu pai. Ele vai precisar da sua sabedoria... e do seu amor.",
        "Olorun pisca. Pela primeira vez, algo em seu rosto divino se racha. Shaka cai de joelhos, mas não de cansaço e sim em súplica.",
        "SHAKA (lágrimas queimando no rosto): Eu também sou pai, senhor... Me deixe voltar.",
        "Olorun fecha os olhos. Quando os abre, a selva inteira parece suspirar.",
        "OLORUN (voz emocionada, mas carregada de um peso cósmico): Você... é um homem de sorte, Shaka. Eu nunca nego um pedido a uma criança. Elas são... a prova de que eu existo. De que não errei ao criar vocês.",
        "OLORUN: Se você conseguir me trazer a Luz da Criação... realizarei sua vontade. (os olhos se estreitam, e o universo parece parar) Mas há uma condição...",
        "O silêncio que segue é mais pesado que qualquer palavra, e antes que Olorun termine o que ia dizer, Shaka se vê dentro do seu último desafio(Faça 750 pontos)."
    ],

}

// textos dos stories finais, separados por cada level orixa
export const storiesEndTexts : TextStories = {
    1: [
        "A noite envolve a selva, o ar pesado com o cheiro de terra molhada e folhas. Oxóssi recolhe seu arco, enquanto os animais antes abatidos por Shaka se erguem, revividos como sombras vivas. O guerreiro observa, seus punhos ainda cerrados de frustração.", 
        "SHAKA (rugindo, avançando um passo): É disso que eu preciso! Se você pode trazer mortos de volta, porque não me faz renascer? Não tenho tempo para jogos, minha filha agoniza em correntes!", 
        "OXÓSSI (os olhos brilhando como brasas sob a lua): Você ainda não entende, filho de Àiyé. Eu sou o guardião da floresta e não dos homens. Meu poder vive nestas árvores, nestas criaturas... Só um Ser pode te dar o que busca.",
        "A voz de Oxóssi ecoa enquanto seu corpo começa a se dissolver em névoa verde e ele desaparece. Shaka tenta segurá-lo, mas suas mãos passam pelo vazio, Shaka vai perdendo os sentidos até desmaiar."
    ],
    2: [
        "Shaka passa correndo pela última porta, ofegante. A porta rapidamente se fecha atrás dele com um estrondo, mostrando que foi por pouco. O ar pesa como chumbo. Então, ORI materializa-se diante dele, com sua presença serena e impenetrável.",
        "ORI (com voz suave, mas inquestionável): Nunca pensei que você completaria o caminho... Você deve ser digno de renascer. Mas não posso te guiar além deste ponto. (sua forma começa a se dissipar, como fumaça levada pelo vento)", 
        "SHAKA (avança, os olhos ardendo de desespero): ORI, ORI!!! ESPERA! Para onde eu tenho que ir?! Você não é o Orixá guia?! ME GUIE, POR FAVOR! (suas mãos agarram o vazio, os joelhos cedendo)",
        "Mas ORI já se foi. A escuridão se arrasta pelos cantos da visão de Shaka, ele sente seu corpo pesado. Ele luta, mas o chão o engole. O último pensamento antes da inconsciência é o eco de uma voz distante, talvez sua própria: O caminho agora é só seu..."
    ],
    3: [
        "Shaka está ajoelhado, respiração pesada, o corpo marcado por golpes e suor. Sangue escorre de seus ferimentos pingando no chão de pedra do castelo. À sua frente, o guerreiro-espelho,seu duplo, dissolve-se em fumaça negra, derrotado. Ogum se aproxima, os passos ecoando como trovões, e recolhe sua espada.", 
        "OGUM (com voz grave): Você provou ser um grande guerreiro. Não apenas com força... mas com coragem de enfrentar o que há dentro de si. (ogum estende a mão, não para ajudá-lo, mas para apontar em direção à grande porta do castelo) Vá. Você tem minha permissão.", 
        "Shaka levanta-se com dificuldade, os músculos tremendo de exaustão. Cada passo em direção à porta parece custar-lhe o último resto de energia. A porta começa a se abrir sozinha, rangendo como se acordasse de séculos de silêncio.",
        "Então... uma luz muito forte, Como o próprio sol desabando sobre ele, Shaka não consegue enxergar mais nada"

    ],
    4: [
        "Shaka emerge das águas, ofegante, o corpo marcado por arranhões invisíveis nas profundezas. Em sua mão, brilha uma joia radiante, como se guardasse um pedaço do próprio oceano", 
        "Iemanjá está sentada na praia, sua figura imponente envolta em véus de espuma e luz prateada. Seus olhos acompanham Shaka enquanto ele se aproxima, os passos pesados na areia úmida.", 
        "SHAKA (entrega a joia, voz rouca mas respeitosa): Minha rainha... o desafio não foi tão fácil como a senhora me prometeu. Mas aqui está. A joia mais bonita do mar.",
        "Iemanjá recebe a oferenda, e por um instante, todo o oceano parece vibrar. A joia cintila em suas mãos, como se reconhecendo sua verdadeira dona.",
        "IEMANJÁ (sorrindo, com orgulho e melancolia): Obrigada, meu filho. Esta é a oferenda mais bela que já recebi... pois carrega não apenas beleza, mas sua dor. (ergue a mão, acariciando o ar em frente ao rosto de Shaka) Agora, feche os olhos. Vou te guiar até Olorun. (com uma voz baixa, como uma maré aconchegante iemanja diz) Lembre-se... Olorun também é pai. Use isso a seu favor.",
        "Shaka fecha os olhos, e o canto de Iemanjá envolve sua mente, suave e hipnótico. A melodia é antiga, feita de sussurros de ondas e segredos das marés. Seus músculos relaxam, a dor desaparece, e ele sente a areia como um leito macio sob seu corpo.",
    ],
    5: [
        "Mas tem uma condição...(Olorun repete), não posso fazer você voltar no seu corpo antigo, ele está podre e muito distante daqui, temos que pensar num outro corpo, quem sabe de um animal, mas um muito veloz, porque você tem pouco tempo….",
        "Já sei!!!, ele é muito rapido e vive na sua terra.",
        "Olorun assopra Shaka, que sente como se estivesse caindo da montanha. E então cai na terra, ele começa a correr e percebe que está muito rápido e correndo em quatro patas.",
    ],
}



// Mapeamento de tipos de imagens para level
export const levelImages = {
    oxossi: require('@/assets/oxossi/images/levelSelect.png'),
    ori: require('@/assets/ori/images/levelSelect.png'),
    ogum: require('@/assets/ogum/images/levelSelect.png'),
    iemanja: require('@/assets/iemanja/images/levelSelect.png'),
    olorun: require('@/assets/olorun/images/levelSelect.png'),
}

// Mapeamento de tipos de descrição para level
export const levelDescription = {
    oxossi: 'Era considerado o guardião dos caçadores, pois cabia a estes trazer o sustento à tribo.',
    ori: 'É um conceito metafísico que representa a intuição, o destino, a consciência e a sabedoria.',
    ogum: 'Foi primeiro orixá a descer ao reino de Ilê-Aiê ("Terra"). Considerado senhor da guerra.',
    iemanja: 'É ela quem decide o destino de todos aqueles que entram no mar. Deusa do amor.',
    olorun: 'Deus supremo, criou o universo e todos os seres vivos, onipotente,onisciente e onipresente.',
}

//BackGroundimagens dos stories iniciais para o inicio do game, usado nos storiesStart
export const storieStartBackground: Storiesbackground = {
    "1": require('@/assets/oxossi/stories/inicial.jpg'),
    "2": require('@/assets/ori/stories/inicial.jpg'),
    "3": require('@/assets/ogum/stories/inicial.jpg'),
    "4": require('@/assets/iemanja/stories/inicial.jpg'),
    "5": require('@/assets/olorun/stories/inicial.jpg')
}

//BackGroundimagens dos stories finais para o termino do game, usado nos storiesEnd
export const storieEndBackground: Storiesbackground = {
    "1": require('@/assets/oxossi/stories/final.jpg'),
    "2": require('@/assets/ori/stories/final.jpg'),
    "3": require('@/assets/ogum/stories/final.jpg'),
    "4": require('@/assets/iemanja/stories/final.jpg'), 
    "5": require('@/assets/olorun/stories/final.jpg')
}

//BackGroundimagens de UI para level, usados na gameScreen
export const levelBackground: BackgroundImage = {
    1: require('@/assets/oxossi/images/background.png'),
    2: require('@/assets/ori/images/background.png'),
    3: require('@/assets/ogum/images/background.png'),
    4: require('@/assets/iemanja/images/background.png'), 
    5: require('@/assets/olorun/images/background.png')
}

//icones de UI para level, usados na gameScreen
export const iconBackground: BackgroundImage = {
    1: require('@/assets/oxossi/images/icon.png'),
    2: require('@/assets/ori/images/icon.png'),
    3: require('@/assets/ogum/images/icon.png'),
    4: require('@/assets/iemanja/images/icon.png'), 
    5: require('@/assets/olorun/images/icon.png')
}

// Objeto para armazenar os sons carregados
export const sounds: Record<SoundType, any | null > = {
    match: null,
    win: null,
    lose: null,
}

// Objeto para armazenar musicas carregados
export const musics: Record<any, any | null > =  {
    oxossi: null,
    ori: null,
    ogum: null,
    iemanja: null,
    olorun: null,
}


// Caminhos para os arquivos de áudio
export const soundFiles: Record<SoundType, any> = {
    match: require('@/assets/sounds/match.mp3'),
    win: require('@/assets/sounds/win.mp3'),
    lose: require('@/assets/sounds/lose.mp3'),
}

// Caminhos para os arquivos de ámusica
export const musicFiles: Record<any, any> = {
    oxossi: require('@/assets/oxossi/music/background.mp3'),
    ori: require('@/assets/ori/music/background.mp3'),
    ogum: require('@/assets/ogum/music/background.mp3'),
    iemanja: require('@/assets/iemanja/music/background.mp3'),
    olorun: require('@/assets/olorun/music/background.mp3'),
}