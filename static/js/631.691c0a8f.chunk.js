/*! For license information please see 631.691c0a8f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfoodwagon_online_shop=self.webpackChunkfoodwagon_online_shop||[]).push([[631],{1846:function(e,t,n){n.d(t,{T:function(){return p}});var r=n(4942),a=n(9439),i=n(1694),c=n.n(i),o=n(2791),s="sortPopup_sort__PlW38",d="sortPopup_sort__title__g+NrM",l="sortPopup_sort__list__yF9s6",u="sortPopup_sort__link__XfXZX",_="sortPopup_sort__popup__i4M4V",f="sortPopup_sort__item__CkZfg",m="sortPopup_sort__item_active__Uqb92",h=n(184);function p(e){var t=e.activeSortType,n=e.classNames,i=e.handleClickSortType,p=e.items,g=e.orderType,v=(0,o.useState)(!1),x=(0,a.Z)(v,2),b=x[0],y=x[1],j=(0,o.useRef)(),N=p.find((function(e){return e.type===t})).name;return(0,o.useEffect)((function(){var e=function(e){var t;null!==(t=j.current)&&void 0!==t&&t.contains(e.target)||y(!1)};return document.body.addEventListener("click",e),function(){return document.body.removeEventListener("click",e)}}),[]),(0,h.jsxs)("div",{className:c()(s,n),children:[(0,h.jsxs)("div",{className:d,ref:j,children:["sort by",(0,h.jsx)("span",{className:u,onClick:function(){y(!b)},children:N})]}),b&&(0,h.jsx)("div",{className:_,children:(0,h.jsx)("ul",{className:l,children:p&&p.map((function(e,n){var a=e.name,o=e.order,s=e.type;return(0,h.jsx)("li",{className:c()(f,(0,r.Z)({},m,s===t&&o===g)),onClick:function(){return function(e,t){i(e,t)}(s,o)},children:a},"".concat(s,"_").concat(n))}))})})]})}p.defaultProps={items:[]}},5631:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(1413),a=n(2791),i=n(9434),c=n(7689),o=n(6721),s=n(770),d=n(1694),l=n.n(d),u=n(7215),_=n(9020),f=n(329),m=n(1846),h=n(4023),p=n(4912),g=n(8175),v=n(184),x=function(e){return(0,v.jsxs)(g.ZP,(0,r.Z)((0,r.Z)({backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",height:503,speed:2,viewBox:"0 0 343 503",width:343},e),{},{children:[(0,v.jsx)("rect",{height:"228",rx:"16",ry:"16",width:"343",x:"0",y:"0"}),(0,v.jsx)("rect",{height:"53",rx:"8",ry:"8",width:"343",x:"0",y:"244"}),(0,v.jsx)("rect",{height:"26",rx:"8",ry:"8",width:"343",x:"0",y:"305"}),(0,v.jsx)("rect",{height:"26",rx:"8",ry:"8",width:"70",x:"0",y:"339"}),(0,v.jsx)("rect",{height:"60",rx:"8",ry:"8",width:"343",x:"0",y:"390"})]}))},b="restaurantPage_restaurant__SYgJC",y="restaurantPage_menuList__mFwJ0",j="restaurantPage_menuList__item__Xdczd",N="restaurantPage_filters__xTNOb",P="restaurantPage_alert__jhNNK",w="restaurantPage_filters__sortBy__SU7HF",C=[{name:"popularity ",order:"desc",type:"rating"},{name:"price ascending",order:"asc",type:"price"},{name:"price descending",order:"desc",type:"price"},{name:"discount",order:"desc",type:"discount"},{name:"alphabetically",order:"asc",type:"title"}];function k(){var e=(0,c.UO)().restaurantId,t=(0,i.I0)(),n=(0,i.v9)(u.uT),s=(0,i.v9)(f.i1),d=(0,i.v9)(f.Ji),g=(0,i.v9)(_.PR),k=(0,i.v9)(_.MX),E=(0,i.v9)(_.bQ);(0,a.useEffect)((function(){window.scrollTo(0,0)}),[g]);var O=function(e){t((0,u.D4)(e))};(0,a.useEffect)((function(){t((0,_.t2)({currentPage:g,limit:4,order:s,restaurantId:e,sortType:d}))}),[d,n,e,s,g]);var Z=function(e){t((0,o.gK)(e))},I=function(e){t((0,o.gb)(e))},T=function(e){t((0,o.nQ)(e))},L=new Array(4).fill(0).map((function(e,t){return(0,v.jsx)(x,{},t)}));return k||null!==E&&void 0!==E&&E.length?(0,v.jsxs)("div",{className:b,children:[(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("div",{className:N,children:(0,v.jsx)(m.T,{activeSortType:d,classNames:w,handleClickSortType:function(e,n){t((0,f.Td)({order:n,type:e}))},items:C,orderType:s})}),(0,v.jsx)("div",{className:y,children:k&&E?E.map((function(e){return(0,v.jsx)(h.Z,(0,r.Z)((0,r.Z)({classNames:j},e),{},{handleAddProduct:Z,handleInputCount:T,handleRemoveProduct:I}),e.id)})):L})]}),(0,v.jsx)("div",{className:"container",children:(0,v.jsx)(p.t,{currentPage:g,handleChangePage:O,pageCount:5})})]}):(0,v.jsx)("div",{className:l()(b),children:(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("div",{className:P,children:"Nothing was found according to your request. Go to another page."}),(0,v.jsx)(p.t,{currentPage:g,handleChangePage:O,pageCount:5})]})})}var E=n(4942),O=n(1087),Z=n(3080),I=n(8016),T=n(9528),L=n(6039),B=n(5783),Q={card:"card_card__-hMKB",card__left:"card_card__left__uRvze",card__image:"card_card__image__-rm0k",card__info:"card_card__info__be6EV",card__discount:"card_card__discount__IoGLj",card__discount_size:"card_card__discount_size__1uKAl",card__discount_off:"card_card__discount_off__MoU9P",info:"card_info__nou3f",info__title:"card_info__title__-baUQ",info__name:"card_info__name__plteL",info__nameIcon:"card_info__nameIcon__gwdlK",info__nameLink:"card_info__nameLink__2ZVbN",info__prices:"card_info__prices__JDMcq",info__price:"card_info__price__nbku5",info__price_theme:"card_info__price_theme__LA6yR",info__ingredients:"card_info__ingredients__rJrf6",info__btns:"card_info__btns__vHnTc",buttons__order:"card_buttons__order__KyRui",discount:"card_discount__kEzZZ"};function q(e){var t,n,r=e.discount,a=e.handleAddProduct,c=e.handleInputCount,o=e.handleRemoveProduct,s=e.id,d=e.image,u=e.ingredients,_=e.price,f=e.restaurantId,m=e.restaurantName,h=e.title,p=null===(t=(0,i.v9)((function(e){return e.cart})).cart[f])||void 0===t||null===(n=t.items[s])||void 0===n?void 0:n.quantity,g=function(){a({discount:r,id:s,image:d,price:_,restaurantId:f,restaurantName:m,title:h})};return(0,v.jsxs)("div",{className:Q.card,children:[(0,v.jsxs)("div",{className:Q.card__left,children:[(0,v.jsx)("img",{alt:h,className:Q.card__image,src:"".concat("/foodwagon-online-shop").concat(d)}),r&&r?(0,v.jsx)(T.s,{classNames:Q.card__discount,discount:r}):null,(0,v.jsx)(T.s,{classNames:Q.discount,discount:r,view:"smallLabel"})]}),(0,v.jsxs)("div",{className:l()(Q.card__info,Q.info),children:[(0,v.jsx)("p",{className:Q.info__title,children:h}),(0,v.jsxs)("p",{className:Q.info__name,children:[(0,v.jsx)(Z.Q,{className:Q.info__nameIcon,src:"/foodwagon-online-shop/images/popular-items/map.svg",wrapper:"span"}),(0,v.jsx)(O.rU,{className:Q.info__nameLink,children:m})]}),(0,v.jsxs)("div",{className:Q.info__prices,children:[(0,v.jsxs)("div",{className:l()(Q.info__price,(0,E.Z)({},Q.info__price_theme,r)),children:["$ ",_]}),r?(0,v.jsxs)("div",{className:Q.info__price,children:["$ ",(_-_*r/100).toFixed(2)]}):null]}),(0,v.jsxs)("p",{className:Q.info__ingredients,children:["Ingredients: ",(0,I.O)(u.join(", "),215)]}),(0,v.jsx)("div",{className:l()(Q.info__btns,Q.buttons),children:p?(0,v.jsx)(L.w,{handleInputQuantity:function(e){return c({id:s,price:_,quantity:e,restaurantId:f})},handleMinusProduct:function(){o({discount:r,id:s,image:d,price:_,restaurantId:f,restaurantName:m,title:h})},handlePlusProduct:g,quantity:p||0}):(0,v.jsx)(B.Q,{classNames:Q.buttons__order,handleClick:g,label:"Order Now"})})]})]})}var U=function(e){return(0,v.jsx)(g.ZP,(0,r.Z)((0,r.Z)({backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",height:331,speed:2,viewBox:"0 0 357 331",width:357},e),{},{children:(0,v.jsx)("rect",{height:"301",rx:"16",ry:"16",width:"357",x:"0",y:"0"})}))},A=function(e){return(0,v.jsxs)(g.ZP,(0,r.Z)((0,r.Z)({backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",height:331,speed:2,viewBox:"0 0 700 331",width:700},e),{},{children:[(0,v.jsx)("rect",{height:"50",rx:"8",ry:"8",width:"700",x:"0",y:"10"}),(0,v.jsx)("rect",{height:"26",rx:"8",ry:"8",width:"700",x:"0",y:"74"}),(0,v.jsx)("rect",{height:"29",rx:"8",ry:"8",width:"70",x:"0",y:"115"}),(0,v.jsx)("rect",{height:"72",rx:"8",ry:"8",width:"700",x:"0",y:"154"}),(0,v.jsx)("rect",{height:"60",rx:"8",ry:"8",width:"283",x:"0",y:"241"})]}))},M="productPage_productPage__4slWL",R="productPage_product__v5Fvr",K="productPage_placeholder__skrGm",S="productPage_title__jEyUi";var J=function(){var e=(0,c.UO)().id,t=(0,i.I0)(),n=(0,c.TH)().pathname,d=(0,i.v9)(s.nk),l=(0,i.v9)(s.TP);(0,a.useEffect)((function(){window.scrollTo(0,0)}),[n]),(0,a.useEffect)((function(){t((0,s.MX)({id:e,limit:1}))}),[e,t]);var u=function(e){t((0,o.gK)(e))},_=function(e){t((0,o.gb)(e))},f=function(e){t((0,o.nQ)(e))},m=new Array(1).fill(0).map((function(e,t){return(0,v.jsxs)("div",{className:K,children:[(0,v.jsx)(U,{}),(0,v.jsx)(A,{})]},t)}));return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:M,children:(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("h1",{className:S,children:"Restaurant menu"}),(0,v.jsx)("div",{className:R,children:d&&l?l.map((function(e,t){return(0,a.createElement)(q,(0,r.Z)((0,r.Z)({},e),{},{handleAddProduct:u,handleInputCount:f,handleRemoveProduct:_,key:"".concat(e.id).concat(t)}))})):m})]})}),(0,v.jsx)(k,{})]})}},4023:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(1632),a=n(9806),i=n(1694),c=n.n(i),o=n(9434),s=n(1087),d=n(8016),l=n(4419),u=n(6039),_=n(5783),f={card:"card_card__0wsPU",card__up:"card_card__up__VoBbx",card__image:"card_card__image__3ms8K",card__name:"card_card__name__T9owS",card__location:"card_card__location__f0fJJ",card__locationIcon:"card_card__locationIcon__IILA8",card__price:"card_card__price__-7iE4",card__btn:"card_card__btn__--P54",card__btns:"card_card__btns__d42wH"},m=n(184);function h(e){var t,n,i=e.classNames,h=e.discount,p=e.handleAddProduct,g=e.handleInputCount,v=e.handleRemoveProduct,x=e.id,b=e.image,y=e.price,j=e.restaurantId,N=e.restaurantName,P=e.title,w={discount:h,id:x,image:b,price:y,restaurantId:j,restaurantName:N,title:P},C=null===(t=(0,o.v9)((function(e){return e.cart})).cart[j])||void 0===t||null===(n=t.items[x])||void 0===n?void 0:n.quantity,k=function(){p(w)};return(0,m.jsxs)("div",{className:c()(f.card,i),children:[(0,m.jsx)("div",{className:f.card__up,children:(0,m.jsxs)(s.rU,{className:f.card__upLink,to:"/restaurant/".concat(j,"/product/").concat(x),children:[(0,m.jsx)("img",{alt:"food",className:f.card__image,src:"/foodwagon-online-shop"+b}),h>0&&(0,m.jsx)(l.s,{discount:h,view:"smallLabel"})]})}),(0,m.jsx)(s.rU,{className:f.card__name,to:"/restaurant/".concat(j,"/product/").concat(x),children:(0,d.O)(P,47)}),(0,m.jsxs)(s.rU,{className:f.card__location,children:[(0,m.jsx)(a.G,{className:f.card__locationIcon,icon:r.opg}),(0,d.O)(N,24)]}),(0,m.jsxs)("p",{className:f.card__price,children:["$ ",y]}),C?(0,m.jsx)(u.w,{handleInputQuantity:function(e){return g({id:x,quantity:e,restaurantId:j})},handleMinusProduct:function(){v(w)},handlePlusProduct:k,quantity:C||0}):(0,m.jsx)(_.Q,{classNames:f.card__btn,handleClick:k,label:"Order Now"})]})}},630:function(e,t,n){n.d(t,{A:function(){return l}});var r=n(4942),a=n(9439),i=n(1694),c=n.n(i),o=n(2791),s={buttons:"counter_buttons__5pKLK",buttons__input:"counter_buttons__input__U1D55",button:"counter_button__WVIk7",disabledBtn:"counter_disabledBtn__q76Lf"},d=n(184);function l(e){var t=e.classNames,n=e.handleInputQuantity,i=e.handleMinusProduct,l=e.handlePlusProduct,u=e.quantity,_=(0,o.useState)(u),f=(0,a.Z)(_,2),m=f[0],h=f[1];return(0,d.jsxs)("div",{className:c()(s.buttons,t),children:[(0,d.jsx)("button",{className:c()(s.button,s.buttons__plus,(0,r.Z)({},s.disabledBtn,m>98)),disabled:m>98,onClick:function(){l(),h(m+1)},children:"+"}),(0,d.jsx)("input",{className:c()(s.buttons__input),maxLength:"2",onChange:function(e){var t=e.target.value.replace(/[^0-9]/gi,"");""!==t?(h(+t),n(+t)):h("")},type:"text",value:m}),(0,d.jsx)("button",{className:c()(s.buttons__minus,s.button),onClick:function(){i(),h(m-1)},children:"\u2013"})]})}l.defaultProps={quantity:0}},4419:function(e,t,n){n.d(t,{s:function(){return h}});var r=n(4942),a=n(1694),i=n.n(a),c="discount_label__3nKEK",o="discount_label__discount__jZAvi",s="discount_label__discountPercent__eFk2O",d="discount_label__discountOff__6R3Oo",l="discount_smallLabel__W+3VV",u="discount_smallLabel__discount__sDwyk",_="discount_smallLabel__discountPercent__Jc6pB",f="discount_smallLabel__discountOff__DYXzc",m=n(184);function h(e){var t=e.classNames,n=e.discount,a="smallLabel"===e.view;return(0,m.jsxs)("div",{className:i()(c,t,(0,r.Z)({},l,a)),children:[(0,m.jsx)("div",{className:i()(o,(0,r.Z)({},u,a)),children:n}),(0,m.jsx)("div",{className:i()(s,(0,r.Z)({},_,a)),children:"%"}),(0,m.jsx)("div",{className:i()(d,(0,r.Z)({},f,a)),children:"off"})]})}},9528:function(e,t,n){n.d(t,{s:function(){return r.s}});var r=n(4419)},4912:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(6048),a=n.n(r),i="pagination_root__bnlZ4",c=n(184);function o(e){var t=e.currentPage,n=e.handleChangePage,r=e.pageCount;return(0,c.jsx)(a(),{breakLabel:"...",className:i,forcePage:t-1,nextLabel:">",onPageChange:function(e){return n(e.selected+1)},pageCount:r,pageRangeDisplayed:4,previousLabel:"<",renderOnZeroPageCount:null})}},6039:function(e,t,n){n.d(t,{w:function(){return l}});var r=n(1694),a=n.n(r),i=(n(2791),n(1087)),c=n(630),o=n(5783),s={buttons:"counterAndButton_buttons__Q5eSi",buttons__btnToCart:"counterAndButton_buttons__btnToCart__pR2yx",buttons__btnToCart_color:"counterAndButton_buttons__btnToCart_color__+0ckJ"},d=n(184);function l(e){var t=e.handleInputQuantity,n=e.handleMinusProduct,r=e.handlePlusProduct,l=e.quantity;return(0,d.jsxs)("div",{className:s.buttons,children:[(0,d.jsx)(i.rU,{className:s.buttons__link,to:"/cart",children:(0,d.jsx)(o.Q,{classNames:a()(s.buttons__btnToCart,s.buttons__btnToCart_color),label:"To Cart"})}),(0,d.jsx)(c.A,{classNames:s.buttons__counter,handleInputQuantity:t,handleMinusProduct:n,handlePlusProduct:r,quantity:l})]})}},5783:function(e,t,n){n.d(t,{Q:function(){return d}});var r=n(1694),a=n.n(r),i=n(3080),c="searchButton_searchButton__Fzy8G",o="searchButton_searchButton__icon__p5oQJ",s=n(184);function d(e){var t=e.classNames,n=e.handleClick,r=e.icon,d=e.label;return(0,s.jsxs)("button",{className:a()(c,t),onClick:n,children:[r&&"search"===r&&(0,s.jsx)(i.Q,{className:o,src:"".concat("/foodwagon-online-shop","/images/find-food/search-panel/search.svg"),wrapper:"span"}),(0,s.jsx)("span",{children:d})]})}},8016:function(e,t,n){n.d(t,{O:function(){return r}});var r=function(e,t){return(null===e||void 0===e?void 0:e.length)>t?"".concat(e.slice(0,t-1),"..."):e}},8175:function(e,t,n){var r=n(2791),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};var i=function(e){var t=e.animate,n=void 0===t||t,i=e.animateBegin,c=e.backgroundColor,o=void 0===c?"#f5f6f7":c,s=e.backgroundOpacity,d=void 0===s?1:s,l=e.baseUrl,u=void 0===l?"":l,_=e.children,f=e.foregroundColor,m=void 0===f?"#eee":f,h=e.foregroundOpacity,p=void 0===h?1:h,g=e.gradientRatio,v=void 0===g?2:g,x=e.gradientDirection,b=void 0===x?"left-right":x,y=e.uniqueKey,j=e.interval,N=void 0===j?.25:j,P=e.rtl,w=void 0!==P&&P,C=e.speed,k=void 0===C?1.2:C,E=e.style,O=void 0===E?{}:E,Z=e.title,I=void 0===Z?"Loading...":Z,T=e.beforeMask,L=void 0===T?null:T,B=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),Q=y||Math.random().toString(36).substring(6),q=Q+"-diff",U=Q+"-animated-diff",A=Q+"-aria",M=w?{transform:"scaleX(-1)"}:null,R="0; "+N+"; 1",K=k+"s",S="top-bottom"===b?"rotate(90)":void 0;return(0,r.createElement)("svg",a({"aria-labelledby":A,role:"img",style:a(a({},O),M)},B),I?(0,r.createElement)("title",{id:A},I):null,L&&(0,r.isValidElement)(L)?L:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+u+"#"+q+")",style:{fill:"url("+u+"#"+U+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:q},_),(0,r.createElement)("linearGradient",{id:U,gradientTransform:S},(0,r.createElement)("stop",{offset:"0%",stopColor:o,stopOpacity:d},n&&(0,r.createElement)("animate",{attributeName:"offset",values:-v+"; "+-v+"; 1",keyTimes:R,dur:K,repeatCount:"indefinite",begin:i})),(0,r.createElement)("stop",{offset:"50%",stopColor:m,stopOpacity:p},n&&(0,r.createElement)("animate",{attributeName:"offset",values:-v/2+"; "+-v/2+"; "+(1+v/2),keyTimes:R,dur:K,repeatCount:"indefinite",begin:i})),(0,r.createElement)("stop",{offset:"100%",stopColor:o,stopOpacity:d},n&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+v),keyTimes:R,dur:K,repeatCount:"indefinite",begin:i})))))},c=function(e){return e.children?(0,r.createElement)(i,a({},e)):(0,r.createElement)(o,a({},e))},o=function(e){return(0,r.createElement)(c,a({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=c}}]);
//# sourceMappingURL=631.691c0a8f.chunk.js.map