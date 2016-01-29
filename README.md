## demo1
React.render通过传递html结构和dom节点,将节点的innerHtml转换 

## demo2
React.createClass定义组件   
定义后允许React.render使用标签描述组件   
React.createClass竟然没有参数去描述组件名。。。这根jquery之类的组件创建不一样

## demo3
组件化的目的在于对js的管理   
尝试将组件提出,通过browserify,使用node方式加载   
jsx语法有两种解析方式   

* 预编译:使用jsx讲组件编译,但是调用组件的js(app.js)执行该命令会报错   
* 解释型:无视编译,通过JSXTransformer,使用回调(猜测),的方式进行解释(script[type=text/jsx],以保证组件不会被执行),但在使用browserify时会报错...
 
jsx  --watch js/3/ js/3build/     
browserify -d ./js/3build/app.js -o ./js/3build/build.js   
好多预编译....写测试还不不这样了-.-

## demo4
React.createClass下的render应该是返回的组件模板   
组件模板,必须是动态的,语法为```{jsx语法?}```内嵌套返回值   
jsx语法是无法debugger的－。－(模板的语法都没发debugger吧。。)    
 
数据可以打印this查看,模板中的内部函数只能看api了,此处使用了```React.Children```内部 函函数,```this.props.children```(获取跟节点的直系子元素-->妄想获取所有字节点的行为 毫无逻辑可言)
 
## demo5 
 
 