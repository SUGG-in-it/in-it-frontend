export interface AnswersResponseBody {
  answers: Answer[];
}

export interface Answer {
  id: number;
  nickName: string;
  date: string;
  content: string;
  userId: number;
}
