import{j as a,s as j}from"./theme-CDuz6VZs.js";import"./cashflow-sankey-8Ihdwqu5.js";import{S as C,A as s,u as l,C as o,d,I as B,f as r,V as w}from"./components-DHLIZEWz.js";import{C as S}from"./choice-field.web-DONmwnIN.js";import{D as T}from"./date-field.web-CFiULerI.js";import{F as f}from"./feedback-CJJb2AmP.js";import"./iframe-DcJx8gya.js";import"./preload-helper-DhRmtqSx.js";function O(e){const n=e.candidates.find(t=>t.id===e.selected);return a.jsxs(C,{children:[a.jsx(s,{style:l.title,children:e.editing?"카드 취소 수정":"카드 승인 취소"}),a.jsx(s,{style:l.subtitle,children:"원 승인 이력은 유지하고, 확인한 금액만 카드 부채와 취소월 지출에서 차감합니다."}),a.jsx(f,{value:e.feedback}),e.loading?a.jsx(s,{role:"status",style:l.subtitle,children:"취소 초안을 불러오고 있어요."}):e.savedId?a.jsxs(o,{children:[a.jsx(s,{style:l.value,children:"이미 저장된 취소 기록입니다."}),a.jsx(d,{label:"확정한 취소 기록 보기",onPress:e.onOpenSaved}),e.onCleanup?a.jsx(d,{label:"남은 취소 초안 정리",variant:"secondary",onPress:e.onCleanup,disabled:e.busy}):null]}):e.unavailable?null:a.jsxs(a.Fragment,{children:[!e.editing&&e.searchable!==!1?a.jsx(B,{label:"원 승인 검색",value:e.query,onChangeText:e.onQuery,placeholder:"가맹점 이름으로 찾기",editable:!e.busy}):null,e.cardHint?a.jsxs(s,{style:l.helper,children:["초안 카드 정보: ",e.cardHint," · 실제 계정과 원 승인을 비교하세요."]}):null,a.jsxs(s,{role:"status",style:l.label,children:["원 승인 후보 ",e.candidates.length,"건"]}),e.candidates.length?a.jsx(S,{label:"원 승인 선택",value:e.selected,options:[{value:"",label:"원 승인을 선택해주세요"},...e.candidates.map(t=>({value:t.id,label:`${t.merchant} · ${t.date} · ${t.card} · 승인 ${r(t.original)} / 잔여 ${r(t.remaining)}`}))],onChange:e.onSelect,disabled:e.busy||e.editing}):a.jsxs(o,{children:[a.jsx(s,{style:l.value,children:"연결할 원 승인이 없습니다."}),a.jsx(s,{style:l.subtitle,children:"가맹점 검색을 바꾸거나 원 카드 지출을 먼저 확인하세요. 초안은 그대로 유지됩니다."})]}),n?a.jsx(o,{children:a.jsxs(w,{style:{gap:j.sm},children:[a.jsxs(s,{style:l.value,children:[n.merchant," · ",n.card]}),a.jsxs(s,{style:l.subtitle,children:["원 승인 ",r(n.original)]}),a.jsxs(s,{style:l.subtitle,children:["기존 취소 누계 ",r(n.cancelled)]}),a.jsxs(s,{style:l.value,children:["남은 취소 가능 금액 ",r(n.remaining)]})]})}):null,a.jsx(o,{children:a.jsxs(w,{style:{gap:j.md},children:[a.jsx(B,{label:"취소 금액",value:e.amount,onChangeText:e.onAmount,keyboardType:"number-pad",suffix:"원",editable:!e.busy}),a.jsx(T,{label:"취소일",value:e.date,onChange:e.onDate,disabled:e.busy}),a.jsx(B,{label:"취소 메모",value:e.note,onChangeText:e.onNote,maxLength:2e3,multiline:!0,editable:!e.busy}),a.jsx(d,{label:"취소 기록 저장",onPress:e.onSave,loading:e.busy,disabled:e.busy||!n})]})})]}),a.jsx(d,{label:"취소 검토 닫기",variant:"secondary",onPress:e.onCancel,disabled:e.busy})]})}const{expect:i,fn:c}=__STORYBOOK_MODULE_TEST__,h={id:"approval",merchant:"식당",card:"생활 카드",date:"2026-10-15",original:1e4,cancelled:3e3,remaining:7e3},_={title:"Screens/Cancellation",component:O,args:{candidates:[h],selected:h.id,query:"식당",amount:"2000",date:"2026-11-01",note:"",onSelect:c(),onQuery:c(),onAmount:c(),onDate:c(),onNote:c(),onSave:c(),onCancel:c(),onOpenSaved:c()}},u={play:async({args:e,canvas:n,userEvent:t})=>{await i(n.getByText("남은 취소 가능 금액 7,000원")).toBeVisible(),await t.click(n.getByRole("button",{name:"취소 기록 저장"})),await i(e.onSave).toHaveBeenCalledOnce()}},m={args:{candidates:[h,{...h,id:"second",date:"2026-10-16"}],selected:""},play:async({args:e,canvas:n,userEvent:t})=>{await t.selectOptions(n.getByLabelText("원 승인 선택"),"second"),await i(e.onSelect).toHaveBeenCalledWith("second")}},y={args:{candidates:[],selected:""},play:async({canvas:e})=>{await i(e.getByText("연결할 원 승인이 없습니다.")).toBeVisible(),await i(e.getByRole("button",{name:"취소 기록 저장"})).toHaveAttribute("aria-disabled","true")}},g={args:{amount:"8000",feedback:{tone:"error",title:"카드 취소 저장 오류",message:"취소 누계가 원 승인 금액을 넘습니다. 남은 금액을 확인해주세요."}},play:async({canvas:e})=>{await i(e.getByRole("alert")).toHaveTextContent("취소 누계"),await i(e.getByLabelText("취소 금액")).toHaveValue("8000")}},b={args:{loading:!0}},x={args:{savedId:"refund"},play:async({args:e,canvas:n,userEvent:t})=>{await i(n.queryByLabelText("취소 금액")).not.toBeInTheDocument(),await t.click(n.getByRole("button",{name:"확정한 취소 기록 보기"})),await i(e.onOpenSaved).toHaveBeenCalledOnce()}},v={args:{editing:!0},play:async({canvas:e})=>{await i(e.getByLabelText("원 승인 선택")).toBeDisabled()}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByText('남은 취소 가능 금액 7,000원')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', {
      name: '취소 기록 저장'
    }));
    await expect(args.onSave).toHaveBeenCalledOnce();
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    candidates: [candidate, {
      ...candidate,
      id: 'second',
      date: '2026-10-16'
    }],
    selected: ''
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.selectOptions(canvas.getByLabelText('원 승인 선택'), 'second');
    await expect(args.onSelect).toHaveBeenCalledWith('second');
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    candidates: [],
    selected: ''
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('연결할 원 승인이 없습니다.')).toBeVisible();
    await expect(canvas.getByRole('button', {
      name: '취소 기록 저장'
    })).toHaveAttribute('aria-disabled', 'true');
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    amount: '8000',
    feedback: {
      tone: 'error',
      title: '카드 취소 저장 오류',
      message: '취소 누계가 원 승인 금액을 넘습니다. 남은 금액을 확인해주세요.'
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('alert')).toHaveTextContent('취소 누계');
    await expect(canvas.getByLabelText('취소 금액')).toHaveValue('8000');
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    savedId: 'refund'
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await expect(canvas.queryByLabelText('취소 금액')).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: '확정한 취소 기록 보기'
    }));
    await expect(args.onOpenSaved).toHaveBeenCalledOnce();
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    editing: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByLabelText('원 승인 선택')).toBeDisabled();
  }
}`,...v.parameters?.docs?.source}}};const A=["Partial","Multiple","NoCandidate","OverLimit","Loading","Committed","Editing"];export{x as Committed,v as Editing,b as Loading,m as Multiple,y as NoCandidate,g as OverLimit,u as Partial,A as __namedExportsOrder,_ as default};
