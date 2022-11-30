import React, {useEffect, useMemo} from "react";
import styled from "styled-components";
import {DeviceCurrentStatusState, DeviceType} from "../../recoil/device";
// import { IDevice } from "../../stores/device";
import { DeviceCard } from "../device";
import {useRecoilValue} from "recoil";
import ModalState from "../../recoil/modal";

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
`;

const MainGrid = ({ data }: { data: DeviceType[] }) => {
  const modal = useRecoilValue(ModalState);
  const deviceStatusList = useRecoilValue(DeviceCurrentStatusState);
  const sortData = useMemo(() => {
    let sortArray = [];
    if(modal?.sort === 'cibai' || modal.sort == 'pm25'){
      for(let item in deviceStatusList){
        data.forEach(e => {
          if(e.id === item) {
            sortArray.push({...e,status: deviceStatusList[item]});
            return;
          }
        });
        sortArray = sortArray.sort((a,b) => b.status[modal.sort] - a.status[modal.sort]);
      }
    }
    return sortArray;
  },[modal?.sort]);
  return (
    <Grid>
      {modal?.sort === 'cibai' || modal?.sort === 'pm25' ?
          sortData.map((dat: DeviceType) => <DeviceCard device={dat} key={dat.id} />)
          : data.map((dat: DeviceType) => <DeviceCard device={dat} key={dat.id} />)
      }
    </Grid>
  );
};

export default MainGrid;
