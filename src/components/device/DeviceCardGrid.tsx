import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
// import { IDevice } from "../../stores/device";
// import useStore from "../../stores";
import { Button as MuiButton } from "@mui/material";
import { DeviceCurrentStatusState, DeviceType } from "../../recoil/device";
import { useRecoilState, useRecoilValue } from 'recoil';
import ModalState, { ModalType } from "../../recoil/modal";

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    color: #989898;
    margin-bottom: 10px;
  }
`;

const Button = styled(MuiButton)<{ red?: string, active?: string }>`
  width: 100%;
  background-color: ${(props) =>
    props.red === "true" ? "#f7f7f7" : props.active === 'true' ? "#e5f2f8" : "#f7f7f7"} !important;
  color: ${(props) =>
    props.red === "true" ? "#8b8b8b" : props.active === 'true' ? '#007CBA'  : "#8b8b8b" } !important;
  padding-top: 15px !important;
  padding-bottom: 15px !important;
  border-radius: 10px !important;
  box-shadow: none !important;
`;

const DeviceCardGrid = ({ device }: { device: DeviceType }) => {
  // const { modal } = useStore();
  const [modal, setModal] = useRecoilState(ModalState);
  const deviceStatusList = useRecoilValue(DeviceCurrentStatusState);

  const deviceStatus = useMemo(() => {
    if (deviceStatusList[device.id])
      return deviceStatusList[device.id];
    else return null;
  }, [device, deviceStatusList]);

  function formatMode(mode:number) {
    switch (mode) {
      case 0: return "꺼짐";
      case 1: return "연속";
      case 2: return "1시간";
      case 3: return "2시간";
    }
  }

  function formatAirVolume(air_volume:number) {
    switch (air_volume) {
      case 0: return "연속";
      case 1: return "1시간";
      case 2: return "2시간";
    }
  }

  const handleOpenModal = (type:ModalType, currentValue:number) => {
    if (currentValue !== 99)
      setModal({ ...modal, targetDeviceId: device.id, visible: true, type });
  }

  useEffect(() => {
      console.log('device :: ',device)
  },[])
  return (
    <Grid>
        <GridItem style={{ marginBottom: 20 }}>
            <label>온도</label>
            <p style={{ marginTop: 5 }}>{deviceStatus ? (deviceStatus.temperature-500)/10 + '°C' : '-'}</p>
        </GridItem>
        <GridItem style={{ marginBottom: 20 }}>
            <label>습도</label>
            <p style={{ marginTop: 5 }}>{deviceStatus ? deviceStatus.humidity/10 + '%' : '-'}</p>
        </GridItem>
        <GridItem style={{ marginBottom: 20 }}>
            <label>미세먼지(PM2.5)</label>
            <p style={{ marginTop: 5 }}>{deviceStatus ? deviceStatus.pm25 + 'ug/m^3' : '-'}</p>
        </GridItem>
      <GridItem style={{ marginBottom: 20 }}>
        <label>바이오에어로졸</label>
        <p style={{ marginTop: 5 }}>{deviceStatus ? deviceStatus.cibai : '-'}</p>
      </GridItem>
      <GridItem style={{ marginBottom: 20 }}>
        <label>VOC</label>
        <p style={{ marginTop: 5 }}>{deviceStatus ? deviceStatus.voc : '-'}</p>
      </GridItem>
      <GridItem style={{ marginBottom: 20 }}>
        <label>CO2</label>
        <p style={{ marginTop: 5 }}>{deviceStatus ? deviceStatus.co2+'ppm' : '-'}</p>
      </GridItem>

      <GridItem style={{ marginRight: 8 }}>
        <label>동작 모드 상태</label>
        <Button
          name="controlPower"
          onClick={(e) => {
            e.preventDefault();
            // handleOpenModal('controlPower', device.power);
          }}
          red={device.power === 1 ? "false" : "true"}
          active={device.power === 1 && device.mode === 0 ? "true" : "false"}
        >
            공기질
          {/*{device.power === 99 ? 'pending...' : device.power === 1 ? "켜짐" : "꺼짐"}*/}
        </Button>
      </GridItem>
      <GridItem>
        <label>
            <div style={{height:15}}/>
        </label>
        <Button
          name="controlMode"
          onClick={(e) => {
            e.preventDefault();
            if (device.power === 0 || device.mode === 99 || device.mode_time === 99) return;
            // handleOpenModal('controlMode', device.mode);
          }}
          red={device.power === 1 ? "false" : "true"}
          active={device.power === 1 && device.mode === 1 ? "true" : "false"}
        >
            풍량
          {/*{device.mode === 99 || device.mode_time === 99 ? 'pending...' : formatMode(device.mode+device.mode_time)}*/}
          {/*{device.mode === 99 ? 'pending...' : null}*/}
        </Button>
      </GridItem>
      <GridItem style={{ marginLeft: 8 }}>
        <label>
            <div style={{height:15}}/>
        </label>
        <Button
          name="controlAirVolume"
          onClick={(e) => {
            e.preventDefault();
            if (device.power === 0 || device.air_volume === 99) return;
            // handleOpenModal('controlAirVolume', device.air_volume);
          }}
          red={device.power === 1 ? "false" : "true"}
          active={device.power === 1 && device.mode === 2 ? "true" : "false"}
        >
            제균
          {/*{device.mode === 99 ? 'pending...' : formatAirVolume(device.air_volume)}*/}
          {/*{device.mode === 99 ? 'pending...' : null}*/}
        </Button>
      </GridItem>
    </Grid>
  );
};

export default DeviceCardGrid;
