import CommentItem from '@/components/question/detail/comment/CommentItem';

const dummy = [
  {
    id: 1,
    isCompleted: true,
    nickName: '지렁이',
    date: '2022-08-17',
    content:
      '구할 무한한 이는 그와 소담스러운 얼마나 긴지라 우리 사막이다. 석가는 길지 찬미를 아름답고 실현에 동산에는 부패를 공자는 것이다. 지혜는 그것은 따뜻한 가장 그들에게 거선의 예수는 꽃이 부패뿐이다. 능히 청춘은 어디 옷을 피고, 있음으로써 있는가? 대고, 속에 새 뭇 것은 하는 같이, 이것을 그리하였는가? 청춘의 커다란 인생에 피가 든 철환하였는가? 가치를 있을 그들을 갑 내는 뜨고, 모래뿐일 봄바람이다. 못할 이 설산에서 구하지 예수는 힘있다. 석가는 시들어 만천하의 가는 날카로우나 불어 힘있다.',
  },
  {
    id: 2,
    isCompleted: false,
    nickName: '깽군',
    date: '2022-08-17',
    content:
      '발휘하기 없는 공자는 천하를 이것은 희망의 시들어 봄바람이다. 없는 되려니와, 사는가 청춘의 그림자는 온갖 두기 운다. 청춘을 듣기만 꽃이 그들에게 있는 사막이다. 가진 우리의 열락의 그것은 커다란 청춘은 이 있다. 오아이스도 그와 그것은 있는가? 못할 힘차게 이것은 사막이다. 웅대한 그들에게 이 인간의 스며들어 길지 이것이다. 실로 그들은 생생하며, 황금시대의 가는 우리 이상을 풀밭에 우는 그리하였는가? 작고 천지는 불어 할지니, 봄바람을 황금시대를 사막이다. 피부가 것은 목숨이 이상, 것이다.',
  },
  {
    id: 3,
    isCompleted: false,
    nickName: '깽군',
    date: '2022-08-17',
    content:
      'any[]는 배열 타입을 명시적 선언한 것이므로 배열이 아닌 다른 데이터는 할당될 수 없습니다. 다른 데이터 타입을 할당하면 다음과 같은 오류를 컴파일 과정에서 출력합니다.',
  },
];

const CommentList = () => {
  return (
    <>
      {dummy.map((comment) => {
        return <CommentItem key={comment.id} {...comment} />;
      })}
    </>
  );
};

export default CommentList;
