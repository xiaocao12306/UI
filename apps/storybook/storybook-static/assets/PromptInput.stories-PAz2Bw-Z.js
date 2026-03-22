import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{B as ct}from"./Button-rBVi27TD.js";import{T as ut}from"./Textarea-BnJNX4pg.js";import{within as p,expect as a,userEvent as l,fireEvent as m,waitFor as st}from"./index-DgAF9SIF.js";import{s as lt,S as pt,a as mt}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function d({onSubmit:e,submitting:t,placeholder:n="Type your prompt...",ariaLabel:r,ariaLabelledBy:i,shortcutHint:s="Ctrl/Cmd + Enter to send",submittingHint:S="Generating response..."}){const[b,R]=u.useState(""),H=u.useRef(!1),A=u.useId(),C=b.trim(),D=t?S:s,k=bt(D),I=j(i),it=I===void 0?j(r)??"Prompt input":void 0,P=()=>{!C||t||(e==null||e(C),R(""))};return o.jsxs("div",{"aria-busy":t||void 0,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",background:"var(--aurora-surface-default)",padding:10,display:"grid",gap:8},children:[o.jsx(ut,{value:b,onChange:c=>R(c.target.value),placeholder:n,"aria-label":it,"aria-labelledby":I,"aria-describedby":k?A:void 0,"aria-keyshortcuts":t?void 0:"Control+Enter Meta+Enter",disabled:t,rows:4,onCompositionStart:()=>{H.current=!0},onCompositionEnd:()=>{H.current=!1},onKeyDown:c=>{if(!(H.current||dt(c))&&c.key==="Enter"&&(c.metaKey||c.ctrlKey)){if(c.altKey)return;if(c.repeat){c.preventDefault();return}if(c.defaultPrevented)return;c.preventDefault(),P()}}}),o.jsxs("div",{style:{display:"flex",justifyContent:k?"space-between":"flex-end",alignItems:"center"},children:[k?o.jsx("small",{id:A,"aria-live":"polite",style:{color:"var(--aurora-text-secondary)"},children:D}):null,o.jsx(ct,{onClick:P,disabled:t||!C,children:t?"Sending...":"Send"})]})]})}function dt(e){const t=e.nativeEvent;return!!t.isComposing||t.keyCode===229}function j(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}function bt(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:!0}d.__docgenInfo={description:"",methods:[],displayName:"PromptInput",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(prompt: string) => void",signature:{arguments:[{type:{name:"string"},name:"prompt"}],return:{name:"void"}}},description:""},submitting:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Type your prompt..."',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},shortcutHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Ctrl/Cmd + Enter to send"',computed:!1}},submittingHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Generating response..."',computed:!1}}}};const E={...lt},L={...mt};function T({children:e}){return o.jsx(pt,{maxWidth:"min(100%, 640px)",children:e})}const Ct={title:"AI/PromptInput",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"PromptInput supports keyboard submit (Ctrl/Cmd + Enter) and handles pending state for AI request pipelines."}}},args:{placeholder:"Summarize user feedback and propose action items..."}};function yt(e){const t=new KeyboardEvent("keydown",{key:"Enter",ctrlKey:!0,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const y={};function xt(){const[e,t]=u.useState(!1),[n,r]=u.useState("None"),[i,s]=u.useState(0);return o.jsxs(T,{children:[o.jsxs("p",{style:E,children:["Last submitted prompt: ",o.jsx("strong",{style:L,children:n})]}),o.jsxs("p",{style:E,children:["Submission count: ",o.jsx("strong",{style:L,children:i})]}),o.jsx(d,{submitting:e,onSubmit:S=>{t(!0),r(S),s(b=>b+1),window.setTimeout(()=>t(!1),600)}})]})}const x={render:()=>o.jsx(xt,{}),play:async({canvasElement:e})=>{const t=p(e),n=await t.findByRole("textbox",{name:"Prompt input"});await a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("Ctrl/Cmd + Enter to send");await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"));const i=t.getByRole("button",{name:"Send"});await a(i).toBeDisabled(),await l.type(n,"Draft release retrospective"),await a(i).toBeEnabled(),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.compositionStart(n),m.keyDown(n,{key:"Enter",ctrlKey:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.compositionEnd(n),yt(n),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.keyDown(n,{key:"Enter",ctrlKey:!0,repeat:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),m.keyDown(n,{key:"Enter",ctrlKey:!0,altKey:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),await l.keyboard("{Control>}{Enter}{/Control}"),await a(t.getByText("Draft release retrospective")).toBeInTheDocument(),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");const s=t.getByRole("button",{name:"Sending..."});await a(s).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts"),await l.click(s),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1"),await st(()=>{a(t.getByRole("button",{name:"Send"})).toBeDisabled(),a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter")})}},v={args:{ariaLabel:"智能提示输入",shortcutHint:"按 Ctrl/Cmd + Enter 提交",submittingHint:"正在生成建议..."},play:async({canvasElement:e})=>{const t=p(e),n=await t.findByRole("textbox",{name:"智能提示输入"});await a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("按 Ctrl/Cmd + Enter 提交");await a(r).toBeInTheDocument(),await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"))}},w={args:{ariaLabel:"Blank hint prompt",shortcutHint:"   "},play:async({canvasElement:e})=>{const n=await p(e).findByRole("textbox",{name:"Blank hint prompt"});await a(n).not.toHaveAttribute("aria-describedby")}},g={args:{ariaLabel:"Numeric hint prompt",shortcutHint:0},play:async({canvasElement:e})=>{const t=p(e),n=await t.findByRole("textbox",{name:"Numeric hint prompt"}),r=t.getByText("0");await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"))}};function vt(){return o.jsxs(T,{children:[o.jsx("h3",{id:"prompt-heading",style:{margin:0},children:"Prompt workflow heading"}),o.jsx(d,{ariaLabel:"   ",ariaLabelledBy:"prompt-heading"})]})}const f={render:()=>o.jsx(vt,{}),play:async({canvasElement:e})=>{const n=await p(e).findByRole("textbox",{name:"Prompt workflow heading"});await a(n).toHaveAttribute("aria-labelledby","prompt-heading"),await a(n).not.toHaveAttribute("aria-label")}};function wt(){const[e,t]=u.useState(!1),[n,r]=u.useState([]);return o.jsxs(T,{children:[o.jsx(d,{submitting:e,placeholder:"Draft release note and publish checklist...",onSubmit:i=>{t(!0),r([`Queued: ${i}`]),window.setTimeout(()=>r(s=>[...s,"Draft generated"]),120),window.setTimeout(()=>r(s=>[...s,"Fact check complete"]),240),window.setTimeout(()=>{r(s=>[...s,"Ready for publish"]),t(!1)},360)}}),o.jsx("ol",{"aria-label":"AI action feedback",style:{...E,paddingLeft:20},children:n.length>0?n.map(i=>o.jsx("li",{children:i},i)):o.jsx("li",{children:"No actions yet."})})]})}const h={render:()=>o.jsx(wt,{}),play:async({canvasElement:e})=>{const t=p(e),n=await t.findByRole("textbox",{name:"Prompt input"});await l.type(n,"Prepare changelog summary"),await l.click(t.getByRole("button",{name:"Send"})),await a(t.getByText("Queued: Prepare changelog summary")).toBeInTheDocument(),await st(()=>{a(t.getByText("Draft generated")).toBeInTheDocument(),a(t.getByText("Fact check complete")).toBeInTheDocument(),a(t.getByText("Ready for publish")).toBeInTheDocument()})}},B={render:()=>o.jsxs(T,{children:[o.jsx("p",{style:E,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores prompt focus-visible state."}),o.jsx("button",{type:"button",children:"Before prompt input"}),o.jsx(d,{ariaLabel:"Focus intent prompt"})]}),play:async({canvasElement:e})=>{const t=p(e),n=await t.findByRole("button",{name:"Before prompt input"}),r=t.getByRole("textbox",{name:"Focus intent prompt"});await l.click(n),await l.tab(),await a(r).toHaveFocus(),await a(r).toHaveAttribute("data-focus-visible","true"),m.mouseDown(r,{button:0,ctrlKey:!0}),await a(r).toHaveAttribute("data-focus-visible","true")}};var F,K,N;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(N=(K=y.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var M,q,V;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(q=x.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var _,z,Q;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
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
}`,...(Q=(z=v.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var W,G,O;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
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
}`,...(O=(G=w.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var U,$,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
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
}`,...(J=($=g.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,et,nt;h.parameters={...h.parameters,docs:{...(tt=h.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(et=h.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var at,ot,rt;B.parameters={...B.parameters,docs:{...(at=B.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(rt=(ot=B.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};const kt=["Default","WithAiRequestState","LocalizedCopy","BlankHintSemantics","NumericHintSemantics","LabelledByPrecedence","MultiActionFeedback","FocusIntentReentry"];export{w as BlankHintSemantics,y as Default,B as FocusIntentReentry,f as LabelledByPrecedence,v as LocalizedCopy,h as MultiActionFeedback,g as NumericHintSemantics,x as WithAiRequestState,kt as __namedExportsOrder,Ct as default};
