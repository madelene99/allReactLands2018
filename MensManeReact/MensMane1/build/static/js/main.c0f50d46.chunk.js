(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){e.exports=a(261)},125:function(e,t,a){},259:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),o=a.n(s),l=(a(125),a(20)),c=a(21),i=a(23),m=a(22),d=a(24),u=function(e){var t=e.db,a=t.header__h1,n=t.header__h2,s=t.header__img,o=t.header__p;return r.a.createElement("div",{className:"Header"},r.a.createElement("header",null,r.a.createElement("div",{className:"header__h2"},n),r.a.createElement("div",{className:"header__h1"},a),r.a.createElement("div",{className:"header__p"},o),r.a.createElement("div",{class:"HowItWorks__hr"}),r.a.createElement("div",{className:"header__img"},r.a.createElement("img",{src:s,alt:"header product"}))))},h=a(44),p=a(263),f=a(266),_=a(264),g=a(267),E=a(78),b=p.a.Item,w=f.a.Group,v=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).showModal=function(){e.setState({visible:!0})},e.handleOk=function(t){e.setState({visible:!1})},e.handleCancel=function(t){e.setState({visible:!1})},e.onChange=function(t){console.log("radio checked",t.target.value),e.setState({value:t.target.value})},e.handleFormLayoutChange=function(t){e.setState({formLayout:t.target.value})},e.state={formLayout:"horizontal",visible:!1,value:1,gart:0,gart1:0,gart2:0,gart3:0,gart4:0,cid:0,best:0,trafficsource:0,discount:0},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){}},{key:"componentDidMount",value:function(){function e(e){return decodeURI((RegExp(e+"=(.+?)(&|$)").exec(document.location.search)||[,null])[1]||"")}var t=e("adid"),a=e("adsetname"),n=e("age"),r=e("gender"),s=e("placement"),o=e("clickid"),l=e("best"),c=e("trafficsource");this.setState({gart:t,gart1:a,gart2:n,gart3:r,gart4:s,cid:o,trafficsource:c,best:l})}},{key:"render",value:function(){var e={display:"block",height:"30px",lineHeight:"30px"},t=this.state.formLayout,a="horizontal"===t?{labelCol:{span:4},wrapperCol:{span:14}}:null,n="horizontal"===t?{wrapperCol:{span:14,offset:4}}:null,s=this.props,o=s.classNames,l=s.btntext;return r.a.createElement("div",null,r.a.createElement("div",{className:o,onClick:this.showModal},l),r.a.createElement(_.a,{title:"To place an order simply fill up the form",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel,footer:null},r.a.createElement(p.a,{layout:t,action:"https://mens-mane.com/thanks/",method:"GET",onSubmit:this.handleSubmit},r.a.createElement(b,Object.assign({label:"Name"},a),r.a.createElement(g.a,{name:"name",required:"required"})),r.a.createElement(b,Object.assign({label:"Phone"},a),r.a.createElement(g.a,{type:"number",name:"phone",required:"required"})),r.a.createElement(b,Object.assign({label:"City"},a),r.a.createElement(g.a,{name:"city",required:"required"})),r.a.createElement(b,Object.assign({label:"Street"},a),r.a.createElement(g.a,{name:"adress1",required:"required"})),r.a.createElement(b,Object.assign({label:"Building number"},a),r.a.createElement(g.a,{name:"building1",required:"required"})),r.a.createElement(b,Object.assign({label:"Apartment number"},a),r.a.createElement(g.a,{name:"adress2",required:"required"})),r.a.createElement(b,Object.assign({label:"Quantity"},a),r.a.createElement(w,{onChange:this.onChange,value:this.state.value},r.a.createElement(f.a,{style:e,value:1},"1 for AED 167   ",r.a.createElement("div",{className:"showtext"},"Save 40 AED")),r.a.createElement(f.a,{style:e,value:2},"2 for AED 242   ",r.a.createElement("div",{className:"showtext"},"Save 172 AED")),r.a.createElement(f.a,{style:e,value:3},"3 for AED 317 ",r.a.createElement("div",{className:"showtext"},"Save 304 AED")),r.a.createElement(f.a,{style:e,value:4},"4 for AED 392 ",r.a.createElement("div",{className:"showtext"},"Save 436 AED")))),r.a.createElement(b,null,r.a.createElement(g.a,{type:"hidden",value:this.state.value,name:"quantity"})),r.a.createElement(g.a,{type:"hidden",id:"aff_sub1",className:"aff_sub1",name:"affsub1",value:this.state.gart}),r.a.createElement(g.a,{type:"hidden",id:"aff_sub2",className:"aff_sub2",name:"affsub2",value:this.state.gart1}),r.a.createElement(g.a,{type:"hidden",id:"aff_sub3",className:"aff_sub3",name:"affsub3",value:this.state.gart2}),r.a.createElement(g.a,{type:"hidden",id:"aff_sub4",className:"aff_sub4",name:"affsub4",value:this.state.gart3}),r.a.createElement(g.a,{type:"hidden",id:"aff_sub5",className:"aff_sub5",name:"affsub5",value:this.state.gart4}),r.a.createElement(g.a,{type:"hidden",id:"cid",className:"cid",name:"cid",value:this.state.cid}),r.a.createElement(g.a,{type:"hidden",id:"best",className:"best",name:"best",value:this.state.best}),r.a.createElement(g.a,{type:"hidden",id:"version",className:"version",name:"version",value:"version-mensMane1"}),r.a.createElement(g.a,{type:"hidden",id:"trafficsource",className:"trafficsource",name:"trafficsource",value:this.state.trafficsource}),r.a.createElement(b,n,r.a.createElement(E.a,{className:"price-block__button lastbtn",type:"primary",htmlType:"submit"},"Order Now")))))}}]),t}(n.Component),y=function(e){var t=e.db,a=t.CtaButton__h1,n=t.CtaButton__button;return r.a.createElement("div",{className:"CtaButton"},r.a.createElement("div",{className:"CtaButton__h1"},a),r.a.createElement(v,{classNames:"CtaButton__button",btntext:n}))},k=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"HowItWorks__h1"},e.h1),r.a.createElement("div",{className:"HowItWorks__hr"}))},N=function(e){var t=e.db,a=t.HairGrowRate_h1,n=t.HairGrowRate_p,s=t.HairGrowRate_p2,o=t.HairGrowRate_img;return r.a.createElement("div",{className:"HairGrowRate"},r.a.createElement("section",null,r.a.createElement(k,{h1:a}),r.a.createElement("div",{className:"HairGrowRate__img"},r.a.createElement("img",{src:o,alt:"Does your hair grow"})),r.a.createElement("div",{className:"HowItWorks__p"},n),r.a.createElement("div",{className:"HowItWorks__p yellow"},s)))},I=function(e){var t=e.db,a=t.HairGrowRate_h1;t.HairGrowRate_p,t.HairGrowRate_p2;return r.a.createElement("div",{className:"HairGrowRate"},r.a.createElement("section",null,r.a.createElement(k,{h1:a}),r.a.createElement("div",{className:"HairGrowRate__img"},r.a.createElement("img",{src:"https://1693021541.rsc.cdn77.org/lands/mens/h/1.jpg",alt:"Does your hair grow"}),r.a.createElement("img",{src:"https://1693021541.rsc.cdn77.org/lands/mens/h/2.jpg",alt:"Does your hair grow"}),r.a.createElement("img",{src:"https://1693021541.rsc.cdn77.org/lands/mens/h/3.jpg",alt:"Does your hair grow"}),r.a.createElement("img",{src:"https://1693021541.rsc.cdn77.org/lands/mens/h/4.jpg",alt:"Does your hair grow"}))))},H=function(e){var t=e.db,a=t.HowItWorks__h1,n=t.advs,s=[1,2,3].map(function(e,t){return r.a.createElement("div",{className:"Advantage-block",key:t},r.a.createElement("div",{className:"Advantages__img"},r.a.createElement("img",{src:n[e].img,alt:"Advantage"})),r.a.createElement("div",{className:"Advantages__p"},n[e].text))});return r.a.createElement("div",{className:"Advantages"},r.a.createElement("section",null,r.a.createElement(k,{h1:a}),r.a.createElement("div",{className:"Advantage"},s)))},O=function(e){var t=e.db,a=t.Effects__h1,n=t.Effects__img_1,s=(t.Effects__h1_2,t.Effects__h2_1),o=t.Effects__p1_1;t.Effects__p2_1,t.Effects__p3_1,t.Effects__img_2,t.Effects__h2_2,t.Effects__p1_2,t.Effects__p2_2;return r.a.createElement("div",{className:"Effects"},r.a.createElement("section",null,r.a.createElement(k,{h1:a}),r.a.createElement("div",{className:"Effects__img"},r.a.createElement("img",{src:n,alt:"effects"})),r.a.createElement("div",{className:"HowItWorks__h2"},s),r.a.createElement("div",{className:"HowItWorks__p"},o)))},R=function(e){var t=e.db,a=t.block__p,n=t.block__p2,s=t.block__button,o=t.block__p2_span,l=t.block__p_span;return r.a.createElement("div",{className:"PriceButton"},r.a.createElement("section",null,r.a.createElement("div",{className:"price-block__p"},r.a.createElement("span",{className:"price-block__p_line"},a)," ",r.a.createElement("span",null,l)),r.a.createElement("div",{className:"price-block__p"},r.a.createElement("span",null,o)," ",n),r.a.createElement(v,{classNames:"price-block__button",btntext:s})))},A=function(e){var t=e.db,a=t.footer__h1,n=t.footer__p1,s=t.footer__p2,o=t.footer__h1_span;return r.a.createElement("div",{className:"Footer"},r.a.createElement("footer",null,r.a.createElement("div",{className:"footer__h1"},a,r.a.createElement("span",null,o)),r.a.createElement("div",{className:"footer__p"},n),r.a.createElement("div",{className:"footer__p"},s)))},j=a(265),C=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.db,t=e.Faq_h1,a=e.Question,n=e.Answers,s=e.quest1,o=e.quest2,l=e.quest3,c=e.answer1,i=e.answer2,m=e.answer3,d=e.quest4,u=e.quest5,h=e.answer4,p=e.answer5,f=j.a.Panel,_=r.a.createElement("span",null,r.a.createElement("b",null,a)," ",s),g=r.a.createElement("span",null,r.a.createElement("b",null,a)," ",o),E=r.a.createElement("span",null,r.a.createElement("b",null,a)," ",l),b=r.a.createElement("span",null,r.a.createElement("b",null,a)," ",d),w=r.a.createElement("span",null,r.a.createElement("b",null,a)," ",u),v=r.a.createElement("span",null,r.a.createElement("b",null,n)," ",c),y=r.a.createElement("span",null,r.a.createElement("b",null,n)," ",i),N=r.a.createElement("span",null,r.a.createElement("b",null,n)," ",m),I=r.a.createElement("span",null,r.a.createElement("b",null,n)," ",h),H=r.a.createElement("span",null,r.a.createElement("b",null,n)," ",p);return r.a.createElement("div",{className:"Faq"},r.a.createElement("section",null,r.a.createElement(k,{h1:t}),r.a.createElement(j.a,null,r.a.createElement(f,{header:_,key:"1"},r.a.createElement("p",null,v)),r.a.createElement(f,{header:g,key:"2"},r.a.createElement("p",null,y)),r.a.createElement(f,{header:E,key:"3"},r.a.createElement("p",null,N)),r.a.createElement(f,{header:b,key:"4"},r.a.createElement("p",null,I)),r.a.createElement(f,{header:w,key:"5"},r.a.createElement("p",null,H)))))}}]),t}(n.Component),M=a(262),B=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.db,t=e.Testemonials_h1,a=e.comment4_img,n=e.comment4_p1,s=e.comment4_p2,o=e.comment4_name,l=e.comment3_img,c=e.comment3_p1,i=e.comment3_p2,m=e.comment3_name,d=e.comment2_img,u=e.comment2_p1,h=e.comment2_p2,p=e.comment2_name,f=e.comment1_p1,_=e.comment1_p2,g=e.comment1_p3,E=e.comment1_img,b=e.comment1_name,w=e.comment5_p1,v=e.comment5_p2,y=e.comment5_img,N=e.comment5_name;return r.a.createElement("div",{className:"Testemonials"},r.a.createElement("section",null,r.a.createElement(k,{h1:t}),r.a.createElement(M.a,{autoplay:!0},r.a.createElement("div",null,r.a.createElement("img",{src:l,alt:"Comment 1"}),r.a.createElement("p",null,c),r.a.createElement("p",{style:{fontWeight:"Bold"}},i),r.a.createElement("p",{className:"CommentName"},m)),r.a.createElement("div",null,r.a.createElement("img",{src:E,alt:"Comment 1"}),r.a.createElement("p",null,f),r.a.createElement("p",null,_),r.a.createElement("p",{style:{fontWeight:"Bold"}},g),r.a.createElement("p",{className:"CommentName"},b)),r.a.createElement("div",null,r.a.createElement("img",{src:d,alt:"Comment 1"}),r.a.createElement("p",null,u),r.a.createElement("p",{style:{fontWeight:"Bold"}},h),r.a.createElement("p",{className:"CommentName"},p)),r.a.createElement("div",null,r.a.createElement("img",{src:a,alt:"Comment 1"}),r.a.createElement("p",null,n),r.a.createElement("p",{style:{fontWeight:"Bold"}},s),r.a.createElement("p",{className:"CommentName"},o)),r.a.createElement("div",null,r.a.createElement("img",{src:y,alt:"Comment 1"}),r.a.createElement("p",null,w),r.a.createElement("p",{style:{fontWeight:"Bold"}},v),r.a.createElement("p",{className:"CommentName"},N)))))}}]),t}(n.Component),G=(a(259),[{Header:{header__h1:"Men's Mane",header__h1_2:"FLAME",header__h2:"BEARD GROWTH SERUM",header__img:"https://1693021541.rsc.cdn77.org/lands/mens/set.png",header__p:"Showcase your masculine essence and grow out your own natural beard with our powerful and effective beard growth serum "},PriceButton:{block__p:"AED 207",block__p_span:"AED 167 SALE",block__p2:" in 1-2 days",block__p2_span:"FREE DELIVERY",block__button:"Order Now"},HowItWorks:{HowItWorks__h1:"How it works",HowItWorks__p:"The Organic Beard Growth Serum penetrates the scalp and protects and revitalises the beard follicles. ",HowItWorks__p2:"Over period of 40 days, you will experience a both fuller and thicker beard growth. ",timeblocks:{1:{block__img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/day1.png",block__p:"DAY 1"},2:{block__img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/day2.png",block__p:"3-4 WEEKS "},3:{block__img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/day3.png",block__p:"6-8 WEEKS"}}},CtaButton:{CtaButton__h1:"Boost Your Beard Growth",CtaButton__button:"ORDER NOW"},HairGrowRate:{HairGrowRate_h1:"Do you have beard growth problems?",HairGrowRate_p:"Are you noticing some loss in its natural elasticity and luster? Or perhaps your beard is easily broken and is too much of a mess most of the time? It's no problem at all! ",HairGrowRate_p2:"Our potent Beard growth booster it just what you need to help you regain its vigor, strength and all round health!",HairGrowRate_img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/2.jpg"},Advantages:{HowItWorks__h1:"Advantages",advs:{1:{img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/leaf.svg",text:"100% Safe and Natural"},2:{img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/blood.svg",text:"Easy to use"},3:{img:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/man.svg",text:"Perfect For Beard Care/ Filling Thin Sports"}}},Effects:{Effects__h1:"100% Natural",Effects__h1_2:"Easy to use",Effects__img_1:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/4.png",Effects__h2_1:"100% NATURAL AND ORGANIC ",Effects__p1_1:"Men's Mane beard growth serum is safe and produced from holistic products. It has absolutely no artificial components making it perfect for your face.",Effects__p2_1:"It is made up entirely of natural and holistic products which eliminates the need for harmful chemicals. ",Effects__p3_1:"As a result of it natural components, you can be rest assured that there are no adverse effects to come from using it.",Effects__img_2:"https://1693021541.rsc.cdn77.org/lands/hairflame/1/5.jpg",Effects__h2_2:"Fill out thinning spots ",Effects__p1_2:"With Men's Mane, you can be guaranteed that your thinning Beard follicles will receive the nutrients they need to regrow. ",Effects__p2_2:"In fact, as long as the Beard follicles on your head are not dead, then Men's Mane will slowly work its way in to boost growth."},OurSecret:{HairGrowRate_h1:"Our secret",HairGrowRate_p:"Each vial of men's Mane beard growth serum is carefully produced from the finest of essential oils and beard growth minerals that helps to boost beard follicle growth. Using highly potent oils, our 100% effective formula is highly effective in revamping your entire facial hair and bringing you the excellent result that you desire. ",HairGrowRate_p2:"Our Bread growth serum has proven to be effective for numerous customers and we have continued to replicate this result by bringing only the best of serums to the market.",HairGrowRate_img:"https://1693021541.rsc.cdn77.org/lands/mens/h/2q.jpg"},MoneyBack:{HairGrowRate_h1:"Money back guarantee",HairGrowRate_p:"We are very confident in the effectiveness of our beard growth serum and guarantee you great progress when you begin to apply it to your face. In fact, if there are absolutely no results within 60 days, we will offer you a full refund on your money used to purchase this product. ",HairGrowRate_p2:"However, our countless customers have always reported back with great news and we are certain it will work for you too",HairGrowRate_img:"https://1693021541.rsc.cdn77.org/lands/mens/mb.png"},Footer:{footer__h1:"MAN'S",footer__h1_span:"MANE",footer__p1:"Showcase your masculine essence and grow out your own natural beard with our powerful and effective beard growth serum",footer__p2:"\xa92018 Mens Mane. All Rights Reserved."},Faq:{Faq_h1:"Question/answers",Question:"Question:",Answers:"Answer:",quest1:"How fast will it take for me to experience beard growth with this? ",answer1:"Men's Mane is a fast acting formula that begins to provide result as early as 2-3 weeks of usage. However, to get your desired beard growth, it is advisable to use it for the full length of 3-4 months. Note that beard growth may be dependent on other factors like genetics.",quest2:"How do I apply it? ",answer2:"Using men's Mane is very simple. Simply release 4-6 drops on your palm and massage it into the follicles of your beard. Comb your entire facial beard after application and repeat this process daily.",answer2_2:"",quest3:"I have thin spots and patchy areas on my face. Will this work for me?",answer3:"Yes, the beard growth serum has a potent formula that will stimulate growth across your face. With the right genetic construct, you will begin to notice a full facial beard in no time.",quest4:"Is it safe for sensitive skin?",answer4:"Yes, Men's Mane has a soothing formula composed of organic oils that has great moisturizing effects on your skin. It safe for all skin types and has no adverse reactions. It is important to check to ensure that you have no specific allergies before application.",quest5:"Does it help in beard care and improving beard appearance?",answer5:"Men's Mane beard growth serum is perfect for beard care. Composed of all natural and herbal components, it helps to keep your beard soft, thick and shiny.",quest6:"",answer6:" "},Testemonials:{Testemonials_h1:"Customer reviews",comment1_p1:"Before trying this growth serum, I had never been able to grow a full beard. I always had these areas on both sides of my jaw that never seemed to fill in properly no matter how much I wanted it to. I tried just constantly shaving but that didn't help. After using it, I was amazed at how fast these areas were beginning to fill in. It's all catching up now and I can now shave to my desired taste. ",comment1_p2:"",comment1_p3:"",comment1_name:"DEXTER GRAY",comment1_img:"https://1693021541.rsc.cdn77.org/lands/mens/com1/1.jpg",comment2_p1:"In just 4 weeks after using Men's Mane growth serum, I began to notice considerable changes. I never really thought much of it until I looked in the mirror and noticed a huge change from how my facial hair looked last month.  ",comment2_p2:"My beard has never looked this full! It is also dark, and has that natural shine to it. Needless to say I will be purchasing another vial when this one gets exhausted and I highly recommend this product.",comment2_name:"AARON ROGERS",comment2_img:"https://1693021541.rsc.cdn77.org/lands/mens/com1/2.jpg",comment3_p1:"My brothers have really impressive beards but mine always came in patchy. I figured I just fell on the wrong side of genetics but I was proven wrong when I decided to give this a shot after surfing online. ",comment3_p2:"I had used rubbing alcohol and just about any product on the market with not much of a result but I started to notice new beard growth in areas that had absolutely nothing before. It's all beginning to grow out now and I can say that this product really works!",comment3_name:"MARSHALL FREDERICK",comment3_img:"https://1693021541.rsc.cdn77.org/lands/mens/com1/3.png",comment4_p1:"I stopped believing in beard growth pills, creams and oils a long time ago and so I was skeptical when I came across this. However, after trying this out, the patchy areas on my face are beginning to fill in pretty nicely and I am really glad I came across this product.  ",comment4_p2:"The best part for me is how convenient it is to use. All I have to do is to apply it once a day and go about my normal activities while the serum works its magic. ",comment4_name:"TOMMY THOMAS",comment4_img:"https://1693021541.rsc.cdn77.org/lands/mens/com1/4.png",comment5_p1:"I bought this product to use on my goatee as I had simply resigned and forgotten the idea of ever growing out a full beard.   ",comment5_p2:"However, in my 2 months of usage. I started to experience regular sprouting from my entire jawline. I decided to start applying the growth serum on my entire facial beard area and the results has been amazing. More hair growth with a truly luscious appearance. I love it! ",comment5_name:"WILLIE CRAWFORD",comment5_img:"https://1693021541.rsc.cdn77.org/lands/mens/com1/5.png"}}]),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=G[0];return r.a.createElement("div",null,r.a.createElement(u,{db:e.Header}),r.a.createElement(R,{db:e.PriceButton}),r.a.createElement(I,{db:e.HairGrowRate}),r.a.createElement(H,{db:e.Advantages}),r.a.createElement(y,{db:e.CtaButton}),r.a.createElement(O,{db:e.Effects}),r.a.createElement("section",null,"  ",r.a.createElement(k,{h1:"Easy to use"})," "),r.a.createElement("video",{src:"https://1693021541.rsc.cdn77.org/lands/mens/h/video1.mp4",controls:"controls",width:"100%;",poster:"https://1693021541.rsc.cdn77.org/lands/mens/h/video.png"}),r.a.createElement(y,{db:e.CtaButton}),r.a.createElement(N,{db:e.OurSecret}),r.a.createElement("section",null,"  ",r.a.createElement(k,{h1:"WOMAN love BEADRS"})," "),r.a.createElement("video",{src:"https://1693021541.rsc.cdn77.org/lands/mens/video2.mp4",controls:"controls",width:"100%;"}),r.a.createElement(R,{db:e.PriceButton}),r.a.createElement(C,{db:e.Faq}),r.a.createElement(B,{db:e.Testemonials}),r.a.createElement("section",null,r.a.createElement("p",null,"\xa0")),r.a.createElement(u,{db:e.Header}),r.a.createElement(R,{db:e.PriceButton}),r.a.createElement(N,{db:e.MoneyBack}),r.a.createElement(y,{db:e.CtaButton}),r.a.createElement(A,{db:e.Footer}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[120,2,1]]]);
//# sourceMappingURL=main.c0f50d46.chunk.js.map