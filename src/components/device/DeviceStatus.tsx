import React, {useEffect, useMemo, useRef, useState} from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { DeviceStatusOption } from ".";
import { apis } from "../../lib/axios";
import AppState from "../../recoil/app";
import DeviceState, { DeviceStatusType, DeviceType } from "../../recoil/device";
import { UserType } from "../../recoil/user";

const Box = styled.div<{ align: "row" | "column" }>`
  display: flex;
  flex-direction: ${(props) => props.align};
  align-items: ${(props) => (props.align === "row" ? "center" : "flex-start")};
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #f4f4f4;

  label {
    flex: ${(props) => (props.align === "row" ? 1.5 : 1)};
    font-size: 16px;
    color: #000;
    margin-bottom: ${(props) => (props.align === "row" ? 0 : "10px")};
  }

  .option-list {
    width: 100%;
    flex: ${(props) => (props.align === "row" ? 2.5 : 1)};
    display: flex;
  }
`;

const DeviceStatus = ({ /* data, */deviceId, user }: { /* data: DeviceType, */deviceId: string, user: UserType | null }) => {
  const [app, setApp] = useRecoilState(AppState);
  const [deviceList, setDeviceList] = useRecoilState(DeviceState);
  const modeTimeRef = useRef<number>(1);
  const prevMode = useRef<number>(0);

  const data = useMemo(() => {
    const filterList = deviceList.filter(d => d.id === deviceId)[0]
    prevMode.current = filterList.mode;
    return filterList
  }, [deviceList, deviceId]);

  const onClickPower = (power: number) => {
    if (!user || data.power === 99) return;
    apis.controlDevice(data.id, user.id, { power }).then(({ data }) => {
      if (data.includes('power')) {
        setDeviceList(deviceList.map(d => {
          return { ...d, ...(d.id === deviceId && { power: 99 }) };
        }));
      }
    });
  }
  // const onClickMode = (mode: number) => {
  //   if (!user || data.mode === 99 || data.power === 0) return;
  //   if(mode === 2) {
  //     if(modeTimeRef.current >= 3) modeTimeRef.current = 0;
  //     if(prevMode.current === 2){
  //       modeTimeRef.current += 1;
  //       apis.controlDevice(data.id, user.id, { mode_time:modeTimeRef.current }).then(({ data }) => {
  //         if (data.includes('mode_time')) {
  //           console.log('onClickMode = 2 1 :: ',data)
  //           setDeviceList(deviceList.map(d => {
  //             return { ...d, ...(d.id === deviceId && { mode_time: 99 }) };
  //           }));
  //         }
  //       });
  //     } else {
  //       apis.controlDevice(data.id, user.id, { mode, mode_time: 1 }).then(({ data }) => {
  //         if (data.includes('mode') && data.includes('mode_time')) {
  //           console.log('onClickMode = 2 2 :: ',data)
  //           setDeviceList(deviceList.map(d => {
  //             return { ...d, ...(d.id === deviceId && { mode: 99, mode_time: 99 }) };
  //           }));
  //         }
  //       });
  //     }
  //   } else {
  //     prevMode.current = mode;
  //     apis.controlDevice(data.id, user.id, { mode }).then(({ data }) => {
  //       if (data.includes('mode')) {
  //         setDeviceList(deviceList.map(d => {
  //           return { ...d, ...(d.id === deviceId && { mode: 99 }) };
  //         }));
  //       }
  //     });
  //   }
  // }

  const onClickMode = (mode: number) => {
    if (!user || data.mode === 99 || data.power === 0) return;
    apis.controlDevice(data.id, user.id, { mode }).then(({ data }) => {
      if (data.includes('mode')) {
        setDeviceList(deviceList.map(d => {
          return { ...d, ...(d.id === deviceId && { mode: 99 }) };
        }));
      }
    });
  }
  const onClickModeTime = (mode_time: number) => {
    if (!user || data.mode_time === 99) return;
    apis.controlDevice(data.id, user.id, { mode_time }).then(({ data }) => {
      if (data.includes('mode_time')) {
        setDeviceList(deviceList.map(d => {
          return { ...d, ...(d.id === deviceId && { mode_time: 99 }) };
        }));
      }
    });
  }

  const onClickAirVolume = (air_volume: number) => {
    if (!user || data.air_volume === 99) return;
    apis.controlDevice(data.id, user.id, { air_volume }).then(({ data }) => {
      if (data.includes('air_volume')) {
        setDeviceList(deviceList.map(d => {
          return { ...d, ...(d.id === deviceId && { air_volume: 99 }) };
        }));
      }
    });
  }
  const onClickAirQuality = (air_quality: number) => {
    if (!user || data.mode === 99) return;
    apis.controlDevice(data.id, user.id, { air_quality }).then(({ data }) => {
      if (data.includes('air_quality')) {
        setDeviceList(deviceList.map(d => {
          return { ...d, ...(d.id === deviceId && { mode: 99 }) };
        }));
      }
    });
  }
  const onClickRmAreaBacteria = (mode_time: number) => {
    if (!user || data.mode === 99 || data.mode_time === 99) return;
    apis.controlDevice(data.id, user.id, { mode: 1, mode_time }).then(({ data }) => {
      if (data.includes('mode') && data.includes('mode_time')) {
        setDeviceList(deviceList.map(d => {
          return { ...d, ...(d.id === deviceId && { mode: 99, mode_time: 99 }) };
        }));
      }
    });
  }
  const onClickPestControl = (mode_time: number) => {
    if (!user || data.mode === 99 || data.mode_time === 99) return;
    apis.controlDevice(data.id, user.id, { mode: 2, mode_time }).then(({ data }) => {
      if (data.includes('mode') && data.includes('mode_time')) {
        setDeviceList(deviceList.map(d => {
          return { ...d, ...(d.id === deviceId && { mode: 99, mode_time: 99 }) };
        }));
      }
    });
  }

  useEffect(() => {
    console.log('data :: ',data)
    // console.log({...(data.power !== 1 || data.mode !== 1) && { noPower: true }} );

  },[data])
  return (
    <div>
      <Box align="row">
        <label>??????</label>
        <div className="option-list">
          <DeviceStatusOption
            active={data.power === 1}
            text={data.power === 99 ? 'pending...' : 'ON'}
            onClick={() => onClickPower(1)}
          />
          {data.power !== 99 &&
            <DeviceStatusOption
              active={data.power === 0}
              text={data.power === 99 ? 'pending...' : 'OFF'}
              onClick={() => onClickPower(0)}
            />
          }
        </div>
      </Box>
      <Box align="row">
        <label>?????? ??????</label>
        <div className="option-list">
          <DeviceStatusOption
            {...(data.power !== 1) && { noPower: true }}
            active={data.mode === 0 && data.power === 1}
            text={data.mode === 99 ? 'pending...' : '?????????'}
            onClick={() => onClickMode(0)}
          />
          {data.mode !== 99 &&
              <>
                <DeviceStatusOption
                  {...(data.power !== 1) && { noPower: true }}
                  active={data.mode === 1 && data.power === 1}
                  text={data.mode === 99 ? 'pending...' : '??????'}
                  onClick={() => onClickMode(1)}
                />
                <DeviceStatusOption
              {...(data.power !== 1) && { noPower: true }}
                active={data.mode === 2 && data.power === 1}
                // text="1??????"
                text={data.mode === 99 ? 'pending...' : '??????'}
                onClick={() => onClickMode(2)}
                />
              </>
          }
        </div>
      </Box>
      <Box align="row">
        <label>?????? ?????? ??????</label>
        <div className="option-list">
          <DeviceStatusOption
              {...(data.power !== 1 || data.mode !== 2) && { noPower: true }}
              active={data.mode_time === 1 && data.power === 1 && data.mode === 2}
              text={data.mode_time === 99 ? 'pending...' : '3'}
              onClick={() => onClickModeTime(1)}
          />
          {data.mode_time !== 99 && <>
            <DeviceStatusOption
                {...(data.power !== 1 || data.mode !== 2) && { noPower: true }}
                active={data.mode_time === 2 && data.power === 1 && data.mode === 2}
                text={data.mode_time === 99 ? 'pending...' : '2'}
                onClick={() => onClickModeTime(2)}
            />
            <DeviceStatusOption
                {...(data.power !== 1 || data.mode !== 2) && { noPower: true }}
                active={data.mode_time === 3 && data.power === 1 && data.mode === 2}
                text={data.mode_time === 99 ? 'pending...' : '1'}
                onClick={() => onClickModeTime(3)}
            />
          </>}
          {/*<DeviceStatusOption*/}
          {/*    noPower={true}*/}
          {/*    /!*{...(data.power !== 1 || data.mode !== 2) && { noPower: true }}*!/*/}
          {/*    active={data.mode_time === 3 && data.power === 1 && data.mode === 2}*/}
          {/*    text={data.mode_time === 99 ? 'pending...' : '1'}*/}
          {/*    onClick={() => onClickModeTime(3)}*/}
          {/*/>*/}

        </div>
      </Box>
      <Box align="row">
        <label>?????? ??????</label>
        <div className="option-list">
          {/*<DeviceStatusOption*/}
          {/*  {...(data.power !== 1) && { noPower: true }}*/}
          {/*  active={data.air_volume === 0 && data.power === 1}*/}
          {/*  text={data.air_volume === 99 ? 'pending...' : '??????'}*/}
          {/*  onClick={() => onClickAirVolume(0)}*/}
          {/*/>*/}
          <DeviceStatusOption
              {...(data.power !== 1 || data.mode !== 1) && { noPower: true }}
              active={data.air_volume === 0 && data.power === 1 && data.mode === 1}
              text={data.air_volume === 99 ? 'pending...' : '??????'}
              onClick={() => onClickAirVolume(0)}
          />
          {data.air_volume !== 99 &&
            <DeviceStatusOption
              {...(data.power !== 1 || data.mode !== 1) && { noPower: true }}
              active={data.air_volume === 1 && data.power === 1 && data.mode === 1}
              text={data.air_volume === 99 ? 'pending...' : '??????'}
              onClick={() => onClickAirVolume(1)}
            />
          }
          {data.air_volume !== 99 &&
          <DeviceStatusOption
              {...(data.power !== 1 || data.mode !== 1) && { noPower: true }}
              active={data.air_volume === 2 && data.power === 1 && data.mode === 1}
              text={data.air_volume === 99 ? 'pending...' : '??????'}
              onClick={() => onClickAirVolume(2)}
          />
          }
          {data.air_volume !== 99 &&
              <DeviceStatusOption
                  {...(data.power !== 1 || data.mode !== 1) && { noPower: true }}
                  active={data.air_volume === 3 && data.power === 1 && data.mode === 1}
                  text={data.air_volume === 99 ? 'pending...' : '??????'}
                  onClick={() => onClickAirVolume(3)}
              />
          }
        </div>
      </Box>
      {/*<Box align="row">*/}
      {/*  <label>?????????</label>*/}
      {/*  <div className="option-list">*/}
      {/*    {data.mode !== 99 &&*/}
      {/*    <DeviceStatusOption*/}
      {/*      {...(data.power !== 1) && { noPower: true }}*/}
      {/*      active={data.mode === 1 && data.power === 1}*/}
      {/*      // text="1??????"*/}
      {/*      text={data.mode === 99 ? 'pending...' : 'ON'}*/}
      {/*      onClick={() => onClickMode(0)}*/}
      {/*    />*/}
      {/*    }*/}
      {/*    <DeviceStatusOption*/}
      {/*        {...(data.power !== 1) && { noPower: true }}*/}
      {/*        active={data.mode === 0 && data.power === 1}*/}
      {/*        // text="1??????"*/}
      {/*        text={data.mode === 99 ? 'pending...' : 'OFF'}*/}
      {/*        onClick={() => onClickMode(1)}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</Box>*/}
    </div>
  );
};

export default DeviceStatus;
