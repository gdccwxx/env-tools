
import { userAgent } from '../common/utils';
import { isAndroid } from './is-android';
import { isIOS } from './is-ios';

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
