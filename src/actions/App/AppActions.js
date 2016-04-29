export const SET_DATA = 'SET_DATA';

export function setDATA(data){
  return {
    type: SET_DATA,
    value: data
  };
}