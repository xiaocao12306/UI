import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-BWu4c2F4.js";import{B as R}from"./Button-BMxlc9Nj.js";import{T as F}from"./Textarea-Di0XIAdb.js";import{within as I,userEvent as l,expect as o,waitFor as j,fireEvent as g}from"./index-DgAF9SIF.js";import{s as H,a as A,S as K}from"./storyShowcase-Bw5VyCj0.js";import"./FieldStyles-CQy9UjBZ.js";import"./a11y-CU5SQrEA.js";function b({onSubmit:n,submitting:e,placeholder:a="Type your prompt..."}){const[s,r]=c.useState(""),i=c.useRef(!1),p=s.trim(),m=()=>{!p||e||(n==null||n(p),r(""))};return t.jsxs("div",{"aria-busy":e||void 0,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",background:"var(--aurora-surface-default)",padding:10,display:"grid",gap:8},children:[t.jsx(F,{value:s,onChange:u=>r(u.target.value),placeholder:a,"aria-label":"Prompt input",disabled:e,rows:4,onCompositionStart:()=>{i.current=!0},onCompositionEnd:()=>{i.current=!1},onKeyDown:u=>{i.current||q(u)||u.key==="Enter"&&(u.metaKey||u.ctrlKey)&&m()}}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("small",{"aria-live":"polite",style:{color:"var(--aurora-text-secondary)"},children:e?"Generating response...":"Ctrl/Cmd + Enter to send"}),t.jsx(R,{onClick:m,disabled:e||!p,children:e?"Sending...":"Send"})]})]})}function q(n){const e=n.nativeEvent;return!!e.isComposing||e.keyCode===229}b.__docgenInfo={description:"",methods:[],displayName:"PromptInput",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(prompt: string) => void",signature:{arguments:[{type:{name:"string"},name:"prompt"}],return:{name:"void"}}},description:""},submitting:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Type your prompt..."',computed:!1}}}};const v={...H},f={...A};function P({children:n}){return t.jsx(K,{maxWidth:"min(100%, 640px)",children:n})}const $={title:"AI/PromptInput",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"PromptInput supports keyboard submit (Ctrl/Cmd + Enter) and handles pending state for AI request pipelines."}}},args:{placeholder:"Summarize user feedback and propose action items..."}};function L(n){const e=new KeyboardEvent("keydown",{key:"Enter",ctrlKey:!0,bubbles:!0,cancelable:!0});Object.defineProperty(e,"keyCode",{value:229}),n.dispatchEvent(e)}const d={};function M(){const[n,e]=c.useState(!1),[a,s]=c.useState("None"),[r,i]=c.useState(0);return t.jsxs(P,{children:[t.jsxs("p",{style:v,children:["Last submitted prompt: ",t.jsx("strong",{style:f,children:a})]}),t.jsxs("p",{style:v,children:["Submission count: ",t.jsx("strong",{style:f,children:r})]}),t.jsx(b,{submitting:n,onSubmit:p=>{e(!0),s(p),i(m=>m+1),window.setTimeout(()=>e(!1),600)}})]})}const y={render:()=>t.jsx(M,{}),play:async({canvasElement:n})=>{const e=I(n),a=await e.findByRole("textbox",{name:"Prompt input"}),s=e.getByRole("button",{name:"Send"});await o(s).toBeDisabled(),await l.type(a,"Draft release retrospective"),await o(s).toBeEnabled(),await o(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),g.compositionStart(a),g.keyDown(a,{key:"Enter",ctrlKey:!0}),await o(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),g.compositionEnd(a),L(a),await o(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 0"),await l.keyboard("{Control>}{Enter}{/Control}"),await o(e.getByText("Draft release retrospective")).toBeInTheDocument(),await o(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");const r=e.getByRole("button",{name:"Sending..."});await o(r).toBeDisabled(),await l.click(r),await o(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1"),await j(()=>{o(e.getByRole("button",{name:"Send"})).toBeDisabled()})}};function V(){const[n,e]=c.useState(!1),[a,s]=c.useState([]);return t.jsxs(P,{children:[t.jsx(b,{submitting:n,placeholder:"Draft release note and publish checklist...",onSubmit:r=>{e(!0),s([`Queued: ${r}`]),window.setTimeout(()=>s(i=>[...i,"Draft generated"]),120),window.setTimeout(()=>s(i=>[...i,"Fact check complete"]),240),window.setTimeout(()=>{s(i=>[...i,"Ready for publish"]),e(!1)},360)}}),t.jsx("ol",{"aria-label":"AI action feedback",style:{...v,paddingLeft:20},children:a.length>0?a.map(r=>t.jsx("li",{children:r},r)):t.jsx("li",{children:"No actions yet."})})]})}const x={render:()=>t.jsx(V,{}),play:async({canvasElement:n})=>{const e=I(n),a=await e.findByRole("textbox",{name:"Prompt input"});await l.type(a,"Prepare changelog summary"),await l.click(e.getByRole("button",{name:"Send"})),await o(e.getByText("Queued: Prepare changelog summary")).toBeInTheDocument(),await j(()=>{o(e.getByText("Draft generated")).toBeInTheDocument(),o(e.getByText("Fact check complete")).toBeInTheDocument(),o(e.getByText("Ready for publish")).toBeInTheDocument()})}};var w,B,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(S=(B=d.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var T,h,E;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <InteractivePromptInput />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textbox = await canvas.findByRole("textbox", {
      name: "Prompt input"
    });
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
    await userEvent.click(loadingButton);
    await expect(canvas.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");
    await waitFor(() => {
      expect(canvas.getByRole("button", {
        name: "Send"
      })).toBeDisabled();
    });
  }
}`,...(E=(h=y.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var C,D,k;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(D=x.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const J=["Default","WithAiRequestState","MultiActionFeedback"];export{d as Default,x as MultiActionFeedback,y as WithAiRequestState,J as __namedExportsOrder,$ as default};
