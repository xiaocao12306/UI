import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{B as K}from"./Badge-ZJmMstsz.js";import{within as b,expect as r,userEvent as g,fireEvent as Ne}from"./index-DgAF9SIF.js";function A(t,e,s){return Math.min(Math.max(t,e),s)}function ee(t,e){const s=e-t+1;return Array.from({length:s},(i,p)=>t+p)}function _e(t,e,s,i){const p=i*2+s*2+3;if(e<=p)return ee(1,e);const c=Math.max(t-s,i+2),f=Math.min(t+s,e-i-1),y=[],Z=ee(1,i),G=ee(e-i+1,e);y.push(...Z),c>i+2?y.push("ellipsis-left"):i+1<c&&y.push(i+1);for(let x=c;x<=f;x+=1)y.push(x);return f<e-i-1?y.push("ellipsis-right"):f+1<e-i+1&&y.push(e-i),y.push(...G),y}function w({page:t,pageCount:e,onPageChange:s,siblingCount:i=1,boundaryCount:p=1,disabled:c=!1,showFirstLast:f=!0,ariaLabel:y="Pagination",ariaLabelledBy:Z,getItemAriaLabel:G=oe}){const x=d.useRef(null),k=d.useRef(null),M=d.useRef(!1),B=d.useRef(!1),[P,$]=d.useState(null),[C,R]=d.useState(null),Ve=te(y,"Pagination"),ae=te(Z),H=Math.max(e,1),l=A(t,1,H),We=e<=1?[]:_e(l,e,i,p),ne=A(l-1,1,H),re=A(l+1,1,H),m=!c&&e>1&&l>1,v=!c&&e>1&&l<e,I=d.useMemo(()=>{if(c||e<=1)return;const a=[];return m&&a.push("Home","PageUp"),v&&a.push("End","PageDown"),(m||v)&&a.push("ArrowLeft","ArrowRight"),a.length>0?a.join(" "):void 0},[v,m,c,e]),T=d.useCallback((a,o)=>te(G(a,o),oe(a,o)),[G]);d.useEffect(()=>{c&&($(null),R(null))},[c]),d.useEffect(()=>{var D;const a=((D=x.current)==null?void 0:D.ownerDocument)??document,o=h=>{h.metaKey||h.altKey||h.ctrlKey||(B.current=!0)},u=h=>{"button"in h&&!se(h.button)||"ctrlKey"in h&&h.ctrlKey||(B.current=!1)};return a.addEventListener("keydown",o,!0),a.addEventListener("pointerdown",u,!0),a.addEventListener("mousedown",u,!0),a.addEventListener("touchstart",u,!0),()=>{a.removeEventListener("keydown",o,!0),a.removeEventListener("pointerdown",u,!0),a.removeEventListener("mousedown",u,!0),a.removeEventListener("touchstart",u,!0)}},[]);const E=a=>{if(c||e<=1)return;const o=A(a,1,e);o!==l&&s(o)};d.useLayoutEffect(()=>{var u;if(k.current===null)return;const a=k.current;k.current=null;const o=(u=x.current)==null?void 0:u.querySelector(`button[data-aurora-pagination-page="${a}"]`);o&&(M.current=!0,o.focus(),M.current=!1)},[l]);const j=a=>{const o=A(a,1,e);if(o===l){k.current=null;return}const u=`page-${o}`;$(u),R(B.current?u:null),k.current=o,E(o)},L=a=>{if(B.current=!0,c||(a.altKey||a.ctrlKey||a.metaKey)&&ze(a.key))return;if(a.key==="Home"){if(l===1)return;a.preventDefault(),j(1);return}if(a.key==="End"){if(l===H)return;a.preventDefault(),j(H);return}if(a.key==="PageUp"){if(l===1)return;a.preventDefault(),j(l-1);return}if(a.key==="PageDown"){if(l===H)return;a.preventDefault(),j(l+1);return}const o=Oe(a.key,a.currentTarget);if(o===void 0)return;const u=A(l+o,1,H);u!==l&&(a.preventDefault(),j(u))},F=d.useCallback(a=>({"data-focus-visible":P===a&&C===a?"true":void 0,onFocus:o=>{M.current||($(a),R(Xe(o.currentTarget,B.current)?a:null))},onBlur:()=>{M.current||($(o=>o===a?null:o),R(o=>o===a?null:o))},onMouseDown:o=>{o.button!==0||o.ctrlKey||(B.current=!1,R(u=>u===a?null:u))},onPointerDown:o=>{!se(o.button)||o.ctrlKey||(B.current=!1,R(u=>u===a?null:u))}}),[P,C]);return e<=1?null:n.jsx("nav",{ref:x,"aria-label":ae?void 0:Ve,"aria-labelledby":ae,children:n.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[f?n.jsx("li",{children:n.jsx("button",{...F("first"),type:"button",disabled:!m,onClick:()=>E(1),onKeyDown:L,"aria-label":T("first",1),"aria-keyshortcuts":m?I:void 0,style:S(!1,!m,P==="first"&&C==="first"),children:"«"})}):null,n.jsx("li",{children:n.jsx("button",{...F("previous"),type:"button",disabled:!m,onClick:()=>E(ne),onKeyDown:L,"aria-label":T("previous",ne),"aria-keyshortcuts":m?I:void 0,style:S(!1,!m,P==="previous"&&C==="previous"),children:"‹"})}),We.map((a,o)=>{if(typeof a!="number")return n.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${a}-${o}`);const u=a===l,D=`page-${a}`;return n.jsx("li",{children:n.jsx("button",{...F(D),type:"button",onClick:()=>E(a),disabled:c,onKeyDown:L,"data-aurora-pagination-page":a,"aria-current":u?"page":void 0,"aria-label":T(u?"current":"page",a),"aria-keyshortcuts":c?void 0:I,style:S(u,c,P===D&&C===D),children:a})},a)}),n.jsx("li",{children:n.jsx("button",{...F("next"),type:"button",disabled:!v,onClick:()=>E(re),onKeyDown:L,"aria-label":T("next",re),"aria-keyshortcuts":v?I:void 0,style:S(!1,!v,P==="next"&&C==="next"),children:"›"})}),f?n.jsx("li",{children:n.jsx("button",{...F("last"),type:"button",disabled:!v,onClick:()=>E(e),onKeyDown:L,"aria-label":T("last",e),"aria-keyshortcuts":v?I:void 0,style:S(!1,!v,P==="last"&&C==="last"),children:"»"})}):null]})})}function ze(t){return t==="Home"||t==="End"||t==="PageUp"||t==="PageDown"||t==="ArrowLeft"||t==="ArrowRight"}function Oe(t,e){if(!(t!=="ArrowLeft"&&t!=="ArrowRight"))return Je(t,Qe(e))}function Je(t,e){return t==="ArrowRight"?e?-1:1:e?1:-1}function Qe(t){if(!t)return!1;const e=t.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const s=t.ownerDocument.defaultView??(typeof window<"u"?window:null);return s?s.getComputedStyle(t).direction==="rtl":!1}function oe(t,e){switch(t){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function S(t,e,s){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:t?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:t?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit",boxShadow:!e&&s?"0 0 0 3px color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)":"none"}}function te(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}function Xe(t,e){try{return t.matches(":focus-visible")||e}catch{return e}}function se(t){return typeof t!="number"||t<=0}w.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,computed:!1}}}};const it={title:"Data/Pagination",component:w,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior, accessible page labels, and Home/End/PageUp/PageDown keyboard paths."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function Ye(){const[t,e]=d.useState(1);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),n.jsx(K,{tone:"default",children:t})]}),n.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const U={render:()=>n.jsx(Ye,{}),play:async({canvasElement:t})=>{const e=b(t);await g.click(await e.findByRole("button",{name:"Go to page 2"})),await r(await e.findByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function Ze(){const[t,e]=d.useState(4);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),n.jsx(K,{tone:"default",children:t})]}),n.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const q={render:()=>n.jsx(Ze,{}),play:async({canvasElement:t})=>{const e=b(t),s=await e.findByRole("button",{name:"Current page, 4"});s.focus(),await r(s).toHaveFocus(),await r(s).toHaveAttribute("aria-keyshortcuts","Home PageUp End PageDown ArrowLeft ArrowRight"),await g.keyboard("{PageDown}");const i=await e.findByRole("button",{name:"Current page, 5"});await r(i).toBeInTheDocument(),await r(i).toHaveFocus(),await g.keyboard("{PageUp}");const p=await e.findByRole("button",{name:"Current page, 4"});await r(p).toBeInTheDocument(),await r(p).toHaveFocus(),await g.keyboard("{End}");const c=await e.findByRole("button",{name:"Current page, 12"});await r(c).toBeInTheDocument(),await r(c).toHaveFocus(),await g.keyboard("{Home}");const f=await e.findByRole("button",{name:"Current page, 1"});await r(f).toBeInTheDocument(),await r(f).toHaveFocus()}};function et(){const[t,e]=d.useState(4);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Modifier guard page"}),n.jsx(K,{tone:"default","data-testid":"pagination-modifier-guard-page",children:t})]}),n.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const V={render:()=>n.jsx(et,{}),play:async({canvasElement:t})=>{const e=b(t),s=await e.findByRole("button",{name:"Current page, 4"});s.focus(),await r(s).toHaveFocus(),await r(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await g.keyboard("{Control>}{End}{/Control}"),await g.keyboard("{Meta>}{ArrowRight}{/Meta}"),await g.keyboard("{Alt>}{Home}{/Alt}"),await r(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await r(e.getByRole("button",{name:"Current page, 4"})).toHaveFocus(),await g.keyboard("{End}"),await r(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("12"),await r(await e.findByRole("button",{name:"Current page, 12"})).toHaveFocus()}};function tt(){const[t,e]=d.useState(4);return n.jsxs("div",{dir:"rtl",style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"صفحه فعال"}),n.jsx(K,{tone:"default","data-testid":"rtl-page-value",children:t})]}),n.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const W={render:()=>n.jsx(tt,{}),play:async({canvasElement:t})=>{const e=b(t),s=await e.findByRole("button",{name:"Current page, 4"});s.focus(),await r(s).toHaveFocus(),await g.keyboard("{ArrowRight}");const i=await e.findByRole("button",{name:"Current page, 3"});await r(i).toBeInTheDocument(),await r(i).toHaveFocus(),await r(e.getByTestId("rtl-page-value")).toHaveTextContent("3"),await g.keyboard("{ArrowLeft}");const p=await e.findByRole("button",{name:"Current page, 4"});await r(p).toBeInTheDocument(),await r(p).toHaveFocus(),await r(e.getByTestId("rtl-page-value")).toHaveTextContent("4")}},N={args:{page:9,pageCount:48,onPageChange:()=>{}}},_={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},z={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}},O={args:{page:2,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}}},J={args:{page:1,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}},play:async({canvasElement:t})=>{const e=b(t);await r(e.getByRole("button",{name:"Pagination previous 1"})).toBeInTheDocument(),await r(e.getByRole("button",{name:"Pagination next 2"})).toBeInTheDocument()}};function at(){const[t,e]=d.useState(1);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Boundary page"}),n.jsx(K,{tone:"default","data-testid":"boundary-page-value",children:t})]}),n.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const Q={render:()=>n.jsx(at,{}),play:async({canvasElement:t})=>{const e=b(t),s=await e.findByRole("button",{name:"Current page, 1"});await r(s).toHaveAttribute("aria-keyshortcuts","End PageDown ArrowLeft ArrowRight"),s.focus(),await r(s).toHaveFocus(),await g.keyboard("{PageUp}"),await r(e.getByTestId("boundary-page-value")).toHaveTextContent("1"),await g.keyboard("{Home}"),await r(e.getByTestId("boundary-page-value")).toHaveTextContent("1"),await g.keyboard("{End}");const i=await e.findByRole("button",{name:"Current page, 12"});await r(i).toHaveAttribute("aria-keyshortcuts","Home PageUp ArrowLeft ArrowRight"),await r(e.getByTestId("boundary-page-value")).toHaveTextContent("12"),await g.keyboard("{PageDown}"),await r(e.getByTestId("boundary-page-value")).toHaveTextContent("12")}},X={render:t=>n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsx("h3",{id:"pagination-release-heading",style:{margin:0},children:"Release pages"}),n.jsx(w,{...t,ariaLabelledBy:"pagination-release-heading"})]}),args:{page:3,pageCount:12,onPageChange:()=>{}},play:async({canvasElement:t})=>{const s=await b(t).findByRole("navigation",{name:"Release pages"});await r(s).toHaveAttribute("aria-labelledby","pagination-release-heading"),await r(s).not.toHaveAttribute("aria-label")}},Y={render:()=>n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores pagination focus-visible state."}),n.jsx("button",{type:"button",children:"Before pagination"}),n.jsx(w,{page:4,pageCount:12,onPageChange:()=>{}})]}),play:async({canvasElement:t})=>{const e=b(t),s=await e.findByRole("button",{name:"Before pagination"}),i=e.getByRole("button",{name:"Go to first page"});await g.click(s),await g.tab(),await r(i).toHaveFocus(),await r(i).toHaveAttribute("data-focus-visible","true"),Ne.mouseDown(i,{button:0,ctrlKey:!0}),await r(i).toHaveAttribute("data-focus-visible","true")}};var ie,ue,ce;U.parameters={...U.parameters,docs:{...(ie=U.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(ue=U.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var le,de,ge;q.parameters={...q.parameters,docs:{...(le=q.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
    await expect(current).toHaveAttribute("aria-keyshortcuts", "Home PageUp End PageDown ArrowLeft ArrowRight");
    await userEvent.keyboard("{PageDown}");
    const currentNext = await canvas.findByRole("button", {
      name: "Current page, 5"
    });
    await expect(currentNext).toBeInTheDocument();
    await expect(currentNext).toHaveFocus();
    await userEvent.keyboard("{PageUp}");
    const currentBack = await canvas.findByRole("button", {
      name: "Current page, 4"
    });
    await expect(currentBack).toBeInTheDocument();
    await expect(currentBack).toHaveFocus();
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
}`,...(ge=(de=q.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var pe,ye,fe;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(fe=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var me,ve,we;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(we=(ve=W.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var he,be,xe;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(xe=(be=N.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Be,Pe,Ce;_.parameters={..._.parameters,docs:{...(Be=_.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(Ce=(Pe=_.parameters)==null?void 0:Pe.docs)==null?void 0:Ce.source}}};var He,Re,Te;z.parameters={...z.parameters,docs:{...(He=z.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(Te=(Re=z.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var Ee,De,Ae;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(Ae=(De=O.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};var ke,Ie,je;J.parameters={...J.parameters,docs:{...(ke=J.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(je=(Ie=J.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Le,Fe,Se;Q.parameters={...Q.parameters,docs:{...(Le=Q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <BoundaryShortcutHintsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const currentFirst = await canvas.findByRole("button", {
      name: "Current page, 1"
    });
    await expect(currentFirst).toHaveAttribute("aria-keyshortcuts", "End PageDown ArrowLeft ArrowRight");
    currentFirst.focus();
    await expect(currentFirst).toHaveFocus();
    await userEvent.keyboard("{PageUp}");
    await expect(canvas.getByTestId("boundary-page-value")).toHaveTextContent("1");
    await userEvent.keyboard("{Home}");
    await expect(canvas.getByTestId("boundary-page-value")).toHaveTextContent("1");
    await userEvent.keyboard("{End}");
    const currentLast = await canvas.findByRole("button", {
      name: "Current page, 12"
    });
    await expect(currentLast).toHaveAttribute("aria-keyshortcuts", "Home PageUp ArrowLeft ArrowRight");
    await expect(canvas.getByTestId("boundary-page-value")).toHaveTextContent("12");
    await userEvent.keyboard("{PageDown}");
    await expect(canvas.getByTestId("boundary-page-value")).toHaveTextContent("12");
  }
}`,...(Se=(Fe=Q.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};var Ke,Ge,Me;X.parameters={...X.parameters,docs:{...(Ke=X.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Me=(Ge=X.parameters)==null?void 0:Ge.docs)==null?void 0:Me.source}}};var $e,Ue,qe;Y.parameters={...Y.parameters,docs:{...($e=Y.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
    fireEvent.mouseDown(firstButton, {
      button: 0,
      ctrlKey: true
    });
    await expect(firstButton).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(qe=(Ue=Y.parameters)==null?void 0:Ue.docs)==null?void 0:qe.source}}};const ut=["Controlled","KeyboardShortcuts","ModifierKeyGuard","RtlKeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","CustomAriaLabels","BoundaryAriaLabels","BoundaryShortcutHints","LabelledByHeading","FocusIntentReentry"];export{J as BoundaryAriaLabels,Q as BoundaryShortcutHints,N as CompactRange,U as Controlled,O as CustomAriaLabels,z as DisabledPagination,Y as FocusIntentReentry,q as KeyboardShortcuts,X as LabelledByHeading,V as ModifierKeyGuard,W as RtlKeyboardShortcuts,_ as WithoutFirstLast,ut as __namedExportsOrder,it as default};
