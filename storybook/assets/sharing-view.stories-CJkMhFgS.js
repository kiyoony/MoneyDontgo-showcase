import{j as e,s as g}from"./theme-CDuz6VZs.js";import"./cashflow-sankey-8Ihdwqu5.js";import{S,V as x,A as t,u as a,C as y,d as h,e as j,s as O}from"./components-DHLIZEWz.js";import"./iframe-DcJx8gya.js";import"./preload-helper-DhRmtqSx.js";function v({displayName:s,demoSessionEnabled:n,onToggleSignIn:i,children:d}){const u=n?"데모 장부 둘러보기":"기기 저장 및 파일 백업",l=n?"데모로 로그인":"백업·공유 로그인",m=n?"데모 장부는 예시 데이터를 보여주며, 변경 내용은 이 세션에서만 유지됩니다.":"개인 장부는 로그인 없이 이 기기에 그대로 저장됩니다.";return e.jsxs(S,{children:[e.jsxs(x,{style:p.heading,children:[e.jsx(t,{style:a.title,children:u}),e.jsx(t,{style:a.subtitle,children:n?"예시 거래와 결산을 둘러볼 수 있어요.":"클라우드 연결 없이 이 기기에 저장합니다."})]}),e.jsxs(y,{style:p.card,children:[e.jsx(t,{style:a.value,children:s?`${s} · 데모 장부`:"아직 연결하지 않았어요"}),e.jsx(t,{style:a.subtitle,children:s?n?"이 세션에서 추가한 내용은 로그아웃하거나 새로 열면 초기화됩니다.":"클라우드 백업과 가족 공유는 아직 연결되지 않았습니다.":m}),n?e.jsx(h,{accessibilityLabel:s?"데모 로그아웃":l,label:s?"로그아웃":l,variant:s?"secondary":"primary",onPress:i}):e.jsx(t,{style:a.helper,children:"현재 실제 계정 로그인·클라우드 동기화는 지원하지 않습니다."})]}),s?null:e.jsx(j,{title:"로그인 없이도 사용할 수 있어요",children:n?"내 장부는 이 기기에 저장되며, 데모 장부와 섞이지 않습니다.":"거래와 카테고리는 이 기기에 저장됩니다. 다른 사람과 함께 보거나 백업할 때만 로그인하세요."}),d]})}const p=O.create({heading:{gap:g.sm},card:{gap:g.md}}),{expect:T,fn:f}=__STORYBOOK_MODULE_TEST__,A={title:"Screens/Sharing",component:v,args:{displayName:void 0,demoSessionEnabled:!0,onToggleSignIn:f()},argTypes:{displayName:{control:"text"},demoSessionEnabled:{control:"boolean"},onToggleSignIn:{control:!1}}},r={play:async({args:s,canvas:n,userEvent:i})=>{await i.click(n.getByRole("button",{name:"데모로 로그인"})),await T(s.onToggleSignIn).toHaveBeenCalledOnce()}},o={args:{displayName:"데모 사용자"}},c={args:{demoSessionEnabled:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '데모로 로그인'
    }));
    await expect(args.onToggleSignIn).toHaveBeenCalledOnce();
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    displayName: '데모 사용자'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    demoSessionEnabled: false
  }
}`,...c.parameters?.docs?.source}}};const k=["SignedOut","SignedIn","BackupAndShare"];export{c as BackupAndShare,o as SignedIn,r as SignedOut,k as __namedExportsOrder,A as default};
