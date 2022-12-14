import React from "react";
import { ContentHeader } from "../components/base";
import styled from "styled-components";

const Container = styled.div`
    padding: 30px;
  margin-top: 20px;
`;
const Row = styled.div`
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.5px;
`;

const Usage = () => {
  return (
    <>
      <ContentHeader title="메뉴얼" />
      <Container>
        {/*<Row href={'http://52.79.150.136:3001/uploads/cleaner_menual.pdf'}>1. 하이브리드 공기청정제균기 메뉴얼</Row>*/}
        <Row onClick={() => {
            let aa = window.confirm('하이브리드 공기청정제균기 메뉴얼을 다운 받으시겠습니까?');
            if(aa)
            window.open('http://52.79.150.136:3001/uploads/cleaner_menual.pdf','_blank');
            else return;
        }}>1. 하이브리드 공기청정제균기 메뉴얼</Row>
      </Container>
    </>
  );
};

export default Usage;
