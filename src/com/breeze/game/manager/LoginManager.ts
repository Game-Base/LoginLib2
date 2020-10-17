module qmr {
	/**游戏服务器登录流程控制类 */
	export class LoginManager 
	{

		public static isConnected:boolean = false;
		/**请求连接游戏服务器 */
		public static connectGameServer(connectCallBack: Function, thisObject: any): void
		{
			let t = this;
			let onConnect = function()
			{
				// GameLoading.getInstance().setLoadingTip("服务器连接成功...");
				GameLoading.getInstance().close();
				LoginManager.isConnected = true;
				console.log("==========================服务器socket连接成功==========================");
				if(connectCallBack && thisObject){
					connectCallBack.call(thisObject);
				}
			}
			if(LoginManager.isConnected){
				GameLoading.getInstance().close();
				if(connectCallBack && thisObject){
					connectCallBack.call(thisObject);
				}
			} else {
				GameLoading.getInstance().setLoadingTip("正在连接服务器...");
        		Rpc.getInstance().connect(GlobalConfig.loginServer, GlobalConfig.loginPort, onConnect, t);
			}
        	
		}
	}
}