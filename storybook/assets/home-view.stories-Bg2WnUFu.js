import{c as ee,a as te}from"./book-scenarios-C5IhzNz1.js";import{j as t,p as m,s as y}from"./theme-DrLBCnSR.js";import"./cashflow-sankey-DX17bsch.js";import{_ as ne,V as p,b as ae,s as P,S as q,A as u,u as f,d as K,C as D,f as j,M as N,e as A}from"./components-AUlguYtd.js";import{r as b}from"./iframe-D2-_J01v.js";import{a as U,f as oe,b as re}from"./calendar-DHZANot5.js";import{e as se}from"./cancellation-B33q6obR.js";import"./preload-helper-DhRmtqSx.js";var ie=["animating","color","hidesWhenStopped","size","style"],$=e=>b.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:e}),Y=b.forwardRef((e,a)=>{var o=e.animating,i=o===void 0?!0:o,s=e.color,n=s===void 0?"#1976D2":s,l=e.hidesWhenStopped,c=l===void 0?!0:l,d=e.size,h=d===void 0?"small":d,W=e.style,x=ne(e,ie),M=b.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},$({stroke:n,opacity:.2}),$({stroke:n,strokeDasharray:80,strokeDashoffset:60}));return b.createElement(p,ae({},x,{"aria-valuemax":1,"aria-valuemin":0,ref:a,role:"progressbar",style:[I.container,W]}),b.createElement(p,{children:M,style:[typeof h=="number"?{height:h,width:h}:ce[h],I.animation,!i&&I.animationPause,!i&&c&&I.hidesWhenStopped]}))});Y.displayName="ActivityIndicator";var I=P.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),ce=P.create({small:{width:20,height:20},large:{width:36,height:36}});const le=new Set(["cash","bank","investment","real-estate","other-asset"]),L=new Set(["credit-card","loan","other-liability"]);function de(e){if(!Number.isSafeInteger(e)||e<=0)throw new Error("금액은 0보다 큰 원 단위 정수여야 합니다.")}function me(e){const a=[];try{de(e.amount)}catch(o){a.push(o instanceof Error?o.message:"금액이 올바르지 않습니다.")}return e.kind==="income"&&!e.toAccountId&&a.push("수입에는 입금 계정이 필요합니다."),e.kind==="expense"&&!e.fromAccountId&&!e.toAccountId&&a.push("지출에는 현금 출금 계정 또는 카드 부채 계정이 필요합니다."),(e.kind==="transfer"||e.kind==="card-payment")&&(!e.fromAccountId||!e.toAccountId)&&a.push("이체와 카드납부에는 출금·입금 계정이 모두 필요합니다."),e.fromAccountId&&e.toAccountId&&e.fromAccountId===e.toAccountId&&a.push("출금 계정과 입금 계정은 달라야 합니다."),e.kind==="reversal"&&(!e.reversalOfId||!e.fromAccountId||e.toAccountId)&&a.push("취소에는 원 승인과 카드 계정이 필요합니다."),a}function ue(e,a){const o=new Map(e.map(n=>[n.id,n])),i=Object.fromEntries(e.map(n=>[n.id,n.openingBalance])),s=(n,l)=>{!n||!o.has(n)||(i[n]=(i[n]??0)+l)};for(const n of a){if(me(n).length>0)continue;const l=n.fromAccountId?o.get(n.fromAccountId):void 0,c=n.toAccountId?o.get(n.toAccountId):void 0;switch(n.kind){case"income":s(n.toAccountId,n.amount);break;case"expense":c&&L.has(c.kind)?s(c.id,n.amount):s(n.fromAccountId,-n.amount);break;case"transfer":s(l?.id,L.has(l?.kind??"cash")?n.amount:-n.amount),s(c?.id,L.has(c?.kind??"cash")?-n.amount:n.amount);break;case"reversal":s(l?.id,-n.amount);break;case"card-payment":s(l?.id,-n.amount),s(c?.id,-n.amount);break}}return i}function pe(e,a){return e.reduce((o,i)=>{const s=a[i.id]??0;return le.has(i.kind)?o+s:L.has(i.kind)?o-s:o},0)}function he(e,a,o){return e.filter(i=>(i.kind==="expense"||i.kind==="reversal")&&U(i.occurredAt)===a&&!0).reduce((i,s)=>i+se(s),0)}const F={income:"수입",expense:"지출",transfer:"이체","card-payment":"카드납부",reversal:"카드 취소"};function ye({model:e,localReady:a,onCapture:o,onMonthly:i,onDaily:s,onRecords:n,onDrafts:l,draftCount:c,onTransaction:d}){if(!a)return t.jsx(q,{children:t.jsxs(p,{style:r.loading,children:[t.jsx(Y,{accessibilityLabel:"내 장부 준비 중",color:m.primary}),t.jsx(u,{style:f.subtitle,children:"내 장부를 준비하고 있어요."})]})});const h=e.income-e.expense,W=t.jsxs(t.Fragment,{children:[t.jsxs(p,{style:r.section,children:[t.jsx(K,{title:"이번 달 쓴 돈"}),t.jsxs(D,{style:r.monthCard,children:[e.expense<0?t.jsx(u,{style:f.label,children:"환급 초과"}):null,t.jsx(u,{style:r.monthAmount,children:j(Math.abs(e.expense))}),t.jsx(p,{style:r.monthDivider}),t.jsxs(p,{style:r.monthMeta,children:[t.jsxs(p,{children:[t.jsx(u,{style:r.metaLabel,children:"수입"}),t.jsx(u,{style:[r.metaAmount,{color:m.income}],children:j(e.income)})]}),t.jsxs(p,{children:[t.jsx(u,{style:r.metaLabel,children:"순현금흐름"}),t.jsx(u,{style:r.metaAmount,children:j(h)})]})]})]})]}),t.jsxs(p,{style:r.section,children:[t.jsx(K,{title:"최근 거래"}),e.recentTransactions.length===0?t.jsx(u,{style:f.helper,children:"아직 반영된 거래가 없습니다."}):t.jsx(D,{style:r.listCard,children:e.recentTransactions.map((x,M)=>{const{id:k,kind:g,merchant:J,occurredAt:Q,amount:X}=x,z=J||(g==="transfer"||g==="card-payment"?F[g]:"거래 상대 미입력"),V="home-kind-"+encodeURIComponent(k),O="home-amount-"+encodeURIComponent(k),Z=g==="income"?m.income:g==="expense"?m.expenseStrong:m.ink;return t.jsxs(N,{accessibilityRole:"button","aria-describedby":V+" "+O,accessibilityLabel:"거래 상세 "+z,onPress:()=>d?.(k),style:[r.transaction,M>0&&r.divider],children:[t.jsxs(p,{style:r.transactionText,children:[t.jsx(u,{numberOfLines:2,style:r.transactionName,children:z}),t.jsxs(u,{nativeID:V,style:f.label,children:[F[g]," · ",oe(Q)]})]}),t.jsx(u,{nativeID:O,style:[r.transactionAmount,{color:Z}],children:j(X)})]},k)})})]}),t.jsx(N,{accessibilityRole:"button",accessibilityLabel:"이번 달 결산 보기",onPress:i,style:({pressed:x})=>[r.monthLink,x&&r.pressed],children:t.jsx(u,{style:r.monthLinkText,children:"이번 달 결산 보기"})})]});return t.jsxs(q,{children:[t.jsx(u,{accessibilityRole:"header",style:f.screenHeading,children:"이번 달 기록"}),s||n||l?t.jsxs(p,{style:r.quickLinks,children:[t.jsxs(p,{style:r.periodLinks,children:[s?t.jsx(A,{label:"일간",accessibilityLabel:"일간 기록 보기",variant:"quiet",onPress:s}):null,n?t.jsx(A,{label:"전체",accessibilityLabel:"전체 기록 보기",variant:"quiet",onPress:n}):null]}),l?t.jsx(A,{label:c?"초안 "+c:"초안",accessibilityLabel:c?"초안 보관함 열기 ("+c+"개)":"초안 보관함 열기",variant:"quiet",onPress:l}):null]}):null,e.isEmpty?t.jsxs(D,{style:r.emptyCard,children:[t.jsx(u,{style:r.emptyTitle,children:"첫 거래를 기록해볼까요?"}),t.jsx(A,{accessibilityLabel:"첫 거래 기록하기",label:"거래 기록하기",onPress:o})]}):W]})}const r=P.create({quickLinks:{flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},periodLinks:{flexDirection:"row",gap:y.xs},loading:{minHeight:220,alignItems:"center",justifyContent:"center",gap:y.md},pressed:{opacity:.8},section:{gap:y.sm},monthCard:{gap:y.sm,padding:y.md,backgroundColor:"transparent",borderColor:m.borderSubtle,borderRadius:8},monthAmount:{color:m.expenseStrong,fontSize:32,lineHeight:40,fontWeight:"700",textAlign:"right",fontVariant:["tabular-nums"]},monthDivider:{height:1,marginVertical:y.xs,backgroundColor:m.borderSubtle},monthMeta:{flexDirection:"row",flexWrap:"wrap",gap:y.xl},metaLabel:{color:m.muted,fontSize:12,fontWeight:"700"},metaAmount:{marginTop:4,color:m.ink,fontSize:15,fontWeight:"600",textAlign:"right",fontVariant:["tabular-nums"]},listCard:{paddingVertical:0,borderRadius:8},transaction:{flexDirection:"row",alignItems:"center",minHeight:56,paddingHorizontal:y.md,gap:y.sm},transactionText:{flex:1,minWidth:0,gap:4},transactionName:{...f.value,fontWeight:"600"},transactionAmount:{flexShrink:0,textAlign:"right",fontVariant:["tabular-nums"],color:m.expense,fontSize:15,fontWeight:"600"},divider:{borderTopWidth:1,borderTopColor:m.border},monthLink:{minHeight:52,alignItems:"center",justifyContent:"center",borderWidth:1.5,borderColor:m.primary,borderRadius:8},monthLinkText:{color:m.primary,fontSize:16,fontWeight:"600"},emptyCard:{gap:y.md,padding:y.lg,borderRadius:8},emptyTitle:{color:m.ink,fontSize:21,fontWeight:"700"}});function G(e,a,o,i,s,n){const l=a?e.filter(d=>d.householdId===a):[],c=ue(l,[...o]);return{signedIn:i,demo:a==="demo-active",isEmpty:o.length===0,netWorth:pe(l,c),income:o.filter(d=>d.kind==="income"&&U(d.occurredAt)===s).reduce((d,h)=>d+h.amount,0),expense:he([...o],s),bankBalance:c.bank??0,cardBalance:c.card??0,recentTransactions:o.filter(d=>re(d.occurredAt)<=n).sort((d,h)=>Date.parse(h.occurredAt)-Date.parse(d.occurredAt)||h.id.localeCompare(d.id)).slice(0,5)}}const{expect:v,fn:_}=__STORYBOOK_MODULE_TEST__,E=ee(),R=te(),H=G(E.accounts,E.book.id,E.transactions,!0,"2026-08","2026-08-31"),ge=G(R.accounts,R.book.id,R.transactions,!1,"2026-08","2026-08-31"),we={title:"Screens/Home",component:ye,args:{model:H,localReady:!0,onCapture:_(),onMonthly:_()},argTypes:{model:{control:"object"},localReady:{control:"boolean"},onCapture:{control:!1},onMonthly:{control:!1}}},S={play:async({canvas:e})=>{await v(e.getByText("최근 거래")).toBeVisible(),await v(e.queryByRole("button",{name:"거래 기록하기"})).not.toBeInTheDocument()}},w={args:{model:ge},play:async({args:e,canvas:a,userEvent:o})=>{await o.click(a.getByRole("button",{name:"첫 거래 기록하기"})),await v(e.onCapture).toHaveBeenCalledOnce()}},T={args:{localReady:!1}},B={args:{model:{...H,signedIn:!1,demo:!1}}},C={args:{model:{...H,recentTransactions:[{...E.transactions.find(e=>e.id==="demo-groceries"),merchant:void 0}]},onTransaction:_()},play:async({args:e,canvas:a,userEvent:o})=>{await v(a.queryByText("미분류 거래")).not.toBeInTheDocument(),await o.click(a.getByRole("button",{name:"거래 상세 거래 상대 미입력"})),await v(e.onTransaction).toHaveBeenCalledWith("demo-groceries")}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('최근 거래')).toBeVisible();
    await expect(canvas.queryByRole('button', {
      name: '거래 기록하기'
    })).not.toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    localReady: false
  }
}`,...T.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    model: {
      ...populatedModel,
      signedIn: false,
      demo: false
    }
  }
}`,...B.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    model: {
      ...populatedModel,
      recentTransactions: [{
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
}`,...C.parameters?.docs?.source}}};const Te=["Populated","Empty","Loading","LocalPopulated","MissingMerchant"];export{w as Empty,T as Loading,B as LocalPopulated,C as MissingMerchant,S as Populated,Te as __namedExportsOrder,we as default};
