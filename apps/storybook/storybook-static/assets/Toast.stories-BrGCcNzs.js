import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as o}from"./index-BWu4c2F4.js";import{B as m}from"./Button-Hgh0jeno.js";import{within as j,expect as l,userEvent as D,fireEvent as ue}from"./index-DgAF9SIF.js";const de={info:{borderColor:"color-mix(in srgb, var(--aurora-accent-default) 38%, var(--aurora-border-default))",background:"var(--aurora-surface-overlay)",color:"var(--aurora-text-primary)"},success:{borderColor:"rgba(34, 197, 94, 0.45)",background:"color-mix(in srgb, rgba(34, 197, 94, 0.12) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},warning:{borderColor:"rgba(245, 158, 11, 0.5)",background:"color-mix(in srgb, rgba(245, 158, 11, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"},danger:{borderColor:"rgba(239, 68, 68, 0.5)",background:"color-mix(in srgb, rgba(239, 68, 68, 0.16) 42%, var(--aurora-surface-overlay))",color:"var(--aurora-text-primary)"}},pe={"bottom-right":{right:16,bottom:16},"bottom-left":{left:16,bottom:16},"top-right":{right:16,top:16},"top-left":{left:16,top:16}},d=[];function G(t){const e=d.lastIndexOf(t);e>=0&&d.splice(e,1),d.push(t)}function me(t){const e=d.lastIndexOf(t);e>=0&&d.splice(e,1)}function fe(t){return d[d.length-1]===t}function s({open:t,title:e,description:n,action:i,tone:c="info",duration:p=4e3,pauseOnHover:u=!0,closeOnEscape:S=!0,closeLabel:se="Close toast",ariaLabel:I,position:ie="bottom-right",onClose:v,onOpenChange:b}){const h=o.useRef(null),[C,f]=o.useState({hover:!1,focus:!1}),q=u&&(C.hover||C.focus),O=o.useId(),L=o.useId();o.useEffect(()=>{const r=h.current;if(!(!t||!r))return G(r),()=>{me(r)}},[t]),o.useEffect(()=>{t||f({hover:!1,focus:!1})},[t]);const g=o.useCallback(()=>{v==null||v(),b==null||b(!1)},[v,b]),F=o.useCallback(()=>{const r=h.current;!t||!r||G(r)},[t]);if(o.useEffect(()=>{if(!t||p<=0||u&&q)return;const r=window.setTimeout(()=>{g()},p);return()=>{window.clearTimeout(r)}},[g,p,t,u,q]),o.useEffect(()=>{if(!t||!S)return;const r=y=>{if(y.key!=="Escape"||y.defaultPrevented)return;const P=h.current;!P||!fe(P)||(y.preventDefault(),g())};return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[g,S,t]),!t)return null;const ce=c==="danger"?"alert":"status",le=c==="danger"?"assertive":"polite";return a.jsxs("div",{ref:h,role:ce,"aria-live":le,"aria-atomic":"true","aria-label":I,"aria-labelledby":I?void 0:O,"aria-describedby":n?L:void 0,onMouseEnter:()=>{F(),u&&f(r=>({...r,hover:!0}))},onMouseLeave:()=>{u&&f(r=>({...r,hover:!1}))},onFocusCapture:()=>{F(),u&&f(r=>({...r,focus:!0}))},onBlurCapture:r=>{u&&!r.currentTarget.contains(r.relatedTarget)&&f(y=>({...y,focus:!1}))},style:{position:"fixed",zIndex:"var(--aurora-z-toast)",minWidth:280,maxWidth:420,borderRadius:"var(--aurora-radius-lg)",border:"1px solid var(--aurora-border-default)",boxShadow:"var(--aurora-shadow-lg)",padding:12,display:"grid",gap:8,...de[c],...pe[ie]},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"start"},children:[a.jsx("strong",{id:O,style:{color:"var(--aurora-text-primary)"},children:e}),a.jsx("button",{type:"button",onClick:g,"aria-label":se,style:{borderRadius:"var(--aurora-radius-sm)",border:"1px solid var(--aurora-border-default)",background:"var(--aurora-surface-elevated)",cursor:"pointer",color:"var(--aurora-text-secondary)",width:28,height:28},children:"×"})]}),n?a.jsx("div",{id:L,style:{color:"var(--aurora-text-secondary)"},children:n}):null,i?a.jsx("div",{children:i}):null]})}s.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tone:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"info"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4000",computed:!1}},pauseOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Close toast"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"bottom-right" | "bottom-left" | "top-right" | "top-left"',elements:[{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-left"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""}}};const we={title:"Feedback/Toast",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Toast supports tone variants, auto-close duration, Escape dismissal, and hover/focus pause for actionable notifications."}}},args:{open:!0,title:"Saved",description:"Your changes are synced.",tone:"info"}},x={};function ge(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:460,padding:16,display:"grid",gap:8},children:[a.jsx("div",{style:{display:"flex",gap:8},children:a.jsx(m,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toasts"})}),a.jsx(s,{open:t,onOpenChange:e,title:"Info",description:"Build queued.",tone:"info",position:"top-left"}),a.jsx(s,{open:t,onOpenChange:e,title:"Success",description:"Release published successfully.",tone:"success",position:"top-right"}),a.jsx(s,{open:t,onOpenChange:e,title:"Warning",description:"Publish is pending manual review.",tone:"warning",position:"bottom-left"}),a.jsx(s,{open:t,onOpenChange:e,title:"Danger",description:"Deploy failed due to secret mismatch.",tone:"danger",position:"bottom-right"})]})}const E={render:()=>a.jsx(ge,{})};function ye(){const[t,e]=o.useState(!0);return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(m,{variant:"outline",onClick:()=>e(!0),children:"Reopen"}),a.jsx(s,{open:t,onOpenChange:e,closeOnEscape:!1,duration:0,closeLabel:"Close blocking notice",title:"Publish blocked",description:"Set CHROMATIC_PROJECT_TOKEN before release. This toast stays until explicit action.",tone:"warning",action:a.jsx(m,{size:"sm",onClick:()=>e(!1),children:"Acknowledge"})})]})}const w={render:()=>a.jsx(ye,{}),play:async({canvasElement:t})=>{const e=j(t);await l(e.getByRole("status")).toBeInTheDocument(),await D.click(e.getByRole("button",{name:"Close blocking notice"})),await l(e.queryByRole("status")).not.toBeInTheDocument(),await D.click(e.getByRole("button",{name:"Reopen"})),await l(e.getByRole("status")).toBeInTheDocument()}};function ne(){const[t,e]=o.useState({first:!0,second:!0});return a.jsxs("div",{style:{minHeight:260,padding:16},children:[a.jsx(m,{variant:"outline",onClick:()=>e({first:!0,second:!0}),children:"Reopen Stack"}),a.jsx(s,{open:t.first,onOpenChange:n=>{e(i=>({...i,first:n}))},title:"First notice",description:"Earlier notification in stack order.",tone:"info",duration:0,position:"bottom-left"}),a.jsx(s,{open:t.second,onOpenChange:n=>{e(i=>({...i,second:n}))},title:"Second notice",description:"Latest notification should close first on Escape.",tone:"success",duration:0,position:"bottom-right"})]})}const T={render:()=>a.jsx(ne,{})},R={render:()=>a.jsxs("div",{style:{minHeight:280,padding:16,display:"grid",gap:8},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Focus or hover any older toast to promote it to top priority before pressing Escape."}),a.jsx(ne,{})]})};function ve(){const[t,e]=o.useState(!0),[n,i]=o.useState(!0);return o.useEffect(()=>{if(!n)return;const c=p=>{p.key==="Escape"&&p.preventDefault()};return document.addEventListener("keydown",c,!0),()=>{document.removeEventListener("keydown",c,!0)}},[n]),a.jsxs("div",{style:{minHeight:260,padding:16,display:"grid",gap:8,justifyItems:"start"},children:[a.jsx(m,{variant:"outline",onClick:()=>e(!0),children:"Reopen Toast"}),a.jsx(m,{variant:"ghost",onClick:()=>i(c=>!c),children:n?"Disable global Escape handler":"Enable global Escape handler"}),a.jsx(s,{open:t,onOpenChange:e,duration:0,title:"Global Escape override",description:"When upper-layer handlers preempt Escape, toast should stay open.",tone:"info"})]})}const B={render:()=>a.jsx(ve,{}),play:async({canvasElement:t})=>{const e=j(t.ownerDocument.body),n=t.ownerDocument;await l(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),ue.keyDown(n,{key:"Escape"}),await l(e.getByRole("status",{name:"Global Escape override"})).toBeInTheDocument(),await D.click(e.getByRole("button",{name:"Disable global Escape handler"})),await l(e.getByRole("button",{name:"Enable global Escape handler"})).toBeInTheDocument(),await D.click(e.getByRole("button",{name:"Close toast"})),await l(e.queryByRole("status",{name:"Global Escape override"})).not.toBeInTheDocument()}},k={args:{title:a.jsx("span",{"aria-hidden":!0,children:"✅"}),description:"Build artifact is ready.",ariaLabel:"Build artifact ready notification"},play:async({canvasElement:t})=>{const e=j(t.ownerDocument.body);await l(e.getByRole("status",{name:"Build artifact ready notification"})).toBeInTheDocument()}};var M,A,N;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(N=(A=x.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var V,_,H;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ToneMatrixDemo />
}`,...(H=(_=E.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var W,z,K;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ActionRequiredToastDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("status")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Close blocking notice"
    }));
    await expect(canvas.queryByRole("status")).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Reopen"
    }));
    await expect(canvas.getByRole("status")).toBeInTheDocument();
  }
}`,...(K=(z=w.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var J,Y,Q;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <EscapeStackOrderDemo />
}`,...(Q=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var U,X,Z;R.parameters={...R.parameters,docs:{...(U=R.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    minHeight: 280,
    padding: 16,
    display: "grid",
    gap: 8
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Focus or hover any older toast to promote it to top priority before pressing Escape.
      </p>
      <EscapeStackOrderDemo />
    </div>
}`,...(Z=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <EscapePreemptedDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    const doc = canvasElement.ownerDocument;
    await expect(canvas.getByRole("status", {
      name: "Global Escape override"
    })).toBeInTheDocument();
    fireEvent.keyDown(doc, {
      key: "Escape"
    });
    await expect(canvas.getByRole("status", {
      name: "Global Escape override"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Disable global Escape handler"
    }));
    await expect(canvas.getByRole("button", {
      name: "Enable global Escape handler"
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Close toast"
    }));
    await expect(canvas.queryByRole("status", {
      name: "Global Escape override"
    })).not.toBeInTheDocument();
  }
}`,...(te=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,oe;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    title: <span aria-hidden>✅</span>,
    description: "Build artifact is ready.",
    ariaLabel: "Build artifact ready notification"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await expect(canvas.getByRole("status", {
      name: "Build artifact ready notification"
    })).toBeInTheDocument();
  }
}`,...(oe=(re=k.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const Te=["Default","ToneMatrix","ActionRequired","EscapeStackOrder","FocusedToastEscapesFirst","EscapePreemptedByGlobalHandler","AriaLabelOverride"];export{w as ActionRequired,k as AriaLabelOverride,x as Default,B as EscapePreemptedByGlobalHandler,T as EscapeStackOrder,R as FocusedToastEscapesFirst,E as ToneMatrix,Te as __namedExportsOrder,we as default};
