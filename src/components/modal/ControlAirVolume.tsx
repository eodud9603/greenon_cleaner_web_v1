import { Button } from "@mui/material";
import React, { useMemo } from "react";
import { useRecoilState, useRecoilValue } from 'recoil';
import { apis } from "../../lib/axios";
import DeviceState from "../../recoil/device";
import ModalState from "../../recoil/modal";
import UserState from "../../recoil/user";


const ControlAirVolume = ({ device_id }: { device_id: string }) => {
  const [modal, setModal] = useRecoilState(ModalState);
  const user = useRecoilValue(UserState);
  const [deviceList, setDeviceList] = useRecoilState(DeviceState);

  const device = useMemo(() => {
    const target = deviceList.filter(d => d.id === device_id);
    if (target.length)
      return target[0];
    return null;
  }, [device_id, deviceList]);

  const handleAirVolume = (air_volume: number) => {
    if (!user) return;
    apis.controlDevice(device_id, user.id, { air_volume }).then(({ data }) => {
      if (data.includes('air_volume')) {
        setModal({ ...modal, visible: false });
        setDeviceList(deviceList.map(d => {
          return { ...d, ...(d.id === device_id && { air_volume: 99 }) };
        }));
      }
    });
  }

  return (
    <>
      {/*<Button*/}
      {/*  style={{*/}
      {/*    width: "100%",*/}
      {/*    color: (device && device.air_volume === 0) ? "#007cba" : "rgba(0,0,0,0.4)",*/}
      {/*    borderBottom: "1px solid #f4f4f4",*/}
      {/*  }}*/}
      {/*  onClick={() => handleAirVolume(0)}*/}
      {/*>*/}
      {/*  연속*/}
      {/*</Button>*/}
      {/*<Button*/}
      {/*  style={{*/}
      {/*    width: "100%",*/}
      {/*    color: (device && device.air_volume === 1) ? "#007cba" : "rgba(0,0,0,0.4)",*/}
      {/*    borderBottom: "1px solid #f4f4f4",*/}
      {/*  }}*/}
      {/*  onClick={() => handleAirVolume(1)}*/}
      {/*>*/}
      {/*  1시간*/}
      {/*</Button>*/}
      {/*<Button*/}
      {/*  style={{*/}
      {/*    width: "100%",*/}
      {/*    color: (device && device.air_volume === 2) ? "#007cba" : "rgba(0,0,0,0.4)",*/}
      {/*    borderBottom: "1px solid #f4f4f4",*/}
      {/*  }}*/}
      {/*  onClick={() => handleAirVolume(2)}*/}
      {/*>*/}
      {/*  2시간*/}
      {/*</Button>*/}
        <Button
            style={{
                width: "100%",
                color: (device && device.air_volume === 0) ? "#007cba" : "rgba(0,0,0,0.4)",
                borderBottom: "1px solid #f4f4f4",
            }}
            onClick={() => handleAirVolume(0)}
        >
            ON
        </Button>
        <Button
            style={{
                width: "100%",
                color: (device && device.air_volume === 1) ? "#007cba" : "rgba(0,0,0,0.4)",
                borderBottom: "1px solid #f4f4f4",
            }}
            onClick={() => handleAirVolume(1)}
        >
            OFF
        </Button>
    </>
  );
};

export default ControlAirVolume;
