module qmr
{
	export class SystemController extends BaseController
	{
		private static _instance: SystemController;
		/**是否同步过一次 */
		public isSyncOne: boolean;
		/**  获取单例对象 */
		public static get instance(): SystemController
		{
			if (this._instance == null) { this._instance = new SystemController(); }
			return this._instance;
		}
		private isStartSysn: boolean;//是否同步过一次服务器时间
		private timeKey: number = -1;
		private timeFlag: number;

		constructor()
		{
			super();
		}

		protected initListeners(): void
		{
			this.addSocketListener(MessageIDLogin.S_SYNC_TIME, this.onRecsynSystem, this);
			this.addSocketListener(MessageIDLogin.S_EXCEPTION_MSG, this.onRecExceptionMsg, this, true);
		}

		/**
		 * 启动心跳包
		 */
		public startHeart()
		{
			if (!this.isStartSysn)
			{
				this.isStartSysn = true;
				this.timeFlag = Date.now();
				this.timeKey = egret.setInterval(this.reqgetSystemTime, this, 8000);
				this.reqgetSystemTime();
			}
		}

		public clearHeart()
		{
			this.isStartSysn = false;
			if (this.timeKey != -1)
			{
				egret.clearInterval(this.timeKey);
				this.timeKey = -1;
			}
		}

		/**
		 * ---同步心跳包---
		 */
		private reqgetSystemTime(): void
		{
			var c: com.message.C_SYNC_TIME = new com.message.C_SYNC_TIME();
			this.sendCmd(c, MessageIDLogin.C_SYNC_TIME);
		}

		/**
		 * ===同步心跳包===
		 */
		private onRecsynSystem(s: com.message.S_SYNC_TIME): void
		{
			ServerTime.syncServerTime(parseInt(s.time.toString()));
			if (!this.isSyncOne)
			{
				this.isSyncOne = true;
				this.dispatch(NotifyConstLogin.SCNY_ONE_SERVER_TIME);
			}
		}

		/** 
		 * ===错误码===
		 */
		private onRecExceptionMsg(s: com.message.S_EXCEPTION_MSG): void
		{
			let code = s.code;
			let cfg:CodeCfgCfg = ConfigManager.getConf(ConfigEnumBase.CODECFG, code);
			if(cfg){
				TipManagerCommon.getInstance().showLanTip(cfg.msg);
			} else {
				TipManagerCommon.getInstance().showLanTip("CN_167",code);
			}

			qmr.GameLoading.getInstance().close();
		}
	}
}