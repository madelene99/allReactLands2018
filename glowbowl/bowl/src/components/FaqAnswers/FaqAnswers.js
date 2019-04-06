import React from 'react'
import { Collapse } from 'antd';



const Panel = Collapse.Panel;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const FaqAnswers = () => {

return (
  <div className="FaqAnswers">
  <Collapse accordion>
<Panel header="This is panel header 1" key="1">
  <p>{text}</p>
</Panel>
<Panel header="This is panel header 2" key="2">
  <p>{text}</p>
</Panel>
<Panel header="This is panel header 3" key="3">
  <p>{text}</p>
</Panel>
</Collapse>
  </div>
)

}

export default FaqAnswers
