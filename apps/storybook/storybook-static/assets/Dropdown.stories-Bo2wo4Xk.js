import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{D as V}from"./DismissableLayer-0Dn_Gr2D.js";import{B as W}from"./Button-Hgh0jeno.js";import{within as J,userEvent as b,expect as y}from"./index-DgAF9SIF.js";function m(t,a,n){var f;if(t.length===0)return-1;let d=a;for(let u=0;u<t.length;u+=1)if(d=(d+n+t.length)%t.length,!((f=t[d])!=null&&f.disabled))return d;return-1}function E({label:t,triggerAriaLabel:a,items:n,open:d,defaultOpen:f,onOpenChange:u}){const[P,U]=s.useState(f??!1),[g,i]=s.useState(-1),w=s.useRef(null),B=s.useRef([]),I=s.useId(),A=s.useId(),h=d!==void 0,l=h?d:P,p=s.useCallback(e=>{h||U(e),u==null||u(e)},[h,u]);return s.useEffect(()=>{if(!l){i(-1);return}const e=n.findIndex(o=>!o.disabled);i(e)},[l,n]),s.useEffect(()=>{var e;!l||g<0||(e=B.current[g])==null||e.focus()},[g,l]),r.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[r.jsx(W,{id:I,ref:w,variant:"outline","aria-label":a,"aria-haspopup":"menu","aria-expanded":l,"aria-controls":l?A:void 0,onClick:()=>p(!l),onKeyDown:e=>{if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault(),l||p(!0);const o=e.key==="ArrowDown"?m(n,-1,1):m(n,0,-1);i(o)},children:t}),l?r.jsx(V,{onDismiss:()=>{var e;p(!1),(e=w.current)==null||e.focus()},children:r.jsx("ul",{id:A,role:"menu","aria-labelledby":I,"aria-orientation":"vertical",style:{position:"absolute",top:"calc(100% + 6px)",left:0,margin:0,padding:6,listStyle:"none",minWidth:200,borderRadius:"var(--aurora-radius-md)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-overlay)",boxShadow:"var(--aurora-shadow-md)",zIndex:"var(--aurora-z-overlay)"},onKeyDown:e=>{var o;if(e.key==="Escape"){e.preventDefault(),p(!1),(o=w.current)==null||o.focus();return}if(e.key==="ArrowDown"){e.preventDefault(),i(c=>m(n,c<0?-1:c,1));return}if(e.key==="ArrowUp"){e.preventDefault(),i(c=>m(n,c<0?0:c,-1));return}if(e.key==="Home"){e.preventDefault(),i(m(n,-1,1));return}if(e.key==="End"){e.preventDefault(),i(m(n,0,-1));return}e.key==="Tab"&&p(!1)},children:n.map((e,o)=>{const c=o===g;return r.jsx("li",{role:"none",children:r.jsx("button",{ref:v=>{B.current[o]=v},role:"menuitem",type:"button",disabled:e.disabled,tabIndex:c?0:-1,"aria-disabled":e.disabled||void 0,onMouseEnter:()=>{e.disabled||i(o)},onClick:()=>{var v,S;e.disabled||((v=e.onSelect)==null||v.call(e),p(!1),(S=w.current)==null||S.focus())},style:{width:"100%",textAlign:"left",border:0,background:c?"color-mix(in srgb, var(--aurora-accent-default) 12%, transparent)":"transparent",padding:"8px 10px",borderRadius:8,cursor:e.disabled?"not-allowed":"pointer",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)"},children:e.label})},e.key)})})}):null]})}E.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},triggerAriaLabel:{required:!1,tsType:{name:"string"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"DropdownItem[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const K=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],ee={title:"Overlay/Dropdown",component:E,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:K}},k={},x={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}},D={args:{label:"⋯",triggerAriaLabel:"More actions",items:K},play:async({canvasElement:t})=>{const a=J(t);await b.click(await a.findByRole("button",{name:"More actions"})),await y(a.getByRole("menu",{name:"More actions"})).toBeInTheDocument()}};function G(){const[t,a]=s.useState("none"),n=[{key:"duplicate",label:"Duplicate",onSelect:()=>a("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>a("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>a("Delete")}];return r.jsxs("div",{style:{display:"grid",gap:8},children:[r.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Selected action: ",r.jsx("strong",{children:t})]}),r.jsx(E,{label:"Release Actions",items:n})]})}const R={render:()=>r.jsx(G,{}),play:async({canvasElement:t})=>{const a=J(t),n=await a.findByRole("button",{name:"Release Actions"});await b.click(n),await y(a.getByRole("menu")).toBeInTheDocument(),await b.keyboard("{End}"),await y(a.getByRole("menuitem",{name:"Delete"})).toHaveFocus(),await b.keyboard("{Enter}"),await y(a.queryByRole("menu")).not.toBeInTheDocument(),await y(a.getByText("Delete")).toBeInTheDocument(),n.focus(),await b.keyboard("{ArrowDown}"),await y(a.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}};var T,j,q;k.parameters={...k.parameters,docs:{...(T=k.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(q=(j=k.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var M,N,H;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(H=(N=x.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var F,L,O;D.parameters={...D.parameters,docs:{...(F=D.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(L=D.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var _,z,C;R.parameters={...R.parameters,docs:{...(_=R.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(C=(z=R.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const ae=["Default","DenseActions","IconTrigger","SelectionTelemetry"];export{k as Default,x as DenseActions,D as IconTrigger,R as SelectionTelemetry,ae as __namedExportsOrder,ee as default};
