(this["webpackJsonpecommerce-project"]=this["webpackJsonpecommerce-project"]||[]).push([[0],{21:function(e,t,r){e.exports={resize:"Grid_resize__3d6MV",cardWrapper:"Grid_cardWrapper__2yEDT",card:"Grid_card__k1N2M"}},25:function(e,t,r){e.exports={container:"Navbar_container__LBZ7g",Navbar_item:"Navbar_Navbar_item__1exlu"}},28:function(e,t,r){e.exports={slider:"Carousel_slider__1XX7F",images:"Carousel_images__2h26A",rightArrow:"Carousel_rightArrow__1fOPE",leftArrow:"Carousel_leftArrow__1LAz0"}},35:function(e,t,r){e.exports={Card_Container:"Card_Card_Container__1Nwuc",Card_Content:"Card_Card_Content__2hXxC"}},36:function(e,t,r){e.exports={CartGrid:"Cart_CartGrid__fAu83",CartContainer:"Cart_CartContainer__3bUJn"}},37:function(e,t,r){e.exports={Card_Content:"CartCard_Card_Content__1ZbE5"}},38:function(e,t,r){},45:function(e,t,r){e.exports={Grid:"Home_Grid__27fjp"}},47:function(e,t,r){e.exports={item_container:"Product_item_container__154m5"}},52:function(e,t,r){},60:function(e,t,r){},65:function(e,t,r){e.exports={home:"Header_home__kBCDG",about:"Header_about__2dQiV",work:"Header_work__2INmN",contact:"Header_contact__35Q8t","nav-wrapper":"Header_nav-wrapper__1sS3B",nav:"Header_nav__G3lt0","nav-visible":"Header_nav-visible__1Z3MV","nav-link":"Header_nav-link__2cEKM",logo:"Header_logo__10PtY",gradient:"Header_gradient__1FFHL","logo-hover":"Header_logo-hover__2K_Tn",right:"Header_right__2tiW_","btn-nav":"Header_btn-nav__tp50r"}},67:function(e,t,r){"use strict";r.r(t);var a=r(3),n=r.n(a),c=r(44),s=r.n(c),i=(r(52),r(7)),o=r.n(i),d=r(12),u=r(15),j=r(20),b=r(26);r(42);b.a.initializeApp({apiKey:"AIzaSyBr2R3i3C59vNZ5P9f6xsvqxbDkIcoYTqs",authDomain:"my-react-project-220ad.firebaseapp.com",projectId:"my-react-project-220ad",storageBucket:"my-react-project-220ad.appspot.com",messagingSenderId:"687255531181",appId:"1:687255531181:web:8e65115d6d6fbdc08c2024"});b.a.storage(),b.a.firestore(),b.a;var l=b.a.firestore(),x=function(){var e=Object(d.a)(o.a.mark((function e(){var t,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.collection("cart"),e.next=3,t.get();case 3:return r=e.sent,a=r.docs,e.abrupt("return",a.map((function(e){return Object(j.a)({CartId:e.id},e.data())})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.collection("cart").doc(t),e.next=3,r.delete();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(o.a.mark((function e(t,r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.collection("cart").doc(t),e.next=3,a.update(r);case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.collection("cart"),e.next=3,r.add(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=r(2),m=Object(a.createContext)(),_=function(e){var t=e.children,r=Object(a.useState)([]),n=Object(u.a)(r,2),c=n[0],s=n[1],i=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){i()}),[t]);var j={cart:c,getCartItems:i};return Object(O.jsx)(m.Provider,{value:j,children:t})},v=r(22),w=r(11),g=(r(60),function(){var e=Object(d.a)(o.a.mark((function e(){var t,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.collection("products"),e.next=3,t.get();case 3:return r=e.sent,a=r.docs,e.abrupt("return",a.map((function(e){return Object(j.a)({id:e.id},e.data())})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),C=function(){var e=Object(d.a)(o.a.mark((function e(t){var r,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.collection("products").doc(t),e.next=3,r.get();case 3:return a=e.sent,n=[Object(j.a)({id:a.id},a.data())],e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=r(45),H=r.n(N),y=r(25),M=r.n(y),k=function(){return Object(O.jsx)("div",{className:M.a.container,children:Object(O.jsxs)("nav",{className:M.a.Navbar,children:[Object(O.jsx)(v.b,{className:M.a.Navbar_item,to:"/",children:" Home "}),Object(O.jsx)(v.b,{className:M.a.Navbar_item,to:"products/:id",children:" Products "}),Object(O.jsx)(v.b,{className:M.a.Navbar_item,to:"/cart",children:" Cart "})]})})},B=k,G=[{image:"https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1008&q=80"},{image:"https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1003&q=80"},{image:"https://images.unsplash.com/photo-1521774971864-62e842046145?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}],A=r(39),D=r(28),S=r.n(D),I=function(e){var t=e.slides,r=Object(a.useState)(0),n=Object(u.a)(r,2),c=n[0],s=n[1],i=t.length;return!Array.isArray(t)||t.length<=0?null:Object(O.jsxs)("div",{className:S.a.slider,children:[Object(O.jsx)(A.a,{className:S.a.leftArrow,onClick:function(){s(0===c?i-1:c-1)}}),Object(O.jsx)(A.b,{className:S.a.rightArrow,onClick:function(){s(c===i-1?0:c+1)}}),G.map((function(e,t){return Object(O.jsx)("div",{className:t===c?"slide active":"slide",children:t===c&&Object(O.jsx)("img",{src:e.image,alt:"shoe images",className:S.a.images})},t)})),";"]})},T=(r(65),function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("header",{id:"nav-wrapper"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{class:"gradient skew",children:Object(O.jsx)("h1",{class:"logo un-skew",children:Object(O.jsx)("a",{href:"#home",children:"Studio Shoes"})})}),Object(O.jsx)("button",{id:"menu",class:"btn-nav",children:Object(O.jsx)("span",{class:"fas fa-bars"})})]})]})}),F=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("footer",{children:"Footer"})})},E=r(69),q=r(70),V=r(21),W=r.n(V),P=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:W.a.cardWrapper,children:[Object(O.jsxs)(E.a,{className:W.a.card,children:[Object(O.jsx)(E.a.Img,{className:W.a.resize,src:"https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80"}),Object(O.jsxs)(E.a.Body,{children:[Object(O.jsx)(E.a.Title,{children:"Hats"}),Object(O.jsx)(E.a.Text,{children:"Hats Text"}),Object(O.jsx)(q.a,{variant:"success",children:"See More"})]})]}),Object(O.jsxs)(E.a,{className:W.a.card,children:[Object(O.jsx)(E.a.Img,{className:W.a.resize,src:"https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"}),Object(O.jsxs)(E.a.Body,{className:W.a.body,children:[Object(O.jsx)(E.a.Title,{children:"Shoes"}),Object(O.jsx)(E.a.Text,{children:"Shoes Text"}),Object(O.jsx)(q.a,{variant:"danger",children:"See More"})]})]}),Object(O.jsxs)(E.a,{className:W.a.card,children:[Object(O.jsx)(E.a.Img,{className:W.a.resize,src:"https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"}),Object(O.jsxs)(E.a.Body,{children:[Object(O.jsx)(E.a.Title,{children:"Pants"}),Object(O.jsx)(E.a.Text,{children:"Pants Text"}),Object(O.jsx)(q.a,{variant:"secondary",children:"See More"})]})]}),Object(O.jsxs)(E.a,{className:W.a.card,children:[Object(O.jsx)(E.a.Img,{className:W.a.resize,src:"https://images.unsplash.com/photo-1542060748-10c28b62716f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}),Object(O.jsxs)(E.a.Body,{children:[Object(O.jsx)(E.a.Title,{children:"Shirts"}),Object(O.jsx)(E.a.Text,{children:"Shirts Text"}),Object(O.jsx)(q.a,{variant:"primary",children:"See More"})]})]})]})})},z=r(35),Y=r.n(z),L=function(e){var t=e.products,r=Object(a.useState)(),n=Object(u.a)(r,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){var e=Object.assign({},t);s(Object(j.a)(Object(j.a)({},e),{},{quantity:1}))}),[t]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:Y.a.Card_Container,children:[Object(O.jsx)("img",{src:"https://via.placeholder.com/150"}),Object(O.jsxs)("div",{className:Y.a.Card_Content,children:[Object(O.jsx)(v.b,{to:"/products/".concat(t.id),children:t.name}),Object(O.jsx)("div",{children:t.variant}),Object(O.jsxs)("div",{children:["$ ",t.price]})]}),Object(O.jsx)("button",{onClick:function(){h(c)},children:"Add to Cart"})]})})},Z=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),r=t[0],n=t[1],c=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{}),Object(O.jsx)(B,{}),Object(O.jsx)(I,{slides:G}),Object(O.jsx)("div",{className:H.a.Grid,children:r.map((function(e){return Object(O.jsx)(L,{products:e},e.id)}))}),Object(O.jsx)(P,{}),Object(O.jsx)(F,{})]})},J=r(36),K=r.n(J),X=function(e){var t=e.onChange,r=e.value;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:function(){return t(r-1)},children:"-"}),r,Object(O.jsx)("button",{onClick:function(){return t(r+1)},children:"+"})]})})},Q=r(37),R=r.n(Q),$=function(e){var t=e.product,r=e.onDelete,n=Object(a.useState)(1),c=Object(u.a)(n,2),s=c[0],i=c[1],j=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t.CartId,{quantity:s});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){j()}),[s]),Object(O.jsx)("div",{className:R.a.CartCard_Container,children:Object(O.jsxs)("div",{className:R.a.Card_Content,children:[Object(O.jsx)("img",{src:"https://via.placeholder.com/150"}),Object(O.jsx)("div",{children:t.name}),Object(O.jsx)("div",{children:t.variant}),Object(O.jsxs)("div",{children:["$",t.price]}),Object(O.jsx)(X,{onChange:i,value:s}),Object(O.jsx)("button",{onClick:function(e){r(t.CartId)},children:"REMOVE"})]})})},U=function(){var e=Object(a.useContext)(m),t=e.cart,r=e.getCartItems,n=function(e){f(e),r()};return Object(a.useEffect)((function(){r()}),[t]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(k,{}),Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Cart"})}),Object(O.jsx)("div",{className:K.a.CartContainer,children:Object(O.jsx)("div",{className:K.a.CartGrid,children:t.map((function(e){return Object(O.jsx)($,{product:e,onDelete:n},e.id)}))})})]})},ee=(r(38),r(47)),te=r.n(ee),re=function(){var e=Object(w.f)().id,t=Object(a.useState)([]),r=Object(u.a)(t,2),n=r[0],c=r[1];return Object(a.useEffect)((function(){(function(){var t=Object(d.a)(o.a.mark((function t(){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:r=t.sent,c(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(B,{}),Object(O.jsx)("div",{className:te.a.item_container,children:n.map((function(e){return Object(O.jsx)(L,{products:e},e.id)}))})]})},ae=function(){return Object(O.jsx)(v.a,{children:Object(O.jsx)(_,{children:Object(O.jsxs)(w.c,{children:[Object(O.jsx)(w.a,{exact:!0,path:"/",component:Z}),Object(O.jsx)(w.a,{path:"/products/:id",children:Object(O.jsx)(re,{})}),Object(O.jsx)(w.a,{path:"/cart",component:U})]})})})},ne=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,71)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),c(e),s(e)}))};r(66);s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(ae,{})}),document.getElementById("root")),ne()}},[[67,1,2]]]);
//# sourceMappingURL=main.3fbddd23.chunk.js.map