import React from "react";
import { ColBox } from "./ResponsiveModal";
import { Alert, Button, Snackbar } from "@mui/material";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import DeviceState from "../../recoil/device";
import ToastState from "../../recoil/toast";
import UserState from "../../recoil/user";
import { apis } from "../../lib/axios";

const ControlMove = () => {
  const user = useRecoilValue(UserState);
  const setToast = useSetRecoilState(ToastState);
  const [deviceList, setDeviceList] = useRecoilState(DeviceState);

  const [open, setOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // const handleClick = (key: string, value: any) => {
  //   setOpen(true);
  //   // device.updateAllDevice(key, value);
  //   setTimeout(() => {
  //     setOpen(false);
  //   }, 2000);
  // };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onClickMode = async (mode_time:number) => {
    if (!user) return;

    let temp = deviceList.map(d => ({ ...d }));

    for (let i = 0; i < temp.length; i++) {

      if (temp[i].mode === 99 || temp[i].mode_time === mode_time) {
        continue;
      }

      await apis.controlDevice(temp[i].id, user.id, { mode: 1, mode_time }).then(({ data }) => {
        if (data.includes('mode') && data.includes('mode_time')) {
          temp[i].mode = 99;
          temp[i].mode_time = 99;
        }
      });
    }

    setDeviceList(temp);
    setToast({ open: true, message: '전체 디바이스에 명령이 전달되었습니다.', type: 'info' })
  }

  const onClickAirControl = async (air_volume:number) => {
    if (!user) return;

    let temp = deviceList.map(d => ({ ...d }));

    for (let i = 0; i < temp.length; i++) {

      if (temp[i].air_quality === 99 || temp[i].air_volume === air_volume) {
        continue;
      }

      await apis.controlDevice(temp[i].id, user.id, { air_quality: 1, air_volume }).then(({ data }) => {
        if (data.includes('air_quality') && data.includes('air_volume')) {
          temp[i].air_quality = 99;
          temp[i].air_volume = 99;
        }
      });
    }

    setDeviceList(temp);
    setToast({ open: true, message: '전체 디바이스에 명령이 전달되었습니다.', type: 'info' })
  }

  return (
    <>
      <ColBox>
        제균
        <div className="option-list">
          <Button
            variant="text"
            onClick={() => onClickMode(1)}
          >
            1시간
          </Button>
          <Button
            variant="text"
            onClick={() => onClickMode(2)}
          >
            2시간
          </Button>
          <Button
              variant="text"
              onClick={() => onClickMode(0)}
          >
            연속
          </Button>
        </div>
      </ColBox>
      <ColBox>
        풍량
        <div className="option-list">
          <Button onClick={() => onClickAirControl(0)}>상시</Button>
          <Button onClick={() => onClickAirControl(1)}>강</Button>
          <Button onClick={() => onClickAirControl(2)}>쾌속</Button>
          <Button onClick={() => onClickAirControl(-1)}>공기질</Button>
          {/*<Button onClick={() => onClickPestControl(-1)}>수동</Button>*/}
        </div>
      </ColBox>
      <Snackbar
        open={open}
        anchorOrigin={{
          vertical: isMobile ? "top" : "bottom",
          horizontal: isMobile ? "center" : "right",
        }}
      >
        <Alert severity="info">전체 디바이스에 성공적으로 반영되었습니다</Alert>
      </Snackbar>
    </>
  );
};

export default ControlMove;
