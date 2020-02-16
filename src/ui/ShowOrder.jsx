import React from "react";
import constants from "./constants";

function ShowOrder({ description }) {
  return (<section>
    <section data-testid={constants.ORDER_TAKEN_ID}>
      {description}
    </section>
  </section>);
}

export default ShowOrder