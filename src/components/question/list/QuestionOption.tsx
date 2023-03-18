import styled from 'styled-components';
import { BsGrid, BsListUl } from 'react-icons/bs';

const QuestionOption = () => {
  return (
    <FilterContainer>
      <ListViewContainer>
        <ViewButtonWrapper>
          <GridViewButton />
        </ViewButtonWrapper>
        <ViewButtonWrapper>
          <ListViewButton />
        </ViewButtonWrapper>
      </ListViewContainer>
      <OrderListContainer>
        <Order>{'최신순'}</Order>
        <Order>{'답변 많은 순'}</Order>
        <Order>{'좋아요 순'}</Order>
      </OrderListContainer>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListViewContainer = styled.div`
  display: flex;
`;

const OrderListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Order = styled.li`
  font-size: 0.9rem;
  color: #adb5bd;
  margin-right: 2em;
`;

const ViewButtonWrapper = styled.div`
  border: 1px solid #ddd;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GridViewButton = styled(BsGrid)`
  width: 20px;
  height: 20px;
`;
const ListViewButton = styled(BsListUl)`
  width: 20px;
  height: 20px;
`;

export default QuestionOption;
