(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[133],{1254:function(t,e,n){"use strict";var i=n(4836);e.__esModule=!0,e.default=void 0;var o=i(n(434)),r=i(n(7071)),a=i(n(7867)),d=i(n(7294)),s=i(n(5697)),l=n(989),u=(0,l.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),p=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="yangdongs-blog",n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,l.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,l.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,l.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.className,i=t.placeholder,a=(0,r.default)(t,["config","className","placeholder"]),s="disqus-comment-count"+(n?" "+n:"");return d.default.createElement("span",(0,o.default)({className:s,"data-disqus-identifier":e.identifier,"data-disqus-url":e.url},a),i)},e}(d.default.Component);e.default=p,p.defaultProps={placeholder:"..."},p.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string}),placeholder:s.default.string,className:s.default.string}},4294:function(t,e,n){"use strict";var i=n(4836);e.__esModule=!0,e.default=void 0;var o=i(n(434)),r=i(n(7071)),a=i(n(7867)),d=i(n(7294)),s=i(n(5697)),l=function(t){function e(){return t.apply(this,arguments)||this}(0,a.default)(e,t);var n=e.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){var t=this.props,e=(t.commentId,t.showMedia,t.showParentComment,(0,r.default)(t,["commentId","showMedia","showParentComment"]));return d.default.createElement("iframe",(0,o.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},e))},e}(d.default.Component);e.default=l,l.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},l.propTypes={commentId:s.default.oneOfType([s.default.number,s.default.string]).isRequired,width:s.default.number,height:s.default.number,showMedia:s.default.bool,showParentComment:s.default.bool}},2605:function(t,e,n){"use strict";var i=n(4836);e.__esModule=!0,e.default=void 0;var o=i(n(434)),r=i(n(7071)),a=i(n(7867)),d=i(n(7294)),s=i(n(5697)),l=n(989),u=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="yangdongs-blog",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,l.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,this.language=t.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,l.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,l.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(i){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);var e=window.document.querySelector('[id^="dsq-app"]');if(e){var n=window.document.getElementById(e.id);n.parentNode.removeChild(n)}},n.render=function(){var t=this.props,e=(t.config,(0,r.default)(t,["config"]));return d.default.createElement("div",(0,o.default)({id:"disqus_thread"},e))},e}(d.default.Component);e.default=u,u.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string,language:s.default.string,remoteAuthS3:s.default.string,apiKey:s.default.string})}},8200:function(t,e,n){"use strict";var i=n(4836);var o=i(n(2605));e.h$=o.default,i(n(1254)).default,i(n(4294)).default,o.default},989:function(t,e,n){"use strict";var i=n(4836);e.__esModule=!0,e.insertScript=function(t,e,n){var i=window.document.createElement("script");return i.async=!0,i.src=t,i.id=e,n.appendChild(i),i},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var i;return function(){for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];var d=this,s=function(){i=null,n||t.apply(d,r)},l=n&&!i;window.clearTimeout(i),i=setTimeout(s,e),l&&t.apply(d,r)}},e.isReactElement=a,e.shallowComparison=function t(e,n){var i,r=new Set(Object.keys(e).concat(Object.keys(n))),d=(i=[]).concat.apply(i,(0,o.default)(r)).filter((function(i){if("object"==typeof e[i]){if(t(e[i],n[i]))return!0}else if(e[i]!==n[i]&&!a(e[i]))return!0;return!1}));return 0!==d.length};var o=i(n(861)),r=i(n(7294));function a(t){return!!r.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return r.default.isValidElement(t)}))}},8263:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return C}});var i=n(6771),o=n(6386),r=n(7462),a=n(7059),d=n(7606),s=n(8014),l=n(3431);var u=(0,i.Z)("div",{target:"e1st1jau3"})({name:"hrirzy",styles:"display:flex;flex-direction:column;width:768px;height:400px;margin:0 auto;padding:60px 0;color:#ffffff;@media (max-width: 768px){width:100%;padding:40px 20px;}"}),p=(0,i.Z)("div",{target:"e1st1jau2"})({name:"14yucm9",styles:"margin-left:95%;display:grid;place-items:center;width:40px;height:40px;border-radius:50%;background:#ffffff;color:#000000;font-size:22px;cursor:pointer;box-shadow:0 0 10px rgba(0, 0, 0, 0.3);@media (max-width: 768px){width:30px;height:30px;font-size:18px;}"}),c=(0,i.Z)("div",{target:"e1st1jau1"})({name:"10qqw1",styles:"display:-webkit-box;overflow:hidden;overflow-wrap:break-word;margin:auto 0;text-overflow:ellipsis;white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:42px;font-weight:800;@media (max-width: 768px){font-size:30px;}"}),f=(0,i.Z)("div",{target:"e1st1jau0"})({name:"3gcnt2",styles:"display:flex;justify-content:space-between;align-items:center;margin-top:10px;font-size:18px;font-weight:700;@media (max-width: 768px){flex-direction:column;align-items:flex-start;font-size:15px;font-weight:400;}"}),h=function(t){var e=t.title,n=t.date,i=t.categories;return(0,l.tZ)(u,null,(0,l.tZ)(p,{onClick:function(){return window.history.back()}},(0,l.tZ)(d.G,{icon:s.acZ})),(0,l.tZ)(c,null,e),(0,l.tZ)(f,null,(0,l.tZ)("div",null,i.join(" . ")),(0,l.tZ)("div",null,n)))};var m=(0,i.Z)("div",{target:"e1opi4mu1"})({name:"16cz9yp",styles:"position:relative;width:100%;height:400px;@media (max-width: 768px){height:300px;}"}),g=(0,i.Z)((function(t){return(0,l.tZ)(a.G,(0,r.Z)({},t,{style:{position:"absolute"}}))}),{target:"e1opi4mu0"})({name:"1bjn9yo",styles:"z-index:-1;width:100%;height:400px;object-fit:cover;filter:brightness(0.25);@media (max-width: 768px){height:300px;}"}),w=function(t){var e=t.title,n=t.date,i=t.categories,o=t.thumbnail;return(0,l.tZ)(m,null,(0,l.tZ)(g,{image:o,alt:"thumbnail"}),(0,l.tZ)(h,{title:e,date:n,categories:i}))};var x=(0,i.Z)("div",{target:"e1ijh0y10"})({name:"l02n36",styles:"display:flex;flex-direction:column;width:768px;margin:0 auto;padding:100px 0;word-break:break-all;line-height:2.5;font-size:18px;font-weight:400;p{padding:3px 0;}strong{margin:0px 3px;font-weight:800;}h1,h2,h3{font-weight:800;margin-bottom:30px;}*+h1,*+h2,*+h3{margin-top:50px;}hr+h1,hr+h2,hr+h3{margin-top:0;}h1{font-size:40px;}h2{font-size:35px;}h3{font-size:23px;color:#433E49;}blockquote{margin:30px 0;padding:5px 15px;border-left:2px solid #4ccd97;background-color:#f9f9f9;font-weight:400;}ol,ul{margin-left:20px;padding:30px 0;}hr{border:1px solid #000000;margin:100px 0;}a{color:#4263eb;text-decoration:underline;}pre[class*='language-']{padding:15px;margin-bottom:25px;font-size:15px;border-radius:5px;::-webkit-scrollbar-thumb{background:rgba(255, 255, 255, 0.5);}}code[class*='language-'],pre[class*='language-']{tab-size:2;}@media (max-width: 768px){width:100%;padding:80px 20px;line-height:2.0;font-size:16px;h1{font-size:26px;}h2{font-size:23px;}h3{font-size:20px;}img{width:100%;}hr{margin:50px 0;}}"}),y=function(t){var e=t.html;return(0,l.tZ)(x,{dangerouslySetInnerHTML:{__html:e}})},b=n(8200);var v=(0,i.Z)("div",{target:"elyfc7a0"})({name:"qi68kj",styles:"width:768px;margin:auto auto;padding:0 10px;@media (max-width: 768px){width:100%;padding:0 20px;}"}),I=function(t){var e={url:t.url,identifier:t.identifier,title:t.title};return(0,l.tZ)(v,null,(0,l.tZ)(b.h$,{config:e}))};var S=(0,i.Z)("div",{target:"etse75s1"})({name:"pit38s",styles:"height:auto"}),Z=(0,i.Z)("div",{target:"etse75s0"})({name:"1hi30y8",styles:"position:sticky;top:50px;display:inline-block;margin:120px 40px;margin-right:0px;height:auto;width:200px;font-size:14.5px;border-left:3px solid #4ccd97;@media (max-width: 1200px){display:none;}li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:5px;color:gray;}ul{margin-left:10px;list-style:none;}a:hover{transition:0.3s;font-size:15px;font-weight:700;color:#433E49;}"}),_=function(t){var e=t.content;return(0,l.tZ)(S,null,(0,l.tZ)(Z,{dangerouslySetInnerHTML:{__html:e}}))};var k=(0,i.Z)("div",{target:"e6b6ljm0"})({name:"hn6e83",styles:"margin:auto auto;display:flex;flex-direction:row;@media (min-width: 1200px){margin-left:calc( 50% - 384px );}@media (max-width: 768px){width:100%;}"}),C=function(t){var e=t.data.allMarkdownRemark.edges,n=t.location.href,i=e[0].node,r=i.html,a=i.id,d=i.tableOfContents,s=i.frontmatter,u=s.title,p=s.summary,c=s.date,f=s.categories,h=s.thumbnail,m=h.childImageSharp.gatsbyImageData,g=h.publicURL;return(0,l.tZ)(o.Z,{title:u,description:p,url:n,image:g},(0,l.tZ)(w,{title:u,date:c,categories:f,thumbnail:m}),(0,l.tZ)(k,null,(0,l.tZ)(y,{html:r}),(0,l.tZ)(_,{content:d})),(0,l.tZ)(I,{url:n,identifier:a,title:u}))}},3405:function(t,e,n){var i=n(3897);t.exports=function(t){if(Array.isArray(t))return i(t)},t.exports.__esModule=!0,t.exports.default=t.exports},9498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},2281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},7071:function(t){t.exports=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,n){var i=n(3405),o=n(9498),r=n(6116),a=n(2281);t.exports=function(t){return i(t)||o(t)||r(t)||a()},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-fc52e27f929938eb8ba6.js.map