import{R as o}from"./navigation-actions-HEAzkBsN.js";import"./theme-CDuz6VZs.js";import"./app-symbol.web-DUNO0XpW.js";import"./cashflow-sankey-8Ihdwqu5.js";import"./components-DHLIZEWz.js";import"./iframe-DcJx8gya.js";import"./preload-helper-DhRmtqSx.js";const{expect:r,fn:s}=__STORYBOOK_MODULE_TEST__,g={title:"Components/Navigation/RecordAction",component:o,args:{onPress:s()},argTypes:{onPress:{control:!1}}},e={play:async({args:a,canvas:t,userEvent:n})=>{await n.click(t.getByRole("button",{name:"거래 기록하기"})),await r(a.onPress).toHaveBeenCalledOnce()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
