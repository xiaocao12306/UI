import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{a as he}from"./a11y-CU5SQrEA.js";import{B as we}from"./Badge-ZJmMstsz.js";import{within as g,userEvent as H,expect as u,fireEvent as Re}from"./index-DgAF9SIF.js";function m({name:t,value:r,defaultValue:s,options:c,onChange:k,ariaLabel:oe,ariaLabelledBy:ie,invalid:le,"aria-invalid":se,disabled:f=!1,direction:j="vertical"}){const[de,ce]=l.useState(s),[ue,A]=l.useState(null),[pe,v]=l.useState(null),I=l.useRef(null),p=l.useRef(!1);l.useRef(null),l.useRef(null);const me=r??de,z=he(le,se),q=z!==void 0,D=h(ie),ve=D?void 0:h(oe),ye=q?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)";l.useEffect(()=>{f&&(A(null),v(null))},[f]),l.useEffect(()=>{},[c]),l.useEffect(()=>{},[c]);const be=l.useMemo(()=>{const e=new Map;return c.map(n=>{const o=e.get(n.value)??0;return e.set(n.value,o+1),o===0?n.value:`${n.value}__duplicate-${o}`})},[c]);l.useEffect(()=>{var y;const e=((y=I.current)==null?void 0:y.ownerDocument)??document,n=d=>{d.metaKey||d.altKey||d.ctrlKey||(p.current=!0)},o=d=>{"button"in d&&!T(d.button)||"ctrlKey"in d&&d.ctrlKey||(p.current=!1)};return e.addEventListener("keydown",n,!0),e.addEventListener("pointerdown",o,!0),e.addEventListener("mousedown",o,!0),e.addEventListener("touchstart",o,!0),()=>{e.removeEventListener("keydown",n,!0),e.removeEventListener("pointerdown",o,!0),e.removeEventListener("mousedown",o,!0),e.removeEventListener("touchstart",o,!0)}},[]);const ge=(e,n)=>{f||n||(r===void 0&&ce(e),k==null||k(e))};return a.jsx("div",{ref:I,style:{display:j==="horizontal"?"flex":"grid",gap:8,alignItems:j==="horizontal"?"center":void 0},role:"radiogroup","aria-label":D?void 0:ve??t,"aria-labelledby":D,"aria-orientation":j,"aria-invalid":z,children:c.map((e,n)=>{const o=!!(f||e.disabled),y=ue===n,d=pe===n,C=h(e.ariaLabelledBy),fe=C?void 0:h(e.ariaLabel);return a.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:o?.7:1,cursor:o?"not-allowed":"pointer"},children:[a.jsx("input",{type:"radio",name:t,value:e.value,"aria-labelledby":C,"aria-label":fe,checked:me===e.value,disabled:o,"aria-keyshortcuts":o?void 0:"Space","data-focused":y?"true":void 0,"data-focus-visible":d?"true":void 0,onChange:()=>ge(e.value,e.disabled),onFocus:i=>{A(n),v(xe(i.currentTarget,p.current)?n:null)},onBlur:()=>{A(i=>i===n?null:i),v(i=>i===n?null:i)},onMouseDown:i=>{i.button!==0||i.ctrlKey||(p.current=!1,v(b=>b===n?null:b))},onPointerDown:i=>{!T(i.button)||i.ctrlKey||(p.current=!1,v(b=>b===n?null:b))},onKeyDown:()=>{p.current=!0},style:{marginTop:2,accentColor:q?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:o?"not-allowed":"pointer",boxShadow:y&&d&&!o?`0 0 0 3px ${ye}`:"none"}}),a.jsxs("span",{style:{display:"grid",gap:e.description?2:0},children:[a.jsx("span",{children:e.label}),e.description?a.jsx("span",{style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:e.description}):null]})]},be[n]??`${e.value}__index-${n}`)})})}function h(t){if(typeof t!="string")return;const r=t.trim();return r.length>0?r:void 0}function xe(t,r){try{return t.matches(":focus-visible")||r}catch{return r}}function T(t){return typeof t!="number"||t<=0}m.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const V=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],Be=[{label:a.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),value:"deploy",ariaLabel:"Deploy mode",ariaLabelledBy:"radio-option-heading"},{label:a.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),value:"rollback",ariaLabel:"Rollback mode"}],De={title:"Form/RadioGroup",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:V}};function Ee(){const[t,r]=l.useState("m");return a.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),a.jsx(we,{children:t})]}),a.jsx(m,{name:"Size selection",value:t,onChange:r,options:V})]})}const w={render:()=>a.jsx(Ee,{}),play:async({canvasElement:t})=>{const s=g(t).getByRole("radio",{name:/Large/i});await H.click(s),await u(s).toBeChecked()}},R={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},x={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}},B={args:{name:"Shortcut hints",options:[{label:"Enabled radio option",value:"enabled"},{label:"Disabled radio option",value:"disabled",disabled:!0}]},play:async({canvasElement:t})=>{const r=g(t);await u(r.getByRole("radio",{name:"Enabled radio option"})).toHaveAttribute("aria-keyshortcuts","Space"),await u(r.getByRole("radio",{name:"Disabled radio option"})).not.toHaveAttribute("aria-keyshortcuts")}},E={render:()=>a.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[a.jsx("p",{id:"radiogroup-story-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Release preference heading"}),a.jsx(m,{name:"Release preference fallback",ariaLabel:"Release preference fallback label",ariaLabelledBy:"radiogroup-story-heading",defaultValue:"m",options:V})]}),play:async({canvasElement:t})=>{const s=g(t).getByRole("radiogroup",{name:"Release preference heading"});await u(s).toHaveAttribute("aria-labelledby","radiogroup-story-heading"),await u(s).not.toHaveAttribute("aria-label")}},L={render:()=>a.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[a.jsx("p",{id:"radio-option-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Deploy mode"}),a.jsx(m,{name:"Deployment mode fallback",options:Be,defaultValue:"deploy"})]}),play:async({canvasElement:t})=>{const s=g(t).getByRole("radio",{name:"Deploy mode"});await u(s).toHaveAttribute("aria-labelledby","radio-option-heading"),await u(s).not.toHaveAttribute("aria-label")}},S={render:()=>a.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[a.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores radio focus-visible state."}),a.jsx("button",{type:"button",children:"Before radio group"}),a.jsx(m,{name:"Focus intent group",defaultValue:"m",options:[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}]})]}),play:async({canvasElement:t})=>{const r=g(t),s=await r.findByRole("button",{name:"Before radio group"}),c=r.getByRole("radio",{name:/^Medium/});await H.click(s),await H.tab(),await u(c).toHaveFocus(),await u(c).toHaveAttribute("data-focus-visible","true"),Re.mouseDown(c,{button:0,ctrlKey:!0}),await u(c).toHaveAttribute("data-focus-visible","true")}};var F,K,O;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(K=w.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var P,G,M;R.parameters={...R.parameters,docs:{...(P=R.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(G=R.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var N,_,$;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...($=(_=x.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var J,Q,U;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const He=["Controlled","InvalidState","DisabledOption","ShortcutHintPrecision","LabelledByPrecedence","OptionLabelledByPrecedence","FocusIntentReentry"];export{w as Controlled,x as DisabledOption,S as FocusIntentReentry,R as InvalidState,E as LabelledByPrecedence,L as OptionLabelledByPrecedence,B as ShortcutHintPrecision,He as __namedExportsOrder,De as default};
