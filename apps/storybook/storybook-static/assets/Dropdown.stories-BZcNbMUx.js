import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as s}from"./index-BWu4c2F4.js";import{D as M}from"./DismissableLayer-0Dn_Gr2D.js";import{B as z}from"./Button-Hgh0jeno.js";import{within as C,userEvent as g,expect as m}from"./index-DgAF9SIF.js";function y(t,a,o){var d;if(t.length===0)return-1;let u=a;for(let b=0;b<t.length;b+=1)if(u=(u+o+t.length)%t.length,!((d=t[u])!=null&&d.disabled))return u;return-1}function h({label:t,items:a,open:o,defaultOpen:u,onOpenChange:d}){const[b,_]=s.useState(u??!1),[f,l]=s.useState(-1),w=s.useRef(null),E=s.useRef([]),A=s.useId(),R=o!==void 0,i=R?o:b,p=s.useCallback(e=>{R||_(e),d==null||d(e)},[R,d]);return s.useEffect(()=>{if(!i){l(-1);return}const e=a.findIndex(n=>!n.disabled);l(e)},[i,a]),s.useEffect(()=>{var e;!i||f<0||(e=E.current[f])==null||e.focus()},[f,i]),r.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[r.jsx(z,{ref:w,variant:"outline","aria-haspopup":"menu","aria-expanded":i,"aria-controls":A,onClick:()=>p(!i),onKeyDown:e=>{if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault(),i||p(!0);const n=e.key==="ArrowDown"?y(a,-1,1):y(a,0,-1);l(n)},children:t}),i?r.jsx(M,{onDismiss:()=>{var e;p(!1),(e=w.current)==null||e.focus()},children:r.jsx("ul",{id:A,role:"menu","aria-orientation":"vertical",style:{position:"absolute",top:"calc(100% + 6px)",left:0,margin:0,padding:6,listStyle:"none",minWidth:200,borderRadius:"var(--aurora-radius-md)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-overlay)",boxShadow:"var(--aurora-shadow-md)",zIndex:"var(--aurora-z-overlay)"},onKeyDown:e=>{var n;if(e.key==="Escape"){e.preventDefault(),p(!1),(n=w.current)==null||n.focus();return}if(e.key==="ArrowDown"){e.preventDefault(),l(c=>y(a,c<0?-1:c,1));return}if(e.key==="ArrowUp"){e.preventDefault(),l(c=>y(a,c<0?0:c,-1));return}if(e.key==="Home"){e.preventDefault(),l(y(a,-1,1));return}if(e.key==="End"){e.preventDefault(),l(y(a,0,-1));return}e.key==="Tab"&&p(!1)},children:a.map((e,n)=>{const c=n===f;return r.jsx("li",{role:"none",children:r.jsx("button",{ref:v=>{E.current[n]=v},role:"menuitem",type:"button",disabled:e.disabled,tabIndex:c?0:-1,"aria-disabled":e.disabled||void 0,onMouseEnter:()=>{e.disabled||l(n)},onClick:()=>{var v,S;e.disabled||((v=e.onSelect)==null||v.call(e),p(!1),(S=w.current)==null||S.focus())},style:{width:"100%",textAlign:"left",border:0,background:c?"color-mix(in srgb, var(--aurora-accent-default) 12%, transparent)":"transparent",padding:"8px 10px",borderRadius:8,cursor:e.disabled?"not-allowed":"pointer",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)"},children:e.label})},e.key)})})}):null]})}h.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"DropdownItem[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const J=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],G={title:"Overlay/Dropdown",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:J}},k={},x={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}};function K(){const[t,a]=s.useState("none"),o=[{key:"duplicate",label:"Duplicate",onSelect:()=>a("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>a("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>a("Delete")}];return r.jsxs("div",{style:{display:"grid",gap:8},children:[r.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Selected action: ",r.jsx("strong",{children:t})]}),r.jsx(h,{label:"Release Actions",items:o})]})}const D={render:()=>r.jsx(K,{}),play:async({canvasElement:t})=>{const a=C(t),o=await a.findByRole("button",{name:"Release Actions"});await g.click(o),await m(a.getByRole("menu")).toBeInTheDocument(),await g.keyboard("{End}"),await m(a.getByRole("menuitem",{name:"Delete"})).toHaveFocus(),await g.keyboard("{Enter}"),await m(a.queryByRole("menu")).not.toBeInTheDocument(),await m(a.getByText("Delete")).toBeInTheDocument(),o.focus(),await g.keyboard("{ArrowDown}"),await m(a.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}};var B,I,T;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(T=(I=k.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var j,q,N;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(q=x.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var H,F,O;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(O=(F=D.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const Q=["Default","DenseActions","SelectionTelemetry"];export{k as Default,x as DenseActions,D as SelectionTelemetry,Q as __namedExportsOrder,G as default};
