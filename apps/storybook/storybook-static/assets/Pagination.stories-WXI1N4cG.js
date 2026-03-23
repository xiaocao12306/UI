import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as P}from"./Badge-Cvc2u0v9.js";import{within as v,expect as o,userEvent as g,fireEvent as E}from"./index-DgAF9SIF.js";function j(t,e,r){return Math.min(Math.max(t,e),r)}function gt(t){return Number.isFinite(t)?Math.max(1,Math.trunc(t)):1}function dt(t,e){return Number.isFinite(t)?Math.trunc(t):e}function ge(t,e){return Number.isFinite(t)?Math.max(0,Math.trunc(t)):e}function de(t,e){return typeof t!="boolean"?e:t}function oe(t,e){const r=e-t+1;return Array.from({length:r},(i,p)=>t+p)}function pt(t,e,r,i){const p=i*2+r*2+3;if(e<=p)return oe(1,e);const y=Math.max(t-r,i+2),m=Math.min(t+r,e-i-1),b=[],re=oe(1,i),U=oe(e-i+1,e);b.push(...re),y>i+2?b.push("ellipsis-left"):i+1<y&&b.push(i+1);for(let R=y;R<=m;R+=1)b.push(R);return m<e-i-1?b.push("ellipsis-right"):m+1<e-i+1&&b.push(e-i),b.push(...U),b}function w({page:t,pageCount:e,onPageChange:r,siblingCount:i=1,boundaryCount:p=1,disabled:y=!1,showFirstLast:m=!0,ariaLabel:b="Pagination",ariaLabelledBy:re,getItemAriaLabel:U=pe}){const R=c.useRef(null),L=c.useRef(null),$=c.useRef(!1),H=c.useRef(!1),st=c.useRef(!1),[T,V]=c.useState(null),[D,k]=c.useState(null),it=ge(i,1),ut=ge(p,1),ct=se(b,"Pagination"),ie=se(re),f=de(y,!1),ue=de(m,!0),l=gt(e),d=j(dt(t,1),1,l),lt=l<=1?[]:pt(d,l,it,ut),ce=j(d-1,1,l),le=j(d+1,1,l),x=!f&&l>1&&d>1,B=!f&&l>1&&d<l,F=c.useMemo(()=>{if(f||l<=1)return;const n=[];return x&&n.push("Home","PageUp"),B&&n.push("End","PageDown"),(x||B)&&n.push("ArrowLeft","ArrowRight"),n.length>0?n.join(" "):void 0},[B,x,f,l]),I=c.useCallback((n,s)=>{const u=pe(n,s);let h;try{h=U(n,s),st.current=!1}catch{h=void 0}return se(h,u)},[U]);c.useEffect(()=>{f&&(V(null),k(null))},[f]),c.useEffect(()=>{var h;const n=((h=R.current)==null?void 0:h.ownerDocument)??document,s=C=>{C.metaKey||C.altKey||C.ctrlKey||(H.current=!0)},u=C=>{"button"in C&&!ye(C.button)||"ctrlKey"in C&&C.ctrlKey||(H.current=!1)};return n.addEventListener("keydown",s,!0),n.addEventListener("pointerdown",u,!0),n.addEventListener("mousedown",u,!0),n.addEventListener("touchstart",u,!0),()=>{n.removeEventListener("keydown",s,!0),n.removeEventListener("pointerdown",u,!0),n.removeEventListener("mousedown",u,!0),n.removeEventListener("touchstart",u,!0)}},[]);const A=n=>{if(f||l<=1)return;const s=j(n,1,l);s!==d&&r(s)};c.useLayoutEffect(()=>{var u;if(L.current===null)return;const n=L.current;L.current=null;const s=(u=R.current)==null?void 0:u.querySelector(`button[data-aurora-pagination-page="${n}"]`);s&&($.current=!0,s.focus(),$.current=!1)},[d]);const S=n=>{const s=j(n,1,l);if(s===d){L.current=null;return}const u=`page-${s}`;V(u),k(H.current?u:null),L.current=s,A(s)},K=n=>{if(H.current=!0,n.defaultPrevented||f||(n.altKey||n.ctrlKey||n.metaKey)&&yt(n.key))return;if(n.key==="Home"){if(d===1)return;n.preventDefault(),S(1);return}if(n.key==="End"){if(d===l)return;n.preventDefault(),S(l);return}if(n.key==="PageUp"){if(d===1)return;n.preventDefault(),S(d-1);return}if(n.key==="PageDown"){if(d===l)return;n.preventDefault(),S(d+1);return}const s=mt(n.key,n.currentTarget);if(s===void 0)return;const u=j(d+s,1,l);u!==d&&(n.preventDefault(),S(u))},G=c.useCallback(n=>({"data-focus-visible":T===n&&D===n?"true":void 0,onFocus:s=>{$.current||(V(n),k(wt(s.currentTarget,H.current)?n:null))},onBlur:()=>{$.current||(V(s=>s===n?null:s),k(s=>s===n?null:s))},onMouseDown:s=>{s.button!==0||s.ctrlKey||(H.current=!1,k(u=>u===n?null:u))},onPointerDown:s=>{!ye(s.button)||s.ctrlKey||(H.current=!1,k(u=>u===n?null:u))}}),[T,D]);return l<=1?null:a.jsx("nav",{ref:R,"aria-label":ie?void 0:ct,"aria-labelledby":ie,children:a.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[ue?a.jsx("li",{children:a.jsx("button",{...G("first"),type:"button",disabled:!x,onClick:()=>A(1),onKeyDown:K,"aria-label":I("first",1),"aria-keyshortcuts":x?F:void 0,style:M(!1,!x,T==="first"&&D==="first"),children:"«"})}):null,a.jsx("li",{children:a.jsx("button",{...G("previous"),type:"button",disabled:!x,onClick:()=>A(ce),onKeyDown:K,"aria-label":I("previous",ce),"aria-keyshortcuts":x?F:void 0,style:M(!1,!x,T==="previous"&&D==="previous"),children:"‹"})}),lt.map((n,s)=>{if(typeof n!="number")return a.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${n}-${s}`);const u=n===d,h=`page-${n}`;return a.jsx("li",{children:a.jsx("button",{...G(h),type:"button",onClick:()=>A(n),disabled:f,onKeyDown:K,"data-aurora-pagination-page":n,"aria-current":u?"page":void 0,"aria-label":I(u?"current":"page",n),"aria-keyshortcuts":f?void 0:F,style:M(u,f,T===h&&D===h),children:n})},n)}),a.jsx("li",{children:a.jsx("button",{...G("next"),type:"button",disabled:!B,onClick:()=>A(le),onKeyDown:K,"aria-label":I("next",le),"aria-keyshortcuts":B?F:void 0,style:M(!1,!B,T==="next"&&D==="next"),children:"›"})}),ue?a.jsx("li",{children:a.jsx("button",{...G("last"),type:"button",disabled:!B,onClick:()=>A(l),onKeyDown:K,"aria-label":I("last",l),"aria-keyshortcuts":B?F:void 0,style:M(!1,!B,T==="last"&&D==="last"),children:"»"})}):null]})})}function yt(t){return t==="Home"||t==="End"||t==="PageUp"||t==="PageDown"||t==="ArrowLeft"||t==="ArrowRight"}function mt(t,e){if(!(t!=="ArrowLeft"&&t!=="ArrowRight"))return ft(t,vt(e))}function ft(t,e){return t==="ArrowRight"?e?-1:1:e?1:-1}function vt(t){if(!t)return!1;const e=t.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const r=t.ownerDocument.defaultView??(typeof window<"u"?window:null);return r?r.getComputedStyle(t).direction==="rtl":!1}function pe(t,e){switch(t){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function M(t,e,r){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:t?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:t?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit",boxShadow:!e&&r?"0 0 0 3px color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)":"none"}}function se(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}function wt(t,e){try{return t.matches(":focus-visible")||e}catch{return e}}function ye(t){return typeof t!="number"||t<=0}w.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,computed:!1}}}};const kt={title:"Data/Pagination",component:w,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior, accessible page labels, and Home/End/PageUp/PageDown keyboard paths."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function bt(){const[t,e]=c.useState(1);return a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),a.jsx(P,{tone:"default",children:t})]}),a.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const N={render:()=>a.jsx(bt,{}),play:async({canvasElement:t})=>{const e=v(t);await g.click(await e.findByRole("button",{name:"Go to page 2"})),await o(await e.findByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function ht(){const[t,e]=c.useState(4);return a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),a.jsx(P,{tone:"default",children:t})]}),a.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const q={render:()=>a.jsx(ht,{}),play:async({canvasElement:t})=>{const e=v(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await o(r).toHaveAttribute("aria-keyshortcuts","Home PageUp End PageDown ArrowLeft ArrowRight"),await g.keyboard("{PageDown}");const i=await e.findByRole("button",{name:"Current page, 5"});await o(i).toBeInTheDocument(),await o(i).toHaveFocus(),await g.keyboard("{PageUp}");const p=await e.findByRole("button",{name:"Current page, 4"});await o(p).toBeInTheDocument(),await o(p).toHaveFocus(),await g.keyboard("{End}");const y=await e.findByRole("button",{name:"Current page, 12"});await o(y).toBeInTheDocument(),await o(y).toHaveFocus(),await g.keyboard("{Home}");const m=await e.findByRole("button",{name:"Current page, 1"});await o(m).toBeInTheDocument(),await o(m).toHaveFocus()}};function xt(){const[t,e]=c.useState(4);return a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Modifier guard page"}),a.jsx(P,{tone:"default","data-testid":"pagination-modifier-guard-page",children:t})]}),a.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const W={render:()=>a.jsx(xt,{}),play:async({canvasElement:t})=>{const e=v(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await g.keyboard("{Control>}{End}{/Control}"),await g.keyboard("{Meta>}{ArrowRight}{/Meta}"),await g.keyboard("{Alt>}{Home}{/Alt}"),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await o(e.getByRole("button",{name:"Current page, 4"})).toHaveFocus(),await g.keyboard("{End}"),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("12"),await o(await e.findByRole("button",{name:"Current page, 12"})).toHaveFocus()}};function Bt(){const[t,e]=c.useState(4);return a.jsxs("div",{onKeyDownCapture:r=>{(r.key==="Home"||r.key==="End"||r.key==="PageUp"||r.key==="PageDown"||r.key==="ArrowLeft"||r.key==="ArrowRight")&&r.preventDefault()},style:{width:640,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Preempted page"}),a.jsx(P,{tone:"default","data-testid":"pagination-preempted-page",children:t})]}),a.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const z={render:()=>a.jsx(Bt,{}),play:async({canvasElement:t})=>{const e=v(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await o(e.getByTestId("pagination-preempted-page")).toHaveTextContent("4"),E.keyDown(r,{key:"Home"}),E.keyDown(r,{key:"End"}),E.keyDown(r,{key:"PageUp"}),E.keyDown(r,{key:"PageDown"}),E.keyDown(r,{key:"ArrowLeft"}),E.keyDown(r,{key:"ArrowRight"}),await o(e.getByTestId("pagination-preempted-page")).toHaveTextContent("4"),await o(e.getByRole("button",{name:"Current page, 4"})).toHaveFocus()}};function Ct(){const[t,e]=c.useState(4);return a.jsxs("div",{dir:"rtl",style:{width:640,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"صفحه فعال"}),a.jsx(P,{tone:"default","data-testid":"rtl-page-value",children:t})]}),a.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const _={render:()=>a.jsx(Ct,{}),play:async({canvasElement:t})=>{const e=v(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await g.keyboard("{ArrowRight}");const i=await e.findByRole("button",{name:"Current page, 3"});await o(i).toBeInTheDocument(),await o(i).toHaveFocus(),await o(e.getByTestId("rtl-page-value")).toHaveTextContent("3"),await g.keyboard("{ArrowLeft}");const p=await e.findByRole("button",{name:"Current page, 4"});await o(p).toBeInTheDocument(),await o(p).toHaveFocus(),await o(e.getByTestId("rtl-page-value")).toHaveTextContent("4")}},O={args:{page:9,pageCount:48,onPageChange:()=>{}}},J={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},Q={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}};function Pt(){const[t,e]=c.useState(4),[r,i]=c.useState(0);return a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsx(w,{page:t,pageCount:12,disabled:"true",showFirstLast:"false",onPageChange:p=>{e(p),i(y=>y+1)}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[a.jsxs(P,{tone:"default",children:["Page: ",a.jsx("span",{"data-testid":"pagination-runtime-page",children:t})]}),a.jsxs(P,{tone:"default",children:["Events: ",a.jsx("span",{"data-testid":"pagination-runtime-events",children:r})]})]})]})}const X={render:()=>a.jsx(Pt,{}),play:async({canvasElement:t})=>{const e=v(t),r=e.getByRole("button",{name:"Current page, 4"}),i=e.getByRole("button",{name:"Go to first page"}),p=e.getByRole("button",{name:"Go to last page"}),y=e.getByTestId("pagination-runtime-page"),m=e.getByTestId("pagination-runtime-events");await o(i).toBeInTheDocument(),await o(p).toBeInTheDocument(),await o(r).not.toBeDisabled(),await o(r).toHaveAttribute("aria-keyshortcuts","Home PageUp End PageDown ArrowLeft ArrowRight"),await o(y).toHaveTextContent("4"),await o(m).toHaveTextContent("0"),await g.click(e.getByRole("button",{name:"Go to next page"})),await o(y).toHaveTextContent("5"),await o(m).toHaveTextContent("1")}},Y={args:{page:2,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}}},Z={args:{page:1,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}},play:async({canvasElement:t})=>{const e=v(t);await o(e.getByRole("button",{name:"Pagination previous 1"})).toBeInTheDocument(),await o(e.getByRole("button",{name:"Pagination next 2"})).toBeInTheDocument()}},ee={args:{page:2,pageCount:9,getItemAriaLabel:()=>{throw new Error("runtime item aria formatter failure")},onPageChange:()=>{}},play:async({canvasElement:t})=>{const e=v(t);await o(e.getByRole("button",{name:"Go to first page"})).toBeInTheDocument(),await o(e.getByRole("button",{name:"Current page, 2"})).toBeInTheDocument(),await o(e.getByRole("button",{name:"Go to next page"})).toBeInTheDocument()}};function Rt(){const[t,e]=c.useState(1);return a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Boundary page"}),a.jsx(P,{tone:"default","data-testid":"boundary-page-value",children:t})]}),a.jsx(w,{page:t,pageCount:12,onPageChange:e})]})}const te={render:()=>a.jsx(Rt,{}),play:async({canvasElement:t})=>{const e=v(t),r=await e.findByRole("button",{name:"Current page, 1"});await o(r).toHaveAttribute("aria-keyshortcuts","End PageDown ArrowLeft ArrowRight"),r.focus(),await o(r).toHaveFocus(),await g.keyboard("{PageUp}"),await o(e.getByTestId("boundary-page-value")).toHaveTextContent("1"),await g.keyboard("{Home}"),await o(e.getByTestId("boundary-page-value")).toHaveTextContent("1"),await g.keyboard("{End}");const i=await e.findByRole("button",{name:"Current page, 12"});await o(i).toHaveAttribute("aria-keyshortcuts","Home PageUp ArrowLeft ArrowRight"),await o(e.getByTestId("boundary-page-value")).toHaveTextContent("12"),await g.keyboard("{PageDown}"),await o(e.getByTestId("boundary-page-value")).toHaveTextContent("12")}},ae={render:t=>a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsx("h3",{id:"pagination-release-heading",style:{margin:0},children:"Release pages"}),a.jsx(w,{...t,ariaLabelledBy:"pagination-release-heading"})]}),args:{page:3,pageCount:12,onPageChange:()=>{}},play:async({canvasElement:t})=>{const r=await v(t).findByRole("navigation",{name:"Release pages"});await o(r).toHaveAttribute("aria-labelledby","pagination-release-heading"),await o(r).not.toHaveAttribute("aria-label")}},ne={render:()=>a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores pagination focus-visible state."}),a.jsx("button",{type:"button",children:"Before pagination"}),a.jsx(w,{page:4,pageCount:12,onPageChange:()=>{}})]}),play:async({canvasElement:t})=>{const e=v(t),r=await e.findByRole("button",{name:"Before pagination"}),i=e.getByRole("button",{name:"Go to first page"});await g.click(r),await g.tab(),await o(i).toHaveFocus(),await o(i).toHaveAttribute("data-focus-visible","true"),E.mouseDown(i,{button:0,ctrlKey:!0}),await o(i).toHaveAttribute("data-focus-visible","true")}};var me,fe,ve;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var we,be,he;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(he=(be=q.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var xe,Be,Ce;W.parameters={...W.parameters,docs:{...(xe=W.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ce=(Be=W.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var Pe,Re,He;z.parameters={...z.parameters,docs:{...(Pe=z.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(He=(Re=z.parameters)==null?void 0:Re.docs)==null?void 0:He.source}}};var Te,De,Ee;_.parameters={..._.parameters,docs:{...(Te=_.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ee=(De=_.parameters)==null?void 0:De.docs)==null?void 0:Ee.source}}};var ke,Ie,Ae;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(Ae=(Ie=O.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source}}};var je,Le,Fe;J.parameters={...J.parameters,docs:{...(je=J.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(Fe=(Le=J.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source}}};var Se,Ke,Ge;Q.parameters={...Q.parameters,docs:{...(Se=Q.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(Ge=(Ke=Q.parameters)==null?void 0:Ke.docs)==null?void 0:Ge.source}}};var Me,Ue,$e;X.parameters={...X.parameters,docs:{...(Me=X.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <RuntimeBooleanConfigNormalizationPagination />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const current = canvas.getByRole("button", {
      name: "Current page, 4"
    });
    const first = canvas.getByRole("button", {
      name: "Go to first page"
    });
    const last = canvas.getByRole("button", {
      name: "Go to last page"
    });
    const pageValue = canvas.getByTestId("pagination-runtime-page");
    const events = canvas.getByTestId("pagination-runtime-events");
    await expect(first).toBeInTheDocument();
    await expect(last).toBeInTheDocument();
    await expect(current).not.toBeDisabled();
    await expect(current).toHaveAttribute("aria-keyshortcuts", "Home PageUp End PageDown ArrowLeft ArrowRight");
    await expect(pageValue).toHaveTextContent("4");
    await expect(events).toHaveTextContent("0");
    await userEvent.click(canvas.getByRole("button", {
      name: "Go to next page"
    }));
    await expect(pageValue).toHaveTextContent("5");
    await expect(events).toHaveTextContent("1");
  }
}`,...($e=(Ue=X.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};var Ve,Ne,qe;Y.parameters={...Y.parameters,docs:{...(Ve=Y.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(qe=(Ne=Y.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var We,ze,_e;Z.parameters={...Z.parameters,docs:{...(We=Z.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(_e=(ze=Z.parameters)==null?void 0:ze.docs)==null?void 0:_e.source}}};var Oe,Je,Qe;ee.parameters={...ee.parameters,docs:{...(Oe=ee.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: () => {
      throw new Error("runtime item aria formatter failure");
    },
    onPageChange: () => {}
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("button", {
      name: "Go to first page"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Current page, 2"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("button", {
      name: "Go to next page"
    })).toBeInTheDocument();
  }
}`,...(Qe=(Je=ee.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;te.parameters={...te.parameters,docs:{...(Xe=te.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=te.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var et,tt,at;ae.parameters={...ae.parameters,docs:{...(et=ae.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=ae.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var nt,rt,ot;ne.parameters={...ne.parameters,docs:{...(nt=ne.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ot=(rt=ne.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};const It=["Controlled","KeyboardShortcuts","ModifierKeyGuard","ManagedKeysPreemptedByGlobalHandler","RtlKeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","RuntimeBooleanConfigNormalization","CustomAriaLabels","BoundaryAriaLabels","ItemAriaLabelErrorFallback","BoundaryShortcutHints","LabelledByHeading","FocusIntentReentry"];export{Z as BoundaryAriaLabels,te as BoundaryShortcutHints,O as CompactRange,N as Controlled,Y as CustomAriaLabels,Q as DisabledPagination,ne as FocusIntentReentry,ee as ItemAriaLabelErrorFallback,q as KeyboardShortcuts,ae as LabelledByHeading,z as ManagedKeysPreemptedByGlobalHandler,W as ModifierKeyGuard,_ as RtlKeyboardShortcuts,X as RuntimeBooleanConfigNormalization,J as WithoutFirstLast,It as __namedExportsOrder,kt as default};
