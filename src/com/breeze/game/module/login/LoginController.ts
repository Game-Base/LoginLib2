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
			t.addSocketListener(MessageIDLogin.S_SEND_SDK_DATA, t.onSdkReportResponse, t, true);
		}

		/**
		 *  ---请求登陆---
		 */
		public reqLogin(username: number, gameSite: string = "1"): void
		{
			qmr.GameLoading.getInstance().setLoadingTip("正在登录游戏服务器，请稍后...");
			egret.log("登陆账号:" + username, "区服:" + gameSite);
			var c: com.message.C_USER_LOGIN = new com.message.C_USER_LOGIN();
			c.username = username;
			c.gameSite = gameSite;
			var sparam = GlobalConfig.sparam;
			if (sparam)
			{
				c.sparam = JSON.stringify(sparam);
			}
			this.sendCmd(c, MessageIDLogin.C_USER_LOGIN, true);
		}

		/**
		 *  ---请求注册---
		 */
		public reqLoginRegister(username: number, gameSite: string, nickname: string, heroId: number): void
		{
			var c: com.message.C_LOGIN_REGISTER = new com.message.C_LOGIN_REGISTER();
			c.username = username;
			c.gameSite = gameSite;
			c.nickname = nickname;
			c.heroId = heroId;
			var sparam = GlobalConfig.sparam;
			if (sparam)
			{
				c.sparam = JSON.stringify(sparam);
			}
			this.sendCmd(c, MessageIDLogin.C_LOGIN_REGISTER);
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
			this.reqLogin(qmr.GlobalConfig.account, qmr.GlobalConfig.sid);
		}

		public reqRelogin()
		{
			//平台下如果未通过验证 不重连
			if (!PlatformManager.instance.platform.isVerify)
			{
				return;
			}
			LoginModel.instance.isReconnect = false;
			this.reqLogin(qmr.GlobalConfig.account, qmr.GlobalConfig.sid);
		}


		public reportSdkPortRequest(url:string, p:any):void
		{
			var c: com.message.C_SEND_SDK_DATA = new com.message.C_SEND_SDK_DATA();
			c.reportStr = p;
			c.reportUrl = url;
			this.sendCmd(c, MessageIDLogin.C_SEND_SDK_DATA, true);
		}

		private onSdkReportResponse(s:com.message.S_SEND_SDK_DATA):void
		{
			console.log("sdk数据上报结果："+s.canUse);
		}
	}
}
