import{c as K,a as F}from"./book-scenarios-C5IhzNz1.js";import{j as n,p as m,s as h}from"./theme-Bmk8G3Xq.js";import"./cashflow-sankey-fBZKRwXB.js";import{_ as N,V as p,b as U,s as _,S as D,A as u,u as f,g as H,C as W,f as v,M as z,d as x}from"./components-Bi0Z_tY2.js";import{r as b}from"./iframe-BoxIrDJq.js";import{a as $,f as Y}from"./calendar-DHZANot5.js";import{e as G}from"./cancellation-B33q6obR.js";import"./preload-helper-DhRmtqSx.js";var J=["animating","color","hidesWhenStopped","size","style"],O=e=>b.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:e}),V=b.forwardRef((e,r)=>{var a=e.animating,c=a===void 0?!0:a,s=e.color,t=s===void 0?"#1976D2":s,l=e.hidesWhenStopped,i=l===void 0?!0:l,g=e.size,y=g===void 0?"small":g,L=e.style,d=N(e,J),B=b.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},O({stroke:t,opacity:.2}),O({stroke:t,strokeDasharray:80,strokeDashoffset:60}));return b.createElement(p,U({},d,{"aria-valuemax":1,"aria-valuemin":0,ref:r,role:"progressbar",style:[k.container,L]}),b.createElement(p,{children:B,style:[typeof y=="number"?{height:y,width:y}:Q[y],k.animation,!c&&k.animationPause,!c&&i&&k.hidesWhenStopped]}))});V.displayName="ActivityIndicator";var k=_.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),Q=_.create({small:{width:20,height:20},large:{width:36,height:36}});const X=new Set(["cash","bank","investment","real-estate","other-asset"]),C=new Set(["credit-card","loan","other-liability"]);function Z(e){if(!Number.isSafeInteger(e)||e<=0)throw new Error("금액은 0보다 큰 원 단위 정수여야 합니다.")}function ee(e){const r=[];try{Z(e.amount)}catch(a){r.push(a instanceof Error?a.message:"금액이 올바르지 않습니다.")}return e.kind==="income"&&!e.toAccountId&&r.push("수입에는 입금 계정이 필요합니다."),e.kind==="expense"&&!e.fromAccountId&&!e.toAccountId&&r.push("지출에는 현금 출금 계정 또는 카드 부채 계정이 필요합니다."),(e.kind==="transfer"||e.kind==="card-payment")&&(!e.fromAccountId||!e.toAccountId)&&r.push("이체와 카드납부에는 출금·입금 계정이 모두 필요합니다."),e.fromAccountId&&e.toAccountId&&e.fromAccountId===e.toAccountId&&r.push("출금 계정과 입금 계정은 달라야 합니다."),e.kind==="reversal"&&(!e.reversalOfId||!e.fromAccountId||e.toAccountId)&&r.push("취소에는 원 승인과 카드 계정이 필요합니다."),r}function ne(e,r){const a=new Map(e.map(t=>[t.id,t])),c=Object.fromEntries(e.map(t=>[t.id,t.openingBalance])),s=(t,l)=>{!t||!a.has(t)||(c[t]=(c[t]??0)+l)};for(const t of r){if(ee(t).length>0)continue;const l=t.fromAccountId?a.get(t.fromAccountId):void 0,i=t.toAccountId?a.get(t.toAccountId):void 0;switch(t.kind){case"income":s(t.toAccountId,t.amount);break;case"expense":i&&C.has(i.kind)?s(i.id,t.amount):s(t.fromAccountId,-t.amount);break;case"transfer":s(l?.id,C.has(l?.kind??"cash")?t.amount:-t.amount),s(i?.id,C.has(i?.kind??"cash")?-t.amount:t.amount);break;case"reversal":s(l?.id,-t.amount);break;case"card-payment":s(l?.id,-t.amount),s(i?.id,-t.amount);break}}return c}function te(e,r){return e.reduce((a,c)=>{const s=r[c.id]??0;return X.has(c.kind)?a+s:C.has(c.kind)?a-s:a},0)}function ae(e,r,a){return e.filter(c=>(c.kind==="expense"||c.kind==="reversal")&&$(c.occurredAt)===r&&!0).reduce((c,s)=>c+G(s),0)}function re({model:e,localReady:r,onCapture:a,onMonthly:c,onDaily:s,onRecords:t,onDrafts:l,draftCount:i,onTransaction:g}){if(!r)return n.jsx(D,{children:n.jsxs(p,{style:o.loading,children:[n.jsx(V,{accessibilityLabel:"내 장부 준비 중",color:m.primary}),n.jsx(u,{style:f.subtitle,children:"내 장부를 준비하고 있어요."})]})});const y=e.income-e.expense,L=n.jsxs(n.Fragment,{children:[n.jsxs(p,{style:o.section,children:[n.jsx(H,{title:"이번 달 쓴 돈"}),n.jsxs(W,{style:o.monthCard,children:[e.expense<0?n.jsx(u,{style:f.label,children:"환급 초과"}):null,n.jsx(u,{style:[o.monthAmount,{fontVariant:["tabular-nums"],flexShrink:0,textAlign:"right"}],children:v(Math.abs(e.expense))}),n.jsx(p,{style:o.monthDivider}),n.jsxs(p,{style:o.monthMeta,children:[n.jsxs(p,{children:[n.jsx(u,{style:o.metaLabel,children:"수입"}),n.jsx(u,{style:[o.income,{fontVariant:["tabular-nums"],flexShrink:0,textAlign:"right"}],children:v(e.income)})]}),n.jsxs(p,{children:[n.jsx(u,{style:o.metaLabel,children:"이번 달 현금흐름"}),n.jsxs(u,{style:y>=0?o.income:o.expense,children:[y>=0?"+":"-",v(Math.abs(y))]})]})]})]})]}),n.jsxs(p,{style:o.section,children:[n.jsx(H,{title:"최근 기록"}),n.jsx(W,{style:o.listCard,children:e.recentExpenses.map((d,B)=>n.jsxs(z,{accessibilityRole:"button","aria-describedby":`home-kind-${encodeURIComponent(d.id)} home-amount-${encodeURIComponent(d.id)}`,accessibilityLabel:`거래 상세 ${d.merchant??"거래 상대 미입력"}`,onPress:()=>g?.(d.id),style:[o.transaction,B>0&&o.divider],children:[n.jsxs(p,{style:o.transactionText,children:[n.jsxs(u,{numberOfLines:2,style:f.value,children:[d.merchant??"거래 상대 미입력",d.kind==="reversal"?" · 카드 취소":""]}),n.jsxs(u,{nativeID:`home-kind-${encodeURIComponent(d.id)}`,style:f.label,children:[d.kind==="reversal"?"지출 환급":"지출"," · ",Y(d.occurredAt)]})]}),n.jsx(u,{nativeID:`home-amount-${encodeURIComponent(d.id)}`,style:[o.transactionAmount,{color:d.kind==="reversal"?m.ink:m.expenseStrong}],children:v(d.amount)})]},d.id))})]}),n.jsx(z,{accessibilityRole:"button",accessibilityLabel:"이번 달 결산 보기",onPress:c,style:({pressed:d})=>[o.monthLink,d&&o.pressed],children:n.jsx(u,{style:o.monthLinkText,children:"이번 달 결산 보기"})})]});return n.jsxs(D,{children:[n.jsx(u,{accessibilityRole:"header",style:f.title,children:"이번 달 기록"}),s||t||l?n.jsxs(p,{style:o.quickLinks,children:[n.jsxs(p,{style:o.periodLinks,children:[s?n.jsx(x,{label:"일간",accessibilityLabel:"일간 기록 보기",variant:"quiet",onPress:s}):null,t?n.jsx(x,{label:"전체",accessibilityLabel:"전체 기록 보기",variant:"quiet",onPress:t}):null]}),l?n.jsx(x,{label:i?"초안 "+i:"초안",accessibilityLabel:i?"초안 보관함 열기 ("+i+"개)":"초안 보관함 열기",variant:"quiet",onPress:l}):null]}):null,e.isEmpty?n.jsxs(W,{style:o.emptyCard,children:[n.jsx(u,{style:o.emptyTitle,children:"첫 거래를 기록해볼까요?"}),n.jsx(x,{accessibilityLabel:"첫 거래 기록하기",label:"거래 기록하기",onPress:a})]}):n.jsxs(n.Fragment,{children:[n.jsx(x,{label:"거래 기록하기",onPress:a}),L]})]})}const o=_.create({quickLinks:{flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},periodLinks:{flexDirection:"row",gap:h.xs},loading:{minHeight:220,alignItems:"center",justifyContent:"center",gap:h.md},pressed:{opacity:.8},section:{gap:h.md},monthCard:{gap:h.sm,padding:h.lg,backgroundColor:"transparent",borderColor:m.borderSubtle,borderRadius:8},monthAmount:{color:m.expenseStrong,fontSize:44,fontWeight:"700"},monthDivider:{height:1,marginVertical:h.xs,backgroundColor:m.borderSubtle},monthMeta:{flexDirection:"row",flexWrap:"wrap",gap:h.xl},metaLabel:{color:m.muted,fontSize:12,fontWeight:"700"},income:{marginTop:4,color:m.income,fontSize:15,fontWeight:"600"},expense:{marginTop:4,color:m.expense,fontSize:15,fontWeight:"600"},listCard:{paddingVertical:0,borderRadius:8},transaction:{flexDirection:"row",alignItems:"center",minHeight:68,paddingHorizontal:h.md,gap:h.sm},transactionText:{flex:1,minWidth:0,gap:4},transactionAmount:{flexShrink:0,textAlign:"right",fontVariant:["tabular-nums"],color:m.expense,fontSize:15,fontWeight:"600"},divider:{borderTopWidth:1,borderTopColor:m.border},monthLink:{minHeight:52,alignItems:"center",justifyContent:"center",borderWidth:1.5,borderColor:m.primary,borderRadius:8},monthLinkText:{color:m.primary,fontSize:16,fontWeight:"600"},emptyCard:{gap:h.md,padding:h.lg,borderRadius:8},emptyTitle:{color:m.ink,fontSize:21,fontWeight:"700"}});function q(e,r,a,c,s){const t=r?e.filter(i=>i.householdId===r):[],l=ne(t,[...a]);return{signedIn:c,demo:r==="demo-active",isEmpty:a.length===0,netWorth:te(t,l),income:a.filter(i=>i.kind==="income"&&$(i.occurredAt)===s).reduce((i,g)=>i+g.amount,0),expense:ae([...a],s),bankBalance:l.bank??0,cardBalance:l.card??0,recentExpenses:a.filter(i=>i.kind==="expense"||i.kind==="reversal").slice(0,5)}}const{expect:T,fn:R}=__STORYBOOK_MODULE_TEST__,E=K(),M=F(),P=q(E.accounts,E.book.id,E.transactions,!0,"2026-08"),oe=q(M.accounts,M.book.id,M.transactions,!1,"2026-08"),he={title:"Screens/Home",component:re,args:{model:P,localReady:!0,onCapture:R(),onMonthly:R()},argTypes:{model:{control:"object"},localReady:{control:"boolean"},onCapture:{control:!1},onMonthly:{control:!1}}},j={play:async({args:e,canvas:r,userEvent:a})=>{await a.click(r.getByRole("button",{name:"거래 기록하기"})),await T(e.onCapture).toHaveBeenCalledOnce()}},S={args:{model:oe},play:async({args:e,canvas:r,userEvent:a})=>{await a.click(r.getByRole("button",{name:"첫 거래 기록하기"})),await T(e.onCapture).toHaveBeenCalledOnce()}},I={args:{localReady:!1}},w={args:{model:{...P,signedIn:!1,demo:!1}}},A={args:{model:{...P,recentExpenses:[{...E.transactions.find(e=>e.id==="demo-groceries"),merchant:void 0}]},onTransaction:R()},play:async({args:e,canvas:r,userEvent:a})=>{await T(r.queryByText("미분류 거래")).not.toBeInTheDocument(),await a.click(r.getByRole("button",{name:"거래 상세 거래 상대 미입력"})),await T(e.onTransaction).toHaveBeenCalledWith("demo-groceries")}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '거래 기록하기'
    }));
    await expect(args.onCapture).toHaveBeenCalledOnce();
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    model: emptyModel
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button', {
      name: '첫 거래 기록하기'
    }));
    await expect(args.onCapture).toHaveBeenCalledOnce();
  }
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    localReady: false
  }
}`,...I.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    model: {
      ...populatedModel,
      signedIn: false,
      demo: false
    }
  }
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    model: {
      ...populatedModel,
      recentExpenses: [{
        ...active.transactions.find(item => item.id === 'demo-groceries')!,
        merchant: undefined
      }]
    },
    onTransaction: fn()
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await expect(canvas.queryByText('미분류 거래')).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: '거래 상세 거래 상대 미입력'
    }));
    await expect(args.onTransaction).toHaveBeenCalledWith('demo-groceries');
  }
}`,...A.parameters?.docs?.source}}};const ye=["Populated","Empty","Loading","LocalPopulated","MissingMerchant"];export{S as Empty,I as Loading,w as LocalPopulated,A as MissingMerchant,j as Populated,ye as __namedExportsOrder,he as default};
