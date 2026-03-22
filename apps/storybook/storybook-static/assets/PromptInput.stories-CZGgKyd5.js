import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{B as yt}from"./Button-rBVi27TD.js";import{T as xt}from"./Textarea-BnJNX4pg.js";import{within as p,expect as a,userEvent as l,fireEvent as m,waitFor as dt}from"./index-DgAF9SIF.js";import{s as vt,S as wt,a as ht}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function d({onSubmit:e,submitting:t,placeholder:n="Type your prompt...",ariaLabel:r,ariaLabelledBy:s,shortcutHint:i="Ctrl/Cmd + Enter to send",submittingHint:k="Generating response..."}){const[b,I]=u.useState(""),C=u.useRef(!1),P=u.useId(),j=b.trim(),R=typeof e=="function",A=R&&!t&&j.length>0,L=t?k:R?i:void 0,D=ft(L),F=N(s),bt=F===void 0?N(r)??"Prompt input":void 0,K=()=>!A||!e?!1:(e(j),I(""),!0);return o.jsxs("div",{"aria-busy":t||void 0,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",background:"var(--aurora-surface-default)",padding:10,display:"grid",gap:8},children:[o.jsx(xt,{value:b,onChange:c=>I(c.target.value),placeholder:n,"aria-label":bt,"aria-labelledby":F,"aria-describedby":D?P:void 0,"aria-keyshortcuts":!t&&R?"Control+Enter Meta+Enter":void 0,disabled:t,rows:4,onCompositionStart:()=>{C.current=!0},onCompositionEnd:()=>{C.current=!1},onKeyDown:c=>{if(!(C.current||gt(c))&&c.key==="Enter"&&(c.metaKey||c.ctrlKey)){if(c.altKey)return;if(c.repeat){c.preventDefault();return}if(c.defaultPrevented||!A)return;c.preventDefault(),K()}}}),o.jsxs("div",{style:{display:"flex",justifyContent:D?"space-between":"flex-end",alignItems:"center"},children:[D?o.jsx("small",{id:P,"aria-live":"polite",style:{color:"var(--aurora-text-secondary)"},children:L}):null,o.jsx(yt,{onClick:K,disabled:!A,children:t?"Sending...":"Send"})]})]})}function gt(e){const t=e.nativeEvent;return!!t.isComposing||t.keyCode===229}function N(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}function ft(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:!0}d.__docgenInfo={description:"",methods:[],displayName:"PromptInput",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(prompt: string) => void",signature:{arguments:[{type:{name:"string"},name:"prompt"}],return:{name:"void"}}},description:""},submitting:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Type your prompt..."',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},shortcutHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Ctrl/Cmd + Enter to send"',computed:!1}},submittingHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Generating response..."',computed:!1}}}};const E={...vt},M={...ht};function T({children:e}){return o.jsx(wt,{maxWidth:"min(100%, 640px)",children:e})}const jt={title:"AI/PromptInput",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"PromptInput supports keyboard submit (Ctrl/Cmd + Enter) and handles pending state for AI request pipelines."}}},args:{placeholder:"Summarize user feedback and propose action items..."}},H=()=>{};function Bt(e){const t=new KeyboardEvent("keydown",{key:"Enter",ctrlKey:!0,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const y={args:{onSubmit:H}};function St(){const[e,t]=u.useState(!1),[n,r]=u.useState("None"),[s,i]=u.useState(0);return o.jsxs(T,{children:[o.jsxs("p",{style:E,children:["Last submitted prompt: ",o.jsx("strong",{style:M,children:n})]}),o.jsxs("p",{style:E,children:["Submission count: ",o.jsx("strong",{style:M,children:s})]}),o.jsx(d,{submitting:e,onSubmit:k=>{t(!0),r(k),i(b=>b+1),window.setTimeout(()=>t(!1),600)}})]})}const x={render:()=>o.jsx(St,{}),play:async({canvasElement:e})=>{const t=p(e),n=await t.findByRole("textbox",{name:"Prompt input"});await a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("Ctrl/Cmd + Enter to send");await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"));const s=t.getByRole("button",{name:"Send"});await a(s).toBeDisabled(),await l.type(n,"Draft release retrospective"),await a(s).toBeEnabled(),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.compositionStart(n),m.keyDown(n,{key:"Enter",ctrlKey:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.compositionEnd(n),Bt(n),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.keyDown(n,{key:"Enter",ctrlKey:!0,repeat:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.keyDown(n,{key:"Enter",ctrlKey:!0,altKey:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),await l.keyboard("{Control>}{Enter}{/Control}"),await a(t.getByText("Draft release retrospective")).toBeInTheDocument(),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");const i=t.getByRole("button",{name:"Sending..."});await a(i).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts"),await l.click(i),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1"),await dt(()=>{a(t.getByRole("button",{name:"Send"})).toBeDisabled(),a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter")})}},v={args:{onSubmit:H,ariaLabel:"智能提示输入",shortcutHint:"按 Ctrl/Cmd + Enter 提交",submittingHint:"正在生成建议..."},play:async({canvasElement:e})=>{const t=p(e),n=await t.findByRole("textbox",{name:"智能提示输入"});await a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("按 Ctrl/Cmd + Enter 提交");await a(r).toBeInTheDocument(),await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"))}},w={args:{onSubmit:H,ariaLabel:"Blank hint prompt",shortcutHint:"   "},play:async({canvasElement:e})=>{const n=await p(e).findByRole("textbox",{name:"Blank hint prompt"});await a(n).not.toHaveAttribute("aria-describedby")}},h={args:{onSubmit:H,ariaLabel:"Numeric hint prompt",shortcutHint:0},play:async({canvasElement:e})=>{const t=p(e),n=await t.findByRole("textbox",{name:"Numeric hint prompt"}),r=t.getByText("0");await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"))}};function Et(){return o.jsxs(T,{children:[o.jsx("h3",{id:"prompt-heading",style:{margin:0},children:"Prompt workflow heading"}),o.jsx(d,{ariaLabel:"   ",ariaLabelledBy:"prompt-heading"})]})}const g={render:()=>o.jsx(Et,{}),play:async({canvasElement:e})=>{const n=await p(e).findByRole("textbox",{name:"Prompt workflow heading"});await a(n).toHaveAttribute("aria-labelledby","prompt-heading"),await a(n).not.toHaveAttribute("aria-label")}};function Tt(){const[e,t]=u.useState(!1),[n,r]=u.useState([]);return o.jsxs(T,{children:[o.jsx(d,{submitting:e,placeholder:"Draft release note and publish checklist...",onSubmit:s=>{t(!0),r([`Queued: ${s}`]),window.setTimeout(()=>r(i=>[...i,"Draft generated"]),120),window.setTimeout(()=>r(i=>[...i,"Fact check complete"]),240),window.setTimeout(()=>{r(i=>[...i,"Ready for publish"]),t(!1)},360)}}),o.jsx("ol",{"aria-label":"AI action feedback",style:{...E,paddingLeft:20},children:n.length>0?n.map(s=>o.jsx("li",{children:s},s)):o.jsx("li",{children:"No actions yet."})})]})}const f={render:()=>o.jsx(Tt,{}),play:async({canvasElement:e})=>{const t=p(e),n=await t.findByRole("textbox",{name:"Prompt input"});await l.type(n,"Prepare changelog summary"),await l.click(t.getByRole("button",{name:"Send"})),await a(t.getByText("Queued: Prepare changelog summary")).toBeInTheDocument(),await dt(()=>{a(t.getByText("Draft generated")).toBeInTheDocument(),a(t.getByText("Fact check complete")).toBeInTheDocument(),a(t.getByText("Ready for publish")).toBeInTheDocument()})}},B={render:()=>o.jsxs(T,{children:[o.jsx("p",{style:E,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores prompt focus-visible state."}),o.jsx("button",{type:"button",children:"Before prompt input"}),o.jsx(d,{ariaLabel:"Focus intent prompt"})]}),play:async({canvasElement:e})=>{const t=p(e),n=await t.findByRole("button",{name:"Before prompt input"}),r=t.getByRole("textbox",{name:"Focus intent prompt"});await l.click(n),await l.tab(),await a(r).toHaveFocus(),await a(r).toHaveAttribute("data-focus-visible","true"),m.mouseDown(r,{button:0,ctrlKey:!0}),await a(r).toHaveAttribute("data-focus-visible","true")}},S={args:{ariaLabel:"No submit handler prompt"},play:async({canvasElement:e})=>{const t=p(e),n=await t.findByRole("textbox",{name:"No submit handler prompt"}),r=t.getByRole("button",{name:"Send"});await l.type(n,"This draft should stay in place"),await a(r).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts");const s=m.keyDown(n,{key:"Enter",ctrlKey:!0});await a(s).toBe(!0),await a(n).toHaveValue("This draft should stay in place")}};var q,V,W;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    onSubmit: noopPromptSubmit
  }
}`,...(W=(V=y.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var _,z,Q;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(Q=(z=x.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var G,O,U;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(O=v.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var $,J,X;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(J=w.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,tt;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(tt=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var et,nt,at;g.parameters={...g.parameters,docs:{...(et=g.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(nt=g.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var ot,rt,st;f.parameters={...f.parameters,docs:{...(ot=f.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(st=(rt=f.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var it,ct,ut;B.parameters={...B.parameters,docs:{...(it=B.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ut=(ct=B.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var lt,pt,mt;S.parameters={...S.parameters,docs:{...(lt=S.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(mt=(pt=S.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};const Lt=["Default","WithAiRequestState","LocalizedCopy","BlankHintSemantics","NumericHintSemantics","LabelledByPrecedence","MultiActionFeedback","FocusIntentReentry","WithoutSubmitHandler"];export{w as BlankHintSemantics,y as Default,B as FocusIntentReentry,g as LabelledByPrecedence,v as LocalizedCopy,f as MultiActionFeedback,h as NumericHintSemantics,x as WithAiRequestState,S as WithoutSubmitHandler,Lt as __namedExportsOrder,jt as default};
