namespace qmr
{
	/**
	 * 游戏资源加载管理方案
	 * 1-加载登陆资源配置
     * 2-加载登录资源
	 * 3-登陆成功之后加载其他资源
	 */
	export class GameLoadManager extends BaseNotify
	{
        private loadingViewparams: Array<any>;
		/**游戏资源是否加载完成（登录后资源） */
		private isGameResAfterLoginLoaded: boolean;
		/**游戏资源是否加载中 */
		private isGameResAfterLoginLoading: boolean;
		/**进入游戏回调函数 */
		private gameResAfterLoginLoadedCall: Function;

		public constructor()
		{
			super();
		}

        /**加载基础资源*/
		public async loadLoginRes()
		{
			WebLoadingManager.setLoadingStatus("玩命加载中...");
			await this.loadResJson("login.res.json", SystemPath.LoginRoot);
			await this.loadThmJson("login.thm.json");
			//游戏配置文件、屏蔽字、随机名字都是在这个地方加载
			await this.loadPreloadingGroup();
			PlatformManager.instance.platform.setLoadingProgress(50);
        }
        
		/** 
		 * 加载登录后游戏资源
		*/
		public async loadGameResAfterLogin()
		{
			let t = this;
			if(this.isGameResAfterLoginLoading){
				return;
			}
			t.isGameResAfterLoginLoading = true;
			t.isGameResAfterLoginLoaded = false;
			await t.loadLoadingViewRes();
			t.setLoadingViewParams("加载资源配置...", true, 0.05, 0.1, false);
			t.setLoadingViewParams("加载皮肤配置...", true, 0.1, 0.2, true);
			await t.loadResJson("default.res.json");
            await t.loadDefaultThmJs();
			await t.loadThmJson("default.thm.json");
			t.setLoadingViewParams("加载游戏配置...", true, 0.2, 0.5, true);
			await t.loadConfigGroup();
			t.setLoadingViewParams("加载公共资源...", true, 0.5, 0.9, true);
			await t.loadCommonGroup();

			t.isGameResAfterLoginLoaded = true;
			if(t.gameResAfterLoginLoadedCall){
				t.gameResAfterLoginLoadedCall.call(this);
			}

			//发起预加载
			t.loadPreModel();
		}

		/**等待登录界面后台资源加载完成 */
		public async waiGameResAfterLoginLoaded()
		{

		}

		private async loadLoadingViewRes(){
			return new Promise((resolve, reject) =>{
				let totalCount = 1;
				let loadedCount = 0;
				let comFunc = function(){
					loadedCount ++;
					if(loadedCount >= totalCount){
						resolve();
					}
				}
				ResManager.getRes(WebLoadingManager.getBgName(), comFunc, this, LoadPriority.IMMEDIATELY);
			})
		}

		/**等待资源加载完成 */
        public async waitGameResLoaded()
		{
			let t = this;
			return new Promise((resolve, reject) =>
			{
				let completeFunc = function ()
				{
					t.setLoadingViewParams("准备进入游戏...", true, 0.99, 0.99, true);
					let timer = new egret.Timer(30, 1);
					timer.addEventListener(egret.TimerEvent.TIMER, function(){
						resolve();
					}, t);
					timer.start();
				}
				if(t.isGameResAfterLoginLoaded){
					t.showLoadingView();
					completeFunc();
				} else{
					t.gameResAfterLoginLoadedCall = completeFunc;
					t.showLoadingView();
				}
			})
        }

		private setLoadingViewParams(...arg){
			this.loadingViewparams = arg;
            if(this.gameResAfterLoginLoadedCall) {
                this.showLoadingView();
            }
		}

        private showLoadingView()
		{
			if(this.loadingViewparams){
				GameLoadingView.getInstance().showSelf(this.loadingViewparams[0], this.loadingViewparams[1], this.loadingViewparams[2], this.loadingViewparams[3], this.loadingViewparams[4]);
			}
        }

        private updateTotalProgress(progress: number){
            let isShow = ModuleManager.isShowModule(ModuleNameLogin.GAME_LOADING_VIEW);
            if(isShow) {
                GameLoadingView.getInstance().updateTotalProgress(progress, true);
            }
		}
		
		/** 添加预加载资源引用 */
		private loaderSilentResource(resArr: any[], completeFunc: Function = null, priority: number = 0)
		{
			let _self = this;
			let resName = null;
			let resPath = null;
			for (let item of resArr)
			{
				resPath = item.path;
				if (item.type)
				{
					ResManager.getRes(resPath, completeFunc, _self, priority, item.type);
				}
				else
				{
					resName = item.res;
					this.preLoadAnimation(item.path, resName, priority, completeFunc, _self, item.harf);
					resPath = item.path + resName + ".png";
					LoaderManager.instance.addGroupRef(resPath);
				}
			}
		}

		/**
		 * 预加载加载动画模型资源，优先级为低
		 */
        public preLoadAnimation(path: string, resName: string, priority = 0, callback: Function = null, callbackObj: any = null, harf: boolean = false): void {
            let pngResName = resName;
			if(harf){
				pngResName = pngResName + "_f";
			}
			if (callback) {
                let loadJson = false;
                let loadImage = false;
                ResManager.getRes(path + resName + ".json", function (data: any) {
                    loadJson = true;
                    if (loadImage && callback) {
                        callback.call(callbackObj);
                    }
                }, this, priority, RES.ResourceItem.TYPE_JSON);
                ResManager.getRes(path + pngResName + ".png", function (data: any) {
                    loadImage = true;
                    if (loadJson && callback) {
                        callback.call(callbackObj);
                    }
                }, this, priority, RES.ResourceItem.TYPE_IMAGE);
            }
            else {
                ResManager.getRes(path + resName + ".json", null, null, priority, RES.ResourceItem.TYPE_JSON);
                ResManager.getRes(path + pngResName + ".png", null, null, priority, RES.ResourceItem.TYPE_IMAGE);
            }
        }

		/**
		* @description 加载前期资源
		*/
		private async loadPreloadingGroup()
		{
			let t = this;
			return new Promise((resolve, reject) =>
			{
				let completeFunc = function () {
					resolve();
				}
				ResManager.loadGroup("loginPre", completeFunc, this, LoadPriority.IMMEDIATELY, t.updateTotalProgress);
			})
        }
        
		
		/** 加载登录后皮肤文件 */
		private async loadCreateRoleThmJs()
		{
			return new Promise((resolve, reject) =>
			{
				let onScriptLoaded = function ()
				{
					// console.log("----default.thm.js onScriptLoaded----:" + egret.getTimer());
					resolve();
				}
				let onScriptLoadingProgress = function (progress: number)
				{
					// console.log("----default.thm.js onScriptLoadingProgress----:" + progress);
				}
				window["onScriptLoadedCallBack"] = onScriptLoaded;
				window["onScriptLoadingProgressCallBack"] = onScriptLoadingProgress;
				if (window["loadJsForEgretGame"])
				{
					window["loadJsForEgretGame"]("createrole", VersionManager.getPathWithGameVersion);
				}
				else
				{
					resolve();
				}
			})
		}

		/** 加载登录后皮肤文件 */
		private async loadDefaultThmJs()
		{
			return new Promise((resolve, reject) =>
			{
				let onScriptLoaded = function ()
				{
					// console.log("----default.thm.js onScriptLoaded----:" + egret.getTimer());
					resolve();
				}
				let onScriptLoadingProgress = function (progress: number)
				{
					// console.log("----default.thm.js onScriptLoadingProgress----:" + progress);
				}
				window["onScriptLoadedCallBack"] = onScriptLoaded;
				window["onScriptLoadingProgressCallBack"] = onScriptLoadingProgress;
				if (window["loadJsForEgretGame"])
				{
					window["loadJsForEgretGame"]("game", VersionManager.getPathWithGameVersion);
				}
				else if(window["loadSub2"])
				{
					window["loadSub2"]();
				} else{
					resolve();
				}
			})
		}

		/**  加载资源配置文件 */
		private async loadResJson(configName: string, resourceRootRalative?: string)
		{
			return new Promise((resolve, reject) =>
			{
				let completeFunc = function ()
				{
					RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, completeFunc, this);
					resolve();
				}
				RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, completeFunc, this);
				if(!resourceRootRalative){
					resourceRootRalative = PlatformConfig.baseRoot;
				}
				let resourceRoot = resourceRootRalative;
				RES.loadConfig(resourceRoot + configName, resourceRoot);
			})
		}

		/**加载皮肤配置 */
		private async loadThmJson(url: string, resourceRootRalative?: string)
		{
			return new Promise((resolve, reject) =>
			{
				//加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
				let theme;
				if(!resourceRootRalative){
					resourceRootRalative = PlatformConfig.baseRoot;
				}
				let resourceRoot = resourceRootRalative;
				theme = new eui.Theme(resourceRoot + url, qmr.StageUtil.stage);
				let completeFunc = function ()
				{
					theme.removeEventListener(eui.UIEvent.COMPLETE, completeFunc, this);
					resolve();
				}
				theme.addEventListener(eui.UIEvent.COMPLETE, completeFunc, this);
			})
		}

		/**
		* @description 加载游戏配置文件
		*/
		private async loadConfigGroup()
		{
			return new Promise((resolve, reject) =>
			{
				let t = this;
				let completeFunc = function ()
				{
					RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, completeFunc, t);
					resolve();
				}

				RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, completeFunc, t);
				ResManager.loadGroup("config", completeFunc, this, LoadPriority.IMMEDIATELY, t.updateTotalProgress);
			})
		}

		/**
		* @description 加载公共资源文件
		*/
		private async loadCommonGroup()
		{
			return new Promise((resolve, reject) =>
			{
				let t = this;
				let completeFunc = function ()
				{
					RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, completeFunc, t);
					resolve();
				}

				RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, completeFunc, t);
				ResManager.loadGroup("common", completeFunc, this, LoadPriority.IMMEDIATELY, t.updateTotalProgress);
			})
		}

		/**
		* @description 预加载模型/技能资源
		*/
		private loadPreModel()
		{
			let uiResArr = [];
			let mapResArr = [];
			this.loadFristMap(mapResArr);
			let uiPath = PlatformConfig.baseRoot + "sheet/";
			uiResArr.push({ path: uiPath, res: "trade" });
			uiResArr.push({ path: uiPath, res: "panelui" });
			uiResArr.push({ path: uiPath, res: "panel1" });
			uiResArr.push({ path: uiPath, res: "panel2" });
			uiResArr.push({ path: uiPath, res: "nameImg" });
			uiResArr.push({ path: uiPath, res: "mainui" });
			
			this.loaderSilentResource(mapResArr, null, LoadPriority.IMMEDIATELY);
			this.loaderSilentResource(uiResArr, null, LoadPriority.LOW);
		}

		private loadFristMap(resArr: any[])
		{
			let mapResId = 1004;
			let fileName, mapPath: string;
			let bgNames: string[] = ["_hang_top.jpg", "_hang_middle.png", "_hang_down.png"];
			bgNames.forEach(element =>
			{
				fileName = mapResId + element;
				mapPath = PlatformConfig.webRoot + "map/" + fileName; 
				resArr.push({ path: mapPath, type: RES.ResourceItem.TYPE_IMAGE });
			});
		}

		private static _instance: GameLoadManager;
		public static get instance(): GameLoadManager
		{
			if (!this._instance)
			{
				this._instance = new GameLoadManager();
			}
			return this._instance;
		}
	}
}