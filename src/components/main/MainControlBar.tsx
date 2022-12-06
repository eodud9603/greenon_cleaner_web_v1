import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import DeviceState from "../../recoil/device";
import ModalState from "../../recoil/modal";
import BottomChevron from "../../static/icons/bottom-chevron.png";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #e5f2f8;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  border: 1px solid #e5f2f8;
  height: 40px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
`;

const SortButton = styled(Button)`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const Space = styled.div`
  display: flex;
  color: #007cba;
  align-items: center;

  strong {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 12px;
  }
`;

const MainControlBar = () => {
  const [modal, setModal] = useRecoilState(ModalState);
  const deviceList = useRecoilValue(DeviceState);
  const sortToName = (sort) => {
      switch (sort) {
          case 'createdAt':
              return '등록순'
          case 'power':
              return '동작중'
          case 'water_level':
              return '수위 낮음'
          case 'name':
              return '이름'
          case 'filter':
              return '필터 교체'
          case 'cibai':
              return '바비오에어로졸 지수'
          case 'pm25':
              return '미세먼지 지수'
          default:
              return '정렬'
      }
  }

  return (
    <Box>
      <SortButton onClick={() => setModal({ ...modal, visible: true, type: 'sortDevice' })}>
          {/*{sortToName() ?? sortToName()}*/}
          {modal?.sort ? sortToName(modal.sort) : '정렬'}
        <img
          src={BottomChevron}
          alt="bottom-chevron"
          style={{ display: "block", width: 16 }}
        />
      </SortButton>
      {/*<Button onClick={() => setModal({ ...modal, visible: true, type: 'controlDevice' })}>전체 제어</Button>*/}
      <Button style={{flex:1,marginLeft:15,marginRight:15}} onClick={() => setModal({ ...modal, visible: true, type: 'controlMove' })}>전체 제어</Button>
      <Space>
        <strong>{deviceList.length}</strong>
        <p style={{ marginLeft: 5 }}>연결됨</p>
      </Space>
    </Box>
  );
};

export default MainControlBar;
