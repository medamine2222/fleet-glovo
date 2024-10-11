import{d as m,a as p,_ as B,o as i,c as u,l as c,k as d,r as $,q as g,I as S,C as w,i as G,j as L,h as T,e as k,n as b,G as O}from"./index-TJS2hmaO.js";import{G as v}from"./GButton-matszJm_.js";import{S as z}from"./GLoadingSpinner-UW9luGs8.js";const E=m({name:"GBackdrop",owner:p.Teams.C3PLS,props:{show:{type:Boolean,default:!0}}}),M={key:0,"aria-label":"backdrop",class:"backdrop"};function P(e,o,t,n,s,r){return e.show?(i(),u("div",M,[c(e.$slots,"default",{},void 0,!0)])):d("",!0)}const q=B(E,[["render",P],["__scopeId","data-v-69367533"]]),I=m({name:"GModal",owner:p.Teams.C3PLS,components:{GBackdrop:q},props:{isOpen:{type:Boolean,default:!0},showCloseButton:{type:Boolean,default:!0},fullScreen:{type:Boolean,default:!1},size:{type:String,default:z.s},overlayClose:{type:Boolean,default:!0}},emits:["onClose"],setup(e,{emit:o}){const t=$(),n=$(e.isOpen);let s;const r=()=>{var a;return(a=t.value)==null?void 0:a.focus()},f=()=>{var a,C,y;(C=(a=t.value)==null?void 0:a.parentElement)==null||C.classList.add("hide"),(y=t.value)==null||y.classList.add("hide"),s=setTimeout(()=>n.value=!1,300)};g(()=>e.isOpen,a=>{if(s&&clearTimeout(s),!a){f();return}n.value=!0,setTimeout(r)});const l=()=>{o("onClose")},_=a=>{!n.value||a.key!=="Escape"||l()};return S(()=>{r(),document.addEventListener("keydown",_)}),w(()=>{s&&clearTimeout(s),s=null,document.removeEventListener("keydown",_)}),{shouldOpen:n,dialogRef:t,close:l}}}),j={class:"modal__content"},D={key:0,class:"modal__slot"},N={key:1,class:"modal__slot"},R={key:2,class:"modal__slot"};function V(e,o,t,n,s,r){const f=T("GBackdrop");return e.shouldOpen?(i(),G(f,{key:0,onClick:o[2]||(o[2]=l=>e.overlayClose&&e.close())},{default:L(()=>[k("dialog",{ref:"dialogRef","aria-label":"dialog",class:b(["modal__dialog",e.fullScreen?"modal__fullscreen-size":`modal__${e.size}-size`]),tabindex:"0",onClick:o[1]||(o[1]=l=>l.stopPropagation())},[e.showCloseButton?(i(),u("span",{key:0,"aria-label":"cross",class:"modal__cross",onClick:o[0]||(o[0]=(...l)=>e.close&&e.close(...l))})):d("",!0),k("div",j,[e.$slots.header?(i(),u("div",D,[c(e.$slots,"header")])):d("",!0),e.$slots.body?(i(),u("div",N,[c(e.$slots,"body",{close:e.close})])):d("",!0),e.$slots.footer?(i(),u("div",R,[c(e.$slots,"footer",{close:e.close})])):d("",!0)])],2)]),_:3})):d("",!0)}const h=B(I,[["render",V]]),F=m({name:"GConfirmationModal",owner:p.Teams.C3PLS,components:{GButton:v,GModal:h},props:{title:{type:String,required:!0},message:String,confirmButton:Object,cancelButton:Object},setup(e){var t,n;const o=s=>async r=>{s==null||s(),r()};return{handleCancel:o((t=e.cancelButton)==null?void 0:t.onClick),handleConfirm:o((n=e.confirmButton)==null?void 0:n.onClick)}}}),H=m({name:"GInfoModal",owner:p.Teams.C3PLS,components:{GButton:v,GIcon:O,GModal:h},props:{type:{type:String,required:!0},title:{type:String,required:!0},message:String}});export{q as G,F as _,h as a,H as b};
