import{a as n}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-2TSYQWVN.js";import{a as d,b as m}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-Q27SXLTB.js";import{a as l}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-3SFTLRL3.js";import{c as i,d as u}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-KGGRYMSL.js";import{d as c}from"https://st-p.rmcdn1.net/e0cde9ba/dist/c/c-TZYDFHR2.js";var s=c(l());m();u();var f=n.extend({DO_NOT_WAIT_FOR_PRELOAD:!0,antialiasRotation:!0,render:function(){this.preloadIconImage({default:!0});let t;return this.makeBox("widget-button"),this.hasHoverAnimation&&this.$el.addClass("has-onhover-animation"),this.rendered=!0,this.seamlessFontsShow(function(){this.$el.removeClass("fonts-pending")}.bind(this),function(){this.$el.addClass("fonts-pending")}.bind(this)),t={model:this,$container:this.$el,environment:"viewer",mag:this.page&&this.page.mag,block:null},arguments?.[0]?.withoutHoverCursor&&(t.withoutHoverCursor=!0),this.buttonWidget=new d(t),this.preloadIconImage({hover:!0}),this.$el.on(i.isDesktop()?"mouseenter":"touchstart",this.onButtonHover),this.$el.on(i.isDesktop()?"mouseleave":"touchend",this.onButtonHoverOut),this.$el.on("click",this.onButtonClick),this.checkLink(),RM.screenshot?(this.waitForIconImageLoad(),this.waitForUsedFontsLoad()):this.widgetIsLoaded(),this},renderButtonText:function(t){this.buttonWidget.renderButtonText(t)},renderButtonTextWithSizes:function(t,e){this.buttonWidget.renderButtonTextWithSizes(t,{...this,...e})},hasFontsToLoad:function(){return this.tp==="text"||this.tp==="text_and_icon"},onButtonHover:function(){this.$(".common-button").addClass("hovered")},onButtonHoverOut:function(){this.$(".common-button").removeClass("hovered")},onButtonClick:function(t){if(t.which===2||t.metaKey||t.ctrlKey)return;let e=this.$el.closest("a"),o=s.default.trim(e.attr("href")),r=o.match(/\/start-with-template\/(\d+)$/i),a=r&&r[1];a&&RM.viewerRouter&&RM.viewerRouter.createMagFromTemplate&&(t.preventDefault(),RM.viewerRouter.createMagFromTemplate("template-link",a));let h=this.text?this.text:this.tp==="icon"?"icon":"empty";RM.analytics&&RM.analytics.sendEvent("Button Click",h)},preloadIconImage:function(t){t=t||{};let e=this.tp;if(e==="icon"||e==="text_and_icon"){if(t.default){let o=new Image;o.src=Modernizr.retina?this.icon_raster2xUrl||this.icon_rasterUrl:this.icon_rasterUrl}if(t.hover){let o=new Image;o.src=Modernizr.retina?this["hover-icon_raster2xUrl"]||this["hover-icon_rasterUrl"]:this["hover-icon_rasterUrl"]}}},_widgetIsLoaded:function(){this.loaded||this.destroyed||(RM.screenshot?this.iconImageLoaded&&this.fontLoaded&&this.widgetIsLoaded():this.widgetIsLoaded())},waitForIconImageLoad:function(){this.iconImageLoaded=!1,(this.tp==="icon"||this.tp==="text_and_icon")&&this.icon_rasterUrl?(0,s.default)("<img>").on("load",this.onIconImageLoaded).on("error",this.onIconImageLoaded).attr("src",Modernizr.retina?this.icon_raster2xUrl||this.icon_rasterUrl||"":this.icon_rasterUrl||""):this.onIconImageLoaded()},onIconImageLoaded:function(){this.iconImageLoaded=!0,this._widgetIsLoaded()},waitForUsedFontsLoad:function(){this.fontLoaded=!1,this.hasFontsToLoad()?this.page.addFontsToLoad(this,this.onFontLoaded):this.onFontLoaded()},onFontLoaded:function(){this.fontLoaded=!0,this._widgetIsLoaded()},destroy:function(){return this.buttonWidget&&this.buttonWidget.destroy(),this.buttonWidget=null,this.$el.off(i.isDesktop()?"mouseenter":"touchstart",this.onButtonHover),this.$el.off(i.isDesktop()?"mouseleave":"touchend",this.onButtonHoverOut),this.$el.off("click",this.onButtonClick),n.prototype.destroy.apply(this,arguments)}}),v=f;export{v as a};
