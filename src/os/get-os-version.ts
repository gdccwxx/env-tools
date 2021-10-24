import { userAgent, parameterChecker, errorBuilder, JSType, parseVersionFromUserAgent } from 'src/common/utils';
import { getOsType, OsType } from './get-os-type';
import {
 isWin2000, isWin7, isWin8, isWin81, isWinXP, isWinVista, isWin10, isWin2003, 
} from './is-win';

export enum WinVersion {
  win2000 = '2000',
  winXP = 'xp',
  win2003 = '2003',
  winVista = 'vista',
  win7 = '7',
  win8 = '8',
  win81 = '8.1',
  win10 = '10',
}


/**
 * get os version
 * @param ua userAgent
 * @returns string version | `WinVersion` | 'unknown' 
 */
export const getOsVersion = (ua: string = userAgent): string => {
  const type = getOsType(ua);
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isAndroid: ua should not be empty');
  }

  let version = 'unknown';
  switch (type) {
    case OsType.android:
      version = parseVersionFromUserAgent(/android [\d._]+/g, ua) ?? version;
      break;
    case OsType.ios:
      version = parseVersionFromUserAgent(/os [\d._]+/g, ua) ?? version;
      break;
    case OsType.mac:
      version = parseVersionFromUserAgent(/os x [\d._]+/g, ua) ?? version;
      break;
    case OsType.win:
      if (isWin2000(ua)) {
        version = WinVersion.win2000;
      } else if (isWin7(ua)) {
        version = WinVersion.win7;
      } else if (isWin8(ua)) {
        version = WinVersion.win8;
      } else if (isWin81(ua)) {
        version = WinVersion.win81;
      } else if (isWinXP(ua)) {
        version = WinVersion.winXP;
      } else if (isWinVista(ua)) {
        version = WinVersion.winVista;
      } else if (isWin10(ua)) {
        version = WinVersion.win10;
      } else if (isWin2003(ua)) {
        version = WinVersion.win2003;
      }
      break;
  }

  return version;
};

export default getOsVersion;
