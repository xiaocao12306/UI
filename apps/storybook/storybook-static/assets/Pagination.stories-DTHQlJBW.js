import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BWu4c2F4.js";import{B as M}from"./Badge-ZJmMstsz.js";import{within as b,expect as o,userEvent as g}from"./index-DgAF9SIF.js";function P(a,e,r){return Math.min(Math.max(a,e),r)}function V(a,e){const r=e-a+1;return Array.from({length:r},(s,c)=>a+c)}function Te(a,e,r,s){const c=s*2+r*2+3;if(e<=c)return V(1,e);const u=Math.max(a-r,s+2),y=Math.min(a+r,e-s-1),l=[],$=V(1,s),R=V(e-s+1,e);l.push(...$),u>s+2?l.push("ellipsis-left"):s+1<u&&l.push(s+1);for(let f=u;f<=y;f+=1)l.push(f);return y<e-s-1?l.push("ellipsis-right"):y+1<e-s+1&&l.push(e-s),l.push(...R),l}function m({page:a,pageCount:e,onPageChange:r,siblingCount:s=1,boundaryCount:c=1,disabled:u=!1,showFirstLast:y=!0,ariaLabel:l="Pagination",ariaLabelledBy:$,getItemAriaLabel:R=z}){const f=p.useRef(null),x=p.useRef(null),Ce=W(l,"Pagination"),_=W($),T=Math.max(e,1),d=P(a,1,T),Re=e<=1?[]:Te(d,e,s,c),N=P(d-1,1,T),O=P(d+1,1,T),j=!u&&e>1&&d>1,D=!u&&e>1&&d<e,v=p.useCallback((n,i)=>W(R(n,i),z(n,i)),[R]),w=n=>{if(u||e<=1)return;const i=P(n,1,e);i!==d&&r(i)};p.useEffect(()=>{var h;if(x.current===null)return;const n=x.current;x.current=null;const i=(h=f.current)==null?void 0:h.querySelector(`button[data-aurora-pagination-page="${n}"]`);i==null||i.focus()},[d]);const q=n=>{const i=P(n,1,e);if(i===d){x.current=null;return}x.current=i,w(i)},B=n=>{if(u||(n.altKey||n.ctrlKey||n.metaKey)&&je(n.key))return;if(n.key==="Home")n.preventDefault(),q(1);else if(n.key==="End"){n.preventDefault(),q(T);return}const i=De(n.key,n.currentTarget);i!==void 0&&(n.preventDefault(),q(d+i))};return e<=1?null:t.jsx("nav",{ref:f,"aria-label":_?void 0:Ce,"aria-labelledby":_,children:t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[y?t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!j,onClick:()=>w(1),onKeyDown:B,"aria-label":v("first",1),style:C(!1,!j),children:"«"})}):null,t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!j,onClick:()=>w(N),onKeyDown:B,"aria-label":v("previous",N),style:C(!1,!j),children:"‹"})}),Re.map((n,i)=>{if(typeof n!="number")return t.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${n}-${i}`);const h=n===d;return t.jsx("li",{children:t.jsx("button",{type:"button",onClick:()=>w(n),disabled:u,onKeyDown:B,"data-aurora-pagination-page":n,"aria-current":h?"page":void 0,"aria-label":v(h?"current":"page",n),style:C(h,u),children:n})},n)}),t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!D,onClick:()=>w(O),onKeyDown:B,"aria-label":v("next",O),style:C(!1,!D),children:"›"})}),y?t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!D,onClick:()=>w(e),onKeyDown:B,"aria-label":v("last",e),style:C(!1,!D),children:"»"})}):null]})})}function je(a){return a==="Home"||a==="End"||a==="ArrowLeft"||a==="ArrowRight"}function De(a,e){if(!(a!=="ArrowLeft"&&a!=="ArrowRight"))return He(a,Ae(e))}function He(a,e){return a==="ArrowRight"?e?-1:1:e?1:-1}function Ae(a){if(!a)return!1;const e=a.closest("[dir]");if((e==null?void 0:e.dir)==="rtl")return!0;if((e==null?void 0:e.dir)==="ltr")return!1;const r=a.ownerDocument.defaultView??(typeof window<"u"?window:null);return r?r.getComputedStyle(a).direction==="rtl":!1}function z(a,e){switch(a){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function C(a,e){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:a?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit"}}function W(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}m.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,computed:!1}}}};const Me={title:"Data/Pagination",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior and accessible page labels."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function Ee(){const[a,e]=p.useState(1);return t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),t.jsx(M,{tone:"default",children:a})]}),t.jsx(m,{page:a,pageCount:12,onPageChange:e})]})}const H={render:()=>t.jsx(Ee,{}),play:async({canvasElement:a})=>{const e=b(a);await g.click(await e.findByRole("button",{name:"Go to page 2"})),await o(await e.findByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function Ie(){const[a,e]=p.useState(4);return t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),t.jsx(M,{tone:"default",children:a})]}),t.jsx(m,{page:a,pageCount:12,onPageChange:e})]})}const A={render:()=>t.jsx(Ie,{}),play:async({canvasElement:a})=>{const e=b(a),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await g.keyboard("{End}");const s=await e.findByRole("button",{name:"Current page, 12"});await o(s).toBeInTheDocument(),await o(s).toHaveFocus(),await g.keyboard("{Home}");const c=await e.findByRole("button",{name:"Current page, 1"});await o(c).toBeInTheDocument(),await o(c).toHaveFocus()}};function Le(){const[a,e]=p.useState(4);return t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Modifier guard page"}),t.jsx(M,{tone:"default","data-testid":"pagination-modifier-guard-page",children:a})]}),t.jsx(m,{page:a,pageCount:12,onPageChange:e})]})}const E={render:()=>t.jsx(Le,{}),play:async({canvasElement:a})=>{const e=b(a),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await g.keyboard("{Control>}{End}{/Control}"),await g.keyboard("{Meta>}{ArrowRight}{/Meta}"),await g.keyboard("{Alt>}{Home}{/Alt}"),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("4"),await o(e.getByRole("button",{name:"Current page, 4"})).toHaveFocus(),await g.keyboard("{End}"),await o(e.getByTestId("pagination-modifier-guard-page")).toHaveTextContent("12"),await o(await e.findByRole("button",{name:"Current page, 12"})).toHaveFocus()}};function Se(){const[a,e]=p.useState(4);return t.jsxs("div",{dir:"rtl",style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"صفحه فعال"}),t.jsx(M,{tone:"default","data-testid":"rtl-page-value",children:a})]}),t.jsx(m,{page:a,pageCount:12,onPageChange:e})]})}const I={render:()=>t.jsx(Se,{}),play:async({canvasElement:a})=>{const e=b(a),r=await e.findByRole("button",{name:"Current page, 4"});r.focus(),await o(r).toHaveFocus(),await g.keyboard("{ArrowRight}");const s=await e.findByRole("button",{name:"Current page, 3"});await o(s).toBeInTheDocument(),await o(s).toHaveFocus(),await o(e.getByTestId("rtl-page-value")).toHaveTextContent("3"),await g.keyboard("{ArrowLeft}");const c=await e.findByRole("button",{name:"Current page, 4"});await o(c).toBeInTheDocument(),await o(c).toHaveFocus(),await o(e.getByTestId("rtl-page-value")).toHaveTextContent("4")}},L={args:{page:9,pageCount:48,onPageChange:()=>{}}},S={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},F={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}},K={args:{page:2,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}}},G={args:{page:1,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}},play:async({canvasElement:a})=>{const e=b(a);await o(e.getByRole("button",{name:"Pagination previous 1"})).toBeInTheDocument(),await o(e.getByRole("button",{name:"Pagination next 2"})).toBeInTheDocument()}},k={render:a=>t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsx("h3",{id:"pagination-release-heading",style:{margin:0},children:"Release pages"}),t.jsx(m,{...a,ariaLabelledBy:"pagination-release-heading"})]}),args:{page:3,pageCount:12,onPageChange:()=>{}},play:async({canvasElement:a})=>{const r=await b(a).findByRole("navigation",{name:"Release pages"});await o(r).toHaveAttribute("aria-labelledby","pagination-release-heading"),await o(r).not.toHaveAttribute("aria-label")}};var J,Q,U;H.parameters={...H.parameters,docs:{...(J=H.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=H.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;A.parameters={...A.parameters,docs:{...(X=A.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,re,oe;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(re=I.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ie,ce;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(ce=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,le,de;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(de=(le=S.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ge,pe,me;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(me=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ye,fe,ve;K.parameters={...K.parameters,docs:{...(ye=K.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(ve=(fe=K.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var we,he,be;G.parameters={...G.parameters,docs:{...(we=G.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(be=(he=G.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var xe,Be,Pe;k.parameters={...k.parameters,docs:{...(xe=k.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Pe=(Be=k.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source}}};const $e=["Controlled","KeyboardShortcuts","ModifierKeyGuard","RtlKeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","CustomAriaLabels","BoundaryAriaLabels","LabelledByHeading"];export{G as BoundaryAriaLabels,L as CompactRange,H as Controlled,K as CustomAriaLabels,F as DisabledPagination,A as KeyboardShortcuts,k as LabelledByHeading,E as ModifierKeyGuard,I as RtlKeyboardShortcuts,S as WithoutFirstLast,$e as __namedExportsOrder,Me as default};
