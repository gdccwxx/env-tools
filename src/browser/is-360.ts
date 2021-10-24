import { mimeTypes, parameterChecker, JSType, errorBuilder } from '../common/utils';

const isMimeTypesHaveValue = (_mimeTypes: MimeTypeArray, keyOpt: keyof MimeType, value: string) => {
  for (const mt in _mimeTypes) {
    if (_mimeTypes[mt][keyOpt] === value) {
      return true;
    }
  }

  return false;
};

/**
 * judge browser is 360 browser
 * because 360 browser is a special browser
 * should use `deprecated` to distinct
 * @param _mimeTypes `MimeTypeArray`, you can get by `navigator.mimeTypes`
 * @returns boolean
 */
export const is360Browser = (_mimeTypes: MimeTypeArray = mimeTypes): boolean => {
  if (!parameterChecker(_mimeTypes, JSType.object)) {
    errorBuilder('is360Browser: mimeTypes should not be empty', [JSON.stringify(_mimeTypes)]);
  }

  return isMimeTypesHaveValue(_mimeTypes, 'type', 'application/vnd.chromium.remoting-viewer');
};

export default is360Browser;
