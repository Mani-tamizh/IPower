import{r as n,j as e,L as h}from"./index-DwyggpAa.js";import{f as p,H as x,F as j}from"./Footer-Dk_NyR8S.js";import{e as v,d as b,B as u,F as w}from"./index-CFOIoAHA.js";/* empty css              */const l=[{id:1,question:"What materials can you plasma cut?",answer:"Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum."},{id:2,question:"What is the maximum thickness of metal you can cut?",answer:"Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum."},{id:3,question:"How long does it take to complete a project?",answer:"Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum."},{id:4,question:"Do you offer design assistance?",answer:"Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum."},{id:5,question:"Can you handle bulk orders?",answer:"Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum."}],f=()=>{const[s,a]=n.useState(""),[i,r]=n.useState(l),c=t=>{const o=t.target.value;a(o);const d=l.filter(m=>m.question.toLowerCase().includes(o.toLowerCase()));r(d)};return e.jsxs("div",{className:"container",children:[e.jsx("h2",{className:"heading",children:"How can we help you?"}),e.jsx(g,{onSearchChange:c,value:s}),e.jsx("section",{className:"faq",children:i.map(t=>e.jsx(C,{question:t.question,answer:t.answer},t.id))})]})},g=({onSearchChange:s,value:a})=>e.jsxs("form",{children:[e.jsx("svg",{viewBox:"0 0 512 512",width:"100",title:"search",children:e.jsx("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})}),e.jsx("input",{className:"searchbar",type:"text",placeholder:"Describe your issue",onChange:s,value:a})]}),C=({question:s,answer:a})=>{const[i,r]=n.useState(!1),c=()=>{r(!i)};return e.jsxs("div",{className:"question-wrapper",children:[e.jsxs("div",{className:"question",children:[e.jsx("h3",{children:s}),e.jsx("button",{onClick:c,children:i?e.jsx(v,{}):e.jsx(b,{})})]}),e.jsx("div",{className:i?"answer active":"answer",children:e.jsx("p",{children:a})})]})},q=()=>e.jsxs("div",{className:"Faqlanding",children:[e.jsx("h1",{children:"FAQ"}),e.jsxs(u,{variants:p("left",.7),initial:"hidden",animate:"show",whileInView:"show",viewport:{once:!1,amount:.8},children:[e.jsx(u.Item,{className:"breadcrumb",children:e.jsx(h,{to:"/",children:"Home"})}),e.jsx("span",{className:"breadcrumb-separator",children:e.jsx(w,{className:`icon
            `})}),e.jsx(u.Item,{className:"breadcrumb",children:"FAQ"})]})]}),A=()=>(n.useEffect(()=>{document.title="FAQ"},[]),e.jsxs(e.Fragment,{children:[e.jsx(x,{}),e.jsx(q,{}),e.jsx(f,{}),e.jsx(j,{})]}));export{A as default};
