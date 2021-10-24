import { userAgent, parameterChecker, JSType, errorBuilder } from '../common/utils';

// is windows && windows 32
export const isWin32 = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin32: ua should not be empty');
  }

  const win32Mark = /win32/i.test(ua);
  const wow32Mark = /wow32/i.test(ua);

  return win32Mark || wow32Mark;
};

// is windows && windows 64
export const isWin64 = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin64: ua should not be empty');
  }

  const win64Mark = /win64/i.test(ua);
  const wow64Mark = /wow64/i.test(ua);

  return win64Mark || wow64Mark;
};

// is windows system
export const isWin = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isWin: ua should not be empty');
  }

  const isWindows = /windows/i.test(ua);
  return isWindows || isWin32(ua) || isWin64(ua);
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
