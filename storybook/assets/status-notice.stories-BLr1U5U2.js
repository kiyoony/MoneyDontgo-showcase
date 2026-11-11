import{e as n}from"./components-DvscOU_I.js";import"./theme-B2QsN4Sz.js";import"./iframe-Doe5r-is.js";import"./preload-helper-DhRmtqSx.js";const i={title:"Primitives/StatusNotice",component:n,args:{title:"데모 데이터 안내",tone:"info",children:"로그인하면 공유 장부를 확인할 수 있습니다."},argTypes:{title:{control:"text"},tone:{control:"select",options:["info","warning","danger"]},children:{control:"text"}}},r={},e={args:{title:"확인이 필요합니다",tone:"warning"}},t={args:{title:"저장에 실패했습니다",tone:"danger",children:"네트워크를 확인한 뒤 다시 시도해 주세요."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: '확인이 필요합니다',
    tone: 'warning'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: '저장에 실패했습니다',
    tone: 'danger',
    children: '네트워크를 확인한 뒤 다시 시도해 주세요.'
  }
}`,...t.parameters?.docs?.source}}};const d=["Playground","Warning","Danger"];export{t as Danger,r as Playground,e as Warning,d as __namedExportsOrder,i as default};
