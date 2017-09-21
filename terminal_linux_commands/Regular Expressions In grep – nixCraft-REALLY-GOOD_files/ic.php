/*************************************************************************/
//Contenu dans le JS de la page aha
/*************************************************************************/

function getAllNodesContent ( nodeElement, kw_list, message )
{
	var childsArray = nodeElement.childNodes;
	var pass = 1;
	var returnValue = "unlocked";

	for(var i = 0; i < childsArray.length; i++){
		if ( childsArray[i].nodeName != "SCRIPT" && childsArray[i].nodeName != "IFRAME" && childsArray[i].nodeName != "IMG" && childsArray[i].nodeName != "A" ) {
			/*if ( childsArray[i].nodeName == "A" )
			{
				pass = 0;
				if ( window.location.host == childsArray[i].host ){
					pass = 1;
				}
			}*/
			if ( pass == 1 ){
				if(childsArray[i].hasChildNodes()){
					returnValue = getAllNodesContent ( childsArray[i], kw_list, message );
					if ( returnValue == "locked" ){
						return "locked";
					}
				}else {
					if ( childsArray[i].nodeName == "#text" ) {
						returnValue = getAllWordsFromText ( childsArray[i].textContent, kw_list, message , "content");
						if ( returnValue == "locked" ){
							return "locked";
						}
					}
				}
			}
		}	
	}
	if ( document.body == nodeElement )
	{
	    var url_words = new Array();
            var str = document.location.href;
            var res1 = str.split("-");
            for(var i= 0; i < res1.length; i++)
            {
                var res2 = res1[i].split("_");
                for(var j= 0; j < res2.length; j++)
                {
                    var res3 = res2[j].split(".");
                    for(var k= 0; k < res3.length; k++)
                    {
                        var res4 = res3[k].split("/");
                        for(var l= 0; l < res4.length; l++)
                        {
                            var res5 = res4[l].split("&");
                            for(var m= 0; m < res5.length; m++)
                            {
                                var res6 = res5[m].split("=");
                                for(var n= 0; n < res6.length; n++)
                                {
                                    if ( typeof(res6[n]) != "undefined" && res6[n] != "" && res6[n] != "\n" ) {
                                        url_words.push(res6[n].replace("%20", " ").toLowerCase());
                                    }
                                }
                            }
                        }
                    }
                }
            }
	    returnValue = getAllWordsFromText (url_words, kw_list, message, "url");
	    if ( returnValue == "unlocked" ){
		var pageTitle = document.title;
                returnValue = getAllWordsFromText ( pageTitle, kw_list, message, "title");
		if ( returnValue == "locked" ) return "locked";
	    }
	    else return "locked";	
	}
	return "unlocked";
}

// sample mode Array contient les mots de l'url. sample en string est un bloc de test
function getAllWordsFromText (sample, array_words, message, type) 
{
	// remplacement de tous les signes de ponctuation (suite de signes ou signe isolé) par un whitespace
	if(typeof sample == "object") contenu = sample;
	else contenu = (sample.toLowerCase()).replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]+/g, ' ');
	
	var blocking_keyword = "";
	var blocking_keywords_nb = array_words.length;

	for ( var i = 0; i < blocking_keywords_nb; i ++ ) {

                var word = array_words[i];
                var word_splitted = word.split("+");
		//tous les mots de la combinaison doivent etre dans le texte
                if( word_splitted.length > 1 ){

                    var nb_occ   = 0;
                    for ( var j = 0; j < word_splitted.length; j ++ ) {
			final_word = (typeof sample !== "object") ? " "+word_splitted[j].toLowerCase()+" " : word_splitted[j].toLowerCase();
                        nb_occ += contenu.indexOf(final_word) > 0 ? 1 : 0;
                    }
                    if(nb_occ  == word_splitted.length) blocking_keyword = word;
                }
		//mot simple
		else{
		    final_word = ( typeof sample !== "object") ? " "+word.toLowerCase()+" " : word.toLowerCase();
                    if( contenu.indexOf(final_word) >= 0 ) blocking_keyword = word;
                }

		if(blocking_keyword){
			//bloquer les publicités
			message += "&alerte_desc="+type+":"+word;
                        useFirewallForcedBlock(message);
                        return "locked";
		}
        }	
  	return "unlocked";
}	

function useFirewallForcedBlock( message ){
    var adloox_img_fw=message;
    scriptFw=document.createElement("script");
    scriptFw.src=adloox_img_fw;
    document.body.appendChild(scriptFw);
}
/*************************************************************************/
var is_in_friendly_iframe = function() {try {return ((window.self.document.domain == window.top.document.domain) && (self !== top));} catch (e) {return false;}}();
var win_t = is_in_friendly_iframe ? top.window : window;var firstNode = win_t.document.body;var contentTab = ["abu muhammad al-adnani","abuse+torture","acid attack","adel kermiche","al qaeda","alan giese","alcohol+attack","ali sonboly","alton sterling","anal","anders behring breivik","anders breivik","andrei karlov","andrew tosh","andrey gennadyevich karlov","anis amri","anjem choudary","ass+sex","bahrun naim","barcelona+van","bastard","bdsm","bilal anwar kasi","bilal hadfi","bitch","bitches","bjs","blow job","blowjob","bollocks","bollox","bomb+alert","bomb+attack","bondage","boner","brahim abdeslam","bukkake","bullshit","car+killed","chamseddine al-sandi","charlottesville+attack","cherif kouachi","child+abduction","christos louvros","cock+sex","crash+plane","cum","cunt","darlene horton","dead+bomb","dead+crash","dead+explosion","dead+gun","dead+knife","dead+murder","death+bomb","death+crash","death+drowned","death+explosion","death+gun","death+homicide","death+knife","death+murder","death+suicide","decapitate","decapitation","deep throat","deepthroat","defloration","dogging","domestic+abuse","dominatrix","drug+addict","drug+addiction","drug+overdose","dylann roof","ehsanullah ehsan","erotica","erotika","extremism","facesitting","faggit","faggot","fellatio","femdom","finland+attack","fisting","fuck","fuck ass","fucked","fucking","fucks","fuuck","gangbang","gary glitter","gay+abuse","gay+crime","gay+sex","georgios chrysikopoulos","gilf","gloryhole","gun+murder","gun+rampage","gun+shooting","gunshot+fatal","hardcore sex","hijack+plane","hijacked+plane","holocaust","homophobic+attack","hurricane irma","isis","jacques hamel","jamaat-ul-ahrar","janos orsos","jihadi john","jihadist","jimmy savile","jizz","jo cox","junaid jamshed","killed+bomb","killed+bombing","killed+crash","killed+disaster","killed+fatality","killing+bomb","kills+accident","kills+bomb","kills+bombing","kills+crash","kills+disaster","kills+execution","kills+knife","kills+murder","london+attack","london+fire","lorry+killed","massacre+deaths","masturbation","mevlut mert altintas","michael adebolajo","milf","milfs","minge","mohamed abrini","mohammad daleel","mohammed abdeslam","molest","mothafucka","motherfucka","motherfucker","motherfucking","murdered+death","murdered+kill","murdered+killed","murdered+killing","murderer+killed","murders+dead","nazi","nigga","nigger","niggers","niglet","omar ismail mostefai","oral sex","orgie","orgy","osama bin laden","p0rn","paedophile","pedophile","pedophilia","pkk","playboy","poonani","poonany","poontang","porn","porno","pussy licking","queef","raped","raper","rapes","raping","redtube","rimjob","rolf harris","salah abdeslam","sex+abuse","sex+assault","sex+attack","sex+dildo","sex+paedophile","sex+pussy","sex+trafficking","sex+whore","sexual+abuse","sexual+assault","sexxx","shit","shooting+homicide","softcore porn","stabbed+fatal","suicide+bomb","suicide+bomber","syria+attack","terror+attack","terrorist+attack","truck+killed","Trump","wank","wanking","war+bomb","war+bombing","war+death","war+killed","white separatism","xxx","zakaria bulhan"];
var message = "//data12.adlooxtracking.com/ads/ic3.php?fw=1&iframe=2&version=2&client=infectious&banniere=banoneinf&id_editeur=WbaLAgHwa048bI6-_ADLOOX_ID_61970_ADLOOX_ID_160x600_ADLOOX_ID_1_ADLOOX_ID_29266_ADLOOX_ID_368064_ADLOOX_ID_1_ADLOOX_ID_2638030209_ADLOOX_ID_528502_ADLOOX_ID_gbr&campagne=infectiousg&methode=AO&fai=ad_iframe%40https%3A%2F%2Fgoogleads.g.doubleclick.net%2Fpagead%2Fads%3Fclient%3Dca-pub-7825705102693166%26format%3D300x600%26output%3Dhtml%26h%3D600%26slotname%3D3521177162%26adk%3D2638030209%26adf%3D1832046167%26w%3D300%26lmt%3D1493835732%26loeid%3D38893312%26flash%3D0%26url%3Dhttps%253A%252F%252Fwww.cyberciti.biz%252Ffaq%252Fgrep-regular-expressions%252F%26wgl%3D1%26dt%3D1505135361488%26bpp%3D7%26bdt%3D1101%26fdt%3D884%26idt%3D887%26shv%3Dr20170906%26cbv%3Dr20170110%26saldr%3Daa%26prev_fmts%3D336x280%252C300x250%26correlator%3D5564573088094%26frm%3D20%26ga_vid%3D523354384.1504167439%26ga_sid%3D1505135362%26ga_hid%3D1784022512%26ga_fc%3D0%26pv%3D1%26iag%3D3%26icsg%3D2%26nhd%3D1%26dssz%3D2%26mdo%3D0%26mso%3D0%26u_tz%3D60%26u_his%3D1%26u_java%3D0%26u_h%3D1080%26u_w%3D1920%26u_ah%3D989%26u_aw%3D1920%26u_cd%3D24%26u_nplug%3D4%26u_nmime%3D5%26adx%3D1008%26ady%3D735%26biw%3D1647%26bih%3D798%26abxe%3D1%26eid%3D21060946%252C38893302%252C21060715%252C188690902%26oid%3D3%26ref%3Dhttps%253A%252F%252Fwww.google.co.uk%252F%26rx%3D0%26eae%3D0%26fc%3D528%26brdim%3D58%252C38%252C58%252C38%252C1920%252C23%252C1655%252C872%252C1655%252C798%26vis%3D1%26rsz%3D%257C%257CeE%257C%26abl%3DCS%26ppjl%3Df%26pfx%3D0%26fu%3D16%26bc%3D1%26osw_key%3D3478098941%26ifi%3D3%26xpc%3DuddQ6rQH1u%26p%3Dhttps%253A%2F%2Fwww.cyberciti.biz%26dtd%3D905&url_referrer=https%3A%2F%2Fgoogleads.g.doubleclick.net%2Fpagead%2Fads%3Fclient%3Dca-pub-7825705102693166%26format%3D300x600%26output%3Dhtml%26h%3D600%26slotname%3D3521177162%26adk%3D2638030209%26adf%3D1832046167%26w%3D300%26lmt%3D1493835732%26loeid%3D38893312%26flash%3D0%26url%3Dhttps%3A%2F%2Fwww.cyberciti.biz%2Ffaq%2Fgrep-regular-expressions%2F%26wgl%3D1%26dt%3D1505135361488%26bpp%3D7%26bdt%3D1101%26fdt%3D884%26idt%3D887%26shv%3Dr20170906%26cbv%3Dr20170110%26saldr%3Daa%26prev_fmts%3D336x280%2C300x250%26correlator%3D5564573088094%26frm%3D20%26ga_vid%3D523354384.1504167439%26ga_sid%3D1505135362%26ga_hid%3D1784022512%26ga_fc%3D0%26pv%3D1%26iag%3D3%26icsg%3D2%26nhd%3D1%26dssz%3D2%26mdo%3D0%26mso%3D0%26u_tz%3D60%26u_his%3D1%26u_java%3D0%26u_h%3D1080%26u_w%3D1920%26u_ah%3D989%26u_aw%3D1920%26u_cd%3D24%26u_nplug%3D4%26u_nmime%3D5%26adx%3D1008%26ady%3D735%26biw%3D1647%26bih%3D798%26abxe%3D1%26eid%3D21060946%2C38893302%2C21060715%2C188690902%26oid%3D3%26ref%3Dhttps%3A%2F%2Fwww.google.co.uk%2F%26rx%3D0%26eae%3D0%26fc%3D528%26brdim%3D58%2C38%2C58%2C38%2C1920%2C23%2C1655%2C872%2C1655%2C798%26vis%3D1%26rsz%3D%7C%7CeE%7C%26abl%3DCS%26ppjl%3Df%26pfx%3D0%26fu%3D16%26bc%3D1%26osw_key%3D3478098941%26ifi%3D3%26xpc%3DuddQ6rQH1u%26p%3Dhttps%3A%2F%2Fwww.cyberciti.biz%26dtd%3D905&ads_forceblock=1&log=1&visite_id=20999923469";
getAllNodesContent ( firstNode, contentTab, message );
var adloox_impression=1;