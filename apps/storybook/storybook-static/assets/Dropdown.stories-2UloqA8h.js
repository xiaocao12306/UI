import{j as c}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{D as T}from"./DismissableLayer-0Dn_Gr2D.js";import{B as O}from"./Button-Hgh0jeno.js";function p(l,r,f){var i;if(l.length===0)return-1;let d=r;for(let b=0;b<l.length;b+=1)if(d=(d+f+l.length)%l.length,!((i=l[d])!=null&&i.disabled))return d;return-1}function q({label:l,items:r,open:f,defaultOpen:d,onOpenChange:i}){const[b,N]=s.useState(d??!1),[y,n]=s.useState(-1),m=s.useRef(null),w=s.useRef([]),D=s.useId(),v=f!==void 0,o=v?f:b,u=s.useCallback(e=>{v||N(e),i==null||i(e)},[v,i]);return s.useEffect(()=>{if(!o){n(-1);return}const e=r.findIndex(a=>!a.disabled);n(e)},[o,r]),s.useEffect(()=>{var e;!o||y<0||(e=w.current[y])==null||e.focus()},[y,o]),c.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[c.jsx(O,{ref:m,variant:"outline","aria-haspopup":"menu","aria-expanded":o,"aria-controls":D,onClick:()=>u(!o),onKeyDown:e=>{if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault(),o||u(!0);const a=e.key==="ArrowDown"?p(r,-1,1):p(r,0,-1);n(a)},children:l}),o?c.jsx(T,{onDismiss:()=>{var e;u(!1),(e=m.current)==null||e.focus()},children:c.jsx("ul",{id:D,role:"menu","aria-orientation":"vertical",style:{position:"absolute",top:"calc(100% + 6px)",left:0,margin:0,padding:6,listStyle:"none",minWidth:200,borderRadius:"var(--aurora-radius-md)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-overlay)",boxShadow:"var(--aurora-shadow-md)",zIndex:1200},onKeyDown:e=>{var a;if(e.key==="Escape"){e.preventDefault(),u(!1),(a=m.current)==null||a.focus();return}if(e.key==="ArrowDown"){e.preventDefault(),n(t=>p(r,t<0?-1:t,1));return}if(e.key==="ArrowUp"){e.preventDefault(),n(t=>p(r,t<0?0:t,-1));return}if(e.key==="Home"){e.preventDefault(),n(p(r,-1,1));return}if(e.key==="End"){e.preventDefault(),n(p(r,0,-1));return}e.key==="Tab"&&u(!1)},children:r.map((e,a)=>{const t=a===y;return c.jsx("li",{role:"none",children:c.jsx("button",{ref:k=>{w.current[a]=k},role:"menuitem",type:"button",disabled:e.disabled,tabIndex:t?0:-1,"aria-disabled":e.disabled||void 0,onMouseEnter:()=>{e.disabled||n(a)},onClick:()=>{var k,R;e.disabled||((k=e.onSelect)==null||k.call(e),u(!1),(R=m.current)==null||R.focus())},style:{width:"100%",textAlign:"left",border:0,background:t?"color-mix(in srgb, var(--aurora-accent-default) 12%, transparent)":"transparent",padding:"8px 10px",borderRadius:8,cursor:e.disabled?"not-allowed":"pointer",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)"},children:e.label})},e.key)})})}):null]})}q.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"DropdownItem[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const _=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],J={title:"Overlay/Dropdown",component:q,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:_}},x={},g={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}};var A,h,E;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(E=(h=x.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var I,j,S;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Project Menu",
    items: [{
      key: "view",
      label: "View details"
    }, {
      key: "copy",
      label: "Copy link"
    }, {
      key: "tag",
      label: "Add tag"
    }, {
      key: "export",
      label: "Export JSON"
    }, {
      key: "remove",
      label: "Remove",
      disabled: true
    }]
  }
}`,...(S=(j=g.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const K=["Default","DenseActions"];export{x as Default,g as DenseActions,K as __namedExportsOrder,J as default};
