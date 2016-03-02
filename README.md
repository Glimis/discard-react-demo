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

需求:我希望可以通过boxs设置num属性,就可以产生num*num的格子,格子内内容为序列号,并且最后一个格子颜色不同

###组件定义

* boxs:最外层盒子(wrap)
* boxRow:行
* box:cell,单元格

当然参数不能只有num-.-数据与结构分离嘛,数据一定得全,向当前行,当前列得传,总行数,总列数也得传,万一用上了呢－。－

## demo13 －－事件

需求:通过方向键,修改特殊格子的位置

最开始妄想通过dom交换的方式完成,最后发现react下的dom还真不好找(通过refs,但具体哪两个,比较麻烦),而且dom交换的操作,压根没有-.-   
最后回想一下笔记,再次感受了下数据和结构分离...即修改数据,然后重新render(setProps)就行了,不用操作dom

## demo14 －－控制台交互

需求:增加一个控制台组件,对当前boxs的参数进行交互

依葫芦画瓢,再写一个组件不难,问题是组件通讯竟然毫无头绪可言....查看教程,感受到了react没有继承,一切通过组合的方式进行封装,且

* React.createClass:组合封装组件(内部可交互)
* React.render:将组件渲染至页面

两个React.render渲染出来的组件能否交互我不去考虑,估计类似于ext写法,还是老老实实的在Boxs与Console上增加一个组件(Controller)比较合适

## demo15 －－组件交互

需求:完成交互修改,修改控制台可影响boxs,移动boxs格子也会影响控制台

到这里基本明白了react组件交互的方式,类似于ext,通过父类函数传递(语境,react没有继承,我的意思是上一级组件),不同于传统的组件库,比如easyui,这些是通过domquery的方式传递(无视全局方法)   

在子组件中使用this.setProps会报错,在必要部分将其修改为state,获取这是他们之间的区别...目前还无法在语言上提取出来

在生命周期中处理业务是比较方便的方法,但有明显的卡顿现象(日,执行次数上百。。。能不卡嘛),对setProps与setState的

估计react没有太方便的query方式,组件内id应该也不需要,一切依赖于refs   
这样的话,为了交互,一个页面就是一个巨大的组件,一个页面可能需要使用一个React.render,那么组件的构造会不会就太繁杂了?

## demo16 －－数据初始化

需求:box(cell)内的内容为为无序的,方向键的修改不光交换样式还要交换内容

重构,重新定义组件模型

cell:单元格对象

* text,内容   
* x,x坐标   
* y,y坐标   

row:行对象

* cellData:cell对象集合
* y:行号

box:整体结构 

* rowData:行数集合
* row:行数
* col:列树
* choose:选择对象
	* x 
	* y
	 
顺便讲键盘规则进行修改,高亮的格子代表空白,方便理解

根据参数初始化数据的方式,有点像元数据－。－可以看的话,props为元数据内容,state为数据结构。。。

总结 :react关注结构和数据分离,但并没有model的定义(区别ext),大多数组件的控制属性都只作初始化使用,动态变化依赖函数,react的初始化和变化都依赖属性的变化

* 传统方式:对函数传入参数,根据选择器操作结构

	一般而言,并不考虑中间过程的保存(比如例子中,操作两次),依赖选择器本身是减少耦合但选择器数量过多,难以维护
	
* ext:区分模型和参数,可以通过修改模型修改主体结构也可以通过选择器修改   
 
  模型为结构数据,参数为控制数据,修改模型后可以通过model相关方法出发修改,修改参数则。。。完全没有,需要通过方法进行处理
  
  ext的控制参数只作为初始化使用,其修改都依赖于方法,故对组件的中间状态的保存...完全无爱(需要额外处理)
  
* react:从结果上看,也区分结构数据和控制数据,但本身并不做区分,结构的变化都依赖参数的修改setProps/setState,没有选择器概念,保存状态(数据)也相当方便

## demo17 －－事件交互
重构的时候将控制台删了...发现依赖props的交互需要验证(我喜欢"空对象",讨厌验证)－。－将业务封装在事件中,就是一种"空对象"(这并非是使用事件的充分条件)
>空对象:这里指的是当数据为空是返回一个没有数据的当前对象,用以替代空,改对象无数据,但继承改对象的所有方法,故在调用方法时,无需验证

react是视图描述,没有自定义事件的地方,so,加入了EventEmitter2方便事件的交互

## demo18 －－事件对象化
只有一条EventEmitter2其性质(管理方式)无限类似于全局变量的管理方式,它可以

* 无视组件依赖结构,随处都可调用
* 无视事件是否实现,即使没有实现,也可以调用
* 无返回值

用起来很爽,管理起来很蛋疼(性能无视)...
EventEmitter2是一个对象,将其与组件对象结合(继承or组合),就可以很方便的管理,当然,也会依赖组件间的结构,当然他有几个蛋疼的问题

* 继承:同时使用两个对象的方法的方式,但react组件对象的创建并非传统的new 形式,无法找到其prototype...
* 组合:组合是对继承的一种补充(拓展),也是由于组件对象的特殊创建方式,可能每次都需要创建一次EventEmitter2对象或者在声称一个对象,内部组合react+ EventEmitter2

## html-box1-webpack
使用es6并通过webpack构建react项目,通过```extends React.Component```描述为react对es6的支持,故

* getInitialState中的内容应该写在constructor中   
* 绑定需要追加bind,用以替换this,性质上类似call,但会传入默认参数

## html-box2-redux
基于redux的业务处理架构   
通过props```元数据```,获取stats```数据```是react的开发思路,react组件依赖state的变化而变化(而非直接通过事件),故此业务描述主要在state中,讲业务提取出来,通过```接口```的方式与组件交互即为redux所做的   
此处顾名思义的将box中的业务逻辑(按钮事件)丢给了reduxs(action),类似于传统mvc,接口只依赖交互数据,不会获取对方的具体信息,比如reduxs中,不会再得到refs对象

* store

经典store:尤其存在各种grid/tabel中,model为单个对象,store的model的集合,store包含对model的各种集合处理(排序,过滤,增删改)

mvvm:主要指的是vm,一个控制层(页面)包含一个vm,vm为各种对象的集合(并非单一的对象)

react:类似于vm,react一个页面仅包含一个store,store为各个对象的集合(依然为对象而非数组)

* reducer

类似map/reduce中的reducer,通过包含某种结构的数据(action),组装成所需数据(依然为action,仅作组装,不破坏原有数据)

## html-box3-es6
* 使用es6写法(typescript)
* <a href="http://www.jianshu.com/p/6fa2b21f5df3">展示组件与容器组件分离</a>

### 展示组件

* 只关心它们的样子。
* 可能同时包含子级容器组件和展示组件，一般含DOM标签和自定的样式。
* 通常用this.props.children来包含其他组件
* 不依赖app其它组件，比如flux的actions和stores
* 不会定义数据如何读取，如何改变
* 只通过this.props接受数据和回调函数
* 很少有自己的状态变量，即使有，也是UI的状态变量，比如toggleMenuOpen,InputFocus
* 一般是函数级组件，除非它们需要状态，lifecycle hooks，优化处理。

### 容器组件
* 只关心它们的运作方式。
* 可能同时包含子级容器组件和展示组件，但大都不含DOM标签，而含他们自己所用的wrapping div，从不用自己的样式。
* 为展示组件或其他组件提供数据和方法。
* 调用Flux的actions，并且将其作为展示组件的回调函数。
* 维持许多状态变量，通常充当一个数据源。
* 通常由高阶组件生成，比如Redux里的connect()，Relay里的createContainer()，Flux Utils里的C* ontainer.create()，而非手工写出（译者：可能在meteor中数据是例外吧）

###目录结构

* src

1.webpack中entry部分   
2.通过```import { Provider } from 'react-redux'```发放store   
3.关联html节点

* container

1.通过```{ connect } from 'react-redux'```关联组件接受```store```(```reducer```中的内容)    
2.通过```mapStateToProps``` ```mapDispatchToProps```创建```接口```实现(props的属性与方法)   
3.```mapStateToProps```中通过普通函数创建属性
3.```mapDispatchToProps```中创建函数,通过```dispatch(Action.BoxLeft());```发送状态变更(事件..)   
注:```mapStateToProps```内的逻辑依然可以丢在reducer中,使用时调用并传递state就可以了

* component

1.通过```import React from 'react'```描述组件 (函数式构建依然依赖React)   
2.标准的的react,万事依赖```this.props```,通过redux的分离,基本上不需要直接使用this.state

基于2可以认为,(大多数情况下)component最终会依赖于某个container,也可以将容器与组件彻底分离,如此,则可认为component 创建组件,container赋予行为(接口实现)

* action

action工厂,```dispatch```的辅助对象    
```container```依赖action对象(dispatch),调用```reducer```,换而言之,    
```container```与```reducer```没有直接关系 or    
```action```是链接```container```与```reducer```的```接口```

* reducer

1.通过```combineReducers()```,给```src```用来创建```store```(state)   
2.内部通过```action.type```返回不同值   
3.```index```文件中通过1,返回整体state(架构中处理)   
4.其他文件中通过2,返回state的局部部分   
5.性质上类似map/reducer中的reducer,将复杂的state拆解为无数个独立的reducer,并在```index```中做关联处理    
  

<hr>
react依赖state描述组件,总体上看相当于(使用文件夹描述)

* 创建全局的```reducer```,描述state
* 通过```src```声明store(store封装state)
* 通过```container```获取```src```中发布的store,并通过```action```维护```store```
* 通过```component```描述组件结构

单从

* 创建全局```reducer```
* 通过对象继承的方式发布的```dispatch```触发```reducer```

上看,其处理方式类似于事件处理

* 定义全局事件
* 通过```emit```等方式发布事件

当然,redux的处理方式比事件的方式优秀许多,总的来看基本上取代了自定义事件的地位-.-

## html-box4
练习

* 若```connect(mapStateToProps, mapDispatchToProps)(App)```则App.props包含```mapStateToProps``` ```mapDispatchToProps ```声明的属性与方法
* 若```connect(mapStateToProps)(App)```则 App.props中包含```dispatch```

也就是```mapDispatchToProps```默认传递```dispatch```

component中可以通过```dispatch```发送请求,也可以通过```container```封装的方法发送请求,个人倾向第二种－。－

## html-box5-ajax
异步练习

初始化如componentDidMount丢在container中比较方便,异步处理依赖额外插件


## html-test1-Snaker
贪吃蛇练习

reducers中返回的data需要深拷贝后进行修改,否则无法识别修改(出发render),发现问题后,很蛋疼的追加了随机变量。。。     
react下input真巨坑


## html-test2-layout
布局封装练习
受jq组讲影响太大,妄想将布局组件提出。。。感觉失败了

## html-test3-api
api查看封装   
初次习惯讲所有的信息丢在root中-->垂直思维   


## html-test4-redux
redux单独练习   

### immutable
react对state的比较来自于```newstate===oldstate```而非更复杂的内容比较(这完全是暗示,请使用immutable。。。)   
<a href="https://www.zhihu.com/question/28016223">使用immutable的好处</a>   

### 范式结构

<a href="https://github.com/gaearon/normalizr">范式结构</a>

redux更建议使用范式结构,用以讲逻辑细化...

* 1NF:无重复的域。

```
{
	array:'a,b,c'
}
```
用,分割数组的临时解决方案。。。

* 2NF:建议关键字为单个而非组合(消除子函数依赖)

```
{
	num:'001',//学号
	name:'x',//姓名
	age:18,//年龄
	subject:'语文',//学科
	score:20,//分数
	fullscore:100//总分
}
```
使用name与subject可做唯一约束,但会照常


1.数据冗余-->fullscore与name,age的无限重复   
2.更新异常-->更新fullscore,name,age容易遗漏   
3.插入异常-->无法包含新的课程or学生(均无关联的状况)   
4.删除异常-->删除学生相关的信息,可能会讲学科信息删除   

```
{
	student_subject:[{
		studnet:1,
		subject:1,
		score:20
	}],
	students:[1],
	subjects:[1],
	student:{
		1:{
			num:'001',
			name:'x',
			age:18
		}
	},
	subject:{
		1:{
			name:'语文',
			fullscore:100
		}
	}
}
```
2NF建议其修改为3张表,学生,学科和依赖关系,以上描述是为了方便前端更

* 3NF:无冗余(传递冗余)

依然是围绕着2NF中处理的四个问题

* BCNF:建议使用无意义id

依然组合id惹的祸,建议将组合id的关系提出


<a href="https://github.com/gaearon/normalizr"> normalizr </a>辅助范式转换的工具

```
[{
  id: 1,
  title: 'Some Article',
  author: {
    id: 1,
    name: 'Dan'
  }
}, {
  id: 2,
  title: 'Other Article',
  author: {
    id: 1,
    name: 'Dan'
  }
}]
```

``` 
{
  result: [1, 2],
  entities: {
    articles: {
      1: {
        id: 1,
        title: 'Some Article',
        author: 1
      },
      2: {
        id: 2,
        title: 'Other Article',
        author: 1
      }
    },
    users: {
      1: {
        id: 1,
        name: 'Dan'
      }
    }
  }
}
```

### Reducer
类似于map/reduce,配合范式规范,讲巨大的逻辑划分给各个小的reduce,最终返回store中的数据

### Store
store,对数据的维护,其中数据来自reducer的返回结果,本身也可以通过```dispatch```出发reducer

### Action
```dispatch```发送的命令,其内部必须包含type

## html-test5-nav
公司内部项目导航


## html-test6-nginx
nginx项目监控

