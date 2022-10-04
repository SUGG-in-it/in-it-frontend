export interface AnswersResponseBody {
  answers: Answer[];
}

export interface Answer {
  answerId: number;
  nickname: string;
  date: string;
  content: string;
  userId: number;
  selected: boolean;
}
