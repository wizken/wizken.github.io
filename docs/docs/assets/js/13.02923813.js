(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{375:function(t,a,n){"use strict";n.r(a);var s=n(40),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"anaconda"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#anaconda"}},[t._v("#")]),t._v(" Anaconda")]),t._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("ul",[n("li",[t._v("首先使用Web浏览器访问https://www.anaconda.com/products/individual#Downloads网址，可以将网址内容复制到浏览器的地址栏中，点击键盘上的回车按钮即可进入anaconda的官方网站，在页面下方可以看到Windows、MacOS、Linux三个平台的Anaconda下载链接，点击相应版本的64位安装程序下载按钮选项，官方下载界面如下所示。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Anaconda/w1.png",alt:"img"}})]),t._v(" "),n("ul",[n("li",[t._v("等待下载完成后打开下载文件夹，将下载成功的Anaconda3-2020.11-Windows-x86_64.exe使用鼠标双击打开运行，此时会弹出一个安装提示框，点击Next按钮即可弹出软件安装界面，如下图所示。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Anaconda/1.png",alt:"img"}})]),t._v(" "),n("ul",[n("li",[t._v("进入安装协议界面后，需要点击I Agree按钮进入下一步，一般安装软件都会有这一步。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Anaconda/2.png",alt:"img"}})]),t._v(" "),n("ul",[n("li",[t._v("在安装选择时选择为所有人安装此软件，这样可以安装到系统盘符下，需要管理员控制权限，这样为了下一步配置环境变量提供方便，选择All Users选项后点击Next按钮进入下一步安装。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Anaconda/3.png",alt:"img"}})]),t._v(" "),n("ul",[n("li",[t._v("在下方的Destination Folder的输入框内容修改为C:\\Programs\\Anaconda3，此操作一定要写清楚，在之后的环境变量配置的过程中需要此路径地址，修改完成后点击Next按钮进入软件安装界面，在Advanced Options选项框中选择下面的选项。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Anaconda/4.png",alt:"img"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Anaconda/5.png",alt:"img"}})]),t._v(" "),n("ul",[n("li",[t._v("点击进入如下图所示的安装等待界面，等待安装进度条达到100%即可完成安装，安装等待时间一般取决于电脑的运行速度和计算机存储磁盘的读写速度，等待安装完成之后，软件界面会跳出Completed字样，表示Anaconda软件编译器已经成功安装在计算机中。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Anaconda/6.png",alt:"img"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Anaconda/7.png",alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"配置环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[t._v("#")]),t._v(" 配置环境变量")]),t._v(" "),n("blockquote",[n("p",[t._v("因为在电脑使用过程中，Python软件编程需要Python编译器，已经将软件安装到了C:\\Programs\\Anaconda路径下，但是计算机还不知道已经安装了Python编译器，为了让计算机知道已经成功安装了Python编译器，需要为计算机配置环境变量(Environment variable)。")])]),t._v(" "),n("ul",[n("li",[t._v("首先打开Windows资源管理器，在右侧空白区域中点击鼠标右键，在弹出的右侧菜单栏中点击属性按钮，即可弹出环境变量配置页面。在设置页面的右侧点击高级系统设置按钮即可打开系统属性设置框。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Anaconda/v1.png",alt:"img"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Anaconda/v2.png",alt:"img"}})]),t._v(" "),n("ul",[n("li",[t._v("点击系统属性设置框下方的环境变量按钮，在弹出环境变量设置框的上半部分是用户变量，双击用户变量中的Path变量，在编辑环境变量设置框中新建两个值分别为C:\\Programs\\Anaconda和C:\\Programs\\Anaconda\\Scripts依次点击已经打开的设置框的确定按钮即可将环境变量设置完成。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Anaconda/v3.png",alt:"img"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Anaconda/v4.png",alt:"img"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Anaconda/v5.png",alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"验证环境变量配置是否成功"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证环境变量配置是否成功"}},[t._v("#")]),t._v(" 验证环境变量配置是否成功")]),t._v(" "),n("ul",[n("li",[t._v("点击键盘上的"),n("kbd",[t._v("Win")]),t._v("+"),n("kbd",[t._v("R")]),t._v("键打开运行窗口，在运行窗口中输入cmd，点击确定按钮打开命令提示符Cmd程序。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Python/10.png",alt:"img"}})]),t._v(" "),n("ul",[n("li",[t._v("在打开的命令提示符程序中输入python，然后点击键盘上的回车按钮，如果出现python 不是内部或外部命令，也不是可运行的程序或批处理文件。的提示，则表明python程序未安装成功或者是环境变量未设置成功。如果cmd窗口出现Python 3.9.2 字样表示python编译器软件安装成功且环境变量设置成功。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Python/11.png",alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"配置pip软件安装源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置pip软件安装源"}},[t._v("#")]),t._v(" 配置PIP软件安装源")]),t._v(" "),n("blockquote",[n("p",[t._v("python编程需要软件支持包的下载，例如python的PyQt软件包需要下载才可以使用，python默认是使用pip工具进行下载安装的，但是pip的下载安装源默认是国外服务器，因网络带宽和延迟的原因下载速度无法达到理想效果，国内有组织解决了这个问题，将国外的软件源搬到了国内服务器进行管理，为了提高下载速度，可以使用国内的软件源，在使用之前需要本地设置pip软件安装源。")])]),t._v(" "),n("ul",[n("li",[t._v("首先打开C盘目录，打开用户文件夹并进入用户名文件夹，文件夹路径是C:\\Users<用户名>，在此用户路径下新建一个文件夹名为pip，并在pip文件夹内右键新建一个文本文档，修改文件名为pip.ini，此时需要注意的是在查看选项卡中要勾选显示文件扩展名，如下图所示。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Python/12.png",alt:"img"}})]),t._v(" "),n("ul",[n("li",[t._v("右键pip.ini文件并在右键菜单中选择编辑按钮，打开编辑pip.ini，在文件中添加如下文本。")])]),t._v(" "),n("div",{staticClass:"language-ini extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[global]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("index-url")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" https://pypi.tuna.tsinghua.edu.cn/simple/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[install]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("trusted-host")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" pypi.tuna.tsinghua.edu.cn")]),t._v("\n")])])]),n("ul",[n("li",[t._v("添加文本后的界面如下图所示。")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gitee.com/winstonkenny/static/raw/master/img/docs/Python/13.png",alt:"img"}})]),t._v(" "),n("ul",[n("li",[t._v("点击文件保存按钮将文件进行保存，关闭编辑器即可完成配置。")])]),t._v(" "),n("h2",{attrs:{id:"配置新的python软件编程环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置新的python软件编程环境"}},[t._v("#")]),t._v(" 配置新的Python软件编程环境")]),t._v(" "),n("blockquote",[n("p",[t._v("Anaconda是多版本Python管理工具，有了Anaconda软件后，就可以在电脑上运行多个Python环境且不会相互影响")])]),t._v(" "),n("p",[t._v("打开命令提示符框，输入conda create -n opencv python=3.6命令可以创建一个Python3.6版本的编译解释器，输入activate opencv命令可以将环境切换到opencv环境下。")])])}),[],!1,null,null,null);a.default=i.exports}}]);