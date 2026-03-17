import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{D as z}from"./DismissableLayer-0Dn_Gr2D.js";import{B as C}from"./Button-Hgh0jeno.js";import{within as J,userEvent as v,expect as m}from"./index-DgAF9SIF.js";function y(r,a,s){var d;if(r.length===0)return-1;let u=a;for(let b=0;b<r.length;b+=1)if(u=(u+s+r.length)%r.length,!((d=r[u])!=null&&d.disabled))return u;return-1}function h({label:r,items:a,open:s,defaultOpen:u,onOpenChange:d}){const[b,M]=o.useState(u??!1),[f,l]=o.useState(-1),w=o.useRef(null),E=o.useRef([]),A=o.useId(),I=o.useId(),R=s!==void 0,i=R?s:b,p=o.useCallback(e=>{R||M(e),d==null||d(e)},[R,d]);return o.useEffect(()=>{if(!i){l(-1);return}const e=a.findIndex(n=>!n.disabled);l(e)},[i,a]),o.useEffect(()=>{var e;!i||f<0||(e=E.current[f])==null||e.focus()},[f,i]),t.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[t.jsx(C,{id:A,ref:w,variant:"outline","aria-haspopup":"menu","aria-expanded":i,"aria-controls":I,onClick:()=>p(!i),onKeyDown:e=>{if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.preventDefault(),i||p(!0);const n=e.key==="ArrowDown"?y(a,-1,1):y(a,0,-1);l(n)},children:r}),i?t.jsx(z,{onDismiss:()=>{var e;p(!1),(e=w.current)==null||e.focus()},children:t.jsx("ul",{id:I,role:"menu","aria-labelledby":A,"aria-orientation":"vertical",style:{position:"absolute",top:"calc(100% + 6px)",left:0,margin:0,padding:6,listStyle:"none",minWidth:200,borderRadius:"var(--aurora-radius-md)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-overlay)",boxShadow:"var(--aurora-shadow-md)",zIndex:"var(--aurora-z-overlay)"},onKeyDown:e=>{var n;if(e.key==="Escape"){e.preventDefault(),p(!1),(n=w.current)==null||n.focus();return}if(e.key==="ArrowDown"){e.preventDefault(),l(c=>y(a,c<0?-1:c,1));return}if(e.key==="ArrowUp"){e.preventDefault(),l(c=>y(a,c<0?0:c,-1));return}if(e.key==="Home"){e.preventDefault(),l(y(a,-1,1));return}if(e.key==="End"){e.preventDefault(),l(y(a,0,-1));return}e.key==="Tab"&&p(!1)},children:a.map((e,n)=>{const c=n===f;return t.jsx("li",{role:"none",children:t.jsx("button",{ref:g=>{E.current[n]=g},role:"menuitem",type:"button",disabled:e.disabled,tabIndex:c?0:-1,"aria-disabled":e.disabled||void 0,onMouseEnter:()=>{e.disabled||l(n)},onClick:()=>{var g,S;e.disabled||((g=e.onSelect)==null||g.call(e),p(!1),(S=w.current)==null||S.focus())},style:{width:"100%",textAlign:"left",border:0,background:c?"color-mix(in srgb, var(--aurora-accent-default) 12%, transparent)":"transparent",padding:"8px 10px",borderRadius:8,cursor:e.disabled?"not-allowed":"pointer",color:e.disabled?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)"},children:e.label})},e.key)})})}):null]})}h.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  disabled?: boolean;
  onSelect?: () => void;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"onSelect",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"DropdownItem[]"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const K=[{key:"duplicate",label:"Duplicate"},{key:"rename",label:"Rename"},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete"}],Q={title:"Overlay/Dropdown",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Dropdown provides keyboard navigation (Arrow/Home/End), disabled item semantics, and outside/Escape dismissal."}}},args:{label:"Actions",items:K}},k={},x={args:{label:"Project Menu",items:[{key:"view",label:"View details"},{key:"copy",label:"Copy link"},{key:"tag",label:"Add tag"},{key:"export",label:"Export JSON"},{key:"remove",label:"Remove",disabled:!0}]}};function P(){const[r,a]=o.useState("none"),s=[{key:"duplicate",label:"Duplicate",onSelect:()=>a("Duplicate")},{key:"rename",label:"Rename",onSelect:()=>a("Rename")},{key:"archive",label:"Archive",disabled:!0},{key:"delete",label:"Delete",onSelect:()=>a("Delete")}];return t.jsxs("div",{style:{display:"grid",gap:8},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Selected action: ",t.jsx("strong",{children:r})]}),t.jsx(h,{label:"Release Actions",items:s})]})}const D={render:()=>t.jsx(P,{}),play:async({canvasElement:r})=>{const a=J(r),s=await a.findByRole("button",{name:"Release Actions"});await v.click(s),await m(a.getByRole("menu")).toBeInTheDocument(),await v.keyboard("{End}"),await m(a.getByRole("menuitem",{name:"Delete"})).toHaveFocus(),await v.keyboard("{Enter}"),await m(a.queryByRole("menu")).not.toBeInTheDocument(),await m(a.getByText("Delete")).toBeInTheDocument(),s.focus(),await v.keyboard("{ArrowDown}"),await m(a.getByRole("menuitem",{name:"Duplicate"})).toHaveFocus()}};var B,T,j;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(j=(T=k.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var q,N,H;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(N=x.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var F,O,_;D.parameters={...D.parameters,docs:{...(F=D.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(_=(O=D.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const X=["Default","DenseActions","SelectionTelemetry"];export{k as Default,x as DenseActions,D as SelectionTelemetry,X as __namedExportsOrder,Q as default};
