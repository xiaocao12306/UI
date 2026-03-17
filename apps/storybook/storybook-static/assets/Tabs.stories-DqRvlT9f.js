import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{r as i}from"./index-BWu4c2F4.js";import{B as U}from"./Badge-Dkm8CRgf.js";function j(a,t,h){var n;if(a.length===0)return-1;let l=t;for(let s=0;s<a.length;s+=1)if(l=(l+h+a.length)%a.length,!((n=a[l])!=null&&n.disabled))return l;return-1}function y({items:a,value:t,defaultValue:h,ariaLabel:l="Tabs",onValueChange:n}){var E;const s=i.useId(),f=i.useRef([]),S=(E=a.find(e=>!e.disabled))==null?void 0:E.key,[w,T]=i.useState(h??S),I=t??w,c=a.some(e=>e.key===I&&!e.disabled)?I:S;i.useEffect(()=>{t===void 0&&c!==w&&T(c)},[c,w,t]);const g=i.useCallback(e=>{const u=a.find(d=>d.key===e);!u||u.disabled||(t===void 0&&T(e),n==null||n(e))},[a,n,t]);return r.jsxs("div",{style:{display:"grid",gap:10},children:[r.jsx("div",{role:"tablist","aria-label":l,"aria-orientation":"horizontal",style:{display:"flex",gap:6,flexWrap:"wrap"},children:a.map((e,u)=>{const d=e.key===c,k=!!e.disabled;return r.jsx("button",{ref:o=>{f.current[u]=o},id:`${s}-tab-${e.key}`,type:"button",role:"tab","aria-selected":d,"aria-controls":`${s}-panel-${e.key}`,"aria-disabled":k||void 0,tabIndex:d?0:-1,disabled:k,onClick:()=>g(e.key),onKeyDown:o=>{var A,N,D,B,L,$;if(!["ArrowLeft","ArrowRight","Home","End"].includes(o.key))return;if(o.preventDefault(),o.key==="Home"){const p=j(a,-1,1),b=(A=a[p])==null?void 0:A.key;b&&(g(b),(N=f.current[p])==null||N.focus());return}if(o.key==="End"){const p=j(a,0,-1),b=(D=a[p])==null?void 0:D.key;b&&(g(b),(B=f.current[p])==null||B.focus());return}const K=j(a,u,o.key==="ArrowRight"?1:-1),q=(L=a[K])==null?void 0:L.key;q&&(g(q),($=f.current[K])==null||$.focus())},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:d?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:d?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":"var(--aurora-surface-default)",color:k?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:k?"not-allowed":"pointer"},children:e.label},e.key)})}),a.map(e=>e.key===c?r.jsx("div",{id:`${s}-panel-${e.key}`,role:"tabpanel","aria-labelledby":`${s}-tab-${e.key}`,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:e.content},e.key):null)]})}y.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const Q=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],ae={title:"Data/Tabs",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:Q,defaultValue:"spec"}},m={};function X(){const[a,t]=i.useState("build");return r.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[r.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),r.jsx(U,{tone:"default",children:a})]}),r.jsx(y,{items:Q,value:a,onValueChange:t})]})}const v={render:()=>r.jsx(X,{})},R={render:()=>r.jsx(y,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},x={render:()=>r.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[r.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: use ArrowLeft/ArrowRight to move, Home to jump first enabled tab, End to jump last enabled tab."}),r.jsx(y,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]})};var V,H,C;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(C=(H=m.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var _,W,G;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <ControlledTabsDemo />
}`,...(G=(W=v.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var P,z,O;R.parameters={...R.parameters,docs:{...(P=R.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Tabs ariaLabel="Release stages" defaultValue="spec" items={[{
    key: "spec",
    label: "Spec",
    content: "Specification stage is active."
  }, {
    key: "security",
    label: "Security Review",
    content: "Security review is pending.",
    disabled: true
  }, {
    key: "release",
    label: "Release",
    content: "Release checklist is ready."
  }]} />
}`,...(O=(z=R.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var F,J,M;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 620,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Keyboard: use ArrowLeft/ArrowRight to move, Home to jump first enabled tab, End to jump last enabled tab.
      </p>
      <Tabs ariaLabel="Keyboard guide tabs" defaultValue="spec" items={[{
      key: "blocked",
      label: "Blocked",
      content: "Blocked tab",
      disabled: true
    }, {
      key: "spec",
      label: "Spec",
      content: "Specification stage."
    }, {
      key: "review",
      label: "Review",
      content: "Review stage.",
      disabled: true
    }, {
      key: "release",
      label: "Release",
      content: "Release stage."
    }]} />
    </div>
}`,...(M=(J=x.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};const re=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide"];export{v as Controlled,m as Default,x as KeyboardNavigationGuide,R as WithDisabledTab,re as __namedExportsOrder,ae as default};
