import React from "react";
import styled from "styled-components";
import { CircularProgress } from ".";
import { DeviceStatusType } from "../../recoil/device";
import { ReactComponent as Icon1 } from "../../static/icons/icon-1.svg";
import { ReactComponent as Icon2 } from "../../static/icons/icon-2.svg";
import { ReactComponent as Icon3 } from "../../static/icons/icon-3.svg";
import {useRecoilState} from "recoil";
import ModalState from "../../recoil/modal";
// import { IDeviceData } from "../../stores/device";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InlineRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const InlineCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeviceIndex = ({ data }: { data: DeviceStatusType }) => {
  const [modal,setModal] = useRecoilState(ModalState);

  return (
    <Box>
      <ContainerRow>
        <CircularProgress
          onClick={() => setModal({ ...modal, visible: true ,type:'infoDevice',infoDevice:{ title:"바이오에어로졸지수"}})}
          title="바이오에에로졸지수"
          progress={data.cibai}
          // color="#007cba"
          color={data.cibai <= 32.5 ? '#00c4ff' : data.cibai <= 45.5 ? '#00baba' : data.cibai <= 68 ? '#ffc400' : 68 < data.cibai && '#ff0000'}
          text={data.cibai <= 32.5 ? '좋음' : data.cibai <= 45.5 ? '보통' : data.cibai <= 68 ? '나쁨' : 68 <  data.cibai && '매우나쁨'}
        />
        <div style={{width:20}}/>
        <CircularProgress
            onClick={() => setModal({ ...modal, visible: true ,type:'infoDevice',infoDevice:{ title:"미세먼지지수"}})}
          title="미세먼지지수"
          progress={data.pm25}
          color={data.pm25 <= 50 ? '#00c4ff' : data.pm25 <= 100 ? '#00baba' : data.pm25 <= 250 ? '#ffc400' : 250 < data.pm25 && '#ff0000'}
          text={data.pm25 <= 50 ? '좋음' : data.pm25 <= 100 ? '보통' : data.pm25 <= 250 ? '나쁨' : 250 < data.pm25 && '매우나쁨'}
        />
        {/*00baba*/}
        {/*<CircularProgress*/}
        {/*    onClick={() => setModal({ ...modal, visible: true ,type:'infoDevice',infoDevice:{ title:"식중독지수"}})}*/}
        {/*  title="식중독지수"*/}
        {/*  progress={data.food_poisoning}*/}
        {/*  color={data.food_poisoning <= 55 ? '#00c4ff' : data.food_poisoning <= 71 ? '#00baba' : data.food_poisoning <= 86 ? '#ffc400' : 86 < data.food_poisoning  && '#ff0000'}*/}
        {/*  text={data.food_poisoning <= 55 ? '좋음' : data.food_poisoning <= 71 ? '보통' : data.food_poisoning <= 86 ? '나쁨' : 86 < data.food_poisoning && '매우나쁨'}*/}
        {/*/>*/}
      </ContainerRow>
      <Row>
        <InlineRow>
          <Icon1 />
          <InlineCol>
            <label style={{ color: "#8b8b8b" }}>미세먼지(PM2.5)</label>
            <p style={{ fontSize: 14 }}>{data.pm25}PM</p>
          </InlineCol>
        </InlineRow>
        <InlineRow>
          <Icon2 />
          <InlineCol>
            <label style={{ color: "#8b8b8b" }}>온도</label>
            <p style={{ fontSize: 14 }}>{data.temperature}°C</p>
          </InlineCol>
        </InlineRow>
        <InlineRow>
          <Icon3 />
          <InlineCol>
            <label style={{ color: "#8b8b8b" }}>습도</label>
            <p style={{ fontSize: 14 }}>{data.humidity}%</p>
          </InlineCol>
        </InlineRow>
      </Row>
    </Box>
  );
};

export default DeviceIndex;
