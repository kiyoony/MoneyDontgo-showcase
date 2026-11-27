import{c as $}from"./book-scenarios-C5IhzNz1.js";import{j as t,s as u,p as b}from"./theme-DrLBCnSR.js";import{L as ee}from"./ledger-ui-Crs18mwD.js";import{r as l}from"./iframe-BZnyquBv.js";import"./cashflow-sankey-DP2akK8q.js";import{e as p,S as ae,A as h,u as W,V as m,C as te,I as V,M as ne,h as re,s as oe}from"./components-DVSlncDs.js";import{C as se}from"./choice-field.web-BANlp6cV.js";import{D as ie}from"./date-field.web-BK1j5Lvd.js";import{c as ce}from"./category-B3c2Fc3d.js";import{F as le}from"./feedback-BF65kSbf.js";import{C as de}from"./capture-category-chips-Pas0QWwc.js";import{I as pe}from"./inline-category-picker-Ci0EzJuT.js";import{b as ue}from"./calendar-DHZANot5.js";import"./preload-helper-DhRmtqSx.js";import"./cancellation-B33q6obR.js";import"./app-symbol.web-BpmHQ6nT.js";var me={OS:"web"};function ge(a,n){return a.filter(o=>!o.archived&&(n!=="card-payment"||o.kind==="bank")&&(n!=="income"||!["credit-card","loan","other-liability"].includes(o.kind)))}let ye;typeof window<"u"&&window.addEventListener("popstate",a=>ye?.(a),!0);const be=l.createContext({register:a=>()=>{},leave:(a,n=!1)=>a(),finish:a=>a(),isApproved:()=>!1,protectedRoute:!1}),fe=()=>l.useContext(be);function xe(a,n,o=!1){const g=fe();return l.useEffect(()=>g.register({dirty:a,busy:n,retained:o}),[a,n,o,g.register]),g.leave}function ve({inputRetained:a=!1,demo:n=!1,accounts:o,onOpenDrafts:g,onOpenTransfer:F,onOpenTransaction:x,categories:O,householdId:v,householdName:q,householdType:D,quickCategoryIds:K,hasRecentCategories:U,canCreateCategories:Y,state:e,dispatch:s,platform:A=me.OS}){const[y,N]=l.useState(!1),M=l.useRef(null);l.useEffect(()=>{e.amountError&&M.current?.focus()},[e.amountError]);const C=JSON.stringify([e.kind,e.amount,e.merchant,e.note,e.date,e.account,e.categorySelection==="manual"?e.categoryId:void 0]),[G,z]=l.useState(C);l.useEffect(()=>{e.feedback?.tone!=="error"&&z(C)},[e.draftId,e.lastSavedId]),l.useEffect(()=>{e.feedback?.tone==="success"&&z(C)},[e.feedback]);const J=xe(C!==G&&!e.committedTransactionId,!!e.pending,a),P=e.kind==="income"?{label:"수입처",placeholder:"수입을 받은 곳",helper:"선택 항목입니다. 비워도 장부에 저장할 수 있습니다."}:{label:"사용처",placeholder:"결제하거나 사용한 곳",helper:"선택 항목입니다. 비워도 장부에 저장할 수 있습니다."},Q=e.categoryId?ce(O,e.categoryId).map(r=>r.name).join(" · "):"",X=e.committedTransactionId?void 0:t.jsx(p,{disabled:!!e.pending,loading:e.pending==="ledger",label:n?"데모 장부에 저장":"내 장부에 저장",onPress:()=>s({type:"saveLedgerRequested"})});return t.jsxs(ae,{footer:X,children:[q?t.jsxs(h,{style:W.label,children:["저장 위치 · ",q,D&&D!==q?" · "+D:""]}):null,e.committedTransactionId?t.jsxs(m,{style:{gap:u.sm},children:[t.jsx(h,{role:"status",style:W.subtitle,children:"이미 장부에 확정된 초안입니다."}),x?t.jsx(p,{label:"이미 확정한 기록 보기",onPress:()=>x(e.committedTransactionId)}):null]}):null,e.lastSavedId&&x?t.jsx(p,{label:"방금 기록 보기",variant:"secondary",onPress:()=>x(e.lastSavedId)}):null,e.committedTransactionId?null:t.jsxs(te,{style:c.form,children:[t.jsxs(m,{style:c.typeActions,children:[t.jsx(m,{style:{flex:1,minWidth:140},children:t.jsx(ee,{label:"거래 종류",value:e.kind,options:[{value:"expense",label:"지출",accessibilityLabel:"지출 선택"},{value:"income",label:"수입",accessibilityLabel:"수입 선택"}],disabled:!!e.pending,onChange:r=>s({type:"kindChanged",kind:r})})}),F?t.jsx(p,{label:"이체·납부",accessibilityLabel:"이체·카드납부 기록",variant:"outlined",onPress:()=>J(F)}):null]}),t.jsx(V,{ref:M,editable:!e.pending,error:e.amountError,style:{textAlign:"right",fontVariant:["tabular-nums"]},label:"금액",value:e.amount,onChangeText:r=>s({type:"amountChanged",value:r}),keyboardType:"number-pad",placeholder:"12,500",suffix:"원",helper:A==="web"?"원 단위 · Enter로 저장":"원 단위로 입력하세요.",onSubmitEditing:A==="web"?()=>s({type:"saveLedgerRequested"}):void 0}),t.jsx(se,{label:e.kind==="income"?"입금 계정":"결제 계정",value:e.account,options:[{value:"",label:"계정을 선택해주세요"},...ge(o,e.kind).map(r=>({value:r.id,label:r.name}))],onChange:r=>s({type:"accountChanged",value:r}),disabled:!!e.pending}),t.jsx(ie,{label:"거래일",value:e.date,onChange:r=>s({type:"dateChanged",value:r}),disabled:!!e.pending,error:e.dateError}),t.jsxs(m,{style:c.field,children:[v&&U?t.jsxs(m,{style:c.recent,children:[t.jsx(h,{style:W.label,children:"최근 사용한 분류"}),t.jsx(de,{disabled:!!e.pending,categories:O,categoryIds:K,selectedId:e.categoryId,mode:"recent",onSelect:r=>s({type:"categoryChanged",value:r})})]}):null,v?t.jsx(p,{label:y?"분류 접기":Q||"분류 선택",accessibilityLabel:y?"전체 분류 접기":"전체 분류 열기",expanded:y,variant:"quiet",onPress:()=>N(!y)}):null,v&&y?t.jsx(pe,{disabled:!!e.pending,categories:O,householdId:v,kind:e.kind,value:e.categoryId,canCreate:Y,onChange:r=>{s({type:"categoryChanged",value:r}),N(!1)},onCreate:(r,Z)=>s({type:"categoryCreateRequested",name:r,parentCategoryId:Z})}):null]}),t.jsx(ne,{disabled:!!e.pending,accessibilityRole:"button",accessibilityLabel:e.detailsExpanded?"상세 입력 접기":"상세 입력 열기",accessibilityState:{expanded:e.detailsExpanded},onPress:()=>s({type:"detailsToggled"}),style:({pressed:r})=>[c.detailsToggle,r&&c.pressed],children:t.jsxs(h,{style:c.detailsText,children:["상세 입력 ",e.detailsExpanded?"접기":"열기"]})}),e.detailsExpanded?t.jsxs(m,{style:c.details,children:[t.jsx(V,{editable:!e.pending,label:P.label,maxLength:160,value:e.merchant,onChangeText:r=>s({type:"merchantChanged",value:r}),placeholder:P.placeholder,helper:P.helper}),t.jsx(V,{editable:!e.pending,label:"메모",value:e.note,maxLength:2e3,onChangeText:r=>s({type:"noteChanged",value:r}),placeholder:"거래에 남길 내용",multiline:!0})]}):null]}),t.jsx(le,{value:e.feedback}),t.jsxs(m,{style:c.actions,children:[g?t.jsx(p,{label:"초안 보관함",accessibilityLabel:"초안 보관함 열기",variant:"quiet",onPress:()=>J(g)}):null,A==="android"?t.jsx(p,{disabled:!!e.pending||!!e.committedTransactionId,label:"카드 알림에서 가져오기",variant:"quiet",onPress:()=>s({type:"androidImportRequested"})}):null,t.jsx(p,{disabled:!!e.pending||!!e.committedTransactionId,loading:e.pending==="draft",label:n?"데모 초안 저장":"기기에 초안 저장",variant:"quiet",onPress:()=>s({type:"saveDraftRequested"})})]}),t.jsx(re,{title:"개인정보 보호",children:n?"데모 입력은 이 세션에서만 유지됩니다. 기기에 저장되거나 클라우드에 공유되지 않습니다.":"알림 원문은 저장하지 않습니다. 금액과 거래 상대처럼 정규화된 초안만 기기에 남습니다."})]})}const c=oe.create({form:{gap:u.sm,paddingHorizontal:0,paddingTop:0},field:{gap:u.sm},recent:{gap:u.sm},actions:{flexDirection:"row",flexWrap:"wrap",gap:u.xs},typeActions:{flexDirection:"row",flexWrap:"wrap",alignItems:"center",gap:u.sm},kindSwitch:{flex:1,minWidth:140,flexDirection:"row",padding:4,gap:4,backgroundColor:b.primarySoft,borderRadius:14},kindOption:{flex:1,minHeight:44,alignItems:"center",justifyContent:"center",borderRadius:10},kindOptionSelected:{backgroundColor:b.primary},kindOptionText:{fontSize:14,lineHeight:20,fontWeight:"600"},kindOptionTextSelected:{color:b.onPrimary},detailsToggle:{minHeight:44,justifyContent:"center",alignItems:"center"},detailsText:{color:b.primary,fontWeight:"600"},details:{gap:u.md,borderTopWidth:1,borderTopColor:b.border,paddingTop:u.md},pressed:{opacity:.8}});function d(a={}){const n=a.occurredAt??new Date().toISOString();return Number.isFinite(new Date(n).getTime())?{kind:"expense",amount:"",merchant:"",note:"",date:ue(n),categoryId:void 0,categorySelection:"auto",account:"card",detailsExpanded:!1,draftId:null,occurredAt:n,source:"manual",pending:null,...a}:d({...a,occurredAt:new Date().toISOString(),date:"",dateError:"실제 거래일을 입력해주세요."})}const{expect:i,fn:_}=__STORYBOOK_MODULE_TEST__,f=$(),Ae={title:"Screens/Capture",component:ve,args:{accounts:f.accounts,categories:f.categories,householdId:f.book.id,quickCategoryIds:f.categories.filter(a=>a.kind==="expense"&&!a.parentCategoryId).slice(0,5).map(a=>a.id),hasRecentCategories:!0,canCreateCategories:!0,state:d({amount:"12,500",categoryId:f.categories.find(a=>a.kind==="expense")?.id}),dispatch:_(),platform:"web"},argTypes:{categories:{control:"object"},householdId:{control:"text"},quickCategoryIds:{control:"object"},hasRecentCategories:{control:"boolean"},canCreateCategories:{control:"boolean"},state:{control:"object"},dispatch:{control:!1},platform:{control:"select",options:["android","ios","web"]}}},w={play:async({args:a,canvas:n,userEvent:o})=>{await o.click(n.getByRole("button",{name:"내 장부에 저장"})),await i(a.dispatch).toHaveBeenCalledWith({type:"saveLedgerRequested"})}},S={args:{onOpenTransfer:_()},play:async({args:a,canvas:n,userEvent:o})=>{await o.click(n.getByRole("button",{name:"이체·카드납부 기록"})),await i(a.onOpenTransfer).toHaveBeenCalledOnce()}},T={args:{state:d({kind:"income",amount:"3,000,000",account:"bank"}),quickCategoryIds:[],hasRecentCategories:!1}},k={args:{state:d({amount:"12,500",detailsExpanded:!0,merchant:"우리동네 마트"})}},I={args:{householdId:void 0,hasRecentCategories:!1}},B={args:{platform:"android"},play:async({args:a,canvas:n,userEvent:o})=>{await o.click(n.getByRole("button",{name:"카드 알림에서 가져오기"})),await i(a.dispatch).toHaveBeenCalledWith({type:"androidImportRequested"})}},E={args:{state:d({committedTransactionId:"capture-draft",draftId:"draft"}),onOpenTransaction:_()},play:async({args:a,canvas:n,userEvent:o})=>{await i(n.queryByLabelText("금액")).not.toBeInTheDocument(),await i(n.queryByRole("button",{name:"내 장부에 저장"})).not.toBeInTheDocument(),await o.click(n.getByRole("button",{name:"이미 확정한 기록 보기"})),await i(a.onOpenTransaction).toHaveBeenCalledWith("capture-draft")}},R={args:{state:d({amount:"0",amountError:"0보다 큰 원 단위 금액을 입력해주세요."})},play:async({canvas:a})=>{await i(a.getByRole("alert")).toHaveTextContent("0보다 큰 원 단위 금액")}},j={args:{state:d({amount:"5000",pending:"ledger"})},play:async({canvas:a})=>{await i(a.getByRole("button",{name:"내 장부에 저장"})).toHaveAttribute("aria-disabled","true"),await i(a.getByLabelText("금액")).toHaveAttribute("readOnly")}},H={args:{state:d({feedback:{tone:"success",title:"내 장부에 저장됨",message:"확인한 거래가 홈과 월결산에 반영되었습니다."}})},play:async({canvas:a})=>{await i(a.getByRole("status")).toHaveTextContent("내 장부에 저장됨"),await i(a.getByLabelText("금액")).toHaveValue("")}},L={args:{state:d({amount:"5000",merchant:"마트",detailsExpanded:!0,feedback:{tone:"error",title:"거래 저장 오류",message:"입력을 유지했습니다. 다시 시도해주세요."}})},play:async({canvas:a})=>{await i(a.getByRole("alert")).toHaveTextContent("거래 저장 오류"),await i(a.getByLabelText("금액")).toHaveValue("5000"),await i(a.getByLabelText("사용처")).toHaveValue("마트")}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      kind: 'income',
      amount: '3,000,000',
      account: 'bank'
    }),
    quickCategoryIds: [],
    hasRecentCategories: false
  }
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    state: createCaptureState({
      amount: '12,500',
      detailsExpanded: true,
      merchant: '우리동네 마트'
    })
  }
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    householdId: undefined,
    hasRecentCategories: false
  }
}`,...I.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};const Pe=["Expense","TransferEntry","Income","DetailsExpanded","NoHousehold","Android","CommittedDraft","InvalidAmount","Saving","Saved","SaveFailed"];export{B as Android,E as CommittedDraft,k as DetailsExpanded,w as Expense,T as Income,R as InvalidAmount,I as NoHousehold,L as SaveFailed,H as Saved,j as Saving,S as TransferEntry,Pe as __namedExportsOrder,Ae as default};
