module qmr
{
    export class LoginView extends SuperBaseModule
    {
        public groupWind:eui.Group;
public imgWindSlow:eui.Image;
public imgWindFast:eui.Image;
public imgWindMiddle:eui.Image;
public group_login:eui.Group;
public gpRead:eui.Group;
public lbUserBook:eui.Label;
public lbPrivacyPolicy:eui.Label;
public groupAccount:eui.Group;
public txt_account_des:eui.Label;
public txt_account:eui.EditableText;
public groupAccount0:eui.Group;
public txt_password:eui.TextInput;
public txt_pwd_des:eui.Label;
public btn_login:eui.Image;
public btn_login_way:eui.Label;
public btn_register_back:eui.Group;
public group_register:eui.Group;
public gpRead0:eui.Group;
public lbUserBook0:eui.Label;
public lbPrivacyPolicy0:eui.Label;
public groupAccount1:eui.Group;
public txt_register_tel:eui.TextInput;
public groupAccount2:eui.Group;
public txt_register_invitecode:eui.TextInput;
public groupAccount3:eui.Group;
public txt_register_pwd:eui.TextInput;
public groupAccount4:eui.Group;
public txt_register_repwd:eui.TextInput;
public groupAccount5:eui.Group;
public txt_register_verifycode:eui.TextInput;
public btn_register:eui.Image;
public btn_login_back:eui.Image;
        

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
            this.addClickEvent(this.btn_register_back, this.gotoRegisterView, this);
            this.addClickEvent(this.btn_register, this.startRegister, this);
            this.addClickEvent(this.btn_login_back, this.gotoLoginView, this);
            this.addClickEvent(this.btn_login_way, this.switchLoginWay, this);

            this.registerNotify(NotifyConstLogin.S_LOGIN_REGISTER, this.gotoLoginView, this);
        }

        private switchLoginWay():void
        {
            console.log("switchLoginWay");
        }

        private gotoRegisterView():void
        {
            this.group_login.visible = false;
            this.group_register.visible = true;
        }

        private gotoLoginView():void
        {
            this.group_login.visible = true;
            this.group_register.visible = false;
        }

        private startRegister():void
        {
            if(!LoginManager.isConnected){
                TipManagerCommon.getInstance().createCommonColorTip("服务器连接失败...");
                return;
            }
            let tel: string = this.txt_register_tel.text.trim();
            let inviteCode:string = this.txt_register_invitecode.text.trim();
            let pwd:string = this.txt_register_pwd.text.trim();
            let repwd:string = this.txt_register_repwd.text.trim();
            let verifycode:string = this.txt_register_verifycode.text.trim();
            
            if (!HtmlUtil.isPhoneNumber(tel))
            {
                TipManagerCommon.getInstance().createCommonColorTip("请输入正确的手机号码");
                return;
            }
            if(inviteCode.length == 0){
                TipManagerCommon.getInstance().createCommonColorTip("请输入邀请码");
                return;
            }

            if(pwd.length < 6){
                TipManagerCommon.getInstance().createCommonColorTip("必须输入6-12位的密码");
                return;
            }

            if(repwd.length == 0){
                TipManagerCommon.getInstance().createCommonColorTip("请输入重复密码");
                return;
            }

            if(repwd !== pwd){
                TipManagerCommon.getInstance().createCommonColorTip("两次输入的密码不一致");
                return;
            }

            if(verifycode.length == 0){
                TipManagerCommon.getInstance().createCommonColorTip("请输入验证码");
                return;
            }

            LoginController.instance.reqLoginRegister(tel, inviteCode, pwd, repwd, verifycode);
        }

        private startLogin():void{
            if(!LoginManager.isConnected){
                TipManagerCommon.getInstance().createCommonColorTip("服务器连接失败...");
                return;
            }
            let userName: string = this.txt_account.text.trim();
            if (userName.length == 0)
            {
                TipManagerCommon.getInstance().createCommonColorTip("请输入用户名");
                return;
            }
            if(!HtmlUtil.isPhoneNumber(userName)){
                TipManagerCommon.getInstance().createCommonColorTip("请输入正确的手机号码...");
                return;
            }

            let password:string = this.txt_password.text.trim();
            if (password.length == 0)
            {
                TipManagerCommon.getInstance().createCommonColorTip("请输入密码");
                return;
            }
            if(password.length < 0){
                TipManagerCommon.getInstance().createCommonColorTip("密码不能少于六位数...");
                return;
            }

            GlobalConfig.account = userName;
            GlobalConfig.pwd = password;
            LoginController.instance.reqLogin(userName, password);
            egret.localStorage.setItem("testUserid", GlobalConfig.account);
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

            let code:string = HtmlUtil.getQueryStringByName("code");
            let register:string = HtmlUtil.getQueryStringByName("register");
            if(!!code && register == "1"){
                this.group_login.visible = false;
                this.group_register.visible = true;
                this.txt_register_invitecode.text = code;
            } else {
                this.group_login.visible = true;
                this.group_register.visible = false;
            }
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
