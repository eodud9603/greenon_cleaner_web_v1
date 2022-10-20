import { atom } from 'recoil';

export type AppStateType = {
   loading: boolean;
   location: string;
   pm25: [string, string]
};

const AppState = atom<AppStateType>({
   key: 'AppState',
   default: {
      loading: false,
      location: '',
      // pm25: ['맑음', '2.5PM']
      pm25: ['', '']
   }
});

export default AppState;
