import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

export const isSoGouBrowser = (ua: string = userAgent) => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isSoGouBrowser: ua should not be empty');
  }

  const lowerUA = ua.toLowerCase();
  const haveSeUAMark = /se 2.x/.test(lowerUA);
  const haveMetasrMark = /metasr/.test(lowerUA);

  return haveSeUAMark || haveMetasrMark;
};

export default isSoGouBrowser;
