(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{593:function(e,t,n){"use strict";n.r(t);var o={name:"DraggableDiv",data:function(){return{positions:{clientX:void 0,clientY:void 0,movementX:0,movementY:0}}},methods:{dragMouseDown:function(e){e.preventDefault(),this.positions.clientX=e.clientX,this.positions.clientY=e.clientY,document.onmousemove=this.elementDrag,document.onmouseup=this.closeDragElement},elementDrag:function(e){e.preventDefault(),this.positions.movementX=this.positions.clientX-e.clientX,this.positions.movementY=this.positions.clientY-e.clientY,this.positions.clientX=e.clientX,this.positions.clientY=e.clientY,this.$refs.draggableContainer.style.top=this.$refs.draggableContainer.offsetTop-this.positions.movementY+"px",this.$refs.draggableContainer.style.left=this.$refs.draggableContainer.offsetLeft-this.positions.movementX+"px"},closeDragElement:function(){document.onmouseup=null,document.onmousemove=null}}},l=n(19),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{ref:"draggableContainer",attrs:{id:"draggable-container"}},[t("div",{attrs:{id:"draggable-header"},on:{mousedown:e.dragMouseDown}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports}}]);