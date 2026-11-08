import{c as $}from"./book-scenarios-C5IhzNz1.js";import{j as a,s as u,p as b}from"./theme-B2QsN4Sz.js";import"./cashflow-sankey-uokYedbH.js";import{S as z,V as m,A as c,u as p,d as g,C as G,M as L,I as A,e as J,s as Q}from"./components-BR6b8uV5.js";import{C as X}from"./choice-field.web--ffNIiid.js";import{D as Z}from"./date-field.web-bjqh7If7.js";import{r as q}from"./iframe-Bt0wZtCA.js";import{F as ee}from"./feedback-G2L1c7_T.js";import{C as ae}from"./capture-category-chips-BMhPJonb.js";import{I as te}from"./inline-category-picker-Df7lg3zE.js";import{b as ne}from"./calendar-DHZANot5.js";import"./preload-helper-DhRmtqSx.js";import"./app-symbol.web-BTz7z5QG.js";import"./category-B3c2Fc3d.js";import"./cancellation-B33q6obR.js";var re={OS:"web"};function se(t,r){return t.filter(o=>!o.archived&&(r!=="card-payment"||o.kind==="bank")&&(r!=="income"||!["credit-card","loan","other-liability"].includes(o.kind)))}function oe({demo:t=!1,accounts:r,onOpenDrafts:o,onOpenTransfer:P,onOpenTransaction:v,categories:V,householdId:E,householdName:F,quickCategoryIds:M,hasRecentCategories:K,canCreateCategories:U,state:e,dispatch:i,platform:H=re.OS}){const W=q.useRef(null),_=q.useRef(null);q.useEffect(()=>{e.amountError&&_.current?.focus()},[e.amountError]);const O=e.kind==="income"?{label:"수입처",placeholder:"수입을 받은 곳",helper:"비워두면 확인이 필요한 초안으로 저장됩니다."}:{label:"사용처",placeholder:"결제하거나 사용한 곳",helper:"비워두면 확인이 필요한 초안으로 저장됩니다."};return a.jsxs(z,{children:[a.jsxs(m,{style:s.heading,children:[a.jsx(c,{style:p.title,children:"거래 기록"}),a.jsx(c,{style:p.subtitle,children:"금액과 분류만 고르면 바로 기록할 수 있어요."})]}),e.committedTransactionId?a.jsxs(m,{style:{gap:u.sm},children:[a.jsx(c,{role:"status",style:p.subtitle,children:"이미 장부에 확정된 초안입니다."}),v?a.jsx(g,{label:"이미 확정한 기록 보기",onPress:()=>v(e.committedTransactionId)}):null]}):null,e.lastSavedId&&v?a.jsx(g,{label:"방금 기록 보기",variant:"secondary",onPress:()=>v(e.lastSavedId)}):null,o?a.jsx(g,{label:"초안 보관함 열기",variant:"secondary",onPress:o}):null,P?a.jsx(g,{label:"이체·카드납부 기록",variant:"secondary",onPress:P}):null,e.committedTransactionId?null:a.jsxs(G,{style:s.form,children:[a.jsx(m,{style:s.kindSwitch,accessibilityRole:"radiogroup",accessibilityLabel:"거래 종류",children:["expense","income"].map(n=>{const y=e.kind===n,N=n==="expense"?"지출":"수입";return a.jsx(L,{disabled:!!e.pending,accessibilityRole:"radio",accessibilityLabel:`${N} 선택`,"aria-checked":y,onPress:()=>i({type:"kindChanged",kind:n}),style:({pressed:Y})=>[s.kindOption,y&&s.kindOptionSelected,Y&&s.pressed],children:a.jsx(c,{style:[p.value,y&&s.kindOptionTextSelected],children:N})},n)})}),a.jsx(A,{ref:_,editable:!e.pending,error:e.amountError,style:{textAlign:"right",fontVariant:["tabular-nums"]},label:"금액",value:e.amount,onChangeText:n=>i({type:"amountChanged",value:n}),keyboardType:"number-pad",placeholder:"12,500",suffix:"원",helper:H==="web"?"원 단위 · Enter로 저장":"원 단위로 입력하세요.",onSubmitEditing:H==="web"?()=>i({type:"saveLedgerRequested"}):void 0}),a.jsx(L,{accessibilityRole:"button",accessibilityLabel:"장부 저장 버튼으로 건너뛰기",onPress:()=>W.current?.focus(),style:s.detailsToggle,children:a.jsx(c,{style:s.detailsText,children:"저장 버튼으로 건너뛰기"})}),a.jsx(Z,{label:"거래일",value:e.date,onChange:n=>i({type:"dateChanged",value:n}),disabled:!!e.pending,error:e.dateError}),a.jsx(X,{label:e.kind==="income"?"입금 계정":"결제 계정",value:e.account,options:[{value:"",label:"계정을 선택해주세요"},...se(r,e.kind).map(n=>({value:n.id,label:n.name}))],onChange:n=>i({type:"accountChanged",value:n}),disabled:!!e.pending}),a.jsxs(m,{style:s.field,children:[E&&K?a.jsxs(m,{style:s.recent,children:[a.jsx(c,{style:p.label,children:"최근 사용한 분류"}),a.jsx(ae,{disabled:!!e.pending,categories:V,categoryIds:M,selectedId:e.categoryId,mode:"recent",onSelect:n=>i({type:"categoryChanged",value:n})})]}):null,a.jsx(c,{style:p.helper,children:"선택하지 않으면 미분류로 기록됩니다."}),E?a.jsx(te,{disabled:!!e.pending,categories:V,householdId:E,kind:e.kind,value:e.categoryId,canCreate:U,onChange:n=>i({type:"categoryChanged",value:n}),onCreate:(n,y)=>i({type:"categoryCreateRequested",name:n,parentCategoryId:y})}):a.jsx(c,{style:p.subtitle,children:"장부를 준비하고 있어요."})]}),a.jsx(L,{disabled:!!e.pending,accessibilityRole:"button",accessibilityLabel:e.detailsExpanded?"상세 입력 접기":"상세 입력 열기",accessibilityState:{expanded:e.detailsExpanded},onPress:()=>i({type:"detailsToggled"}),style:({pressed:n})=>[s.detailsToggle,n&&s.pressed],children:a.jsxs(c,{style:s.detailsText,children:["상세 입력 ",e.detailsExpanded?"접기":"열기"]})}),e.detailsExpanded?a.jsxs(m,{style:s.details,children:[a.jsx(A,{editable:!e.pending,label:O.label,maxLength:160,value:e.merchant,onChangeText:n=>i({type:"merchantChanged",value:n}),placeholder:O.placeholder,helper:O.helper}),a.jsx(A,{editable:!e.pending,label:"메모",value:e.note,maxLength:2e3,onChangeText:n=>i({type:"noteChanged",value:n}),placeholder:"거래에 남길 내용",multiline:!0})]}):null]}),F?a.jsxs(c,{style:p.label,children:["저장 위치 · ",F]}):null,a.jsx(ee,{value:e.feedback}),a.jsxs(m,{style:s.actions,children:[H==="android"?a.jsx(g,{disabled:!!e.pending||!!e.committedTransactionId,label:"카드 알림에서 가져오기",variant:"secondary",onPress:()=>i({type:"androidImportRequested"})}):null,a.jsx(g,{disabled:!!e.pending||!!e.committedTransactionId,loading:e.pending==="draft",label:t?"데모 초안 저장":"기기에 초안 저장",variant:"secondary",onPress:()=>i({type:"saveDraftRequested"})}),a.jsx(g,{ref:W,disabled:!!e.pending||!!e.committedTransactionId,loading:e.pending==="ledger",label:t?"데모 장부에 저장":"내 장부에 저장",onPress:()=>i({type:"saveLedgerRequested"})})]}),a.jsx(J,{title:"개인정보 보호",children:t?"데모 입력은 이 세션에서만 유지됩니다. 기기에 저장되거나 클라우드에 공유되지 않습니다.":"알림 원문은 저장하지 않습니다. 금액과 거래 상대처럼 정규화된 초안만 기기에 남습니다."})]})}const s=Q.create({heading:{gap:u.sm},form:{gap:u.md},field:{gap:u.sm},recent:{gap:u.sm},actions:{gap:u.sm},kindSwitch:{flexDirection:"row",padding:4,gap:4,backgroundColor:b.primarySoft,borderRadius:14},kindOption:{flex:1,minHeight:44,alignItems:"center",justifyContent:"center",borderRadius:10},kindOptionSelected:{backgroundColor:b.primary},kindOptionTextSelected:{color:b.onPrimary},detailsToggle:{minHeight:44,justifyContent:"center",alignItems:"center"},detailsText:{color:b.primary,fontWeight:"600"},details:{gap:u.md,borderTopWidth:1,borderTopColor:b.border,paddingTop:u.md},pressed:{opacity:.8}});function d(t={}){const r=t.occurredAt??new Date().toISOString();return Number.isFinite(new Date(r).getTime())?{kind:"expense",amount:"",merchant:"",note:"",date:ne(r),categoryId:void 0,categorySelection:"auto",account:"card",detailsExpanded:!1,draftId:null,occurredAt:r,source:"manual",pending:null,...t}:d({...t,occurredAt:new Date().toISOString(),date:"",dateError:"실제 거래일을 입력해주세요."})}const{expect:l,fn:D}=__STORYBOOK_MODULE_TEST__,x=$(),Te={title:"Screens/Capture",component:oe,args:{accounts:x.accounts,categories:x.categories,householdId:x.book.id,quickCategoryIds:x.categories.filter(t=>t.kind==="expense"&&!t.parentCategoryId).slice(0,5).map(t=>t.id),hasRecentCategories:!0,canCreateCategories:!0,state:d({amount:"12,500",categoryId:x.categories.find(t=>t.kind==="expense")?.id}),dispatch:D(),platform:"web"},argTypes:{categories:{control:"object"},householdId:{control:"text"},quickCategoryIds:{control:"object"},hasRecentCategories:{control:"boolean"},canCreateCategories:{control:"boolean"},state:{control:"object"},dispatch:{control:!1},platform:{control:"select",options:["android","ios","web"]}}},h={play:async({args:t,canvas:r,userEvent:o})=>{await o.click(r.getByRole("button",{name:"내 장부에 저장"})),await l(t.dispatch).toHaveBeenCalledWith({type:"saveLedgerRequested"})}},f={args:{onOpenTransfer:D()},play:async({args:t,canvas:r,userEvent:o})=>{await o.click(r.getByRole("button",{name:"이체·카드납부 기록"})),await l(t.onOpenTransfer).toHaveBeenCalledOnce()}},C={args:{state:d({kind:"income",amount:"3,000,000",account:"bank"}),quickCategoryIds:[],hasRecentCategories:!1}},T={args:{state:d({amount:"12,500",detailsExpanded:!0,merchant:"우리동네 마트"})}},S={args:{householdId:void 0,hasRecentCategories:!1}},w={args:{platform:"android"},play:async({args:t,canvas:r,userEvent:o})=>{await o.click(r.getByRole("button",{name:"카드 알림에서 가져오기"})),await l(t.dispatch).toHaveBeenCalledWith({type:"androidImportRequested"})}},k={args:{state:d({committedTransactionId:"capture-draft",draftId:"draft"}),onOpenTransaction:D()},play:async({args:t,canvas:r,userEvent:o})=>{await l(r.queryByLabelText("금액")).not.toBeInTheDocument(),await l(r.getByRole("button",{name:"내 장부에 저장"})).toHaveAttribute("aria-disabled","true"),await o.click(r.getByRole("button",{name:"이미 확정한 기록 보기"})),await l(t.onOpenTransaction).toHaveBeenCalledWith("capture-draft")}},j={args:{state:d({amount:"0",amountError:"0보다 큰 원 단위 금액을 입력해주세요."})},play:async({canvas:t})=>{await l(t.getByRole("alert")).toHaveTextContent("0보다 큰 원 단위 금액")}},R={args:{state:d({amount:"5000",pending:"ledger"})},play:async({canvas:t})=>{await l(t.getByRole("button",{name:"내 장부에 저장"})).toHaveAttribute("aria-disabled","true"),await l(t.getByLabelText("금액")).toHaveAttribute("readOnly")}},I={args:{state:d({feedback:{tone:"success",title:"내 장부에 저장됨",message:"확인한 거래가 홈과 월결산에 반영되었습니다."}})},play:async({canvas:t})=>{await l(t.getByRole("status")).toHaveTextContent("내 장부에 저장됨"),await l(t.getByLabelText("금액")).toHaveValue("")}},B={args:{state:d({amount:"5000",merchant:"마트",detailsExpanded:!0,feedback:{tone:"error",title:"거래 저장 오류",message:"입력을 유지했습니다. 다시 시도해주세요."}})},play:async({canvas:t})=>{await l(t.getByRole("alert")).toHaveTextContent("거래 저장 오류"),await l(t.getByLabelText("금액")).toHaveValue("5000"),await l(t.getByLabelText("사용처")).toHaveValue("마트")}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '내 장부에 저장'
    }));
    await expect(args.dispatch).toHaveBeenCalledWith({
      type: 'saveLedgerRequested'
    });
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    onOpenTransfer: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '이체·카드납부 기록'
    }));
    await expect(args.onOpenTransfer).toHaveBeenCalledOnce();
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      kind: 'income',
      amount: '3,000,000',
      account: 'bank'
    }),
    quickCategoryIds: [],
    hasRecentCategories: false
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      amount: '12,500',
      detailsExpanded: true,
      merchant: '우리동네 마트'
    })
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    householdId: undefined,
    hasRecentCategories: false
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    platform: 'android'
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '카드 알림에서 가져오기'
    }));
    await expect(args.dispatch).toHaveBeenCalledWith({
      type: 'androidImportRequested'
    });
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      committedTransactionId: 'capture-draft',
      draftId: 'draft'
    }),
    onOpenTransaction: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await expect(canvas.queryByLabelText('금액')).not.toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: '내 장부에 저장'
    })).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(canvas.getByRole('button', {
      name: '이미 확정한 기록 보기'
    }));
    await expect(args.onOpenTransaction).toHaveBeenCalledWith('capture-draft');
  }
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      amount: '0',
      amountError: '0보다 큰 원 단위 금액을 입력해주세요.'
    })
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('alert')).toHaveTextContent('0보다 큰 원 단위 금액');
  }
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      amount: '5000',
      pending: 'ledger'
    })
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('button', {
      name: '내 장부에 저장'
    })).toHaveAttribute('aria-disabled', 'true');
    await expect(canvas.getByLabelText('금액')).toHaveAttribute('readOnly');
  }
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      feedback: {
        tone: 'success',
        title: '내 장부에 저장됨',
        message: '확인한 거래가 홈과 월결산에 반영되었습니다.'
      }
    })
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('status')).toHaveTextContent('내 장부에 저장됨');
    await expect(canvas.getByLabelText('금액')).toHaveValue('');
  }
}`,...I.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      amount: '5000',
      merchant: '마트',
      detailsExpanded: true,
      feedback: {
        tone: 'error',
        title: '거래 저장 오류',
        message: '입력을 유지했습니다. 다시 시도해주세요.'
      }
    })
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole('alert')).toHaveTextContent('거래 저장 오류');
    await expect(canvas.getByLabelText('금액')).toHaveValue('5000');
    await expect(canvas.getByLabelText('사용처')).toHaveValue('마트');
  }
}`,...B.parameters?.docs?.source}}};const Se=["Expense","TransferEntry","Income","DetailsExpanded","NoHousehold","Android","CommittedDraft","InvalidAmount","Saving","Saved","SaveFailed"];export{w as Android,k as CommittedDraft,T as DetailsExpanded,h as Expense,C as Income,j as InvalidAmount,S as NoHousehold,B as SaveFailed,I as Saved,R as Saving,f as TransferEntry,Se as __namedExportsOrder,Te as default};
