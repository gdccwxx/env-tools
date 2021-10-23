import { userAgent } from 'src/common/utils';
import isAndroid from './is-android';
import isIOS from './is-ios';
import isLinux from './is-linux';
import isMac from './is-mac';
import isWin from './is-win';

export enum osType {
  android = 'android',
  ios = 'ios',
  linux = 'linux',
  mac = 'mac',
  win = 'win',
  unknown = 'unknown',
};

/**
 * get os type
 * @param ua userAgent
 * @returns enum `osType`
 */
export const getOsType = (ua: string = userAgent): osType => {
  if (isWin(ua)) return osType.win;

  if (isMac(ua)) return osType.mac;

  if (isAndroid(ua)) return osType.android;

  if (isIOS(ua)) return osType.ios;

  if (isLinux(ua)) return osType.linux;

  return osType.unknown;
};

export default getOsType;
