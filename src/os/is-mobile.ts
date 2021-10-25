
import { userAgent } from '../common/utils';
import { isAndroid, isIOS } from 'src';

/**
 * is mobile
 * @param ua `navigator.userAgent`
 * @returns is mobile
 */
export const isMobile = (ua: string = userAgent): boolean => {
  const mobileMark = /mobile/i.test(ua);
  return mobileMark || isAndroid(ua) || isIOS(ua);
};

export default isMobile;
