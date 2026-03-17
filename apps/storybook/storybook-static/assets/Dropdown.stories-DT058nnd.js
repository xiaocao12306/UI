import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{D as X}from"./DismissableLayer-0Dn_Gr2D.js";import{B as Y}from"./Button-Hgh0jeno.js";import{within as E,userEvent as y,expect as m}from"./index-DgAF9SIF.js";function f(a,n,t){var p;if(a.length===0)return-1;let r=n;for(let i=0;i<a.length;i+=1)if(r=(r+t+a.length)%a.length,!((p=a[r])!=null&&p.disabled))return r;return-1}function Z(a){return typeof a.textValue=="string"?a.textValue.trim():typeof a.label=="string"?a.label.trim():""}function $(a,n,t){if(a.length===0||t.length===0)return-1;const r=t.toLowerCase();for(let p=1;p<=a.length;p+=1){const i=(n+p+a.length)%a.length,w=a[i];if(!(!w||w.disabled)&&Z(w).toLowerCase().startsWith(r))return i}return-1}function I({label:a,triggerAriaLabel:n,items:t,open:r,defaultOpen:p,onOpenChange:i}){const[w,G]=c.useState(p??!1),[b,d]=c.useState(-1),v=c.useRef(null),T=c.useRef([]),S=c.useId(),j=c.useId(),A=r!==void 0,u=A?r:w,g=c.useCallback(e=>{A||G(e),i==null||i(e)},[A,i]);return c.useEffect(()=>{if(!u){d(-1);return}const e=t.findIndex(l=>!l.disabled);d(e)},[u,t]),c.useEffect(()=>{var e;!u||b<0||(e=T.current[b])==null||e.focus()},[b,u]),s.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[s.jsx(Y,{id:S,ref:v,variant:"outline","aria-label":n,"aria-haspopup":"menu","aria-expanded":u,"aria-controls":u?j:void 0,onClick:()=>g(!u),onKeyDown:e=>{if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault(),u||g(!0);const l=e.key==="ArrowDown"?f(t,-1,1):f(t,0,-1);d(l)},children:a}),u?s.jsx(X,{onDismiss:()=>{var e;g(!1),(e=v.current)==null||e.focus()},children:s.jsx("ul",{id:j,role:"menu","aria-labelledby":S,"aria-orientation":"vertical",style:{position:"absolute",top:"calc(100% + 6px)",left:0,margin:0,padding:6,listStyle:"none",minWidth:200,borderRadius:"var(--aurora-radius-md)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-overlay)",boxShadow:"var(--aurora-shadow-md)",zIndex:"var(--aurora-z-overlay)"},onKeyDown:e=>{var l;if(e.key==="Escape"){e.preventDefault(),g(!1),(l=v.current)==null||l.focus();return}if(e.key==="ArrowDown"){e.preventDefault(),d(o=>f(t,o<0?-1:o,1));return}if(e.key==="ArrowUp"){e.preventDefault(),d(o=>f(t,o<0?0:o,-1));return}if(e.key==="Home"){e.preventDefault(),d(f(t,-1,1));return}if(e.key==="End"){e.preventDefault(),d(f(t,0,-1));return}if(e.key==="Tab"){g(!1);return}if(e.key.length===1&&!e.altKey&&!e.ctrlKey&&!e.metaKey){const o=$(t,b<0?-1:b,e.key);o>=0&&(e.preventDefault(),d(o))}},children:t.map((e,l)=>{const o=l===b;return s.jsx("li",{role:"none",children:s.jsx("button",{ref:k=>{T.current[l]=k},role:"menuitem",type:"button",disabled:e.disabled,tabIndex:o?0:-1,"aria-disabled":e.disabled||void 0,onMouseEnter:()=>{e.disabled||d(l)},onClick:()=>{var k,q;e.disabled||((k=e.onSelect)==null||k.call(e),g(!1),(q=v.current)==null||q.focus())},style:{width:"100%",textAlign:"left",border:0,background:o?"color-mix(in srgb, var(--aurora-accent-default) 12%, transparent)":"transparent",padding:"8px 10px",borderRadius:8,cursor:e.disabled?"not-allowed":"pointer",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)"},children:e.label})},e.key)})})}):null]})}I.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerAriaLabel:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"DropdownItem[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const W=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],se={title:"Overlay/Dropdown",component:I,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:W}},x={},D={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},R={args:{label:"⋯",triggerAriaLabel:"More actions",items:W},play:async({canvasElement:a})=>{const n=E(a);await y.click(await n.findByRole("button",{name:"More actions"})),await m(n.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}};function ee(){const[a,n]=c.useState("none"),t=[{key:"duplicate",label:"Duplicate",onSelect:()=>n("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>n("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>n("Delete")}];return s.jsxs("div",{style:{display:"grid",gap:8},children:[s.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Selected action: ",s.jsx("strong",{children:a})]}),s.jsx(I,{label:"Release Actions",items:t})]})}const h={render:()=>s.jsx(ee,{}),play:async({canvasElement:a})=>{const n=E(a),t=await n.findByRole("button",{name:"Release Actions"});await y.click(t),await m(n.getByRole("menu")).toBeInTheDocument(),await y.keyboard("{End}"),await m(n.getByRole("menuitem",{name:"Delete"})).toHaveFocus(),await y.keyboard("{Enter}"),await m(n.queryByRole("menu")).not.toBeInTheDocument(),await m(n.getByText("Delete")).toBeInTheDocument(),t.focus(),await y.keyboard("{ArrowDown}"),await m(n.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}},B={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"rename",label:"Rename"}]},play:async({canvasElement:a})=>{const n=E(a),t=await n.findByRole("button",{name:"Quick Actions"});await y.click(t);const r=n.getByRole("menu");await y.keyboard("a"),await m(n.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await y.keyboard("r"),await m(n.getByRole("menuitem",{name:"Rename"})).toHaveFocus(),await m(r).toBeInTheDocument()}};var N,H,M;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(M=(H=x.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var F,L,V;D.parameters={...D.parameters,docs:{...(F=D.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(L=D.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var K,C,O;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(O=(C=R.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var Q,_,z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(z=(_=h.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var J,P,U;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
    await userEvent.keyboard("r");
    await expect(canvas.getByRole("menuitem", {
      name: "Rename"
    })).toHaveFocus();
    await expect(menu).toBeInTheDocument();
  }
}`,...(U=(P=B.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const ie=["Default","DenseActions","IconTrigger","SelectionTelemetry","TypeaheadNavigation"];export{x as Default,D as DenseActions,R as IconTrigger,h as SelectionTelemetry,B as TypeaheadNavigation,ie as __namedExportsOrder,se as default};
