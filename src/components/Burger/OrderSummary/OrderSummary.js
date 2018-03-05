import React from 'react'

import Aux from '../../../hoc/Auxiliary'

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map( ingredientKey => {
      return <li key={ingredientKey}>
        <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
      </li>
    });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>Continue to checkout?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Aux>
  )
};

export default orderSummary