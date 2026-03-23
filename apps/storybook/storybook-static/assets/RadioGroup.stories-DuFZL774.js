import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as l}from"./index-BWu4c2F4.js";import{a as We}from"./a11y-CU5SQrEA.js";import{B as N}from"./Badge-Cvc2u0v9.js";import{within as y,userEvent as x,expect as i,fireEvent as Je}from"./index-DgAF9SIF.js";function O(e,a){return typeof e!="boolean"?a:e}function b({name:e,value:a,defaultValue:n,options:r,onChange:c,ariaLabel:v,ariaLabelledBy:Ie,invalid:Te,"aria-invalid":Ve,disabled:ze=!1,direction:T="vertical"}){const P=l.useId(),[Me,qe]=l.useState(n),[Ne,V]=l.useState(null),[Oe,f]=l.useState(null),G=l.useRef(null),g=l.useRef(!1);l.useRef(null),l.useRef(null);const w=O(ze,!1),z=a??Me,Fe=l.useMemo(()=>Qe(r,z),[r,z]),K=We(Te,Ve),$=K!==void 0,M=R(Ie),Pe=M?void 0:R(v),Ge=$?"color-mix(in srgb, var(--aurora-color-red-500) 24%, transparent)":"color-mix(in srgb, var(--aurora-accent-default) 24%, transparent)";l.useEffect(()=>{w&&(V(null),f(null))},[w]),l.useEffect(()=>{},[r]),l.useEffect(()=>{},[r]);const Ke=l.useMemo(()=>{const o=new Map;return r.map(s=>{const u=o.get(s.value)??0;return o.set(s.value,u+1),u===0?s.value:`${s.value}__duplicate-${u}`})},[r]);l.useEffect(()=>{var m;const o=((m=G.current)==null?void 0:m.ownerDocument)??document,s=p=>{p.metaKey||p.altKey||p.ctrlKey||(g.current=!0)},u=p=>{"button"in p&&!Z(p.button)||"ctrlKey"in p&&p.ctrlKey||(g.current=!1)};return o.addEventListener("keydown",s,!0),o.addEventListener("pointerdown",u,!0),o.addEventListener("mousedown",u,!0),o.addEventListener("touchstart",u,!0),()=>{o.removeEventListener("keydown",s,!0),o.removeEventListener("pointerdown",u,!0),o.removeEventListener("mousedown",u,!0),o.removeEventListener("touchstart",u,!0)}},[]);const $e=(o,s)=>{w||s||z!==o&&(a===void 0&&qe(o),c==null||c(o))};return t.jsx("div",{ref:G,style:{display:T==="horizontal"?"flex":"grid",gap:8,alignItems:T==="horizontal"?"center":void 0},role:"radiogroup","aria-label":M?void 0:Pe??e,"aria-labelledby":M,"aria-orientation":T,"aria-invalid":K,"aria-disabled":w||void 0,children:r.map((o,s)=>{const u=O(o.disabled,!1),m=w||u,p=Y(o.label),q=Y(o.description),_=Ne===s,W=Oe===s,J=R(o.ariaLabelledBy),Q=J?void 0:R(o.ariaLabel),U=p?`${P}-option-label-${s}`:void 0,X=q?`${P}-option-description-${s}`:void 0,_e=J??(Q?void 0:U);return t.jsxs("label",{style:{display:"inline-flex",alignItems:"flex-start",gap:8,color:"var(--aurora-text-primary)",fontSize:"var(--aurora-font-size-sm)",opacity:m?.7:1,cursor:m?"not-allowed":"pointer"},children:[t.jsx("input",{type:"radio",name:e,value:o.value,"aria-labelledby":_e,"aria-label":Q,"aria-describedby":X,checked:Fe===s,disabled:m,"aria-keyshortcuts":m?void 0:"Space","data-focused":_?"true":void 0,"data-focus-visible":W?"true":void 0,onChange:()=>$e(o.value,m),onFocus:d=>{V(s),f(Ue(d.currentTarget,g.current)?s:null)},onBlur:()=>{V(d=>d===s?null:d),f(d=>d===s?null:d)},onMouseDown:d=>{d.button!==0||d.ctrlKey||(g.current=!1,f(h=>h===s?null:h))},onPointerDown:d=>{!Z(d.button)||d.ctrlKey||(g.current=!1,f(h=>h===s?null:h))},onKeyDown:()=>{g.current=!0},style:{marginTop:2,accentColor:$?"var(--aurora-color-red-500)":"var(--aurora-accent-default)",cursor:m?"not-allowed":"pointer",boxShadow:_&&W&&!m?`0 0 0 3px ${Ge}`:"none"}}),t.jsxs("span",{style:{display:"grid",gap:q?2:0},children:[p?t.jsx("span",{id:U,children:o.label}):null,q?t.jsx("span",{id:X,style:{color:"var(--aurora-text-secondary)",fontSize:"var(--aurora-font-size-xs)"},children:o.description}):null]})]},Ke[s]??`${o.value}__index-${s}`)})})}function R(e){if(typeof e!="string")return;const a=e.trim();return a.length>0?a:void 0}function Qe(e,a){if(a===void 0)return-1;let n=-1,r=-1;for(let c=0;c<e.length;c+=1){const v=e[c];if(v.value===a&&(n===-1&&(n=c),!O(v.disabled,!1))){r=c;break}}return r!==-1?r:n}function Y(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:!0}function Ue(e,a){try{return e.matches(":focus-visible")||a}catch{return a}}function Z(e){return typeof e!="number"||e<=0}b.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"ariaLabel",value:{name:"string",required:!1}},{key:"ariaLabelledBy",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"RadioOption[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(nextValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"nextValue"}],return:{name:"void"}}},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},"aria-invalid":{required:!1,tsType:{name:'ReactAriaAttributes["aria-invalid"]',raw:'React.AriaAttributes["aria-invalid"]'},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const F=[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}],Xe=[{label:t.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"🚀"}),value:"deploy",ariaLabel:"Deploy mode",ariaLabelledBy:"radio-option-heading"},{label:t.jsx("span",{"aria-hidden":"true",style:{fontSize:16},children:"↩️"}),value:"rollback",ariaLabel:"Rollback mode"}],oa={title:"Form/RadioGroup",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"RadioGroup supports controlled and uncontrolled single-choice flows, disabled options, and invalid semantics."}}},args:{name:"Size selection",options:F}};function Ye(){const[e,a]=l.useState("m");return t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx("span",{style:{color:"var(--aurora-text-secondary)"},children:"Current size"}),t.jsx(N,{children:e})]}),t.jsx(b,{name:"Size selection",value:e,onChange:a,options:F})]})}const B={render:()=>t.jsx(Ye,{}),play:async({canvasElement:e})=>{const n=y(e).getByRole("radio",{name:/Large/i});await x.click(n),await i(n).toBeChecked()}},S={args:{name:"Approval",invalid:!0,options:[{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]}},k={args:{name:"Release track",defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary",disabled:!0},{label:"Experimental",value:"experimental"}]}},E={args:{name:"Maintenance window",disabled:!0,defaultValue:"stable",options:[{label:"Stable",value:"stable"},{label:"Canary",value:"canary"}]},play:async({canvasElement:e})=>{const a=y(e),n=a.getByRole("radiogroup",{name:"Maintenance window"});await i(n).toHaveAttribute("aria-disabled","true"),await i(a.getByRole("radio",{name:"Stable"})).toBeDisabled()}};function Ze(){const[e,a]=l.useState("none"),[n,r]=l.useState(0);return t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx(b,{name:"Runtime boolean radio group",disabled:"true",options:[{label:"Small",value:"s"},{label:"Medium",value:"m",disabled:"true"}],onChange:c=>{a(c),r(v=>v+1)}}),t.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[t.jsxs(N,{tone:"default",children:["Selected: ",t.jsx("span",{"data-testid":"radio-runtime-selected",children:e})]}),t.jsxs(N,{tone:"default",children:["Change events: ",t.jsx("span",{"data-testid":"radio-runtime-events",children:n})]})]})]})}const C={render:()=>t.jsx(Ze,{}),play:async({canvasElement:e})=>{const a=y(e),n=a.getByRole("radiogroup",{name:"Runtime boolean radio group"}),r=a.getByRole("radio",{name:"Medium"}),c=a.getByTestId("radio-runtime-selected"),v=a.getByTestId("radio-runtime-events");await i(n).not.toHaveAttribute("aria-disabled"),await i(r).not.toBeDisabled(),await i(r).toHaveAttribute("aria-keyshortcuts","Space"),await i(c).toHaveTextContent("none"),await i(v).toHaveTextContent("0"),await x.click(r),await i(c).toHaveTextContent("m"),await i(v).toHaveTextContent("1")}},A={args:{name:"Numeric descriptions",options:[{label:"Priority tier",value:"p0",description:0}]},play:async({canvasElement:e})=>{const a=y(e),n=a.getByText("0"),r=a.getByRole("radio",{name:"Priority tier"});await i(a.getByText("0")).toBeInTheDocument(),await i(r).toHaveAttribute("aria-describedby",n.getAttribute("id"))}},L={args:{name:"Shortcut hints",options:[{label:"Enabled radio option",value:"enabled"},{label:"Disabled radio option",value:"disabled",disabled:!0}]},play:async({canvasElement:e})=>{const a=y(e);await i(a.getByRole("radio",{name:"Enabled radio option"})).toHaveAttribute("aria-keyshortcuts","Space"),await i(a.getByRole("radio",{name:"Disabled radio option"})).not.toHaveAttribute("aria-keyshortcuts")}},j={args:{name:"Duplicate value semantics",value:"react",options:[{label:"React legacy",value:"react",disabled:!0},{label:"React stable",value:"react"},{label:"Vue",value:"vue"}]},play:async({canvasElement:e})=>{const a=y(e),n=a.getByRole("radio",{name:"React legacy"}),r=a.getByRole("radio",{name:"React stable"});await i(n).not.toBeChecked(),await i(r).toBeChecked(),await x.click(n),await i(r).toBeChecked(),await i(n).not.toBeChecked()}},D={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{id:"radiogroup-story-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Release preference heading"}),t.jsx(b,{name:"Release preference fallback",ariaLabel:"Release preference fallback label",ariaLabelledBy:"radiogroup-story-heading",defaultValue:"m",options:F})]}),play:async({canvasElement:e})=>{const n=y(e).getByRole("radiogroup",{name:"Release preference heading"});await i(n).toHaveAttribute("aria-labelledby","radiogroup-story-heading"),await i(n).not.toHaveAttribute("aria-label")}},H={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{id:"radio-option-heading",style:{margin:0,color:"var(--aurora-text-secondary)"},children:"Deploy mode"}),t.jsx(b,{name:"Deployment mode fallback",options:Xe,defaultValue:"deploy"})]}),play:async({canvasElement:e})=>{const n=y(e).getByRole("radio",{name:"Deploy mode"});await i(n).toHaveAttribute("aria-labelledby","radio-option-heading"),await i(n).not.toHaveAttribute("aria-label")}},I={render:()=>t.jsxs("div",{style:{width:340,display:"grid",gap:12},children:[t.jsx("p",{style:{margin:0,color:"var(--aurora-text-secondary)",fontSize:13},children:"Click the trigger first, then press Tab to verify keyboard re-entry restores radio focus-visible state."}),t.jsx("button",{type:"button",children:"Before radio group"}),t.jsx(b,{name:"Focus intent group",defaultValue:"m",options:[{label:"Small",value:"s",description:"Compact layout"},{label:"Medium",value:"m",description:"Balanced layout"},{label:"Large",value:"l",description:"Readable layout"}]})]}),play:async({canvasElement:e})=>{const a=y(e),n=await a.findByRole("button",{name:"Before radio group"}),r=a.getByRole("radio",{name:/^Medium/});await x.click(n),await x.tab(),await i(r).toHaveFocus(),await i(r).toHaveAttribute("data-focus-visible","true"),Je.mouseDown(r,{button:0,ctrlKey:!0}),await i(r).toHaveAttribute("data-focus-visible","true")}};var ee,ae,te;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,re,oe;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(re=S.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ie,se,le;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(se=k.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,de,ue;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,ve;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <RuntimeBooleanConfigNormalizationRadioGroup />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const group = canvas.getByRole("radiogroup", {
      name: "Runtime boolean radio group"
    });
    const medium = canvas.getByRole("radio", {
      name: "Medium"
    });
    const selected = canvas.getByTestId("radio-runtime-selected");
    const events = canvas.getByTestId("radio-runtime-events");
    await expect(group).not.toHaveAttribute("aria-disabled");
    await expect(medium).not.toBeDisabled();
    await expect(medium).toHaveAttribute("aria-keyshortcuts", "Space");
    await expect(selected).toHaveTextContent("none");
    await expect(events).toHaveTextContent("0");
    await userEvent.click(medium);
    await expect(selected).toHaveTextContent("m");
    await expect(events).toHaveTextContent("1");
  }
}`,...(ve=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var ye,be,ge;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
    const description = canvas.getByText("0");
    const radio = canvas.getByRole("radio", {
      name: "Priority tier"
    });
    await expect(canvas.getByText("0")).toBeInTheDocument();
    await expect(radio).toHaveAttribute("aria-describedby", description.getAttribute("id"));
  }
}`,...(ge=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var fe,we,he;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(we=L.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var xe,Re,Be;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    name: "Duplicate value semantics",
    value: "react",
    options: [{
      label: "React legacy",
      value: "react",
      disabled: true
    }, {
      label: "React stable",
      value: "react"
    }, {
      label: "Vue",
      value: "vue"
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const legacy = canvas.getByRole("radio", {
      name: "React legacy"
    });
    const stable = canvas.getByRole("radio", {
      name: "React stable"
    });
    await expect(legacy).not.toBeChecked();
    await expect(stable).toBeChecked();
    await userEvent.click(legacy);
    await expect(stable).toBeChecked();
    await expect(legacy).not.toBeChecked();
  }
}`,...(Be=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};var Se,ke,Ee;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ee=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var Ce,Ae,Le;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Le=(Ae=H.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source}}};var je,De,He;I.parameters={...I.parameters,docs:{...(je=I.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(He=(De=I.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};const ia=["Controlled","InvalidState","DisabledOption","GroupDisabledSemantics","RuntimeBooleanConfigNormalization","NumericDescriptionSemantics","ShortcutHintPrecision","DuplicateValueSingleCheckedSemantics","LabelledByPrecedence","OptionLabelledByPrecedence","FocusIntentReentry"];export{B as Controlled,k as DisabledOption,j as DuplicateValueSingleCheckedSemantics,I as FocusIntentReentry,E as GroupDisabledSemantics,S as InvalidState,D as LabelledByPrecedence,A as NumericDescriptionSemantics,H as OptionLabelledByPrecedence,C as RuntimeBooleanConfigNormalization,L as ShortcutHintPrecision,ia as __namedExportsOrder,oa as default};
