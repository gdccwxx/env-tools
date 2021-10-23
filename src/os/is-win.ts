import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

// is windows && windows 32
export const isWin32 = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin32: ua should not be empty');
  }

  const isWin32 = /win32/i.test(ua);
  const isWow32 = /wow32/i.test(ua);

  return isWin32 || isWow32;
};

// is windows && windows 64
export const isWin64 = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin64: ua should not be empty');
  }

  const isWin64 = /win64/i.test(ua);
  const isWow64 = /wow64/i.test(ua);

  return isWin64 || isWow64;
};

// is windows system
export const isWin = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin: ua should not be empty');
  }

  const isWindows = /windows/i.test(ua);
  return isWin32(ua) || isWin64(ua) || isWindows;
};

// is windows 2000
export const isWin2000 = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin2000: ua should not be empty');
  }

  return /windows nt 5.0|windows 2000/i.test(ua);
};

// is windows xp
export const isWinXP = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWinXP: ua should not be empty');
  }

  return /windows nt 5.1|windows xp/i.test(ua);
};

// is windows 2003
export const isWin2003 = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin2003: ua should not be empty');
  }

  return /windows nt 5.2|windows 2003/i.test(ua);
};

// is windows vista
export const isWinVista = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin2003: ua should not be empty');
  }

  return /windows nt 6.0|windows vista/i.test(ua);
};

// is windows 7
export const isWin7 = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin7: ua should not be empty');
  }

  return /windows nt 6.1|windows 7/i.test(ua);
};

// is windows 8
export const isWin8 = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin8: ua should not be empty');
  }

  return /windows nt 6.2|windows 8/i.test(ua);
};

// is windows 8.1
export const isWin81 = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin81: ua should not be empty');
  }

  return /windows nt 6.3|windows 8.1/i.test(ua);
};

// is windows 10
export const isWin10 = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin10: ua should not be empty');
  }

  return /windows nt 10.0|windows 10/i.test(ua);
};

export default isWin;
