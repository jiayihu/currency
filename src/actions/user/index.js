import * as actionTypes from '../../constants/actionTypes';

export function updateBaseValue({ baseId, newValue }) {
  return {
    payload: {
      baseId,
      newValue,
    },
    type: actionTypes.UPDATE_BASE_VALUE,
  };
}

export function deleteRate(rateId) {
  return {
    payload: { rateId },
    type: actionTypes.DELETE_RATE,
  };
}
