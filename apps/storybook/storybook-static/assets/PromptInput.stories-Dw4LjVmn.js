import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as Y}from"./Button-DirECuRH.js";import{T as Z}from"./Textarea-BnJNX4pg.js";import{within as d,userEvent as u,expect as o,fireEvent as f,waitFor as J}from"./index-DgAF9SIF.js";import{s as tt,S as et,a as nt}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function p({onSubmit:e,submitting:t,placeholder:a="Type your prompt...",ariaLabel:r,ariaLabelledBy:i,shortcutHint:s="Ctrl/Cmd + Enter to send",submittingHint:E="Generating response..."}){const[m,C]=c.useState(""),T=c.useRef(!1),k=c.useId(),S=m.trim(),H=R(i),X=H===void 0?R(r)??"Prompt input":void 0,I=()=>{!S||t||(e==null||e(S),C(""))};return n.jsxs("div",{"aria-busy":t||void 0,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",background:"var(--aurora-surface-default)",padding:10,display:"grid",gap:8},children:[n.jsx(Z,{value:m,onChange:l=>C(l.target.value),placeholder:a,"aria-label":X,"aria-labelledby":H,"aria-describedby":k,"aria-keyshortcuts":t?void 0:"Control+Enter Meta+Enter",disabled:t,rows:4,onCompositionStart:()=>{T.current=!0},onCompositionEnd:()=>{T.current=!1},onKeyDown:l=>{T.current||at(l)||l.key==="Enter"&&(l.metaKey||l.ctrlKey)&&I()}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("small",{id:k,"aria-live":"polite",style:{color:"var(--aurora-text-secondary)"},children:t?E:s}),n.jsx(Y,{onClick:I,disabled:t||!S,children:t?"Sending...":"Send"})]})]})}function at(e){const t=e.nativeEvent;return!!t.isComposing||t.keyCode===229}function R(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}p.__docgenInfo={description:"",methods:[],displayName:"PromptInput",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(prompt: string) => void",signature:{arguments:[{type:{name:"string"},name:"prompt"}],return:{name:"void"}}},description:""},submitting:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Type your prompt..."',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},shortcutHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Ctrl/Cmd + Enter to send"',computed:!1}},submittingHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Generating response..."',computed:!1}}}};const h={...tt},A={...nt};function B({children:e}){return n.jsx(et,{maxWidth:"min(100%, 640px)",children:e})}const xt={title:"AI/PromptInput",component:p,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"PromptInput supports keyboard submit (Ctrl/Cmd + Enter) and handles pending state for AI request pipelines."}}},args:{placeholder:"Summarize user feedback and propose action items..."}};function ot(e){const t=new KeyboardEvent("keydown",{key:"Enter",ctrlKey:!0,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const b={};function rt(){const[e,t]=c.useState(!1),[a,r]=c.useState("None"),[i,s]=c.useState(0);return n.jsxs(B,{children:[n.jsxs("p",{style:h,children:["Last submitted prompt: ",n.jsx("strong",{style:A,children:a})]}),n.jsxs("p",{style:h,children:["Submission count: ",n.jsx("strong",{style:A,children:i})]}),n.jsx(p,{submitting:e,onSubmit:E=>{t(!0),r(E),s(m=>m+1),window.setTimeout(()=>t(!1),600)}})]})}const y={render:()=>n.jsx(rt,{}),play:async({canvasElement:e})=>{const t=d(e),a=await t.findByRole("textbox",{name:"Prompt input"});await o(a).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("Ctrl/Cmd + Enter to send");await o(a).toHaveAttribute("aria-describedby",r.getAttribute("id"));const i=t.getByRole("button",{name:"Send"});await o(i).toBeDisabled(),await u.type(a,"Draft release retrospective"),await o(i).toBeEnabled(),await o(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),f.compositionStart(a),f.keyDown(a,{key:"Enter",ctrlKey:!0}),await o(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),f.compositionEnd(a),ot(a),await o(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),await u.keyboard("{Control>}{Enter}{/Control}"),await o(t.getByText("Draft release retrospective")).toBeInTheDocument(),await o(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");const s=t.getByRole("button",{name:"Sending..."});await o(s).toBeDisabled(),await o(a).not.toHaveAttribute("aria-keyshortcuts"),await u.click(s),await o(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1"),await J(()=>{o(t.getByRole("button",{name:"Send"})).toBeDisabled(),o(a).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter")})}},x={args:{ariaLabel:"智能提示输入",shortcutHint:"按 Ctrl/Cmd + Enter 提交",submittingHint:"正在生成建议..."},play:async({canvasElement:e})=>{const t=d(e),a=await t.findByRole("textbox",{name:"智能提示输入"});await o(a).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("按 Ctrl/Cmd + Enter 提交");await o(r).toBeInTheDocument(),await o(a).toHaveAttribute("aria-describedby",r.getAttribute("id"))}};function st(){return n.jsxs(B,{children:[n.jsx("h3",{id:"prompt-heading",style:{margin:0},children:"Prompt workflow heading"}),n.jsx(p,{ariaLabel:"   ",ariaLabelledBy:"prompt-heading"})]})}const v={render:()=>n.jsx(st,{}),play:async({canvasElement:e})=>{const a=await d(e).findByRole("textbox",{name:"Prompt workflow heading"});await o(a).toHaveAttribute("aria-labelledby","prompt-heading"),await o(a).not.toHaveAttribute("aria-label")}};function it(){const[e,t]=c.useState(!1),[a,r]=c.useState([]);return n.jsxs(B,{children:[n.jsx(p,{submitting:e,placeholder:"Draft release note and publish checklist...",onSubmit:i=>{t(!0),r([`Queued: ${i}`]),window.setTimeout(()=>r(s=>[...s,"Draft generated"]),120),window.setTimeout(()=>r(s=>[...s,"Fact check complete"]),240),window.setTimeout(()=>{r(s=>[...s,"Ready for publish"]),t(!1)},360)}}),n.jsx("ol",{"aria-label":"AI action feedback",style:{...h,paddingLeft:20},children:a.length>0?a.map(i=>n.jsx("li",{children:i},i)):n.jsx("li",{children:"No actions yet."})})]})}const g={render:()=>n.jsx(it,{}),play:async({canvasElement:e})=>{const t=d(e),a=await t.findByRole("textbox",{name:"Prompt input"});await u.type(a,"Prepare changelog summary"),await u.click(t.getByRole("button",{name:"Send"})),await o(t.getByText("Queued: Prepare changelog summary")).toBeInTheDocument(),await J(()=>{o(t.getByText("Draft generated")).toBeInTheDocument(),o(t.getByText("Fact check complete")).toBeInTheDocument(),o(t.getByText("Ready for publish")).toBeInTheDocument()})}},w={render:()=>n.jsxs(B,{children:[n.jsx("p",{style:h,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores prompt focus-visible state."}),n.jsx("button",{type:"button",children:"Before prompt input"}),n.jsx(p,{ariaLabel:"Focus intent prompt"})]}),play:async({canvasElement:e})=>{const t=d(e),a=await t.findByRole("button",{name:"Before prompt input"}),r=t.getByRole("textbox",{name:"Focus intent prompt"});await u.click(a),await u.tab(),await o(r).toHaveFocus(),await o(r).toHaveAttribute("data-focus-visible","true"),f.mouseDown(r,{button:0,ctrlKey:!0}),await o(r).toHaveAttribute("data-focus-visible","true")}};var D,P,j;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(j=(P=b.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var L,F,M;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(F=y.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var q,K,N;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(K=x.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var V,_,z;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(_=v.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var Q,W,G;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(G=(W=g.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var O,U,$;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...($=(U=w.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const vt=["Default","WithAiRequestState","LocalizedCopy","LabelledByPrecedence","MultiActionFeedback","FocusIntentReentry"];export{b as Default,w as FocusIntentReentry,v as LabelledByPrecedence,x as LocalizedCopy,g as MultiActionFeedback,y as WithAiRequestState,vt as __namedExportsOrder,xt as default};
