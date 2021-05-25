
// Docsify
window.$docsify = {
    // GENERAL
    // -----------------------------------------------------------------
    name       : 'blog/note Demo',
    repo       : 'liminany/docsify-blog-template',
    coverpage  : 'coverpage.md',
    homepage   : 'introduction.md',
    loadSidebar: 'sidebar.md',
    loadNavbar: 'navbar.md',

    // NAVIGATION
    // -----------------------------------------------------------------
    alias: {
        '.*?/changelog': 'https://raw.githubusercontent.com/jhildenbiddle/docsify-themeable/master/CHANGELOG.md',
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
    // plugins: [
    //     EditOnGithubPlugin.create('https://github.com/liminany/docsify-blog-template/tree/main/'),
    // ],

    // OTHERS
    // -----------------------------------------------------------------
    basePath: 'http://localhost:7012/',
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

    formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}'
};
