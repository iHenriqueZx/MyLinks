import {
  Component,
  HostBinding,
  HostListener,
  OnDestroy
} from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  LanguageOption
} from '../header/header.component';

interface MemoryCard {
  id: number;
  symbol: string;
  revealed: boolean;
  matched: boolean;
}

type ReactionStatus = 'idle' | 'waiting' | 'ready' | 'result' | 'early';

type LanguageCode = 'en' | 'pt' | 'de' | 'ja' | 'fr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {

  @HostBinding('style.--mouse-x')
  mouseX = '50vw';

  @HostBinding('style.--mouse-y')
  mouseY = '30vh';

  discordMessage = '';
  steamUrl = 'https://steamcommunity.com/id/iHenriqueZx/';

  currentYear = new Date().getFullYear();

  language: LanguageCode = 'en';

  languages: LanguageOption[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' }
  ];

  translations: Record<LanguageCode, Record<string, string>> = {
    en: {
      instagram: 'Instagram',
      steam: 'Steam',
      steamDescription: 'My gaming profile',
      copyDiscord: 'Copy: inovatozx',
      copiedDiscord: 'ID copied!',
      copyError: 'Unable to copy',
      miniGames: '3 MINI GAMES',
      funSection: 'A LITTLE FUN',
      gamesTitle: 'Game zone',
      score: 'SCORE',
      readyToPlay: 'Ready to play?',
      startGame: 'Start game',
      playAgain: 'Play again',
      gameOver: 'Game over!',
      scoreResult: 'Your score: ',
      snakeDescription: 'Eat the fruit and avoid hitting the walls!',
      snakeInstructions: 'Use the arrow keys to play',
      record: 'Record',
      arcade: 'ARCADE',
      memory: 'MEMORY',
      memoryTitle: 'Memory game',
      moves: 'MOVES',
      pairs: 'PAIRS',
      findPairs: 'Find all 8 pairs!',
      memoryWon: '🎉 You found all the pairs!',
      restart: 'Restart game',
      reaction: 'REACTION',
      reactionTitle: 'Reaction test',
      bestTime: 'BEST TIME',
      clickToStart: 'Click to start',
      wait: 'Wait...',
      clickNow: 'CLICK NOW!',
      tooEarly: 'Too early! Try again.',
      reactionDescription: 'Wait for the area to turn green and click as fast as possible.',
      startTest: 'Start test',
      tryAgain: 'Try again',
      playlist: 'MY PLAYLIST',
      listening: 'What I am listening to',
      music: '♫ MUSIC',
      madeWith: 'Made with',
      footerLove: 'cakes and juice'
    },

    pt: {
      instagram: 'Instagram',
      steam: 'Steam',
      steamDescription: 'Meu perfil gamer',
      copyDiscord: 'Copiar: inovatozx',
      copiedDiscord: 'ID copiado!',
      copyError: 'Não foi possível copiar',
      miniGames: '3 MINI JOGOS',
      funSection: 'UM POUCO DE DIVERSÃO',
      gamesTitle: 'Área de jogos',
      score: 'PONTUAÇÃO',
      readyToPlay: 'Pronto para jogar?',
      startGame: 'Começar jogo',
      playAgain: 'Jogar novamente',
      gameOver: 'Fim de jogo!',
      scoreResult: 'Sua pontuação: ',
      snakeDescription: 'Coma as frutas e não bata nas paredes!',
      snakeInstructions: 'Use as setas para jogar',
      record: 'Recorde',
      arcade: 'ARCADE',
      memory: 'MEMÓRIA',
      memoryTitle: 'Jogo da Memória',
      moves: 'JOGADAS',
      pairs: 'PARES',
      findPairs: 'Encontre os 8 pares!',
      memoryWon: '🎉 Você encontrou todos os pares!',
      restart: 'Reiniciar partida',
      reaction: 'REFLEXO',
      reactionTitle: 'Teste de Reflexo',
      bestTime: 'MELHOR TEMPO',
      clickToStart: 'Clique para começar',
      wait: 'Aguarde...',
      clickNow: 'CLIQUE AGORA!',
      tooEarly: 'Muito cedo! Tente novamente.',
      reactionDescription: 'Espere a área ficar verde e clique o mais rápido possível.',
      startTest: 'Iniciar teste',
      tryAgain: 'Tentar novamente',
      playlist: 'MINHA PLAYLIST',
      listening: 'O que estou ouvindo',
      music: '♫ MÚSICA',
      madeWith: 'Feito com',
      footerLove: 'bolinhos e sucos'
    },

    de: {
      instagram: 'Instagram',
      steam: 'Steam',
      steamDescription: 'Mein Gaming-Profil',
      copyDiscord: 'Kopieren: inovatozx',
      copiedDiscord: 'ID kopiert!',
      copyError: 'Kopieren nicht möglich',
      miniGames: '3 MINISPIELE',
      funSection: 'EIN BISSCHEN SPASS',
      gamesTitle: 'Spielbereich',
      score: 'PUNKTZAHL',
      readyToPlay: 'Bereit zum Spielen?',
      startGame: 'Spiel starten',
      playAgain: 'Erneut spielen',
      gameOver: 'Spiel vorbei!',
      scoreResult: 'Deine Punktzahl: ',
      snakeDescription: 'Iss das Obst und vermeide die Wände!',
      snakeInstructions: 'Benutze die Pfeiltasten',
      record: 'Rekord',
      arcade: 'ARCADE',
      memory: 'GEDÄCHTNIS',
      memoryTitle: 'Memory-Spiel',
      moves: 'ZÜGE',
      pairs: 'PAARE',
      findPairs: 'Finde alle 8 Paare!',
      memoryWon: '🎉 Du hast alle Paare gefunden!',
      restart: 'Spiel neu starten',
      reaction: 'REAKTION',
      reactionTitle: 'Reaktionstest',
      bestTime: 'BESTE ZEIT',
      clickToStart: 'Zum Starten klicken',
      wait: 'Warten...',
      clickNow: 'JETZT KLICKEN!',
      tooEarly: 'Zu früh! Versuch es erneut.',
      reactionDescription: 'Warte, bis das Feld grün wird, und klicke so schnell wie möglich.',
      startTest: 'Test starten',
      tryAgain: 'Erneut versuchen',
      playlist: 'MEINE PLAYLIST',
      listening: 'Was ich gerade höre',
      music: '♫ MUSIK',
      madeWith: 'Gemacht mit',
      footerLove: 'Kuchen und Saft'
    },

    ja: {
      instagram: 'Instagram',
      steam: 'Steam',
      steamDescription: 'ゲームプロフィール',
      copyDiscord: 'コピー: inovatozx',
      copiedDiscord: 'IDをコピーしました！',
      copyError: 'コピーできませんでした',
      miniGames: 'ミニゲーム 3 種',
      funSection: 'ちょっとしたお楽しみ',
      gamesTitle: 'ゲームコーナー',
      score: 'スコア',
      readyToPlay: '準備はいいですか？',
      startGame: 'ゲーム開始',
      playAgain: 'もう一度プレイ',
      gameOver: 'ゲームオーバー！',
      scoreResult: 'スコア: ',
      snakeDescription: 'フルーツを食べて壁にぶつからないように！',
      snakeInstructions: '矢印キーで操作',
      record: '最高記録',
      arcade: 'アーケード',
      memory: 'メモリー',
      memoryTitle: '神経衰弱',
      moves: 'プレイ回数',
      pairs: 'ペア',
      findPairs: '8組のペアを見つけよう！',
      memoryWon: '🎉 すべてのペアを見つけました！',
      restart: 'もう一度プレイ',
      reaction: '反射神経',
      reactionTitle: '反射神経テスト',
      bestTime: 'ベストタイム',
      clickToStart: 'クリックして開始',
      wait: '待ってください...',
      clickNow: '今すぐクリック！',
      tooEarly: '早すぎます！もう一度。',
      reactionDescription: '画面が緑色になったら、できるだけ早くクリックしてください。',
      startTest: 'テスト開始',
      tryAgain: 'もう一度試す',
      playlist: 'マイプレイリスト',
      listening: '今聴いている音楽',
      music: '♫ 音楽',
      madeWith: '制作',
      footerLove: 'ケーキとジュース'
    },

    fr: {
      instagram: 'Instagram',
      steam: 'Steam',
      steamDescription: 'Mon profil gaming',
      copyDiscord: 'Copier : inovatozx',
      copiedDiscord: 'ID copié !',
      copyError: 'Impossible de copier',
      miniGames: '3 MINI-JEUX',
      funSection: 'UN PEU DE DIVERTISSEMENT',
      gamesTitle: 'Espace jeux',
      score: 'SCORE',
      readyToPlay: 'Prêt à jouer ?',
      startGame: 'Commencer',
      playAgain: 'Rejouer',
      gameOver: 'Fin de partie !',
      scoreResult: 'Ton score : ',
      snakeDescription: 'Mange les fruits et évite les murs !',
      snakeInstructions: 'Utilise les flèches du clavier',
      record: 'Record',
      arcade: 'ARCADE',
      memory: 'MÉMOIRE',
      memoryTitle: 'Jeu de mémoire',
      moves: 'COUPS',
      pairs: 'PAIRES',
      findPairs: 'Trouve les 8 paires !',
      memoryWon: '🎉 Tu as trouvé toutes les paires !',
      restart: 'Recommencer',
      reaction: 'RÉFLEXE',
      reactionTitle: 'Test de réflexes',
      bestTime: 'MEILLEUR TEMPS',
      clickToStart: 'Clique pour commencer',
      wait: 'Patiente...',
      clickNow: 'CLIQUE MAINTENANT !',
      tooEarly: 'Trop tôt ! Réessaie.',
      reactionDescription: 'Attends que la zone devienne verte et clique le plus vite possible.',
      startTest: 'Démarrer le test',
      tryAgain: 'Réessayer',
      playlist: 'MA PLAYLIST',
      listening: 'Ce que j’écoute',
      music: '♫ MUSIQUE',
      madeWith: 'Fait avec',
      footerLove: 'gâteaux et jus'
    }
  };

  activeGame = 0;

  games = [
    'Snake Game',
    'Jogo da Memória',
    'Teste de Reflexo'
  ];

  boardSize = 12;
  board = Array.from({ length: 144 }, (_, i) => i);

  snake: number[] = [78, 77, 76];
  food = 30;

  direction = 1;
  nextDirection = 1;

  score = 0;
  bestScore = 0;

  gameStarted = false;
  gameOver = false;

  private gameInterval: ReturnType<typeof setInterval> | null = null;

  private readonly memorySymbols = [
    '🎮', '🎧', '🎯', '👾',
    '🚀', '💎', '⚡', '🔥'
  ];

  memoryCards: MemoryCard[] = [];

  memoryMoves = 0;
  memoryMatches = 0;
  memoryLocked = false;
  memoryWon = false;

  private firstMemoryCard: number | null = null;
  private memoryTimeout: ReturnType<typeof setTimeout> | null = null;

  reactionStatus: ReactionStatus = 'idle';
  reactionTime = 0;
  bestReaction: number | null = null;

  private reactionStart = 0;
  private reactionTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.startMemoryGame();
  }

  t(key: string): string {
    return this.translations[this.language][key]
      ?? this.translations.en[key]
      ?? key;
  }

  changeLanguage(code: string): void {
    if (this.languages.some(lang => lang.code === code)) {
      this.language = code as LanguageCode;
    }
  }

  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  async copyDiscord(): Promise<void> {
    try {
      await navigator.clipboard.writeText('inovatozx');
      this.discordMessage = this.t('copiedDiscord');

      setTimeout(() => {
        this.discordMessage = '';
      }, 2000);
    } catch {
      this.discordMessage = this.t('copyError');
    }
  }

  @HostListener('window:pointermove', ['$event'])
  handlePointerMove(event: PointerEvent): void {
    this.mouseX = `${event.clientX}px`;
    this.mouseY = `${event.clientY}px`;
  }

  nextGame(): void {
    if (this.activeGame < this.games.length - 1) {
      this.activeGame++;
    }
  }

  previousGame(): void {
    if (this.activeGame > 0) {
      this.activeGame--;
    }
  }

  selectGame(index: number): void {
    if (index >= 0 && index < this.games.length) {
      this.activeGame = index;
    }
  }

  isSnake(cell: number): boolean {
    return this.snake.includes(cell);
  }

  isFood(cell: number): boolean {
    return this.food === cell;
  }

  startGame(): void {
    this.stopGame();

    this.snake = [78, 77, 76];
    this.direction = 1;
    this.nextDirection = 1;
    this.score = 0;
    this.gameOver = false;
    this.gameStarted = true;

    this.generateFood();

    this.gameInterval = setInterval(() => {
      this.moveSnake();
    }, 160);
  }

  changeDirection(newDirection: number): void {
    if (!this.gameStarted) {
      return;
    }

    if (newDirection === -this.direction) {
      return;
    }

    if (newDirection === -this.nextDirection) {
      return;
    }

    this.nextDirection = newDirection;
  }

  private moveSnake(): void {
    this.direction = this.nextDirection;

    const head = this.snake[0];
    const x = head % this.boardSize;
    const y = Math.floor(head / this.boardSize);

    if (this.direction === 1 && x === this.boardSize - 1) {
      this.endGame();
      return;
    }

    if (this.direction === -1 && x === 0) {
      this.endGame();
      return;
    }

    if (this.direction === this.boardSize && y === this.boardSize - 1) {
      this.endGame();
      return;
    }

    if (this.direction === -this.boardSize && y === 0) {
      this.endGame();
      return;
    }

    const nextHead = head + this.direction;
    const willEat = nextHead === this.food;

    const collisionBody = willEat
      ? this.snake
      : this.snake.slice(0, -1);

    if (collisionBody.includes(nextHead)) {
      this.endGame();
      return;
    }

    this.snake.unshift(nextHead);

    if (willEat) {
      this.score++;

      if (this.score > this.bestScore) {
        this.bestScore = this.score;
      }

      this.generateFood();
    } else {
      this.snake.pop();
    }
  }

  private generateFood(): void {
    const available = this.board.filter(
      cell => !this.snake.includes(cell)
    );

    if (available.length === 0) {
      this.endGame();
      return;
    }

    this.food = available[
      Math.floor(Math.random() * available.length)
    ];
  }

  private endGame(): void {
    this.gameOver = true;
    this.gameStarted = false;
    this.stopGame();
  }

  private stopGame(): void {
    if (this.gameInterval !== null) {
      clearInterval(this.gameInterval);
      this.gameInterval = null;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent): void {
    if (!this.gameStarted) {
      return;
    }

    const keys: Record<string, number> = {
      ArrowRight: 1,
      ArrowLeft: -1,
      ArrowDown: this.boardSize,
      ArrowUp: -this.boardSize
    };

    const newDirection = keys[event.key];

    if (newDirection === undefined) {
      return;
    }

    event.preventDefault();
    this.changeDirection(newDirection);
  }

  startMemoryGame(): void {
    if (this.memoryTimeout !== null) {
      clearTimeout(this.memoryTimeout);
      this.memoryTimeout = null;
    }

    const symbols = [...this.memorySymbols, ...this.memorySymbols];

    for (let i = symbols.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [symbols[i], symbols[j]] = [symbols[j], symbols[i]];
    }

    this.memoryCards = symbols.map((symbol, index) => ({
      id: index,
      symbol,
      revealed: false,
      matched: false
    }));

    this.memoryMoves = 0;
    this.memoryMatches = 0;
    this.memoryLocked = false;
    this.memoryWon = false;
    this.firstMemoryCard = null;
  }

  flipMemoryCard(index: number): void {
    if (this.memoryLocked || this.memoryWon) {
      return;
    }

    const card = this.memoryCards[index];

    if (!card || card.revealed || card.matched) {
      return;
    }

    card.revealed = true;

    if (this.firstMemoryCard === null) {
      this.firstMemoryCard = index;
      return;
    }

    this.memoryMoves++;

    const firstCard = this.memoryCards[this.firstMemoryCard];

    if (firstCard.symbol === card.symbol) {
      firstCard.matched = true;
      card.matched = true;

      this.memoryMatches++;
      this.firstMemoryCard = null;

      if (this.memoryMatches === 8) {
        this.memoryWon = true;
      }

      return;
    }

    this.memoryLocked = true;

    this.memoryTimeout = setTimeout(() => {
      firstCard.revealed = false;
      card.revealed = false;

      this.firstMemoryCard = null;
      this.memoryLocked = false;
      this.memoryTimeout = null;
    }, 850);
  }

  startReactionTest(): void {
    this.clearReactionTimeout();

    this.reactionTime = 0;
    this.reactionStatus = 'waiting';

    const delay = Math.floor(Math.random() * 3000) + 1500;

    this.reactionTimeout = setTimeout(() => {
      this.reactionStatus = 'ready';
      this.reactionStart = performance.now();
      this.reactionTimeout = null;
    }, delay);
  }

  reactionClick(): void {
    if (
      this.reactionStatus === 'idle' ||
      this.reactionStatus === 'result' ||
      this.reactionStatus === 'early'
    ) {
      this.startReactionTest();
      return;
    }

    if (this.reactionStatus === 'waiting') {
      this.clearReactionTimeout();
      this.reactionStatus = 'early';
      return;
    }

    if (this.reactionStatus === 'ready') {
      this.reactionTime = Math.round(
        performance.now() - this.reactionStart
      );

      if (
        this.bestReaction === null ||
        this.reactionTime < this.bestReaction
      ) {
        this.bestReaction = this.reactionTime;
      }

      this.reactionStatus = 'result';
    }
  }

  private clearReactionTimeout(): void {
    if (this.reactionTimeout !== null) {
      clearTimeout(this.reactionTimeout);
      this.reactionTimeout = null;
    }
  }

  ngOnDestroy(): void {
    this.stopGame();

    if (this.memoryTimeout !== null) {
      clearTimeout(this.memoryTimeout);
    }

    this.clearReactionTimeout();
  }
}