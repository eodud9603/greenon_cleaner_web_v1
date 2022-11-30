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

  const onClickMode = async (mode:number) => {
    if (!user) return;

    let temp = deviceList.map(d => ({ ...d }));

    for (let i = 0; i < temp.length; i++) {

      if (temp[i].mode === 99 || temp[i].mode_time === 99) {
        continue;
      }

      await apis.controlDevice(temp[i].id, user.id, { mode: mode, mode_time:1 ,air_volume: 1,}).then(({ data }) => {
        if (data.includes('mode') && data.includes('mode_time') && data.includes('air_volume')) {
          temp[i].mode = 99;
          temp[i].mode_time = 99;
          temp[i].air_volume = 99;
        }
      }).catch((err) => console.log('err : ',err));
    }

    setDeviceList(temp);
    setToast({ open: true, message: '전체 디바이스에 명령이 전달되었습니다.', type: 'info' })
  }

  const onClickPower = async (power:number) => {
    if (!user) return;

    let temp = deviceList.map(d => ({ ...d }));

    for (let i = 0; i < temp.length; i++) {

      if (temp[i].power === power) {
        continue;
      }

      await apis.controlDevice(temp[i].id, user.id, { power }).then(({ data }) => {
        if (data.includes('power')) {
          // temp[i].air_quality = 99;
          temp[i].power = 99;
        }
      });
    }

    setDeviceList(temp);
    setToast({ open: true, message: '전체 디바이스에 명령이 전달되었습니다.', type: 'info' })
  }

  return (
    <>
      <ColBox>
        전원
        <div className="option-list">
          <Button
            variant="text"
            onClick={() => onClickPower(1)}
          >
            ON
          </Button>
          <Button
            variant="text"
            onClick={() => onClickPower(0)}
          >
            OFF
          </Button>
        </div>
      </ColBox>
      <ColBox>
        모드 선택
        <div className="option-list">
          <Button onClick={() => onClickMode(0)}>공기질</Button>
          <Button onClick={() => onClickMode(1)}>풍량</Button>
          <Button onClick={() => onClickMode(2)}>제균</Button>
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
