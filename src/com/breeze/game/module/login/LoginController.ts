module qmr
{
	export class LoginController extends BaseController
	{
		private static _instance: LoginController;
		/**  获取单例对象  */
		public static get instance(): LoginController
		{
			if (this._instance == null) { this._instance = new LoginController(); }
			return this._instance;
		}

		constructor()
		{
			super();
		}

		protected initListeners(): void
		{
			let t = this;
			t.addSocketListener(MessageIDLogin.S_USER_LOGIN, t.onRecLoginSuccess, t, true);
			t.addSocketListener(MessageIDLogin.S_USER_LOGOUT, t.onRecUseLoginOut, t, true);
			t.addSocketListener(MessageIDLogin.S_LOGIN_REGISTER, t.onRegisterResponse, t, true);
			t.addSocketListener(MessageIDLogin.S_SEND_VERIFY_CODE, t.onGetVerifyCodeResponse, t, true);
			t.addSocketListener(MessageIDLogin.S_USER_LOGIN_BAN, t.onRecLoginBanResponse, t, true);
		}

		/**
		 * 封号
		 * @param s 
		 */
		private onRecLoginBanResponse(s:com.message.S_USER_LOGIN_BAN):void
		{
			TipManagerCommon.getInstance().showLanTip("CN_168");
			qmr.GameLoading.getInstance().close();
		}

		/**
		 * 获取验证码
		 * @param type // 短信验证码类型：1登录，2注册，3找回密码，4提现
		 */
		public reqVerifyCode(tel: string, type): void
		{
			var c: com.message.C_SEND_VERIFY_CODE = new com.message.C_SEND_VERIFY_CODE();
			c.mobile = tel;// 短信验证码类型：1登录，2注册，3找回密码，4提现
			c.type = type;
			this.sendCmd(c, MessageIDLogin.C_SEND_VERIFY_CODE, true);
		}

		/**
		 * 获取验证码返回
		 * @param s 
		 */
		private onGetVerifyCodeResponse(s:com.message.S_SEND_VERIFY_CODE):void
		{
			egret.log("获取验证码手机号:" + s.mobile, "  结果:" + s.state);
			if(s.state == 0){
				TipManagerCommon.getInstance().showLanTip("CN_169", true);
			} else {
				TipManagerCommon.getInstance().showLanTip("CN_170");
			}
		}

		/**
		 * 账号密码登录
		 * @param tel 
		 * @param pwd 
		 */
		public reqLogin(tel: string, pwd:string): void
		{
			qmr.GameLoading.getInstance().setLoadingTip("CN_171");
			egret.log("登陆账号:" + tel, "参数:" + sparam);
			var c: com.message.C_USER_LOGIN = new com.message.C_USER_LOGIN();
			c.mobile = tel;
			c.password = pwd;
			var sparam = {"DeviceUID":"", "ClientVersion":PlatformConfig.resVersion,"ClientIp":""};
			c.sparam = JSON.stringify(sparam);
			c.fromGame = PlatformConfig.GameId;

			this.sendCmd(c, MessageIDLogin.C_USER_LOGIN, true);
		}

		/**
		 * 短信验证码登录
		 * @param tel 
		 * @param code 
		 */
		public reqVerfiyCodeLogin(tel:string, code:string):void
		{
			qmr.GameLoading.getInstance().setLoadingTip("CN_171");
			egret.log("登陆账号:" + tel, "参数:" + sparam);
			var c: com.message.C_USER_LOGIN_VERIFY_CODE = new com.message.C_USER_LOGIN_VERIFY_CODE();
			c.mobile = tel;
			c.verifyCode = code;
			var sparam = {"DeviceUID":"", "ClientVersion":PlatformConfig.resVersion,"ClientIp":""};
			c.sparam = JSON.stringify(sparam);
			c.fromGame = PlatformConfig.GameId;

			this.sendCmd(c, MessageIDLogin.C_USER_LOGIN_VERIFY_CODE, true);
		}

		/**
		 * 请求注册
		 * @param mobile 手机号码
		 * @param inviteCode 邀请码
		 * @param password 密码
		 * @param verifyCode 短信验证码
		 * @param sparam 预留参数
		 */
		public reqLoginRegister(mobile: string, inviteCode: string, password: string,repassword:string, verifyCode: string, sparam:string = ""): void
		{
			var c: com.message.C_LOGIN_REGISTER = new com.message.C_LOGIN_REGISTER();
			c.mobile = mobile;
			c.inviteCode = inviteCode;
			c.password = password;
			c.rePassword = repassword;
			c.verifyCode = verifyCode;
			c.sparam = sparam;
			c.fromGame = PlatformConfig.GameId;
			this.sendCmd(c, MessageIDLogin.C_LOGIN_REGISTER);
		}

		/**
		 *  ===返回登陆/注册成功===
		 */
		private onRegisterResponse(s: com.message.S_LOGIN_REGISTER): void
		{
			LoginModel.instance.onRecRegisterSuccess(s);
			this.dispatch(NotifyConstLogin.S_LOGIN_REGISTER);
		}

		/**
		 *  ===返回登陆/注册成功===
		 */
		private onRecLoginSuccess(s: com.message.S_USER_LOGIN): void
		{
			if (LoginModel.instance.isReconnect)
			{
				qmr.GameLoading.getInstance().close();
				PbGlobalCounter.maxReconnectCount = 3;
				LogUtil.log("断线重连完成！！");
			}
			else
			{
				if(!s.playerId){
					qmr.GameLoading.getInstance().close();
					TipManagerCommon.getInstance().showLanTip("CN_172");
				} else {
					LoginModel.instance.onRecLoginSuccess(s);
					this.dispatch(NotifyConstLogin.S_USER_LOGIN);
				}
			}
		}

		/**
		 *  ---请求登出---
		 */
		public reqUserLogout(playerId: number): void
		{
			var c: com.message.C_USER_LOGOUT = new com.message.C_USER_LOGOUT();
			c.playerId = playerId;
			this.sendCmd(c, MessageIDLogin.C_USER_LOGOUT, true);
		}

		/**
		 *  ===收到登出成功===
		 */
		private onRecUseLoginOut(s: com.message.S_USER_LOGOUT): void
		{
			if (s.beKickOut)
			{
				LoginModel.instance.isInstead = true;
			}
			else
			{
				LoginModel.instance.isDisconnect = true;
			}
			this.dispatch(NotifyConstLogin.S_USER_LOGOUT);
		}

		public reqReconnect()
		{
			LoginModel.instance.isReconnect = true;
			this.reqLogin(qmr.GlobalConfig.account, qmr.GlobalConfig.pwd);
		}

		public reqRelogin()
		{
			LoginModel.instance.isReconnect = false;
			this.reqLogin(qmr.GlobalConfig.account, qmr.GlobalConfig.pwd);
		}
	}
}
