export interface AnswersResponseBody {
  answerList: Answer[];
}

export interface Answer {
  id: number;
  nickName: string;
  date: string;
  content: string;
}
