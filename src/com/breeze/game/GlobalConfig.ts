module qmr
{
	export class GlobalConfig
	{
		/** 是否开启Slow个人日志 */
		public static bIsShowSlowLog = false;

		public static loginInitFinish: boolean = false;			//是否是调试状态LOGIN_INIT_FINISH
		public static isDebugF: boolean = false;			   	//是否是调试战斗状态

		/**登录类型 0 账号密码登录 1 短信验证码登录 */
		public static loginType:number = 0;
		/**游戏登陆账号 */
		public static account: string = "";
		public static pwd:string = "";
		/**游戏短信验证码登录 */
		public static telephone: string = "";
		public static verifyCode:string = "";

		/**登录服务器 */
		public static loginServer: string = "129.226.177.253";//129.226.177.253   192.168.3.116
		//登陆服务器端口
		public static loginPort: number = 8003;           
		//玩家的账号             
		public static userId: string;				
		/**登陆服下发后端参数(直接透传给后端)*/
		public static sparam: any = "0";

		/**服务器id */
		public static sid: string = "1";
		public static sName: string;//服务器名字
		
		/**客户端ip*/
		public static clientIp: string = "127.0.0.1";
		/**登录时间 */
		public static logintime: number = 0;

		public LOGIN_KEY:string = "Dragon2020WOMenYIQiFaDaCAI#WOCAO@^^%(*88888888abZ";

		/**语言版本 */
		public static LAN_TYPE:string = "CN";//CN 中文  EN 英文
		

		/**
		 * 是否ios系统
		 */
		public static get isSysIos(): boolean
		{
			return egret.Capabilities.os.toUpperCase() == "IOS";
		}

		/**是否是中文版本 */
		public static get isCN():boolean
		{
			return GlobalConfig.LAN_TYPE == "CN";
		}
	}
}
