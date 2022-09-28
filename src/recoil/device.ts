import { atom } from 'recoil';

export type DeviceType = {
   id: string;
   name: string | null;
   serial: string | null;
   type: string | null;
   power: number;
   mode: number;
   mode_time: number;
   air_volume: number;
   air_quality: number;
   water_level: number | null;
   status: DeviceStatusType[]
};
export type DeviceStatusType = {
   temperature: number; // 온도
   humidity: number; // 습도
   pm25: number; // 미세먼지
   voc: number;
   co2: number;
   cibai: number; // 바이오에어로졸
   createdAt: string;
};
const DeviceState = atom<DeviceType[]>({
   key: 'DeviceState',
   default: []
});

export const DeviceCurrentStatusState = atom<{ [key:string]: DeviceStatusType }>({
   key: 'DeviceStatusState',
   default: {}
});

export default DeviceState;
