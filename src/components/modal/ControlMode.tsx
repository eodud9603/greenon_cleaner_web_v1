import React, { useMemo } from "react";
import { Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { apis } from "../../lib/axios";
import DeviceState from "../../recoil/device";
import ModalState from "../../recoil/modal";
import UserState from "../../recoil/user";
// import useStore from "../../stores";
// import { useObserver } from "mobx-react";
// import { toJS } from "mobx";

const ControlMode = ({ device_id }: { device_id: string }) => {
  const [modal, setModal] = useRecoilState(ModalState);
  const user = useRecoilValue(UserState);
  const [deviceList, setDeviceList] = useRecoilState(DeviceState);

  const device = useMemo(() => {
    const target = deviceList.filter(d => d.id === device_id);
    if (target.length)
      return target[0];
    return null;
  }, [device_id, deviceList]);
//TODO :: 제균 모드 시 or 공기질 on 시 서로 영향을 주는지 안주는지 ex) 제균모드 실행 시 공기질 off 이 부분 답변 얻고나서 지금까지 작업한 내용 수정하기
  const handleMode = (mode: number,mode_time: number) => {
    if (!user) return;
    apis.controlDevice(device_id, user.id, { mode,mode_time }).then(({ data }) => {
        console.log('mode :: ',data)
      if (data.includes('mode') && data.includes('mode')) {
        setModal({ ...modal, visible: false });
        setDeviceList(deviceList.map(d => {
          return { ...d, ...(d.id === device_id && { mode: 99, mode_time: 99 }) };
        }));
      }
    });
  }

    return (
      <>
          <Button
              style={{
                  width: "100%",
                  color: (device && device.mode === 1 && device.mode_time === 0) ? "#007cba" : "rgba(0,0,0,0.4)",
                  borderBottom: "1px solid #f4f4f4",
              }}
              onClick={() => handleMode(1,0)}
          >
              연속
          </Button>
          <Button
              style={{
                  width: "100%",
                  color: (device && device.mode === 1 && device.mode_time === 1) ? "#007cba" : "rgba(0,0,0,0.4)",
                  borderBottom: "1px solid #f4f4f4",
              }}
              onClick={() => handleMode(1,1)}
          >
              1시간
          </Button>
          <Button
              style={{
                  width: "100%",
                  color: (device && device.mode === 1 && device.mode_time === 2) ? "#007cba" : "rgba(0,0,0,0.4)",
                  borderBottom: "1px solid #f4f4f4",
              }}
              onClick={() => handleMode(1,2)}
          >
              2시간
          </Button>
        <Button
          style={{
            width: "100%",
            color: (device && device.mode === 0 && device.mode_time === 0) ? "#007cba" : "rgba(0,0,0,0.4)",
          }}
          onClick={() => handleMode(0,0)}
        >
          OFF
        </Button>
      </>
    );
  // });
};

export default ControlMode;
