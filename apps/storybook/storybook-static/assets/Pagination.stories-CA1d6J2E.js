import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as d}from"./index-BWu4c2F4.js";import{B as W}from"./Badge-ZJmMstsz.js";import{within as R,expect as i,userEvent as B}from"./index-DgAF9SIF.js";function x(a,e,s){return Math.min(Math.max(a,e),s)}function q(a,e){const s=e-a+1;return Array.from({length:s},(r,c)=>a+c)}function Pe(a,e,s,r){const c=r*2+s*2+3;if(e<=c)return q(1,e);const l=Math.max(a-s,r+2),g=Math.min(a+s,e-r-1),u=[],$=q(1,r),C=q(e-r+1,e);u.push(...$),l>r+2?u.push("ellipsis-left"):r+1<l&&u.push(r+1);for(let m=l;m<=g;m+=1)u.push(m);return g<e-r-1?u.push("ellipsis-right"):g+1<e-r+1&&u.push(e-r),u.push(...C),u}function h({page:a,pageCount:e,onPageChange:s,siblingCount:r=1,boundaryCount:c=1,disabled:l=!1,showFirstLast:g=!0,ariaLabel:u="Pagination",ariaLabelledBy:$,getItemAriaLabel:C=O}){const m=d.useRef(null),w=d.useRef(null),be=V(u,"Pagination"),M=V($),D=Math.max(e,1),p=x(a,1,D),xe=e<=1?[]:Pe(p,e,r,c),_=x(p-1,1,D),N=x(p+1,1,D),T=!l&&e>1&&p>1,j=!l&&e>1&&p<e,f=d.useCallback((n,o)=>V(C(n,o),O(n,o)),[C]),y=n=>{if(l||e<=1)return;const o=x(n,1,e);o!==p&&s(o)};d.useEffect(()=>{var v;if(w.current===null)return;const n=w.current;w.current=null;const o=(v=m.current)==null?void 0:v.querySelector(`button[data-aurora-pagination-page="${n}"]`);o==null||o.focus()},[p]);const k=n=>{const o=x(n,1,e);if(o===p){w.current=null;return}w.current=o,y(o)},b=n=>{if(l)return;if(n.key==="Home")n.preventDefault(),k(1);else if(n.key==="End"){n.preventDefault(),k(D);return}const o=Be(n.key,n.currentTarget);o!==void 0&&(n.preventDefault(),k(p+o))};return e<=1?null:t.jsx("nav",{ref:m,"aria-label":M?void 0:be,"aria-labelledby":M,children:t.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"},children:[g?t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!T,onClick:()=>y(1),onKeyDown:b,"aria-label":f("first",1),style:P(!1,!T),children:"«"})}):null,t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!T,onClick:()=>y(_),onKeyDown:b,"aria-label":f("previous",_),style:P(!1,!T),children:"‹"})}),xe.map((n,o)=>{if(typeof n!="number")return t.jsx("li",{"aria-hidden":"true",style:{color:"var(--aurora-text-secondary)",minWidth:32,textAlign:"center"},children:"…"},`${n}-${o}`);const v=n===p;return t.jsx("li",{children:t.jsx("button",{type:"button",onClick:()=>y(n),disabled:l,onKeyDown:b,"data-aurora-pagination-page":n,"aria-current":v?"page":void 0,"aria-label":f(v?"current":"page",n),style:P(v,l),children:n})},n)}),t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!j,onClick:()=>y(N),onKeyDown:b,"aria-label":f("next",N),style:P(!1,!j),children:"›"})}),g?t.jsx("li",{children:t.jsx("button",{type:"button",disabled:!j,onClick:()=>y(e),onKeyDown:b,"aria-label":f("last",e),style:P(!1,!j),children:"»"})}):null]})})}function Be(a,e){if(!(a!=="ArrowLeft"&&a!=="ArrowRight"))return Re(a,Ce(e))}function Re(a,e){return a==="ArrowRight"?e?-1:1:e?1:-1}function Ce(a){if(!a)return!1;const e=a.closest("[dir]");return(e==null?void 0:e.dir)==="rtl"?!0:(e==null?void 0:e.dir)==="ltr"||typeof window>"u"?!1:window.getComputedStyle(a).direction==="rtl"}function O(a,e){switch(a){case"first":return"Go to first page";case"last":return"Go to last page";case"previous":return"Go to previous page";case"next":return"Go to next page";case"current":return`Current page, ${e}`;default:return`Go to page ${e}`}}function P(a,e){return{minWidth:32,height:32,padding:"0 8px",borderRadius:"var(--aurora-radius-sm)",border:a?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:a?"color-mix(in srgb, var(--aurora-accent-default) 12%, var(--aurora-surface-default))":"var(--aurora-surface-default)",color:e?"color-mix(in srgb, var(--aurora-text-secondary) 65%, transparent)":"var(--aurora-text-primary)",cursor:e?"not-allowed":"pointer",font:"inherit"}}function V(a,e){return typeof a=="string"&&a.trim().length>0?a.trim():e}h.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},boundaryCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},getItemAriaLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(
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
}`,computed:!1}}}};const Ee={title:"Data/Pagination",component:h,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pagination provides first/previous/number/next/last controls with compact ellipsis behavior and accessible page labels."}}},args:{page:6,pageCount:20,onPageChange:()=>{}}};function De(){const[a,e]=d.useState(1);return t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Active page"}),t.jsx(W,{tone:"default",children:a})]}),t.jsx(h,{page:a,pageCount:12,onPageChange:e})]})}const L={render:()=>t.jsx(De,{}),play:async({canvasElement:a})=>{const e=R(a);await B.click(await e.findByRole("button",{name:"Go to page 2"})),await i(await e.findByRole("button",{name:"Current page, 2"})).toBeInTheDocument()}};function Te(){const[a,e]=d.useState(4);return t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Keyboard page"}),t.jsx(W,{tone:"default",children:a})]}),t.jsx(h,{page:a,pageCount:12,onPageChange:e})]})}const A={render:()=>t.jsx(Te,{}),play:async({canvasElement:a})=>{const e=R(a),s=await e.findByRole("button",{name:"Current page, 4"});s.focus(),await i(s).toHaveFocus(),await B.keyboard("{End}");const r=await e.findByRole("button",{name:"Current page, 12"});await i(r).toBeInTheDocument(),await i(r).toHaveFocus(),await B.keyboard("{Home}");const c=await e.findByRole("button",{name:"Current page, 1"});await i(c).toBeInTheDocument(),await i(c).toHaveFocus()}};function je(){const[a,e]=d.useState(4);return t.jsxs("div",{dir:"rtl",style:{width:640,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"صفحه فعال"}),t.jsx(W,{tone:"default","data-testid":"rtl-page-value",children:a})]}),t.jsx(h,{page:a,pageCount:12,onPageChange:e})]})}const I={render:()=>t.jsx(je,{}),play:async({canvasElement:a})=>{const e=R(a),s=await e.findByRole("button",{name:"Current page, 4"});s.focus(),await i(s).toHaveFocus(),await B.keyboard("{ArrowRight}");const r=await e.findByRole("button",{name:"Current page, 3"});await i(r).toBeInTheDocument(),await i(r).toHaveFocus(),await i(e.getByTestId("rtl-page-value")).toHaveTextContent("3"),await B.keyboard("{ArrowLeft}");const c=await e.findByRole("button",{name:"Current page, 4"});await i(c).toBeInTheDocument(),await i(c).toHaveFocus(),await i(e.getByTestId("rtl-page-value")).toHaveTextContent("4")}},S={args:{page:9,pageCount:48,onPageChange:()=>{}}},E={args:{page:3,pageCount:10,showFirstLast:!1,onPageChange:()=>{}}},H={args:{page:4,pageCount:12,disabled:!0,onPageChange:()=>{}}},F={args:{page:2,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}}},G={args:{page:1,pageCount:9,getItemAriaLabel:(a,e)=>`Pagination ${a} ${e}`,onPageChange:()=>{}},play:async({canvasElement:a})=>{const e=R(a);await i(e.getByRole("button",{name:"Pagination previous 1"})).toBeInTheDocument(),await i(e.getByRole("button",{name:"Pagination next 2"})).toBeInTheDocument()}},K={render:a=>t.jsxs("div",{style:{width:640,display:"grid",gap:12},children:[t.jsx("h3",{id:"pagination-release-heading",style:{margin:0},children:"Release pages"}),t.jsx(h,{...a,ariaLabelledBy:"pagination-release-heading"})]}),args:{page:3,pageCount:12,onPageChange:()=>{}},play:async({canvasElement:a})=>{const s=await R(a).findByRole("navigation",{name:"Release pages"});await i(s).toHaveAttribute("aria-labelledby","pagination-release-heading"),await i(s).not.toHaveAttribute("aria-label")}};var z,J,Q;L.parameters={...L.parameters,docs:{...(z=L.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Q=(J=L.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    page: 9,
    pageCount: 48,
    onPageChange: () => {}
  }
}`,...(re=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,oe,ie;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageCount: 10,
    showFirstLast: false,
    onPageChange: () => {}
  }
}`,...(ie=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,le,ue;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    page: 4,
    pageCount: 12,
    disabled: true,
    onPageChange: () => {}
  }
}`,...(ue=(le=H.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var pe,de,ge;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    page: 2,
    pageCount: 9,
    getItemAriaLabel: (type, page) => \`Pagination \${type} \${page}\`,
    onPageChange: () => {}
  }
}`,...(ge=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var me,fe,ye;G.parameters={...G.parameters,docs:{...(me=G.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ye=(fe=G.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,he,we;K.parameters={...K.parameters,docs:{...(ve=K.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(we=(he=K.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};const He=["Controlled","KeyboardShortcuts","RtlKeyboardShortcuts","CompactRange","WithoutFirstLast","DisabledPagination","CustomAriaLabels","BoundaryAriaLabels","LabelledByHeading"];export{G as BoundaryAriaLabels,S as CompactRange,L as Controlled,F as CustomAriaLabels,H as DisabledPagination,A as KeyboardShortcuts,K as LabelledByHeading,I as RtlKeyboardShortcuts,E as WithoutFirstLast,He as __namedExportsOrder,Ee as default};
