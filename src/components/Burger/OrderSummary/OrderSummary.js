import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

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
      <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>SUCCESS</Button>
    </Aux>
  );
};

export default orderSummary