import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{within as v,expect as i}from"./index-DgAF9SIF.js";import{b as B}from"./storyShowcase-Bw5VyCj0.js";const w={user:{marginLeft:"auto",background:"var(--aurora-accent-default)",color:"var(--aurora-text-inverse)",borderColor:"transparent"},assistant:{marginRight:"auto",background:"var(--aurora-surface-elevated)",color:"var(--aurora-text-primary)",borderColor:"var(--aurora-border-default)"},system:{margin:"0 auto",background:"transparent",color:"var(--aurora-text-secondary)",borderColor:"transparent"}},L={user:"User",assistant:"Assistant",system:"System"};function s({speaker:e,children:r,ariaLabel:x,speakerLabel:k}){const f=c(k)??L[e],M=c(x)??`${f} message`;return a.jsx("article",{"aria-label":M,"data-speaker":e,style:{maxWidth:"min(680px, 90%)",borderRadius:12,border:"1px solid",padding:"10px 12px",...w[e]},children:r})}function c(e){if(typeof e=="string"&&e.trim().length>0)return e.trim()}s.__docgenInfo={description:"",methods:[],displayName:"MessageBubble",props:{speaker:{required:!0,tsType:{name:"union",raw:'"user" | "assistant" | "system"',elements:[{name:"literal",value:'"user"'},{name:"literal",value:'"assistant"'},{name:"literal",value:'"system"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},speakerLabel:{required:!1,tsType:{name:"string"},description:""}}};const S={title:"AI/MessageBubble",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"MessageBubble renders user, assistant, and system variants for chat-style AI interfaces."}}},args:{speaker:"assistant",children:"Here is the generated summary."}},t={play:async({canvasElement:e})=>{const r=v(e);await i(r.getByRole("article",{name:"Assistant message"})).toHaveTextContent("Here is the generated summary.")}},n={render:()=>a.jsxs(B,{minHeight:320,children:[a.jsx(s,{speaker:"system",children:"Model switched to release-planning mode."}),a.jsx(s,{speaker:"user",children:"Generate a concise changelog for v0.2."}),a.jsx(s,{speaker:"assistant",children:"Changelog drafted with highlights, breaking changes, and migration tips."})]})},o={render:()=>a.jsxs(B,{minHeight:260,children:[a.jsx(s,{speaker:"system",speakerLabel:"系统",children:"模型已切换到发布模式。"}),a.jsx(s,{speaker:"user",speakerLabel:"产品经理",children:"请输出 v0.2 发布摘要。"}),a.jsx(s,{speaker:"assistant",ariaLabel:"发布助手回复",children:"已生成按模块拆分的发布摘要。"})]}),play:async({canvasElement:e})=>{const r=v(e);await i(r.getByRole("article",{name:"系统 message"})).toBeInTheDocument(),await i(r.getByRole("article",{name:"产品经理 message"})).toBeInTheDocument(),await i(r.getByRole("article",{name:"发布助手回复"})).toBeInTheDocument()}};var l,m,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("article", {
      name: "Assistant message"
    })).toHaveTextContent("Here is the generated summary.");
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,p,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <StoryFullscreenFrame minHeight={320}>
      <MessageBubble speaker="system">Model switched to release-planning mode.</MessageBubble>
      <MessageBubble speaker="user">Generate a concise changelog for v0.2.</MessageBubble>
      <MessageBubble speaker="assistant">
        Changelog drafted with highlights, breaking changes, and migration tips.
      </MessageBubble>
    </StoryFullscreenFrame>
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,h,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <StoryFullscreenFrame minHeight={260}>
      <MessageBubble speaker="system" speakerLabel="系统">
        模型已切换到发布模式。
      </MessageBubble>
      <MessageBubble speaker="user" speakerLabel="产品经理">
        请输出 v0.2 发布摘要。
      </MessageBubble>
      <MessageBubble speaker="assistant" ariaLabel="发布助手回复">
        已生成按模块拆分的发布摘要。
      </MessageBubble>
    </StoryFullscreenFrame>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("article", {
      name: "系统 message"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("article", {
      name: "产品经理 message"
    })).toBeInTheDocument();
    await expect(canvas.getByRole("article", {
      name: "发布助手回复"
    })).toBeInTheDocument();
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const F=["Default","Conversation","LocalizedNaming"];export{n as Conversation,t as Default,o as LocalizedNaming,F as __namedExportsOrder,S as default};
