/* Action Types */
export const ActionTypes = {
  ADD_CARD: 'ADD_CARD',
  GET_CARD_DATA_RECIEVED: 'GET_CARD_DATA_RECIEVED',
};

/* Actions */

// Add a card to the bank
export const addCard = src => {
  return {
    type: ActionTypes.ADD_CARD,
    src: src
  };
};
