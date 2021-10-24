import { userAgent, parameterChecker, errorBuilder, JSType, parseVersionFromUserAgent } from 'src/common/utils';
import { getOsType, osType } from './get-os-type';
import { isWin2000, isWin7, isWin8, isWin81, isWinXP, isWinVista, isWin10, isWin2003 } from './is-win';

export enum winVersion {
  win2000 = '2000',
  winXP = 'xp',
  win2003 = '2003',
  winVista = 'vista',
  win7 = '7',
  win8 = '8',
  win81 = '8.1',
  win10 = '10',
};


/**
 * get os type
 * @param ua userAgent
 * @returns enum `osType`
 */
export const getOsVersion = (ua: string = userAgent): string => {
  const type = getOsType(ua);
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isAndroid: ua should not be empty');
  }

  let version = 'unknown';
  switch(type) {
    case osType.android:
      version = parseVersionFromUserAgent(/android [\d._]+/g, ua);
      break;
    case osType.ios:
      version = parseVersionFromUserAgent(/os [\d._]+/g, ua);
      break;
    case osType.mac:
      version = parseVersionFromUserAgent(/os x [\d._]+/g, ua);
      break;
    case osType.win:
      if (isWin2000(ua)) {
        version = winVersion.win2000;
      } else if (isWin7(ua)) {
        version = winVersion.win7;
      } else if (isWin8(ua)) {
        version = winVersion.win8;
      } else if (isWin81(ua)) {
        version = winVersion.win81;
      } else if (isWinXP(ua)) {
        version = winVersion.winXP;
      } else if (isWinVista(ua)) {
        version = winVersion.winVista;
      } else if (isWin10(ua)) {
        version = winVersion.win10;
      } else if (isWin2003(ua)) {
        version = winVersion.win2003;
      }
      break;
  }

  return version;
};

export default getOsVersion;
