"use strict";(self.webpackChunkfoodwagon_online_shop=self.webpackChunkfoodwagon_online_shop||[]).push([[511],{5543:(e,a,t)=>{t.d(a,{R:()=>_});var c=t(1694),s=t.n(c);const n={priceBlock__price:"priceBlock_priceBlock__price__FRHQY",priceBlock__price_theme:"priceBlock_priceBlock__price_theme__My3ay"};var r=t(184);const _=e=>{let{classNames:a,discount:t,price:c}=e;return(0,r.jsxs)("div",{className:n.priceBlock,children:[t?(0,r.jsxs)("div",{className:s()(n.priceBlock__price,a),children:["$ ",(c-c*t/100).toFixed(2)]}):null,(0,r.jsxs)("div",{className:s()(n.priceBlock__price,a,{[n.priceBlock__price_theme]:t}),children:["$",c.toFixed(2)]})]})}},6511:(e,a,t)=>{t.r(a),t.d(a,{default:()=>L});var c=t(9434),s=t(182),n=t(2270),r=t(2791),_=t(2634),o=t(3947),l=t(7540),d=t(1087),i=t(549),u=t(4261),h=t(5543);const p={popup:"popup_popup__JXiIA",card:"popup_card__tpUBh",card__left:"popup_card__left__mj-8i",card__image:"popup_card__image__5Nr4m",card__title:"popup_card__title__dHkCs",card__price:"popup_card__price__yI6qx",card__prices:"popup_card__prices__MbxCz",priceBlock__price_theme:"popup_priceBlock__price_theme__HJTua",card_priceDiscount:"popup_card_priceDiscount__XIkjx",card__right:"popup_card__right__1mXWc"};var m=t(184);const x=(0,r.forwardRef)(((e,a)=>{let{isLoaded:t,list:c,show:s}=e;return(0,m.jsx)(i.Z,{classNames:"alert",in:s&&t,timeout:300,unmountOnExit:!0,children:(0,m.jsx)("div",{className:p.popup,ref:a,children:c.map((e=>{let{discount:a,id:t,image:c,price:s,restaurantId:n,title:r}=e;return(0,m.jsx)(d.rU,{className:p.link,to:"/restaurant/".concat(n,"/product/").concat(t),children:(0,m.jsxs)("div",{className:p.card,children:[(0,m.jsx)("div",{className:p.card__left,children:(0,m.jsx)("img",{alt:r,className:p.card__image,src:"/foodwagon-online-shop"+c})}),(0,m.jsxs)("div",{className:p.card__right,children:[(0,m.jsx)("div",{className:p.card__title,children:r}),(0,m.jsx)(h.R,{classNames:p.card__prices,discount:a,price:s})]})]})},(0,u.Z)())}))})})})),v="searchPanel_search__SgdBH",g="searchPanel_search__btn__T9EOS",b=()=>{const[e,a]=(0,r.useState)(""),[t,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),i=(0,r.useRef)(null),u=(0,c.I0)(),h=(0,c.v9)(_.MX),p=(0,c.v9)(_.bQ),b=(0,c.v9)(n.PR);return(0,r.useEffect)((()=>{const e=e=>{var a,t;null!==(a=d.current)&&void 0!==a&&a.contains(e.target)||null!==(t=i.current)&&void 0!==t&&t.contains(e.target)?s(!0):s(!1)};return document.body.addEventListener("click",e),()=>document.body.removeEventListener("click",e)}),[]),(0,r.useEffect)((()=>{u((0,_.Nx)({currentPage:1,limit:4,searchValue:e})),u((0,n.D4)(1))}),[u,e]),(0,r.useEffect)((()=>{u((0,n.VN)({currentPage:b,limit:8,searchValue:e})),window.scrollTo(0,0)}),[b]),(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)(o.o,{handleSearchValue:e=>{a(e)},iconUrl:"/images/header/search.svg",ref:i}),(0,m.jsx)(l.Q,{classNames:g,handleClick:()=>{u((0,n.VN)({currentPage:1,limit:8,searchValue:e})),u((0,n.D4)(1)),s(!1),window.scrollTo(0,0)},icon:"search",label:"Find Food"}),(0,m.jsx)(x,{isLoaded:h,list:p,ref:d,show:t})]})};var j=t(8753),N=t(7707),f=t(8175);const P=e=>(0,m.jsxs)(f.ZP,{backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",height:503,speed:2,viewBox:"0 0 343 503",width:343,...e,children:[(0,m.jsx)("rect",{height:"228",rx:"16",ry:"16",width:"343",x:"0",y:"0"}),(0,m.jsx)("rect",{height:"53",rx:"8",ry:"8",width:"343",x:"0",y:"244"}),(0,m.jsx)("rect",{height:"26",rx:"8",ry:"8",width:"343",x:"0",y:"305"}),(0,m.jsx)("rect",{height:"26",rx:"8",ry:"8",width:"70",x:"0",y:"339"}),(0,m.jsx)("rect",{height:"60",rx:"8",ry:"8",width:"343",x:"0",y:"390"})]}),k="searchPage_searchPage__QJSEW",C="searchPage_title__kfxb3",w="searchPage_panel__Vczb8",y="searchPage_menuList__IhMJn",I="searchPage_menuList__item__v7-Fr",B="searchPage_message__+9ZIq",L=()=>{const e=(0,c.v9)(n.eH),a=(0,c.v9)(n.PR),t=(0,c.v9)(n.bQ),r=(0,c.v9)(n.MX),_=(0,c.v9)(n.dS),o=(0,c.I0)(),l=e=>{o((0,s.gK)(e))},d=e=>{o((0,s.gb)(e))},i=e=>{o((0,s.nQ)(e))},u=new Array(4).fill(0).map(((e,a)=>(0,m.jsx)(P,{},a)));return(0,m.jsx)("div",{className:k,children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("div",{className:C,children:"Search Food"}),(0,m.jsx)("div",{className:w,children:(0,m.jsx)(b,{})}),"reject"===_&&"string"===typeof e&&(0,m.jsx)("div",{className:B,children:e}),(0,m.jsxs)("div",{className:y,children:[r&&t.map((e=>(0,m.jsx)(j.Z,{classNames:I,...e,handleAddProduct:l,handleInputCount:i,handleRemoveProduct:d},e.id))),"loading"===_&&u]}),_&&!e&&(0,m.jsx)(N.t,{currentPage:a,handleChangePage:e=>{o((0,n.D4)(e))},pageCount:3})]})})}},8753:(e,a,t)=>{t.d(a,{Z:()=>x});var c=t(1632),s=t(9806),n=t(1694),r=t.n(n),_=t(9434),o=t(1087),l=t(182),d=t(9807),i=t(4032),u=t(5749),h=t(7540);const p={card:"card_card__U1p6D",card__up:"card_card__up__HDkkq",card__image:"card_card__image__cZROL",card__name:"card_card__name__hHTPj",card__location:"card_card__location__vExjm",card__locationIcon:"card_card__locationIcon__eX98w",card__price:"card_card__price__wRZm-",card__btn:"card_card__btn__giIGi",card__btns:"card_card__btns__0UUCZ"};var m=t(184);const x=e=>{var a,t;const{classNames:n,discount:x,handleAddProduct:v,handleInputCount:g,handleRemoveProduct:b,id:j,image:N,price:f,restaurantId:P,restaurantName:k,title:C}=e,w={discount:x,id:j,image:N,price:f,restaurantId:P,restaurantName:k,title:C},y=null===(a=(0,_.v9)(l.iq)[P])||void 0===a||null===(t=a.items[j])||void 0===t?void 0:t.quantity,I=()=>{v(w)};return(0,m.jsxs)("div",{className:r()(p.card,n),children:[(0,m.jsx)("div",{className:p.card__up,children:(0,m.jsxs)(o.rU,{className:p.card__upLink,to:"/restaurant/".concat(P,"/product/").concat(j),children:[(0,m.jsx)("img",{alt:"food",className:p.card__image,src:"/foodwagon-online-shop"+N}),x>0&&(0,m.jsx)(i.s,{discount:x,view:"smallLabel"})]})}),(0,m.jsx)(o.rU,{className:p.card__name,to:"/restaurant/".concat(P,"/product/").concat(j),children:(0,d.O)(C,47)}),(0,m.jsxs)(o.rU,{className:p.card__location,to:"/restaurant/".concat(P,"/product/").concat(j),children:[(0,m.jsx)(s.G,{className:p.card__locationIcon,icon:c.opg}),(0,d.O)(k,24)]}),(0,m.jsxs)("p",{className:p.card__price,children:["$ ",f]}),y?(0,m.jsx)(u.w,{handleInputQuantity:e=>g({id:j,price:f,quantity:e,restaurantId:P}),handleMinusProduct:()=>{b(w)},handlePlusProduct:I,quantity:y||0}):(0,m.jsx)(h.Q,{classNames:p.card__btn,handleClick:I,label:"Order Now"})]})}},4393:(e,a,t)=>{t.d(a,{A:()=>o});var c=t(1694),s=t.n(c),n=t(2791);const r={buttons:"counter_buttons__OVEIu",buttons__input:"counter_buttons__input__LU3WF",button:"counter_button__TZDrT",disabledBtn:"counter_disabledBtn__k6ceu"};var _=t(184);const o=e=>{let{classNames:a,handleInputQuantity:t,handleMinusProduct:c,handlePlusProduct:o,quantity:l}=e;const[d,i]=(0,n.useState)(l);return(0,_.jsxs)("div",{className:s()(r.buttons,a),children:[(0,_.jsx)("button",{className:s()(r.button,r.buttons__plus,{[r.disabledBtn]:d>98}),disabled:d>98,onClick:()=>{o(),i(d+1)},children:"+"}),(0,_.jsx)("input",{className:s()(r.buttons__input),maxLength:2,onChange:e=>{const a=e.target.value.replace(/[^0-9]/gi,"");""!==a?(i(+a),t(+a)):i(0)},type:"text",value:d}),(0,_.jsx)("button",{className:s()(r.buttons__minus,r.button),onClick:()=>{c(),i(d-1)},children:"\u2013"})]})};o.defaultProps={quantity:0}},4032:(e,a,t)=>{t.d(a,{s:()=>p});var c=t(1694),s=t.n(c);const n="discount_label__8oW+1",r="discount_label__discount__xZACj",_="discount_label__discountPercent__ninge",o="discount_label__discountOff__nYZns",l="discount_smallLabel__ZzO-o",d="discount_smallLabel__discount__c4Cpa",i="discount_smallLabel__discountPercent__GdmW4",u="discount_smallLabel__discountOff__WMe9z";var h=t(184);const p=e=>{let{classNames:a,discount:t,view:c}=e;const p="smallLabel"===c;return(0,h.jsxs)("div",{className:s()(n,a,{[l]:p}),children:[(0,h.jsx)("div",{className:s()(r,{[d]:p}),children:t}),(0,h.jsx)("div",{className:s()(_,{[i]:p}),children:"%"}),(0,h.jsx)("div",{className:s()(o,{[u]:p}),children:"off"})]})}},7707:(e,a,t)=>{t.d(a,{t:()=>_});var c=t(6048),s=t.n(c);const n="pagination_root__LfyJU";var r=t(184);const _=e=>{let{currentPage:a,handleChangePage:t,pageCount:c}=e;return(0,r.jsx)(s(),{breakLabel:"...",className:n,forcePage:a-1,nextLabel:">",onPageChange:e=>t(e.selected+1),pageCount:c,pageRangeDisplayed:4,previousLabel:"<",renderOnZeroPageCount:null})}},3947:(e,a,t)=>{t.d(a,{o:()=>p});var c=t(1694),s=t.n(c),n=t(5095),r=t.n(n),_=t(2791),o=t(3080);const l="textInput_search__EBFuj",d="textInput_search__input__XdEXy",i="textInput_search__inputIcon__1k8ND",u="textInput_search__clearIcon__dynk9";var h=t(184);const p=(0,_.forwardRef)(((e,a)=>{let{children:t,classNames:c,handleSearchValue:n,iconUrl:p}=e;const m=(0,_.useRef)(null),[x,v]=(0,_.useState)(""),g=(0,_.useCallback)(r()((e=>{n(e)}),300),[]);return(0,h.jsxs)("div",{className:s()(l,c),ref:a,children:[(0,h.jsx)("input",{autoComplete:"off",className:d,name:"find",onChange:e=>{v(e.target.value),g(e.target.value)},placeholder:"Enter your request",ref:m,type:"text",value:x}),x&&(0,h.jsx)("svg",{className:u,onClick:()=>{var e;v(""),n(""),null===(e=m.current)||void 0===e||e.focus()},viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsxs)("g",{fillRule:"evenodd",id:"Fail",children:[(0,h.jsx)("path",{d:"m16 3a13 13 0 1 1 -13 13 13.006 13.006 0 0 1 13-13zm0-2a15 15 0 1 0 15 15 15.007 15.007 0 0 0 -15-15z"}),(0,h.jsx)("path",{d:"m14.586 16-4.293 4.293a1 1 0 0 0 1.414 1.414l4.293-4.293 4.293 4.293a1 1 0 1 0 1.414-1.414l-4.293-4.293 4.293-4.293a1 1 0 0 0 -1.414-1.414l-4.293 4.293-4.293-4.293a1 1 0 0 0 -1.414 1.414z"})]})}),t,p&&(0,h.jsx)(o.Q,{className:i,src:"".concat("/foodwagon-online-shop").concat(p),wrapper:"span"})]})}))},5749:(e,a,t)=>{t.d(a,{w:()=>d});var c=t(1694),s=t.n(c),n=t(1087),r=t(4393),_=t(7540);const o={buttons:"counterAndButton_buttons__C3dVV",buttons__btnToCart:"counterAndButton_buttons__btnToCart__m93NM",buttons__btnToCart_color:"counterAndButton_buttons__btnToCart_color__K2klP"};var l=t(184);const d=e=>{let{handleInputQuantity:a,handleMinusProduct:t,handlePlusProduct:c,quantity:d}=e;return(0,l.jsxs)("div",{className:o.buttons,children:[(0,l.jsx)(n.rU,{className:o.buttons__link,to:"/cart",children:(0,l.jsx)(_.Q,{classNames:s()(o.buttons__btnToCart,o.buttons__btnToCart_color),label:"To Cart"})}),(0,l.jsx)(r.A,{classNames:o.buttons__counter,handleInputQuantity:a,handleMinusProduct:t,handlePlusProduct:c,quantity:d})]})}},7540:(e,a,t)=>{t.d(a,{Q:()=>l});var c=t(1694),s=t.n(c),n=t(3080);const r="searchButton_searchButton__HUIsC",_="searchButton_searchButton__icon__th0CE";var o=t(184);const l=e=>{let{classNames:a,handleClick:t,icon:c,label:l}=e;return(0,o.jsxs)("button",{className:s()(r,a),onClick:t,children:[c&&"search"===c&&(0,o.jsx)(n.Q,{className:_,src:"".concat("/foodwagon-online-shop","/images/find-food/search-panel/search.svg"),wrapper:"span"}),(0,o.jsx)("span",{children:l})]})}},9807:(e,a,t)=>{t.d(a,{O:()=>c});const c=(e,a)=>(null===e||void 0===e?void 0:e.length)>a?"".concat(e.slice(0,a-1),"..."):e}}]);
//# sourceMappingURL=511.840eb41f.chunk.js.map