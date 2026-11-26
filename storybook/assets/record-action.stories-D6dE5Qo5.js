import{R as o}from"./navigation-actions-Brep544C.js";import"./theme-Bmk8G3Xq.js";import"./app-symbol.web-BQYCspdR.js";import"./cashflow-sankey-DMHpqij8.js";import"./components-CrgZFfWO.js";import"./iframe-DcUV9DEb.js";import"./preload-helper-DhRmtqSx.js";import"./ledger-ui-C3eDBkp5.js";const{expect:r,fn:s}=__STORYBOOK_MODULE_TEST__,_={title:"Components/Navigation/RecordAction",component:o,args:{onPress:s()},argTypes:{onPress:{control:!1}}},e={play:async({args:t,canvas:a,userEvent:n})=>{await n.click(a.getByRole("button",{name:"거래 기록하기"})),await r(t.onPress).toHaveBeenCalledOnce()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
