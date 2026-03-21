import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BWu4c2F4.js";import{B as $}from"./Badge-ZJmMstsz.js";import{within as B,expect as o,userEvent as g}from"./index-DgAF9SIF.js";const R="Home End ArrowLeft ArrowRight";function T(a,e,r){return Math.min(Math.max(a,e),r)}function W(a,e){const r=e-a+1;return Array.from({length:r},(s,c)=>a+c)}function Ae(a,e,r,s){const c=s*2+r*2+3;if(e<=c)return W(1,e);const u=Math.max(a-r,s+2),y=Math.min(a+r,e-s-1),l=[],q=W(1,s),H=W(e-s+1,e);l.push(...q),u>s+2?l.push("ellipsis-left"):s+1<u&&l.push(s+1);for(let f=u;f<=y;f+=1)l.push(f);return y<e-s-1?l.push("ellipsis-right"):y+1<e-s+1&&l.push(e-s),l.push(...H),l}function m({page:a,pageCount:e,onPageChange:r,siblingCount:s=1,boundaryCount:c=1,disabled:u=!1,showFirstLast:y=!0,ariaLabel:l="Pagination",ariaLabelledBy:q,getItemAriaLabel:H=J}){const f=p.useRef(null),P=p.useRef(null),Re=_(l,"Pagination"),N=_(q),j=Math.max(e,1),d=T(a,1,j),Te=e<=1?[]:Ae(d,e,s,c),O=T(d-1,1,j),z=T(d+1,1,j),v=!u&&e>1&&d>1,w=!u&&e>1&&d<e,h=p.useCallback((n,i)=>_(H(n,i),J(n,i)),[H]),b=n=>{if(u||e<=1)return;const i=T(n,1,e);i!==d&&r(i)};p.useEffect(()=>{var x;if(P.current===null)return;const n=P.current;P.current=null;const i=(x=f.current)==null?void 0:x.querySelector(`button[data-aurora-pagination-page="${n}"]`);i==null||i.focus()},[d]);const V=n=>{const i=T(n,1,e);if(i===d){P.current=null;return}P.current=i,b(i)},C=n=>{if(u||(n.altKey||n.ctrlKey||n.metaKey)&&He(n.key))return;if(n.key==="Home")n.preventDefault(),V(1);else if(n.key==="End"){n.preventDefault(),V(j);return}const i=je(n.key,n.currentTarget);i!==void 0&&(n.preventDefault(),V(d+i))};return e<=1?null:t.jsx("nav",{ref:f,"aria-label":N?void 0:Re,"aria-labelledby":N,children:t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[y?t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!v,onClick:()=>b(1),onKeyDown:C,"aria-label":h("first",1),"aria-keyshortcuts":v?R:void 0,style:A(!1,!v),children:"«"})}):null,t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!v,onClick:()=>b(O),onKeyDown:C,"aria-label":h("previous",O),"aria-keyshortcuts":v?R:void 0,style:A(!1,!v),children:"‹"})}),Te.map((n,i)=>{if(typeof n!="number")return t.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${n}-${i}`);const x=n===d;return t.jsx("li",{children:t.jsx("button",{type:"button",onClick:()=>b(n),disabled:u,onKeyDown:C,"data-aurora-pagination-page":n,"aria-current":x?"page":void 0,"aria-label":h(x?"current":"page",n),"aria-keyshortcuts":u?void 0:R,style:A(x,u),children:n})},n)}),t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!w,onClick:()=>b(z),onKeyDown:C,"aria-label":h("next",z),"aria-keyshortcuts":w?R:void 0,style:A(!1,!w),children:"›"})}),y?t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!w,onClick:()=>b(e),onKeyDown:C,"aria-label":h("last",e),"aria-keyshortcuts":w?R:void 0,style:A(!1,!w),children:"»"})}):null]})})}function He(a){return a==="Home"||a==="End"||a==="ArrowLeft"||a==="ArrowRight"}function je(a,e){if(!(a!=="ArrowLeft"&&a!=="ArrowRight"))return De(a,Ee(e))}function De(a,e){return a==="ArrowRight"?e?-1:1:e?1:-1}function Ee(a){if(!a)return!1;const e=a.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const r=a.ownerDocument.defaultView??(typeof window<"u"?window:null);return r?r.getComputedStyle(a).direction==="rtl":!1}function J(a,e){switch(a){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function A(a,e){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:a?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit"}}function _(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}m.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,computed:!1}}}};const $e={title:"Data/Pagination",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior and accessible page labels."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function Ie(){const[a,e]=p.useState(1);return t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),t.jsx($,{tone:"default",children:a})]}),t.jsx(m,{page:a,pageCount:12,onPageChange:e})]})}const D={render:()=>t.jsx(Ie,{}),play:async({canvasElement:a})=>{const e=B(a);await g.click(await e.findByRole("button",{name:"Go to page 2"})),await o(await e.findByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function Le(){const[a,e]=p.useState(4);return t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),t.jsx($,{tone:"default",children:a})]}),t.jsx(m,{page:a,pageCount:12,onPageChange:e})]})}const E={render:()=>t.jsx(Le,{}),play:async({canvasElement:a})=>{const e=B(a),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await o(r).toHaveAttribute("aria-keyshortcuts","Home End ArrowLeft ArrowRight"),await g.keyboard("{End}");const s=await e.findByRole("button",{name:"Current page, 12"});await o(s).toBeInTheDocument(),await o(s).toHaveFocus(),await g.keyboard("{Home}");const c=await e.findByRole("button",{name:"Current page, 1"});await o(c).toBeInTheDocument(),await o(c).toHaveFocus()}};function Se(){const[a,e]=p.useState(4);return t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Modifier guard page"}),t.jsx($,{tone:"default","data-testid":"pagination-modifier-guard-page",children:a})]}),t.jsx(m,{page:a,pageCount:12,onPageChange:e})]})}const I={render:()=>t.jsx(Se,{}),play:async({canvasElement:a})=>{const e=B(a),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await g.keyboard("{Control>}{End}{/Control}"),await g.keyboard("{Meta>}{ArrowRight}{/Meta}"),await g.keyboard("{Alt>}{Home}{/Alt}"),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await o(e.getByRole("button",{name:"Current page, 4"})).toHaveFocus(),await g.keyboard("{End}"),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("12"),await o(await e.findByRole("button",{name:"Current page, 12"})).toHaveFocus()}};function Fe(){const[a,e]=p.useState(4);return t.jsxs("div",{dir:"rtl",style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"صفحه فعال"}),t.jsx($,{tone:"default","data-testid":"rtl-page-value",children:a})]}),t.jsx(m,{page:a,pageCount:12,onPageChange:e})]})}const L={render:()=>t.jsx(Fe,{}),play:async({canvasElement:a})=>{const e=B(a),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await g.keyboard("{ArrowRight}");const s=await e.findByRole("button",{name:"Current page, 3"});await o(s).toBeInTheDocument(),await o(s).toHaveFocus(),await o(e.getByTestId("rtl-page-value")).toHaveTextContent("3"),await g.keyboard("{ArrowLeft}");const c=await e.findByRole("button",{name:"Current page, 4"});await o(c).toBeInTheDocument(),await o(c).toHaveFocus(),await o(e.getByTestId("rtl-page-value")).toHaveTextContent("4")}},S={args:{page:9,pageCount:48,onPageChange:()=>{}}},F={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},k={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}},K={args:{page:2,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}}},G={args:{page:1,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}},play:async({canvasElement:a})=>{const e=B(a);await o(e.getByRole("button",{name:"Pagination previous 1"})).toBeInTheDocument(),await o(e.getByRole("button",{name:"Pagination next 2"})).toBeInTheDocument()}},M={render:a=>t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsx("h3",{id:"pagination-release-heading",style:{margin:0},children:"Release pages"}),t.jsx(m,{...a,ariaLabelledBy:"pagination-release-heading"})]}),args:{page:3,pageCount:12,onPageChange:()=>{}},play:async({canvasElement:a})=>{const r=await B(a).findByRole("navigation",{name:"Release pages"});await o(r).toHaveAttribute("aria-labelledby","pagination-release-heading"),await o(r).not.toHaveAttribute("aria-label")}};var Q,U,X;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=D.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,oe,se;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ce,ue;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(ue=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var le,de,ge;F.parameters={...F.parameters,docs:{...(le=F.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(ge=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var pe,me,ye;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(ye=(me=k.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var fe,ve,we;K.parameters={...K.parameters,docs:{...(fe=K.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(we=(ve=K.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var he,be,xe;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(be=G.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Be,Pe,Ce;M.parameters={...M.parameters,docs:{...(Be=M.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ce=(Pe=M.parameters)==null?void 0:Pe.docs)==null?void 0:Ce.source}}};const qe=["Controlled","KeyboardShortcuts","ModifierKeyGuard","RtlKeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","CustomAriaLabels","BoundaryAriaLabels","LabelledByHeading"];export{G as BoundaryAriaLabels,S as CompactRange,D as Controlled,K as CustomAriaLabels,k as DisabledPagination,E as KeyboardShortcuts,M as LabelledByHeading,I as ModifierKeyGuard,L as RtlKeyboardShortcuts,F as WithoutFirstLast,qe as __namedExportsOrder,$e as default};
