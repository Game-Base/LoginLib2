module qmr {
	/**游戏服务器登录流程控制类 */
	export class LoginManager 
	{

		public static isConnected:boolean = false;
		/**请求连接游戏服务器 */
		public static connectGameServer(): void
		{
			let t = this;
			let onConnect = function()
			{
				GameLoading.getInstance().setLoadingTip("服务器连接成功...");
				LoginManager.isConnected = true;
				console.log("==========================服务器socket连接成功==========================");
				ModuleManager.showModule(ModuleNameLogin.LOGIN_VIEW);
			}
        	GameLoading.getInstance().setLoadingTip("正在连接服务器...");
        	Rpc.getInstance().connect(GlobalConfig.loginServer, GlobalConfig.loginPort, onConnect, t);
		}
	}
}