(this["webpackJsonpdrag-and-drop"]=this["webpackJsonpdrag-and-drop"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),s=a.n(r),o=(a(77),a(78),a(79),a(80),a(81),a(70)),i=a(18),c=a(19),m=a(25),u=a(24),d=a(26),p=(a(84),a(85),a(7)),E=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Navigation")},className:"sidebar-button"},"Navigation"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Heading")},className:"sidebar-button"},"Heading"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Image")},className:"sidebar-button"},"Image"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Button")},className:"sidebar-button"},"Button"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Divider")},className:"sidebar-button"},"Divider"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Spacer")},className:"sidebar-button"},"Spacer"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Row")},className:"sidebar-button"},"Row"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Icon")},className:"sidebar-button"},"Icon"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Video")},className:"sidebar-button"},"Video"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("ButtonGroup")},className:"sidebar-button"},"ButtonGroup"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Card")},className:"sidebar-button"},"Card"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Carousel")},className:"sidebar-button"},"Carousel"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Jumbotron")},className:"sidebar-button"},"Jumbotron"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("List")},className:"sidebar-button"},"List"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Pagination")},className:"sidebar-button"},"Pagination"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Table")},className:"sidebar-button"},"Table"),l.a.createElement(p.a,{onClick:function(){e.props.sideBarButton_OnClick("Toast")},className:"sidebar-button"},"Toast"))}}]),t}(n.Component),h=a(71),g=a(41),b=a(53),y=a(31),f=a(39),v=a(22),k=a(62),x=a(65),C=a(23),B=a(29),N=a(36),w=a(30),S=a(66),O=a(12),j=a(67),H=a(5),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={border:void 0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"returnColumns",value:function(){for(var e=[],t=0;t<this.props.columns.length;t++){var a=this.props.columns[t];e.push(l.a.createElement(v.a,null,this.returnPageSection(a.type)))}return e}},{key:"returnYouTube",value:function(e,t,a,n,r){var s="";s=e.includes("watch")?e.split("=")[1]:e.split("/")[3];var o={height:t,width:a,playerVars:{autoplay:n,loop:r}};return l.a.createElement(k.a,{videoId:s,opts:o,onReady:this._onReady})}},{key:"returnPageSection",value:function(e){switch(e){case"Navigation":return l.a.createElement(g.a,{key:this.props.index,bg:"light",expand:"lg",style:{width:this.props.style.width}},l.a.createElement(g.a.Brand,{href:"#home",style:{position:this.props.style.position,top:this.props.style.top}},"React-Bootstrap"),l.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(g.a.Collapse,{id:"basic-navbar-nav",style:{alignItems:this.props.style.alignItems,justifyContent:this.props.style.justifyContent}},l.a.createElement(b.a,null,l.a.createElement(b.a.Link,{href:"#home"},"Home"),l.a.createElement(b.a.Link,{href:"#link"},"Link"),l.a.createElement(y.a,{title:"Dropdown",id:"basic-nav-dropdown"},l.a.createElement(y.a.Item,{href:"#action/3.1"},"Action"),l.a.createElement(y.a.Item,{href:"#action/3.2"},"Another action"),l.a.createElement(y.a.Item,{href:"#action/3.3"},"Something"),l.a.createElement(y.a.Divider,null),l.a.createElement(y.a.Item,{href:"#action/3.4"},"Separated link")))));case"Heading":return l.a.createElement("h1",{key:this.props.index,style:this.props.style},this.props.text);case"Divider":return l.a.createElement("hr",{key:this.props.index,style:this.props.style});case"Image":return l.a.createElement("img",{key:this.props.index,src:this.props.url,alt:this.props.text,style:this.props.style});case"Button":return l.a.createElement("button",{key:this.props.index,style:this.props.style},this.props.text);case"Spacer":return l.a.createElement("div",{key:this.props.index,style:this.props.style});case"Row":return l.a.createElement(f.a,{key:this.props.index,style:{width:"100%"}},this.returnColumns());case"Video":return l.a.createElement("div",{style:{backgroundColor:this.props.style.backgroundColor}},l.a.createElement("div",{key:this.props.index,style:this.props.style},this.returnYouTube(this.props.url,this.props.style.height,this.props.style.width,this.props.autoplay,this.props.loop)));case"Icon":return l.a.createElement("i",{key:this.props.index,className:this.props.faClassName,style:this.props.style});case"ButtonGroup":return l.a.createElement(x.a,{"aria-label":"Basic example"},l.a.createElement(p.a,{variant:"secondary"},"Left"),l.a.createElement(p.a,{variant:"secondary"},"Middle"),l.a.createElement(p.a,{variant:"secondary"},"Right"));case"Card":return l.a.createElement(C.a,{style:{width:"18rem"}},l.a.createElement(C.a.Img,{variant:"top",src:"https://images.unsplash.com/photo-1473425021274-58232d06e88b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null,"Card Title"),l.a.createElement(C.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")),l.a.createElement(B.a,{className:"list-group-flush"},l.a.createElement(N.a,null,"Cras justo odio"),l.a.createElement(N.a,null,"Dapibus ac facilisis in"),l.a.createElement(N.a,null,"Vestibulum at eros")),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Link,{href:"#"},"Card Link"),l.a.createElement(C.a.Link,{href:"#"},"Another Link")));case"Carousel":return l.a.createElement(w.a,{indicators:!1,style:{width:this.props.style.width}},l.a.createElement(w.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"https://images.unsplash.com/photo-1474770337042-bd7e2ccb4f39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",alt:"First slide"}),l.a.createElement(w.a.Caption,null,l.a.createElement("h3",null,"First slide label"),l.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),l.a.createElement(w.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"https://images.unsplash.com/photo-1474770337042-bd7e2ccb4f39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",alt:"Third slide"}),l.a.createElement(w.a.Caption,null,l.a.createElement("h3",null,"Second slide label"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement(w.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:"https://images.unsplash.com/photo-1474770337042-bd7e2ccb4f39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",alt:"Third slide"}),l.a.createElement(w.a.Caption,null,l.a.createElement("h3",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))));case"Jumbotron":return l.a.createElement(S.a,null,l.a.createElement("h1",null,"Hello, world!"),l.a.createElement("p",null,"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),l.a.createElement("p",null,l.a.createElement(p.a,{variant:"primary"},"Learn more")));case"List":return l.a.createElement(B.a,null,l.a.createElement(B.a.Item,null,"Cras justo odio"),l.a.createElement(B.a.Item,null,"Dapibus ac facilisis in"),l.a.createElement(B.a.Item,null,"Morbi leo risus"),l.a.createElement(B.a.Item,null,"Porta ac consectetur ac"),l.a.createElement(B.a.Item,null,"Vestibulum at eros"));case"Pagination":return l.a.createElement(O.a,null,l.a.createElement(O.a.First,null),l.a.createElement(O.a.Prev,null),l.a.createElement(O.a.Item,null,1),l.a.createElement(O.a.Ellipsis,null),l.a.createElement(O.a.Item,null,10),l.a.createElement(O.a.Item,null,11),l.a.createElement(O.a.Item,{active:!0},12),l.a.createElement(O.a.Item,null,13),l.a.createElement(O.a.Item,{disabled:!0},14),l.a.createElement(O.a.Ellipsis,null),l.a.createElement(O.a.Item,null,20),l.a.createElement(O.a.Next,null),l.a.createElement(O.a.Last,null));case"Table":return l.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Username"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Otto"),l.a.createElement("td",null,"@mdo")),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Jacob"),l.a.createElement("td",null,"Thornton"),l.a.createElement("td",null,"@fat")),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",{colSpan:"2"},"Larry the Bird"),l.a.createElement("td",null,"@twitter"))));case"Toast":return l.a.createElement(H.a,null,l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Bootstrap"),l.a.createElement("small",null,"11 mins ago")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message."));default:console.log("invalid or incomplete section!")}}},{key:"render",value:function(){var e=this,t=this.props.clicked?"page-section clicked":"page-section";return l.a.createElement("div",{key:this.props.index,className:t,style:{border:this.state.border},onClick:function(){e.props.onClick(e.props.index,e.props.type)}},this.returnPageSection(this.props.type))}}]),t}(n.Component),I=a(54),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleActiveElement=function(e,t){a.setState({active:e}),a.props.pageSection_OnClick(e,t)},a.onDragEnd=function(e){e.destination&&a.props.reorder(e.source.index,e.destination.index)},a.getItemStyle=function(e,t){return Object(h.a)({background:e?"lightgreen":"grey"},t)},a.getListStyle=function(e){return{background:e?"lightblue":"lightgrey"}},a.state={page:a.props.page,renderedPage:a.returnPage(),active:-1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"returnPage",value:function(){var e=this;try{for(var t=[],a=function(a){var n=e.props.page[a];t.push(l.a.createElement(I.b,{key:a,draggableId:a.toString(),index:a},(function(t,r){return l.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:e.getItemStyle(r.isDragging,t.draggableProps.style)}),l.a.createElement(T,{clicked:e.state.active===a,onClick:e.handleActiveElement,index:a,type:n.type,key:a,style:n.style,text:n.text,url:n.url,faClassName:n.faClassName,columns:n.columns,autoplay:n.autoplay,loop:n.loop}))})))},n=0;n<this.props.page.length;n++)a(n);return t}catch(r){console.log(r)}}},{key:"render",value:function(){var e=this;return l.a.createElement(I.a,{onDragEnd:this.onDragEnd},l.a.createElement(I.c,{droppableId:"droppable"},(function(t,a){return l.a.createElement("div",Object.assign({},t.droppableProps,{ref:t.innerRef,style:e.getListStyle(a.isDraggingOver)}),e.returnPage())})))}}]),t}(n.Component),D=a(55),_=a(69),L=function(){function e(){Object(i.a)(this,e),this.pages=J}return Object(c.a)(e,[{key:"setPage",value:function(e){this.pages=e}},{key:"all",value:function(){return this.pages}},{key:"add",value:function(e){switch(e){case"Navigation":this.pages.unshift({type:"Navigation",style:{width:"100%",alignItems:"center",justifyContent:"flex-end",top:"25%",position:"absolute"}});break;case"Heading":this.pages.push({type:"Heading",text:"heading text",style:{}});break;case"Image":this.pages.push({type:"Image",url:"https://images.unsplash.com/photo-1585252478667-de7e8a482bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",style:{}});break;case"Button":this.pages.push({type:"Button",text:"button text here",url:"https://images.unsplash.com/photo-1585252478667-de7e8a482bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",style:{}});break;case"Divider":this.pages.push({type:"Divider",url:"https://images.unsplash.com/photo-1585252478667-de7e8a482bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",style:{margin:"5px",borderTop:"8px solid black",borderRadius:"5px",width:"100%"}});break;case"Spacer":this.pages.push({type:"Spacer",style:{width:"100%",height:"50px"}});break;case"Row":this.pages.push({type:"Row",columns:[{type:"Button",text:"button text here",url:"https://images.unsplash.com/photo-1585252478667-de7e8a482bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",style:{}},{type:"Button",text:"button text here",url:"https://images.unsplash.com/photo-1585252478667-de7e8a482bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",style:{}},{type:"Button",text:"button text here",url:"https://images.unsplash.com/photo-1585252478667-de7e8a482bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",style:{}}],style:{width:"100%",height:"50px"}});break;case"Icon":this.pages.push({type:"Icon",faClassName:"fa fa-car",style:{fontSize:"50px",color:"red"}});break;case"Video":this.pages.push({type:"Video",url:"https://www.youtube.com/watch?v=33ChEMiqeBE",autoplay:"true",loop:"true",style:{backgroundColor:"blue",height:"200px",width:"300px"}});break;case"ButtonGroup":this.pages.push({type:"ButtonGroup",style:{}});break;case"Card":this.pages.push({type:"Card",style:{}});break;case"Carousel":this.pages.push({type:"Carousel",style:{width:"100%",height:"50%",backgroundColor:"red"}});break;case"Jumbotron":this.pages.push({type:"Jumbotron",style:{}});break;case"List":this.pages.push({type:"List",style:{}});break;case"Pagination":this.pages.push({type:"Pagination",style:{}});break;case"Popover":this.pages.push({type:"Popover",style:{}});break;case"Table":this.pages.push({type:"Table",style:{}});break;case"Toast":this.pages.push({type:"Toast",style:{}})}}}]),e}(),J=[],M=L,R=a(11),q=a.n(R),W=new M,V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).sideBarButton_OnClick=function(e){W.add(e),a.setState({page:W.pages})},a.pageSection_OnClick=function(e,t){console.log(a.state,e,t),a.setState({activePageSection:e,menu:t}),console.log(a.state,e)},a.reorder=function(e,t){var n=W.all();console.log(n,e,t);var l=Array.from(n),r=l.splice(e,1),s=Object(o.a)(r,1)[0];return l.splice(t,0,s),W.setPage(l),a.setState({page:W.all()}),l},a.state={page:W.all(),activePageSection:-1,menu:void 0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"returnMenu",value:function(){var e=this;switch(this.state.menu){case"Navigation":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Navigation"),l.a.createElement("small",null,"Edit Navigation")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.",l.a.createElement(D.a,null,l.a.createElement(f.a,null,l.a.createElement(v.a,null,l.a.createElement(D.a.Label,null,"Text Input")),l.a.createElement(v.a,null,l.a.createElement(D.a.Control,{type:"text",placeholder:"Enter email"})))))));case"Heading":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Heading"),l.a.createElement("small",null,"Edit Heading")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"Image":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Image"),l.a.createElement("small",null,"Edit Image")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"Button":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Button"),l.a.createElement("small",null,"Edit Button")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"Divider":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Divider"),l.a.createElement("small",null,"Edit Divider")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"Spacer":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Spacer"),l.a.createElement("small",null,"Edit Spacer")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"Row":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Row"),l.a.createElement("small",null,"Edit Row")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"Icon":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Icon"),l.a.createElement("small",null,"Edit Icon")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"Video":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Video"),l.a.createElement("small",null,"Edit Video")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"ButtonGroup":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"ButtonGroup"),l.a.createElement("small",null,"Edit ButtonGroup")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"Card":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Card`"),l.a.createElement("small",null,"Edit Card`")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"Carousel":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Carousel"),l.a.createElement("small",null,"Edit Carousel")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"Jumbotron":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Jumbotron"),l.a.createElement("small",null,"Edit Jumbotron")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"List":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"List"),l.a.createElement("small",null,"Edit List")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"Pagination":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Pagination"),l.a.createElement("small",null,"Edit Pagination")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"Table":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Table"),l.a.createElement("small",null,"Edit Table")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));case"Toast":return l.a.createElement(q.a,null,l.a.createElement(H.a,{className:"editor-menu",onClose:function(){e.setState({menu:void 0,activePageSection:-1})}},l.a.createElement(H.a.Header,null,l.a.createElement("img",{src:"holder.js/20x20?text=%20",className:"rounded mr-2",alt:""}),l.a.createElement("strong",{className:"mr-auto"},"Toast"),l.a.createElement("small",null,"Edit Toast")),l.a.createElement(H.a.Body,null,"Hello, world! This is a toast message.")));default:return}}},{key:"render",value:function(){return l.a.createElement(_.a,{className:"page-container"},l.a.createElement(f.a,null,l.a.createElement(v.a,{className:"sidebar-container"},l.a.createElement(E,{sideBarButton_OnClick:this.sideBarButton_OnClick,page:this.props.page})),l.a.createElement(v.a,{className:"editing-page"},l.a.createElement(P,{pageSection_OnClick:this.pageSection_OnClick,active:this.state.activePageSection,page:this.state.page,reorder:this.reorder})),this.returnMenu()))}}]),t}(n.Component);var Q=function(){return l.a.createElement(V,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a(104)},77:function(e,t,a){},78:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.99c18193.chunk.js.map