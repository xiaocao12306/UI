import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{r as u}from"./index-BWu4c2F4.js";import{B as j}from"./Button-Hgh0jeno.js";import{T as E}from"./Textarea-D83jYE7Q.js";import{within as D,userEvent as l,expect as s,waitFor as I}from"./index-DgAF9SIF.js";import"./FieldStyles-CQy9UjBZ.js";function x({onSubmit:o,submitting:e,placeholder:i="Type your prompt..."}){const[a,n]=u.useState(""),r=a.trim(),d=()=>{!r||e||(o==null||o(r),n(""))};return t.jsxs("div",{"aria-busy":e||void 0,style:{border:"1px solid var(--aurora-border-default)",borderRadius:"var(--aurora-radius-lg)",background:"var(--aurora-surface-default)",padding:10,display:"grid",gap:8},children:[t.jsx(E,{value:a,onChange:c=>n(c.target.value),placeholder:i,"aria-label":"Prompt input",disabled:e,rows:4,onKeyDown:c=>{c.key==="Enter"&&(c.metaKey||c.ctrlKey)&&d()}}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("small",{"aria-live":"polite",style:{color:"var(--aurora-text-secondary)"},children:e?"Generating response...":"Ctrl/Cmd + Enter to send"}),t.jsx(j,{onClick:d,disabled:e||!r,children:e?"Sending...":"Send"})]})]})}x.__docgenInfo={description:"",methods:[],displayName:"PromptInput",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(prompt: string) => void",signature:{arguments:[{type:{name:"string"},name:"prompt"}],return:{name:"void"}}},description:""},submitting:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Type your prompt..."',computed:!1}}}};const M={title:"AI/PromptInput",component:x,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"PromptInput supports keyboard submit (Ctrl/Cmd + Enter) and handles pending state for AI request pipelines."}}},args:{placeholder:"Summarize user feedback and propose action items..."}},p={};function k(){const[o,e]=u.useState(!1),[i,a]=u.useState("None"),[n,r]=u.useState(0);return t.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Last submitted prompt: ",t.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:i})]}),t.jsxs("p",{style:{margin:0,color:"var(--aurora-text-secondary)"},children:["Submission count: ",t.jsx("strong",{style:{color:"var(--aurora-text-primary)"},children:n})]}),t.jsx(x,{submitting:o,onSubmit:d=>{e(!0),a(d),r(c=>c+1),window.setTimeout(()=>e(!1),600)}})]})}const m={render:()=>t.jsx(k,{}),play:async({canvasElement:o})=>{const e=D(o),i=await e.findByRole("textbox",{name:"Prompt input"}),a=e.getByRole("button",{name:"Send"});await s(a).toBeDisabled(),await l.type(i,"Draft release retrospective"),await s(a).toBeEnabled(),await l.keyboard("{Control>}{Enter}{/Control}"),await s(e.getByText("Draft release retrospective")).toBeInTheDocument(),await s(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1");const n=e.getByRole("button",{name:"Sending..."});await s(n).toBeDisabled(),await l.click(n),await s(e.getByText(/Submission count:/)).toHaveTextContent("Submission count: 1"),await I(()=>{s(e.getByRole("button",{name:"Send"})).toBeDisabled()})}};function P(){const[o,e]=u.useState(!1),[i,a]=u.useState([]);return t.jsxs("div",{style:{width:620,display:"grid",gap:10},children:[t.jsx(x,{submitting:o,placeholder:"Draft release note and publish checklist...",onSubmit:n=>{e(!0),a([`Queued: ${n}`]),window.setTimeout(()=>a(r=>[...r,"Draft generated"]),120),window.setTimeout(()=>a(r=>[...r,"Fact check complete"]),240),window.setTimeout(()=>{a(r=>[...r,"Ready for publish"]),e(!1)},360)}}),t.jsx("ol",{"aria-label":"AI action feedback",style:{margin:0,paddingLeft:20,color:"var(--aurora-text-secondary)"},children:i.length>0?i.map(n=>t.jsx("li",{children:n},n)):t.jsx("li",{children:"No actions yet."})})]})}const y={render:()=>t.jsx(P,{}),play:async({canvasElement:o})=>{const e=D(o),i=await e.findByRole("textbox",{name:"Prompt input"});await l.type(i,"Prepare changelog summary"),await l.click(e.getByRole("button",{name:"Send"})),await s(e.getByText("Queued: Prepare changelog summary")).toBeInTheDocument(),await I(()=>{s(e.getByText("Draft generated")).toBeInTheDocument(),s(e.getByText("Fact check complete")).toBeInTheDocument(),s(e.getByText("Ready for publish")).toBeInTheDocument()})}};var g,b,v;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var B,w,h;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(h=(w=m.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var f,T,S;y.parameters={...y.parameters,docs:{...(f=y.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(T=y.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const _=["Default","WithAiRequestState","MultiActionFeedback"];export{p as Default,y as MultiActionFeedback,m as WithAiRequestState,_ as __namedExportsOrder,M as default};
