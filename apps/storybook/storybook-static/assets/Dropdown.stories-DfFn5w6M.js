import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{D as oe}from"./DismissableLayer-0Dn_Gr2D.js";import{B as se}from"./Button-Hgh0jeno.js";import{within as F,userEvent as u,expect as l}from"./index-DgAF9SIF.js";function w(a,n,t){var p;if(a.length===0)return-1;let r=n;for(let d=0;d<a.length;d+=1)if(r=(r+t+a.length)%a.length,!((p=a[r])!=null&&p.disabled))return r;return-1}function ie(a){return typeof a.textValue=="string"?a.textValue.trim():typeof a.label=="string"?a.label.trim():""}function N(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function le(a,n,t,r=500){return t>r||a.length===0||a.length===1&&a===n?n:`${a}${n}`}function K(a,n,t){if(a.length===0||t.length===0)return-1;const r=N(t);for(let p=1;p<=a.length;p+=1){const d=(n+p+a.length)%a.length,v=a[d];if(!(!v||v.disabled)&&N(ie(v)).startsWith(r))return d}return-1}function S({label:a,triggerAriaLabel:n,items:t,open:r,defaultOpen:p,onOpenChange:d}){const[v,re]=c.useState(p??!1),[g,m]=c.useState(-1),R=c.useRef(null),P=c.useRef([]),k=c.useRef({query:"",timestamp:0}),M=c.useId(),V=c.useId(),j=r!==void 0,y=j?r:v,f=c.useCallback(e=>{j||re(e),d==null||d(e)},[j,d]);return c.useEffect(()=>{if(!y){m(-1),k.current={query:"",timestamp:0};return}const e=t.findIndex(s=>!s.disabled);m(e)},[y,t]),c.useEffect(()=>{var e;!y||g<0||(e=P.current[g])==null||e.focus()},[g,y]),o.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[o.jsx(se,{id:M,ref:R,variant:"outline","aria-label":n,"aria-haspopup":"menu","aria-expanded":y,"aria-controls":y?V:void 0,onClick:()=>f(!y),onKeyDown:e=>{if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault(),y||f(!0);const s=e.key==="ArrowDown"?w(t,-1,1):w(t,0,-1);m(s)},children:a}),y?o.jsx(oe,{onEscapeKeyDown:e=>{var s;e.defaultPrevented||(e.preventDefault(),f(!1),(s=R.current)==null||s.focus())},onPointerDownOutside:e=>{e.defaultPrevented||f(!1)},children:o.jsx("ul",{id:V,role:"menu","aria-labelledby":M,"aria-orientation":"vertical",style:{position:"absolute",top:"calc(100% + 6px)",left:0,margin:0,padding:6,listStyle:"none",minWidth:200,borderRadius:"var(--aurora-radius-md)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-overlay)",boxShadow:"var(--aurora-shadow-md)",zIndex:"var(--aurora-z-overlay)"},onKeyDown:e=>{var s;if(e.key==="Escape"){e.preventDefault(),f(!1),(s=R.current)==null||s.focus();return}if(e.key==="ArrowDown"){e.preventDefault(),m(i=>w(t,i<0?-1:i,1));return}if(e.key==="ArrowUp"){e.preventDefault(),m(i=>w(t,i<0?0:i,-1));return}if(e.key==="Home"){e.preventDefault(),m(w(t,-1,1));return}if(e.key==="End"){e.preventDefault(),m(w(t,0,-1));return}if(e.key==="Tab"){f(!1);return}if(e.key.length===1&&!e.altKey&&!e.ctrlKey&&!e.metaKey){const i=N(e.key);if(i.length===0)return;const b=Date.now(),D=b-k.current.timestamp,q=le(k.current.query,i,D);k.current={query:q,timestamp:b};let x=K(t,g<0?-1:g,q);x<0&&q.length>1&&(x=K(t,g<0?-1:g,i),x>=0&&(k.current={query:i,timestamp:b})),x>=0&&(e.preventDefault(),m(x))}},children:t.map((e,s)=>{const i=s===g;return o.jsx("li",{role:"none",children:o.jsx("button",{ref:b=>{P.current[s]=b},role:"menuitem",type:"button",disabled:e.disabled,tabIndex:i?0:-1,"aria-disabled":e.disabled||void 0,onMouseEnter:()=>{e.disabled||m(s)},onClick:()=>{var b,D;e.disabled||((b=e.onSelect)==null||b.call(e),f(!1),(D=R.current)==null||D.focus())},style:{width:"100%",textAlign:"left",border:0,background:i?"color-mix(in srgb, var(--aurora-accent-default) 12%, transparent)":"transparent",padding:"8px 10px",borderRadius:8,cursor:e.disabled?"not-allowed":"pointer",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)"},children:e.label})},e.key)})})}):null]})}S.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerAriaLabel:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"DropdownItem[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const H=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],ge={title:"Overlay/Dropdown",component:S,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:H}},h={},B={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},T={args:{label:"⋯",triggerAriaLabel:"More actions",items:H},play:async({canvasElement:a})=>{const n=F(a);await u.click(await n.findByRole("button",{name:"More actions"})),await l(n.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}};function ce(){const[a,n]=c.useState("none"),t=[{key:"duplicate",label:"Duplicate",onSelect:()=>n("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>n("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>n("Delete")}];return o.jsxs("div",{style:{display:"grid",gap:8},children:[o.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Selected action: ",o.jsx("strong",{children:a})]}),o.jsx(S,{label:"Release Actions",items:t})]})}const E={render:()=>o.jsx(ce,{}),play:async({canvasElement:a})=>{const n=F(a),t=await n.findByRole("button",{name:"Release Actions"});await u.click(t),await l(n.getByRole("menu")).toBeInTheDocument(),await u.keyboard("{End}"),await l(n.getByRole("menuitem",{name:"Delete"})).toHaveFocus(),await u.keyboard("{Enter}"),await l(n.queryByRole("menu")).not.toBeInTheDocument(),await l(n.getByText("Delete")).toBeInTheDocument(),t.focus(),await u.keyboard("{ArrowDown}"),await l(n.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}},A={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:a})=>{const n=F(a),t=await n.findByRole("button",{name:"Quick Actions"});await u.click(t);const r=n.getByRole("menu");await u.keyboard("a"),await l(n.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await u.keyboard("a"),await l(n.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await u.keyboard("res"),await l(n.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await l(r).toBeInTheDocument()}},I={render:()=>o.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[o.jsx(S,{label:"Focus Policy",items:H}),o.jsx("button",{type:"button",children:"Next Focus Target"})]}),play:async({canvasElement:a})=>{const n=F(a),t=await n.findByRole("button",{name:"Focus Policy"});await u.click(t),await l(n.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const r=n.getByRole("button",{name:"Next Focus Target"});await u.click(r),await l(n.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await l(r).toHaveFocus()}};var O,z,L;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:"{}",...(L=(z=h.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var _,Q,J;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(J=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var U,W,$;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(W=T.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var C,G,X;E.parameters={...E.parameters,docs:{...(C=E.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(X=(G=E.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Y,Z,ee;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,te;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gap: 12,
    justifyItems: "start"
  }}>
      <Dropdown label="Focus Policy" items={items} />
      <button type="button">Next Focus Target</button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole("button", {
      name: "Focus Policy"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu", {
      name: "Focus Policy"
    })).toBeInTheDocument();
    const outsideTarget = canvas.getByRole("button", {
      name: "Next Focus Target"
    });
    await userEvent.click(outsideTarget);
    await expect(canvas.queryByRole("menu", {
      name: "Focus Policy"
    })).not.toBeInTheDocument();
    await expect(outsideTarget).toHaveFocus();
  }
}`,...(te=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const be=["Default","DenseActions","IconTrigger","SelectionTelemetry","TypeaheadNavigation","OutsideDismissFocusTransfer"];export{h as Default,B as DenseActions,T as IconTrigger,I as OutsideDismissFocusTransfer,E as SelectionTelemetry,A as TypeaheadNavigation,be as __namedExportsOrder,ge as default};
