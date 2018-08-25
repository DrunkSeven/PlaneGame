class About extends eui.Component {
	private aboutText:eui.Label;
	public constructor() {
		super();
		this.addEventListener(eui.UIEvent.COMPLETE,this.onUIComp,this);
		this.skinName="resource/eui_skins/About.exml";

	}
	private onUIComp():void{
		this.aboutText.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnClick,this);
		// this.btns=this.aboutText;
	}
	private onBtnClick(){
console.log("click");

	}
	
}