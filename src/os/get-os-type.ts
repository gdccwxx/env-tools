import { userAgent } from 'src/common/utils';
import isAndroid from './is-android';
import isIOS from './is-ios';
import isLinux from './is-linux';
import isMac from './is-mac';
import isWin from './is-win';

export enum OsType {
  android = 'android',
  ios = 'ios',
  linux = 'linux',
  mac = 'mac',
  win = 'win',
  unknown = 'unknown',
}

/**
 * get os type
 * @param ua userAgent
 * @returns enum `OsType`
 */
export const getOsType = (ua: string = userAgent): OsType => {
  if (isWin(ua)) return OsType.win;

  if (isMac(ua)) return OsType.mac;

  if (isAndroid(ua)) return OsType.android;

  if (isIOS(ua)) return OsType.ios;

  if (isLinux(ua)) return OsType.linux;

  return OsType.unknown;
};

export default getOsType;
