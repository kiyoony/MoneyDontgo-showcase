import{k as o}from"./components-DHLIZEWz.js";import"./theme-CDuz6VZs.js";import"./iframe-DcJx8gya.js";import"./preload-helper-DhRmtqSx.js";const{expect:r,fn:c}=__STORYBOOK_MODULE_TEST__,m={title:"Primitives/ActionCard",component:o,args:{label:"저장한 거래 0건",actionLabel:"거래 추가",onAction:c()},argTypes:{label:{control:"text"},actionLabel:{control:"text"},onAction:{control:!1}}},a={play:async({args:e,canvas:n,userEvent:t})=>{await t.click(n.getByRole("button",{name:"거래 추가"})),await r(e.onAction).toHaveBeenCalledOnce()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '거래 추가'
    }));
    await expect(args.onAction).toHaveBeenCalledOnce();
  }
}`,...a.parameters?.docs?.source}}};const d=["Playground"];export{a as Playground,d as __namedExportsOrder,m as default};
