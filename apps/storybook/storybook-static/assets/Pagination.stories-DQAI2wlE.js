import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{B as P}from"./Badge-Cvc2u0v9.js";import{within as h,expect as o,userEvent as d,fireEvent as D}from"./index-DgAF9SIF.js";function j(t,e,r){return Math.min(Math.max(t,e),r)}function st(t){return Number.isFinite(t)?Math.max(1,Math.trunc(t)):1}function it(t,e){return Number.isFinite(t)?Math.trunc(t):e}function le(t,e){return Number.isFinite(t)?Math.max(0,Math.trunc(t)):e}function de(t,e){return typeof t!="boolean"?e:t}function re(t,e){const r=e-t+1;return Array.from({length:r},(i,p)=>t+p)}function ut(t,e,r,i){const p=i*2+r*2+3;if(e<=p)return re(1,e);const y=Math.max(t-r,i+2),m=Math.min(t+r,e-i-1),w=[],ne=re(1,i),U=re(e-i+1,e);w.push(...ne),y>i+2?w.push("ellipsis-left"):i+1<y&&w.push(i+1);for(let C=y;C<=m;C+=1)w.push(C);return m<e-i-1?w.push("ellipsis-right"):m+1<e-i+1&&w.push(e-i),w.push(...U),w}function v({page:t,pageCount:e,onPageChange:r,siblingCount:i=1,boundaryCount:p=1,disabled:y=!1,showFirstLast:m=!0,ariaLabel:w="Pagination",ariaLabelledBy:ne,getItemAriaLabel:U=ge}){const C=l.useRef(null),F=l.useRef(null),$=l.useRef(!1),H=l.useRef(!1),[R,V]=l.useState(null),[T,k]=l.useState(null),at=le(i,1),nt=le(p,1),rt=oe(w,"Pagination"),se=oe(ne),f=de(y,!1),ie=de(m,!0),c=st(e),g=j(it(t,1),1,c),ot=c<=1?[]:ut(g,c,at,nt),ue=j(g-1,1,c),ce=j(g+1,1,c),b=!f&&c>1&&g>1,x=!f&&c>1&&g<c,L=l.useMemo(()=>{if(f||c<=1)return;const n=[];return b&&n.push("Home","PageUp"),x&&n.push("End","PageDown"),(b||x)&&n.push("ArrowLeft","ArrowRight"),n.length>0?n.join(" "):void 0},[x,b,f,c]),E=l.useCallback((n,s)=>oe(U(n,s),ge(n,s)),[U]);l.useEffect(()=>{f&&(V(null),k(null))},[f]),l.useEffect(()=>{var I;const n=((I=C.current)==null?void 0:I.ownerDocument)??document,s=B=>{B.metaKey||B.altKey||B.ctrlKey||(H.current=!0)},u=B=>{"button"in B&&!pe(B.button)||"ctrlKey"in B&&B.ctrlKey||(H.current=!1)};return n.addEventListener("keydown",s,!0),n.addEventListener("pointerdown",u,!0),n.addEventListener("mousedown",u,!0),n.addEventListener("touchstart",u,!0),()=>{n.removeEventListener("keydown",s,!0),n.removeEventListener("pointerdown",u,!0),n.removeEventListener("mousedown",u,!0),n.removeEventListener("touchstart",u,!0)}},[]);const A=n=>{if(f||c<=1)return;const s=j(n,1,c);s!==g&&r(s)};l.useLayoutEffect(()=>{var u;if(F.current===null)return;const n=F.current;F.current=null;const s=(u=C.current)==null?void 0:u.querySelector(`button[data-aurora-pagination-page="${n}"]`);s&&($.current=!0,s.focus(),$.current=!1)},[g]);const S=n=>{const s=j(n,1,c);if(s===g){F.current=null;return}const u=`page-${s}`;V(u),k(H.current?u:null),F.current=s,A(s)},K=n=>{if(H.current=!0,n.defaultPrevented||f||(n.altKey||n.ctrlKey||n.metaKey)&&ct(n.key))return;if(n.key==="Home"){if(g===1)return;n.preventDefault(),S(1);return}if(n.key==="End"){if(g===c)return;n.preventDefault(),S(c);return}if(n.key==="PageUp"){if(g===1)return;n.preventDefault(),S(g-1);return}if(n.key==="PageDown"){if(g===c)return;n.preventDefault(),S(g+1);return}const s=lt(n.key,n.currentTarget);if(s===void 0)return;const u=j(g+s,1,c);u!==g&&(n.preventDefault(),S(u))},G=l.useCallback(n=>({"data-focus-visible":R===n&&T===n?"true":void 0,onFocus:s=>{$.current||(V(n),k(pt(s.currentTarget,H.current)?n:null))},onBlur:()=>{$.current||(V(s=>s===n?null:s),k(s=>s===n?null:s))},onMouseDown:s=>{s.button!==0||s.ctrlKey||(H.current=!1,k(u=>u===n?null:u))},onPointerDown:s=>{!pe(s.button)||s.ctrlKey||(H.current=!1,k(u=>u===n?null:u))}}),[R,T]);return c<=1?null:a.jsx("nav",{ref:C,"aria-label":se?void 0:rt,"aria-labelledby":se,children:a.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[ie?a.jsx("li",{children:a.jsx("button",{...G("first"),type:"button",disabled:!b,onClick:()=>A(1),onKeyDown:K,"aria-label":E("first",1),"aria-keyshortcuts":b?L:void 0,style:M(!1,!b,R==="first"&&T==="first"),children:"«"})}):null,a.jsx("li",{children:a.jsx("button",{...G("previous"),type:"button",disabled:!b,onClick:()=>A(ue),onKeyDown:K,"aria-label":E("previous",ue),"aria-keyshortcuts":b?L:void 0,style:M(!1,!b,R==="previous"&&T==="previous"),children:"‹"})}),ot.map((n,s)=>{if(typeof n!="number")return a.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${n}-${s}`);const u=n===g,I=`page-${n}`;return a.jsx("li",{children:a.jsx("button",{...G(I),type:"button",onClick:()=>A(n),disabled:f,onKeyDown:K,"data-aurora-pagination-page":n,"aria-current":u?"page":void 0,"aria-label":E(u?"current":"page",n),"aria-keyshortcuts":f?void 0:L,style:M(u,f,R===I&&T===I),children:n})},n)}),a.jsx("li",{children:a.jsx("button",{...G("next"),type:"button",disabled:!x,onClick:()=>A(ce),onKeyDown:K,"aria-label":E("next",ce),"aria-keyshortcuts":x?L:void 0,style:M(!1,!x,R==="next"&&T==="next"),children:"›"})}),ie?a.jsx("li",{children:a.jsx("button",{...G("last"),type:"button",disabled:!x,onClick:()=>A(c),onKeyDown:K,"aria-label":E("last",c),"aria-keyshortcuts":x?L:void 0,style:M(!1,!x,R==="last"&&T==="last"),children:"»"})}):null]})})}function ct(t){return t==="Home"||t==="End"||t==="PageUp"||t==="PageDown"||t==="ArrowLeft"||t==="ArrowRight"}function lt(t,e){if(!(t!=="ArrowLeft"&&t!=="ArrowRight"))return dt(t,gt(e))}function dt(t,e){return t==="ArrowRight"?e?-1:1:e?1:-1}function gt(t){if(!t)return!1;const e=t.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const r=t.ownerDocument.defaultView??(typeof window<"u"?window:null);return r?r.getComputedStyle(t).direction==="rtl":!1}function ge(t,e){switch(t){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function M(t,e,r){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:t?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:t?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit",boxShadow:!e&&r?"0 0 0 3px color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)":"none"}}function oe(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}function pt(t,e){try{return t.matches(":focus-visible")||e}catch{return e}}function pe(t){return typeof t!="number"||t<=0}v.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,computed:!1}}}};const Ht={title:"Data/Pagination",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior, accessible page labels, and Home/End/PageUp/PageDown keyboard paths."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function yt(){const[t,e]=l.useState(1);return a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),a.jsx(P,{tone:"default",children:t})]}),a.jsx(v,{page:t,pageCount:12,onPageChange:e})]})}const N={render:()=>a.jsx(yt,{}),play:async({canvasElement:t})=>{const e=h(t);await d.click(await e.findByRole("button",{name:"Go to page 2"})),await o(await e.findByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function mt(){const[t,e]=l.useState(4);return a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),a.jsx(P,{tone:"default",children:t})]}),a.jsx(v,{page:t,pageCount:12,onPageChange:e})]})}const q={render:()=>a.jsx(mt,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await o(r).toHaveAttribute("aria-keyshortcuts","Home PageUp End PageDown ArrowLeft ArrowRight"),await d.keyboard("{PageDown}");const i=await e.findByRole("button",{name:"Current page, 5"});await o(i).toBeInTheDocument(),await o(i).toHaveFocus(),await d.keyboard("{PageUp}");const p=await e.findByRole("button",{name:"Current page, 4"});await o(p).toBeInTheDocument(),await o(p).toHaveFocus(),await d.keyboard("{End}");const y=await e.findByRole("button",{name:"Current page, 12"});await o(y).toBeInTheDocument(),await o(y).toHaveFocus(),await d.keyboard("{Home}");const m=await e.findByRole("button",{name:"Current page, 1"});await o(m).toBeInTheDocument(),await o(m).toHaveFocus()}};function ft(){const[t,e]=l.useState(4);return a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Modifier guard page"}),a.jsx(P,{tone:"default","data-testid":"pagination-modifier-guard-page",children:t})]}),a.jsx(v,{page:t,pageCount:12,onPageChange:e})]})}const W={render:()=>a.jsx(ft,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await d.keyboard("{Control>}{End}{/Control}"),await d.keyboard("{Meta>}{ArrowRight}{/Meta}"),await d.keyboard("{Alt>}{Home}{/Alt}"),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await o(e.getByRole("button",{name:"Current page, 4"})).toHaveFocus(),await d.keyboard("{End}"),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("12"),await o(await e.findByRole("button",{name:"Current page, 12"})).toHaveFocus()}};function vt(){const[t,e]=l.useState(4);return a.jsxs("div",{onKeyDownCapture:r=>{(r.key==="Home"||r.key==="End"||r.key==="PageUp"||r.key==="PageDown"||r.key==="ArrowLeft"||r.key==="ArrowRight")&&r.preventDefault()},style:{width:640,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Preempted page"}),a.jsx(P,{tone:"default","data-testid":"pagination-preempted-page",children:t})]}),a.jsx(v,{page:t,pageCount:12,onPageChange:e})]})}const z={render:()=>a.jsx(vt,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await o(e.getByTestId("pagination-preempted-page")).toHaveTextContent("4"),D.keyDown(r,{key:"Home"}),D.keyDown(r,{key:"End"}),D.keyDown(r,{key:"PageUp"}),D.keyDown(r,{key:"PageDown"}),D.keyDown(r,{key:"ArrowLeft"}),D.keyDown(r,{key:"ArrowRight"}),await o(e.getByTestId("pagination-preempted-page")).toHaveTextContent("4"),await o(e.getByRole("button",{name:"Current page, 4"})).toHaveFocus()}};function wt(){const[t,e]=l.useState(4);return a.jsxs("div",{dir:"rtl",style:{width:640,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"صفحه فعال"}),a.jsx(P,{tone:"default","data-testid":"rtl-page-value",children:t})]}),a.jsx(v,{page:t,pageCount:12,onPageChange:e})]})}const _={render:()=>a.jsx(wt,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await d.keyboard("{ArrowRight}");const i=await e.findByRole("button",{name:"Current page, 3"});await o(i).toBeInTheDocument(),await o(i).toHaveFocus(),await o(e.getByTestId("rtl-page-value")).toHaveTextContent("3"),await d.keyboard("{ArrowLeft}");const p=await e.findByRole("button",{name:"Current page, 4"});await o(p).toBeInTheDocument(),await o(p).toHaveFocus(),await o(e.getByTestId("rtl-page-value")).toHaveTextContent("4")}},O={args:{page:9,pageCount:48,onPageChange:()=>{}}},J={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},Q={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}};function ht(){const[t,e]=l.useState(4),[r,i]=l.useState(0);return a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsx(v,{page:t,pageCount:12,disabled:"true",showFirstLast:"false",onPageChange:p=>{e(p),i(y=>y+1)}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[a.jsxs(P,{tone:"default",children:["Page: ",a.jsx("span",{"data-testid":"pagination-runtime-page",children:t})]}),a.jsxs(P,{tone:"default",children:["Events: ",a.jsx("span",{"data-testid":"pagination-runtime-events",children:r})]})]})]})}const X={render:()=>a.jsx(ht,{}),play:async({canvasElement:t})=>{const e=h(t),r=e.getByRole("button",{name:"Current page, 4"}),i=e.getByRole("button",{name:"Go to first page"}),p=e.getByRole("button",{name:"Go to last page"}),y=e.getByTestId("pagination-runtime-page"),m=e.getByTestId("pagination-runtime-events");await o(i).toBeInTheDocument(),await o(p).toBeInTheDocument(),await o(r).not.toBeDisabled(),await o(r).toHaveAttribute("aria-keyshortcuts","Home PageUp End PageDown ArrowLeft ArrowRight"),await o(y).toHaveTextContent("4"),await o(m).toHaveTextContent("0"),await d.click(e.getByRole("button",{name:"Go to next page"})),await o(y).toHaveTextContent("5"),await o(m).toHaveTextContent("1")}},Y={args:{page:2,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}}},Z={args:{page:1,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}},play:async({canvasElement:t})=>{const e=h(t);await o(e.getByRole("button",{name:"Pagination previous 1"})).toBeInTheDocument(),await o(e.getByRole("button",{name:"Pagination next 2"})).toBeInTheDocument()}};function bt(){const[t,e]=l.useState(1);return a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Boundary page"}),a.jsx(P,{tone:"default","data-testid":"boundary-page-value",children:t})]}),a.jsx(v,{page:t,pageCount:12,onPageChange:e})]})}const ee={render:()=>a.jsx(bt,{}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Current page, 1"});await o(r).toHaveAttribute("aria-keyshortcuts","End PageDown ArrowLeft ArrowRight"),r.focus(),await o(r).toHaveFocus(),await d.keyboard("{PageUp}"),await o(e.getByTestId("boundary-page-value")).toHaveTextContent("1"),await d.keyboard("{Home}"),await o(e.getByTestId("boundary-page-value")).toHaveTextContent("1"),await d.keyboard("{End}");const i=await e.findByRole("button",{name:"Current page, 12"});await o(i).toHaveAttribute("aria-keyshortcuts","Home PageUp ArrowLeft ArrowRight"),await o(e.getByTestId("boundary-page-value")).toHaveTextContent("12"),await d.keyboard("{PageDown}"),await o(e.getByTestId("boundary-page-value")).toHaveTextContent("12")}},te={render:t=>a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsx("h3",{id:"pagination-release-heading",style:{margin:0},children:"Release pages"}),a.jsx(v,{...t,ariaLabelledBy:"pagination-release-heading"})]}),args:{page:3,pageCount:12,onPageChange:()=>{}},play:async({canvasElement:t})=>{const r=await h(t).findByRole("navigation",{name:"Release pages"});await o(r).toHaveAttribute("aria-labelledby","pagination-release-heading"),await o(r).not.toHaveAttribute("aria-label")}},ae={render:()=>a.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores pagination focus-visible state."}),a.jsx("button",{type:"button",children:"Before pagination"}),a.jsx(v,{page:4,pageCount:12,onPageChange:()=>{}})]}),play:async({canvasElement:t})=>{const e=h(t),r=await e.findByRole("button",{name:"Before pagination"}),i=e.getByRole("button",{name:"Go to first page"});await d.click(r),await d.tab(),await o(i).toHaveFocus(),await o(i).toHaveAttribute("data-focus-visible","true"),D.mouseDown(i,{button:0,ctrlKey:!0}),await o(i).toHaveAttribute("data-focus-visible","true")}};var ye,me,fe;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(fe=(me=N.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ve,we,he;q.parameters={...q.parameters,docs:{...(ve=q.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(he=(we=q.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var be,xe,Be;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Be=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Pe,Ce,He;z.parameters={...z.parameters,docs:{...(Pe=z.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(He=(Ce=z.parameters)==null?void 0:Ce.docs)==null?void 0:He.source}}};var Re,Te,De;_.parameters={..._.parameters,docs:{...(Re=_.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(De=(Te=_.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var ke,Ee,Ae;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(Ae=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var Ie,je,Fe;J.parameters={...J.parameters,docs:{...(Ie=J.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(Fe=(je=J.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var Le,Se,Ke;Q.parameters={...Q.parameters,docs:{...(Le=Q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(Ke=(Se=Q.parameters)==null?void 0:Se.docs)==null?void 0:Ke.source}}};var Ge,Me,Ue;X.parameters={...X.parameters,docs:{...(Ge=X.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ue=(Me=X.parameters)==null?void 0:Me.docs)==null?void 0:Ue.source}}};var $e,Ve,Ne;Y.parameters={...Y.parameters,docs:{...($e=Y.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(Ne=(Ve=Y.parameters)==null?void 0:Ve.docs)==null?void 0:Ne.source}}};var qe,We,ze;Z.parameters={...Z.parameters,docs:{...(qe=Z.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(ze=(We=Z.parameters)==null?void 0:We.docs)==null?void 0:ze.source}}};var _e,Oe,Je;ee.parameters={...ee.parameters,docs:{...(_e=ee.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Je=(Oe=ee.parameters)==null?void 0:Oe.docs)==null?void 0:Je.source}}};var Qe,Xe,Ye;te.parameters={...te.parameters,docs:{...(Qe=te.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=te.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,et,tt;ae.parameters={...ae.parameters,docs:{...(Ze=ae.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=ae.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};const Rt=["Controlled","KeyboardShortcuts","ModifierKeyGuard","ManagedKeysPreemptedByGlobalHandler","RtlKeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","RuntimeBooleanConfigNormalization","CustomAriaLabels","BoundaryAriaLabels","BoundaryShortcutHints","LabelledByHeading","FocusIntentReentry"];export{Z as BoundaryAriaLabels,ee as BoundaryShortcutHints,O as CompactRange,N as Controlled,Y as CustomAriaLabels,Q as DisabledPagination,ae as FocusIntentReentry,q as KeyboardShortcuts,te as LabelledByHeading,z as ManagedKeysPreemptedByGlobalHandler,W as ModifierKeyGuard,_ as RtlKeyboardShortcuts,X as RuntimeBooleanConfigNormalization,J as WithoutFirstLast,Rt as __namedExportsOrder,Ht as default};
