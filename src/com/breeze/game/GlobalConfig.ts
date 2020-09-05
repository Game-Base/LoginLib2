module qmr
{
	export class GlobalConfig
	{
		/** 是否开启Slow个人日志 */
		public static bIsShowSlowLog = false;

		public static loginInitFinish: boolean = false;			//是否是调试状态LOGIN_INIT_FINISH
		public static isDebugF: boolean = false;			   	//是否是调试战斗状态
		/**游戏登陆账号 */
		public static account: number = 0;
		/**登录服务器 */
		public static loginServer: string = "192.168.3.116";
		//登陆服务器端口
		public static loginPort: number = 8003;           
		//玩家的账号             
		public static userId: number | Long = 0;				
		/**登陆服下发后端参数(直接透传给后端)*/
		public static sparam: any = "0";

		/**服务器id */
		public static sid: string = "1";
		public static sName: string;//服务器名字
		
		/**客户端ip*/
		public static clientIp: string = "127.0.0.1";
		/**登录时间 */
		public static logintime: number = 0;
		

		/**
		 * 是否ios系统
		 */
		public static get isSysIos(): boolean
		{
			return egret.Capabilities.os.toUpperCase() == "IOS";
		}
	}
}
