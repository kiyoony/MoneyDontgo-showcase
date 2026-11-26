import{j as m}from"./theme-Bmk8G3Xq.js";import{V as p}from"./components-Bi0Z_tY2.js";import{a as u}from"./navigation-actions-BhJUi6UU.js";import"./iframe-BoxIrDJq.js";import"./preload-helper-DhRmtqSx.js";import"./app-symbol.web-BQYCspdR.js";import"./cashflow-sankey-fBZKRwXB.js";import"./ledger-ui-98Yh45Bq.js";const{expect:n,fn:o}=__STORYBOOK_MODULE_TEST__,h={title:"Components/Navigation/BookMenuSheet",component:u,decorators:[e=>m.jsx(p,{style:{position:"relative",width:"100%",height:740,overflow:"hidden"},children:m.jsx(e,{})})],args:{name:"내 장부",visible:!0,onDismiss:o(),onManage:o(),onBackupAndShare:o(),onSettings:o()},argTypes:{name:{control:"text"},visible:{control:"boolean"},onDismiss:{control:!1},onManage:{control:!1},onBackupAndShare:{control:!1},onSettings:{control:!1}}},s={},r={play:async({args:e,canvas:a,userEvent:t})=>{const l=a.getByRole("dialog",{name:"장부 메뉴"});await n(l).toHaveAttribute("aria-modal","true"),l.focus(),await t.tab({shift:!0}),await n(a.getByRole("button",{name:"기록 연동"})).toHaveFocus(),await t.tab(),await n(a.getByRole("button",{name:"장부 메뉴 닫기"})).toHaveFocus(),await t.keyboard("{Escape}"),await n(e.onDismiss).toHaveBeenCalledOnce()}},c={play:async({args:e,canvas:a,userEvent:t})=>{await t.click(a.getByRole("button",{name:"백업 및 공유"})),await n(e.onBackupAndShare).toHaveBeenCalledOnce()}},i={play:async({args:e,canvas:a,userEvent:t})=>{await t.click(a.getByRole("button",{name:"장부 메뉴 닫기"})),await n(e.onDismiss).toHaveBeenCalledOnce()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const f=["Open","Keyboard","SelectBackupAndShare","Dismiss"];export{i as Dismiss,r as Keyboard,s as Open,c as SelectBackupAndShare,f as __namedExportsOrder,h as default};
