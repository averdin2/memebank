/* Action Types */
export const ActionTypes = {
  ADD_CARD: 'ADD_CARD'
};

/* Actions */

// Add a card to the bank
export const addCard = src => {
  return {
    type: ActionTypes.ADD_CARD,
    src: src
  };
};
