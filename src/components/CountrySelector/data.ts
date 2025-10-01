import type { locales } from './../../i18n/i18n';
// 国家代码类型定义
export type CountryCode = string;

// 国家选项接口
export interface CountryOption {
  value: CountryCode;
  label: string;
}

// 多语言国家名称映射
export const countryNames: Record<typeof locales[number], CountryOption[]> = {
  "zh-cn":[
    {
        "value": "United States",
        "label": "美国"
    },
    {
        "value": "Canada",
        "label": "加拿大"
    },
    {
        "value": "United Kingdom",
        "label": "英国"
    },
    {
        "value": "Germany",
        "label": "德国"
    },
    {
        "value": "France",
        "label": "法国"
    },
    {
        "value": "Spain",
        "label": "西班牙"
    },
    {
        "value": "Italy",
        "label": "意大利"
    },
    {
        "value": "Australia",
        "label": "澳大利亚"
    },
    {
        "value": "Russia",
        "label": "俄罗斯"
    },
    {
        "value": "Belgium",
        "label": "比利时"
    },
    {
        "value": "Denmark",
        "label": "丹麦"
    },
    {
        "value": "Netherlands",
        "label": "荷兰"
    },
    {
        "value": "Morocco",
        "label": "摩洛哥"
    },
    {
        "value": "Romania",
        "label": "罗马尼亚"
    },
    {
        "value": "Hungary",
        "label": "匈牙利"
    },
    {
        "value": "Colombia",
        "label": "哥伦比亚"
    },
    {
        "value": "Algeria",
        "label": "阿尔及利亚"
    },
    {
        "value": "China",
        "label": "中国"
    },
    {
        "value": "Japan",
        "label": "日本"
    },
    {
        "value": "India",
        "label": "印度"
    },
    {
        "value": "Brazil",
        "label": "巴西"
    },
    {
        "value": "Mexico",
        "label": "墨西哥"
    },
    {
        "value": "Argentina",
        "label": "阿根廷"
    },
    {
        "value": "South Africa",
        "label": "南非"
    },
    {
        "value": "Egypt",
        "label": "埃及"
    },
    {
        "value": "Nigeria",
        "label": "尼日利亚"
    },
    {
        "value": "Kenya",
        "label": "肯尼亚"
    },
    {
        "value": "Thailand",
        "label": "泰国"
    },
    {
        "value": "Vietnam",
        "label": "越南"
    },
    {
        "value": "South Korea",
        "label": "韩国"
    },
    {
        "value": "Indonesia",
        "label": "印度尼西亚"
    },
    {
        "value": "Philippines",
        "label": "菲律宾"
    },
    {
        "value": "Malaysia",
        "label": "马来西亚"
    },
    {
        "value": "Singapore",
        "label": "新加坡"
    },
    {
        "value": "Turkey",
        "label": "土耳其"
    },
    {
        "value": "Israel",
        "label": "以色列"
    },
    {
        "value": "Saudi Arabia",
        "label": "沙特阿拉伯"
    },
    {
        "value": "United Arab Emirates",
        "label": "阿联酋"
    },
    {
        "value": "Iran",
        "label": "伊朗"
    },
    {
        "value": "Iraq",
        "label": "伊拉克"
    },
    {
        "value": "Pakistan",
        "label": "巴基斯坦"
    },
    {
        "value": "Bangladesh",
        "label": "孟加拉国"
    },
    {
        "value": "Sri Lanka",
        "label": "斯里兰卡"
    },
    {
        "value": "Nepal",
        "label": "尼泊尔"
    },
    {
        "value": "Myanmar",
        "label": "缅甸"
    },
    {
        "value": "Cambodia",
        "label": "柬埔寨"
    },
    {
        "value": "Laos",
        "label": "老挝"
    },
    {
        "value": "Mongolia",
        "label": "蒙古"
    },
    {
        "value": "Kazakhstan",
        "label": "哈萨克斯坦"
    },
    {
        "value": "Uzbekistan",
        "label": "乌兹别克斯坦"
    },
    {
        "value": "Kyrgyzstan",
        "label": "吉尔吉斯斯坦"
    },
    {
        "value": "Tajikistan",
        "label": "塔吉克斯坦"
    },
    {
        "value": "Afghanistan",
        "label": "阿富汗"
    },
    {
        "value": "Poland",
        "label": "波兰"
    },
    {
        "value": "Czech Republic",
        "label": "捷克"
    },
    {
        "value": "Slovakia",
        "label": "斯洛伐克"
    },
    {
        "value": "Austria",
        "label": "奥地利"
    },
    {
        "value": "Switzerland",
        "label": "瑞士"
    },
    {
        "value": "Sweden",
        "label": "瑞典"
    },
    {
        "value": "Norway",
        "label": "挪威"
    },
    {
        "value": "Finland",
        "label": "芬兰"
    },
    {
        "value": "Iceland",
        "label": "冰岛"
    },
    {
        "value": "Ireland",
        "label": "爱尔兰"
    },
    {
        "value": "Portugal",
        "label": "葡萄牙"
    },
    {
        "value": "Greece",
        "label": "希腊"
    },
    {
        "value": "Cyprus",
        "label": "塞浦路斯"
    },
    {
        "value": "Malta",
        "label": "马耳他"
    },
    {
        "value": "Luxembourg",
        "label": "卢森堡"
    },
    {
        "value": "Liechtenstein",
        "label": "列支敦士登"
    },
    {
        "value": "Monaco",
        "label": "摩纳哥"
    },
    {
        "value": "Andorra",
        "label": "安道尔"
    },
    {
        "value": "San Marino",
        "label": "圣马力诺"
    },
    {
        "value": "Vatican City",
        "label": "梵蒂冈"
    },
    {
        "value": "Bulgaria",
        "label": "保加利亚"
    },
    {
        "value": "Croatia",
        "label": "克罗地亚"
    },
    {
        "value": "Slovenia",
        "label": "斯洛文尼亚"
    },
    {
        "value": "Serbia",
        "label": "塞尔维亚"
    },
    {
        "value": "Bosnia and Herzegovina",
        "label": "波黑"
    },
    {
        "value": "Montenegro",
        "label": "黑山"
    },
    {
        "value": "North Macedonia",
        "label": "北马其顿"
    },
    {
        "value": "Albania",
        "label": "阿尔巴尼亚"
    },
    {
        "value": "Kosovo",
        "label": "科索沃"
    },
    {
        "value": "Moldova",
        "label": "摩尔多瓦"
    },
    {
        "value": "Ukraine",
        "label": "乌克兰"
    },
    {
        "value": "Belarus",
        "label": "白俄罗斯"
    },
    {
        "value": "Lithuania",
        "label": "立陶宛"
    },
    {
        "value": "Latvia",
        "label": "拉脱维亚"
    },
    {
        "value": "Estonia",
        "label": "爱沙尼亚"
    },
    {
        "value": "Georgia",
        "label": "格鲁吉亚"
    },
    {
        "value": "Armenia",
        "label": "亚美尼亚"
    },
    {
        "value": "Azerbaijan",
        "label": "阿塞拜疆"
    },
    {
        "value": "Uruguay",
        "label": "乌拉圭"
    },
    {
        "value": "Paraguay",
        "label": "巴拉圭"
    },
    {
        "value": "Bolivia",
        "label": "玻利维亚"
    },
    {
        "value": "Peru",
        "label": "秘鲁"
    },
    {
        "value": "Ecuador",
        "label": "厄瓜多尔"
    },
    {
        "value": "Venezuela",
        "label": "委内瑞拉"
    },
    {
        "value": "Guyana",
        "label": "圭亚那"
    },
    {
        "value": "Suriname",
        "label": "苏里南"
    },
    {
        "value": "French Guiana",
        "label": "法属圭亚那"
    },
    {
        "value": "Chile",
        "label": "智利"
    },
    {
        "value": "Cuba",
        "label": "古巴"
    },
    {
        "value": "Jamaica",
        "label": "牙买加"
    },
    {
        "value": "Haiti",
        "label": "海地"
    },
    {
        "value": "Dominican Republic",
        "label": "多米尼加"
    },
    {
        "value": "Puerto Rico",
        "label": "波多黎各"
    },
    {
        "value": "Trinidad and Tobago",
        "label": "特立尼达和多巴哥"
    },
    {
        "value": "Barbados",
        "label": "巴巴多斯"
    },
    {
        "value": "Saint Lucia",
        "label": "圣卢西亚"
    },
    {
        "value": "Saint Vincent and the Grenadines",
        "label": "圣文森特和格林纳丁斯"
    },
    {
        "value": "Grenada",
        "label": "格林纳达"
    },
    {
        "value": "Antigua and Barbuda",
        "label": "安提瓜和巴布达"
    },
    {
        "value": "Saint Kitts and Nevis",
        "label": "圣基茨和尼维斯"
    },
    {
        "value": "Dominica",
        "label": "多米尼克"
    },
    {
        "value": "Belize",
        "label": "伯利兹"
    },
    {
        "value": "Guatemala",
        "label": "危地马拉"
    },
    {
        "value": "Honduras",
        "label": "洪都拉斯"
    },
    {
        "value": "El Salvador",
        "label": "萨尔瓦多"
    },
    {
        "value": "Nicaragua",
        "label": "尼加拉瓜"
    },
    {
        "value": "Costa Rica",
        "label": "哥斯达黎加"
    },
    {
        "value": "Panama",
        "label": "巴拿马"
    },
    {
        "value": "Bahamas",
        "label": "巴哈马"
    },
    {
        "value": "New Zealand",
        "label": "新西兰"
    },
    {
        "value": "Fiji",
        "label": "斐济"
    },
    {
        "value": "Papua New Guinea",
        "label": "巴布亚新几内亚"
    },
    {
        "value": "Solomon Islands",
        "label": "所罗门群岛"
    },
    {
        "value": "Vanuatu",
        "label": "瓦努阿图"
    },
    {
        "value": "New Caledonia",
        "label": "新喀里多尼亚"
    },
    {
        "value": "French Polynesia",
        "label": "法属波利尼西亚"
    },
    {
        "value": "Samoa",
        "label": "萨摩亚"
    },
    {
        "value": "Tonga",
        "label": "汤加"
    },
    {
        "value": "Kiribati",
        "label": "基里巴斯"
    },
    {
        "value": "Tuvalu",
        "label": "图瓦卢"
    },
    {
        "value": "Nauru",
        "label": "瑙鲁"
    },
    {
        "value": "Palau",
        "label": "帕劳"
    },
    {
        "value": "Micronesia",
        "label": "密克罗尼西亚"
    },
    {
        "value": "Marshall Islands",
        "label": "马绍尔群岛"
    },
    {
        "value": "Northern Mariana Islands",
        "label": "北马里亚纳群岛"
    },
    {
        "value": "Guam",
        "label": "关岛"
    },
    {
        "value": "American Samoa",
        "label": "美属萨摩亚"
    },
    {
        "value": "Cook Islands",
        "label": "库克群岛"
    },
    {
        "value": "Niue",
        "label": "纽埃"
    },
    {
        "value": "Tokelau",
        "label": "托克劳"
    },
    {
        "value": "Wallis and Futuna",
        "label": "瓦利斯和富图纳"
    },
    {
        "value": "Other",
        "label": "其他"
    }
  ],
  en: [
    {
        "value": "United States",
        "label": "United States"
    },
    {
        "value": "Canada",
        "label": "Canada"
    },
    {
        "value": "United Kingdom",
        "label": "United Kingdom"
    },
    {
        "value": "Germany",
        "label": "Germany"
    },
    {
        "value": "France",
        "label": "France"
    },
    {
        "value": "Spain",
        "label": "Spain"
    },
    {
        "value": "Italy",
        "label": "Italy"
    },
    {
        "value": "Australia",
        "label": "Australia"
    },
    {
        "value": "Russia",
        "label": "Russia"
    },
    {
        "value": "Belgium",
        "label": "Belgium"
    },
    {
        "value": "Denmark",
        "label": "Denmark"
    },
    {
        "value": "Netherlands",
        "label": "Netherlands"
    },
    {
        "value": "Morocco",
        "label": "Morocco"
    },
    {
        "value": "Romania",
        "label": "Romania"
    },
    {
        "value": "Hungary",
        "label": "Hungary"
    },
    {
        "value": "Colombia",
        "label": "Colombia"
    },
    {
        "value": "Algeria",
        "label": "Algeria"
    },
    {
        "value": "China",
        "label": "China"
    },
    {
        "value": "Japan",
        "label": "Japan"
    },
    {
        "value": "India",
        "label": "India"
    },
    {
        "value": "Brazil",
        "label": "Brazil"
    },
    {
        "value": "Mexico",
        "label": "Mexico"
    },
    {
        "value": "Argentina",
        "label": "Argentina"
    },
    {
        "value": "South Africa",
        "label": "South Africa"
    },
    {
        "value": "Egypt",
        "label": "Egypt"
    },
    {
        "value": "Nigeria",
        "label": "Nigeria"
    },
    {
        "value": "Kenya",
        "label": "Kenya"
    },
    {
        "value": "Thailand",
        "label": "Thailand"
    },
    {
        "value": "Vietnam",
        "label": "Vietnam"
    },
    {
        "value": "South Korea",
        "label": "South Korea"
    },
    {
        "value": "Indonesia",
        "label": "Indonesia"
    },
    {
        "value": "Philippines",
        "label": "Philippines"
    },
    {
        "value": "Malaysia",
        "label": "Malaysia"
    },
    {
        "value": "Singapore",
        "label": "Singapore"
    },
    {
        "value": "Turkey",
        "label": "Turkey"
    },
    {
        "value": "Israel",
        "label": "Israel"
    },
    {
        "value": "Saudi Arabia",
        "label": "Saudi Arabia"
    },
    {
        "value": "United Arab Emirates",
        "label": "United Arab Emirates"
    },
    {
        "value": "Iran",
        "label": "Iran"
    },
    {
        "value": "Iraq",
        "label": "Iraq"
    },
    {
        "value": "Pakistan",
        "label": "Pakistan"
    },
    {
        "value": "Bangladesh",
        "label": "Bangladesh"
    },
    {
        "value": "Sri Lanka",
        "label": "Sri Lanka"
    },
    {
        "value": "Nepal",
        "label": "Nepal"
    },
    {
        "value": "Myanmar",
        "label": "Myanmar"
    },
    {
        "value": "Cambodia",
        "label": "Cambodia"
    },
    {
        "value": "Laos",
        "label": "Laos"
    },
    {
        "value": "Mongolia",
        "label": "Mongolia"
    },
    {
        "value": "Kazakhstan",
        "label": "Kazakhstan"
    },
    {
        "value": "Uzbekistan",
        "label": "Uzbekistan"
    },
    {
        "value": "Kyrgyzstan",
        "label": "Kyrgyzstan"
    },
    {
        "value": "Tajikistan",
        "label": "Tajikistan"
    },
    {
        "value": "Afghanistan",
        "label": "Afghanistan"
    },
    {
        "value": "Poland",
        "label": "Poland"
    },
    {
        "value": "Czech Republic",
        "label": "Czech Republic"
    },
    {
        "value": "Slovakia",
        "label": "Slovakia"
    },
    {
        "value": "Austria",
        "label": "Austria"
    },
    {
        "value": "Switzerland",
        "label": "Switzerland"
    },
    {
        "value": "Sweden",
        "label": "Sweden"
    },
    {
        "value": "Norway",
        "label": "Norway"
    },
    {
        "value": "Finland",
        "label": "Finland"
    },
    {
        "value": "Iceland",
        "label": "Iceland"
    },
    {
        "value": "Ireland",
        "label": "Ireland"
    },
    {
        "value": "Portugal",
        "label": "Portugal"
    },
    {
        "value": "Greece",
        "label": "Greece"
    },
    {
        "value": "Cyprus",
        "label": "Cyprus"
    },
    {
        "value": "Malta",
        "label": "Malta"
    },
    {
        "value": "Luxembourg",
        "label": "Luxembourg"
    },
    {
        "value": "Liechtenstein",
        "label": "Liechtenstein"
    },
    {
        "value": "Monaco",
        "label": "Monaco"
    },
    {
        "value": "Andorra",
        "label": "Andorra"
    },
    {
        "value": "San Marino",
        "label": "San Marino"
    },
    {
        "value": "Vatican City",
        "label": "Vatican City"
    },
    {
        "value": "Bulgaria",
        "label": "Bulgaria"
    },
    {
        "value": "Croatia",
        "label": "Croatia"
    },
    {
        "value": "Slovenia",
        "label": "Slovenia"
    },
    {
        "value": "Serbia",
        "label": "Serbia"
    },
    {
        "value": "Bosnia and Herzegovina",
        "label": "Bosnia and Herzegovina"
    },
    {
        "value": "Montenegro",
        "label": "Montenegro"
    },
    {
        "value": "North Macedonia",
        "label": "North Macedonia"
    },
    {
        "value": "Albania",
        "label": "Albania"
    },
    {
        "value": "Kosovo",
        "label": "Kosovo"
    },
    {
        "value": "Moldova",
        "label": "Moldova"
    },
    {
        "value": "Ukraine",
        "label": "Ukraine"
    },
    {
        "value": "Belarus",
        "label": "Belarus"
    },
    {
        "value": "Lithuania",
        "label": "Lithuania"
    },
    {
        "value": "Latvia",
        "label": "Latvia"
    },
    {
        "value": "Estonia",
        "label": "Estonia"
    },
    {
        "value": "Georgia",
        "label": "Georgia"
    },
    {
        "value": "Armenia",
        "label": "Armenia"
    },
    {
        "value": "Azerbaijan",
        "label": "Azerbaijan"
    },
    {
        "value": "Uruguay",
        "label": "Uruguay"
    },
    {
        "value": "Paraguay",
        "label": "Paraguay"
    },
    {
        "value": "Bolivia",
        "label": "Bolivia"
    },
    {
        "value": "Peru",
        "label": "Peru"
    },
    {
        "value": "Ecuador",
        "label": "Ecuador"
    },
    {
        "value": "Venezuela",
        "label": "Venezuela"
    },
    {
        "value": "Guyana",
        "label": "Guyana"
    },
    {
        "value": "Suriname",
        "label": "Suriname"
    },
    {
        "value": "French Guiana",
        "label": "French Guiana"
    },
    {
        "value": "Chile",
        "label": "Chile"
    },
    {
        "value": "Cuba",
        "label": "Cuba"
    },
    {
        "value": "Jamaica",
        "label": "Jamaica"
    },
    {
        "value": "Haiti",
        "label": "Haiti"
    },
    {
        "value": "Dominican Republic",
        "label": "Dominican Republic"
    },
    {
        "value": "Puerto Rico",
        "label": "Puerto Rico"
    },
    {
        "value": "Trinidad and Tobago",
        "label": "Trinidad and Tobago"
    },
    {
        "value": "Barbados",
        "label": "Barbados"
    },
    {
        "value": "Saint Lucia",
        "label": "Saint Lucia"
    },
    {
        "value": "Saint Vincent and the Grenadines",
        "label": "Saint Vincent and the Grenadines"
    },
    {
        "value": "Grenada",
        "label": "Grenada"
    },
    {
        "value": "Antigua and Barbuda",
        "label": "Antigua and Barbuda"
    },
    {
        "value": "Saint Kitts and Nevis",
        "label": "Saint Kitts and Nevis"
    },
    {
        "value": "Dominica",
        "label": "Dominica"
    },
    {
        "value": "Belize",
        "label": "Belize"
    },
    {
        "value": "Guatemala",
        "label": "Guatemala"
    },
    {
        "value": "Honduras",
        "label": "Honduras"
    },
    {
        "value": "El Salvador",
        "label": "El Salvador"
    },
    {
        "value": "Nicaragua",
        "label": "Nicaragua"
    },
    {
        "value": "Costa Rica",
        "label": "Costa Rica"
    },
    {
        "value": "Panama",
        "label": "Panama"
    },
    {
        "value": "Bahamas",
        "label": "Bahamas"
    },
    {
        "value": "New Zealand",
        "label": "New Zealand"
    },
    {
        "value": "Fiji",
        "label": "Fiji"
    },
    {
        "value": "Papua New Guinea",
        "label": "Papua New Guinea"
    },
    {
        "value": "Solomon Islands",
        "label": "Solomon Islands"
    },
    {
        "value": "Vanuatu",
        "label": "Vanuatu"
    },
    {
        "value": "New Caledonia",
        "label": "New Caledonia"
    },
    {
        "value": "French Polynesia",
        "label": "French Polynesia"
    },
    {
        "value": "Samoa",
        "label": "Samoa"
    },
    {
        "value": "Tonga",
        "label": "Tonga"
    },
    {
        "value": "Kiribati",
        "label": "Kiribati"
    },
    {
        "value": "Tuvalu",
        "label": "Tuvalu"
    },
    {
        "value": "Nauru",
        "label": "Nauru"
    },
    {
        "value": "Palau",
        "label": "Palau"
    },
    {
        "value": "Micronesia",
        "label": "Micronesia"
    },
    {
        "value": "Marshall Islands",
        "label": "Marshall Islands"
    },
    {
        "value": "Northern Mariana Islands",
        "label": "Northern Mariana Islands"
    },
    {
        "value": "Guam",
        "label": "Guam"
    },
    {
        "value": "American Samoa",
        "label": "American Samoa"
    },
    {
        "value": "Cook Islands",
        "label": "Cook Islands"
    },
    {
        "value": "Niue",
        "label": "Niue"
    },
    {
        "value": "Tokelau",
        "label": "Tokelau"
    },
    {
        "value": "Wallis and Futuna",
        "label": "Wallis and Futuna"
    },
    {
        "value": "Other",
        "label": "Other"
    }
]
};

export const getCountryArray = (lang: typeof locales[number]) => {
  return countryNames[lang]
}



