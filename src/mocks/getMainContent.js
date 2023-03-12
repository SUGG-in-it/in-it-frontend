import { PAGINATION_SIZE } from '@/constants/paginationSize';
import { rest } from 'msw';

export const getMainContent = rest.get(
  `${process.env.NEXT_PUBLIC_API_PREFIX}/questions?page=0&size=${PAGINATION_SIZE.MAIN_QUESTION}&type='total'`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(0),
      ctx.json({
        data: {
          questions: [
            {
              questionId: 1,
              title: '코드리뷰 도와주실 분',
              content:
                '프론트엔드 개발을 하면서 구현이외에 불편했던 점들은 백엔드 개발이 끝나야 프론트엔드 개발을 할 수 있다는 점이었다. 그리고 프론트엔드는 나 혼자였고, 3명에 백엔드 개발자들과 함께 하여서 한 번에 API가 많이 업데이트 되면 그만큼 몰아서 해야했다.',
            },
            {
              questionId: 2,
              title: '자바스크립트 커링에 대해서',
              content:
                'MSW 라이브러리는 네트워크 수준에서 요청을 가로채서 모의 응답을 보내주는 역할을 한다. 따라서 Mock 서버를 직접 구축하지 않아도 API를 네트워크 수준에서 Mocking 할 수 있다.',
            },
            {
              questionId: 3,
              title: '리액트 컴포넌트 구조 어떻게 해야할까요?',
              content:
                'OOP의 개념들을 더 알면 좋겠다는 생각이 들었다. OOP는 학교 수업을 듣긴했지만 조금 개념이 부족하다는 생각이 들어 학교 도서관에서 객체지향의 사실과 오해 책을 빌려서 읽었다.',
            },
            {
              questionId: 4,
              title: '클린코드 책 추천',
              content:
                '단순히 모방이 아닌 이유는 예를 들면, 소프트웨어 상품은 실제 세계 상품이 하지 못하는 가격 계산과 같은 행동을 스스로 수행하기 때문이다.',
            },
            {
              questionId: 5,
              title: '디자인패턴 알아야하나요?',
              content:
                '첫 번째 차원은 구체적인 사물들 간의 공통점은 취하고 차이점은 버리는 일반화를 통해 단순하게 만드는 것이다. 두 번째 차원은 중요한 부분을 강조하기 위해 불필요한 세부사항을 제거함으로써 단순하게 만드는것이다.',
            },
            {
              questionId: 6,
              title: '자바 질문',
              content:
                'toast ui의 editor를 사용하여 개발하던중 오류가 발생했다. editor에는 아래의 사진과 같이 코드를 작성했다.',
            },
            {
              questionId: 7,
              title: '타입스크립트 타입과 인터페이스 차이',
              content: '언제 타입을 쓰고, 언제 인터페이스를 쓰면 좋을까요?',
            },
            { questionId: 8, title: '질문합니다', content: '질문합니다.' },
            {
              questionId: 9,
              title: '백준 12221(팀원 정하기) 문제 질문',
              content: '이런식으로 작성한 코드는 문제가 되나요? 시간복잡도 측면에서 시간이 너무 오래걸리지는 않을까요?',
            },
            {
              questionId: 10,
              title: '무료로 코드 봐드립니다.',
              content: '3년차 백엔드 개발자 입니다. 자바, 스프링 코드 무료로 봐들릴게요, 선착순 2분 입니다.',
            },
          ],
        },
      })
    );
  }
);
