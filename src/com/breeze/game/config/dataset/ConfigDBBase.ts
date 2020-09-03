module qmr {
	export class MusicCfg extends BaseBean
	{
		/**音效key*/
	get soundType():string
	{			
		return this.d["soundType"];			
	}
	/**音效名字*/
	get soundName():string
	{			
		return this.d["soundName"];			
	}
	/**是否同时播放*/
	get isPlaySameTime():number
	{			
		return this.d["isPlaySameTime"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="soundType";
		}
	}
	
}