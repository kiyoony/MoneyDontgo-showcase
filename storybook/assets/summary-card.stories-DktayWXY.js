import{n as e}from"./iframe-BtfsOyvk.js";import{t}from"./jsx-runtime-CYW6yHk2.js";import{c as n,i as r,n as i,s as a,t as o,u as s}from"./components-DS5ILFUn.js";import{n as c}from"./rolldown-runtime-C0FnF6B9.js";var l,u,d,f,p,m,h,g,_,v;function y(){return(y=c((()=>{l=e(),s(),u=t(),d={component:n},f={args:{label:`8월 수입`,amount:362e4,tone:`income`}},p={args:{label:`8월 지출`,amount:1429300,tone:`expense`}},m={args:{label:`이번 달 지출`,amount:0}},h={args:{label:``,amount:0},render:()=>{let[e,t]=(0,l.useState)(0);return(0,u.jsx)(o,{label:`저장한 거래 ${e}건`,actionLabel:`거래 추가`,onAction:()=>t(e=>e+1)})}},g={args:{label:``,amount:0},render:()=>{let[e,t]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:12,maxWidth:360},children:[(0,u.jsx)(i,{label:e?`저장됨`:`거래 저장`,onPress:()=>t(!0)}),(0,u.jsx)(i,{label:`임시 저장`,variant:`secondary`,onPress:()=>t(!1)}),(0,u.jsx)(i,{label:`삭제`,variant:`danger`,onPress:()=>t(!1)}),(0,u.jsx)(i,{label:`저장 중`,loading:!0,onPress:()=>void 0})]})}},_={args:{label:``,amount:0},render:()=>{let[e,t]=(0,l.useState)(``);return(0,u.jsxs)(`div`,{style:{display:`grid`,gap:16,maxWidth:360},children:[(0,u.jsx)(r,{label:`금액`,value:e,onChangeText:t,keyboardType:`number-pad`,placeholder:`12,500`,suffix:`원`,helper:`원 단위로 입력하세요.`}),(0,u.jsx)(r,{label:`사용처`,value:``,onChangeText:()=>void 0,error:`사용처를 확인해 주세요.`}),(0,u.jsx)(a,{title:`데모 데이터 안내`,children:`로그인하면 공유 장부를 확인할 수 있습니다.`}),(0,u.jsx)(a,{title:`저장에 실패했습니다`,tone:`danger`,children:`네트워크를 확인한 뒤 다시 시도해 주세요.`})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: '8월 수입',
    amount: 3_620_000,
    tone: 'income'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: '8월 지출',
    amount: 1_429_300,
    tone: 'expense'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: '이번 달 지출',
    amount: 0
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: '',
    amount: 0
  },
  render: () => {
    const [count, setCount] = useState(0);
    return <ActionCard label={\`저장한 거래 \${count}건\`} actionLabel="거래 추가" onAction={() => setCount(value => value + 1)} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: '',
    amount: 0
  },
  render: () => {
    const [saved, setSaved] = useState(false);
    return <div style={{
      display: 'grid',
      gap: 12,
      maxWidth: 360
    }}>
      <AppButton label={saved ? '저장됨' : '거래 저장'} onPress={() => setSaved(true)} />
      <AppButton label="임시 저장" variant="secondary" onPress={() => setSaved(false)} />
      <AppButton label="삭제" variant="danger" onPress={() => setSaved(false)} />
      <AppButton label="저장 중" loading onPress={() => undefined} />
    </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: '',
    amount: 0
  },
  render: () => {
    const [amount, setAmount] = useState('');
    return <div style={{
      display: 'grid',
      gap: 16,
      maxWidth: 360
    }}>
      <InputField label="금액" value={amount} onChangeText={setAmount} keyboardType="number-pad" placeholder="12,500" suffix="원" helper="원 단위로 입력하세요." />
      <InputField label="사용처" value="" onChangeText={() => undefined} error="사용처를 확인해 주세요." />
      <StatusNotice title="데모 데이터 안내">로그인하면 공유 장부를 확인할 수 있습니다.</StatusNotice>
      <StatusNotice title="저장에 실패했습니다" tone="danger">네트워크를 확인한 뒤 다시 시도해 주세요.</StatusNotice>
    </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Income`,`Expense`,`Empty`,`Action`,`ButtonStates`,`FormAndNotice`]})))()}y();export{h as Action,g as ButtonStates,m as Empty,p as Expense,_ as FormAndNotice,f as Income,v as __namedExportsOrder,d as default};