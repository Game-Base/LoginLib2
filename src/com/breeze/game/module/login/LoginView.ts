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
public group_account:eui.Group;
public txt_account:eui.TextInput;
public groupAccount0:eui.Group;
public group_pwd:eui.Group;
public txt_password:eui.TextInput;
public group_vcode:eui.Group;
public txt_vcode:eui.TextInput;
public btn_getCode:eui.Group;
public btn_login:eui.Image;
public btn_register_back:eui.Group;
public btn_login_way:eui.Label;
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
public btn_getCode2:eui.Group;
public txt_vcode2:eui.Label;
public btn_register:eui.Image;
public btn_login_back:eui.Group;






        private __leftTime:number = 0;
		private __timekey:number;

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

            let t = this;
            t.addClickEvent(t.btn_login, t.startLogin, t);
            t.addClickEvent(t.btn_register_back, t.gotoRegisterView, t);
            t.addClickEvent(t.btn_register, t.startRegister, t);
            t.addClickEvent(t.btn_login_back, t.gotoLoginView, t);
            t.addClickEvent(t.btn_login_way, t.switchLoginWay, t);
            t.addClickEvent(t.btn_getCode, t.getVcode1, t);
            t.addClickEvent(t.btn_getCode2, t.getVcode2, t);

            t.registerNotify(NotifyConstLogin.S_LOGIN_REGISTER, t.gotoLoginView, t);

            // this.txt_account.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusInTxtHandler, this);
            // this.txt_password.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusInTxtHandler, this);
            // this.txt_vcode.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusInTxtHandler, this);
            // this.txt_register_tel.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusInTxtHandler, this);
            // this.txt_register_invitecode.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusInTxtHandler, this);
            // this.txt_register_pwd.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusInTxtHandler, this);
            // this.txt_register_repwd.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusInTxtHandler, this);
            // this.txt_register_verifycode.addEventListener(egret.FocusEvent.FOCUS_IN, this.focusInTxtHandler, this);

            t.addEvent(t.txt_password, egret.Event.CHANGE, t.oPasswordChange, t);
        }
        
        public focusInTxtHandler()
		{
			this.scrollDocument(100);
        }
        
        private scrollDocument(posy:number):void
        {
            var inputFocus = function ()
			{
				if (document && document.body)
				{
                    console.log(Math.random());
					setTimeout(function ()
					{
						if(window.scrollTo){
							window.scrollTo(0, posy);
                        }
					}, 200);
				}
			};
			inputFocus();
        }

        private oPasswordChange():void
        {
            let t = this;
            let str:string = t.txt_password.text.trim();
            if(str.length > 0){
                let pwd:string = "";
                for(var i:number = 0; i < str.length; i ++){
                    pwd += "*";
                }
                t.txt_password.text = pwd;
            }
        }

        private getVcode1():void
        {
            if(this.__leftTime > 0){
                TipManagerCommon.getInstance().createCommonColorTip("请稍后再试");
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

            LoginController.instance.reqVerifyCode(userName, 1);
            this.__leftTime = 59;
            this.updateCd();
        }

        private getVcode2():void
        {
            if(this.__leftTime > 0){
                TipManagerCommon.getInstance().createCommonColorTip("请稍后再试");
                return;
            }
            let tel: string = this.txt_register_tel.text.trim();
            if (!HtmlUtil.isPhoneNumber(tel))
            {
                TipManagerCommon.getInstance().createCommonColorTip("请输入正确的手机号码");
                return;
            }
            LoginController.instance.reqVerifyCode(tel,2);
            this.__leftTime = 59;
            this.updateCd();
        }

        private switchLoginWay():void
        {
            let t = this;
            GlobalConfig.loginType = GlobalConfig.loginType == 0 ? 1 : 0;
            t.showLoginType();
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

            let password:string;
            if(GlobalConfig.loginType == 0){
                password = this.txt_password.text.trim();
                if (password.length == 0)
                {
                    TipManagerCommon.getInstance().createCommonColorTip("请输入密码");
                    return;
                }
                if(password.length < 0){
                    TipManagerCommon.getInstance().createCommonColorTip("密码不能少于六位数...");
                    return;
                }
            } else if(GlobalConfig.loginType == 1){
                password = this.txt_vcode.text.trim();
                if (password.length == 0)
                {
                    TipManagerCommon.getInstance().createCommonColorTip("请输入验证码");
                    return;
                }
            }


            if(GlobalConfig.loginType == 0){
                GlobalConfig.account = userName;
                GlobalConfig.pwd = password;
                LoginController.instance.reqLogin(userName, password);
            } else if(GlobalConfig.loginType == 1){
                GlobalConfig.telephone = userName;
                GlobalConfig.verifyCode = password;
                LoginController.instance.reqVerfiyCodeLogin(userName, password);
            }
            
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
            let t = this;
            t.txt_account.text = egret.localStorage.getItem("testUserid");

            t.updateView();
        }

        private updateView():void
        {
            let t = this;

            let code:string = HtmlUtil.getQueryStringByName("code");
            let register:string = HtmlUtil.getQueryStringByName("register");
            if(code && register == "1"){
                t.group_login.visible = false;
                t.group_register.visible = true;
                t.txt_register_invitecode.text = code;
            } else {
                t.group_login.visible = true;
                t.group_register.visible = false;
            }

            t.showLoginType();
        }

        private updateCd():void
        {
            let t = this;
            if(t.__leftTime > 0){
                if (t.__timekey != -1){
                    egret.clearInterval(t.__timekey);
                }
                t.__timekey = egret.setInterval(t.updateTime, t, 1000);
                t.txt_vcode.text = t.txt_vcode2.text = CommonTool.formatTime1(t.__leftTime)+"s";
            } else {
                t.stopTime();
            }
        }

        private updateTime(){
			let t = this;
			if(this.__leftTime <= 0){
				t.txt_vcode.text = t.txt_vcode2.text = "获取验证码";
				return;
			}
			t.txt_vcode.text = t.txt_vcode2.text = CommonTool.formatTime1(t.__leftTime)+"s";
			t.__leftTime --;
		}

		private stopTime(): void
		{
			let t = this;
			if (t.__timekey != -1){
				egret.clearInterval(t.__timekey);
			}
            t.__timekey = -1;
			t.txt_vcode.text = "";
		}

        private showLoginType():void
        {
            let t = this;
            if(GlobalConfig.loginType == 0){
                t.btn_login_way.textFlow = HtmlUtil.getHtmlString("<font><u>短信登录</u></font>");
                t.group_pwd.visible = true;
                t.group_vcode.visible = false;
                t.btn_getCode.visible = false;
            } else {
                t.btn_login_way.textFlow = HtmlUtil.getHtmlString("<font><u>账号密码登录</u></font>");
                t.group_pwd.visible = false;
                t.group_vcode.visible = true;
                t.btn_getCode.visible = true;
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
