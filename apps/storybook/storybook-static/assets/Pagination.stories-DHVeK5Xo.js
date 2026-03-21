import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as k}from"./Badge-ZJmMstsz.js";import{within as h,expect as s,userEvent as p}from"./index-DgAF9SIF.js";function j(t,e,r){return Math.min(Math.max(t,e),r)}function ee(t,e){const r=e-t+1;return Array.from({length:r},(i,g)=>t+g)}function _e(t,e,r,i){const g=i*2+r*2+3;if(e<=g)return ee(1,e);const l=Math.max(t-r,i+2),R=Math.min(t+r,e-i-1),m=[],Y=ee(1,i),K=ee(e-i+1,e);m.push(...Y),l>i+2?m.push("ellipsis-left"):i+1<l&&m.push(i+1);for(let b=l;b<=R;b+=1)m.push(b);return R<e-i-1?m.push("ellipsis-right"):R+1<e-i+1&&m.push(e-i),m.push(...K),m}function w({page:t,pageCount:e,onPageChange:r,siblingCount:i=1,boundaryCount:g=1,disabled:l=!1,showFirstLast:R=!0,ariaLabel:m="Pagination",ariaLabelledBy:Y,getItemAriaLabel:K=oe}){const b=c.useRef(null),L=c.useRef(null),G=c.useRef(!1),x=c.useRef(!1),[B,M]=c.useState(null),[C,P]=c.useState(null),Ve=te(m,"Pagination"),ae=te(Y),H=Math.max(e,1),d=j(t,1,H),We=e<=1?[]:_e(d,e,i,g),ne=j(d-1,1,H),re=j(d+1,1,H),y=!l&&e>1&&d>1,f=!l&&e>1&&d<e,D=c.useMemo(()=>{if(l||e<=1)return;const a=[];return y&&a.push("Home"),f&&a.push("End"),(y||f)&&a.push("ArrowLeft","ArrowRight"),a.length>0?a.join(" "):void 0},[f,y,l,e]),E=c.useCallback((a,o)=>te(K(a,o),oe(a,o)),[K]);c.useEffect(()=>{l&&(M(null),P(null))},[l]),c.useEffect(()=>{var T;const a=((T=b.current)==null?void 0:T.ownerDocument)??document,o=v=>{v.metaKey||v.altKey||v.ctrlKey||(x.current=!0)},u=v=>{"button"in v&&typeof v.button=="number"&&v.button!==0||"ctrlKey"in v&&v.ctrlKey||(x.current=!1)};return a.addEventListener("keydown",o,!0),a.addEventListener("pointerdown",u,!0),a.addEventListener("mousedown",u,!0),a.addEventListener("touchstart",u,!0),()=>{a.removeEventListener("keydown",o,!0),a.removeEventListener("pointerdown",u,!0),a.removeEventListener("mousedown",u,!0),a.removeEventListener("touchstart",u,!0)}},[]);const A=a=>{if(l||e<=1)return;const o=j(a,1,e);o!==d&&r(o)};c.useLayoutEffect(()=>{var u;if(L.current===null)return;const a=L.current;L.current=null;const o=(u=b.current)==null?void 0:u.querySelector(`button[data-aurora-pagination-page="${a}"]`);o&&(G.current=!0,o.focus(),G.current=!1)},[d]);const Z=a=>{const o=j(a,1,e);if(o===d){L.current=null;return}const u=`page-${o}`;M(u),P(x.current?u:null),L.current=o,A(o)},I=a=>{if(x.current=!0,l||(a.altKey||a.ctrlKey||a.metaKey)&&ze(a.key))return;if(a.key==="Home"){if(d===1)return;a.preventDefault(),Z(1);return}if(a.key==="End"){if(d===H)return;a.preventDefault(),Z(H);return}const o=Ne(a.key,a.currentTarget);if(o===void 0)return;const u=j(d+o,1,H);u!==d&&(a.preventDefault(),Z(u))},F=c.useCallback(a=>({"data-focus-visible":B===a&&C===a?"true":void 0,onFocus:o=>{G.current||(M(a),P(Qe(o.currentTarget,x.current)?a:null))},onBlur:()=>{G.current||(M(o=>o===a?null:o),P(o=>o===a?null:o))},onMouseDown:o=>{o.button===0&&(x.current=!1,P(u=>u===a?null:u))},onPointerDown:o=>{o.button===0&&(x.current=!1,P(u=>u===a?null:u))}}),[B,C]);return e<=1?null:n.jsx("nav",{ref:b,"aria-label":ae?void 0:Ve,"aria-labelledby":ae,children:n.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[R?n.jsx("li",{children:n.jsx("button",{...F("first"),type:"button",disabled:!y,onClick:()=>A(1),onKeyDown:I,"aria-label":E("first",1),"aria-keyshortcuts":y?D:void 0,style:S(!1,!y,B==="first"&&C==="first"),children:"«"})}):null,n.jsx("li",{children:n.jsx("button",{...F("previous"),type:"button",disabled:!y,onClick:()=>A(ne),onKeyDown:I,"aria-label":E("previous",ne),"aria-keyshortcuts":y?D:void 0,style:S(!1,!y,B==="previous"&&C==="previous"),children:"‹"})}),We.map((a,o)=>{if(typeof a!="number")return n.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${a}-${o}`);const u=a===d,T=`page-${a}`;return n.jsx("li",{children:n.jsx("button",{...F(T),type:"button",onClick:()=>A(a),disabled:l,onKeyDown:I,"data-aurora-pagination-page":a,"aria-current":u?"page":void 0,"aria-label":E(u?"current":"page",a),"aria-keyshortcuts":l?void 0:D,style:S(u,l,B===T&&C===T),children:a})},a)}),n.jsx("li",{children:n.jsx("button",{...F("next"),type:"button",disabled:!f,onClick:()=>A(re),onKeyDown:I,"aria-label":E("next",re),"aria-keyshortcuts":f?D:void 0,style:S(!1,!f,B==="next"&&C==="next"),children:"›"})}),R?n.jsx("li",{children:n.jsx("button",{...F("last"),type:"button",disabled:!f,onClick:()=>A(e),onKeyDown:I,"aria-label":E("last",e),"aria-keyshortcuts":f?D:void 0,style:S(!1,!f,B==="last"&&C==="last"),children:"»"})}):null]})})}function ze(t){return t==="Home"||t==="End"||t==="ArrowLeft"||t==="ArrowRight"}function Ne(t,e){if(!(t!=="ArrowLeft"&&t!=="ArrowRight"))return Oe(t,Je(e))}function Oe(t,e){return t==="ArrowRight"?e?-1:1:e?1:-1}function Je(t){if(!t)return!1;const e=t.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const r=t.ownerDocument.defaultView??(typeof window<"u"?window:null);return r?r.getComputedStyle(t).direction==="rtl":!1}function oe(t,e){switch(t){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function S(t,e,r){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:t?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:t?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit",boxShadow:!e&&r?"0 0 0 3px color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)":"none"}}function te(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}function Qe(t,e){try{return t.matches(":focus-visible")||e}catch{return e}}w.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,computed:!1}}}};const ot={title:"Data/Pagination",component:w,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior and accessible page labels."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function Ue(){const[t,e]=c.useState(1);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),n.jsx(k,{tone:"default",children:t})]}),n.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const $={render:()=>n.jsx(Ue,{}),play:async({canvasElement:t})=>{const e=h(t);await p.click(await e.findByRole("button",{name:"Go to page 2"})),await s(await e.findByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function Xe(){const[t,e]=c.useState(4);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),n.jsx(k,{tone:"default",children:t})]}),n.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const q={render:()=>n.jsx(Xe,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await s(r).toHaveFocus(),await s(r).toHaveAttribute("aria-keyshortcuts","Home End ArrowLeft ArrowRight"),await p.keyboard("{End}");const i=await e.findByRole("button",{name:"Current page, 12"});await s(i).toBeInTheDocument(),await s(i).toHaveFocus(),await p.keyboard("{Home}");const g=await e.findByRole("button",{name:"Current page, 1"});await s(g).toBeInTheDocument(),await s(g).toHaveFocus()}};function Ye(){const[t,e]=c.useState(4);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Modifier guard page"}),n.jsx(k,{tone:"default","data-testid":"pagination-modifier-guard-page",children:t})]}),n.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const V={render:()=>n.jsx(Ye,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await s(r).toHaveFocus(),await s(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await p.keyboard("{Control>}{End}{/Control}"),await p.keyboard("{Meta>}{ArrowRight}{/Meta}"),await p.keyboard("{Alt>}{Home}{/Alt}"),await s(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await s(e.getByRole("button",{name:"Current page, 4"})).toHaveFocus(),await p.keyboard("{End}"),await s(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("12"),await s(await e.findByRole("button",{name:"Current page, 12"})).toHaveFocus()}};function Ze(){const[t,e]=c.useState(4);return n.jsxs("div",{dir:"rtl",style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"صفحه فعال"}),n.jsx(k,{tone:"default","data-testid":"rtl-page-value",children:t})]}),n.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const W={render:()=>n.jsx(Ze,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await s(r).toHaveFocus(),await p.keyboard("{ArrowRight}");const i=await e.findByRole("button",{name:"Current page, 3"});await s(i).toBeInTheDocument(),await s(i).toHaveFocus(),await s(e.getByTestId("rtl-page-value")).toHaveTextContent("3"),await p.keyboard("{ArrowLeft}");const g=await e.findByRole("button",{name:"Current page, 4"});await s(g).toBeInTheDocument(),await s(g).toHaveFocus(),await s(e.getByTestId("rtl-page-value")).toHaveTextContent("4")}},_={args:{page:9,pageCount:48,onPageChange:()=>{}}},z={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},N={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}},O={args:{page:2,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}}},J={args:{page:1,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}},play:async({canvasElement:t})=>{const e=h(t);await s(e.getByRole("button",{name:"Pagination previous 1"})).toBeInTheDocument(),await s(e.getByRole("button",{name:"Pagination next 2"})).toBeInTheDocument()}};function et(){const[t,e]=c.useState(1);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Boundary page"}),n.jsx(k,{tone:"default","data-testid":"boundary-page-value",children:t})]}),n.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const Q={render:()=>n.jsx(et,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 1"});await s(r).toHaveAttribute("aria-keyshortcuts","End ArrowLeft ArrowRight"),r.focus(),await s(r).toHaveFocus(),await p.keyboard("{Home}"),await s(e.getByTestId("boundary-page-value")).toHaveTextContent("1"),await p.keyboard("{End}");const i=await e.findByRole("button",{name:"Current page, 12"});await s(i).toHaveAttribute("aria-keyshortcuts","Home ArrowLeft ArrowRight"),await s(e.getByTestId("boundary-page-value")).toHaveTextContent("12")}},U={render:t=>n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsx("h3",{id:"pagination-release-heading",style:{margin:0},children:"Release pages"}),n.jsx(w,{...t,ariaLabelledBy:"pagination-release-heading"})]}),args:{page:3,pageCount:12,onPageChange:()=>{}},play:async({canvasElement:t})=>{const r=await h(t).findByRole("navigation",{name:"Release pages"});await s(r).toHaveAttribute("aria-labelledby","pagination-release-heading"),await s(r).not.toHaveAttribute("aria-label")}},X={render:()=>n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores pagination focus-visible state."}),n.jsx("button",{type:"button",children:"Before pagination"}),n.jsx(w,{page:4,pageCount:12,onPageChange:()=>{}})]}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Before pagination"}),i=e.getByRole("button",{name:"Go to first page"});await p.click(r),await p.tab(),await s(i).toHaveFocus(),await s(i).toHaveAttribute("data-focus-visible","true")}};var se,ie,ue;$.parameters={...$.parameters,docs:{...(se=$.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ue=(ie=$.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var ce,le,de;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=q.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,ge,me;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var ye,fe,ve;W.parameters={...W.parameters,docs:{...(ye=W.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(fe=W.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var we,he,be;_.parameters={..._.parameters,docs:{...(we=_.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(be=(he=_.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var xe,Be,Ce;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(Ce=(Be=z.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var Re,Pe,He;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(He=(Pe=N.parameters)==null?void 0:Pe.docs)==null?void 0:He.source}}};var Ee,Ae,Te;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(Te=(Ae=O.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var je,Le,De;J.parameters={...J.parameters,docs:{...(je=J.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(De=(Le=J.parameters)==null?void 0:Le.docs)==null?void 0:De.source}}};var Ie,Fe,Se;Q.parameters={...Q.parameters,docs:{...(Ie=Q.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Se=(Fe=Q.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};var ke,Ke,Ge;U.parameters={...U.parameters,docs:{...(ke=U.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ge=(Ke=U.parameters)==null?void 0:Ke.docs)==null?void 0:Ge.source}}};var Me,$e,qe;X.parameters={...X.parameters,docs:{...(Me=X.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(qe=($e=X.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}};const st=["Controlled","KeyboardShortcuts","ModifierKeyGuard","RtlKeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","CustomAriaLabels","BoundaryAriaLabels","BoundaryShortcutHints","LabelledByHeading","FocusIntentReentry"];export{J as BoundaryAriaLabels,Q as BoundaryShortcutHints,_ as CompactRange,$ as Controlled,O as CustomAriaLabels,N as DisabledPagination,X as FocusIntentReentry,q as KeyboardShortcuts,U as LabelledByHeading,V as ModifierKeyGuard,W as RtlKeyboardShortcuts,z as WithoutFirstLast,st as __namedExportsOrder,ot as default};
