module qmr
{
    export class LoginView extends SuperBaseModule
    {
        public groupWind:eui.Group;
public imgWindSlow:eui.Image;
public imgWindFast:eui.Image;
public imgWindMiddle:eui.Image;
public gpRead:eui.Group;
public lbUserBook:eui.Label;
public lbPrivacyPolicy:eui.Label;
public cbRead:eui.CheckBox;
public btn_login:eui.Image;
public groupAccount:eui.Group;
public txt_account:eui.TextInput;



        public constructor()
        {
            super();
            this.qmrSkinName = "LoginViewSkin";
        }

        /**
         * @description 初始化事件
         */
        protected initListener(): void
        {
            super.initListener();

            this.addClickEvent(this.btn_login, this.startLogin, this);
        }

        private startLogin():void{
            let userName: string = this.txt_account.text.trim();
            if (userName.length == 0)
            {
                TipManagerCommon.getInstance().createCommonColorTip("请输入用户名");
                return;
            }
            if(!LoginManager.isConnected){
                TipManagerCommon.getInstance().createCommonColorTip("服务器连接失败...");
                return;
            }
            if(!this.isPhoneNumber(userName)){
                TipManagerCommon.getInstance().createCommonColorTip("请输入正确的手机号码...");
                return;
            }
            let telNum:number = Number(userName);
            GlobalConfig.account = telNum;
            LoginController.instance.reqLogin(telNum);
            egret.localStorage.setItem("testUserid", GlobalConfig.account+"");
        }

        protected addedToStage(evt: egret.Event): void
        {
            super.addedToStage(evt);

            var loadSpan = document.getElementById("gameLoading");
            if (loadSpan && loadSpan.parentNode)
            {
                loadSpan.parentNode.removeChild(loadSpan);
            }
            var styleSpan = document.getElementById("style");
            if (styleSpan && styleSpan.parentNode)
            {
                styleSpan.parentNode.removeChild(styleSpan);
            }
            
            GameLoading.getInstance().close();
            WebLoadingManager.setLoadingStatus("");
            GameLoadManager.instance.loadGameResAfterLogin();

            this.onBgResBack();

            this.addWindEffect();
        }

        private onBgResBack(): void
        {
            qmr.LogUtil.log("onBgResBack");
            if (document && document.getElementById("loaingMyBg"))
            {
                let myBg = document.getElementById("loaingMyBg");
                myBg.style.display = "none";
            }
        }

        /** 加云朵 */
        private addWindEffect(): void
        {
            this.imgWindSlow.source = "serverlist_wind_png";
            this.imgWindFast.source = "serverlist_wind_png";
            this.imgWindMiddle.source = "serverlist_wind_png";
            let moveTime = 12000;
            this.imgWindSlow.x = this.stage.stageWidth;
            this.imgWindFast.x = this.stage.stageWidth;
            this.imgWindMiddle.x = this.stage.stageWidth;


            let windTarget = -800;
            qmr.LogUtil.log("this.imgWindSlow.width", this.imgWindSlow.width);
            egret.Tween.get(this.imgWindSlow, { loop: true }).to({ x: windTarget }, moveTime);
            egret.Tween.get(this.imgWindFast, { loop: true }).to({ x: windTarget }, moveTime / 2);
            egret.Tween.get(this.imgWindMiddle, { loop: true }).to({ x: windTarget }, moveTime / 1.5);
        }

        /**
        * @description 初始化数据,需被子类继承
        */
        protected initData(): void
        {
            super.initData();
            this.txt_account.text = egret.localStorage.getItem("testUserid");
        }

        public isPhoneNumber(phoneNum): boolean {
            let reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
            return reg.test(phoneNum);
        }

        public dispose(): void
        {
            super.dispose();

            egret.Tween.removeTweens(this.imgWindSlow);
            egret.Tween.removeTweens(this.imgWindFast);
            egret.Tween.removeTweens(this.imgWindMiddle);

			ModuleManager.deleteModule(ModuleNameLogin.LOGIN_VIEW);
			
			let destroySuccess: boolean = RES.destroyRes("login");
			qmr.LogUtil.log("RES.destroyRes,login=", destroySuccess); 
        }
    }
}
