import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{within as u,expect as g}from"./index-DgAF9SIF.js";import{b as p}from"./storyShowcase-Bw5VyCj0.js";const b={user:{marginLeft:"auto",background:"var(--aurora-accent-default)",color:"var(--aurora-text-inverse)",borderColor:"transparent"},assistant:{marginRight:"auto",background:"var(--aurora-surface-elevated)",color:"var(--aurora-text-primary)",borderColor:"var(--aurora-border-default)"},system:{margin:"0 auto",background:"transparent",color:"var(--aurora-text-secondary)",borderColor:"transparent"}},h={user:"User",assistant:"Assistant",system:"System"};function s({speaker:e,children:n}){return a.jsx("article",{"aria-label":`${h[e]} message`,"data-speaker":e,style:{maxWidth:"min(680px, 90%)",borderRadius:12,border:"1px solid",padding:"10px 12px",...b[e]},children:n})}s.__docgenInfo={description:"",methods:[],displayName:"MessageBubble",props:{speaker:{required:!0,tsType:{name:"union",raw:'"user" | "assistant" | "system"',elements:[{name:"literal",value:'"user"'},{name:"literal",value:'"assistant"'},{name:"literal",value:'"system"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const f={title:"AI/MessageBubble",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"MessageBubble renders user, assistant, and system variants for chat-style AI interfaces."}}},args:{speaker:"assistant",children:"Here is the generated summary."}},r={play:async({canvasElement:e})=>{const n=u(e);await g(n.getByRole("article",{name:"Assistant message"})).toHaveTextContent("Here is the generated summary.")}},t={render:()=>a.jsxs(p,{minHeight:320,children:[a.jsx(s,{speaker:"system",children:"Model switched to release-planning mode."}),a.jsx(s,{speaker:"user",children:"Generate a concise changelog for v0.2."}),a.jsx(s,{speaker:"assistant",children:"Changelog drafted with highlights, breaking changes, and migration tips."})]})};var o,i,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("article", {
      name: "Assistant message"
    })).toHaveTextContent("Here is the generated summary.");
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <StoryFullscreenFrame minHeight={320}>
      <MessageBubble speaker="system">Model switched to release-planning mode.</MessageBubble>
      <MessageBubble speaker="user">Generate a concise changelog for v0.2.</MessageBubble>
      <MessageBubble speaker="assistant">
        Changelog drafted with highlights, breaking changes, and migration tips.
      </MessageBubble>
    </StoryFullscreenFrame>
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const k=["Default","Conversation"];export{t as Conversation,r as Default,k as __namedExportsOrder,f as default};
