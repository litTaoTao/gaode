webpackJsonp([9],{aazb:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("lC5x"),o=t.n(a),r=t("J0Oq"),s=t.n(r),c=t("Muz9"),l=t.n(c),i=t("gyMJ"),u=t("X1H5"),p={name:"JSSDK",data:function(){return{res:"",error:"",images:{}}},created:function(){var e=this;return s()(o.a.mark(function n(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=encodeURIComponent(window.location.href.split("#")[0]),e.next=3,Object(i.e)({url:t});case 3:return e.sent,e.next=6,l.a.get("https://api-uat.tianan-life.com/wx-claim-apply/api/callBack/Test?url="+t);case 6:a=e.sent,u.config({debug:!0,appId:a.appId,timestamp:a.timestamp,nonceStr:a.noncestr,signature:a.signature,jsApiList:["getLocalImgData","chooseImage"]}),u.error(function(e){console.log(e)});case 9:case"end":return e.stop()}},n,e)}))()},methods:{chooseImage:function(){var e=this;u.chooseImage({sizeType:["original","compressed"],sourceType:["album","camera"],count:9,success:function(n){for(var t=0;t<n.localIds.length;t++)console.log(n.localIds[t]),u.getLocalImgData({localId:n.localIds[t],success:function(e){alert(56789)}});e.images.localId=n.localIds},error:function(e){console.log(e)}})}},mounted:function(){}},m={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",{on:{click:e.chooseImage}},[e._v("chooseImage")]),e._v(" "),t("p",[e._v("res:"+e._s(e.res))]),e._v(" "),t("p",[e._v("error:"+e._s(e.error))]),e._v(" "),t("p",[e._v(e._s(e.images))]),e._v(" "),t("ul",e._l(e.images.localId,function(n){return t("li",[t("img",{attrs:{src:n}}),e._v(e._s(n)+"\n           ")])}),0)])},staticRenderFns:[]},g=t("C7Lr")(p,m,!1,null,null,null);n.default=g.exports}});
//# sourceMappingURL=9.6d394a7c12c56606c0df.js.map