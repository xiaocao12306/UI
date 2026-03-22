import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as ct}from"./Button-DirECuRH.js";import{T as ut}from"./Textarea-BnJNX4pg.js";import{within as l,expect as a,userEvent as u,fireEvent as B,waitFor as st}from"./index-DgAF9SIF.js";import{s as lt,S as pt,a as dt}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function d({onSubmit:e,submitting:t,placeholder:n="Type your prompt...",ariaLabel:r,ariaLabelledBy:i,shortcutHint:s="Ctrl/Cmd + Enter to send",submittingHint:S="Generating response..."}){const[m,R]=c.useState(""),H=c.useRef(!1),A=c.useId(),C=m.trim(),I=t?S:s,k=bt(I),D=j(i),it=D===void 0?j(r)??"Prompt input":void 0,P=()=>{!C||t||(e==null||e(C),R(""))};return o.jsxs("div",{"aria-busy":t||void 0,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",background:"var(--aurora-surface-default)",padding:10,display:"grid",gap:8},children:[o.jsx(ut,{value:m,onChange:p=>R(p.target.value),placeholder:n,"aria-label":it,"aria-labelledby":D,"aria-describedby":k?A:void 0,"aria-keyshortcuts":t?void 0:"Control+Enter Meta+Enter",disabled:t,rows:4,onCompositionStart:()=>{H.current=!0},onCompositionEnd:()=>{H.current=!1},onKeyDown:p=>{H.current||mt(p)||p.key==="Enter"&&(p.metaKey||p.ctrlKey)&&P()}}),o.jsxs("div",{style:{display:"flex",justifyContent:k?"space-between":"flex-end",alignItems:"center"},children:[k?o.jsx("small",{id:A,"aria-live":"polite",style:{color:"var(--aurora-text-secondary)"},children:I}):null,o.jsx(ct,{onClick:P,disabled:t||!C,children:t?"Sending...":"Send"})]})]})}function mt(e){const t=e.nativeEvent;return!!t.isComposing||t.keyCode===229}function j(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}function bt(e){return e==null||typeof e=="boolean"?!1:typeof e=="string"?e.trim().length>0:!0}d.__docgenInfo={description:"",methods:[],displayName:"PromptInput",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(prompt: string) => void",signature:{arguments:[{type:{name:"string"},name:"prompt"}],return:{name:"void"}}},description:""},submitting:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Type your prompt..."',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},shortcutHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Ctrl/Cmd + Enter to send"',computed:!1}},submittingHint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Generating response..."',computed:!1}}}};const E={...lt},L={...dt};function T({children:e}){return o.jsx(pt,{maxWidth:"min(100%, 640px)",children:e})}const Ct={title:"AI/PromptInput",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"PromptInput supports keyboard submit (Ctrl/Cmd + Enter) and handles pending state for AI request pipelines."}}},args:{placeholder:"Summarize user feedback and propose action items..."}};function xt(e){const t=new KeyboardEvent("keydown",{key:"Enter",ctrlKey:!0,bubbles:!0,cancelable:!0});Object.defineProperty(t,"keyCode",{value:229}),e.dispatchEvent(t)}const b={};function yt(){const[e,t]=c.useState(!1),[n,r]=c.useState("None"),[i,s]=c.useState(0);return o.jsxs(T,{children:[o.jsxs("p",{style:E,children:["Last submitted prompt: ",o.jsx("strong",{style:L,children:n})]}),o.jsxs("p",{style:E,children:["Submission count: ",o.jsx("strong",{style:L,children:i})]}),o.jsx(d,{submitting:e,onSubmit:S=>{t(!0),r(S),s(m=>m+1),window.setTimeout(()=>t(!1),600)}})]})}const x={render:()=>o.jsx(yt,{}),play:async({canvasElement:e})=>{const t=l(e),n=await t.findByRole("textbox",{name:"Prompt input"});await a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("Ctrl/Cmd + Enter to send");await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"));const i=t.getByRole("button",{name:"Send"});await a(i).toBeDisabled(),await u.type(n,"Draft release retrospective"),await a(i).toBeEnabled(),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),B.compositionStart(n),B.keyDown(n,{key:"Enter",ctrlKey:!0}),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),B.compositionEnd(n),xt(n),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),await u.keyboard("{Control>}{Enter}{/Control}"),await a(t.getByText("Draft release retrospective")).toBeInTheDocument(),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");const s=t.getByRole("button",{name:"Sending..."});await a(s).toBeDisabled(),await a(n).not.toHaveAttribute("aria-keyshortcuts"),await u.click(s),await a(t.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1"),await st(()=>{a(t.getByRole("button",{name:"Send"})).toBeDisabled(),a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter")})}},y={args:{ariaLabel:"智能提示输入",shortcutHint:"按 Ctrl/Cmd + Enter 提交",submittingHint:"正在生成建议..."},play:async({canvasElement:e})=>{const t=l(e),n=await t.findByRole("textbox",{name:"智能提示输入"});await a(n).toHaveAttribute("aria-keyshortcuts","Control+Enter Meta+Enter");const r=t.getByText("按 Ctrl/Cmd + Enter 提交");await a(r).toBeInTheDocument(),await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"))}},v={args:{ariaLabel:"Blank hint prompt",shortcutHint:"   "},play:async({canvasElement:e})=>{const n=await l(e).findByRole("textbox",{name:"Blank hint prompt"});await a(n).not.toHaveAttribute("aria-describedby")}},g={args:{ariaLabel:"Numeric hint prompt",shortcutHint:0},play:async({canvasElement:e})=>{const t=l(e),n=await t.findByRole("textbox",{name:"Numeric hint prompt"}),r=t.getByText("0");await a(n).toHaveAttribute("aria-describedby",r.getAttribute("id"))}};function vt(){return o.jsxs(T,{children:[o.jsx("h3",{id:"prompt-heading",style:{margin:0},children:"Prompt workflow heading"}),o.jsx(d,{ariaLabel:"   ",ariaLabelledBy:"prompt-heading"})]})}const w={render:()=>o.jsx(vt,{}),play:async({canvasElement:e})=>{const n=await l(e).findByRole("textbox",{name:"Prompt workflow heading"});await a(n).toHaveAttribute("aria-labelledby","prompt-heading"),await a(n).not.toHaveAttribute("aria-label")}};function gt(){const[e,t]=c.useState(!1),[n,r]=c.useState([]);return o.jsxs(T,{children:[o.jsx(d,{submitting:e,placeholder:"Draft release note and publish checklist...",onSubmit:i=>{t(!0),r([`Queued: ${i}`]),window.setTimeout(()=>r(s=>[...s,"Draft generated"]),120),window.setTimeout(()=>r(s=>[...s,"Fact check complete"]),240),window.setTimeout(()=>{r(s=>[...s,"Ready for publish"]),t(!1)},360)}}),o.jsx("ol",{"aria-label":"AI action feedback",style:{...E,paddingLeft:20},children:n.length>0?n.map(i=>o.jsx("li",{children:i},i)):o.jsx("li",{children:"No actions yet."})})]})}const h={render:()=>o.jsx(gt,{}),play:async({canvasElement:e})=>{const t=l(e),n=await t.findByRole("textbox",{name:"Prompt input"});await u.type(n,"Prepare changelog summary"),await u.click(t.getByRole("button",{name:"Send"})),await a(t.getByText("Queued: Prepare changelog summary")).toBeInTheDocument(),await st(()=>{a(t.getByText("Draft generated")).toBeInTheDocument(),a(t.getByText("Fact check complete")).toBeInTheDocument(),a(t.getByText("Ready for publish")).toBeInTheDocument()})}},f={render:()=>o.jsxs(T,{children:[o.jsx("p",{style:E,children:"Click the trigger first, then press Tab to verify keyboard re-entry restores prompt focus-visible state."}),o.jsx("button",{type:"button",children:"Before prompt input"}),o.jsx(d,{ariaLabel:"Focus intent prompt"})]}),play:async({canvasElement:e})=>{const t=l(e),n=await t.findByRole("button",{name:"Before prompt input"}),r=t.getByRole("textbox",{name:"Focus intent prompt"});await u.click(n),await u.tab(),await a(r).toHaveFocus(),await a(r).toHaveAttribute("data-focus-visible","true"),B.mouseDown(r,{button:0,ctrlKey:!0}),await a(r).toHaveAttribute("data-focus-visible","true")}};var F,N,M;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(M=(N=b.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var q,K,V;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(K=x.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var _,z,Q;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(Q=(z=y.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var W,G,O;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(O=(G=v.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var U,$,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=($=g.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var X,Y,Z;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,et,nt;h.parameters={...h.parameters,docs:{...(tt=h.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(et=h.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var at,ot,rt;f.parameters={...f.parameters,docs:{...(at=f.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(rt=(ot=f.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};const kt=["Default","WithAiRequestState","LocalizedCopy","BlankHintSemantics","NumericHintSemantics","LabelledByPrecedence","MultiActionFeedback","FocusIntentReentry"];export{v as BlankHintSemantics,b as Default,f as FocusIntentReentry,w as LabelledByPrecedence,y as LocalizedCopy,h as MultiActionFeedback,g as NumericHintSemantics,x as WithAiRequestState,kt as __namedExportsOrder,Ct as default};
