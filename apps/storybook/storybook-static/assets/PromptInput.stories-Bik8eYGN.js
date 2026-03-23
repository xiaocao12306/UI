import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as p}from"./index-BWu4c2F4.js";import{B as Tt}from"./Button-CYa37MZO.js";import{T as kt}from"./Textarea-DkZKRrls.js";import{within as l,expect as a,userEvent as u,fireEvent as m,waitFor as Bt}from"./index-DgAF9SIF.js";import{s as Ht,S as Ct,a as Rt}from"./storyShowcase-DlKirntE.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function At(e,t){return typeof e!="boolean"?t:e}function d({onSubmit:e,submitting:t,placeholder:n,ariaLabel:r,ariaLabelledBy:s,shortcutHint:i="Ctrl/Cmd + Enter to send",submittingHint:A="Generating response..."}){const[w,N]=p.useState(""),D=p.useRef(!1),K=p.useId(),M=w.trim(),b=At(t,!1),P=typeof e=="function",I=P&&!b&&M.length>0,q=b?A:P?i:void 0,j=Pt(q),St=L(n,"Type your prompt..."),z=L(s),Et=z===void 0?L(r)??"Prompt input":void 0,V=()=>!I||!e?!1:(e(M),N(""),!0);return o.jsxs("div",{"aria-busy":b||void 0,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",background:"var(--aurora-surface-default)",padding:10,display:"grid",gap:8},children:[o.jsx(kt,{value:w,onChange:c=>N(c.target.value),placeholder:St,"aria-label":Et,"aria-labelledby":z,"aria-describedby":j?K:void 0,"aria-keyshortcuts":!b&&P?"Control+Enter Meta+Enter":void 0,disabled:b,rows:4,onCompositionStart:()=>{D.current=!0},onCompositionEnd:()=>{D.current=!1},onKeyDown:c=>{if(!(D.current||Dt(c))&&c.key==="Enter"&&(c.metaKey||c.ctrlKey)){if(c.altKey)return;if(c.repeat){c.preventDefault();return}if(c.defaultPrevented||!I)return;c.preventDefault(),V()}}}),o.jsxs("div",{style:{display:"flex",justifyContent:j?"space-between":"flex-end",alignItems:"center"},children:[j?o.jsx("small",{id:K,"aria-live":"polite",style:{color:"var(--aurora-text-secondary)"},children:q}):null,o.jsx(Tt,{onClick:V,disabled:!I,children:b?"Sending...":"Send"})]})]})}function Dt(e){const t=e.nativeEvent;return!!t.isComposing||t.keyCode===229}function L(e,t){return typeof e=="string"&&e.trim().length>0?e.trim():t}function Pt(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:!0}d.__docgenInfo={description:"",methods:[],displayName:"PromptInput",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(prompt: string) => void",signature:{arguments:[{type:{name:"string"},name:"prompt"}],return:{name:"void"}}},description:""},submitting:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},shortcutHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Ctrl/Cmd + Enter to send"',computed:!1}},submittingHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Generating response..."',computed:!1}}}};const x={...Ht},F={...Rt};function y({children:e}){return o.jsx(Ct,{maxWidth:"min(100%, 640px)",children:e})}const Gt={title:"AI/PromptInput",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"PromptInput supports keyboard submit (Ctrl/Cmd + Enter) and handles pending state for AI request pipelines."}}},args:{placeholder:"Summarize user feedback and propose action items..."}},v=()=>{};function It(e){const t=new KeyboardEvent("keydown",{key:"Enter",ctrlKey:!0,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const g={args:{onSubmit:v}},h={args:{onSubmit:v,ariaLabel:"Prompt placeholder fallback",placeholder:"   "},play:async({canvasElement:e})=>{const n=await l(e).findByRole("textbox",{name:"Prompt placeholder fallback"});await a(n).toHaveAttribute("placeholder","Type your prompt...")}};function jt(){const[e,t]=p.useState(0);return o.jsxs(y,{children:[o.jsxs("p",{style:x,children:["Submission count:"," ",o.jsx("strong",{"data-testid":"prompt-runtime-submission-count",style:F,children:e})]}),o.jsx(d,{ariaLabel:"Runtime submitting fallback prompt",submitting:"true",onSubmit:()=>{t(n=>n+1)}})]})}const f={render:()=>o.jsx(jt,{}),play:async({canvasElement:e})=>{const t=l(e),n=await t.findByRole("textbox",{name:"Runtime submitting fallback prompt"}),r=t.getByRole("button",{name:"Send"}),s=t.getByTestId("prompt-runtime-submission-count");await a(n).not.toBeDisabled(),await a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter"),await a(r).toBeDisabled(),await u.type(n,"Runtime fallback prompt"),await a(r).toBeEnabled(),await u.click(r),await a(s).toHaveTextContent("1")}};function Lt(){const[e,t]=p.useState(!1),[n,r]=p.useState("None"),[s,i]=p.useState(0);return o.jsxs(y,{children:[o.jsxs("p",{style:x,children:["Last submitted prompt: ",o.jsx("strong",{style:F,children:n})]}),o.jsxs("p",{style:x,children:["Submission count: ",o.jsx("strong",{style:F,children:s})]}),o.jsx(d,{submitting:e,onSubmit:A=>{t(!0),r(A),i(w=>w+1),window.setTimeout(()=>t(!1),600)}})]})}const B={render:()=>o.jsx(Lt,{}),play:async({canvasElement:e})=>{const t=l(e),n=await t.findByRole("textbox",{name:"Prompt input"});await a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("Ctrl/Cmd + Enter to send");await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"));const s=t.getByRole("button",{name:"Send"});await a(s).toBeDisabled(),await u.type(n,"Draft release retrospective"),await a(s).toBeEnabled(),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.compositionStart(n),m.keyDown(n,{key:"Enter",ctrlKey:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.compositionEnd(n),It(n),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.keyDown(n,{key:"Enter",ctrlKey:!0,repeat:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.keyDown(n,{key:"Enter",ctrlKey:!0,altKey:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),await u.keyboard("{Control>}{Enter}{/Control}"),await a(t.getByText("Draft release retrospective")).toBeInTheDocument(),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");const i=t.getByRole("button",{name:"Sending..."});await a(i).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts"),await u.click(i),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1"),await Bt(()=>{a(t.getByRole("button",{name:"Send"})).toBeDisabled(),a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter")})}},S={args:{onSubmit:v,ariaLabel:"智能提示输入",shortcutHint:"按 Ctrl/Cmd + Enter 提交",submittingHint:"正在生成建议..."},play:async({canvasElement:e})=>{const t=l(e),n=await t.findByRole("textbox",{name:"智能提示输入"});await a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("按 Ctrl/Cmd + Enter 提交");await a(r).toBeInTheDocument(),await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"))}},E={args:{onSubmit:v,ariaLabel:"Blank hint prompt",shortcutHint:"   "},play:async({canvasElement:e})=>{const n=await l(e).findByRole("textbox",{name:"Blank hint prompt"});await a(n).not.toHaveAttribute("aria-describedby")}},T={args:{onSubmit:v,ariaLabel:"Numeric hint prompt",shortcutHint:0},play:async({canvasElement:e})=>{const t=l(e),n=await t.findByRole("textbox",{name:"Numeric hint prompt"}),r=t.getByText("0");await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"))}};function Ft(){return o.jsxs(y,{children:[o.jsx("h3",{id:"prompt-heading",style:{margin:0},children:"Prompt workflow heading"}),o.jsx(d,{ariaLabel:"   ",ariaLabelledBy:"prompt-heading"})]})}const k={render:()=>o.jsx(Ft,{}),play:async({canvasElement:e})=>{const n=await l(e).findByRole("textbox",{name:"Prompt workflow heading"});await a(n).toHaveAttribute("aria-labelledby","prompt-heading"),await a(n).not.toHaveAttribute("aria-label")}};function Nt(){const[e,t]=p.useState(!1),[n,r]=p.useState([]);return o.jsxs(y,{children:[o.jsx(d,{submitting:e,placeholder:"Draft release note and publish checklist...",onSubmit:s=>{t(!0),r([`Queued: ${s}`]),window.setTimeout(()=>r(i=>[...i,"Draft generated"]),120),window.setTimeout(()=>r(i=>[...i,"Fact check complete"]),240),window.setTimeout(()=>{r(i=>[...i,"Ready for publish"]),t(!1)},360)}}),o.jsx("ol",{"aria-label":"AI action feedback",style:{...x,paddingLeft:20},children:n.length>0?n.map(s=>o.jsx("li",{children:s},s)):o.jsx("li",{children:"No actions yet."})})]})}const H={render:()=>o.jsx(Nt,{}),play:async({canvasElement:e})=>{const t=l(e),n=await t.findByRole("textbox",{name:"Prompt input"});await u.type(n,"Prepare changelog summary"),await u.click(t.getByRole("button",{name:"Send"})),await a(t.getByText("Queued: Prepare changelog summary")).toBeInTheDocument(),await Bt(()=>{a(t.getByText("Draft generated")).toBeInTheDocument(),a(t.getByText("Fact check complete")).toBeInTheDocument(),a(t.getByText("Ready for publish")).toBeInTheDocument()})}},C={render:()=>o.jsxs(y,{children:[o.jsx("p",{style:x,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores prompt focus-visible state."}),o.jsx("button",{type:"button",children:"Before prompt input"}),o.jsx(d,{ariaLabel:"Focus intent prompt"})]}),play:async({canvasElement:e})=>{const t=l(e),n=await t.findByRole("button",{name:"Before prompt input"}),r=t.getByRole("textbox",{name:"Focus intent prompt"});await u.click(n),await u.tab(),await a(r).toHaveFocus(),await a(r).toHaveAttribute("data-focus-visible","true"),m.mouseDown(r,{button:0,ctrlKey:!0}),await a(r).toHaveAttribute("data-focus-visible","true")}},R={args:{ariaLabel:"No submit handler prompt"},play:async({canvasElement:e})=>{const t=l(e),n=await t.findByRole("textbox",{name:"No submit handler prompt"}),r=t.getByRole("button",{name:"Send"});await u.type(n,"This draft should stay in place"),await a(r).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts");const s=m.keyDown(n,{key:"Enter",ctrlKey:!0});await a(s).toBe(!0),await a(n).toHaveValue("This draft should stay in place")}};var W,_,Q;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    onSubmit: noopPromptSubmit
  }
}`,...(Q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:Q.source}}};var G,O,U;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    onSubmit: noopPromptSubmit,
    ariaLabel: "Prompt placeholder fallback",
    placeholder: "   "
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Prompt placeholder fallback"
    });
    await expect(textbox).toHaveAttribute("placeholder", "Type your prompt...");
  }
}`,...(U=(O=h.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var $,J,X;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <RuntimeBooleanConfigNormalizationPromptInput />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Runtime submitting fallback prompt"
    });
    const sendButton = canvas.getByRole("button", {
      name: "Send"
    });
    const count = canvas.getByTestId("prompt-runtime-submission-count");
    await expect(textbox).not.toBeDisabled();
    await expect(textbox).toHaveAttribute("aria-keyshortcuts", "Control+Enter Meta+Enter");
    await expect(sendButton).toBeDisabled();
    await userEvent.type(textbox, "Runtime fallback prompt");
    await expect(sendButton).toBeEnabled();
    await userEvent.click(sendButton);
    await expect(count).toHaveTextContent("1");
  }
}`,...(X=(J=f.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,tt;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <InteractivePromptInput />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Prompt input"
    });
    await expect(textbox).toHaveAttribute("aria-keyshortcuts", "Control+Enter Meta+Enter");
    const shortcutHint = canvas.getByText("Ctrl/Cmd + Enter to send");
    await expect(textbox).toHaveAttribute("aria-describedby", shortcutHint.getAttribute("id"));
    const sendButton = canvas.getByRole("button", {
      name: "Send"
    });
    await expect(sendButton).toBeDisabled();
    await userEvent.type(textbox, "Draft release retrospective");
    await expect(sendButton).toBeEnabled();
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0");
    fireEvent.compositionStart(textbox);
    fireEvent.keyDown(textbox, {
      key: "Enter",
      ctrlKey: true
    });
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0");
    fireEvent.compositionEnd(textbox);
    dispatchLegacyImeCtrlEnter(textbox);
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0");
    fireEvent.keyDown(textbox, {
      key: "Enter",
      ctrlKey: true,
      repeat: true
    });
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0");
    fireEvent.keyDown(textbox, {
      key: "Enter",
      ctrlKey: true,
      altKey: true
    });
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0");
    await userEvent.keyboard("{Control>}{Enter}{/Control}");
    await expect(canvas.getByText("Draft release retrospective")).toBeInTheDocument();
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");
    const loadingButton = canvas.getByRole("button", {
      name: "Sending..."
    });
    await expect(loadingButton).toBeDisabled();
    await expect(textbox).not.toHaveAttribute("aria-keyshortcuts");
    await userEvent.click(loadingButton);
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");
    await waitFor(() => {
      expect(canvas.getByRole("button", {
        name: "Send"
      })).toBeDisabled();
      expect(textbox).toHaveAttribute("aria-keyshortcuts", "Control+Enter Meta+Enter");
    });
  }
}`,...(tt=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var et,nt,at;S.parameters={...S.parameters,docs:{...(et=S.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    onSubmit: noopPromptSubmit,
    ariaLabel: "智能提示输入",
    shortcutHint: "按 Ctrl/Cmd + Enter 提交",
    submittingHint: "正在生成建议..."
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "智能提示输入"
    });
    await expect(textbox).toHaveAttribute("aria-keyshortcuts", "Control+Enter Meta+Enter");
    const shortcutHint = canvas.getByText("按 Ctrl/Cmd + Enter 提交");
    await expect(shortcutHint).toBeInTheDocument();
    await expect(textbox).toHaveAttribute("aria-describedby", shortcutHint.getAttribute("id"));
  }
}`,...(at=(nt=S.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var ot,rt,st;E.parameters={...E.parameters,docs:{...(ot=E.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  args: {
    onSubmit: noopPromptSubmit,
    ariaLabel: "Blank hint prompt",
    shortcutHint: "   "
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Blank hint prompt"
    });
    await expect(textbox).not.toHaveAttribute("aria-describedby");
  }
}`,...(st=(rt=E.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var it,ct,ut;T.parameters={...T.parameters,docs:{...(it=T.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    onSubmit: noopPromptSubmit,
    ariaLabel: "Numeric hint prompt",
    shortcutHint: 0
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Numeric hint prompt"
    });
    const hint = canvas.getByText("0");
    await expect(textbox).toHaveAttribute("aria-describedby", hint.getAttribute("id"));
  }
}`,...(ut=(ct=T.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var lt,pt,mt;k.parameters={...k.parameters,docs:{...(lt=k.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  render: () => <LabelledByPromptInputDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Prompt workflow heading"
    });
    await expect(textbox).toHaveAttribute("aria-labelledby", "prompt-heading");
    await expect(textbox).not.toHaveAttribute("aria-label");
  }
}`,...(mt=(pt=k.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var dt,bt,xt;H.parameters={...H.parameters,docs:{...(dt=H.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: () => <MultiActionFeedbackPromptInput />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Prompt input"
    });
    await userEvent.type(textbox, "Prepare changelog summary");
    await userEvent.click(canvas.getByRole("button", {
      name: "Send"
    }));
    await expect(canvas.getByText("Queued: Prepare changelog summary")).toBeInTheDocument();
    await waitFor(() => {
      expect(canvas.getByText("Draft generated")).toBeInTheDocument();
      expect(canvas.getByText("Fact check complete")).toBeInTheDocument();
      expect(canvas.getByText("Ready for publish")).toBeInTheDocument();
    });
  }
}`,...(xt=(bt=H.parameters)==null?void 0:bt.docs)==null?void 0:xt.source}}};var yt,vt,wt;C.parameters={...C.parameters,docs:{...(yt=C.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  render: () => <PromptInputShowcase>
      <p style={promptTelemetryTextStyle}>
        Click the trigger first, then press Tab to verify keyboard re-entry restores prompt
        focus-visible state.
      </p>
      <button type="button">Before prompt input</button>
      <PromptInput ariaLabel="Focus intent prompt" />
    </PromptInputShowcase>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeButton = await canvas.findByRole("button", {
      name: "Before prompt input"
    });
    const textbox = canvas.getByRole("textbox", {
      name: "Focus intent prompt"
    });
    await userEvent.click(beforeButton);
    await userEvent.tab();
    await expect(textbox).toHaveFocus();
    await expect(textbox).toHaveAttribute("data-focus-visible", "true");
    fireEvent.mouseDown(textbox, {
      button: 0,
      ctrlKey: true
    });
    await expect(textbox).toHaveAttribute("data-focus-visible", "true");
  }
}`,...(wt=(vt=C.parameters)==null?void 0:vt.docs)==null?void 0:wt.source}}};var gt,ht,ft;R.parameters={...R.parameters,docs:{...(gt=R.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    ariaLabel: "No submit handler prompt"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "No submit handler prompt"
    });
    const sendButton = canvas.getByRole("button", {
      name: "Send"
    });
    await userEvent.type(textbox, "This draft should stay in place");
    await expect(sendButton).toBeDisabled();
    await expect(textbox).not.toHaveAttribute("aria-keyshortcuts");
    const shortcutAccepted = fireEvent.keyDown(textbox, {
      key: "Enter",
      ctrlKey: true
    });
    await expect(shortcutAccepted).toBe(true);
    await expect(textbox).toHaveValue("This draft should stay in place");
  }
}`,...(ft=(ht=R.parameters)==null?void 0:ht.docs)==null?void 0:ft.source}}};const Ot=["Default","BlankPlaceholderFallback","RuntimeBooleanConfigNormalization","WithAiRequestState","LocalizedCopy","BlankHintSemantics","NumericHintSemantics","LabelledByPrecedence","MultiActionFeedback","FocusIntentReentry","WithoutSubmitHandler"];export{E as BlankHintSemantics,h as BlankPlaceholderFallback,g as Default,C as FocusIntentReentry,k as LabelledByPrecedence,S as LocalizedCopy,H as MultiActionFeedback,T as NumericHintSemantics,f as RuntimeBooleanConfigNormalization,B as WithAiRequestState,R as WithoutSubmitHandler,Ot as __namedExportsOrder,Gt as default};
