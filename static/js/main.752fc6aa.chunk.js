(this["webpackJsonpnear-social-good"]=this["webpackJsonpnear-social-good"]||[]).push([[0],{114:function(t,e,n){},121:function(t,e){},131:function(t,e){},178:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(95),o=n.n(r),i=(n(114),n(31)),s=n(11),l=n.n(s),u="social-good.adriano.testnet";var d=function(t){switch(t){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:u,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:u,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(t,"'."))}},h=n(32),p=(n(56),d("testnet"));function j(){return(j=Object(i.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.connect)(Object.assign({deps:{keyStore:new h.keyStores.BrowserLocalStorageKeyStore}},p));case 2:e=t.sent,window.walletConnection=new h.WalletConnection(e),window.accountId=window.walletConnection.getAccountId(),window.contract=new h.Contract(window.walletConnection.account(),p.contractName,{viewMethods:["getCauses"],changeMethods:["addCause","supportCause"]});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x=n(206),w=n(207),m=n(209),f=n(210),g=n(202),b=n(2);function O(){var t=window.walletConnection.account();return Object(b.jsx)(x.a,{sx:{flexGrow:1},children:Object(b.jsx)(w.a,{position:"static",children:Object(b.jsxs)(m.a,{children:[Object(b.jsx)(f.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"NEAR Social Good"}),t.accountId?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{variant:"caption",children:t.accountId}),Object(b.jsx)(g.a,{sx:{marginLeft:2},variant:"outlined",color:"inherit",onClick:function(){return window.walletConnection.signOut(),void window.location.reload()},children:"Logout"})]}):Object(b.jsx)(g.a,{color:"inherit",onClick:function(){window.walletConnection.requestSignIn(p.contractName)},children:"Login"})]})})})}var v=n(18),C=1e14;function y(){return window.contract.getCauses()}function I(t){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(l.a.mark((function t(e){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.causeIndex,a=e.amount,console.log("test"),t.next=4,window.contract.supportCause({causeIndex:n},C,a);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var N=n(211),S=n(205),U=n(212),A=n(213),E=n(214),B=n(215),F=n(203),L=n(216);var W=function(){var t=Object(a.useState)([]),e=Object(v.a)(t,2),n=e[0],c=e[1],r=window.walletConnection.account();Object(a.useEffect)((function(){y().then((function(t){c(t)})).catch((function(t){console.log(t)}))}),[]);var o=function(){var t=Object(i.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=document.getElementById("amount-input-".concat(e)).value,I({causeIndex:e,amount:h.utils.format.parseNearAmount(n+"")}).then((function(t){y()})).catch((function(t){console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(N.a,{sx:{py:8},maxWidth:"xl",children:n.length>0?Object(b.jsx)(S.a,{container:!0,spacing:4,children:n.map((function(t,e){return Object(b.jsx)(S.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(b.jsxs)(U.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(b.jsx)(A.a,{component:"img",image:t.image,alt:"",sx:{maxHeight:"140px"}}),Object(b.jsxs)(E.a,{sx:{flexGrow:1,paddingBottom:1},children:[Object(b.jsx)(f.a,{variant:"h6",children:t.name}),Object(b.jsx)(f.a,{variant:"body2",paragraph:!0,children:t.description}),Object(b.jsxs)(f.a,{variant:"subtitle2",children:["Total received: ",Object(b.jsxs)("b",{children:[h.utils.format.formatNearAmount(t.amount)," NEAR"]})]})]}),Object(b.jsxs)(B.a,{sx:{flexDirection:"column"},children:[Object(b.jsx)(F.a,{fullWidth:!0,inputProps:{inputMode:"numeric",pattern:"[0-9]*"},id:"amount-input-".concat(e),defaultValue:"1",size:"small",endAdornment:Object(b.jsx)(L.a,{position:"end",children:"NEAR"}),sx:{marginBottom:1},type:"number",onChange:function(t){t.target.value<1&&(t.target.value=1)}}),Object(b.jsx)(g.a,{size:"small",fullWidth:!0,variant:"contained",onClick:function(){o(e)},disabled:r.accountId===t.beneficiary||!r.accountId,children:"Support cause"})]})]})},e)}))}):Object(b.jsx)(N.a,{sx:{py:8},maxWidth:"md",children:Object(b.jsx)(f.a,{children:"No causes added yet"})})})})};var G=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsx)(W,{})]})},M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,217)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};window.nearInitPromise=function(){return j.apply(this,arguments)}().then((function(){o.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(G,{})}))})).catch(console.error),M()}},[[178,1,2]]]);
//# sourceMappingURL=main.752fc6aa.chunk.js.map