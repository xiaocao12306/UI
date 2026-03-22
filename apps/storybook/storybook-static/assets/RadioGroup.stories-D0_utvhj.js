import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{a as Ee}from"./a11y-CU5SQrEA.js";import{B as Se}from"./Badge-ZJmMstsz.js";import{within as m,userEvent as T,expect as c,fireEvent as Le}from"./index-DgAF9SIF.js";function y({name:e,value:t,defaultValue:s,options:u,onChange:j,ariaLabel:de,ariaLabelledBy:ue,invalid:pe,"aria-invalid":me,disabled:f=!1,direction:A="vertical"}){const[ye,ve]=l.useState(s),[be,D]=l.useState(null),[ge,v]=l.useState(null),V=l.useRef(null),p=l.useRef(!1);l.useRef(null),l.useRef(null);const fe=t??ye,z=Ee(pe,me),q=z!==void 0,I=h(ue),he=I?void 0:h(de),we=q?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)";l.useEffect(()=>{f&&(D(null),v(null))},[f]),l.useEffect(()=>{},[u]),l.useEffect(()=>{},[u]);const Re=l.useMemo(()=>{const a=new Map;return u.map(r=>{const o=a.get(r.value)??0;return a.set(r.value,o+1),o===0?r.value:`${r.value}__duplicate-${o}`})},[u]);l.useEffect(()=>{var b;const a=((b=V.current)==null?void 0:b.ownerDocument)??document,r=d=>{d.metaKey||d.altKey||d.ctrlKey||(p.current=!0)},o=d=>{"button"in d&&!F(d.button)||"ctrlKey"in d&&d.ctrlKey||(p.current=!1)};return a.addEventListener("keydown",r,!0),a.addEventListener("pointerdown",o,!0),a.addEventListener("mousedown",o,!0),a.addEventListener("touchstart",o,!0),()=>{a.removeEventListener("keydown",r,!0),a.removeEventListener("pointerdown",o,!0),a.removeEventListener("mousedown",o,!0),a.removeEventListener("touchstart",o,!0)}},[]);const xe=(a,r)=>{f||r||(t===void 0&&ve(a),j==null||j(a))};return n.jsx("div",{ref:V,style:{display:A==="horizontal"?"flex":"grid",gap:8,alignItems:A==="horizontal"?"center":void 0},role:"radiogroup","aria-label":I?void 0:he??e,"aria-labelledby":I,"aria-orientation":A,"aria-invalid":z,children:u.map((a,r)=>{const o=!!(f||a.disabled),b=ke(a.description),d=be===r,C=ge===r,P=h(a.ariaLabelledBy),Be=P?void 0:h(a.ariaLabel);return n.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:o?.7:1,cursor:o?"not-allowed":"pointer"},children:[n.jsx("input",{type:"radio",name:e,value:a.value,"aria-labelledby":P,"aria-label":Be,checked:fe===a.value,disabled:o,"aria-keyshortcuts":o?void 0:"Space","data-focused":d?"true":void 0,"data-focus-visible":C?"true":void 0,onChange:()=>xe(a.value,a.disabled),onFocus:i=>{D(r),v(je(i.currentTarget,p.current)?r:null)},onBlur:()=>{D(i=>i===r?null:i),v(i=>i===r?null:i)},onMouseDown:i=>{i.button!==0||i.ctrlKey||(p.current=!1,v(g=>g===r?null:g))},onPointerDown:i=>{!F(i.button)||i.ctrlKey||(p.current=!1,v(g=>g===r?null:g))},onKeyDown:()=>{p.current=!0},style:{marginTop:2,accentColor:q?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:o?"not-allowed":"pointer",boxShadow:d&&C&&!o?`0 0 0 3px ${we}`:"none"}}),n.jsxs("span",{style:{display:"grid",gap:b?2:0},children:[n.jsx("span",{children:a.label}),b?n.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:a.description}):null]})]},Re[r]??`${a.value}__index-${r}`)})})}function h(e){if(typeof e!="string")return;const t=e.trim();return t.length>0?t:void 0}function ke(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:!0}function je(e,t){try{return e.matches(":focus-visible")||t}catch{return t}}function F(e){return typeof e!="number"||e<=0}y.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const H=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],Ae=[{label:n.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),value:"deploy",ariaLabel:"Deploy mode",ariaLabelledBy:"radio-option-heading"},{label:n.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),value:"rollback",ariaLabel:"Rollback mode"}],qe={title:"Form/RadioGroup",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:H}};function De(){const[e,t]=l.useState("m");return n.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),n.jsx(Se,{children:e})]}),n.jsx(y,{name:"Size selection",value:e,onChange:t,options:H})]})}const w={render:()=>n.jsx(De,{}),play:async({canvasElement:e})=>{const s=m(e).getByRole("radio",{name:/Large/i});await T.click(s),await c(s).toBeChecked()}},R={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},x={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}},B={args:{name:"Numeric descriptions",options:[{label:"Priority tier",value:"p0",description:0}]},play:async({canvasElement:e})=>{const t=m(e);await c(t.getByText("0")).toBeInTheDocument(),await c(t.getByRole("radio",{name:"Priority tier 0"})).toBeInTheDocument()}},E={args:{name:"Shortcut hints",options:[{label:"Enabled radio option",value:"enabled"},{label:"Disabled radio option",value:"disabled",disabled:!0}]},play:async({canvasElement:e})=>{const t=m(e);await c(t.getByRole("radio",{name:"Enabled radio option"})).toHaveAttribute("aria-keyshortcuts","Space"),await c(t.getByRole("radio",{name:"Disabled radio option"})).not.toHaveAttribute("aria-keyshortcuts")}},S={render:()=>n.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[n.jsx("p",{id:"radiogroup-story-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Release preference heading"}),n.jsx(y,{name:"Release preference fallback",ariaLabel:"Release preference fallback label",ariaLabelledBy:"radiogroup-story-heading",defaultValue:"m",options:H})]}),play:async({canvasElement:e})=>{const s=m(e).getByRole("radiogroup",{name:"Release preference heading"});await c(s).toHaveAttribute("aria-labelledby","radiogroup-story-heading"),await c(s).not.toHaveAttribute("aria-label")}},L={render:()=>n.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[n.jsx("p",{id:"radio-option-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Deploy mode"}),n.jsx(y,{name:"Deployment mode fallback",options:Ae,defaultValue:"deploy"})]}),play:async({canvasElement:e})=>{const s=m(e).getByRole("radio",{name:"Deploy mode"});await c(s).toHaveAttribute("aria-labelledby","radio-option-heading"),await c(s).not.toHaveAttribute("aria-label")}},k={render:()=>n.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[n.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores radio focus-visible state."}),n.jsx("button",{type:"button",children:"Before radio group"}),n.jsx(y,{name:"Focus intent group",defaultValue:"m",options:[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}]})]}),play:async({canvasElement:e})=>{const t=m(e),s=await t.findByRole("button",{name:"Before radio group"}),u=t.getByRole("radio",{name:/^Medium/});await T.click(s),await T.tab(),await c(u).toHaveFocus(),await c(u).toHaveAttribute("data-focus-visible","true"),Le.mouseDown(u,{button:0,ctrlKey:!0}),await c(u).toHaveAttribute("data-focus-visible","true")}};var N,K,O;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <ControlledRadioGroup />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const large = canvas.getByRole("radio", {
      name: /Large/i
    });
    await userEvent.click(large);
    await expect(large).toBeChecked();
  }
}`,...(O=(K=w.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var G,M,_;R.parameters={...R.parameters,docs:{...(G=R.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    name: "Approval",
    invalid: true,
    options: [{
      label: "Approved",
      value: "approved"
    }, {
      label: "Rejected",
      value: "rejected"
    }]
  }
}`,...(_=(M=R.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var $,J,Q;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    name: "Release track",
    defaultValue: "stable",
    options: [{
      label: "Stable",
      value: "stable"
    }, {
      label: "Canary",
      value: "canary",
      disabled: true
    }, {
      label: "Experimental",
      value: "experimental"
    }]
  }
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,W,X;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    name: "Numeric descriptions",
    options: [{
      label: "Priority tier",
      value: "p0",
      description: 0
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("0")).toBeInTheDocument();
    await expect(canvas.getByRole("radio", {
      name: "Priority tier 0"
    })).toBeInTheDocument();
  }
}`,...(X=(W=B.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    name: "Shortcut hints",
    options: [{
      label: "Enabled radio option",
      value: "enabled"
    }, {
      label: "Disabled radio option",
      value: "disabled",
      disabled: true
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("radio", {
      name: "Enabled radio option"
    })).toHaveAttribute("aria-keyshortcuts", "Space");
    await expect(canvas.getByRole("radio", {
      name: "Disabled radio option"
    })).not.toHaveAttribute("aria-keyshortcuts");
  }
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,ne,te;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 340,
    display: "grid",
    gap: 12
  }}>
      <p id="radiogroup-story-heading" style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Release preference heading
      </p>
      <RadioGroup name="Release preference fallback" ariaLabel="Release preference fallback label" ariaLabelledBy="radiogroup-story-heading" defaultValue="m" options={options} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole("radiogroup", {
      name: "Release preference heading"
    });
    await expect(group).toHaveAttribute("aria-labelledby", "radiogroup-story-heading");
    await expect(group).not.toHaveAttribute("aria-label");
  }
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,oe,ie;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 340,
    display: "grid",
    gap: 12
  }}>
      <p id="radio-option-heading" style={{
      margin: 0,
      color: "var(--aurora-text-secondary)"
    }}>
        Deploy mode
      </p>
      <RadioGroup name="Deployment mode fallback" options={iconOptions} defaultValue="deploy" />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const deployOption = canvas.getByRole("radio", {
      name: "Deploy mode"
    });
    await expect(deployOption).toHaveAttribute("aria-labelledby", "radio-option-heading");
    await expect(deployOption).not.toHaveAttribute("aria-label");
  }
}`,...(ie=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,se,ce;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 340,
    display: "grid",
    gap: 12
  }}>
      <p style={{
      margin: 0,
      color: "var(--aurora-text-secondary)",
      fontSize: 13
    }}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores radio
        focus-visible state.
      </p>
      <button type="button">Before radio group</button>
      <RadioGroup name="Focus intent group" defaultValue="m" options={[{
      label: "Small",
      value: "s",
      description: "Compact layout"
    }, {
      label: "Medium",
      value: "m",
      description: "Balanced layout"
    }, {
      label: "Large",
      value: "l",
      description: "Readable layout"
    }]} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before radio group"
    });
    const medium = canvas.getByRole("radio", {
      name: /^Medium/
    });
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(medium).toHaveFocus();
    await expect(medium).toHaveAttribute("data-focus-visible", "true");
    fireEvent.mouseDown(medium, {
      button: 0,
      ctrlKey: true
    });
    await expect(medium).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(ce=(se=k.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};const Ce=["Controlled","InvalidState","DisabledOption","NumericDescriptionSemantics","ShortcutHintPrecision","LabelledByPrecedence","OptionLabelledByPrecedence","FocusIntentReentry"];export{w as Controlled,x as DisabledOption,k as FocusIntentReentry,R as InvalidState,S as LabelledByPrecedence,B as NumericDescriptionSemantics,L as OptionLabelledByPrecedence,E as ShortcutHintPrecision,Ce as __namedExportsOrder,qe as default};
