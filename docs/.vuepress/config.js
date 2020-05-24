module.exports = {
  "title": "细水长流",
  "description": "如果你有梦想，就要去坚持!",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
     valineConfig: {
      appId: 'kxpfp6H9w5UTtCHhaJO0JHSJ-gzGzoHsz',
      appKey: '6Y7mWegTTAzNak8UcCNUob27'
    },	  
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "认识博主",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/shaojunjieSJJ",
            "icon": "reco-github"
          },
		  {
            "text": "csdn",
            "link": "https://blog.csdn.net/weixin_42475367",
            "icon": "reco-github"
          }  
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "shaojunjie",
    "authorAvatar": "/avatar.png",
    "record": "叮咚",
    "startYear": "2020",
	"huawei": true
  },
  "markdown": {
    "lineNumbers": true
  }
}