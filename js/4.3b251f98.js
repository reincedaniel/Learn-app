(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"3a50":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"constrain flex"},[t("div",{staticClass:"full-width"},[t("div",{staticClass:"q-ma-md"},[t("q-expansion-item",{staticClass:"bg-grey-3 text-bold text-positive",staticStyle:{"border-radius":"15px"},attrs:{icon:"policy",label:"Opções de Pesquisas"},model:{value:e.expanded,callback:function(a){e.expanded=a},expression:"expanded"}},[t("q-card",{staticClass:"no-shadow",staticStyle:{"border-radius":"15px"}},[t("q-card-section",{},[t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col"},[t("q-input",{attrs:{dense:"","label-color":"teal-9 text-bold",color:"grey-9","bg-color":"white",rounded:"",outlined:"",label:"Área de Actuação"},model:{value:e.curso,callback:function(a){e.curso=a},expression:"curso"}})],1)]),t("div",{staticClass:"row q-mt-xs q-gutter-y-sm"},[t("div",{staticClass:"col"},[t("q-input",{attrs:{dense:"","label-color":"teal-9 text-bold",color:"grey-9","bg-color":"white",rounded:"",outlined:"",label:"Localização/Município"},model:{value:e.local,callback:function(a){e.local=a},expression:"local"}})],1)]),t("div",{staticClass:"row q-mt-xs q-gutter-y-sm"},[t("div",{staticClass:"col-sm-6 col-xs-12"},[t("q-input",{attrs:{type:"number",prefix:"AKZ",dense:"","label-color":"teal-9 text-bold",color:"grey-9","bg-color":"white",rounded:"",outlined:"",label:"Salário"},model:{value:e.modelInvest,callback:function(a){e.modelInvest=a},expression:"modelInvest"}})],1)]),t("div",{staticClass:"row q-mt-md q-gutter-x-sm",staticStyle:{display:"flex","justify-content":"flex-end"}},[t("q-btn",{staticClass:"q-mb-md col-sm-3 col-xs-12",staticStyle:{top:"0"},attrs:{rounded:"",size:"md",color:"grey-8",label:"Restaurar",icon:"restore_page"},on:{click:function(a){return e.restaurar()}}}),t("q-btn",{staticClass:"q-mb-md col-sm-3 col-xs-12",staticStyle:{top:"0"},attrs:{size:"md",rounded:"",color:"positive",label:"Pesquisar",icon:"search"},on:{click:function(a){return e.filtroPesquisa()}}})],1)])],1)],1),t("div",{staticClass:"row q-mt-md"},[t("AppLocaleProfissionalVue")],1)],1)])])},o=[],n=t("9523"),i=t.n(n),r=t("8c7d"),l={components:{AppLocaleProfissionalVue:r["a"]},data:function(){var e;return e={expanded:!0,modelSingle:"Apple",modelMultiple:["Facebook"],options:["Google","Facebook","Twitter","Apple","Oracle"],curso:null,local:null},i()(e,"expanded",!0),i()(e,"modelInvest",null),i()(e,"modelQualidade",null),i()(e,"optionsInvest",["Económico","Mediano","Liberal"]),i()(e,"optionsQualidade",["Satisfatório","Muito Bom","Excelente"]),e},methods:{restaurar:function(){this.modelInvest=null,this.modelQualidade=null,this.curso=null,this.local=null}}},c=l,d=t("2877"),p=t("9989"),u=t("3b73"),m=t("f09f"),g=t("a370"),f=t("ddd8"),b=t("27f9"),x=t("9c40"),v=t("eebe"),q=t.n(v),C=Object(d["a"])(c,s,o,!1,null,null,null);a["default"]=C.exports;q()(C,"components",{QPage:p["a"],QExpansionItem:u["a"],QCard:m["a"],QCardSection:g["a"],QSelect:f["a"],QInput:b["a"],QBtn:x["a"]})},"8c7d":function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{},[t("div",{staticClass:"row constrain ponto-first-contact text-grey-8"},[t("div",{staticClass:"col-12"},[t("q-timeline",{attrs:{color:"secondary"}},[t("q-timeline-entry",{staticClass:"q-ml-lg",attrs:{heading:""}},[t("span",{staticClass:"text-bold",staticStyle:{"font-size":"28px"}},[t("q-icon",{attrs:{name:"ti-map-alt",size:"50px"}})],1)]),t("q-timeline-entry",{staticClass:"q-ml-lg",attrs:{title:"Ranking - Nacionais e Internacionais",subtitle:"Angola"}}),t("q-table",{attrs:{data:e.rows,columns:e.columns,"row-key":"name",pagination:e.pagination,"hide-pagination":"",grid:"","hide-header":""},on:{"update:pagination":function(a){e.pagination=a}},scopedSlots:e._u([{key:"item",fn:function(a){return[t("div",{staticClass:"q-pa-md col-xs-12 col-sm-6 col-md-6 col-lg-6 grid-style-transition",style:a.selected?"transform: scale(0.95);":""},[t("q-card",{attrs:{flat:"",bordered:""}},[t("q-card-section",{attrs:{horizontal:""}},[t("q-card-section",[t("q-btn",{staticClass:"absolute",staticStyle:{top:"0",right:"12px",transform:"translateY(-50%)"},attrs:{fab:"",color:"secondary",icon:"favorite"}},[t("q-tooltip",{attrs:{"content-class":"bg-accent text-secondary",offset:[10,10]}},[e._v("\n                        Favorito\n                      ")])],1),t("div",{staticClass:"row no-wrap items-center"},[t("div",{staticClass:"col text-h6"},[e._v("\n                        "+e._s(a.row.name)+"\n                      ")])]),t("div",{staticClass:"col-auto text-grey text-caption q-pt-md row no-wrap items-center"},[t("q-icon",{attrs:{size:"25px",name:"place"}}),t("span",{staticClass:"text-bold"},[e._v(e._s(a.row.address)+" ")])],1),t("div",{staticClass:"col-auto text-positive text-caption q-pt-md row no-wrap items-center"},[t("q-icon",{attrs:{name:"hotel_class",size:"25px"}}),t("span",{staticClass:"text-bold"},[e._v(" Estrelas")])],1),t("q-rating",{attrs:{color:"primary",max:9,size:"20px"},model:{value:a.row.rate,callback:function(t){e.$set(a.row,"rate",t)},expression:"props.row.rate"}}),t("div",{staticClass:"text-caption text-grey q-mt-md"},[e._v('\n                      " '+e._s(a.row.desc)+' "\n                    ')])],1),t("q-card-section",{staticClass:"col-5 flex flex-center"},[t("q-img",{staticClass:"rounded-borders",attrs:{src:a.row.profile}})],1)],1),t("q-separator"),t("q-card-actions",[t("q-btn",{attrs:{rounded:"","no-caps":"",color:"positive",label:"Ver Perfíl",icon:"ti-eye"}})],1)],1)],1)]}}])}),t("div",{staticClass:"row justify-center q-mt-md"},[t("q-pagination",{attrs:{color:"grey-8",max:e.pagesNumber,size:"sm"},model:{value:e.pagination.page,callback:function(a){e.$set(e.pagination,"page",a)},expression:"pagination.page"}})],1)],1)],1)])])},o=[],n=(t("b0c0"),{name:"First-Access",data:function(){return{text:null,pagination:{sortBy:"desc",descending:!1,page:1,rowsPerPage:2},stars:5,columns:[{name:"name",required:!0,label:"Dessert (100g serving)",align:"left",field:function(e){return e.name},format:function(e){return"".concat(e)},sortable:!0}],rows:[{name:"Medicina Geral | Saúde",address:"Clínica Centrovita",age:18,gender:2,rate:8,desc:"uma empresa de direito angolano que atua na área da Saúde Internacional, oferecendo ...",alarm:"8H:00 - 23H:00",profile:"/profissional/16.png"},{name:"Engenharia | Petróleo",address:"Total Energies",age:18,gender:3,rate:4,desc:"um grupo empresarial do setor petroquímico e energético com sede mundial em La Défense, Paris ...",alarm:"8H:00 - 23H:00",profile:"/profissional/13.webp"},{name:"Medicina Geral | Saúde",address:"Clínica Endiama",age:18,gender:2,rate:4,desc:"Tem na sua génese um dos princípios-base da grande e poderosa Diamang: os trabalhadores são o ...",alarm:"8H:00 - 23H:00",profile:"/profissional/14.png"},{name:"Engenharia | Produção",calories:305,address:"Sonangol",age:18,gender:3,rate:4,desc:"Empresa estatal do ramo petrolífero, responsável pela administração e exploração do petróleo ...",alarm:"8H:00 - 23H:00",profile:"/profissional/12.png"},{name:"Comunicação | Tecnologia",address:"Ucall Angola",age:18,gender:1,rate:3,desc:"Empresa lider em Serviços de Contact Center e Experiência de Clientes, com soluções ...",alarm:"8H:00 - 23H:00",profile:"/profissional/10.png"},{name:"Engenharia | Tecnologia",address:"Digital Factory Angola",age:18,gender:3,rate:0,desc:"Uma das maiores fabricas digitias de Angola, com projectos para todos ...",alarm:"8H:00 - 23H:00",profile:"/profissional/11.png"}]}},filters:{getGender:function(e){return e?1==e?"Masculino":2==e?"Femenino":"Transexual / Travesti":""},getGenderIcon:function(e){return e?1==e?"male":2==e?"female":"transgender":""}},computed:{pagesNumber:function(){return Math.ceil(this.rows.length/this.pagination.rowsPerPage)}}}),i=n,r=(t("b718"),t("2877")),l=t("05eb"),c=t("74af"),d=t("0016"),p=t("eaac"),u=t("f09f"),m=t("a370"),g=t("9c40"),f=t("05c0"),b=t("daf4"),x=t("068f"),v=t("eb85"),q=t("4b7e"),C=t("3b16"),w=t("eebe"),y=t.n(w),h=Object(r["a"])(i,s,o,!1,null,"68ddbca4",null);a["a"]=h.exports;y()(h,"components",{QTimeline:l["a"],QTimelineEntry:c["a"],QIcon:d["a"],QTable:p["a"],QCard:u["a"],QCardSection:m["a"],QBtn:g["a"],QTooltip:f["a"],QRating:b["a"],QImg:x["a"],QSeparator:v["a"],QCardActions:q["a"],QPagination:C["a"]})},"9e25":function(e,a,t){},b718:function(e,a,t){"use strict";t("9e25")}}]);