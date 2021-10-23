import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

// is windows && windows 32
export const isWin32 = (ua: string = userAgent) => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin32: ua should not be empty');
  }

  const isWin32 = /win32/i.test(ua);
  const isWow32 = /wow32/i.test(ua);

  return isWin32 || isWow32;
};

// is windows && windows 64
export const isWin64 = (ua: string = userAgent) => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin64: ua should not be empty');
  }

  const isWin64 = /win64/i.test(ua);
  const isWow64 = /wow64/i.test(ua);

  return isWin64 || isWow64;
};

// is windows system
export const isWin = (ua: string = userAgent) => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin: ua should not be empty');
  }

  const isWindows = /windows/i.test(ua);
  return isWin32(ua) || isWin64(ua) || isWindows;
};

export default isWin;
