import React, { Component } from 'react'
import { Modal, Radio, Form, Input, Button } from 'antd';
import { white } from 'ansi-colors';


const FormItem = Form.Item;
const RadioGroup = Radio.Group;


export default class ModalButton extends Component {
  constructor(props) {
     super();
     this.state = {
       formLayout: 'horizontal',
       visible: false,
       value: props.quantity,
       gart:0,
       gart1:0,
       gart2:0,
       gart3:0,
       gart4:0,
       cid:0,
       best:0,
       trafficsource:0,
       discount:0
     };
      this.handleSubmit = this.handleSubmit.bind(this);
   }



 showModal = () => {
   this.setState({
     visible: true,
   });
 }

 handleOk = (e) => {

   this.setState({
     visible: false,
   });
 }

 handleCancel = (e) => {

   this.setState({
     visible: false,
   });
 }

 handleSubmit(event) {
  //alert('A name was submitted: ' + this.state.value);

}

 


 onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }


  handleFormLayoutChange = (e) => {
    this.setState({ formLayout: e.target.value });
  }

  componentDidMount() {
    function getURLParameter(name) {
                return decodeURI(
                    (RegExp(name + '=' + '(.+?)(&|$)').exec(document.location.search) || [, null])[1] || ''
                );
            }
         let gart = getURLParameter('adid')
         let gart1 = getURLParameter('adsetname')
         let gart2 = getURLParameter('age')
         let gart3 = getURLParameter('gender')
         let gart4 = getURLParameter('placement')
         let cid = getURLParameter('clickid')
         let best = getURLParameter('best')
         let trafficsource = getURLParameter('trafficsource')
  this.setState({"gart":gart, "gart1":gart1, "gart2":gart2, "gart3":gart3, "gart4":gart4,  "cid":cid, "trafficsource":trafficsource,  "best":best  })

  }

  render(){
    const radioStyle = {
         display: 'block',
         height: '30px',
         lineHeight: '30px',
       };

    const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
          wrapperCol: { span: 14, offset: 4 },
        } : null;


    const { classNames, btntext } = this.props

      return (
        <div >

            <div className={classNames} onClick={this.showModal}>{btntext}</div>

              <Modal
         title="To place an order simply fill up the form"
         visible={this.state.visible}
         onOk={this.handleOk}
         onCancel={this.handleCancel}
         footer={null}
       >



       <Form layout={formLayout} action="https://flameserum.club/thanks-hairflame/" method="GET" onSubmit={this.handleSubmit}>




      <FormItem
        label="Name"
        {...formItemLayout}
      >
        <Input  name="name" required="required"  />
      </FormItem>

      <FormItem
        label="Phone"
        {...formItemLayout}
      >
        <Input type="number"  name="phone" required="required"  />
      </FormItem>

            <FormItem
              label="City"
              {...formItemLayout}
            >
              <Input  name="city" required="required"  />
            </FormItem>

            <FormItem
              label="Street"
              {...formItemLayout}
            >
              <Input  name="adress1" required="required" />
            </FormItem>

            <FormItem
              label="Building number"
              {...formItemLayout}
            >
              <Input  name="building1" required="required"  />
            </FormItem>

            <FormItem
              label="Apartment number"
              {...formItemLayout}
            >
              <Input  name="adress2"  required="required" />
            </FormItem>


      <FormItem
        label="Quantity"
        {...formItemLayout}
      >


    <div style={{color:"white",fontSize:16}}>{this.props.id}</div>




      </FormItem>
      <FormItem


      >
        <Input type="hidden" value={this.state.value}  name="quantity" />
      </FormItem>

      <Input type="hidden" id="aff_sub1" className="aff_sub1" name="affsub1" value={this.state.gart} />
       <Input type="hidden" id="aff_sub2" className="aff_sub2" name="affsub2" value={this.state.gart1} />
       <Input type="hidden" id="aff_sub3" className="aff_sub3" name="affsub3" value={this.state.gart2} />
       <Input type="hidden" id="aff_sub4" className="aff_sub4" name="affsub4" value={this.state.gart3} />
       <Input type="hidden" id="aff_sub5" className="aff_sub5" name="affsub5" value={this.state.gart4} />
         <Input type="hidden" id="cid" className="cid" name="cid" value={this.state.cid} />
       <Input type="hidden" id="best" className="best" name="best" value={this.state.best} />
       <Input type="hidden" id="version" className="version" name="version" value="version-hairflame5" />
       <Input type="hidden" id="trafficsource" className="trafficsource" name="trafficsource" value={this.state.trafficsource} />

      <FormItem {...buttonItemLayout}>
          <Button className="price-block__button lastbtn" type="primary" htmlType="submit">Order Now</Button>
      </FormItem>
    </Form>



       </Modal>

        </div>
      )
    }
  }
