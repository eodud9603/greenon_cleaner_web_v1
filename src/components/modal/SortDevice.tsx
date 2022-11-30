import React from "react";
import { Box } from "./ResponsiveModal";
import {apis} from "../../lib/axios";
import {useRecoilState, useRecoilValue} from "recoil";
import UserState from "../../recoil/user";
import DeviceState, {DeviceCurrentStatusState} from "../../recoil/device";
import moment from "moment";
import device from "../../recoil/device";
import ModalState from "../../recoil/modal";

const SortDevice = () => {
    const user = useRecoilValue(UserState);
    const [modal,setModal] = useRecoilState(ModalState);
    const deviceList = useRecoilValue(DeviceState);
    const deviceStatusList = useRecoilValue(DeviceCurrentStatusState);
    // const sortGetList = async () => {
    //     await apis.getUserDevices(user.id).then(({ data }) => {
    //         setDeviceList(data);
    //         setLoadState(true);
    //     });
    //     apis.getDeviceConfigs(user.id).then(({ data }) => {
    //         setDeviceList(data);
    //     });
    // }

    // const aa = (a,b) => {
    //     return a
    // }

    const sortDeviceList = () => {
        let aa = [...deviceList];
        // let bb = aa.sort((a,b) => );
        // let bb = aa.sort((a,b) => moment(a.createdAt).diff(moment(b.createdAt)))
        // return deviceList
        // console.log(bb);
        // console.log(moment(deviceList[0].createdAt).format('YYYYMMDD'));
    }
  return (
    <>
      <Box onClick={() => setModal({...modal,visible:false,sort:'createdAt'})}>등록순</Box>
      <Box onClick={() => setModal({...modal,visible:false,sort:'power'})}>동작중</Box>
      <Box onClick={() => setModal({...modal,visible:false,sort:'pm25'})}>미세먼지 지수</Box>
      <Box onClick={() => setModal({...modal,visible:false,sort:'cibai'})}>바이오에어로졸 지수</Box>
      <Box onClick={() => setModal({...modal,visible:false,sort:'water_level'})}>수위 낮음</Box>
      <Box onClick={() => setModal({...modal,visible:false,sort:'filter'})}>필터 교체</Box>
    </>
  );
};

export default SortDevice;
