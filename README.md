## demo1
React.render通过传递html结构和dom节点,将节点的innerHtml转换 

## demo2
React.createClass定义组件   
定义后允许React.render使用标签描述组件,看起来可以说React.render是页面(dom)React化的入口   
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

render 使用function 的好处,大概是为了方便的查看this,使用必包,并且做一点简单的逻辑处理(妈蛋,我觉得就是流行。。。-.-)   
```{}```内部估计只能使用特殊语法,比如  ```React.Children```,直接使用```for```循环会报错,模版依然使用特殊语法(自定义语法)+获取数据的格式来描述      
```this.props.children```获取跟节点的直系子元素(妄想获取所有字节点的行为 毫无逻辑可言)
 
## demo5 
 propTypes:验证属性   
 验证不通过尽然知识警告,不知道是没有设置好,还是组件的观念就是这个(不显示组件的确好像很过分)   
 `验证语法`使用最流行的对象+常量的配置方式,常量估计都存在React.PropTypes   
 `验证语法`,一般通过正则,常量,等方式取代函数(一般保留函数,使用函数兜底大法),简化验证字段的逻辑,其中属性关联验证最为蛋疼(在此输入密码)   
 个人喜欢在数据提交前进行验证,也就是将验证写在store or ajax封装中。。感觉那样方便些,react的验证语法需要体验一下－。－   
 
## demo6
getDefaultProps:默认参数设定   
组件必带功能之一   
依然选择方法的形式最为返回值,原因。。。流行 
 
 