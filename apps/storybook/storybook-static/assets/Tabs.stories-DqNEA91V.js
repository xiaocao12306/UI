import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as te}from"./Badge-Dkm8CRgf.js";import{within as ne,userEvent as m,expect as v}from"./index-DgAF9SIF.js";function B(e,t,o){var r;if(e.length===0)return-1;let s=t;for(let l=0;l<e.length;l+=1)if(s=(s+o+e.length)%e.length,!((r=e[s])!=null&&r.disabled))return s;return-1}function b({items:e,value:t,defaultValue:o,ariaLabel:s="Tabs",onValueChange:r}){var A;const l=c.useId(),f=c.useRef([]),C=(A=e.find(a=>!a.disabled))==null?void 0:A.key,[S,H]=c.useState(o??C),I=t??S,i=e.some(a=>a.key===I&&!a.disabled)?I:C;c.useEffect(()=>{t===void 0&&i!==S&&H(i)},[i,S,t]);const k=c.useCallback(a=>{const p=e.find(u=>u.key===a);!p||p.disabled||a===i||(t===void 0&&H(a),r==null||r(a))},[i,e,r,t]);return n.jsxs("div",{style:{display:"grid",gap:10},children:[n.jsx("div",{role:"tablist","aria-label":s,"aria-orientation":"horizontal",style:{display:"flex",gap:6,flexWrap:"wrap"},children:e.map((a,p)=>{const u=a.key===i,x=!!a.disabled;return n.jsx("button",{ref:d=>{f.current[p]=d},id:`${l}-tab-${a.key}`,type:"button",role:"tab","aria-selected":u,"aria-controls":`${l}-panel-${a.key}`,"aria-disabled":x||void 0,tabIndex:u?0:-1,disabled:x,onClick:()=>k(a.key),onKeyDown:d=>{var K,q,N,V,$,P;if(!["ArrowLeft","ArrowRight","Home","End"].includes(d.key))return;if(d.preventDefault(),d.key==="Home"){const y=B(e,-1,1),g=(K=e[y])==null?void 0:K.key;g&&(k(g),(q=f.current[y])==null||q.focus());return}if(d.key==="End"){const y=B(e,0,-1),g=(N=e[y])==null?void 0:N.key;g&&(k(g),(V=f.current[y])==null||V.focus());return}const L=B(e,p,d.key==="ArrowRight"?1:-1),D=($=e[L])==null?void 0:$.key;D&&(k(D),(P=f.current[L])==null||P.focus())},style:{height:34,borderRadius:"var(--aurora-radius-md)",border:u?"1px solid var(--aurora-accent-default)":"1px solid var(--aurora-border-default)",background:u?"color-mix(in srgb, var(--aurora-accent-default) 14%, transparent)":"var(--aurora-surface-default)",color:x?"color-mix(in srgb, var(--aurora-text-secondary) 64%, transparent)":"var(--aurora-text-primary)",padding:"0 12px",cursor:x?"not-allowed":"pointer"},children:a.label},a.key)})}),e.map(a=>a.key===i?n.jsx("div",{id:`${l}-panel-${a.key}`,role:"tabpanel","aria-labelledby":`${l}-tab-${a.key}`,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-md)",padding:12,background:"var(--aurora-surface-default)"},children:a.content},a.key):null)]})}b.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"TabItem[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Tabs"',computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const E=[{key:"spec",label:"Spec",content:"Token contract, component API, and test strategy are captured here before implementation."},{key:"build",label:"Build",content:"Run lint, typecheck, and unit tests for all affected packages, then update docs."},{key:"release",label:"Release",content:"Publish with changesets and validate Storybook + demo output as final quality gate."}],de={title:"Data/Tabs",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tabs support keyboard navigation (Arrow/Home/End) and theme-aware state styling for data-heavy dashboards."}}},args:{items:E,defaultValue:"spec"}},h={};function re(){const[e,t]=c.useState("build");return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current stage"}),n.jsx(te,{tone:"default",children:e})]}),n.jsx(b,{items:E,value:e,onValueChange:t})]})}const w={render:()=>n.jsx(re,{}),play:async({canvasElement:e})=>{const t=ne(e),o=t.getByRole("tab",{name:"Release"});await m.click(o),await v(t.getByRole("tabpanel")).toHaveTextContent("Publish with changesets"),t.getByRole("tablist",{name:"Tabs"}).focus(),await m.keyboard("{Home}"),await v(t.getByRole("tab",{name:"Spec"})).toHaveAttribute("aria-selected","true")}},R={render:()=>n.jsx(b,{ariaLabel:"Release stages",defaultValue:"spec",items:[{key:"spec",label:"Spec",content:"Specification stage is active."},{key:"security",label:"Security Review",content:"Security review is pending.",disabled:!0},{key:"release",label:"Release",content:"Release checklist is ready."}]})},T={render:()=>n.jsxs("div",{style:{width:620,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Keyboard: use ArrowLeft/ArrowRight to move, Home to jump first enabled tab, End to jump last enabled tab."}),n.jsx(b,{ariaLabel:"Keyboard guide tabs",defaultValue:"spec",items:[{key:"blocked",label:"Blocked",content:"Blocked tab",disabled:!0},{key:"spec",label:"Spec",content:"Specification stage."},{key:"review",label:"Review",content:"Review stage.",disabled:!0},{key:"release",label:"Release",content:"Release stage."}]})]})};function se(){const[e,t]=c.useState("build"),[o,s]=c.useState(0);return n.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Value change events"}),n.jsx(te,{tone:"default","data-testid":"change-count",children:o})]}),n.jsx(b,{items:E,value:e,onValueChange:r=>{t(r),s(l=>l+1)}})]})}const j={render:()=>n.jsx(se,{}),play:async({canvasElement:e})=>{const t=ne(e),o=t.getByRole("tab",{name:"Build"}),s=t.getByRole("tab",{name:"Release"}),r=t.getByTestId("change-count");await m.click(o),await v(r).toHaveTextContent("0"),await m.click(s),await v(r).toHaveTextContent("1"),await m.click(s),await v(r).toHaveTextContent("1")}};var _,W,G;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(G=(W=h.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var z,O,F;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ControlledTabsDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const releaseTab = canvas.getByRole("tab", {
      name: "Release"
    });
    await userEvent.click(releaseTab);
    await expect(canvas.getByRole("tabpanel")).toHaveTextContent("Publish with changesets");
    const tabList = canvas.getByRole("tablist", {
      name: "Tabs"
    });
    tabList.focus();
    await userEvent.keyboard("{Home}");
    await expect(canvas.getByRole("tab", {
      name: "Spec"
    })).toHaveAttribute("aria-selected", "true");
  }
}`,...(F=(O=w.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var J,M,Q;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(M=R.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,X,Y;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <ChangeTelemetryDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buildTab = canvas.getByRole("tab", {
      name: "Build"
    });
    const releaseTab = canvas.getByRole("tab", {
      name: "Release"
    });
    const counter = canvas.getByTestId("change-count");
    await userEvent.click(buildTab);
    await expect(counter).toHaveTextContent("0");
    await userEvent.click(releaseTab);
    await expect(counter).toHaveTextContent("1");
    await userEvent.click(releaseTab);
    await expect(counter).toHaveTextContent("1");
  }
}`,...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const ue=["Default","Controlled","WithDisabledTab","KeyboardNavigationGuide","ChangeTelemetry"];export{j as ChangeTelemetry,w as Controlled,h as Default,T as KeyboardNavigationGuide,R as WithDisabledTab,ue as __namedExportsOrder,de as default};
