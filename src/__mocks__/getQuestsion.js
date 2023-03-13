import { rest } from 'msw';

export const getQuestion = rest.get(`${process.env.NEXT_PUBLIC_API_PREFIX}/questions/1`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(0),
    ctx.json({
      data: {
        questionId: 1,
        title: '코드리뷰 도와주실 분',
        userId: '1',
        nickname: '지렁이',
        updateDate: '2018-04-20 11:21:04',
        tagList: 'test,js',
        content:
          '프론트엔드 개발을 하면서 구현이외에 불편했던 점들은 백엔드 개발이 끝나야 프론트엔드 개발을 할 수 있다는 점이었다. 그리고 프론트엔드는 나 혼자였고, 3명에 백엔드 개발자들과 함께 하여서 한 번에 API가 많이 업데이트 되면 그만큼 몰아서 해야했다.',
      },
    })
  );
});
