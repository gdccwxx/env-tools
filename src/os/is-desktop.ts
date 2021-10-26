
import { userAgent } from '../common/utils';
import { isLinux } from './is-linux';
import { isMac } from './is-mac';
import { isWin } from './is-win';

/**
 * is desktop
 * @param ua `navigator.userAgent`
 * @returns is desktop
 */
export const isDesktop = (ua: string = userAgent): boolean => {
  return isWin(ua) || isMac(ua) || isLinux(ua);
};

export default isDesktop;
