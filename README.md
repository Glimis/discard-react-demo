## demo01－－React.render
React.render通过传递html结构和dom节点,将节点的innerHtml转换 

## demo02－－React.createClass
React.createClass定义组件   
定义后允许React.render使用标签描述组件,看起来可以说React.render是页面(dom)React化的入口   
React.createClass竟然没有参数去描述组件名。。。这根jquery之类的组件创建不一样

## demo03－－模块化
组件化的目的在于对js的管理   
尝试将组件提出,通过browserify,使用node方式加载   
jsx语法有两种解析方式   

* 预编译:使用jsx讲组件编译,但是调用组件的js(app.js)执行该命令会报错   
* 解释型:无视编译,通过JSXTransformer,使用回调(猜测),的方式进行解释(script[type=text/jsx],以保证组件不会被执行),但在使用browserify时会报错...
 
jsx  --watch js/3/ js/3build/     
browserify -d ./js/3build/app.js -o ./js/3build/build.js   
好多预编译....写测试还不不这样了-.-

## demo04－－React.createClass 逻辑处理
React.createClass下的render应该是返回的组件模板   
组件模板,必须是动态的,语法为```{jsx语法?}```内嵌套返回值   
jsx语法是无法debugger的－。－(模板的语法都没发debugger吧。。)    

render 使用function 的好处,大概是为了方便的查看this,使用必包,并且做一点简单的逻辑处理(妈蛋,我觉得就是流行。。。-.-)   
```{}```内部估计只能使用特殊语法,比如  ```React.Children```,直接使用```for```循环会报错,模版依然使用特殊语法(自定义语法)+获取数据的格式来描述      
```this.props.children```获取跟节点的直系子元素(妄想获取所有字节点的行为 毫无逻辑可言)
 
## demo05－－propTypes
 propTypes:验证属性   
 验证不通过尽然知识警告,不知道是没有设置好,还是组件的观念就是这个(不显示组件的确好像很过分)   
 `验证语法`使用最流行的对象+常量的配置方式,常量估计都存在React.PropTypes   
 `验证语法`,一般通过正则,常量,等方式取代函数(一般保留函数,使用函数兜底大法),简化验证字段的逻辑,其中属性关联验证最为蛋疼(在此输入密码)   
 个人喜欢在数据提交前进行验证,也就是将验证写在store or ajax封装中。。感觉那样方便些,react的验证语法需要体验一下－。－   
 
## demo06－－getDefaultProps
getDefaultProps:默认参数设定   
组件必带功能之一,个人觉得默认参数都是必设的,万一参数为null,不显示就算bug了－。－      
依然选择方法的形式做为返回值(对象竟然不行),原因。。。流行    
很蛋疼(清晰)的地方在于null判断,此处空仅指undefined...需要讲业务空("",null)转换为undefined   

## demo07－－refs
组件最终关注/操作dom,可以通过refs快速获取关联dom,关联dom后,有两种表现      

* 封装为框架dom,解决其兼容性问题or操作复杂问题   
* 封装为通用组件,解决其嵌套问题   

此处使用第二种方式,即将其封装为组件   
大致是因为react只是一个视图,dom的封装可以通过其他库(或者说自带),而将其封装为通用组件也是相当方便的事情(react创建组件无需命名,不知道与此处有关系否)   
注:此处有两种情况

* ref下的节点为dom
* ref下的节点为组件

react将其全部处理为组件,但

```
 <div ref='title'>
	<p>这是第<span ref='num'>0</span>次点击</p>
</div>
```
this.refs.title.refs时没有num的..

```
<Title ref='title'>
```
此时没有问题   
注:组件关注dom,但不代表特别依赖-.-(react提供了一套api辅助操作dom,用以实现虚拟dom)
## demo08－－结构与内容的关系
state

* getInitialState初始化
* 可以通过this.state访问其中对象   
* 可以通过this.setState修改   
* 其属性的修改会调用render中的方法
  
props

* 组件中属性进行初始化
* 可以通过this.props访问其中对象   
* 可以通过this.setProps修改   
* 其属性的修改也会调用render中的方法
   
区别不清楚。。。
# demo09－－组件刷新
输入/输出框交互   
this.props与this.state是单向数据(组件值的修改对该对象无影响)   
获取or更新对象内容,可以通过事件下的target,获取原生节点,以获取内容
# demo10－－生命周期    
生命周期    

* componentWillMount/componentDidMount 组件初始化前后
* componentWillUpdate/componentDidUpdate 组件重新渲染前后
* componentWillUnmount 组件卸载后

组件初始化与渲染不同操作的地方,基本用不上(经验之谈,暴露低端经验了...)

## demo11－－xhr
react并未封装xhr,依赖第三方组件   
react通过render 返回方法,其中jsx中不允许语法嵌套(for使用react.children.map),if则丢在function中(闭包)   

##总结
目前讲组件理解为,专注于结构与数据分离的操作方式,在react中通过

* props/states:描述数据
* render:描述结构
* propTypes/getDefaultProps等方式辅助数据维护
* refs,闭包(使用函数而非对象/字符串等方式)等方式辅助结构维护

其开发形式大致为,修改描述data,最终修改dom结构,对数据的描述讲更加形象化

## box 例子
写个排序游戏做例子
## demo12 －－定义结构

我希望可以通过boxs设置num属性,就可以产生num*num的格子,格子内内容为序列号,并且最后一个格子颜色不同

###组件定义

* boxs:最外层盒子(wrap)
* boxRow:行
* box:cell,单元格

当然参数不能只有num-.-数据与结构分离嘛,数据一定得全,向当前行,当前列得传,总行数,总列数也得传,万一用上了呢－。－

## demo13 －－事件

通过方向键,修改特殊格子的位置

最开始妄想通过dom交换的方式完成,最后发现react下的dom还真不好找(通过refs,但具体哪两个,比较麻烦),而且dom交换的操作,压根没有-.-   
最后回想一下笔记,再次感受了下数据和结构分离...即修改数据,然后重新render(setProps)就行了,不用操作dom

## demo14 －－控制台交互

增加一个控制台组件,对当前boxs的参数进行交互

以葫芦画瓢,再写一个组件不难,问题是组件通讯竟然毫无头绪可言....查看教程,感受到了react没有继承,一切通过组合的方式进行封装,且

* React.createClass:组合封装组件(内部可交互)
* React.render:将组件渲染至页面

两个React.render渲染出来的组件能否交互我不去考虑,估计类似于ext写法,还是老老实实的在Boxs与Console上增加一个组件(Controller)比较合适

## demo15 －－组件交互

完成交互修改,修改控制台可影响boxs,移动boxs格子也会影响控制台

到这里基本明白了react组件交互的方式,类似于ext,通过父类函数传递(语境,react没有继承,我的意思是上一级组件),不同于传统的组件库,比如easyui,这些是通过domquery的方式传递   

在子组件中使用this.setProps会报错,在必要部分将其修改为state,获取这是他们之间的区别...目前还无法在语言上提取出来

在生命周期中处理业务是比较方便的方法,但有明显的卡顿现象(日,执行次数上百。。。能不卡嘛),对setProps与setState的

估计react没有太方便的query方式,组件内id应该也不需要,一切依赖于refs   
这样的话,为了交互,一个页面就是一个巨大的组件,一个页面可能需要使用一个React.render,那么组件的构造会不会就太繁杂了?


