import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{D as ae}from"./DismissableLayer-0Dn_Gr2D.js";import{B as ne}from"./Button-Hgh0jeno.js";import{within as j,userEvent as y,expect as u}from"./index-DgAF9SIF.js";function w(a,n,t){var p;if(a.length===0)return-1;let r=n;for(let l=0;l<a.length;l+=1)if(r=(r+t+a.length)%a.length,!((p=a[r])!=null&&p.disabled))return r;return-1}function te(a){return typeof a.textValue=="string"?a.textValue.trim():typeof a.label=="string"?a.label.trim():""}function q(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function re(a,n,t,r=500){return t>r||a.length===0||a.length===1&&a===n?n:`${a}${n}`}function V(a,n,t){if(a.length===0||t.length===0)return-1;const r=q(t);for(let p=1;p<=a.length;p+=1){const l=(n+p+a.length)%a.length,v=a[l];if(!(!v||v.disabled)&&q(te(v)).startsWith(r))return l}return-1}function N({label:a,triggerAriaLabel:n,items:t,open:r,defaultOpen:p,onOpenChange:l}){const[v,ee]=s.useState(p??!1),[b,d]=s.useState(-1),R=s.useRef(null),H=s.useRef([]),k=s.useRef({query:"",timestamp:0}),F=s.useId(),M=s.useId(),I=r!==void 0,m=I?r:v,f=s.useCallback(e=>{I||ee(e),l==null||l(e)},[I,l]);return s.useEffect(()=>{if(!m){d(-1),k.current={query:"",timestamp:0};return}const e=t.findIndex(c=>!c.disabled);d(e)},[m,t]),s.useEffect(()=>{var e;!m||b<0||(e=H.current[b])==null||e.focus()},[b,m]),i.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[i.jsx(ne,{id:F,ref:R,variant:"outline","aria-label":n,"aria-haspopup":"menu","aria-expanded":m,"aria-controls":m?M:void 0,onClick:()=>f(!m),onKeyDown:e=>{if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault(),m||f(!0);const c=e.key==="ArrowDown"?w(t,-1,1):w(t,0,-1);d(c)},children:a}),m?i.jsx(ae,{onDismiss:()=>{var e;f(!1),(e=R.current)==null||e.focus()},children:i.jsx("ul",{id:M,role:"menu","aria-labelledby":F,"aria-orientation":"vertical",style:{position:"absolute",top:"calc(100% + 6px)",left:0,margin:0,padding:6,listStyle:"none",minWidth:200,borderRadius:"var(--aurora-radius-md)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-overlay)",boxShadow:"var(--aurora-shadow-md)",zIndex:"var(--aurora-z-overlay)"},onKeyDown:e=>{var c;if(e.key==="Escape"){e.preventDefault(),f(!1),(c=R.current)==null||c.focus();return}if(e.key==="ArrowDown"){e.preventDefault(),d(o=>w(t,o<0?-1:o,1));return}if(e.key==="ArrowUp"){e.preventDefault(),d(o=>w(t,o<0?0:o,-1));return}if(e.key==="Home"){e.preventDefault(),d(w(t,-1,1));return}if(e.key==="End"){e.preventDefault(),d(w(t,0,-1));return}if(e.key==="Tab"){f(!1);return}if(e.key.length===1&&!e.altKey&&!e.ctrlKey&&!e.metaKey){const o=q(e.key);if(o.length===0)return;const g=Date.now(),D=g-k.current.timestamp,S=re(k.current.query,o,D);k.current={query:S,timestamp:g};let x=V(t,b<0?-1:b,S);x<0&&S.length>1&&(x=V(t,b<0?-1:b,o),x>=0&&(k.current={query:o,timestamp:g})),x>=0&&(e.preventDefault(),d(x))}},children:t.map((e,c)=>{const o=c===b;return i.jsx("li",{role:"none",children:i.jsx("button",{ref:g=>{H.current[c]=g},role:"menuitem",type:"button",disabled:e.disabled,tabIndex:o?0:-1,"aria-disabled":e.disabled||void 0,onMouseEnter:()=>{e.disabled||d(c)},onClick:()=>{var g,D;e.disabled||((g=e.onSelect)==null||g.call(e),f(!1),(D=R.current)==null||D.focus())},style:{width:"100%",textAlign:"left",border:0,background:o?"color-mix(in srgb, var(--aurora-accent-default) 12%, transparent)":"transparent",padding:"8px 10px",borderRadius:8,cursor:e.disabled?"not-allowed":"pointer",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)"},children:e.label})},e.key)})})}):null]})}N.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerAriaLabel:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"DropdownItem[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const Z=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],de={title:"Overlay/Dropdown",component:N,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:Z}},h={},A={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},B={args:{label:"⋯",triggerAriaLabel:"More actions",items:Z},play:async({canvasElement:a})=>{const n=j(a);await y.click(await n.findByRole("button",{name:"More actions"})),await u(n.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}};function oe(){const[a,n]=s.useState("none"),t=[{key:"duplicate",label:"Duplicate",onSelect:()=>n("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>n("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>n("Delete")}];return i.jsxs("div",{style:{display:"grid",gap:8},children:[i.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Selected action: ",i.jsx("strong",{children:a})]}),i.jsx(N,{label:"Release Actions",items:t})]})}const E={render:()=>i.jsx(oe,{}),play:async({canvasElement:a})=>{const n=j(a),t=await n.findByRole("button",{name:"Release Actions"});await y.click(t),await u(n.getByRole("menu")).toBeInTheDocument(),await y.keyboard("{End}"),await u(n.getByRole("menuitem",{name:"Delete"})).toHaveFocus(),await y.keyboard("{Enter}"),await u(n.queryByRole("menu")).not.toBeInTheDocument(),await u(n.getByText("Delete")).toBeInTheDocument(),t.focus(),await y.keyboard("{ArrowDown}"),await u(n.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}},T={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:a})=>{const n=j(a),t=await n.findByRole("button",{name:"Quick Actions"});await y.click(t);const r=n.getByRole("menu");await y.keyboard("a"),await u(n.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await y.keyboard("a"),await u(n.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await y.keyboard("res"),await u(n.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await u(r).toBeInTheDocument()}};var z,K,L;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(L=(K=h.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var O,_,Q;A.parameters={...A.parameters,docs:{...(O=A.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(Q=(_=A.parameters)==null?void 0:_.docs)==null?void 0:Q.source}}};var J,P,U;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    label: "⋯",
    triggerAriaLabel: "More actions",
    items
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "More actions"
    }));
    await expect(canvas.getByRole("menu", {
      name: "More actions"
    })).toBeInTheDocument();
  }
}`,...(U=(P=B.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var W,$,C;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <SelectionTelemetryDropdown />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Release Actions"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu")).toBeInTheDocument();
    await userEvent.keyboard("{End}");
    await expect(canvas.getByRole("menuitem", {
      name: "Delete"
    })).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.queryByRole("menu")).not.toBeInTheDocument();
    await expect(canvas.getByText("Delete")).toBeInTheDocument();
    trigger.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(canvas.getByRole("menuitem", {
      name: "Duplicate"
    })).toHaveFocus();
  }
}`,...(C=($=E.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var G,X,Y;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: "Quick Actions",
    items: [{
      key: "duplicate",
      label: "Duplicate"
    }, {
      key: "archive",
      label: "Archive",
      disabled: true
    }, {
      key: "add-note",
      label: "Add note"
    }, {
      key: "assign",
      label: "Assign"
    }, {
      key: "resume",
      label: "Resume card",
      textValue: "Résumé"
    }, {
      key: "rename",
      label: "Rename"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Quick Actions"
    });
    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu");
    await userEvent.keyboard("a");
    await expect(canvas.getByRole("menuitem", {
      name: "Add note"
    })).toHaveFocus();
    await userEvent.keyboard("a");
    await expect(canvas.getByRole("menuitem", {
      name: "Assign"
    })).toHaveFocus();
    await userEvent.keyboard("res");
    await expect(canvas.getByRole("menuitem", {
      name: "Resume card"
    })).toHaveFocus();
    await expect(menu).toBeInTheDocument();
  }
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const me=["Default","DenseActions","IconTrigger","SelectionTelemetry","TypeaheadNavigation"];export{h as Default,A as DenseActions,B as IconTrigger,E as SelectionTelemetry,T as TypeaheadNavigation,me as __namedExportsOrder,de as default};
