(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,a,t){e.exports=t(261)},125:function(e,a,t){},259:function(e,a,t){},261:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(9),s=t.n(l),o=(t(125),t(20)),c=t(21),i=t(23),m=t(22),d=t(24),u=function(e){var a=e.db,t=a.header__h1,r=a.header__h2,l=a.header__img,s=a.header__p,o=a.header__h1_2;return n.a.createElement("div",{className:"Header"},n.a.createElement("header",null,n.a.createElement("div",{className:"header__h1"},t,n.a.createElement("span",null,o)),n.a.createElement("div",{className:"header__h2"},r),n.a.createElement("div",{className:"header__img"},n.a.createElement("img",{src:l,alt:"header product"})),n.a.createElement("div",{className:"header__p"},s)))},h=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"HowItWorks__h1"},e.h1),n.a.createElement("div",{className:"HowItWorks__hr"}))},f=function(e){var a=e.db,t=a.HowItWorks__h1,r=a.HowItWorks__p,l=a.timeblocks,s=[1,2,3].map(function(e,a){return n.a.createElement("div",{className:"time-block",key:a},n.a.createElement("div",{className:"time-block__img"},n.a.createElement("img",{src:l[e].block__img,alt:"days"})),n.a.createElement("div",{className:"time-block__p yellow"},l[e].block__p))});return n.a.createElement("div",{className:"HowItWorks"},n.a.createElement("section",null,n.a.createElement(h,{h1:t}),n.a.createElement("div",{className:"HowItWorks__p"},r),n.a.createElement("div",{className:"time-blocks"},s)))},_=t(44),p=t(263),E=t(266),g=t(264),b=t(267),v=t(78),w=p.a.Item,y=E.a.Group,N=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).showModal=function(){e.setState({visible:!0})},e.handleOk=function(a){e.setState({visible:!1})},e.handleCancel=function(a){e.setState({visible:!1})},e.discountHandler=function(a){a.preventDefault();var t=new Date((new Date).getTime()+18e5),r=t.getDate(),n=3*r+(t.getMonth()+2)+"0"+(r-1)+2*r;console.log(n),e.state.discount===n?e.setState({visibleForm:"visibleForm",visibleDiscount:"hiddenForm",titleModal:"To place an order simply fill up the form"}):alert("Wrong Code")},e.onDiscountChange=function(a){e.setState({discount:a.target.value})},e.onChange=function(a){console.log("radio checked",a.target.value),e.setState({value:a.target.value})},e.handleFormLayoutChange=function(a){e.setState({formLayout:a.target.value})},e.state={formLayout:"horizontal",visible:!1,value:1,gart:0,gart1:0,gart2:0,gart3:0,gart4:0,cid:0,best:0,trafficsource:0,discount:0,visibleForm:"hiddenForm",visibleDiscount:"",titleModal:"GET DISCOUNT 20 AED + FREE DELIVERY"},e.handleSubmit=e.handleSubmit.bind(Object(_.a)(Object(_.a)(e))),e}return Object(d.a)(a,e),Object(c.a)(a,[{key:"handleSubmit",value:function(e){}},{key:"componentDidMount",value:function(){function e(e){return decodeURI((RegExp(e+"=(.+?)(&|$)").exec(document.location.search)||[,null])[1]||"")}var a=e("adid"),t=e("adsetname"),r=e("age"),n=e("gender"),l=e("placement"),s=e("clickid"),o=e("best"),c=e("trafficsource");this.setState({gart:a,gart1:t,gart2:r,gart3:n,gart4:l,cid:s,trafficsource:c,best:o})}},{key:"render",value:function(){var e={display:"block",height:"30px",lineHeight:"30px"},a=this.state.formLayout,t="horizontal"===a?{labelCol:{span:4},wrapperCol:{span:14}}:null,r="horizontal"===a?{wrapperCol:{span:14,offset:4}}:null,l=this.props,s=l.classNames,o=l.btntext;return n.a.createElement("div",null,n.a.createElement("div",{className:s,onClick:this.showModal},o),n.a.createElement(g.a,{title:this.state.titleModal,visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel,footer:null},n.a.createElement("form",{className:this.state.visibleDiscount},n.a.createElement("label",{style:{color:"#fff"}},"Enter Promo Code:",n.a.createElement("input",{type:"text",name:"discount",style:{width:"100%"},onChange:this.onDiscountChange})),n.a.createElement("button",{onClick:this.discountHandler,className:"price-block__button",style:{margin:"20px auto",display:"block"}}," Get Discount")),n.a.createElement(p.a,{layout:a,className:this.state.visibleForm,action:"https://hairflame.shop/thanks-hairflame/",method:"GET",onSubmit:this.handleSubmit},n.a.createElement(w,Object.assign({label:"Name"},t),n.a.createElement(b.a,{name:"name",required:"required"})),n.a.createElement(w,Object.assign({label:"Phone"},t),n.a.createElement(b.a,{type:"number",name:"phone",required:"required"})),n.a.createElement(w,Object.assign({label:"City"},t),n.a.createElement(b.a,{name:"city",required:"required"})),n.a.createElement(w,Object.assign({label:"Street"},t),n.a.createElement(b.a,{name:"adress1",required:"required"})),n.a.createElement(w,Object.assign({label:"Building number"},t),n.a.createElement(b.a,{name:"building1",required:"required"})),n.a.createElement(w,Object.assign({label:"Apartment number"},t),n.a.createElement(b.a,{name:"adress2",required:"required"})),n.a.createElement(w,Object.assign({label:"Quantity"},t),n.a.createElement(y,{onChange:this.onChange,value:this.state.value},n.a.createElement("div",{className:"offer-products"},n.a.createElement("div",{className:"offer-product"},n.a.createElement("div",{className:"offer__checkbox"},n.a.createElement(E.a,{style:e,value:1})),n.a.createElement("div",{className:"offer__img"},n.a.createElement("img",{src:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/product_smal.png",alt:""})),n.a.createElement("div",{className:"offer-description"},n.a.createElement("div",{className:"offer-title"},"1 Hair Flame"),n.a.createElement("div",{className:"offer-curr-price"},"AED 147"),n.a.createElement("div",{className:"offer-prev-price"},n.a.createElement("span",null,"was AED 207")," (Save AED 60)"))),n.a.createElement("div",{className:"offer-product offerproductlabel"},n.a.createElement("div",{className:"offer__checkbox"},n.a.createElement(E.a,{style:e,value:2})),n.a.createElement("div",{className:"offer__img"},n.a.createElement("img",{src:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/product_smal.png",alt:""})),n.a.createElement("div",{className:"offer-description"},n.a.createElement("div",{className:"offer-title"},"2 Hair Flame"),n.a.createElement("div",{className:"offer-curr-price"},"AED 222"),n.a.createElement("div",{className:"offer-special"},"AED 111/each   "),n.a.createElement("div",{className:"offer-prev-price"},n.a.createElement("span",null,"was AED 414")," (Save AED 192)"))),n.a.createElement("div",{className:"offer-product"},n.a.createElement("div",{className:"offer__checkbox"},n.a.createElement(E.a,{style:e,value:3})),n.a.createElement("div",{className:"offer__img"},n.a.createElement("img",{src:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/product_smal.png",alt:""})),n.a.createElement("div",{className:"offer-description"},n.a.createElement("div",{className:"offer-title"},"3 Hair Flame"),n.a.createElement("div",{className:"offer-curr-price"},"AED 297"),n.a.createElement("div",{className:"offer-special"},"AED 99/each "),n.a.createElement("div",{className:"offer-prev-price"},n.a.createElement("span",null,"was AED 621")," (Save AED 324)"))),n.a.createElement("div",{className:"offer-product offerproductlabel2"},n.a.createElement("div",{className:"offer__checkbox"},n.a.createElement(E.a,{style:e,value:4})),n.a.createElement("div",{className:"offer__img"},n.a.createElement("img",{src:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/product_smal.png",alt:""})),n.a.createElement("div",{className:"offer-description"},n.a.createElement("div",{className:"offer-title"},"4 Hair Flame"),n.a.createElement("div",{className:"offer-curr-price"},"AED 372"),n.a.createElement("div",{className:"offer-special"},"AED 93/each "),n.a.createElement("div",{className:"offer-prev-price"},n.a.createElement("span",null,"was AED 828")," (Save AED 456)")))))),n.a.createElement(w,null,n.a.createElement(b.a,{type:"hidden",value:this.state.value,name:"quantity"})),n.a.createElement(b.a,{type:"hidden",id:"aff_sub1",className:"aff_sub1",name:"affsub1",value:this.state.gart}),n.a.createElement(b.a,{type:"hidden",id:"aff_sub2",className:"aff_sub2",name:"affsub2",value:this.state.gart1}),n.a.createElement(b.a,{type:"hidden",id:"aff_sub3",className:"aff_sub3",name:"affsub3",value:this.state.gart2}),n.a.createElement(b.a,{type:"hidden",id:"aff_sub4",className:"aff_sub4",name:"affsub4",value:this.state.gart3}),n.a.createElement(b.a,{type:"hidden",id:"aff_sub5",className:"aff_sub5",name:"affsub5",value:this.state.gart4}),n.a.createElement(b.a,{type:"hidden",id:"cid",className:"cid",name:"cid",value:this.state.cid}),n.a.createElement(b.a,{type:"hidden",id:"best",className:"best",name:"best",value:this.state.best}),n.a.createElement(b.a,{type:"hidden",id:"version",className:"version",name:"version",value:"version-hairflame2-discount"}),n.a.createElement(b.a,{type:"hidden",id:"trafficsource",className:"trafficsource",name:"trafficsource",value:this.state.trafficsource}),n.a.createElement(w,Object.assign({},r,{style:{marginTop:"-20"}}),n.a.createElement(v.a,{className:"price-block__button lastbtn",type:"primary",htmlType:"submit"},"Order Now")))))}}]),a}(r.Component),k=function(e){var a=e.db,t=a.CtaButton__h1,r=a.CtaButton__button;return n.a.createElement("div",{className:"CtaButton"},n.a.createElement("div",{className:"CtaButton__h1"},t),n.a.createElement(N,{classNames:"CtaButton__button",btntext:r}))},H=function(e){var a=e.db,t=a.HairGrowRate_h1,r=a.HairGrowRate_p,l=a.HairGrowRate_p2,s=a.HairGrowRate_img;return n.a.createElement("div",{className:"HairGrowRate"},n.a.createElement("section",null,n.a.createElement(h,{h1:t}),n.a.createElement("div",{className:"HairGrowRate__img"},n.a.createElement("img",{src:s,alt:"Does your hair grow"})),n.a.createElement("div",{className:"HowItWorks__p"},r),n.a.createElement("div",{className:"HowItWorks__p yellow"},l)))},I=function(e){var a=e.db,t=a.HairGrowRate_h1,r=a.HairGrowRate_p,l=a.HairGrowRate_p2,s=a.HairGrowRate_img;return n.a.createElement("div",{className:"HairGrowRate"},n.a.createElement("section",null,n.a.createElement(h,{h1:t}),n.a.createElement("div",{className:"HairGrowRate__img"},n.a.createElement("img",{src:s,alt:"Does your hair grow"}),n.a.createElement("img",{src:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/c1.jpg",alt:"Does your hair grow"}),n.a.createElement("img",{src:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/c2_1.jpg",alt:"Does your hair grow"}),n.a.createElement("img",{src:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/c3.jpg",alt:"Does your hair grow"})),n.a.createElement("div",{className:"HowItWorks__p"},r),n.a.createElement("div",{className:"HowItWorks__p yellow"},l)))},C=function(e){var a=e.db,t=a.HowItWorks__h1,r=a.advs,l=[1,2,3,4,5,6].map(function(e,a){return n.a.createElement("div",{className:"Advantage-block",key:a},n.a.createElement("div",{className:"Advantages__img"},n.a.createElement("img",{src:r[e].img,alt:"Advantage"})),n.a.createElement("div",{className:"Advantages__p"},r[e].text))});return n.a.createElement("div",{className:"Advantages"},n.a.createElement("section",null,n.a.createElement(h,{h1:t}),n.a.createElement("div",{className:"Advantage"},l)))},A=function(e){var a=e.db,t=a.Effects__h1,r=a.Effects__img_1,l=a.Effects__h1_2,s=a.Effects__h2_1,o=a.Effects__p1_1,c=a.Effects__p2_1,i=a.Effects__p3_1,m=a.Effects__img_2,d=a.Effects__h2_2,u=a.Effects__p1_2,f=a.Effects__p2_2;return n.a.createElement("div",{className:"Effects"},n.a.createElement("section",null,n.a.createElement(h,{h1:t}),n.a.createElement("div",{className:"Effects__img"},n.a.createElement("img",{src:r,alt:"effects"})),n.a.createElement("div",{className:"HowItWorks__h2"},s),n.a.createElement("div",{className:"HowItWorks__p"},o),n.a.createElement("div",{className:"HowItWorks__p"},c),n.a.createElement("div",{className:"HowItWorks__p yellow"},i),n.a.createElement(h,{h1:l}),n.a.createElement("div",{className:"Effects__img"},n.a.createElement("img",{src:m,alt:"effects"})),n.a.createElement("div",{className:"HowItWorks__h2"},d),n.a.createElement("div",{className:"HowItWorks__p"},u),n.a.createElement("div",{className:"HowItWorks__p yellow"},f)))},O=function(e){var a=e.db,t=a.block__p,r=a.block__p2,l=a.block__button,s=a.block__p2_span,o=a.block__p_span;return n.a.createElement("div",{className:"PriceButton"},n.a.createElement("section",null,n.a.createElement("div",{className:"price-block__p"},n.a.createElement("span",{className:"price-block__p_line"},t)," ",n.a.createElement("span",null,o)),n.a.createElement("div",{className:"price-block__p"},n.a.createElement("span",null,s)," ",r),n.a.createElement(N,{classNames:"price-block__button",btntext:l})))},j=function(e){var a=e.db,t=a.footer__h1,r=a.footer__p1,l=a.footer__p2,s=a.footer__h1_span;return n.a.createElement("div",{className:"Footer"},n.a.createElement("footer",null,n.a.createElement("div",{className:"footer__h1"},t,n.a.createElement("span",null,s)),n.a.createElement("div",{className:"footer__p"},r),n.a.createElement("div",{className:"footer__p"},l)))},D=t(265),W=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.db,a=e.Faq_h1,t=e.Question,r=e.Answers,l=e.quest1,s=e.quest2,o=e.quest3,c=e.answer1,i=e.answer2,m=e.answer3,d=D.a.Panel,u=n.a.createElement("span",null,n.a.createElement("b",null,t)," ",l),f=n.a.createElement("span",null,n.a.createElement("b",null,t)," ",s),_=n.a.createElement("span",null,n.a.createElement("b",null,t)," ",o),p=n.a.createElement("span",null,n.a.createElement("b",null,r)," ",c),E=n.a.createElement("span",null,n.a.createElement("b",null,r)," ",i),g=n.a.createElement("span",null,n.a.createElement("b",null,r)," ",m);return n.a.createElement("div",{className:"Faq"},n.a.createElement("section",null,n.a.createElement(h,{h1:a}),n.a.createElement(D.a,{defaultActiveKey:["1"]},n.a.createElement(d,{header:u,key:"1"},n.a.createElement("p",null,p)),n.a.createElement(d,{header:f,key:"2"},n.a.createElement("p",null,E)),n.a.createElement(d,{header:_,key:"3"},n.a.createElement("p",null,g)))))}}]),a}(r.Component),G=t(262),R=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.db,a=e.Testemonials_h1,t=e.comment4_img,r=e.comment4_p1,l=e.comment4_p2,s=e.comment4_name,o=e.comment3_img,c=e.comment3_p1,i=e.comment3_p2,m=e.comment3_name,d=e.comment2_img,u=e.comment2_p1,f=e.comment2_p2,_=e.comment2_name,p=e.comment1_p1,E=e.comment1_p2,g=e.comment1_p3,b=e.comment1_img,v=e.comment1_name;return n.a.createElement("div",{className:"Testemonials"},n.a.createElement("section",null,n.a.createElement(h,{h1:a}),n.a.createElement(G.a,{autoplay:!0},n.a.createElement("div",null,n.a.createElement("img",{src:o,alt:"Comment 1"}),n.a.createElement("p",null,c),n.a.createElement("p",{style:{fontWeight:"Bold"}},i),n.a.createElement("p",{className:"CommentName"},m)),n.a.createElement("div",null,n.a.createElement("img",{src:b,alt:"Comment 1"}),n.a.createElement("p",null,p),n.a.createElement("p",null,E),n.a.createElement("p",{style:{fontWeight:"Bold"}},g),n.a.createElement("p",{className:"CommentName"},v)),n.a.createElement("div",null,n.a.createElement("img",{src:d,alt:"Comment 1"}),n.a.createElement("p",null,u),n.a.createElement("p",{style:{fontWeight:"Bold"}},f),n.a.createElement("p",{className:"CommentName"},_)),n.a.createElement("div",null,n.a.createElement("img",{src:o,alt:"Comment 1"}),n.a.createElement("p",null,c),n.a.createElement("p",{style:{fontWeight:"Bold"}},i),n.a.createElement("p",{className:"CommentName"},m)),n.a.createElement("div",null,n.a.createElement("img",{src:t,alt:"Comment 1"}),n.a.createElement("p",null,r),n.a.createElement("p",{style:{fontWeight:"Bold"}},l),n.a.createElement("p",{className:"CommentName"},s)))))}}]),a}(r.Component),S=(t(259),[{Header:{header__h1:"HAIR",header__h1_2:"FLAME",header__h2:"Hair Growth Serum",header__img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/product.png",header__p:"Boost the growth of your hair with our powerful and healthy natural hair growth serum  "},PriceButton:{block__p:"AED 207",block__p_span:"AED 167 SALE",block__p2:" in 1-2 days",block__p2_span:"FREE DELIVERY",block__button:"GET DISCOUNT"},HowItWorks:{HowItWorks__h1:"How it works",HowItWorks__p:"The Organic Hair Growth Serum penetrates the scalp and protects and revitalises the hair follicles. ",HowItWorks__p2:"Over period of 40 days, you will experience a both fuller and thicker hair growth. ",timeblocks:{1:{block__img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/day1.png",block__p:"DAY 1"},2:{block__img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/day2.png",block__p:"3-4 WEEKS "},3:{block__img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/day3.png",block__p:"6-8 WEEKS"}}},CtaButton:{CtaButton__h1:"Boost Your Hair Growth",CtaButton__button:"GET DISCOUNT"},HairGrowRate:{HairGrowRate_h1:"Does your hair grow at a ridiculously slow rate?",HairGrowRate_p:"Are you noticing some loss in its natural elasticity and luster? Or perhaps your hair is easily broken and is too much of a mess most of the time? It's no problem at all! ",HairGrowRate_p2:"Our potent hair growth booster it just what you need to help you regain its vigor, strength and all round health!",HairGrowRate_img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/2.jpg"},Advantages:{HowItWorks__h1:"Advantages",advs:{1:{img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/leaf.svg",text:"100% Safe and Natural"},2:{img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/dermathology.svg",text:"Hair Growth Boost"},3:{img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/blood.svg",text:"Easy to use"},4:{img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/growth_1.svg",text:"Reactivate Hair Follicles"},5:{img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/man.svg",text:"Great for beard"},6:{img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/users.svg",text:"For both men and women"}}},Effects:{Effects__h1:"100% Natural",Effects__h1_2:"Easy to use",Effects__img_1:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/4.png",Effects__h2_1:"100% Natural and safe ",Effects__p1_1:"Hair flame is right for just about anyone looking to find a good natural remedy to slow hair growth. ",Effects__p2_1:"It is made up entirely of natural and holistic products which eliminates the need for harmful chemicals. ",Effects__p3_1:"As a result of it natural components, you can be rest assured that there are no adverse effects to come from using it.",Effects__img_2:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/5.jpg",Effects__h2_2:"Fill out thinning spots ",Effects__p1_2:"With hair flame, you can be guaranteed that your thinning hair follicles will receive the nutrients they need to regrow. ",Effects__p2_2:"In fact, as long as the hair follicles on your head are not dead, then hair flame will slowly work its way in to boost growth."},OurSecret:{HairGrowRate_h1:"Our secret",HairGrowRate_p:"Hair flame was carefully created from natural oils, herb extracts and potent plant combinations. Our process involved lots of testing to ensure that it was both safe and 100% effective. We understand that loss of hair is a real problem and our formula offers you a long term solution. ",HairGrowRate_p2:"Hair flame tackles a long list of problem including lack of proper growth, poor elasticity and easily broken strands. With our new and all natural Hair flame, you can get that lush beautiful hair you have always wanted.",HairGrowRate_img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/woomen1.png"},MoneyBack:{HairGrowRate_h1:"Money back guarantee",HairGrowRate_p:"We are highly confident in the potency of our product as we have had countless customers report back with the good news.  ",HairGrowRate_p2:"If in doubt, go ahead and purchase a vial and we will give you a 60-day money back guarantee with a full refund it there are absolutely no results.",HairGrowRate_img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/money.png"},Footer:{footer__h1:"HAIR",footer__h1_span:"FLAME",footer__p1:"Boost the growth of your hair with our powerful and healthy natural hair growth serum",footer__p2:"\xa92018 Hairflame. All Rights Reserved."},Faq:{Faq_h1:"Question/answers",Question:"Question:",Answers:"Answer:",quest1:"How long does it take for it to work?",answer1:" Hair flame acts by stimulating your hair follicles. This fast acting effect begins to become noticeable in just 2-3 weeks. However, you should endeavor to run the full course and apply for 4 months for full result. Note that the growth serum is only effective when there are healthy hair follicles as it cannot revive dead hair follicles.",quest2:"How do I apply it?",answer2:" There are two ways to apply hair flame as indicated on its package. Simply mix in 100ml shampoo and wash as you normally would. ",answer2_2:"You could also apply it by, directly applying a few drops to the affected area. Massage the drops into your hair for 5-10 minutes and then place a hot towel over your head to let it sit in for 30 minutes, when the time runs out, proceed to wash your hair and carry on with your daily activities.",quest3:" Does it work for thinning hair?",answer3:" As long as your hair follicles are healthy, hair flame will stimulate the area to boost hair growth. It works for thinning hair and will help even our areas that may not be growing out fully."},Testemonials:{Testemonials_h1:"Customer reviews",comment1_p1:"Absolutely wonderful! I've always had a hard time getting my hair to grow out as it never seems to get as long. ",comment1_p2:"This was probably because it grows out really thin and ends up breaking when I try to comb or straighten. I pretty much gave up and ignored all hopes of having a full and lush head of hair. ",comment1_p3:"After trying our Hair flame, it has all changed. My hair is growing out longer, thicker and I particularly liked the fact that it doesn't break and isn't quite as brittle anymore. I would definitely recommend.",comment1_name:"Sarah Lewin",comment1_img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/comment1.jpg",comment2_p1:"Loved it! I've been noticing certain areas on my hair becoming patchy but after trying out hair flame.  ",comment2_p2:"I can only say good things about it! It really works and my thinning area is beginning to catch up.",comment2_name:"Samuel Willson",comment2_img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/comment2.jpg",comment3_p1:"I was a bit skeptical about this at first but I can see that it really works.   ",comment3_p2:"I'm noticing a lot more elasticity and bounciness around my hair and I'm really amazed at how fast this works. ",comment3_name:"Alex Larkins",comment3_img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/comment3.jpg",comment4_p1:"Hair flame has been a real life saver over the past few months. I always thought that once your hair started thinning out, there really was no way to regain the growth.  ",comment4_p2:"Thankfully, I was wrong as I would figure out after using this product. It has been just 3 weeks since I started using it and I have noticed considerable increase in length. My hair has also become a lot smoother and has a certain luster to it. It truly works! ",comment4_name:"Amanda Plummer",comment4_img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/comment4.jpg"}}]),B=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=S[0];return n.a.createElement("div",null,n.a.createElement(u,{db:e.Header}),n.a.createElement(O,{db:e.PriceButton}),n.a.createElement(I,{db:e.HairGrowRate}),n.a.createElement(C,{db:e.Advantages}),n.a.createElement(f,{db:e.HowItWorks}),n.a.createElement(k,{db:e.CtaButton}),n.a.createElement(A,{db:e.Effects}),n.a.createElement(k,{db:e.CtaButton}),n.a.createElement(H,{db:e.OurSecret}),n.a.createElement(O,{db:e.PriceButton}),n.a.createElement(W,{db:e.Faq}),n.a.createElement(R,{db:e.Testemonials}),n.a.createElement(H,{db:e.MoneyBack}),n.a.createElement(k,{db:e.CtaButton}),n.a.createElement(j,{db:e.Footer}))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[120,2,1]]]);
//# sourceMappingURL=main.1ac78fdf.chunk.js.map