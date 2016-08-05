## js事件委托

### 什么是事件委托

通俗的讲，事件就是onclick，onmouseover，onmouseout，等就是事件，委托呢，就是让别人来做，这个事件本来是加在某些元素上的，然而你却加到别人身上来做，完成这个事件。

### 事件委托的好处
可以提高代码性能。使用事件委托技术能让你避免对特定的每个节点添加事件监听器；相反，事件监听器是被添加到它们的父元素上。事件监听器会分析从子元素冒泡上来的事件，找到是哪个子元素的事件。

### jquery 实现事件委托
#### on(正确的做法)
>自 jQuery 版本 1.7 起，on() 方法是 bind()、live() 和 delegate() 方法的新的替代品。该方法给 API 带来很多便利，我们推荐使用该方法，它简化了 jQuery 代码库。

这里就不推荐使用 .live()，.delegate()来使用了。

<iframe height='265' scrolling='no' src='http://codepen.io/gdxw/embed/dXgGYy/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/gdxw/pen/dXgGYy/'>dXgGYy</a> by gdxw (<a href='http://codepen.io/gdxw'>@gdxw</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

### javascript 实现方法

<iframe height='265' scrolling='no' src='http://codepen.io/gdxw/embed/NAOxoz/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/gdxw/pen/NAOxoz/'>js事件委托</a> by gdxw (<a href='http://codepen.io/gdxw'>@gdxw</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
