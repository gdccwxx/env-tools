export const userAgent = navigator?.userAgent;

export const mimeTypes = navigator?.mimeTypes;

export const appName = navigator?.appName;

export const appVersion = navigator?.appVersion;

export enum JSType {
  boolean = 'boolean',
  null = 'null',
  undefined = 'undefined',
  number = 'number',
  string = 'string',
  bigInt = 'bigint',
  symbol  = 'symbol',
  object = 'object',
  array = 'array',
}

/**
 * parameter checker, check parameter type and value
 * @param value need check value
 * @param type expect value type
 * @param couldBeEmpty value could be empty, default not empty
 * @returns boolean, is pass the checker
 */
export const parameterChecker = (
  value: unknown,
  type: JSType,
  couldBeEmpty: boolean = false,
): boolean => {
  // check null
  if (type === JSType.null) {
    return value === null;
  }

  // check array
  // if value not an array, then return false
  // else if value could be empty, then return true
  // else return value.length === 0
  if (type === JSType.array) {
    return Array.isArray(value) && (couldBeEmpty ? true : value.length !== 0);
  }

  // check undefined
  if (type === JSType.undefined) {
    return value === undefined;
  }

  // check string
  if (type === JSType.string) {
    return typeof value === 'string' && (couldBeEmpty ? true : value.length !== 0);
  }

  // check number | bigInt
  if (type === JSType.number || type === JSType.bigInt) {
    return typeof value === type && (couldBeEmpty ? true : value === 0);
  }

  // check object
  if (type === JSType.object) {
    const isObject = typeof value === 'object'
      && value !== null
      && value.toString() === '[object Object]';

    return isObject && (couldBeEmpty ? true : Object.values(value).length !== 0)
  }

  // normal check by typeof object & symbol
  return typeof value === type;
};

/**
 * build a standard error
 * @param message error msg
 * @param parameters parameters
 */
export const errorBuilder = (message: string, parameters?: any[]) => {
  let errMsg = `message: ${message}`;

  if (parameters && parameters.length > 0) {
    errMsg += `, parameters: ${parameters.join(', ')}`;
  }

  throw new Error(errMsg);
};
