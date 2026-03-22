import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{a as Ae}from"./a11y-CU5SQrEA.js";import{B as De}from"./Badge-ZJmMstsz.js";import{within as p,userEvent as V,expect as l,fireEvent as je}from"./index-DgAF9SIF.js";function y({name:e,value:n,defaultValue:i,options:u,onChange:D,ariaLabel:ye,ariaLabelledBy:ve,invalid:be,"aria-invalid":ge,disabled:v=!1,direction:j="vertical"}){const[fe,he]=c.useState(i),[we,I]=c.useState(null),[Re,b]=c.useState(null),C=c.useRef(null),m=c.useRef(!1);c.useRef(null),c.useRef(null);const xe=n??fe,z=Ae(be,ge),q=z!==void 0,H=h(ve),Be=H?void 0:h(ye),Se=q?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)";c.useEffect(()=>{v&&(I(null),b(null))},[v]),c.useEffect(()=>{},[u]),c.useEffect(()=>{},[u]);const Ee=c.useMemo(()=>{const a=new Map;return u.map(r=>{const o=a.get(r.value)??0;return a.set(r.value,o+1),o===0?r.value:`${r.value}__duplicate-${o}`})},[u]);c.useEffect(()=>{var g;const a=((g=C.current)==null?void 0:g.ownerDocument)??document,r=d=>{d.metaKey||d.altKey||d.ctrlKey||(m.current=!0)},o=d=>{"button"in d&&!N(d.button)||"ctrlKey"in d&&d.ctrlKey||(m.current=!1)};return a.addEventListener("keydown",r,!0),a.addEventListener("pointerdown",o,!0),a.addEventListener("mousedown",o,!0),a.addEventListener("touchstart",o,!0),()=>{a.removeEventListener("keydown",r,!0),a.removeEventListener("pointerdown",o,!0),a.removeEventListener("mousedown",o,!0),a.removeEventListener("touchstart",o,!0)}},[]);const Le=(a,r)=>{v||r||(n===void 0&&he(a),D==null||D(a))};return t.jsx("div",{ref:C,style:{display:j==="horizontal"?"flex":"grid",gap:8,alignItems:j==="horizontal"?"center":void 0},role:"radiogroup","aria-label":H?void 0:Be??e,"aria-labelledby":H,"aria-orientation":j,"aria-invalid":z,"aria-disabled":v||void 0,children:u.map((a,r)=>{const o=!!(v||a.disabled),g=Ie(a.description),d=we===r,P=Re===r,F=h(a.ariaLabelledBy),ke=F?void 0:h(a.ariaLabel);return t.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:o?.7:1,cursor:o?"not-allowed":"pointer"},children:[t.jsx("input",{type:"radio",name:e,value:a.value,"aria-labelledby":F,"aria-label":ke,checked:xe===a.value,disabled:o,"aria-keyshortcuts":o?void 0:"Space","data-focused":d?"true":void 0,"data-focus-visible":P?"true":void 0,onChange:()=>Le(a.value,a.disabled),onFocus:s=>{I(r),b(He(s.currentTarget,m.current)?r:null)},onBlur:()=>{I(s=>s===r?null:s),b(s=>s===r?null:s)},onMouseDown:s=>{s.button!==0||s.ctrlKey||(m.current=!1,b(f=>f===r?null:f))},onPointerDown:s=>{!N(s.button)||s.ctrlKey||(m.current=!1,b(f=>f===r?null:f))},onKeyDown:()=>{m.current=!0},style:{marginTop:2,accentColor:q?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:o?"not-allowed":"pointer",boxShadow:d&&P&&!o?`0 0 0 3px ${Se}`:"none"}}),t.jsxs("span",{style:{display:"grid",gap:g?2:0},children:[t.jsx("span",{children:a.label}),g?t.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:a.description}):null]})]},Ee[r]??`${a.value}__index-${r}`)})})}function h(e){if(typeof e!="string")return;const n=e.trim();return n.length>0?n:void 0}function Ie(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:!0}function He(e,n){try{return e.matches(":focus-visible")||n}catch{return n}}function N(e){return typeof e!="number"||e<=0}y.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const T=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],Ve=[{label:t.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),value:"deploy",ariaLabel:"Deploy mode",ariaLabelledBy:"radio-option-heading"},{label:t.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),value:"rollback",ariaLabel:"Rollback mode"}],Ne={title:"Form/RadioGroup",component:y,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:T}};function Te(){const[e,n]=c.useState("m");return t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),t.jsx(De,{children:e})]}),t.jsx(y,{name:"Size selection",value:e,onChange:n,options:T})]})}const w={render:()=>t.jsx(Te,{}),play:async({canvasElement:e})=>{const i=p(e).getByRole("radio",{name:/Large/i});await V.click(i),await l(i).toBeChecked()}},R={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},x={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}},B={args:{name:"Maintenance window",disabled:!0,defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary"}]},play:async({canvasElement:e})=>{const n=p(e),i=n.getByRole("radiogroup",{name:"Maintenance window"});await l(i).toHaveAttribute("aria-disabled","true"),await l(n.getByRole("radio",{name:"Stable"})).toBeDisabled()}},S={args:{name:"Numeric descriptions",options:[{label:"Priority tier",value:"p0",description:0}]},play:async({canvasElement:e})=>{const n=p(e);await l(n.getByText("0")).toBeInTheDocument(),await l(n.getByRole("radio",{name:"Priority tier 0"})).toBeInTheDocument()}},E={args:{name:"Shortcut hints",options:[{label:"Enabled radio option",value:"enabled"},{label:"Disabled radio option",value:"disabled",disabled:!0}]},play:async({canvasElement:e})=>{const n=p(e);await l(n.getByRole("radio",{name:"Enabled radio option"})).toHaveAttribute("aria-keyshortcuts","Space"),await l(n.getByRole("radio",{name:"Disabled radio option"})).not.toHaveAttribute("aria-keyshortcuts")}},L={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{id:"radiogroup-story-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Release preference heading"}),t.jsx(y,{name:"Release preference fallback",ariaLabel:"Release preference fallback label",ariaLabelledBy:"radiogroup-story-heading",defaultValue:"m",options:T})]}),play:async({canvasElement:e})=>{const i=p(e).getByRole("radiogroup",{name:"Release preference heading"});await l(i).toHaveAttribute("aria-labelledby","radiogroup-story-heading"),await l(i).not.toHaveAttribute("aria-label")}},k={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{id:"radio-option-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Deploy mode"}),t.jsx(y,{name:"Deployment mode fallback",options:Ve,defaultValue:"deploy"})]}),play:async({canvasElement:e})=>{const i=p(e).getByRole("radio",{name:"Deploy mode"});await l(i).toHaveAttribute("aria-labelledby","radio-option-heading"),await l(i).not.toHaveAttribute("aria-label")}},A={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores radio focus-visible state."}),t.jsx("button",{type:"button",children:"Before radio group"}),t.jsx(y,{name:"Focus intent group",defaultValue:"m",options:[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}]})]}),play:async({canvasElement:e})=>{const n=p(e),i=await n.findByRole("button",{name:"Before radio group"}),u=n.getByRole("radio",{name:/^Medium/});await V.click(i),await V.tab(),await l(u).toHaveFocus(),await l(u).toHaveAttribute("data-focus-visible","true"),je.mouseDown(u,{button:0,ctrlKey:!0}),await l(u).toHaveAttribute("data-focus-visible","true")}};var K,M,O;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(O=(M=w.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var G,_,$;R.parameters={...R.parameters,docs:{...(G=R.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...($=(_=R.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var J,Q,U;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    name: "Maintenance window",
    disabled: true,
    defaultValue: "stable",
    options: [{
      label: "Stable",
      value: "stable"
    }, {
      label: "Canary",
      value: "canary"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole("radiogroup", {
      name: "Maintenance window"
    });
    await expect(group).toHaveAttribute("aria-disabled", "true");
    await expect(canvas.getByRole("radio", {
      name: "Stable"
    })).toBeDisabled();
  }
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,re;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(te=E.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ie,le;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var se,ce,de;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,me;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const Ke=["Controlled","InvalidState","DisabledOption","GroupDisabledSemantics","NumericDescriptionSemantics","ShortcutHintPrecision","LabelledByPrecedence","OptionLabelledByPrecedence","FocusIntentReentry"];export{w as Controlled,x as DisabledOption,A as FocusIntentReentry,B as GroupDisabledSemantics,R as InvalidState,L as LabelledByPrecedence,S as NumericDescriptionSemantics,k as OptionLabelledByPrecedence,E as ShortcutHintPrecision,Ke as __namedExportsOrder,Ne as default};
