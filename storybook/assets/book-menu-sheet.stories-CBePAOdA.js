import{j as m}from"./theme-B2QsN4Sz.js";import{V as p}from"./components-DvscOU_I.js";import{a as u}from"./navigation-actions-C23YSDHZ.js";import"./iframe-Doe5r-is.js";import"./preload-helper-DhRmtqSx.js";import"./app-symbol.web-BTz7z5QG.js";import"./cashflow-sankey-D85FpS-d.js";const{expect:t,fn:o}=__STORYBOOK_MODULE_TEST__,S={title:"Components/Navigation/BookMenuSheet",component:u,decorators:[e=>m.jsx(p,{style:{position:"relative",width:"100%",height:740,overflow:"hidden"},children:m.jsx(e,{})})],args:{name:"내 장부",visible:!0,onDismiss:o(),onManage:o(),onBackupAndShare:o(),onSettings:o()},argTypes:{name:{control:"text"},visible:{control:"boolean"},onDismiss:{control:!1},onManage:{control:!1},onBackupAndShare:{control:!1},onSettings:{control:!1}}},s={},r={play:async({args:e,canvas:a,userEvent:n})=>{const l=a.getByRole("dialog",{name:"장부 메뉴"});await t(l).toHaveAttribute("aria-modal","true"),l.focus(),await n.tab({shift:!0}),await t(a.getByRole("button",{name:"기록 연동"})).toHaveFocus(),await n.tab(),await t(a.getByRole("button",{name:"장부 메뉴 닫기"})).toHaveFocus(),await n.keyboard("{Escape}"),await t(e.onDismiss).toHaveBeenCalledOnce()}},c={play:async({args:e,canvas:a,userEvent:n})=>{await n.click(a.getByRole("button",{name:"백업 및 공유"})),await t(e.onBackupAndShare).toHaveBeenCalledOnce()}},i={play:async({args:e,canvas:a,userEvent:n})=>{await n.click(a.getByRole("button",{name:"장부 메뉴 닫기"})),await t(e.onDismiss).toHaveBeenCalledOnce()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    const dialog = canvas.getByRole('dialog', {
      name: '장부 메뉴'
    });
    await expect(dialog).toHaveAttribute('aria-modal', 'true');
    dialog.focus();
    await userEvent.tab({
      shift: true
    });
    await expect(canvas.getByRole('button', {
      name: '기록 연동'
    })).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: '장부 메뉴 닫기'
    })).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await expect(args.onDismiss).toHaveBeenCalledOnce();
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '백업 및 공유'
    }));
    await expect(args.onBackupAndShare).toHaveBeenCalledOnce();
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '장부 메뉴 닫기'
    }));
    await expect(args.onDismiss).toHaveBeenCalledOnce();
  }
}`,...i.parameters?.docs?.source}}};const h=["Open","Keyboard","SelectBackupAndShare","Dismiss"];export{i as Dismiss,r as Keyboard,s as Open,c as SelectBackupAndShare,h as __namedExportsOrder,S as default};
