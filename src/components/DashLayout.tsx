import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  /* background-color: #65c874; */
  width: 100%;
  min-height: 100%;
  padding: 0rem;
`;

const WidgetsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 255px;
  padding: 1rem;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const Widget = styled.div`
  width: calc(50% - 2rem);
  border-radius: 8px;
  background: #111827;
  height: 100%;
  min-height: 200px;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    width: calc(100% - 3rem); // subtract margins
    min-height: 250px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 2rem;
`;

const Todo = styled.div`
  width: 100%;
  border-radius: 8px;
  background: #111827;
  height: 100%;
  min-height: 350px;
  margin: 0.2rem;
  padding: 1.5rem;
  box-shadow: 0 5px 2px rgba(0, 0, 0, 0.05);
`;

const LayoutPage: React.FC = () => {
  return (
    <>
      <Container>
        <WidgetsContainer>
          <Widget>Card 1</Widget>
          <Widget>Card 2</Widget>
        </WidgetsContainer>
        <TodoWrapper>
          <Todo />
        </TodoWrapper>
      </Container>
    </>
  );
};

export default LayoutPage;
