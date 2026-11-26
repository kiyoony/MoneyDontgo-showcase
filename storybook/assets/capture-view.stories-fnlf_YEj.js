import{c as te}from"./book-scenarios-C5IhzNz1.js";import{j as t,s as u,p as x}from"./theme-Bmk8G3Xq.js";import{r as l}from"./iframe-wYiu5u-S.js";import"./cashflow-sankey-AgyaLfEk.js";import{e as p,S as ne,A as f,u as w,V as g,C as re,M as Y,I as _,h as oe,s as se}from"./components-ToVeWDsC.js";import{C as ie}from"./choice-field.web-Bnoq86UW.js";import{D as ce}from"./date-field.web-zahyg8b6.js";import{c as le}from"./category-B3c2Fc3d.js";import{F as de}from"./feedback-CLHngn3J.js";import{C as pe}from"./capture-category-chips-7utbtPJD.js";import{I as ue}from"./inline-category-picker-BOAF2iST.js";import{b as me}from"./calendar-DHZANot5.js";import"./preload-helper-DhRmtqSx.js";import"./cancellation-B33q6obR.js";import"./app-symbol.web-BQYCspdR.js";var ge={OS:"web"};function ye(a,r){return a.filter(o=>!o.archived&&(r!=="card-payment"||o.kind==="bank")&&(r!=="income"||!["credit-card","loan","other-liability"].includes(o.kind)))}let be;typeof window<"u"&&window.addEventListener("popstate",a=>be?.(a),!0);const xe=l.createContext({register:a=>()=>{},leave:(a,r=!1)=>a(),finish:a=>a(),isApproved:()=>!1,protectedRoute:!1}),fe=()=>l.useContext(xe);function ve(a,r,o=!1){const m=fe();return l.useEffect(()=>m.register({dirty:a,busy:r,retained:o}),[a,r,o,m.register]),m.leave}function Ce({inputRetained:a=!1,demo:r=!1,accounts:o,onOpenDrafts:m,onOpenTransfer:N,onOpenTransaction:C,categories:D,householdId:h,householdName:P,householdType:A,quickCategoryIds:$,hasRecentCategories:G,canCreateCategories:Q,state:e,dispatch:s,platform:W=ge.OS}){const[y,M]=l.useState(!1),z=l.useRef(null);l.useEffect(()=>{e.amountError&&z.current?.focus()},[e.amountError]);const S=JSON.stringify([e.kind,e.amount,e.merchant,e.note,e.date,e.account,e.categorySelection==="manual"?e.categoryId:void 0]),[X,J]=l.useState(S);l.useEffect(()=>{e.feedback?.tone!=="error"&&J(S)},[e.draftId,e.lastSavedId]),l.useEffect(()=>{e.feedback?.tone==="success"&&J(S)},[e.feedback]);const K=ve(S!==X&&!e.committedTransactionId,!!e.pending,a),V=e.kind==="income"?{label:"수입처",placeholder:"수입을 받은 곳",helper:"비워두면 확인이 필요한 초안으로 저장됩니다."}:{label:"사용처",placeholder:"결제하거나 사용한 곳",helper:"비워두면 확인이 필요한 초안으로 저장됩니다."},Z=e.categoryId?le(D,e.categoryId).map(n=>n.name).join(" · "):"",ee=e.committedTransactionId?void 0:t.jsx(p,{disabled:!!e.pending,loading:e.pending==="ledger",label:r?"데모 장부에 저장":"내 장부에 저장",onPress:()=>s({type:"saveLedgerRequested"})});return t.jsxs(ne,{footer:ee,children:[P?t.jsxs(f,{style:w.label,children:["저장 위치 · ",P,A&&A!==P?" · "+A:""]}):null,e.committedTransactionId?t.jsxs(g,{style:{gap:u.sm},children:[t.jsx(f,{role:"status",style:w.subtitle,children:"이미 장부에 확정된 초안입니다."}),C?t.jsx(p,{label:"이미 확정한 기록 보기",onPress:()=>C(e.committedTransactionId)}):null]}):null,e.lastSavedId&&C?t.jsx(p,{label:"방금 기록 보기",variant:"secondary",onPress:()=>C(e.lastSavedId)}):null,e.committedTransactionId?null:t.jsxs(re,{style:c.form,children:[t.jsx(g,{style:c.kindSwitch,accessibilityRole:"radiogroup",accessibilityLabel:"거래 종류",children:["expense","income"].map(n=>{const b=e.kind===n,U=n==="expense"?"지출":"수입";return t.jsx(Y,{disabled:!!e.pending,accessibilityRole:"radio",accessibilityLabel:`${U} 선택`,"aria-checked":b,onPress:()=>s({type:"kindChanged",kind:n}),style:({pressed:ae})=>[c.kindOption,b&&c.kindOptionSelected,ae&&c.pressed],children:t.jsx(f,{style:[w.value,b&&c.kindOptionTextSelected],children:U})},n)})}),t.jsx(_,{ref:z,editable:!e.pending,error:e.amountError,style:{textAlign:"right",fontVariant:["tabular-nums"]},label:"금액",value:e.amount,onChangeText:n=>s({type:"amountChanged",value:n}),keyboardType:"number-pad",placeholder:"12,500",suffix:"원",helper:W==="web"?"원 단위 · Enter로 저장":"원 단위로 입력하세요.",onSubmitEditing:W==="web"?()=>s({type:"saveLedgerRequested"}):void 0}),t.jsx(ie,{label:e.kind==="income"?"입금 계정":"결제 계정",value:e.account,options:[{value:"",label:"계정을 선택해주세요"},...ye(o,e.kind).map(n=>({value:n.id,label:n.name}))],onChange:n=>s({type:"accountChanged",value:n}),disabled:!!e.pending}),t.jsx(ce,{label:"거래일",value:e.date,onChange:n=>s({type:"dateChanged",value:n}),disabled:!!e.pending,error:e.dateError}),t.jsxs(g,{style:c.field,children:[h&&G?t.jsxs(g,{style:c.recent,children:[t.jsx(f,{style:w.label,children:"최근 사용한 분류"}),t.jsx(pe,{disabled:!!e.pending,categories:D,categoryIds:$,selectedId:e.categoryId,mode:"recent",onSelect:n=>s({type:"categoryChanged",value:n})})]}):null,h?t.jsx(p,{label:y?"분류 접기":Z||"분류 선택",accessibilityLabel:y?"전체 분류 접기":"전체 분류 열기",expanded:y,variant:"quiet",onPress:()=>M(!y)}):null,h&&y?t.jsx(ue,{disabled:!!e.pending,categories:D,householdId:h,kind:e.kind,value:e.categoryId,canCreate:Q,onChange:n=>{s({type:"categoryChanged",value:n}),M(!1)},onCreate:(n,b)=>s({type:"categoryCreateRequested",name:n,parentCategoryId:b})}):null]}),t.jsx(Y,{disabled:!!e.pending,accessibilityRole:"button",accessibilityLabel:e.detailsExpanded?"상세 입력 접기":"상세 입력 열기",accessibilityState:{expanded:e.detailsExpanded},onPress:()=>s({type:"detailsToggled"}),style:({pressed:n})=>[c.detailsToggle,n&&c.pressed],children:t.jsxs(f,{style:c.detailsText,children:["상세 입력 ",e.detailsExpanded?"접기":"열기"]})}),e.detailsExpanded?t.jsxs(g,{style:c.details,children:[t.jsx(_,{editable:!e.pending,label:V.label,maxLength:160,value:e.merchant,onChangeText:n=>s({type:"merchantChanged",value:n}),placeholder:V.placeholder,helper:V.helper}),t.jsx(_,{editable:!e.pending,label:"메모",value:e.note,maxLength:2e3,onChangeText:n=>s({type:"noteChanged",value:n}),placeholder:"거래에 남길 내용",multiline:!0})]}):null]}),t.jsx(de,{value:e.feedback}),t.jsxs(g,{style:c.actions,children:[m?t.jsx(p,{label:"초안 보관함",accessibilityLabel:"초안 보관함 열기",variant:"quiet",onPress:()=>K(m)}):null,N?t.jsx(p,{label:"이체·납부",accessibilityLabel:"이체·카드납부 기록",variant:"quiet",onPress:()=>K(N)}):null,W==="android"?t.jsx(p,{disabled:!!e.pending||!!e.committedTransactionId,label:"카드 알림에서 가져오기",variant:"quiet",onPress:()=>s({type:"androidImportRequested"})}):null,t.jsx(p,{disabled:!!e.pending||!!e.committedTransactionId,loading:e.pending==="draft",label:r?"데모 초안 저장":"기기에 초안 저장",variant:"quiet",onPress:()=>s({type:"saveDraftRequested"})})]}),t.jsx(oe,{title:"개인정보 보호",children:r?"데모 입력은 이 세션에서만 유지됩니다. 기기에 저장되거나 클라우드에 공유되지 않습니다.":"알림 원문은 저장하지 않습니다. 금액과 거래 상대처럼 정규화된 초안만 기기에 남습니다."})]})}const c=se.create({form:{gap:u.sm,paddingHorizontal:0,paddingTop:0},field:{gap:u.sm},recent:{gap:u.sm},actions:{flexDirection:"row",flexWrap:"wrap",gap:u.xs},kindSwitch:{flexDirection:"row",padding:4,gap:4,backgroundColor:x.primarySoft,borderRadius:14},kindOption:{flex:1,minHeight:44,alignItems:"center",justifyContent:"center",borderRadius:10},kindOptionSelected:{backgroundColor:x.primary},kindOptionTextSelected:{color:x.onPrimary},detailsToggle:{minHeight:44,justifyContent:"center",alignItems:"center"},detailsText:{color:x.primary,fontWeight:"600"},details:{gap:u.md,borderTopWidth:1,borderTopColor:x.border,paddingTop:u.md},pressed:{opacity:.8}});function d(a={}){const r=a.occurredAt??new Date().toISOString();return Number.isFinite(new Date(r).getTime())?{kind:"expense",amount:"",merchant:"",note:"",date:me(r),categoryId:void 0,categorySelection:"auto",account:"card",detailsExpanded:!1,draftId:null,occurredAt:r,source:"manual",pending:null,...a}:d({...a,occurredAt:new Date().toISOString(),date:"",dateError:"실제 거래일을 입력해주세요."})}const{expect:i,fn:F}=__STORYBOOK_MODULE_TEST__,v=te(),Pe={title:"Screens/Capture",component:Ce,args:{accounts:v.accounts,categories:v.categories,householdId:v.book.id,quickCategoryIds:v.categories.filter(a=>a.kind==="expense"&&!a.parentCategoryId).slice(0,5).map(a=>a.id),hasRecentCategories:!0,canCreateCategories:!0,state:d({amount:"12,500",categoryId:v.categories.find(a=>a.kind==="expense")?.id}),dispatch:F(),platform:"web"},argTypes:{categories:{control:"object"},householdId:{control:"text"},quickCategoryIds:{control:"object"},hasRecentCategories:{control:"boolean"},canCreateCategories:{control:"boolean"},state:{control:"object"},dispatch:{control:!1},platform:{control:"select",options:["android","ios","web"]}}},k={play:async({args:a,canvas:r,userEvent:o})=>{await o.click(r.getByRole("button",{name:"내 장부에 저장"})),await i(a.dispatch).toHaveBeenCalledWith({type:"saveLedgerRequested"})}},T={args:{onOpenTransfer:F()},play:async({args:a,canvas:r,userEvent:o})=>{await o.click(r.getByRole("button",{name:"이체·카드납부 기록"})),await i(a.onOpenTransfer).toHaveBeenCalledOnce()}},I={args:{state:d({kind:"income",amount:"3,000,000",account:"bank"}),quickCategoryIds:[],hasRecentCategories:!1}},R={args:{state:d({amount:"12,500",detailsExpanded:!0,merchant:"우리동네 마트"})}},B={args:{householdId:void 0,hasRecentCategories:!1}},E={args:{platform:"android"},play:async({args:a,canvas:r,userEvent:o})=>{await o.click(r.getByRole("button",{name:"카드 알림에서 가져오기"})),await i(a.dispatch).toHaveBeenCalledWith({type:"androidImportRequested"})}},j={args:{state:d({committedTransactionId:"capture-draft",draftId:"draft"}),onOpenTransaction:F()},play:async({args:a,canvas:r,userEvent:o})=>{await i(r.queryByLabelText("금액")).not.toBeInTheDocument(),await i(r.queryByRole("button",{name:"내 장부에 저장"})).not.toBeInTheDocument(),await o.click(r.getByRole("button",{name:"이미 확정한 기록 보기"})),await i(a.onOpenTransaction).toHaveBeenCalledWith("capture-draft")}},H={args:{state:d({amount:"0",amountError:"0보다 큰 원 단위 금액을 입력해주세요."})},play:async({canvas:a})=>{await i(a.getByRole("alert")).toHaveTextContent("0보다 큰 원 단위 금액")}},O={args:{state:d({amount:"5000",pending:"ledger"})},play:async({canvas:a})=>{await i(a.getByRole("button",{name:"내 장부에 저장"})).toHaveAttribute("aria-disabled","true"),await i(a.getByLabelText("금액")).toHaveAttribute("readOnly")}},L={args:{state:d({feedback:{tone:"success",title:"내 장부에 저장됨",message:"확인한 거래가 홈과 월결산에 반영되었습니다."}})},play:async({canvas:a})=>{await i(a.getByRole("status")).toHaveTextContent("내 장부에 저장됨"),await i(a.getByLabelText("금액")).toHaveValue("")}},q={args:{state:d({amount:"5000",merchant:"마트",detailsExpanded:!0,feedback:{tone:"error",title:"거래 저장 오류",message:"입력을 유지했습니다. 다시 시도해주세요."}})},play:async({canvas:a})=>{await i(a.getByRole("alert")).toHaveTextContent("거래 저장 오류"),await i(a.getByLabelText("금액")).toHaveValue("5000"),await i(a.getByLabelText("사용처")).toHaveValue("마트")}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      kind: 'income',
      amount: '3,000,000',
      account: 'bank'
    }),
    quickCategoryIds: [],
    hasRecentCategories: false
  }
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      amount: '12,500',
      detailsExpanded: true,
      merchant: '우리동네 마트'
    })
  }
}`,...R.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    householdId: undefined,
    hasRecentCategories: false
  }
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.queryByRole('button', {
      name: '내 장부에 저장'
    })).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: '이미 확정한 기록 보기'
    }));
    await expect(args.onOpenTransaction).toHaveBeenCalledWith('capture-draft');
  }
}`,...j.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};const Ae=["Expense","TransferEntry","Income","DetailsExpanded","NoHousehold","Android","CommittedDraft","InvalidAmount","Saving","Saved","SaveFailed"];export{E as Android,j as CommittedDraft,R as DetailsExpanded,k as Expense,I as Income,H as InvalidAmount,B as NoHousehold,q as SaveFailed,L as Saved,O as Saving,T as TransferEntry,Ae as __namedExportsOrder,Pe as default};
