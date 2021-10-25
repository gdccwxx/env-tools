
import { userAgent } from '../common/utils';
import { isWin, isMac, isLinux } from 'src';

/**
 * is desktop
 * @param ua `navigator.userAgent`
 * @returns is desktop
 */
export const isDesktop = (ua: string = userAgent): boolean => {
  return isWin(ua) || isMac(ua) || isLinux(ua);
};

export default isDesktop;
