import{c as Z}from"./book-scenarios-C5IhzNz1.js";import{j as t,s as m,p as f}from"./theme-Bmk8G3Xq.js";import{r as l}from"./iframe-DcUV9DEb.js";import"./cashflow-sankey-DMHpqij8.js";import{S as ee,A as p,u as y,V as b,d as u,C as ae,M as W,I as V,h as te,s as ne}from"./components-CrgZFfWO.js";import{C as re}from"./choice-field.web-Bnoq86UW.js";import{D as oe}from"./date-field.web-CSft6MQG.js";import{F as se}from"./feedback-CK4rgOZM.js";import{C as ie}from"./capture-category-chips-Bh4-UY3Y.js";import{I as ce}from"./inline-category-picker-Ojqr8U22.js";import{b as le}from"./calendar-DHZANot5.js";import"./preload-helper-DhRmtqSx.js";import"./app-symbol.web-BQYCspdR.js";import"./category-B3c2Fc3d.js";import"./cancellation-B33q6obR.js";var de={OS:"web"};function pe(a,r){return a.filter(o=>!o.archived&&(r!=="card-payment"||o.kind==="bank")&&(r!=="income"||!["credit-card","loan","other-liability"].includes(o.kind)))}let ue;typeof window<"u"&&window.addEventListener("popstate",a=>ue?.(a),!0);const me=l.createContext({register:a=>()=>{},leave:(a,r=!1)=>a(),finish:a=>a(),isApproved:()=>!1,protectedRoute:!1}),ge=()=>l.useContext(me);function ye(a,r,o=!1){const g=ge();return l.useEffect(()=>g.register({dirty:a,busy:r,retained:o}),[a,r,o,g.register]),g.leave}function be({inputRetained:a=!1,demo:r=!1,accounts:o,onOpenDrafts:g,onOpenTransfer:F,onOpenTransaction:h,categories:N,householdId:L,householdName:A,householdType:P,quickCategoryIds:$,hasRecentCategories:z,canCreateCategories:G,state:e,dispatch:i,platform:D=de.OS}){const M=l.useRef(null),J=l.useRef(null);l.useEffect(()=>{e.amountError&&J.current?.focus()},[e.amountError]);const C=JSON.stringify([e.kind,e.amount,e.merchant,e.note,e.date,e.account,e.categorySelection==="manual"?e.categoryId:void 0]),[Q,K]=l.useState(C);l.useEffect(()=>{e.feedback?.tone!=="error"&&K(C)},[e.draftId,e.lastSavedId]),l.useEffect(()=>{e.feedback?.tone==="success"&&K(C)},[e.feedback]);const U=ye(C!==Q&&!e.committedTransactionId,!!e.pending,a),q=e.kind==="income"?{label:"수입처",placeholder:"수입을 받은 곳",helper:"비워두면 확인이 필요한 초안으로 저장됩니다."}:{label:"사용처",placeholder:"결제하거나 사용한 곳",helper:"비워두면 확인이 필요한 초안으로 저장됩니다."};return t.jsxs(ee,{children:[A?t.jsxs(p,{style:y.label,children:["저장 위치 · ",A,P&&P!==A?" · "+P:""]}):null,e.committedTransactionId?t.jsxs(b,{style:{gap:m.sm},children:[t.jsx(p,{role:"status",style:y.subtitle,children:"이미 장부에 확정된 초안입니다."}),h?t.jsx(u,{label:"이미 확정한 기록 보기",onPress:()=>h(e.committedTransactionId)}):null]}):null,e.lastSavedId&&h?t.jsx(u,{label:"방금 기록 보기",variant:"secondary",onPress:()=>h(e.lastSavedId)}):null,g?t.jsx(u,{label:"초안 보관함 열기",variant:"secondary",onPress:()=>U(g)}):null,F?t.jsx(u,{label:"이체·카드납부 기록",variant:"secondary",onPress:()=>U(F)}):null,e.committedTransactionId?null:t.jsxs(ae,{style:s.form,children:[t.jsx(b,{style:s.kindSwitch,accessibilityRole:"radiogroup",accessibilityLabel:"거래 종류",children:["expense","income"].map(n=>{const x=e.kind===n,Y=n==="expense"?"지출":"수입";return t.jsx(W,{disabled:!!e.pending,accessibilityRole:"radio",accessibilityLabel:`${Y} 선택`,"aria-checked":x,onPress:()=>i({type:"kindChanged",kind:n}),style:({pressed:X})=>[s.kindOption,x&&s.kindOptionSelected,X&&s.pressed],children:t.jsx(p,{style:[y.value,x&&s.kindOptionTextSelected],children:Y})},n)})}),t.jsx(V,{ref:J,editable:!e.pending,error:e.amountError,style:{textAlign:"right",fontVariant:["tabular-nums"]},label:"금액",value:e.amount,onChangeText:n=>i({type:"amountChanged",value:n}),keyboardType:"number-pad",placeholder:"12,500",suffix:"원",helper:D==="web"?"원 단위 · Enter로 저장":"원 단위로 입력하세요.",onSubmitEditing:D==="web"?()=>i({type:"saveLedgerRequested"}):void 0}),t.jsx(W,{accessibilityRole:"button",accessibilityLabel:"장부 저장 버튼으로 건너뛰기",onPress:()=>M.current?.focus(),style:s.detailsToggle,children:t.jsx(p,{style:s.detailsText,children:"저장 버튼으로 건너뛰기"})}),t.jsx(oe,{label:"거래일",value:e.date,onChange:n=>i({type:"dateChanged",value:n}),disabled:!!e.pending,error:e.dateError}),t.jsx(re,{label:e.kind==="income"?"입금 계정":"결제 계정",value:e.account,options:[{value:"",label:"계정을 선택해주세요"},...pe(o,e.kind).map(n=>({value:n.id,label:n.name}))],onChange:n=>i({type:"accountChanged",value:n}),disabled:!!e.pending}),t.jsxs(b,{style:s.field,children:[L&&z?t.jsxs(b,{style:s.recent,children:[t.jsx(p,{style:y.label,children:"최근 사용한 분류"}),t.jsx(ie,{disabled:!!e.pending,categories:N,categoryIds:$,selectedId:e.categoryId,mode:"recent",onSelect:n=>i({type:"categoryChanged",value:n})})]}):null,t.jsx(p,{style:y.helper,children:"선택하지 않으면 미분류로 기록됩니다."}),L?t.jsx(ce,{disabled:!!e.pending,categories:N,householdId:L,kind:e.kind,value:e.categoryId,canCreate:G,onChange:n=>i({type:"categoryChanged",value:n}),onCreate:(n,x)=>i({type:"categoryCreateRequested",name:n,parentCategoryId:x})}):t.jsx(p,{style:y.subtitle,children:"장부를 준비하고 있어요."})]}),t.jsx(W,{disabled:!!e.pending,accessibilityRole:"button",accessibilityLabel:e.detailsExpanded?"상세 입력 접기":"상세 입력 열기",accessibilityState:{expanded:e.detailsExpanded},onPress:()=>i({type:"detailsToggled"}),style:({pressed:n})=>[s.detailsToggle,n&&s.pressed],children:t.jsxs(p,{style:s.detailsText,children:["상세 입력 ",e.detailsExpanded?"접기":"열기"]})}),e.detailsExpanded?t.jsxs(b,{style:s.details,children:[t.jsx(V,{editable:!e.pending,label:q.label,maxLength:160,value:e.merchant,onChangeText:n=>i({type:"merchantChanged",value:n}),placeholder:q.placeholder,helper:q.helper}),t.jsx(V,{editable:!e.pending,label:"메모",value:e.note,maxLength:2e3,onChangeText:n=>i({type:"noteChanged",value:n}),placeholder:"거래에 남길 내용",multiline:!0})]}):null]}),t.jsx(se,{value:e.feedback}),t.jsxs(b,{style:s.actions,children:[D==="android"?t.jsx(u,{disabled:!!e.pending||!!e.committedTransactionId,label:"카드 알림에서 가져오기",variant:"secondary",onPress:()=>i({type:"androidImportRequested"})}):null,t.jsx(u,{disabled:!!e.pending||!!e.committedTransactionId,loading:e.pending==="draft",label:r?"데모 초안 저장":"기기에 초안 저장",variant:"secondary",onPress:()=>i({type:"saveDraftRequested"})}),t.jsx(u,{ref:M,disabled:!!e.pending||!!e.committedTransactionId,loading:e.pending==="ledger",label:r?"데모 장부에 저장":"내 장부에 저장",onPress:()=>i({type:"saveLedgerRequested"})})]}),t.jsx(te,{title:"개인정보 보호",children:r?"데모 입력은 이 세션에서만 유지됩니다. 기기에 저장되거나 클라우드에 공유되지 않습니다.":"알림 원문은 저장하지 않습니다. 금액과 거래 상대처럼 정규화된 초안만 기기에 남습니다."})]})}const s=ne.create({form:{gap:m.md},field:{gap:m.sm},recent:{gap:m.sm},actions:{gap:m.sm},kindSwitch:{flexDirection:"row",padding:4,gap:4,backgroundColor:f.primarySoft,borderRadius:14},kindOption:{flex:1,minHeight:44,alignItems:"center",justifyContent:"center",borderRadius:10},kindOptionSelected:{backgroundColor:f.primary},kindOptionTextSelected:{color:f.onPrimary},detailsToggle:{minHeight:44,justifyContent:"center",alignItems:"center"},detailsText:{color:f.primary,fontWeight:"600"},details:{gap:m.md,borderTopWidth:1,borderTopColor:f.border,paddingTop:m.md},pressed:{opacity:.8}});function d(a={}){const r=a.occurredAt??new Date().toISOString();return Number.isFinite(new Date(r).getTime())?{kind:"expense",amount:"",merchant:"",note:"",date:le(r),categoryId:void 0,categorySelection:"auto",account:"card",detailsExpanded:!1,draftId:null,occurredAt:r,source:"manual",pending:null,...a}:d({...a,occurredAt:new Date().toISOString(),date:"",dateError:"실제 거래일을 입력해주세요."})}const{expect:c,fn:_}=__STORYBOOK_MODULE_TEST__,v=Z(),Oe={title:"Screens/Capture",component:be,args:{accounts:v.accounts,categories:v.categories,householdId:v.book.id,quickCategoryIds:v.categories.filter(a=>a.kind==="expense"&&!a.parentCategoryId).slice(0,5).map(a=>a.id),hasRecentCategories:!0,canCreateCategories:!0,state:d({amount:"12,500",categoryId:v.categories.find(a=>a.kind==="expense")?.id}),dispatch:_(),platform:"web"},argTypes:{categories:{control:"object"},householdId:{control:"text"},quickCategoryIds:{control:"object"},hasRecentCategories:{control:"boolean"},canCreateCategories:{control:"boolean"},state:{control:"object"},dispatch:{control:!1},platform:{control:"select",options:["android","ios","web"]}}},S={play:async({args:a,canvas:r,userEvent:o})=>{await o.click(r.getByRole("button",{name:"내 장부에 저장"})),await c(a.dispatch).toHaveBeenCalledWith({type:"saveLedgerRequested"})}},k={args:{onOpenTransfer:_()},play:async({args:a,canvas:r,userEvent:o})=>{await o.click(r.getByRole("button",{name:"이체·카드납부 기록"})),await c(a.onOpenTransfer).toHaveBeenCalledOnce()}},w={args:{state:d({kind:"income",amount:"3,000,000",account:"bank"}),quickCategoryIds:[],hasRecentCategories:!1}},T={args:{state:d({amount:"12,500",detailsExpanded:!0,merchant:"우리동네 마트"})}},I={args:{householdId:void 0,hasRecentCategories:!1}},R={args:{platform:"android"},play:async({args:a,canvas:r,userEvent:o})=>{await o.click(r.getByRole("button",{name:"카드 알림에서 가져오기"})),await c(a.dispatch).toHaveBeenCalledWith({type:"androidImportRequested"})}},j={args:{state:d({committedTransactionId:"capture-draft",draftId:"draft"}),onOpenTransaction:_()},play:async({args:a,canvas:r,userEvent:o})=>{await c(r.queryByLabelText("금액")).not.toBeInTheDocument(),await c(r.getByRole("button",{name:"내 장부에 저장"})).toHaveAttribute("aria-disabled","true"),await o.click(r.getByRole("button",{name:"이미 확정한 기록 보기"})),await c(a.onOpenTransaction).toHaveBeenCalledWith("capture-draft")}},E={args:{state:d({amount:"0",amountError:"0보다 큰 원 단위 금액을 입력해주세요."})},play:async({canvas:a})=>{await c(a.getByRole("alert")).toHaveTextContent("0보다 큰 원 단위 금액")}},B={args:{state:d({amount:"5000",pending:"ledger"})},play:async({canvas:a})=>{await c(a.getByRole("button",{name:"내 장부에 저장"})).toHaveAttribute("aria-disabled","true"),await c(a.getByLabelText("금액")).toHaveAttribute("readOnly")}},H={args:{state:d({feedback:{tone:"success",title:"내 장부에 저장됨",message:"확인한 거래가 홈과 월결산에 반영되었습니다."}})},play:async({canvas:a})=>{await c(a.getByRole("status")).toHaveTextContent("내 장부에 저장됨"),await c(a.getByLabelText("금액")).toHaveValue("")}},O={args:{state:d({amount:"5000",merchant:"마트",detailsExpanded:!0,feedback:{tone:"error",title:"거래 저장 오류",message:"입력을 유지했습니다. 다시 시도해주세요."}})},play:async({canvas:a})=>{await c(a.getByRole("alert")).toHaveTextContent("거래 저장 오류"),await c(a.getByLabelText("금액")).toHaveValue("5000"),await c(a.getByLabelText("사용처")).toHaveValue("마트")}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      kind: 'income',
      amount: '3,000,000',
      account: 'bank'
    }),
    quickCategoryIds: [],
    hasRecentCategories: false
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      amount: '12,500',
      detailsExpanded: true,
      merchant: '우리동네 마트'
    })
  }
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const Le=["Expense","TransferEntry","Income","DetailsExpanded","NoHousehold","Android","CommittedDraft","InvalidAmount","Saving","Saved","SaveFailed"];export{R as Android,j as CommittedDraft,T as DetailsExpanded,S as Expense,w as Income,E as InvalidAmount,I as NoHousehold,O as SaveFailed,H as Saved,B as Saving,k as TransferEntry,Le as __namedExportsOrder,Oe as default};
