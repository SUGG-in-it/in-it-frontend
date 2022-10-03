export interface AnswersResponseBody {
  answers: Answer[];
}

export interface Answer {
  id: number;
  nickname: string;
  date: string;
  content: string;
  userId: number;
}
