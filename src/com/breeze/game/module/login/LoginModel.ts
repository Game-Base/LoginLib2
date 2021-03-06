module qmr
{
	/**
	 *
	 * @description 登陆数据模型
	 *
	 */
	export class LoginModel
	{
		private static _instance: LoginModel;
		public isReconnect: boolean;
		//是否是被顶号,您的账号在另一台设备登录
		public isInstead: boolean;
		//是否被服务器踢下线
		public isDisconnect: boolean;
		//是否已经进入了游戏
		public isEnterGame: boolean;

		public constructor()
		{
		}

		public static get instance(): LoginModel
		{
			if (this._instance == null) { this._instance = new LoginModel; }
			return this._instance;
		}

		/**
		 *  返回登陆成功
		 */
		public async onRecLoginSuccess(s: com.message.S_USER_LOGIN)
		{
			qmr.GlobalConfig.userId = s.playerId.toString();
			qmr.PlatformConfig.GameId = s.fromGame;
			await this.startEnterGame();
		}

		/**
		 *  返回注册成功
		 */
		public async onRecRegisterSuccess(s: com.message.S_LOGIN_REGISTER)
		{
			qmr.GlobalConfig.userId = s.playerId.toString();
			qmr.PlatformConfig.GameId = s.fromGame;
			await this.startEnterGame();
		}

		public async startEnterGame()
		{
			SystemController.instance.startHeart();//服务器说这里才开始心跳
			
			if (qmr.GlobalConfig.userId)//注册过，或者注册成功
			{
				GameLoading.getInstance().close();
				this.isEnterGame = true;
				this.destoryLoginRes();
				await GameLoadManager.instance.loadGameResAfterLogin();
				await GameLoadManager.instance.waitGameResLoaded();
				EntryAfterLogin.onEnterGame();
			}
			else
			{
				/**
				 * 这里创建玩家账号
				 * */
				TipManagerCommon.getInstance().showLanTip("CN_173");
			}
		}

		private destoryLoginRes()
		{
			var preLoadBg = document.getElementById("preLoadBg");
			if (preLoadBg && preLoadBg.parentNode){
				preLoadBg.parentNode.removeChild(preLoadBg);
			}
			ModuleManager.hideModule(ModuleNameLogin.LOGIN_VIEW, true);
		}

	}
}
