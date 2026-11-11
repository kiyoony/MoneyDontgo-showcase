import{c as X}from"./book-scenarios-C5IhzNz1.js";import{j as t,s as m,p as f}from"./theme-B2QsN4Sz.js";import{r as d}from"./iframe-Doe5r-is.js";import"./cashflow-sankey-D85FpS-d.js";import{S as Z,V as g,A as l,u,d as y,C as ee,M as D,I as q,e as ae,s as te}from"./components-DvscOU_I.js";import{C as ne}from"./choice-field.web--ffNIiid.js";import{D as re}from"./date-field.web-DLTSZKek.js";import{F as oe}from"./feedback-DhmHDcnB.js";import{C as se}from"./capture-category-chips-6qaPlLcg.js";import{I as ie}from"./inline-category-picker-D5o4zmwy.js";import{b as ce}from"./calendar-DHZANot5.js";import"./preload-helper-DhRmtqSx.js";import"./app-symbol.web-BTz7z5QG.js";import"./category-B3c2Fc3d.js";import"./cancellation-B33q6obR.js";var le={OS:"web"};function de(a,r){return a.filter(o=>!o.archived&&(r!=="card-payment"||o.kind==="bank")&&(r!=="income"||!["credit-card","loan","other-liability"].includes(o.kind)))}let pe;typeof window<"u"&&window.addEventListener("popstate",a=>pe?.(a),!0);const ue=d.createContext({register:a=>()=>{},leave:(a,r=!1)=>a(),finish:a=>a(),isApproved:()=>!1,protectedRoute:!1}),me=()=>d.useContext(ue);function ge(a,r,o=!1){const b=me();return d.useEffect(()=>b.register({dirty:a,busy:r,retained:o}),[a,r,o,b.register]),b.leave}function ye({inputRetained:a=!1,demo:r=!1,accounts:o,onOpenDrafts:b,onOpenTransfer:V,onOpenTransaction:h,categories:_,householdId:L,householdName:F,quickCategoryIds:Y,hasRecentCategories:$,canCreateCategories:z,state:e,dispatch:i,platform:A=le.OS}){const N=d.useRef(null),M=d.useRef(null);d.useEffect(()=>{e.amountError&&M.current?.focus()},[e.amountError]);const C=JSON.stringify([e.kind,e.amount,e.merchant,e.note,e.date,e.account,e.categorySelection==="manual"?e.categoryId:void 0]),[G,J]=d.useState(C);d.useEffect(()=>{e.feedback?.tone!=="error"&&J(C)},[e.draftId,e.lastSavedId]),d.useEffect(()=>{e.feedback?.tone==="success"&&J(C)},[e.feedback]);const K=ge(C!==G&&!e.committedTransactionId,!!e.pending,a),P=e.kind==="income"?{label:"수입처",placeholder:"수입을 받은 곳",helper:"비워두면 확인이 필요한 초안으로 저장됩니다."}:{label:"사용처",placeholder:"결제하거나 사용한 곳",helper:"비워두면 확인이 필요한 초안으로 저장됩니다."};return t.jsxs(Z,{children:[t.jsxs(g,{style:s.heading,children:[t.jsx(l,{style:u.title,children:"거래 기록"}),t.jsx(l,{style:u.subtitle,children:"금액과 분류만 고르면 바로 기록할 수 있어요."})]}),e.committedTransactionId?t.jsxs(g,{style:{gap:m.sm},children:[t.jsx(l,{role:"status",style:u.subtitle,children:"이미 장부에 확정된 초안입니다."}),h?t.jsx(y,{label:"이미 확정한 기록 보기",onPress:()=>h(e.committedTransactionId)}):null]}):null,e.lastSavedId&&h?t.jsx(y,{label:"방금 기록 보기",variant:"secondary",onPress:()=>h(e.lastSavedId)}):null,b?t.jsx(y,{label:"초안 보관함 열기",variant:"secondary",onPress:()=>K(b)}):null,V?t.jsx(y,{label:"이체·카드납부 기록",variant:"secondary",onPress:()=>K(V)}):null,e.committedTransactionId?null:t.jsxs(ee,{style:s.form,children:[t.jsx(g,{style:s.kindSwitch,accessibilityRole:"radiogroup",accessibilityLabel:"거래 종류",children:["expense","income"].map(n=>{const x=e.kind===n,U=n==="expense"?"지출":"수입";return t.jsx(D,{disabled:!!e.pending,accessibilityRole:"radio",accessibilityLabel:`${U} 선택`,"aria-checked":x,onPress:()=>i({type:"kindChanged",kind:n}),style:({pressed:Q})=>[s.kindOption,x&&s.kindOptionSelected,Q&&s.pressed],children:t.jsx(l,{style:[u.value,x&&s.kindOptionTextSelected],children:U})},n)})}),t.jsx(q,{ref:M,editable:!e.pending,error:e.amountError,style:{textAlign:"right",fontVariant:["tabular-nums"]},label:"금액",value:e.amount,onChangeText:n=>i({type:"amountChanged",value:n}),keyboardType:"number-pad",placeholder:"12,500",suffix:"원",helper:A==="web"?"원 단위 · Enter로 저장":"원 단위로 입력하세요.",onSubmitEditing:A==="web"?()=>i({type:"saveLedgerRequested"}):void 0}),t.jsx(D,{accessibilityRole:"button",accessibilityLabel:"장부 저장 버튼으로 건너뛰기",onPress:()=>N.current?.focus(),style:s.detailsToggle,children:t.jsx(l,{style:s.detailsText,children:"저장 버튼으로 건너뛰기"})}),t.jsx(re,{label:"거래일",value:e.date,onChange:n=>i({type:"dateChanged",value:n}),disabled:!!e.pending,error:e.dateError}),t.jsx(ne,{label:e.kind==="income"?"입금 계정":"결제 계정",value:e.account,options:[{value:"",label:"계정을 선택해주세요"},...de(o,e.kind).map(n=>({value:n.id,label:n.name}))],onChange:n=>i({type:"accountChanged",value:n}),disabled:!!e.pending}),t.jsxs(g,{style:s.field,children:[L&&$?t.jsxs(g,{style:s.recent,children:[t.jsx(l,{style:u.label,children:"최근 사용한 분류"}),t.jsx(se,{disabled:!!e.pending,categories:_,categoryIds:Y,selectedId:e.categoryId,mode:"recent",onSelect:n=>i({type:"categoryChanged",value:n})})]}):null,t.jsx(l,{style:u.helper,children:"선택하지 않으면 미분류로 기록됩니다."}),L?t.jsx(ie,{disabled:!!e.pending,categories:_,householdId:L,kind:e.kind,value:e.categoryId,canCreate:z,onChange:n=>i({type:"categoryChanged",value:n}),onCreate:(n,x)=>i({type:"categoryCreateRequested",name:n,parentCategoryId:x})}):t.jsx(l,{style:u.subtitle,children:"장부를 준비하고 있어요."})]}),t.jsx(D,{disabled:!!e.pending,accessibilityRole:"button",accessibilityLabel:e.detailsExpanded?"상세 입력 접기":"상세 입력 열기",accessibilityState:{expanded:e.detailsExpanded},onPress:()=>i({type:"detailsToggled"}),style:({pressed:n})=>[s.detailsToggle,n&&s.pressed],children:t.jsxs(l,{style:s.detailsText,children:["상세 입력 ",e.detailsExpanded?"접기":"열기"]})}),e.detailsExpanded?t.jsxs(g,{style:s.details,children:[t.jsx(q,{editable:!e.pending,label:P.label,maxLength:160,value:e.merchant,onChangeText:n=>i({type:"merchantChanged",value:n}),placeholder:P.placeholder,helper:P.helper}),t.jsx(q,{editable:!e.pending,label:"메모",value:e.note,maxLength:2e3,onChangeText:n=>i({type:"noteChanged",value:n}),placeholder:"거래에 남길 내용",multiline:!0})]}):null]}),F?t.jsxs(l,{style:u.label,children:["저장 위치 · ",F]}):null,t.jsx(oe,{value:e.feedback}),t.jsxs(g,{style:s.actions,children:[A==="android"?t.jsx(y,{disabled:!!e.pending||!!e.committedTransactionId,label:"카드 알림에서 가져오기",variant:"secondary",onPress:()=>i({type:"androidImportRequested"})}):null,t.jsx(y,{disabled:!!e.pending||!!e.committedTransactionId,loading:e.pending==="draft",label:r?"데모 초안 저장":"기기에 초안 저장",variant:"secondary",onPress:()=>i({type:"saveDraftRequested"})}),t.jsx(y,{ref:N,disabled:!!e.pending||!!e.committedTransactionId,loading:e.pending==="ledger",label:r?"데모 장부에 저장":"내 장부에 저장",onPress:()=>i({type:"saveLedgerRequested"})})]}),t.jsx(ae,{title:"개인정보 보호",children:r?"데모 입력은 이 세션에서만 유지됩니다. 기기에 저장되거나 클라우드에 공유되지 않습니다.":"알림 원문은 저장하지 않습니다. 금액과 거래 상대처럼 정규화된 초안만 기기에 남습니다."})]})}const s=te.create({heading:{gap:m.sm},form:{gap:m.md},field:{gap:m.sm},recent:{gap:m.sm},actions:{gap:m.sm},kindSwitch:{flexDirection:"row",padding:4,gap:4,backgroundColor:f.primarySoft,borderRadius:14},kindOption:{flex:1,minHeight:44,alignItems:"center",justifyContent:"center",borderRadius:10},kindOptionSelected:{backgroundColor:f.primary},kindOptionTextSelected:{color:f.onPrimary},detailsToggle:{minHeight:44,justifyContent:"center",alignItems:"center"},detailsText:{color:f.primary,fontWeight:"600"},details:{gap:m.md,borderTopWidth:1,borderTopColor:f.border,paddingTop:m.md},pressed:{opacity:.8}});function p(a={}){const r=a.occurredAt??new Date().toISOString();return Number.isFinite(new Date(r).getTime())?{kind:"expense",amount:"",merchant:"",note:"",date:ce(r),categoryId:void 0,categorySelection:"auto",account:"card",detailsExpanded:!1,draftId:null,occurredAt:r,source:"manual",pending:null,...a}:p({...a,occurredAt:new Date().toISOString(),date:"",dateError:"실제 거래일을 입력해주세요."})}const{expect:c,fn:W}=__STORYBOOK_MODULE_TEST__,v=X(),He={title:"Screens/Capture",component:ye,args:{accounts:v.accounts,categories:v.categories,householdId:v.book.id,quickCategoryIds:v.categories.filter(a=>a.kind==="expense"&&!a.parentCategoryId).slice(0,5).map(a=>a.id),hasRecentCategories:!0,canCreateCategories:!0,state:p({amount:"12,500",categoryId:v.categories.find(a=>a.kind==="expense")?.id}),dispatch:W(),platform:"web"},argTypes:{categories:{control:"object"},householdId:{control:"text"},quickCategoryIds:{control:"object"},hasRecentCategories:{control:"boolean"},canCreateCategories:{control:"boolean"},state:{control:"object"},dispatch:{control:!1},platform:{control:"select",options:["android","ios","web"]}}},S={play:async({args:a,canvas:r,userEvent:o})=>{await o.click(r.getByRole("button",{name:"내 장부에 저장"})),await c(a.dispatch).toHaveBeenCalledWith({type:"saveLedgerRequested"})}},T={args:{onOpenTransfer:W()},play:async({args:a,canvas:r,userEvent:o})=>{await o.click(r.getByRole("button",{name:"이체·카드납부 기록"})),await c(a.onOpenTransfer).toHaveBeenCalledOnce()}},k={args:{state:p({kind:"income",amount:"3,000,000",account:"bank"}),quickCategoryIds:[],hasRecentCategories:!1}},w={args:{state:p({amount:"12,500",detailsExpanded:!0,merchant:"우리동네 마트"})}},I={args:{householdId:void 0,hasRecentCategories:!1}},R={args:{platform:"android"},play:async({args:a,canvas:r,userEvent:o})=>{await o.click(r.getByRole("button",{name:"카드 알림에서 가져오기"})),await c(a.dispatch).toHaveBeenCalledWith({type:"androidImportRequested"})}},j={args:{state:p({committedTransactionId:"capture-draft",draftId:"draft"}),onOpenTransaction:W()},play:async({args:a,canvas:r,userEvent:o})=>{await c(r.queryByLabelText("금액")).not.toBeInTheDocument(),await c(r.getByRole("button",{name:"내 장부에 저장"})).toHaveAttribute("aria-disabled","true"),await o.click(r.getByRole("button",{name:"이미 확정한 기록 보기"})),await c(a.onOpenTransaction).toHaveBeenCalledWith("capture-draft")}},E={args:{state:p({amount:"0",amountError:"0보다 큰 원 단위 금액을 입력해주세요."})},play:async({canvas:a})=>{await c(a.getByRole("alert")).toHaveTextContent("0보다 큰 원 단위 금액")}},B={args:{state:p({amount:"5000",pending:"ledger"})},play:async({canvas:a})=>{await c(a.getByRole("button",{name:"내 장부에 저장"})).toHaveAttribute("aria-disabled","true"),await c(a.getByLabelText("금액")).toHaveAttribute("readOnly")}},H={args:{state:p({feedback:{tone:"success",title:"내 장부에 저장됨",message:"확인한 거래가 홈과 월결산에 반영되었습니다."}})},play:async({canvas:a})=>{await c(a.getByRole("status")).toHaveTextContent("내 장부에 저장됨"),await c(a.getByLabelText("금액")).toHaveValue("")}},O={args:{state:p({amount:"5000",merchant:"마트",detailsExpanded:!0,feedback:{tone:"error",title:"거래 저장 오류",message:"입력을 유지했습니다. 다시 시도해주세요."}})},play:async({canvas:a})=>{await c(a.getByRole("alert")).toHaveTextContent("거래 저장 오류"),await c(a.getByLabelText("금액")).toHaveValue("5000"),await c(a.getByLabelText("사용처")).toHaveValue("마트")}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      kind: 'income',
      amount: '3,000,000',
      account: 'bank'
    }),
    quickCategoryIds: [],
    hasRecentCategories: false
  }
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      amount: '12,500',
      detailsExpanded: true,
      merchant: '우리동네 마트'
    })
  }
}`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    householdId: undefined,
    hasRecentCategories: false
  }
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const Oe=["Expense","TransferEntry","Income","DetailsExpanded","NoHousehold","Android","CommittedDraft","InvalidAmount","Saving","Saved","SaveFailed"];export{R as Android,j as CommittedDraft,w as DetailsExpanded,S as Expense,k as Income,E as InvalidAmount,I as NoHousehold,O as SaveFailed,H as Saved,B as Saving,T as TransferEntry,Oe as __namedExportsOrder,He as default};
