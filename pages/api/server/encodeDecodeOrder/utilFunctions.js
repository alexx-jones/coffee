export function returnIndexOfValue(value, object) {
    return Object.values(object).indexOf(value);
}
  
export function returnIndexOfKey(key, object) {
    return Object.keys(object).indexOf(key);
}
  
export function returnValueFromKey(key, object) {
    return Object.values(object)[returnIndexOfKey(key, object)];
}
  
export function returnKeyFromValue(key, object) {
    return Object.keys(object)[returnIndexOfValue(key, object)];
}