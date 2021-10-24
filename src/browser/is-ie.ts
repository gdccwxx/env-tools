import { userAgent, appName, appVersion, parameterChecker, JSType, errorBuilder } from '../common/utils';

// split version and replace MSIE
const _parsedAppVersion = (_appVersion: string = appVersion): number => {
  const versionChunk = _appVersion.split(';')[1].replace(/[ ]/g, '').replace('MSIE', '');

  return parseInt(versionChunk, 10);
};

// is Microsoft Internet Explorer
const _isMIE = (_appName: string = appName): boolean => _appName === 'Microsoft Internet Explorer';

/**
 * browser is ie and less than ie 9
 * @param appName navigator.appName, `appName` is deprecated, only old browser have property
 * @param appVersion navigator.appVersion, `appVersion` is deprecated, only old browser have property
 * @returns boolean
 */
export const isLtIE9 = (_appName: string = appName, _appVersion: string = appVersion): boolean => {
  // if parameter are not not exist
  // it can't be old browser
  // so is not ie
  if (!_appName || !_appVersion) return false;
  const parsedVersion = _parsedAppVersion(_appVersion);

  return _isMIE(_appName) && (parsedVersion < 9);
};

/**
 * browser is ie 9
 * @param appName navigator.appName, `appName` is deprecated, only old browser have property
 * @param appVersion navigator.appVersion, `appVersion` is deprecated, only old browser have property
 * @returns boolean
 */
export const isIE9 = (_appName: string = appName, _appVersion: string = appVersion): boolean => {
  // if parameter are not not exist
  // it can't be old browser
  // so is not ie
  if (!_appName || !_appVersion) return false;
  const parsedVersion = _parsedAppVersion(_appVersion);

  return _isMIE(_appName) && (parsedVersion === 9);
};

/**
 * browser is ie 10
 * @param appName navigator.appName, `appName` is deprecated, only old browser have property
 * @param appVersion navigator.appVersion, `appVersion` is deprecated, only old browser have property
 * @returns boolean
 */
export const isIE10 = (_appName: string = appName, _appVersion: string = appVersion): boolean => {
  // if parameter are not not exist
  // it can't be old browser
  // so is not ie
  if (!_appName || !_appVersion) return false;

  const parsedVersion = _parsedAppVersion(_appVersion);

  return _isMIE(_appName) && (parsedVersion === 10);
};

/**
 * browser is ie
 * @param userAgent `navigator.userAgent` or server site navigator['user-agent]
 * @returns boolean
 */
export const isIE = (ua: string = userAgent): boolean => {
  if (!parameterChecker(ua, JSType.string)) {
    errorBuilder('isIE: ua should not be empty');
  }

  return /trident/i.test(ua);
};

export default isIE;
