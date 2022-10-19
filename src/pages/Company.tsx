import React from "react";
import { ContentHeader } from "../components/base";
import styled from "styled-components";
import Request from "./Request";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  .info-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }

  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #f7f7f7;
    border-radius: 10px;
    padding: 10px;
    gap: 10px;
  }

  .row {
  }
`;
const Company = () => {
  return (
    <>
      <ContentHeader title="고객 지원" />
        <Container>
          <div className={'box'}>
              <div className={'row'}>
                  콜센터 전화번호
              </div>
              <div className={'row'}>
                  <img style={{width:20}} src={require('../static/icons/call.jpg')}/> 1644 - 7702
              </div>
          </div>
            <div style={{borderTop:'1px solid lightgray',borderBottom:'1px solid lightgray',padding:7,textAlign:'center'}}>
                문의하기
            </div>
            <Request/>


        </Container>
    </>
  );
};

export default Company;
