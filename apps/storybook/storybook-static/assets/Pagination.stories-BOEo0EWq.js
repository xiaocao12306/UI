import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{B as I}from"./Badge-ZJmMstsz.js";import{within as h,expect as o,userEvent as p,fireEvent as k}from"./index-DgAF9SIF.js";function A(t,e,r){return Math.min(Math.max(t,e),r)}function ae(t,e){const r=e-t+1;return Array.from({length:r},(i,g)=>t+g)}function Qe(t,e,r,i){const g=i*2+r*2+3;if(e<=g)return ae(1,e);const c=Math.max(t-r,i+2),f=Math.min(t+r,e-i-1),y=[],te=ae(1,i),M=ae(e-i+1,e);y.push(...te),c>i+2?y.push("ellipsis-left"):i+1<c&&y.push(i+1);for(let x=c;x<=f;x+=1)y.push(x);return f<e-i-1?y.push("ellipsis-right"):f+1<e-i+1&&y.push(e-i),y.push(...M),y}function m({page:t,pageCount:e,onPageChange:r,siblingCount:i=1,boundaryCount:g=1,disabled:c=!1,showFirstLast:f=!0,ariaLabel:y="Pagination",ariaLabelledBy:te,getItemAriaLabel:M=ie}){const x=l.useRef(null),j=l.useRef(null),$=l.useRef(!1),B=l.useRef(!1),[P,U]=l.useState(null),[C,D]=l.useState(null),Oe=ne(y,"Pagination"),re=ne(te),H=Math.max(e,1),d=A(t,1,H),Je=e<=1?[]:Qe(d,e,i,g),oe=A(d-1,1,H),se=A(d+1,1,H),v=!c&&e>1&&d>1,w=!c&&e>1&&d<e,L=l.useMemo(()=>{if(c||e<=1)return;const a=[];return v&&a.push("Home","PageUp"),w&&a.push("End","PageDown"),(v||w)&&a.push("ArrowLeft","ArrowRight"),a.length>0?a.join(" "):void 0},[w,v,c,e]),R=l.useCallback((a,s)=>ne(M(a,s),ie(a,s)),[M]);l.useEffect(()=>{c&&(U(null),D(null))},[c]),l.useEffect(()=>{var T;const a=((T=x.current)==null?void 0:T.ownerDocument)??document,s=b=>{b.metaKey||b.altKey||b.ctrlKey||(B.current=!0)},u=b=>{"button"in b&&!ue(b.button)||"ctrlKey"in b&&b.ctrlKey||(B.current=!1)};return a.addEventListener("keydown",s,!0),a.addEventListener("pointerdown",u,!0),a.addEventListener("mousedown",u,!0),a.addEventListener("touchstart",u,!0),()=>{a.removeEventListener("keydown",s,!0),a.removeEventListener("pointerdown",u,!0),a.removeEventListener("mousedown",u,!0),a.removeEventListener("touchstart",u,!0)}},[]);const E=a=>{if(c||e<=1)return;const s=A(a,1,e);s!==d&&r(s)};l.useLayoutEffect(()=>{var u;if(j.current===null)return;const a=j.current;j.current=null;const s=(u=x.current)==null?void 0:u.querySelector(`button[data-aurora-pagination-page="${a}"]`);s&&($.current=!0,s.focus(),$.current=!1)},[d]);const F=a=>{const s=A(a,1,e);if(s===d){j.current=null;return}const u=`page-${s}`;U(u),D(B.current?u:null),j.current=s,E(s)},S=a=>{if(B.current=!0,a.defaultPrevented||c||(a.altKey||a.ctrlKey||a.metaKey)&&Xe(a.key))return;if(a.key==="Home"){if(d===1)return;a.preventDefault(),F(1);return}if(a.key==="End"){if(d===H)return;a.preventDefault(),F(H);return}if(a.key==="PageUp"){if(d===1)return;a.preventDefault(),F(d-1);return}if(a.key==="PageDown"){if(d===H)return;a.preventDefault(),F(d+1);return}const s=Ye(a.key,a.currentTarget);if(s===void 0)return;const u=A(d+s,1,H);u!==d&&(a.preventDefault(),F(u))},K=l.useCallback(a=>({"data-focus-visible":P===a&&C===a?"true":void 0,onFocus:s=>{$.current||(U(a),D(tt(s.currentTarget,B.current)?a:null))},onBlur:()=>{$.current||(U(s=>s===a?null:s),D(s=>s===a?null:s))},onMouseDown:s=>{s.button!==0||s.ctrlKey||(B.current=!1,D(u=>u===a?null:u))},onPointerDown:s=>{!ue(s.button)||s.ctrlKey||(B.current=!1,D(u=>u===a?null:u))}}),[P,C]);return e<=1?null:n.jsx("nav",{ref:x,"aria-label":re?void 0:Oe,"aria-labelledby":re,children:n.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[f?n.jsx("li",{children:n.jsx("button",{...K("first"),type:"button",disabled:!v,onClick:()=>E(1),onKeyDown:S,"aria-label":R("first",1),"aria-keyshortcuts":v?L:void 0,style:G(!1,!v,P==="first"&&C==="first"),children:"«"})}):null,n.jsx("li",{children:n.jsx("button",{...K("previous"),type:"button",disabled:!v,onClick:()=>E(oe),onKeyDown:S,"aria-label":R("previous",oe),"aria-keyshortcuts":v?L:void 0,style:G(!1,!v,P==="previous"&&C==="previous"),children:"‹"})}),Je.map((a,s)=>{if(typeof a!="number")return n.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${a}-${s}`);const u=a===d,T=`page-${a}`;return n.jsx("li",{children:n.jsx("button",{...K(T),type:"button",onClick:()=>E(a),disabled:c,onKeyDown:S,"data-aurora-pagination-page":a,"aria-current":u?"page":void 0,"aria-label":R(u?"current":"page",a),"aria-keyshortcuts":c?void 0:L,style:G(u,c,P===T&&C===T),children:a})},a)}),n.jsx("li",{children:n.jsx("button",{...K("next"),type:"button",disabled:!w,onClick:()=>E(se),onKeyDown:S,"aria-label":R("next",se),"aria-keyshortcuts":w?L:void 0,style:G(!1,!w,P==="next"&&C==="next"),children:"›"})}),f?n.jsx("li",{children:n.jsx("button",{...K("last"),type:"button",disabled:!w,onClick:()=>E(e),onKeyDown:S,"aria-label":R("last",e),"aria-keyshortcuts":w?L:void 0,style:G(!1,!w,P==="last"&&C==="last"),children:"»"})}):null]})})}function Xe(t){return t==="Home"||t==="End"||t==="PageUp"||t==="PageDown"||t==="ArrowLeft"||t==="ArrowRight"}function Ye(t,e){if(!(t!=="ArrowLeft"&&t!=="ArrowRight"))return Ze(t,et(e))}function Ze(t,e){return t==="ArrowRight"?e?-1:1:e?1:-1}function et(t){if(!t)return!1;const e=t.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const r=t.ownerDocument.defaultView??(typeof window<"u"?window:null);return r?r.getComputedStyle(t).direction==="rtl":!1}function ie(t,e){switch(t){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function G(t,e,r){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:t?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:t?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit",boxShadow:!e&&r?"0 0 0 3px color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)":"none"}}function ne(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}function tt(t,e){try{return t.matches(":focus-visible")||e}catch{return e}}function ue(t){return typeof t!="number"||t<=0}m.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,computed:!1}}}};const pt={title:"Data/Pagination",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior, accessible page labels, and Home/End/PageUp/PageDown keyboard paths."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function at(){const[t,e]=l.useState(1);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),n.jsx(I,{tone:"default",children:t})]}),n.jsx(m,{page:t,pageCount:12,onPageChange:e})]})}const q={render:()=>n.jsx(at,{}),play:async({canvasElement:t})=>{const e=h(t);await p.click(await e.findByRole("button",{name:"Go to page 2"})),await o(await e.findByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function nt(){const[t,e]=l.useState(4);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),n.jsx(I,{tone:"default",children:t})]}),n.jsx(m,{page:t,pageCount:12,onPageChange:e})]})}const V={render:()=>n.jsx(nt,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await o(r).toHaveAttribute("aria-keyshortcuts","Home PageUp End PageDown ArrowLeft ArrowRight"),await p.keyboard("{PageDown}");const i=await e.findByRole("button",{name:"Current page, 5"});await o(i).toBeInTheDocument(),await o(i).toHaveFocus(),await p.keyboard("{PageUp}");const g=await e.findByRole("button",{name:"Current page, 4"});await o(g).toBeInTheDocument(),await o(g).toHaveFocus(),await p.keyboard("{End}");const c=await e.findByRole("button",{name:"Current page, 12"});await o(c).toBeInTheDocument(),await o(c).toHaveFocus(),await p.keyboard("{Home}");const f=await e.findByRole("button",{name:"Current page, 1"});await o(f).toBeInTheDocument(),await o(f).toHaveFocus()}};function rt(){const[t,e]=l.useState(4);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Modifier guard page"}),n.jsx(I,{tone:"default","data-testid":"pagination-modifier-guard-page",children:t})]}),n.jsx(m,{page:t,pageCount:12,onPageChange:e})]})}const W={render:()=>n.jsx(rt,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await p.keyboard("{Control>}{End}{/Control}"),await p.keyboard("{Meta>}{ArrowRight}{/Meta}"),await p.keyboard("{Alt>}{Home}{/Alt}"),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await o(e.getByRole("button",{name:"Current page, 4"})).toHaveFocus(),await p.keyboard("{End}"),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("12"),await o(await e.findByRole("button",{name:"Current page, 12"})).toHaveFocus()}};function ot(){const[t,e]=l.useState(4);return n.jsxs("div",{onKeyDownCapture:r=>{(r.key==="Home"||r.key==="End"||r.key==="PageUp"||r.key==="PageDown"||r.key==="ArrowLeft"||r.key==="ArrowRight")&&r.preventDefault()},style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Preempted page"}),n.jsx(I,{tone:"default","data-testid":"pagination-preempted-page",children:t})]}),n.jsx(m,{page:t,pageCount:12,onPageChange:e})]})}const N={render:()=>n.jsx(ot,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await o(e.getByTestId("pagination-preempted-page")).toHaveTextContent("4"),k.keyDown(r,{key:"Home"}),k.keyDown(r,{key:"End"}),k.keyDown(r,{key:"PageUp"}),k.keyDown(r,{key:"PageDown"}),k.keyDown(r,{key:"ArrowLeft"}),k.keyDown(r,{key:"ArrowRight"}),await o(e.getByTestId("pagination-preempted-page")).toHaveTextContent("4"),await o(e.getByRole("button",{name:"Current page, 4"})).toHaveFocus()}};function st(){const[t,e]=l.useState(4);return n.jsxs("div",{dir:"rtl",style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"صفحه فعال"}),n.jsx(I,{tone:"default","data-testid":"rtl-page-value",children:t})]}),n.jsx(m,{page:t,pageCount:12,onPageChange:e})]})}const _={render:()=>n.jsx(st,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await p.keyboard("{ArrowRight}");const i=await e.findByRole("button",{name:"Current page, 3"});await o(i).toBeInTheDocument(),await o(i).toHaveFocus(),await o(e.getByTestId("rtl-page-value")).toHaveTextContent("3"),await p.keyboard("{ArrowLeft}");const g=await e.findByRole("button",{name:"Current page, 4"});await o(g).toBeInTheDocument(),await o(g).toHaveFocus(),await o(e.getByTestId("rtl-page-value")).toHaveTextContent("4")}},z={args:{page:9,pageCount:48,onPageChange:()=>{}}},O={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},J={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}},Q={args:{page:2,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}}},X={args:{page:1,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}},play:async({canvasElement:t})=>{const e=h(t);await o(e.getByRole("button",{name:"Pagination previous 1"})).toBeInTheDocument(),await o(e.getByRole("button",{name:"Pagination next 2"})).toBeInTheDocument()}};function it(){const[t,e]=l.useState(1);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Boundary page"}),n.jsx(I,{tone:"default","data-testid":"boundary-page-value",children:t})]}),n.jsx(m,{page:t,pageCount:12,onPageChange:e})]})}const Y={render:()=>n.jsx(it,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 1"});await o(r).toHaveAttribute("aria-keyshortcuts","End PageDown ArrowLeft ArrowRight"),r.focus(),await o(r).toHaveFocus(),await p.keyboard("{PageUp}"),await o(e.getByTestId("boundary-page-value")).toHaveTextContent("1"),await p.keyboard("{Home}"),await o(e.getByTestId("boundary-page-value")).toHaveTextContent("1"),await p.keyboard("{End}");const i=await e.findByRole("button",{name:"Current page, 12"});await o(i).toHaveAttribute("aria-keyshortcuts","Home PageUp ArrowLeft ArrowRight"),await o(e.getByTestId("boundary-page-value")).toHaveTextContent("12"),await p.keyboard("{PageDown}"),await o(e.getByTestId("boundary-page-value")).toHaveTextContent("12")}},Z={render:t=>n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsx("h3",{id:"pagination-release-heading",style:{margin:0},children:"Release pages"}),n.jsx(m,{...t,ariaLabelledBy:"pagination-release-heading"})]}),args:{page:3,pageCount:12,onPageChange:()=>{}},play:async({canvasElement:t})=>{const r=await h(t).findByRole("navigation",{name:"Release pages"});await o(r).toHaveAttribute("aria-labelledby","pagination-release-heading"),await o(r).not.toHaveAttribute("aria-label")}},ee={render:()=>n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores pagination focus-visible state."}),n.jsx("button",{type:"button",children:"Before pagination"}),n.jsx(m,{page:4,pageCount:12,onPageChange:()=>{}})]}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Before pagination"}),i=e.getByRole("button",{name:"Go to first page"});await p.click(r),await p.tab(),await o(i).toHaveFocus(),await o(i).toHaveAttribute("data-focus-visible","true"),k.mouseDown(i,{button:0,ctrlKey:!0}),await o(i).toHaveAttribute("data-focus-visible","true")}};var ce,le,de;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=q.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,ge,ye;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var me,fe,ve;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(fe=W.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var we,he,be;N.parameters={...N.parameters,docs:{...(we=N.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <ManagedKeysPreemptedPaginationDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const current = await canvas.findByRole("button", {
      name: "Current page, 4"
    });
    current.focus();
    await expect(current).toHaveFocus();
    await expect(canvas.getByTestId("pagination-preempted-page")).toHaveTextContent("4");
    fireEvent.keyDown(current, {
      key: "Home"
    });
    fireEvent.keyDown(current, {
      key: "End"
    });
    fireEvent.keyDown(current, {
      key: "PageUp"
    });
    fireEvent.keyDown(current, {
      key: "PageDown"
    });
    fireEvent.keyDown(current, {
      key: "ArrowLeft"
    });
    fireEvent.keyDown(current, {
      key: "ArrowRight"
    });
    await expect(canvas.getByTestId("pagination-preempted-page")).toHaveTextContent("4");
    await expect(canvas.getByRole("button", {
      name: "Current page, 4"
    })).toHaveFocus();
  }
}`,...(be=(he=N.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var xe,Be,Pe;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Pe=(Be=_.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source}}};var Ce,He,ke;z.parameters={...z.parameters,docs:{...(Ce=z.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(ke=(He=z.parameters)==null?void 0:He.docs)==null?void 0:ke.source}}};var De,Re,Ee;O.parameters={...O.parameters,docs:{...(De=O.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(Ee=(Re=O.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Te,Ae,Ie;J.parameters={...J.parameters,docs:{...(Te=J.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(Ie=(Ae=J.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var je,Le,Fe;Q.parameters={...Q.parameters,docs:{...(je=Q.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(Fe=(Le=Q.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source}}};var Se,Ke,Ge;X.parameters={...X.parameters,docs:{...(Se=X.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ge=(Ke=X.parameters)==null?void 0:Ke.docs)==null?void 0:Ge.source}}};var Me,$e,Ue;Y.parameters={...Y.parameters,docs:{...(Me=Y.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ue=($e=Y.parameters)==null?void 0:$e.docs)==null?void 0:Ue.source}}};var qe,Ve,We;Z.parameters={...Z.parameters,docs:{...(qe=Z.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(We=(Ve=Z.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};var Ne,_e,ze;ee.parameters={...ee.parameters,docs:{...(Ne=ee.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(ze=(_e=ee.parameters)==null?void 0:_e.docs)==null?void 0:ze.source}}};const gt=["Controlled","KeyboardShortcuts","ModifierKeyGuard","ManagedKeysPreemptedByGlobalHandler","RtlKeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","CustomAriaLabels","BoundaryAriaLabels","BoundaryShortcutHints","LabelledByHeading","FocusIntentReentry"];export{X as BoundaryAriaLabels,Y as BoundaryShortcutHints,z as CompactRange,q as Controlled,Q as CustomAriaLabels,J as DisabledPagination,ee as FocusIntentReentry,V as KeyboardShortcuts,Z as LabelledByHeading,N as ManagedKeysPreemptedByGlobalHandler,W as ModifierKeyGuard,_ as RtlKeyboardShortcuts,O as WithoutFirstLast,gt as __namedExportsOrder,pt as default};
