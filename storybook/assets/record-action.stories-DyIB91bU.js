import{R as o}from"./navigation-actions-Ch3-XQlj.js";import"./theme-DrLBCnSR.js";import"./app-symbol.web-BpmHQ6nT.js";import"./cashflow-sankey-DP2akK8q.js";import"./components-DVSlncDs.js";import"./iframe-BZnyquBv.js";import"./preload-helper-DhRmtqSx.js";import"./ledger-ui-Crs18mwD.js";const{expect:r,fn:s}=__STORYBOOK_MODULE_TEST__,_={title:"Components/Navigation/RecordAction",component:o,args:{onPress:s()},argTypes:{onPress:{control:!1}}},e={play:async({args:t,canvas:a,userEvent:n})=>{await n.click(a.getByRole("button",{name:"거래 기록하기"})),await r(t.onPress).toHaveBeenCalledOnce()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,_ as default};
