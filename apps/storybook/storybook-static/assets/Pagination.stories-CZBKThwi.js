import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as S}from"./Badge-ZJmMstsz.js";import{within as w,expect as s,userEvent as p}from"./index-DgAF9SIF.js";function T(t,e,r){return Math.min(Math.max(t,e),r)}function Z(t,e){const r=e-t+1;return Array.from({length:r},(i,g)=>t+g)}function We(t,e,r,i){const g=i*2+r*2+3;if(e<=g)return Z(1,e);const l=Math.max(t-r,i+2),C=Math.min(t+r,e-i-1),m=[],U=Z(1,i),K=Z(e-i+1,e);m.push(...U),l>i+2?m.push("ellipsis-left"):i+1<l&&m.push(i+1);for(let h=l;h<=C;h+=1)m.push(h);return C<e-i-1?m.push("ellipsis-right"):C+1<e-i+1&&m.push(e-i),m.push(...K),m}function v({page:t,pageCount:e,onPageChange:r,siblingCount:i=1,boundaryCount:g=1,disabled:l=!1,showFirstLast:C=!0,ariaLabel:m="Pagination",ariaLabelledBy:U,getItemAriaLabel:K=re}){const h=c.useRef(null),j=c.useRef(null),R=c.useRef(!1),[b,X]=c.useState(null),[x,L]=c.useState(null),qe=ee(m,"Pagination"),te=ee(U),P=Math.max(e,1),d=T(t,1,P),Ve=e<=1?[]:We(d,e,i,g),ae=T(d-1,1,P),ne=T(d+1,1,P),y=!l&&e>1&&d>1,f=!l&&e>1&&d<e,D=c.useMemo(()=>{if(l||e<=1)return;const a=[];return y&&a.push("Home"),f&&a.push("End"),(y||f)&&a.push("ArrowLeft","ArrowRight"),a.length>0?a.join(" "):void 0},[f,y,l,e]),H=c.useCallback((a,o)=>ee(K(a,o),re(a,o)),[K]);c.useEffect(()=>{l&&(X(null),L(null))},[l]),c.useEffect(()=>{var A;const a=((A=h.current)==null?void 0:A.ownerDocument)??document,o=B=>{B.metaKey||B.altKey||B.ctrlKey||(R.current=!0)},u=B=>{"button"in B&&typeof B.button=="number"&&B.button!==0||(R.current=!1)};return a.addEventListener("keydown",o,!0),a.addEventListener("pointerdown",u,!0),a.addEventListener("mousedown",u,!0),a.addEventListener("touchstart",u,!0),()=>{a.removeEventListener("keydown",o,!0),a.removeEventListener("pointerdown",u,!0),a.removeEventListener("mousedown",u,!0),a.removeEventListener("touchstart",u,!0)}},[]);const E=a=>{if(l||e<=1)return;const o=T(a,1,e);o!==d&&r(o)};c.useEffect(()=>{var u;if(j.current===null)return;const a=j.current;j.current=null;const o=(u=h.current)==null?void 0:u.querySelector(`button[data-aurora-pagination-page="${a}"]`);o==null||o.focus()},[d]);const Y=a=>{const o=T(a,1,e);if(o===d){j.current=null;return}j.current=o,E(o)},I=a=>{if(R.current=!0,l||(a.altKey||a.ctrlKey||a.metaKey)&&_e(a.key))return;if(a.key==="Home"){if(d===1)return;a.preventDefault(),Y(1);return}if(a.key==="End"){if(d===P)return;a.preventDefault(),Y(P);return}const o=ze(a.key,a.currentTarget);if(o===void 0)return;const u=T(d+o,1,P);u!==d&&(a.preventDefault(),Y(u))},F=c.useCallback(a=>({"data-focus-visible":b===a&&x===a?"true":void 0,onFocus:o=>{X(a),L(Je(o.currentTarget,R.current)?a:null)},onBlur:()=>{X(o=>o===a?null:o),L(o=>o===a?null:o)},onMouseDown:o=>{o.button===0&&(R.current=!1,L(u=>u===a?null:u))},onPointerDown:o=>{o.button===0&&(R.current=!1,L(u=>u===a?null:u))}}),[b,x]);return e<=1?null:n.jsx("nav",{ref:h,"aria-label":te?void 0:qe,"aria-labelledby":te,children:n.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[C?n.jsx("li",{children:n.jsx("button",{...F("first"),type:"button",disabled:!y,onClick:()=>E(1),onKeyDown:I,"aria-label":H("first",1),"aria-keyshortcuts":y?D:void 0,style:k(!1,!y,b==="first"&&x==="first"),children:"«"})}):null,n.jsx("li",{children:n.jsx("button",{...F("previous"),type:"button",disabled:!y,onClick:()=>E(ae),onKeyDown:I,"aria-label":H("previous",ae),"aria-keyshortcuts":y?D:void 0,style:k(!1,!y,b==="previous"&&x==="previous"),children:"‹"})}),Ve.map((a,o)=>{if(typeof a!="number")return n.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${a}-${o}`);const u=a===d,A=`page-${a}`;return n.jsx("li",{children:n.jsx("button",{...F(A),type:"button",onClick:()=>E(a),disabled:l,onKeyDown:I,"data-aurora-pagination-page":a,"aria-current":u?"page":void 0,"aria-label":H(u?"current":"page",a),"aria-keyshortcuts":l?void 0:D,style:k(u,l,b===A&&x===A),children:a})},a)}),n.jsx("li",{children:n.jsx("button",{...F("next"),type:"button",disabled:!f,onClick:()=>E(ne),onKeyDown:I,"aria-label":H("next",ne),"aria-keyshortcuts":f?D:void 0,style:k(!1,!f,b==="next"&&x==="next"),children:"›"})}),C?n.jsx("li",{children:n.jsx("button",{...F("last"),type:"button",disabled:!f,onClick:()=>E(e),onKeyDown:I,"aria-label":H("last",e),"aria-keyshortcuts":f?D:void 0,style:k(!1,!f,b==="last"&&x==="last"),children:"»"})}):null]})})}function _e(t){return t==="Home"||t==="End"||t==="ArrowLeft"||t==="ArrowRight"}function ze(t,e){if(!(t!=="ArrowLeft"&&t!=="ArrowRight"))return Ne(t,Oe(e))}function Ne(t,e){return t==="ArrowRight"?e?-1:1:e?1:-1}function Oe(t){if(!t)return!1;const e=t.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const r=t.ownerDocument.defaultView??(typeof window<"u"?window:null);return r?r.getComputedStyle(t).direction==="rtl":!1}function re(t,e){switch(t){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function k(t,e,r){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:t?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:t?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit",boxShadow:!e&&r?"0 0 0 3px color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)":"none"}}function ee(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}function Je(t,e){try{return t.matches(":focus-visible")||e}catch{return e}}v.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  type: "page" | "current" | "first" | "last" | "next" | "previous",
  page: number
) => string`,signature:{arguments:[{type:{name:"union",raw:'"page" | "current" | "first" | "last" | "next" | "previous"',elements:[{name:"literal",value:'"page"'},{name:"literal",value:'"current"'},{name:"literal",value:'"first"'},{name:"literal",value:'"last"'},{name:"literal",value:'"next"'},{name:"literal",value:'"previous"'}]},name:"type"},{type:{name:"number"},name:"page"}],return:{name:"string"}}},description:"",defaultValue:{value:`function defaultGetItemAriaLabel(
  type: "page" | "current" | "first" | "last" | "next" | "previous",
  page: number
) {
  switch (type) {
    case "first":
      return "Go to first page";
    case "last":
      return "Go to last page";
    case "previous":
      return "Go to previous page";
    case "next":
      return "Go to next page";
    case "current":
      return \`Current page, \${page}\`;
    default:
      return \`Go to page \${page}\`;
  }
}`,computed:!1}}}};const rt={title:"Data/Pagination",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior and accessible page labels."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function Qe(){const[t,e]=c.useState(1);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),n.jsx(S,{tone:"default",children:t})]}),n.jsx(v,{page:t,pageCount:12,onPageChange:e})]})}const G={render:()=>n.jsx(Qe,{}),play:async({canvasElement:t})=>{const e=w(t);await p.click(await e.findByRole("button",{name:"Go to page 2"})),await s(await e.findByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function Ue(){const[t,e]=c.useState(4);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),n.jsx(S,{tone:"default",children:t})]}),n.jsx(v,{page:t,pageCount:12,onPageChange:e})]})}const M={render:()=>n.jsx(Ue,{}),play:async({canvasElement:t})=>{const e=w(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await s(r).toHaveFocus(),await s(r).toHaveAttribute("aria-keyshortcuts","Home End ArrowLeft ArrowRight"),await p.keyboard("{End}");const i=await e.findByRole("button",{name:"Current page, 12"});await s(i).toBeInTheDocument(),await s(i).toHaveFocus(),await p.keyboard("{Home}");const g=await e.findByRole("button",{name:"Current page, 1"});await s(g).toBeInTheDocument(),await s(g).toHaveFocus()}};function Xe(){const[t,e]=c.useState(4);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Modifier guard page"}),n.jsx(S,{tone:"default","data-testid":"pagination-modifier-guard-page",children:t})]}),n.jsx(v,{page:t,pageCount:12,onPageChange:e})]})}const $={render:()=>n.jsx(Xe,{}),play:async({canvasElement:t})=>{const e=w(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await s(r).toHaveFocus(),await s(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await p.keyboard("{Control>}{End}{/Control}"),await p.keyboard("{Meta>}{ArrowRight}{/Meta}"),await p.keyboard("{Alt>}{Home}{/Alt}"),await s(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await s(e.getByRole("button",{name:"Current page, 4"})).toHaveFocus(),await p.keyboard("{End}"),await s(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("12"),await s(await e.findByRole("button",{name:"Current page, 12"})).toHaveFocus()}};function Ye(){const[t,e]=c.useState(4);return n.jsxs("div",{dir:"rtl",style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"صفحه فعال"}),n.jsx(S,{tone:"default","data-testid":"rtl-page-value",children:t})]}),n.jsx(v,{page:t,pageCount:12,onPageChange:e})]})}const q={render:()=>n.jsx(Ye,{}),play:async({canvasElement:t})=>{const e=w(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await s(r).toHaveFocus(),await p.keyboard("{ArrowRight}");const i=await e.findByRole("button",{name:"Current page, 3"});await s(i).toBeInTheDocument(),await s(i).toHaveFocus(),await s(e.getByTestId("rtl-page-value")).toHaveTextContent("3"),await p.keyboard("{ArrowLeft}");const g=await e.findByRole("button",{name:"Current page, 4"});await s(g).toBeInTheDocument(),await s(g).toHaveFocus(),await s(e.getByTestId("rtl-page-value")).toHaveTextContent("4")}},V={args:{page:9,pageCount:48,onPageChange:()=>{}}},W={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},_={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}},z={args:{page:2,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}}},N={args:{page:1,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}},play:async({canvasElement:t})=>{const e=w(t);await s(e.getByRole("button",{name:"Pagination previous 1"})).toBeInTheDocument(),await s(e.getByRole("button",{name:"Pagination next 2"})).toBeInTheDocument()}};function Ze(){const[t,e]=c.useState(1);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Boundary page"}),n.jsx(S,{tone:"default","data-testid":"boundary-page-value",children:t})]}),n.jsx(v,{page:t,pageCount:12,onPageChange:e})]})}const O={render:()=>n.jsx(Ze,{}),play:async({canvasElement:t})=>{const e=w(t),r=await e.findByRole("button",{name:"Current page, 1"});await s(r).toHaveAttribute("aria-keyshortcuts","End ArrowLeft ArrowRight"),r.focus(),await s(r).toHaveFocus(),await p.keyboard("{Home}"),await s(e.getByTestId("boundary-page-value")).toHaveTextContent("1"),await p.keyboard("{End}");const i=await e.findByRole("button",{name:"Current page, 12"});await s(i).toHaveAttribute("aria-keyshortcuts","Home ArrowLeft ArrowRight"),await s(e.getByTestId("boundary-page-value")).toHaveTextContent("12")}},J={render:t=>n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsx("h3",{id:"pagination-release-heading",style:{margin:0},children:"Release pages"}),n.jsx(v,{...t,ariaLabelledBy:"pagination-release-heading"})]}),args:{page:3,pageCount:12,onPageChange:()=>{}},play:async({canvasElement:t})=>{const r=await w(t).findByRole("navigation",{name:"Release pages"});await s(r).toHaveAttribute("aria-labelledby","pagination-release-heading"),await s(r).not.toHaveAttribute("aria-label")}},Q={render:()=>n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores pagination focus-visible state."}),n.jsx("button",{type:"button",children:"Before pagination"}),n.jsx(v,{page:4,pageCount:12,onPageChange:()=>{}})]}),play:async({canvasElement:t})=>{const e=w(t),r=await e.findByRole("button",{name:"Before pagination"}),i=e.getByRole("button",{name:"Go to first page"});await p.click(r),await p.tab(),await s(i).toHaveFocus(),await s(i).toHaveAttribute("data-focus-visible","true")}};var oe,se,ie;G.parameters={...G.parameters,docs:{...(oe=G.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <ControlledPaginationDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", {
      name: "Go to page 2"
    }));
    await expect(await canvas.findByRole("button", {
      name: "Current page, 2"
    })).toBeInTheDocument();
  }
}`,...(ie=(se=G.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ue,ce,le;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <KeyboardShortcutsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const current = await canvas.findByRole("button", {
      name: "Current page, 4"
    });
    current.focus();
    await expect(current).toHaveFocus();
    await expect(current).toHaveAttribute("aria-keyshortcuts", "Home End ArrowLeft ArrowRight");
    await userEvent.keyboard("{End}");
    const currentLast = await canvas.findByRole("button", {
      name: "Current page, 12"
    });
    await expect(currentLast).toBeInTheDocument();
    await expect(currentLast).toHaveFocus();
    await userEvent.keyboard("{Home}");
    const currentFirst = await canvas.findByRole("button", {
      name: "Current page, 1"
    });
    await expect(currentFirst).toBeInTheDocument();
    await expect(currentFirst).toHaveFocus();
  }
}`,...(le=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,pe,ge;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <ModifierGuardPaginationDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const current = await canvas.findByRole("button", {
      name: "Current page, 4"
    });
    current.focus();
    await expect(current).toHaveFocus();
    await expect(canvas.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4");
    await userEvent.keyboard("{Control>}{End}{/Control}");
    await userEvent.keyboard("{Meta>}{ArrowRight}{/Meta}");
    await userEvent.keyboard("{Alt>}{Home}{/Alt}");
    await expect(canvas.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4");
    await expect(canvas.getByRole("button", {
      name: "Current page, 4"
    })).toHaveFocus();
    await userEvent.keyboard("{End}");
    await expect(canvas.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("12");
    await expect(await canvas.findByRole("button", {
      name: "Current page, 12"
    })).toHaveFocus();
  }
}`,...(ge=(pe=$.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var me,ye,fe;q.parameters={...q.parameters,docs:{...(me=q.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <RtlKeyboardShortcutsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const current = await canvas.findByRole("button", {
      name: "Current page, 4"
    });
    current.focus();
    await expect(current).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    const currentRtl = await canvas.findByRole("button", {
      name: "Current page, 3"
    });
    await expect(currentRtl).toBeInTheDocument();
    await expect(currentRtl).toHaveFocus();
    await expect(canvas.getByTestId("rtl-page-value")).toHaveTextContent("3");
    await userEvent.keyboard("{ArrowLeft}");
    const currentDefault = await canvas.findByRole("button", {
      name: "Current page, 4"
    });
    await expect(currentDefault).toBeInTheDocument();
    await expect(currentDefault).toHaveFocus();
    await expect(canvas.getByTestId("rtl-page-value")).toHaveTextContent("4");
  }
}`,...(fe=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var ve,we,he;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(he=(we=V.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var be,xe,Be;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(Be=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Ce,Re,Pe;_.parameters={..._.parameters,docs:{...(Ce=_.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(Pe=(Re=_.parameters)==null?void 0:Re.docs)==null?void 0:Pe.source}}};var He,Ee,Ae;z.parameters={...z.parameters,docs:{...(He=z.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(Ae=(Ee=z.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var Te,je,Le;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    page: 1,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", {
      name: "Pagination previous 1"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Pagination next 2"
    })).toBeInTheDocument();
  }
}`,...(Le=(je=N.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var De,Ie,Fe;O.parameters={...O.parameters,docs:{...(De=O.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <BoundaryShortcutHintsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const currentFirst = await canvas.findByRole("button", {
      name: "Current page, 1"
    });
    await expect(currentFirst).toHaveAttribute("aria-keyshortcuts", "End ArrowLeft ArrowRight");
    currentFirst.focus();
    await expect(currentFirst).toHaveFocus();
    await userEvent.keyboard("{Home}");
    await expect(canvas.getByTestId("boundary-page-value")).toHaveTextContent("1");
    await userEvent.keyboard("{End}");
    const currentLast = await canvas.findByRole("button", {
      name: "Current page, 12"
    });
    await expect(currentLast).toHaveAttribute("aria-keyshortcuts", "Home ArrowLeft ArrowRight");
    await expect(canvas.getByTestId("boundary-page-value")).toHaveTextContent("12");
  }
}`,...(Fe=(Ie=O.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};var ke,Se,Ke;J.parameters={...J.parameters,docs:{...(ke=J.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 640,
    display: "grid",
    gap: 12
  }}>
      <h3 id="pagination-release-heading" style={{
      margin: 0
    }}>
        Release pages
      </h3>
      <Pagination {...args} ariaLabelledBy="pagination-release-heading" />
    </div>,
  args: {
    page: 3,
    pageCount: 12,
    onPageChange: () => {}
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const nav = await canvas.findByRole("navigation", {
      name: "Release pages"
    });
    await expect(nav).toHaveAttribute("aria-labelledby", "pagination-release-heading");
    await expect(nav).not.toHaveAttribute("aria-label");
  }
}`,...(Ke=(Se=J.parameters)==null?void 0:Se.docs)==null?void 0:Ke.source}}};var Ge,Me,$e;Q.parameters={...Q.parameters,docs:{...(Ge=Q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 640,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)",
      fontSize: 13
    }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores pagination
        focus-visible state.
      </p>
      <button type="button">Before pagination</button>
      <Pagination page={4} pageCount={12} onPageChange={() => {}} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before pagination"
    });
    const firstButton = canvas.getByRole("button", {
      name: "Go to first page"
    });
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(firstButton).toHaveFocus();
    await expect(firstButton).toHaveAttribute("data-focus-visible", "true");
  }
}`,...($e=(Me=Q.parameters)==null?void 0:Me.docs)==null?void 0:$e.source}}};const ot=["Controlled","KeyboardShortcuts","ModifierKeyGuard","RtlKeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","CustomAriaLabels","BoundaryAriaLabels","BoundaryShortcutHints","LabelledByHeading","FocusIntentReentry"];export{N as BoundaryAriaLabels,O as BoundaryShortcutHints,V as CompactRange,G as Controlled,z as CustomAriaLabels,_ as DisabledPagination,Q as FocusIntentReentry,M as KeyboardShortcuts,J as LabelledByHeading,$ as ModifierKeyGuard,q as RtlKeyboardShortcuts,W as WithoutFirstLast,ot as __namedExportsOrder,rt as default};
