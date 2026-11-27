import{B as r}from"./navigation-actions-Ch3-XQlj.js";import"./theme-DrLBCnSR.js";import"./app-symbol.web-BpmHQ6nT.js";import"./cashflow-sankey-DP2akK8q.js";import"./components-DVSlncDs.js";import"./iframe-BZnyquBv.js";import"./preload-helper-DhRmtqSx.js";import"./ledger-ui-Crs18mwD.js";const{expect:s,fn:c}=__STORYBOOK_MODULE_TEST__,B={title:"Components/Navigation/BookMenuAction",component:r,args:{name:"내 장부",expanded:!1,onPress:c()},argTypes:{name:{control:"text"},expanded:{control:"boolean"},onPress:{control:!1}}},e={play:async({args:n,canvas:o,userEvent:t})=>{await t.click(o.getByRole("button",{name:n.name+" 장부 메뉴 열기"})),await s(n.onPress).toHaveBeenCalledOnce()}},a={args:{expanded:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: args.name + ' 장부 메뉴 열기'
    }));
    await expect(args.onPress).toHaveBeenCalledOnce();
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...a.parameters?.docs?.source}}};const _=["Default","Expanded"];export{e as Default,a as Expanded,_ as __namedExportsOrder,B as default};
