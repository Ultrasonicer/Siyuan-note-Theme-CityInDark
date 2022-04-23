
export const config = {
    token: '',
    UI: {
        fontFamily: [ // 界面字体
            '"Sarasa Mono SC"',
            '"Microsoft YaHei"',
            '"幼圆"',
        ],
    },
    regs: {
        id: /^\d{14}\-[0-9a-z]{7}$/, // 块 ID 正则表达式
        query: /^\s*\{\{(.*)\}\}\s*$/, // 嵌入块正则表达式
        code: /^\s*\`{3,}\s*(\w*)\s*\n/, // 代码块正则表达式
        file: /^file:\/*(.*)$/, // 文件路径正则表达式
    },
    command: {
        // 命令
        SAVED: () => console.warn('SAVED'),
    },
    IStandaloneEditorConstructionOptions: {
        // autoClosingBrackets: 'languageDefined', // 是否自动添加后括号(包括中括号)
        // autoClosingDelete: 'languageDefined', // 是否自动删除后括号(包括中括号)
        // autoClosingQuotes: 'languageDefined', // 是否自动添加后单引号 双引号
        automaticLayout: true, // 是否自动布局
        bracketPairColorization: { // 匹配括号颜色
            enabled: true,
        },
        colorDecorators: true, // 是否渲染定义的颜色(CSS 中颜色值)
        copyWithSyntaxHighlighting: false, // 是否复制为富文本
        // cursorSmoothCaretAnimation: true, // 光标平滑移动动画
        fontFamily: [
            '"Sarasa Mono SC"',
            '"JetBrainsMono-Regular"',
            '"mononoki"',
            '"Consolas"',
            '"Liberation Mono"',
            '"Menlo"',
            '"Courier"',
            '"monospace"',
        ].join(','), // 字体
        fontLigatures: true, // 是否启用字体连字
        formatOnPaste: true, // 是否格式化粘贴的内容
        // inDiffEditor: false, // 是启用对比功能
        mouseWheelZoom: true, // 是否使用鼠标滚轮缩放
        readOnly: false, // 是否只读
        tabSize: 4, // Tab 制表符缩进大小
        useShadowDOM: true, // 是否使用 Shadow DOM
        // value: '', // 初始文本
        wordWrap: 'off', // 是否自动换行 "on" | "off" | "wordWrapColumn" | "bounded"
    },
    MAP: { // 字段映射
        LABELS: { // 标签
            save: { zh_CN: '保存', default: 'Save' },
            saveAs: { zh_CN: '另存为', default: 'Save AS' },
            wrap: { zh_CN: '切换自动换行', default: 'Toggle Word Wrap' },
            unSaved: {
                zh_CN: "是否不保存更改？\n如果不保存，你的更改将丢失。",
                default: "Do you not save your changes?\nIf you don't save, your changes will be lost"
            },
            mode: {
                localfile: { zh_CN: '本地文件', default: 'Local File' },
                assets: { zh_CN: '资源文件', default: 'Asset File' },
                web: { zh_CN: '网络文件', default: 'Web File' },
            },

            type: {
                d: { zh_CN: '文档块', default: 'Document' },
                h: { zh_CN: '标题块', default: 'Heading' },
                l: { zh_CN: '列表块', default: 'List' },
                i: { zh_CN: '列表项', default: 'List Item' },
                c: { zh_CN: '代码块', default: 'Code' },
                m: { zh_CN: '公式块', default: 'Math' },
                t: { zh_CN: '表格块', default: 'Table' },
                b: { zh_CN: '引述块', default: 'Quote' },
                s: { zh_CN: '超级块', default: 'Super' },
                p: { zh_CN: '段落块', default: 'Paragraph' },
                tb: { zh_CN: '分隔线', default: 'hr' },
                html: { zh_CN: 'HTML块', default: 'HTML' },
                video: { zh_CN: '视频块', default: 'Video' },
                audio: { zh_CN: '音频块', default: 'Audio' },
                widget: { zh_CN: '挂件块', default: 'Widget' },
                iframe: { zh_CN: 'iframe', default: 'Iframe' },
                query_embed: { zh_CN: '嵌入块', default: 'Query' },

            },
        },
        LANGS: {
            zh_CN: 'zh-cn',
            zh_CNT: 'zh-tw',
            en_US: '',
            fr_FR: 'fr',
            default: '',
        },
        LANGUAGES: {
            /* 👇 块渲染样式 👇 */
            default: 'plaintext',
            plaintext: 'plaintext',
            mindmap: 'markdown',
            echarts: 'json',

            /* 👇 文件渲染样式 👇 */
            svg: 'xml',

            /* 👇 highlight.js => monaco-editor 👇 */
            'abap': 'abap',
            'bat': 'bat',
            'clojure': 'clojure',
            'coffeescript': 'coffee',
            'cpp': 'cpp',
            'c#': 'csharp',
            'csharp': 'csharp',
            'csp': 'csp',
            'css': 'css',
            'dart': 'dart',
            'dockerfile': 'dockerfile',
            'elixir': 'elixir',
            'fsharp': 'fsharp',
            'go': 'go',
            'graphql': 'graphql',
            'handlebars': 'handlebars',
            'html': 'html',
            'ini': 'ini',
            'java': 'java',
            'js': 'javascript',
            'javascript': 'javascript',
            'json': 'json',
            'julia': 'julia',
            'kotlin': 'kotlin',
            'less': 'less',
            'lua': 'lua',
            'markdown': 'markdown',
            'mipsasm': 'mips',
            'objectivec': 'objective-c',
            'perl': 'perl',
            'pgsql': 'pgsql',
            'php': 'php',
            'powershell': 'powershell',
            'protobuf': 'protobuf',
            'python': 'python',
            'r': 'r',
            'ruby': 'ruby',
            'rust': 'rust',
            'scala': 'scala',
            'scheme': 'scheme',
            'scss': 'scss',
            'shell': 'shell',
            'solidity': 'solidity',
            'sql': 'sql',
            'swift': 'swift',
            'tcl': 'tcl',
            'twig': 'twig',
            'typescript': 'typescript',
            'xml': 'xml',
            'yaml': 'yaml',
            /* 👆 highlight.js => monaco-editor 👆 */
            /* 👇 !=> monaco-editor 👇 */
            'apex': 'apex',
            'azcli': 'azcli',
            'bicep': 'bicep',
            'cameligo': 'cameligo',
            'ecl': 'ecl',
            'flow9': 'flow9',
            'freemarker2': 'freemarker2',
            'hcl': 'hcl',
            'lexon': 'lexon',
            'liquid': 'liquid',
            'm3': 'm3',
            'msdax': 'msdax',
            'mysql': 'mysql',
            'pascal': 'pascal',
            'pascaligo': 'pascaligo',
            'pla': 'pla',
            'postiats': 'postiats',
            'powerquery': 'powerquery',
            'pug': 'pug',
            'qsharp': 'qsharp',
            'razor': 'razor',
            'redis': 'redis',
            'redshift': 'redshift',
            'restructuredtext': 'restructuredtext',
            'sb': 'sb',
            'sophia': 'sophia',
            'sparql': 'sparql',
            'st': 'st',
            'systemverilog': 'systemverilog',
            'vb': 'vb',
            /* 👆 !=> monaco-editor 👆 */
        },
        THEMES: {
            0: 'vs',
            1: 'vs-dark',
            '0': 'vs',
            '1': 'vs-dark',
            'default': 'vs',
        },
    },
};
