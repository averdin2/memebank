import { VALIDATE_ADD_CARD } from './actionTypes.js';

/* Actions */

export const validateAddCard = src => {
  return {
    type: VALIDATE_ADD_CARD,
    src: src,
  };
};
