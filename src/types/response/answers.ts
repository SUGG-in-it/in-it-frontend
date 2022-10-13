export interface AnswersResponseBody {
  answers: Answer[];
}

export interface MyAnswersResponseBody {
  answers: MyAnswer[];
}

export interface Answer {
  answerId: number;
  nickname: string;
  date: string;
  content: string;
  userId: number;
  selected: boolean;
}

export interface MyAnswer {
  id: number;
  nickname: string;
  date: string;
  content: string;
  userId: number;
  questionId: number;
}
