export const SET_ADDRESS = 'SET_ADDRESS';

export const setAddress = (address: string) => ({
  type: SET_ADDRESS,
  payload: address,
});
