import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{P as le}from"./Popover-DGAvuI1O.js";import{D as ue}from"./DismissableLayer-B4f576w9.js";import{B as de}from"./Button-Hgh0jeno.js";import{within as R,userEvent as i,expect as o}from"./index-DgAF9SIF.js";function w(a,n,t){var p;if(a.length===0)return-1;let s=n;for(let d=0;d<a.length;d+=1)if(s=(s+t+a.length)%a.length,!((p=a[s])!=null&&p.disabled))return s;return-1}function me(a){return typeof a.textValue=="string"?a.textValue.trim():typeof a.label=="string"?a.label.trim():""}function N(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function ye(a,n,t,s=500){return t>s||a.length===0||a.length===1&&a===n?n:`${a}${n}`}function K(a,n,t){if(a.length===0||t.length===0)return-1;const s=N(t);for(let p=1;p<=a.length;p+=1){const d=(n+p+a.length)%a.length,f=a[d];if(!(!f||f.disabled)&&N(me(f)).startsWith(s))return d}return-1}function D({label:a,triggerAriaLabel:n,items:t,open:s,defaultOpen:p,onOpenChange:d}){const[f,ce]=u.useState(p??!1),[g,m]=u.useState(-1),h=u.useRef(null),O=u.useRef([]),k=u.useRef({query:"",timestamp:0}),M=u.useId(),V=u.useId(),P=s!==void 0,y=P?s:f,v=u.useCallback(e=>{P||ce(e),d==null||d(e)},[P,d]);return u.useEffect(()=>{if(!y){m(-1),k.current={query:"",timestamp:0};return}const e=t.findIndex(c=>!c.disabled);m(e)},[y,t]),u.useEffect(()=>{var e;!y||g<0||(e=O.current[g])==null||e.focus()},[g,y]),r.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[r.jsx(de,{id:M,ref:h,variant:"outline","aria-label":n,"aria-haspopup":"menu","aria-expanded":y,"aria-controls":y?V:void 0,onClick:()=>v(!y),onKeyDown:e=>{if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault(),y||v(!0);const c=e.key==="ArrowDown"?w(t,-1,1):w(t,0,-1);m(c)},children:a}),y?r.jsx(ue,{onEscapeKeyDown:e=>{var c;e.defaultPrevented||(e.preventDefault(),v(!1),(c=h.current)==null||c.focus())},onPointerDownOutside:e=>{e.defaultPrevented||v(!1)},children:r.jsx("ul",{id:V,role:"menu","aria-labelledby":M,"aria-orientation":"vertical",style:{position:"absolute",top:"calc(100% + 6px)",left:0,margin:0,padding:6,listStyle:"none",minWidth:200,borderRadius:"var(--aurora-radius-md)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-overlay)",boxShadow:"var(--aurora-shadow-md)",zIndex:"var(--aurora-z-overlay)"},onKeyDown:e=>{var c;if(e.key==="Escape"){e.preventDefault(),v(!1),(c=h.current)==null||c.focus();return}if(e.key==="ArrowDown"){e.preventDefault(),m(l=>w(t,l<0?-1:l,1));return}if(e.key==="ArrowUp"){e.preventDefault(),m(l=>w(t,l<0?0:l,-1));return}if(e.key==="Home"){e.preventDefault(),m(w(t,-1,1));return}if(e.key==="End"){e.preventDefault(),m(w(t,0,-1));return}if(e.key==="Tab"){v(!1);return}if(e.key.length===1&&!e.altKey&&!e.ctrlKey&&!e.metaKey){const l=N(e.key);if(l.length===0)return;const b=Date.now(),B=b-k.current.timestamp,q=ye(k.current.query,l,B);k.current={query:q,timestamp:b};let x=K(t,g<0?-1:g,q);x<0&&q.length>1&&(x=K(t,g<0?-1:g,l),x>=0&&(k.current={query:l,timestamp:b})),x>=0&&(e.preventDefault(),m(x))}},children:t.map((e,c)=>{const l=c===g;return r.jsx("li",{role:"none",children:r.jsx("button",{ref:b=>{O.current[c]=b},role:"menuitem",type:"button",disabled:e.disabled,tabIndex:l?0:-1,"aria-disabled":e.disabled||void 0,onMouseEnter:()=>{e.disabled||m(c)},onClick:()=>{var b,B;e.disabled||((b=e.onSelect)==null||b.call(e),v(!1),(B=h.current)==null||B.focus())},style:{width:"100%",textAlign:"left",border:0,background:l?"color-mix(in srgb, var(--aurora-accent-default) 12%, transparent)":"transparent",padding:"8px 10px",borderRadius:8,cursor:e.disabled?"not-allowed":"pointer",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)"},children:e.label})},e.key)})})}):null]})}D.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerAriaLabel:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  textValue?: string;
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"textValue",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"DropdownItem[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const H=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],xe={title:"Overlay/Dropdown",component:D,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:H}},T={},I={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},E={args:{label:"⋯",triggerAriaLabel:"More actions",items:H},play:async({canvasElement:a})=>{const n=R(a);await i.click(await n.findByRole("button",{name:"More actions"})),await o(n.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}};function pe(){const[a,n]=u.useState("none"),t=[{key:"duplicate",label:"Duplicate",onSelect:()=>n("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>n("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>n("Delete")}];return r.jsxs("div",{style:{display:"grid",gap:8},children:[r.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Selected action: ",r.jsx("strong",{children:a})]}),r.jsx(D,{label:"Release Actions",items:t})]})}const A={render:()=>r.jsx(pe,{}),play:async({canvasElement:a})=>{const n=R(a),t=await n.findByRole("button",{name:"Release Actions"});await i.click(t),await o(n.getByRole("menu")).toBeInTheDocument(),await i.keyboard("{End}"),await o(n.getByRole("menuitem",{name:"Delete"})).toHaveFocus(),await i.keyboard("{Enter}"),await o(n.queryByRole("menu")).not.toBeInTheDocument(),await o(n.getByText("Delete")).toBeInTheDocument(),t.focus(),await i.keyboard("{ArrowDown}"),await o(n.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}},F={args:{label:"Quick Actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive",disabled:!0},{key:"add-note",label:"Add note"},{key:"assign",label:"Assign"},{key:"resume",label:"Resume card",textValue:"Résumé"},{key:"rename",label:"Rename"}]},play:async({canvasElement:a})=>{const n=R(a),t=await n.findByRole("button",{name:"Quick Actions"});await i.click(t);const s=n.getByRole("menu");await i.keyboard("a"),await o(n.getByRole("menuitem",{name:"Add note"})).toHaveFocus(),await i.keyboard("a"),await o(n.getByRole("menuitem",{name:"Assign"})).toHaveFocus(),await i.keyboard("res"),await o(n.getByRole("menuitem",{name:"Resume card"})).toHaveFocus(),await o(s).toBeInTheDocument()}},S={render:()=>r.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"start"},children:[r.jsx(D,{label:"Focus Policy",items:H}),r.jsx("button",{type:"button",children:"Next Focus Target"})]}),play:async({canvasElement:a})=>{const n=R(a),t=await n.findByRole("button",{name:"Focus Policy"});await i.click(t),await o(n.getByRole("menu",{name:"Focus Policy"})).toBeInTheDocument();const s=n.getByRole("button",{name:"Next Focus Target"});await i.click(s),await o(n.queryByRole("menu",{name:"Focus Policy"})).not.toBeInTheDocument(),await o(s).toHaveFocus()}},j={render:()=>r.jsx(le,{triggerLabel:"Open container",children:r.jsxs("div",{style:{display:"grid",gap:8},children:[r.jsx("p",{style:{margin:0},children:"Popover shell"}),r.jsx(D,{label:"Inner actions",items:[{key:"duplicate",label:"Duplicate"},{key:"archive",label:"Archive"}]})]})}),play:async({canvasElement:a})=>{const n=R(a);await i.click(await n.findByRole("button",{name:"Open container"})),await i.click(n.getByRole("button",{name:"Inner actions"})),await o(n.getByRole("menu",{name:"Inner actions"})).toBeInTheDocument(),await o(n.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(n.queryByRole("menu",{name:"Inner actions"})).not.toBeInTheDocument(),await o(n.getByRole("dialog",{name:"Popover content"})).toBeInTheDocument(),await i.keyboard("{Escape}"),await o(n.queryByRole("dialog",{name:"Popover content"})).not.toBeInTheDocument()}};var L,z,_;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(_=(z=T.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var Q,J,U;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(U=(J=I.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var W,$,C;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(C=($=E.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var G,X,Y;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Y=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,re;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(te=S.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,se,ie;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <Popover triggerLabel="Open container">
      <div style={{
      display: "grid",
      gap: 8
    }}>
        <p style={{
        margin: 0
      }}>Popover shell</p>
        <Dropdown label="Inner actions" items={[{
        key: "duplicate",
        label: "Duplicate"
      }, {
        key: "archive",
        label: "Archive"
      }]} />
      </div>
    </Popover>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Open container"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "Inner actions"
    }));
    await expect(canvas.getByRole("menu", {
      name: "Inner actions"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("menu", {
      name: "Inner actions"
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole("dialog", {
      name: "Popover content"
    })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("dialog", {
      name: "Popover content"
    })).not.toBeInTheDocument();
  }
}`,...(ie=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const Re=["Default","DenseActions","IconTrigger","SelectionTelemetry","TypeaheadNavigation","OutsideDismissFocusTransfer","NestedDismissOrder"];export{T as Default,I as DenseActions,E as IconTrigger,j as NestedDismissOrder,S as OutsideDismissFocusTransfer,A as SelectionTelemetry,F as TypeaheadNavigation,Re as __namedExportsOrder,xe as default};
