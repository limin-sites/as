function syncAssistant(isHtml) {
    console.log(window.syncAssistantVM);
    var syncVM =  window.syncAssistantVM;
    window.syncPost({
        title: syncVM.title || '未获取到标题',
        desc: syncVM.mdContent ||'未获取到摘要',
        content: isHtml?window.syncAssistantVM.htmlContent:window.syncAssistantVM.mdContent || '未获取到内容',
        thumb: syncVM.thumb || "",
    });
};

function goToWeichatFormat(isHtml) {
    const input = document.createElement('textarea');
    var c = isHtml?window.syncAssistantVM.htmlContent:window.syncAssistantVM.mdContent;
    document.body.appendChild(input);
    input.value = c;
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
        console.log('复制成功',c);
    }
    document.body.removeChild(input);
    return true;
};

function EditIn(ele,isGithub) {
   console.log(window.syncAssistantVM);
   var syncVM =  window.syncAssistantVM;
   
    if (syncVM.mdFileUrl) {
        if (isGithub) {
            if (syncVM.mdFileUrl.startsWith("c/g/"))
                ele.href = syncVM.baseUrlG + syncVM.mdFileUrl.replace("c/g/", "");
            else if (syncVM.mdFileUrl.startsWith("c/w/"))
                ele.href = syncVM.baseUrlW + syncVM.mdFileUrl.replace("c/w/", "");
            else
                ele.href = syncVM.baseUrl + syncVM.mdFileUrl;
        }

        else {
            if (syncVM.mdFileUrl.startsWith("c/g/"))
                ele.href = syncVM.baseUrlProse + syncVM.mdFileUrl.replace("c/g/", "g/edit/main/");
            else if (syncVM.mdFileUrl.startsWith("c/w/"))
                ele.href = syncVM.baseUrlProse + syncVM.mdFileUrl.replace("c/w/", "w/edit/main/");
            else
                ele.href = syncVM.baseUrlProse + "as/edit/main/" + syncVM.mdFileUrl;
        }
    }
    
   alert( ele.href);
   return true;  
};

// Docsify
window.$docsify = {
    // GENERAL
    // -----------------------------------------------------------------
    name       : 'SQN\'s技术|生活|娱乐',
    repo       : 'https://github.com/limin-sites/p',
    coverpage  : 'coverpage.md',
    homepage   : 'README.md',
    loadSidebar: 'sidebar.md',
    //loadNavbar: 'navbar.md',
    onlyCover: true,

    // NAVIGATION
    // -----------------------------------------------------------------
    alias: {
        '.*?/changelog': 'https://raw.githubusercontent.com/jhildenbiddle/docsify-themeable/master/CHANGELOG.md',
        '.*?/kroki-demo':'https://zuisong.github.io/docsify-kroki/README.md',
        ".*?/21-5-remote": "https://github.com/limin-sites/p/raw/main/notes/21-5.md",
        ".*?/21-6-remote": "https://github.com/limin-sites/p/raw/main/notes/21-6.md"
    },
    auto2top   : true,
    maxLevel   : 3,
    subMaxLevel: 3,

    // PLUGINS
    // -----------------------------------------------------------------
    executeScript: true,
    ga    : 'UA-100100910-3',
    search: {
        depth      : 3,
        noData     : 'No results!',
        placeholder: 'Search...'
    },  
    // tabs: {
    //     persist    : true,      // default
    //     sync       : true,      // default
    //     theme      : 'classic', // default
    //     tabComments: true,      // default
    //     tabHeadings: true       // default
    // },  
    Valine: {
        appId: 'I4umCCOA1687Xvn4yJA5JIq8-MdYXbMMI',
        appKey: '9O3v7VET39cJNEbkbwkiPdKB'
        //, docPath: 'hash', //default to `hash` ,or you can choose `full` //TODO Valine-admin
    },  
    count:{
        countable: true,
        position: 'top',
        margin: '10px',
        float: 'right',
        fontsize:'0.9em',
        color:'rgb(90,90,90)',
        language:'chinese',
        localization: {
          words: "",
          minute: ""
        },
        isExpected: true
    },  
    share: {
        reddit: true,
        linkedin: true,
        facebook: true,
        twitter: true,
        whatsapp: true,
        telegram: true,
    },
    'flexible-alerts': {
        style: 'flat' // or callout //https://github.com/fzankl/docsify-plugin-flexible-alerts
    },
    toc: {
        scope: '.markdown-section',
        headings: 'h1, h2, h3, h4, h5, h6',
        title: 'Table of Contents',// https://github.com/mrpotatoes/docsify-toc
    },
    // remoteMarkdown: {
    //     tag: 'remoteMarkdownUrl',//TODO optional // https://github.com/JerryC8080/docsify-remote-markdown
    // },
    // [remoteMarkdownUrl](https://raw.githubusercontent.com/docsifyjs/docsify/develop/README.md)
    //有兼容问题
    plugins: [
        //EditOnGithubPlugin.create('https://github.com/limin-sites/as/tree/main/',"","Open In Github"),
        
        function(hook, vm) {
            var syncAssistantVM = {};
            window.syncAssistantVM = syncAssistantVM;
            syncAssistantVM.baseUrl = "https://github.com/limin-sites/as/tree/main/";    
            syncAssistantVM.baseUrlW = "https://github.com/limin-sites/w/tree/main/";      
            syncAssistantVM.baseUrlG = "https://github.com/limin-sites/g/tree/main/";  
            syncAssistantVM.baseUrlProse = "https://prose.io/#limin-sites/"
           
            console.log(vm);
            var header = [  
               
                '<p class="c-top-header" style="float: right;margin-left:10px">',
                    '<a style="" target="_blank"',
                    'onclick="EditIn(this,false)">',
                    "Edit in Prose.io",
                    '</a>',
                '</p>',   
                '<p class="c-top-header" style="float: right;margin-left:10px">',
                    '<a style="" target="_blank" ',
                    'onclick="EditIn(this,true)">',
                    "Edit in Github",
                    '</a>',
                '</p>',   
                '<p class="hide-mobile c-top-header" style="float: right;margin-left:10px">',
                    '<a style="" target="_blank" href="https://mixmark-io.github.io/turndown/"',
                    'onclick="goToWeichatFormat(true)">',
                    "turndown",
                    '</a>',
                '</p>',             
                '<p  class="hide-mobile c-top-header" style="float: right;margin-left:10px">',
                    '<a style=""',
                    'onclick="syncAssistant(false)">',
                    "同步MD至...",
                    '</a>',
                '</p>',
                '<p  class="hide-mobile c-top-header" style="float: right;margin-left:10px">',
                    '<a style=""',
                    'onclick="syncAssistant(true)">',
                    "同步HTML至...",
                    '</a>',
                '</p>',
                '<p  class="hide-mobile c-top-header" class="hide-mobile" style="float: right;margin-left:10px">',
                    '<a style="" target="_blank" href="http://md.barretlee.com/"',
                    'onclick="goToWeichatFormat(false)">',
                    "格式化MD",
                    '</a>',
                '</p>',
                '<p  class="hide-mobile c-top-header" style="float: right;margin-left:10px">',
                    '<a style="" target="_blank" href="http://md.barretlee.com/"',
                    'onclick="goToWeichatFormat(true)">',
                    "格式化HTML",
                    '</a>',
                '</p>',
                // '<p  class="c-top-header" style="float:left;">',
                //     '<a style="" target="_blank" href="#">',                
                //     "首页",
                //     '</a>',
                // '</p>'
               
            ].join('')

            hook.beforeEach(function(content) {
                syncAssistantVM.mdFileUrl = vm.route.file;// file 为undefine //TODO
                syncAssistantVM.mdContent = content;
                syncAssistantVM.title = syncAssistantVM.mdContent.match(/^.*$/m)[0];//第一行为标题
                var imgs = syncAssistantVM.mdContent.match(/!\[.*?\]\((.*?)\)/);
                syncAssistantVM.thumb = (imgs && imgs.length > 0) ? imgs[1] : "";//第一张图片有封面,不能有转义字符
                console.log(syncAssistantVM);
                return content;
            });

            hook.afterEach(function(html) {
            syncAssistantVM.htmlContent = html;         
              return (
                header + html               
              );
            });
        },
        function(hook, vm) {
            
            var header = [   
                // '<div>',            
                //     '<textarea id="input" spellcheck="false"></textarea>',

                //     '<button class="btn copy-button" style="display:none;" data-clipboard-action="cut" data-clipboard-target="#outputCtt">复制</button>',
                //     '<button class="btn convert-button">预览</button>',
                    
                //     '<div id="output">',
                //     '<div class="themes-config">',
                //         '<div class="theme-wrapper">',
                //         '<label>页面主题选择：</label><select class="page-theme"></select>',
                //         '</div>',
                //         '<div class="theme-wrapper">',
                //         '<label>代码主题选择：</label><select class="code-theme"></select>',
                //         '</div>',
                //     '</div>',
                //     '<div class="wrapper" id="outputCtt"></div>',
                //     '</div>',
                // '</div>'
            ].join('')

            hook.beforeEach(function(content) {               
                return content;
            });

            hook.afterEach(function(html) {                   
              return (
                header + html               
              );
            });
        }
    ],

    // OTHERS
    // -----------------------------------------------------------------
    //basePath: 'http://localhost:7012/',
    //noCompileLinks: ['/foo', '/bar/.*'],
    themeColor: '#3F51B5',
    //mergeNavbar: true,
    topMargin: 2, // default: 0 ??
    //logo: 'assets/img/github.svg',

    //coverpage: ['/', '/zh-cn/'],//TODO
    //relativePath: true,
    

    // nameLink: {
    //     '/zh-cn/': '/zh-cn/',
    //     '/': '/',
    // },   
    // pagination: {
    //     previousText: '上一节',
    //     nextText: '下一节',
    //     crossChapter: true
    // },
   
    // requestHeaders: {
    //     'x-token': 'xxx',
    // },


    // vueComponents: {
    //     'button-counter': {
    //       template: `
    //         <button @click="count += 1">
    //           You clicked me {{ count }} times
    //         </button>
    //       `,
    //       data() {
    //         return {
    //           count: 0,
    //         };
    //       },
    //     },
    // },

    // vueGlobalOptions: {
    //     data() {
    //       return {
    //         count: 0,
    //       };
    //     },
    // },
    // <p>
    // <button @click="count -= 1">-</button>
    // {{ count }}
    // <button @click="count += 1">+</button>
    // </p>

    formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}',    
};
