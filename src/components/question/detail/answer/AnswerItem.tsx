import Button from '@/components/common/button/Button';
import CommentSection from '@/components/question/detail/comment/CommentSection';
import CommentList from '@/components/question/detail/comment/CommentList';
import { QLabel } from '@/styles/commonStyles';
import { useState } from 'react';
import styled from 'styled-components';

interface AnswerProps {
  id: number;
  nickName: string;
  date: string;
  content: string;
}

const AnswerItem = ({ id, nickName, date, content }: AnswerProps) => {
  return (
    <AnswerItemWrapper>
      <AnswerHeader>
        <NickName>{`작성자 ${nickName}`}</NickName>
        <Date>{date}</Date>
      </AnswerHeader>
      <Content>{content}</Content>
      <CommentSection />
    </AnswerItemWrapper>
  );
};

const AnswerItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em 1em;
  margin-top: 2em;
  background-color: ${({ theme }) => theme.backgrondLightColor};
  border: 1px solid ${({ theme }) => theme.greyLineColor};
  border-radius: 5px;
`;

const AnswerHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.greyLineColor};
  padding-bottom: 1em;
`;

const NickName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.grayColor};
  margin-top: 0.5em;
`;

const Content = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.grayColor};
  line-height: 1.5;
  margin-top: 1em;
`;

export default AnswerItem;
