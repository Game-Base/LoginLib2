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
		}

		/**
		 *  ---请求登陆---
		 */
		public reqLogin(tel: string, pwd:string): void
		{
			qmr.GameLoading.getInstance().setLoadingTip("正在登录游戏服务器，请稍后...");
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
				SystemController.instance.startHeart();
				qmr.GameLoading.getInstance().close();
				PbGlobalCounter.maxReconnectCount = 3;
				LogUtil.log("断线重连完成！！");
			}
			else
			{
				LoginModel.instance.onRecLoginSuccess(s);
				this.dispatch(NotifyConstLogin.S_USER_LOGIN);
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
			//平台下如果未通过验证 不重连
			if (!PlatformManager.instance.platform.isVerify)
			{
				return;
			}
			LoginModel.instance.isReconnect = true;
			this.reqLogin(qmr.GlobalConfig.account, qmr.GlobalConfig.pwd);
		}

		public reqRelogin()
		{
			//平台下如果未通过验证 不重连
			if (!PlatformManager.instance.platform.isVerify)
			{
				return;
			}
			LoginModel.instance.isReconnect = false;
			this.reqLogin(qmr.GlobalConfig.account, qmr.GlobalConfig.pwd);
		}
	}
}
