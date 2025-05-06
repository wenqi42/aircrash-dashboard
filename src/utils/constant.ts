
export const PRESAVELANG = 'PRE_SAVE_LANG' as const

export const getPresaveLang = ()=>{
    const lang = localStorage.getItem(PRESAVELANG)
    if(lang){
        return lang
    }
    return 'zh-cn'
}

export const setPresaveLang = (lang:string)=>{
    localStorage.setItem(PRESAVELANG,lang)
}


