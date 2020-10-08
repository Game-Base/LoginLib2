module qmr
{
	export class CodeCfgCfg extends BaseBean
	{
		/**ID*/
	get id():number
	{			
		return this.d["id"];			
	}
	/**消息描述*/
	get msg():string
	{			
		return this.d["msg"];			
	}
	/**消息类型*/
	get type():number
	{			
		return this.d["type"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

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

	export class ClientCnCfg extends BaseBean
	{
		/**键*/
	get id():string
	{			
		return this.d["id"];			
	}
	/**中文*/
	get value():string
	{			
		return this.d["value"];			
	}
	/**英文*/
	get en_value():string
	{			
		return this.d["en_value"];			
	}

		constructor(element)
		{				
			super(element)
		this.key="id";
		}
	}

}