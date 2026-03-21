import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{B as J}from"./Badge-ZJmMstsz.js";import{within as b,expect as s,userEvent as p}from"./index-DgAF9SIF.js";const L="Home End ArrowLeft ArrowRight";function I(t,e,o){return Math.min(Math.max(t,e),o)}function Y(t,e){const o=e-t+1;return Array.from({length:o},(i,d)=>t+d)}function Me(t,e,o,i){const d=i*2+o*2+3;if(e<=d)return Y(1,e);const l=Math.max(t-o,i+2),x=Math.min(t+o,e-i-1),g=[],Q=Y(1,i),S=Y(e-i+1,e);g.push(...Q),l>i+2?g.push("ellipsis-left"):i+1<l&&g.push(i+1);for(let y=l;y<=x;y+=1)g.push(y);return x<e-i-1?g.push("ellipsis-right"):x+1<e-i+1&&g.push(e-i),g.push(...S),g}function f({page:t,pageCount:e,onPageChange:o,siblingCount:i=1,boundaryCount:d=1,disabled:l=!1,showFirstLast:x=!0,ariaLabel:g="Pagination",ariaLabelledBy:Q,getItemAriaLabel:S=ne}){const y=u.useRef(null),H=u.useRef(null),B=u.useRef(!1),[v,U]=u.useState(null),[w,A]=u.useState(null),Ke=Z(g,"Pagination"),ee=Z(Q),k=Math.max(e,1),m=I(t,1,k),Ge=e<=1?[]:Me(m,e,i,d),te=I(m-1,1,k),ae=I(m+1,1,k),C=!l&&e>1&&m>1,P=!l&&e>1&&m<e,R=u.useCallback((a,r)=>Z(S(a,r),ne(a,r)),[S]);u.useEffect(()=>{l&&(U(null),A(null))},[l]),u.useEffect(()=>{var T;const a=((T=y.current)==null?void 0:T.ownerDocument)??document,r=h=>{h.metaKey||h.altKey||h.ctrlKey||(B.current=!0)},c=h=>{"button"in h&&typeof h.button=="number"&&h.button!==0||(B.current=!1)};return a.addEventListener("keydown",r,!0),a.addEventListener("pointerdown",c,!0),a.addEventListener("mousedown",c,!0),a.addEventListener("touchstart",c,!0),()=>{a.removeEventListener("keydown",r,!0),a.removeEventListener("pointerdown",c,!0),a.removeEventListener("mousedown",c,!0),a.removeEventListener("touchstart",c,!0)}},[]);const E=a=>{if(l||e<=1)return;const r=I(a,1,e);r!==m&&o(r)};u.useEffect(()=>{var c;if(H.current===null)return;const a=H.current;H.current=null;const r=(c=y.current)==null?void 0:c.querySelector(`button[data-aurora-pagination-page="${a}"]`);r==null||r.focus()},[m]);const X=a=>{const r=I(a,1,e);if(r===m){H.current=null;return}H.current=r,E(r)},j=a=>{if(B.current=!0,l||(a.altKey||a.ctrlKey||a.metaKey)&&$e(a.key))return;if(a.key==="Home")a.preventDefault(),X(1);else if(a.key==="End"){a.preventDefault(),X(k);return}const r=qe(a.key,a.currentTarget);r!==void 0&&(a.preventDefault(),X(m+r))},D=u.useCallback(a=>({"data-focus-visible":v===a&&w===a?"true":void 0,onFocus:r=>{U(a),A(_e(r.currentTarget,B.current)?a:null)},onBlur:()=>{U(r=>r===a?null:r),A(r=>r===a?null:r)},onMouseDown:r=>{r.button===0&&(B.current=!1,A(c=>c===a?null:c))},onPointerDown:r=>{r.button===0&&(B.current=!1,A(c=>c===a?null:c))}}),[v,w]);return e<=1?null:n.jsx("nav",{ref:y,"aria-label":ee?void 0:Ke,"aria-labelledby":ee,children:n.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[x?n.jsx("li",{children:n.jsx("button",{...D("first"),type:"button",disabled:!C,onClick:()=>E(1),onKeyDown:j,"aria-label":R("first",1),"aria-keyshortcuts":C?L:void 0,style:F(!1,!C,v==="first"&&w==="first"),children:"«"})}):null,n.jsx("li",{children:n.jsx("button",{...D("previous"),type:"button",disabled:!C,onClick:()=>E(te),onKeyDown:j,"aria-label":R("previous",te),"aria-keyshortcuts":C?L:void 0,style:F(!1,!C,v==="previous"&&w==="previous"),children:"‹"})}),Ge.map((a,r)=>{if(typeof a!="number")return n.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${a}-${r}`);const c=a===m,T=`page-${a}`;return n.jsx("li",{children:n.jsx("button",{...D(T),type:"button",onClick:()=>E(a),disabled:l,onKeyDown:j,"data-aurora-pagination-page":a,"aria-current":c?"page":void 0,"aria-label":R(c?"current":"page",a),"aria-keyshortcuts":l?void 0:L,style:F(c,l,v===T&&w===T),children:a})},a)}),n.jsx("li",{children:n.jsx("button",{...D("next"),type:"button",disabled:!P,onClick:()=>E(ae),onKeyDown:j,"aria-label":R("next",ae),"aria-keyshortcuts":P?L:void 0,style:F(!1,!P,v==="next"&&w==="next"),children:"›"})}),x?n.jsx("li",{children:n.jsx("button",{...D("last"),type:"button",disabled:!P,onClick:()=>E(e),onKeyDown:j,"aria-label":R("last",e),"aria-keyshortcuts":P?L:void 0,style:F(!1,!P,v==="last"&&w==="last"),children:"»"})}):null]})})}function $e(t){return t==="Home"||t==="End"||t==="ArrowLeft"||t==="ArrowRight"}function qe(t,e){if(!(t!=="ArrowLeft"&&t!=="ArrowRight"))return Ve(t,We(e))}function Ve(t,e){return t==="ArrowRight"?e?-1:1:e?1:-1}function We(t){if(!t)return!1;const e=t.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const o=t.ownerDocument.defaultView??(typeof window<"u"?window:null);return o?o.getComputedStyle(t).direction==="rtl":!1}function ne(t,e){switch(t){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function F(t,e,o){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:t?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:t?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit",boxShadow:!e&&o?"0 0 0 3px color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)":"none"}}function Z(t,e){return typeof t=="string"&&t.trim().length>0?t.trim():e}function _e(t,e){try{return t.matches(":focus-visible")||e}catch{return e}}f.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,computed:!1}}}};const Ze={title:"Data/Pagination",component:f,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior and accessible page labels."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function ze(){const[t,e]=u.useState(1);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),n.jsx(J,{tone:"default",children:t})]}),n.jsx(f,{page:t,pageCount:12,onPageChange:e})]})}const K={render:()=>n.jsx(ze,{}),play:async({canvasElement:t})=>{const e=b(t);await p.click(await e.findByRole("button",{name:"Go to page 2"})),await s(await e.findByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function Ne(){const[t,e]=u.useState(4);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),n.jsx(J,{tone:"default",children:t})]}),n.jsx(f,{page:t,pageCount:12,onPageChange:e})]})}const G={render:()=>n.jsx(Ne,{}),play:async({canvasElement:t})=>{const e=b(t),o=await e.findByRole("button",{name:"Current page, 4"});o.focus(),await s(o).toHaveFocus(),await s(o).toHaveAttribute("aria-keyshortcuts","Home End ArrowLeft ArrowRight"),await p.keyboard("{End}");const i=await e.findByRole("button",{name:"Current page, 12"});await s(i).toBeInTheDocument(),await s(i).toHaveFocus(),await p.keyboard("{Home}");const d=await e.findByRole("button",{name:"Current page, 1"});await s(d).toBeInTheDocument(),await s(d).toHaveFocus()}};function Oe(){const[t,e]=u.useState(4);return n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Modifier guard page"}),n.jsx(J,{tone:"default","data-testid":"pagination-modifier-guard-page",children:t})]}),n.jsx(f,{page:t,pageCount:12,onPageChange:e})]})}const M={render:()=>n.jsx(Oe,{}),play:async({canvasElement:t})=>{const e=b(t),o=await e.findByRole("button",{name:"Current page, 4"});o.focus(),await s(o).toHaveFocus(),await s(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await p.keyboard("{Control>}{End}{/Control}"),await p.keyboard("{Meta>}{ArrowRight}{/Meta}"),await p.keyboard("{Alt>}{Home}{/Alt}"),await s(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await s(e.getByRole("button",{name:"Current page, 4"})).toHaveFocus(),await p.keyboard("{End}"),await s(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("12"),await s(await e.findByRole("button",{name:"Current page, 12"})).toHaveFocus()}};function Je(){const[t,e]=u.useState(4);return n.jsxs("div",{dir:"rtl",style:{width:640,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"صفحه فعال"}),n.jsx(J,{tone:"default","data-testid":"rtl-page-value",children:t})]}),n.jsx(f,{page:t,pageCount:12,onPageChange:e})]})}const $={render:()=>n.jsx(Je,{}),play:async({canvasElement:t})=>{const e=b(t),o=await e.findByRole("button",{name:"Current page, 4"});o.focus(),await s(o).toHaveFocus(),await p.keyboard("{ArrowRight}");const i=await e.findByRole("button",{name:"Current page, 3"});await s(i).toBeInTheDocument(),await s(i).toHaveFocus(),await s(e.getByTestId("rtl-page-value")).toHaveTextContent("3"),await p.keyboard("{ArrowLeft}");const d=await e.findByRole("button",{name:"Current page, 4"});await s(d).toBeInTheDocument(),await s(d).toHaveFocus(),await s(e.getByTestId("rtl-page-value")).toHaveTextContent("4")}},q={args:{page:9,pageCount:48,onPageChange:()=>{}}},V={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},W={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}},_={args:{page:2,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}}},z={args:{page:1,pageCount:9,getItemAriaLabel:(t,e)=>`Pagination ${t} ${e}`,onPageChange:()=>{}},play:async({canvasElement:t})=>{const e=b(t);await s(e.getByRole("button",{name:"Pagination previous 1"})).toBeInTheDocument(),await s(e.getByRole("button",{name:"Pagination next 2"})).toBeInTheDocument()}},N={render:t=>n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsx("h3",{id:"pagination-release-heading",style:{margin:0},children:"Release pages"}),n.jsx(f,{...t,ariaLabelledBy:"pagination-release-heading"})]}),args:{page:3,pageCount:12,onPageChange:()=>{}},play:async({canvasElement:t})=>{const o=await b(t).findByRole("navigation",{name:"Release pages"});await s(o).toHaveAttribute("aria-labelledby","pagination-release-heading"),await s(o).not.toHaveAttribute("aria-label")}},O={render:()=>n.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores pagination focus-visible state."}),n.jsx("button",{type:"button",children:"Before pagination"}),n.jsx(f,{page:4,pageCount:12,onPageChange:()=>{}})]}),play:async({canvasElement:t})=>{const e=b(t),o=await e.findByRole("button",{name:"Before pagination"}),i=e.getByRole("button",{name:"Go to first page"});await p.click(o),await p.tab(),await s(i).toHaveFocus(),await s(i).toHaveAttribute("data-focus-visible","true")}};var re,oe,se;K.parameters={...K.parameters,docs:{...(re=K.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(oe=K.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ce,ue;G.parameters={...G.parameters,docs:{...(ie=G.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(ce=G.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var le,de,pe;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(de=M.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ge,me,fe;$.parameters={...$.parameters,docs:{...(ge=$.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(me=$.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ye,ve,we;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(we=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var he,be,xe;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(xe=(be=V.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Be,Ce,Pe;W.parameters={...W.parameters,docs:{...(Be=W.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(Pe=(Ce=W.parameters)==null?void 0:Ce.docs)==null?void 0:Pe.source}}};var Re,Ee,Te;_.parameters={..._.parameters,docs:{...(Re=_.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(Te=(Ee=_.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};var He,Ae,je;z.parameters={...z.parameters,docs:{...(He=z.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(je=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var De,Le,Ie;N.parameters={...N.parameters,docs:{...(De=N.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ie=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};var Fe,Se,ke;O.parameters={...O.parameters,docs:{...(Fe=O.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(ke=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};const et=["Controlled","KeyboardShortcuts","ModifierKeyGuard","RtlKeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","CustomAriaLabels","BoundaryAriaLabels","LabelledByHeading","FocusIntentReentry"];export{z as BoundaryAriaLabels,q as CompactRange,K as Controlled,_ as CustomAriaLabels,W as DisabledPagination,O as FocusIntentReentry,G as KeyboardShortcuts,N as LabelledByHeading,M as ModifierKeyGuard,$ as RtlKeyboardShortcuts,V as WithoutFirstLast,et as __namedExportsOrder,Ze as default};
