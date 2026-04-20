import { QuizResult, StartQuizResponse } from '../types/question';

export const mockStartQuizResponse: StartQuizResponse = {
  quizSessionId: 'dummy-session-id',
  quizId: 101,
  progress: {
    currentQuestionNumber: 1,
    totalQuestionCount: 10,
    answeredCount: 0,
    correctCount: 0,
    incorrectCount: 0,
  },
  question: {
    questionId: 1,
    currentQuestionNumber: 1,
    totalQuestionCount: 10,
    categoryId: 1,
    phraseText: "I'll [ ] a man out of you.",
    translationText: "「お前を一人前にしてやる！」（ムーラン）",
    targetWord: "make",
    choices: [
      { choiceId: 0, choiceText: "make" },
      { choiceId: 1, choiceText: "keep" },
      { choiceId: 2, choiceText: "find" },
      { choiceId: 3, choiceText: "take" },
    ],
    explanation: "「make A (out of) B」で「BからAを作り出す（一人前にする）」という熟語です。",
  },
};

export const mockQuizResult: QuizResult = {
  totalQuestions: 10,
  correctAnswers: 8,
  userAnswers: [
    {
      question: {
        questionId: 1,
        currentQuestionNumber: 1,
        totalQuestionCount: 10,
        categoryId: 1,
        phraseText: "I'll [ ] a man out of you.",
        translationText: "「お前を一人前にしてやる！」（ムーラン）",
        targetWord: "make",
        choices: [{ choiceId: 0, choiceText: "make" }, { choiceId: 1, choiceText: "keep" }, { choiceId: 2, choiceText: "find" }, { choiceId: 3, choiceText: "take" }],
        explanation: "「make A (out of) B」で「BからAを作り出す（一人前にする）」という熟語です。"
      },
      selectedChoiceId: 0,
      isCorrect: true
    },
    {
      question: {
        questionId: 2,
        currentQuestionNumber: 2,
        totalQuestionCount: 10,
        categoryId: 1,
        phraseText: "Test the [ ] and break through.",
        translationText: "「自分の限界に挑戦して、それをさらに越えていけ。」（アナと雪の女王）",
        targetWord: "limits",
        choices: [{ choiceId: 0, choiceText: "limits" }, { choiceId: 1, choiceText: "dreams" }, { choiceId: 2, choiceText: "goals" }, { choiceId: 3, choiceText: "starts" }],
        explanation: "「limit」は境界や制限。自分の能力の限界に挑戦するという意味です。"
      },
      selectedChoiceId: 0,
      isCorrect: true
    },
    {
      question: {
        questionId: 3,
        currentQuestionNumber: 3,
        totalQuestionCount: 10,
        categoryId: 1,
        phraseText: "Not to be [ ] by appearances, for beauty is found within.",
        translationText: "「外見に騙されてはいけない。美は内面に宿るのだから。」（美女と野獣）",
        targetWord: "deceived",
        choices: [{ choiceId: 0, choiceText: "deceived" }, { choiceId: 1, choiceText: "believed" }, { choiceId: 2, choiceText: "helped" }, { choiceId: 3, choiceText: "called" }],
        explanation: "「deceive（騙す）」の受身形。外見に惑わされてはいけないという教訓です。"
      },
      selectedChoiceId: 1,
      isCorrect: false
    },
    {
      question: {
        questionId: 4,
        currentQuestionNumber: 4,
        totalQuestionCount: 10,
        categoryId: 1,
        phraseText: "I’m not a [ ] bunny.",
        translationText: "「私はマヌケなウサギなんかじゃない！」（ズートピア）",
        targetWord: "dumb",
        choices: [{ choiceId: 0, choiceText: "dumb" }, { choiceId: 1, choiceText: "smart" }, { choiceId: 2, choiceText: "fast" }, { choiceId: 3, choiceText: "cute" }],
        explanation: "本来は「口がきけない」ですが、口語では「馬鹿な」という強い意味で使われます。"
      },
      selectedChoiceId: 0,
      isCorrect: true
    },
    {
      question: {
        questionId: 5,
        currentQuestionNumber: 5,
        totalQuestionCount: 10,
        categoryId: 1,
        phraseText: "Always let your [ ] be your guide.",
        translationText: "「いつもあなたの良心をあなたの道しるべにしなさい。」（ピノキオ）",
        targetWord: "conscience",
        choices: [{ choiceId: 0, choiceText: "conscience" }, { choiceId: 1, choiceText: "science" }, { choiceId: 2, choiceText: "confidence" }, { choiceId: 3, choiceText: "convenience" }],
        explanation: "善悪を判断する内なる心の声。ジミニー・クリケットの重要な言葉です。"
      },
      selectedChoiceId: 0,
      isCorrect: true
    },
    {
      question: {
        questionId: 6,
        currentQuestionNumber: 6,
        totalQuestionCount: 10,
        categoryId: 1,
        phraseText: "To infinity and [ ]!",
        translationText: "「無限の彼方へ！」（トイ・ストーリー）",
        targetWord: "beyond",
        choices: [{ choiceId: 0, choiceText: "beyond" }, { choiceId: 1, choiceText: "under" }, { choiceId: 2, choiceText: "between" }, { choiceId: 3, choiceText: "against" }],
        explanation: "「向こう側へ」という意味の前置詞。限界を決めないバズの決め台詞です。"
      },
      selectedChoiceId: 0,
      isCorrect: true
    },
    {
      question: {
        questionId: 7,
        currentQuestionNumber: 7,
        totalQuestionCount: 10,
        categoryId: 1,
        phraseText: "Some people are [ ] melting for.",
        translationText: "「大切な人のためなら溶けてもいいよ。」（オラフ）",
        targetWord: "worth",
        choices: [{ choiceId: 0, choiceText: "worth" }, { choiceId: 1, choiceText: "safe" }, { choiceId: 2, choiceText: "easy" }, { choiceId: 3, choiceText: "free" }],
        explanation: "「be worth 〜ing」で「〜する価値がある」という重要構文です。"
      },
      selectedChoiceId: 0,
      isCorrect: true
    },
    {
      question: {
        questionId: 8,
        currentQuestionNumber: 8,
        totalQuestionCount: 10,
        categoryId: 1,
        phraseText: "You must be [ ] to your heart.",
        translationText: "「自分の心に素直になって。」（ムーラン）",
        targetWord: "true",
        choices: [{ choiceId: 0, choiceText: "true" }, { choiceId: 1, choiceText: "false" }, { choiceId: 2, choiceText: "kind" }, { choiceId: 3, choiceText: "rude" }],
        explanation: "「自分に正直である」ことを「be true to oneself」と表現します。"
      },
      selectedChoiceId: 0,
      isCorrect: true
    },
    {
      question: {
        questionId: 9,
        currentQuestionNumber: 9,
        totalQuestionCount: 10,
        categoryId: 1,
        phraseText: "All it takes is [ ] and trust.",
        translationText: "「必要なのは信じることだけ。」（ピーターパン）",
        targetWord: "faith",
        choices: [{ choiceId: 0, choiceText: "faith" }, { choiceId: 1, choiceText: "face" }, { choiceId: 2, choiceText: "fate" }, { choiceId: 3, choiceText: "fear" }],
        explanation: "目に見えないものを信じる強い心。ピーターパンの魔法の源です。"
      },
      selectedChoiceId: 1,
      isCorrect: false
    },
    {
      question: {
        questionId: 10,
        currentQuestionNumber: 10,
        totalQuestionCount: 10,
        categoryId: 1,
        phraseText: "Now… bring me that [ ].",
        translationText: "「それじゃ・・・水平線まで連れてってくれ」（パイレーツ・オブ・カリビアン）",
        targetWord: "horizon",
        choices: [{ choiceId: 0, choiceText: "horizon" }, { choiceId: 1, choiceText: "hospital" }, { choiceId: 2, choiceText: "holiday" }, { choiceId: 3, choiceText: "history" }],
        explanation: "空と海が接する境界線。冒険への旅立ちを象徴する言葉です。"
      },
      selectedChoiceId: 0,
      isCorrect: true
    }
  ]
};

export const mockQuestions = mockQuizResult.userAnswers.map(ua => ua.question);
