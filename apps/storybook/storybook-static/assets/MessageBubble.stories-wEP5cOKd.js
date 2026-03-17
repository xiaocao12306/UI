import{j as e}from"./jsx-runtime-BjG_zV1W.js";const g={user:{marginLeft:"auto",background:"var(--aurora-accent-default)",color:"var(--aurora-text-inverse)",borderColor:"transparent"},assistant:{marginRight:"auto",background:"var(--aurora-surface-elevated)",color:"var(--aurora-text-primary)",borderColor:"var(--aurora-border-default)"},system:{margin:"0 auto",background:"transparent",color:"var(--aurora-text-secondary)",borderColor:"transparent"}},p={user:"User",assistant:"Assistant",system:"System"};function a({speaker:t,children:u}){return e.jsx("article",{"aria-label":`${p[t]} message`,"data-speaker":t,style:{maxWidth:"min(680px, 90%)",borderRadius:12,border:"1px solid",padding:"10px 12px",...g[t]},children:u})}a.__docgenInfo={description:"",methods:[],displayName:"MessageBubble",props:{speaker:{required:!0,tsType:{name:"union",raw:'"user" | "assistant" | "system"',elements:[{name:"literal",value:'"user"'},{name:"literal",value:'"assistant"'},{name:"literal",value:'"system"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const b={title:"AI/MessageBubble",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"MessageBubble renders user, assistant, and system variants for chat-style AI interfaces."}}},args:{speaker:"assistant",children:"Here is the generated summary."}},s={},r={render:()=>e.jsxs("div",{style:{minHeight:320,padding:16,display:"grid",gap:10},children:[e.jsx(a,{speaker:"system",children:"Model switched to release-planning mode."}),e.jsx(a,{speaker:"user",children:"Generate a concise changelog for v0.2."}),e.jsx(a,{speaker:"assistant",children:"Changelog drafted with highlights, breaking changes, and migration tips."})]})};var n,o,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,l,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    minHeight: 320,
    padding: 16,
    display: "grid",
    gap: 10
  }}>
      <MessageBubble speaker="system">Model switched to release-planning mode.</MessageBubble>
      <MessageBubble speaker="user">Generate a concise changelog for v0.2.</MessageBubble>
      <MessageBubble speaker="assistant">
        Changelog drafted with highlights, breaking changes, and migration tips.
      </MessageBubble>
    </div>
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const h=["Default","Conversation"];export{r as Conversation,s as Default,h as __namedExportsOrder,b as default};
