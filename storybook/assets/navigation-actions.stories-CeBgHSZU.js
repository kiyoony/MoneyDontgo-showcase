import{n as e}from"./iframe-BtfsOyvk.js";import{K as t,L as n,R as r,c as i,d as a,l as o,n as s,o as c,q as l,r as u,s as d,t as f,u as p}from"./jsx-runtime-CYW6yHk2.js";import{n as m,t as h}from"./Modal-C0oBvyB_.js";import{n as g}from"./rolldown-runtime-C0FnF6B9.js";function _({onPress:e}){return(0,S.jsx)(c,{testID:`header-record-action`,accessibilityRole:`button`,accessibilityLabel:`거래 기록하기`,accessibilityHint:`빠른 입력을 엽니다`,hitSlop:8,onPress:e,style:({pressed:e})=>[C.record,e&&C.pressed],children:(0,S.jsx)(i,{style:C.plus,children:`+`})})}function v({name:e,onPress:t,expanded:n=!1}){return(0,S.jsxs)(c,{testID:`book-menu-action`,accessibilityRole:`button`,accessibilityState:{expanded:n},accessibilityLabel:`장부 메뉴 열기`,accessibilityHint:`장부 관리, 백업 및 공유, 기록 연동을 엽니다`,onPress:t,style:({pressed:e})=>[C.menu,e&&C.pressed],children:[(0,S.jsx)(i,{numberOfLines:1,style:C.name,children:e}),(0,S.jsx)(i,{style:C.chevron,children:`⌄`})]})}function y({name:e,title:t,onBookMenu:n,onRecord:r}){return(0,S.jsxs)(p,{testID:`compact-primary-header`,style:C.compactHeader,children:[(0,S.jsx)(p,{style:C.headerLeading,children:(0,S.jsx)(v,{name:e,onPress:n})}),t?(0,S.jsx)(p,{pointerEvents:`none`,style:C.headerCenter,children:(0,S.jsx)(i,{accessibilityRole:`header`,style:C.headerTitle,children:t})}):null,(0,S.jsx)(p,{testID:`header-trailing-slot`,style:C.headerTrailing,children:(0,S.jsx)(_,{onPress:r})})]})}function b({name:e,visible:t,onDismiss:r,onManage:a,onBackupAndShare:o,onSettings:s}){if(!t)return null;let l=(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(p,{style:C.sheetRoot,children:[(0,S.jsx)(c,{accessibilityRole:`button`,accessibilityLabel:`장부 메뉴 닫기`,onPress:r,style:C.scrim}),(0,S.jsxs)(p,{accessibilityViewIsModal:!0,style:C.sheet,children:[(0,S.jsx)(p,{style:C.handle}),(0,S.jsx)(i,{style:C.sheetTitle,children:e}),(0,S.jsx)(i,{style:C.sheetDescription,children:`개인 장부는 이 기기에 안전하게 저장됩니다.`}),(0,S.jsx)(x,{label:`장부 관리`,description:`장부와 카테고리를 관리합니다`,onPress:a}),(0,S.jsx)(x,{label:`백업 및 공유`,description:`필요할 때만 연결해 함께 사용합니다`,onPress:o}),(0,S.jsx)(x,{label:`기록 연동`,description:`기기에 맞는 빠른 기록 방식을 확인합니다`,onPress:s})]})]})});return n.OS===`web`?(0,S.jsx)(p,{style:C.webSheetRoot,children:l}):(0,S.jsx)(h,{transparent:!0,animationType:`slide`,visible:!0,onRequestClose:r,children:l})}function x({label:e,description:t,onPress:n}){return(0,S.jsxs)(c,{accessibilityRole:`button`,accessibilityLabel:e,accessibilityHint:t,onPress:n,style:({pressed:e})=>[C.menuItem,e&&C.pressed],children:[(0,S.jsx)(i,{style:C.menuItemLabel,children:e}),(0,S.jsx)(i,{style:C.menuItemDescription,children:t})]})}var S,C;function w(){return(w=g((()=>{m(),r(),d(),t(),o(),a(),s(),S=f(),C=l.create({record:{width:44,height:44,alignItems:`center`,justifyContent:`center`,marginRight:4,borderRadius:22},plus:{color:u.primary,fontSize:28,fontWeight:`500`,lineHeight:30},menu:{maxWidth:210,minHeight:44,flexDirection:`row`,alignItems:`center`,gap:2},name:{maxWidth:170,color:u.ink,fontSize:17,fontWeight:`800`},chevron:{color:u.ink,fontSize:20,lineHeight:20},compactHeader:{flex:1,position:`relative`,flexDirection:`row`,alignItems:`center`},headerLeading:{flex:1,minWidth:0,alignItems:`flex-start`},headerCenter:{position:`absolute`,left:56,right:56,alignItems:`center`},headerTitle:{color:u.ink,fontSize:16,fontWeight:`800`},headerTrailing:{width:48,alignItems:`flex-end`},pressed:{opacity:.68},webSheetRoot:{...l.absoluteFill,zIndex:20},sheetRoot:{flex:1,justifyContent:`flex-end`},scrim:{...l.absoluteFill,backgroundColor:`rgba(25, 31, 29, 0.38)`},sheet:{minHeight:340,padding:20,paddingBottom:32,gap:6,borderTopLeftRadius:24,borderTopRightRadius:24,backgroundColor:u.surface},handle:{alignSelf:`center`,width:36,height:4,marginBottom:8,borderRadius:2,backgroundColor:u.border},sheetTitle:{color:u.ink,fontSize:20,fontWeight:`800`},sheetDescription:{marginBottom:12,color:u.muted,fontSize:14,lineHeight:20},menuItem:{minHeight:64,justifyContent:`center`,paddingHorizontal:4,borderBottomWidth:1,borderBottomColor:u.border},menuItemLabel:{color:u.ink,fontSize:16,fontWeight:`800`},menuItemDescription:{marginTop:3,color:u.muted,fontSize:13,lineHeight:18}})})))()}var T,E,D,O,k,A,j,M;function N(){return(N=g((()=>{T=e(),o(),a(),w(),E=f(),D={component:_},O={args:{onPress:()=>void 0},render:()=>{let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(p,{style:{gap:12},children:[(0,E.jsx)(_,{onPress:()=>t(!0)}),e&&(0,E.jsx)(i,{children:`빠른 입력 열림`})]})}},k={args:{onPress:()=>void 0},render:()=>{let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(p,{style:{gap:12},children:[(0,E.jsx)(v,{name:`내 장부`,onPress:()=>t(!0)}),e&&(0,E.jsx)(i,{children:`장부 메뉴 열림`})]})}},A={args:{onPress:()=>void 0},render:()=>{let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(p,{style:{width:`100%`,height:64},children:[(0,E.jsx)(y,{name:`내 장부`,onBookMenu:()=>t(!0),onRecord:()=>t(!0)}),e?(0,E.jsx)(i,{children:`행동 열림`}):null]})}},j={args:{onPress:()=>void 0},render:()=>{let[e,t]=(0,T.useState)(!0),[n,r]=(0,T.useState)(``);return(0,E.jsxs)(p,{style:{position:`relative`,height:740,overflow:`hidden`},children:[(0,E.jsx)(v,{name:`내 장부`,expanded:e,onPress:()=>t(!0)}),(0,E.jsx)(b,{name:`내 장부`,visible:e,onDismiss:()=>t(!1),onManage:()=>r(`장부 관리 선택`),onBackupAndShare:()=>r(`백업 및 공유 선택`),onSettings:()=>r(`설정 선택`)}),n?(0,E.jsx)(i,{children:n}):null]})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    onPress: () => undefined
  },
  render: () => {
    const [opened, setOpened] = useState(false);
    return <View style={{
      gap: 12
    }}><RecordAction onPress={() => setOpened(true)} />{opened && <Text>빠른 입력 열림</Text>}</View>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    onPress: () => undefined
  },
  render: () => {
    const [opened, setOpened] = useState(false);
    return <View style={{
      gap: 12
    }}><BookMenuAction name="내 장부" onPress={() => setOpened(true)} />{opened && <Text>장부 메뉴 열림</Text>}</View>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    onPress: () => undefined
  },
  render: () => {
    const [opened, setOpened] = useState(false);
    return <View style={{
      width: '100%',
      height: 64
    }}><CompactPrimaryHeader name="내 장부" onBookMenu={() => setOpened(true)} onRecord={() => setOpened(true)} />{opened ? <Text>행동 열림</Text> : null}</View>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    onPress: () => undefined
  },
  render: () => {
    const [opened, setOpened] = useState(true);
    const [selected, setSelected] = useState('');
    return <View style={{
      position: 'relative',
      height: 740,
      overflow: 'hidden'
    }}><BookMenuAction name="내 장부" expanded={opened} onPress={() => setOpened(true)} />
    <BookMenuSheet name="내 장부" visible={opened} onDismiss={() => setOpened(false)} onManage={() => setSelected('장부 관리 선택')} onBackupAndShare={() => setSelected('백업 및 공유 선택')} onSettings={() => setSelected('설정 선택')} />
    {selected ? <Text>{selected}</Text> : null}
  </View>;
  }
}`,...j.parameters?.docs?.source}}},M=[`Record`,`BookMenu`,`CompactHomeHeader`,`BookMenuSheetActions`]})))()}N();export{k as BookMenu,j as BookMenuSheetActions,A as CompactHomeHeader,O as Record,M as __namedExportsOrder,D as default};