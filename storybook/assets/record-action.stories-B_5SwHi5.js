import{R as o}from"./navigation-actions-BR-GjZJp.js";import"./theme-B2QsN4Sz.js";import"./app-symbol.web-BTz7z5QG.js";import"./cashflow-sankey-D81fEvXC.js";import"./components-DUoQUDYL.js";import"./iframe--kxll3mg.js";import"./preload-helper-DhRmtqSx.js";const{expect:r,fn:s}=__STORYBOOK_MODULE_TEST__,g={title:"Components/Navigation/RecordAction",component:o,args:{onPress:s()},argTypes:{onPress:{control:!1}}},e={play:async({args:a,canvas:t,userEvent:n})=>{await n.click(t.getByRole("button",{name:"거래 기록하기"})),await r(a.onPress).toHaveBeenCalledOnce()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '거래 기록하기'
    }));
    await expect(args.onPress).toHaveBeenCalledOnce();
  }
}`,...e.parameters?.docs?.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,g as default};
