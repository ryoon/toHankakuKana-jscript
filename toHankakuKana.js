function toHankakuKana(str)
{
	var convTbl = {
		0x30a2:0xff71,0x30a4:0xff72,0x30a6:0xff73,0x30a8:0xff74,0x30aa:0xff75,
		0x30ab:0xff76,0x30ad:0xff77,0x30af:0xff78,0x30b1:0xff79,0x30b3:0xff7a,
		0x30b5:0xff7b,0x30b7:0xff7c,0x30b9:0xff7d,0x30bb:0xff7e,0x30bd:0xff7f,
		0x30bf:0xff80,0x30c1:0xff81,0x30c4:0xff82,0x30c6:0xff83,0x30c8:0xff84,
		0x30ca:0xff85,0x30cb:0xff86,0x30cc:0xff87,0x30cd:0xff88,0x30ce:0xff89,
		0x30cf:0xff8a,0x30d2:0xff8b,0x30d5:0xff8c,0x30d8:0xff8d,0x30db:0xff8e,
		0x30de:0xff8f,0x30df:0xff90,0x30e0:0xff91,0x30e1:0xff92,0x30e2:0xff93,
		0x30e4:0xff94,0x30e6:0xff95,0x30e8:0xff96,
		0x30e9:0xff97,0x30ea:0xff98,0x30eb:0xff99,0x30ec:0xff9a,0x30ed:0xff9b,
		0x30ef:0xff9c,0x30f2:0xff66,0x30f3:0xff9d,
		0x30a1:0xff67,0x30a3:0xff68,0x30a5:0xff69,0x30a7:0xff6a,0x30a9:0xff6b,
		0x30c3:0xff6f,
		0x30e3:0xff6c,0x30e5:0xff6d,0x30e7:0xff6e,
		0x30ac:0xff760000+0xff9e,0x30ae:0xff770000+0xff9e,0x30b0:0xff780000+0xff9e,0x30b2:0xff790000+0xff9e,0x30b4:0xff7a0000+0xff9e,
		0x30b6:0xff7b0000+0xff9e,0x30b8:0xff7c0000+0xff9e,0x30ba:0xff7d0000+0xff9e,0x30bc:0xff7e0000+0xff9e,0x30be:0xff7f0000+0xff9e,
		0x30c0:0xff800000+0xff9e,0x30c2:0xff810000+0xff9e,0x30c5:0xff820000+0xff9e,0x30c7:0xff830000+0xff9e,0x30c9:0xff840000+0xff9e,
		0x30d0:0xff8a0000+0xff9e,0x30d3:0xff8b0000+0xff9e,0x30d6:0xff8c0000+0xff9e,0x30d9:0xff8d0000+0xff9e,0x30dc:0xff8e0000+0xff9e,
		0x30d1:0xff8a0000+0xff9f,0x30d4:0xff8b0000+0xff9f,0x30d7:0xff8c0000+0xff9f,0x30da:0xff8d0000+0xff9f,0x30dd:0xff8e0000+0xff9f,
		0x30f4:0xff730000+0xff9e,0x30f7:0xff9c0000+0xff9e,0x30fa:0xff660000+0xff9e,
		0x3002:0xff61,0x3001:0xff64,0x30fc:0xff70,
		0x300c:0xff62,0x300d:0xff63,0x30fb:0xff65,
		0x309b:0xff9e,0x309c:0xff9f
	}

	var c, tmp;
	var high, low;
	var ret = [];

	for(var i = 0; i < str.length; i++) {
		c = str.charCodeAt(i);
		tmp = convTbl[c] || c;
		high = (tmp & 0xffff0000) >> 16;
		if (high != 0)
			ret.push(high);
		low = (tmp & 0xffff);
		ret.push(low);
	}

	return String.fromCharCode.apply(null, ret);
}
