(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{381:function(_,a,t){"use strict";t.r(a);var v=t(40),r=Object(v.a)({},(function(){var _=this,a=_.$createElement,t=_._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"硬件部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬件部分"}},[_._v("#")]),_._v(" 硬件部分")]),_._v(" "),t("blockquote",[t("p",[_._v("单片机介绍")]),_._v(" "),t("ul",[t("li",[_._v("51单片机")]),_._v(" "),t("li",[_._v("STM32单片机")]),_._v(" "),t("li",[_._v("树莓派 处理器BCM2837")])])]),_._v(" "),t("h2",{attrs:{id:"_1-单片机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-单片机"}},[_._v("#")]),_._v(" 1   单片机")]),_._v(" "),t("p",[_._v("方案一：使用AT98C51系列单片机作为本课题设计的主控芯片。单片机作为集成控制芯片，在发展过程中，AT89C51这种类型的单片机已经有一段历史，所以其技术成熟，运算能力和编程应用能力仍旧很灵活，其芯片体积较小、价格低廉、功耗还特别低的特点，但是随着时代的发展，AT89C51单片机的运算速度已经较慢，内存也比较小，并且在开发过程中无法利用仿真器进行参数调节，增加了开发难度。")]),_._v(" "),t("p",[_._v("方案二：使用STM32F103系列单片机作为本课题设计的主控芯片。STM32F103系列单片机属于中低端的32位ARM微控器，其内部自带有丰富的外部资源和更加灵活的使用能力提供给开发者使用，在芯片内存方面，Flash的大小分类有小容量、中容量和大容量。其运算速度是AT89C51的几十倍，价格适中，资源丰富。本系列单片机有STM32F101R6、C8、R8、V8、RB、VB、C8、R8、V8、RB、VB、VE、ZE型号，因为本设计使用的引脚在10引脚左右，所以本设计选择的C8T6型号，因为其在价格上与方案一相差无几，可以保证在有足够性能支持的状态下仍然保持低成本。")]),_._v(" "),t("p",[_._v("由于此次开发所利用到的功能和处理速度在STM32F103C8T6内，在开发能力和价格的考量下，方案一具有明显的劣势，所以选择方案二，即使用STM32F103C8T6作为开发控制芯片是最佳之选 ，其价格和控制系统的开发难度都在本设计的设计范围内。")]),_._v(" "),t("h3",{attrs:{id:"_1-1-stm32f103c8t6单片机介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-stm32f103c8t6单片机介绍"}},[_._v("#")]),_._v(" 1.1   STM32F103C8T6单片机介绍")]),_._v(" "),t("p",[_._v("本课题设计是采用的STM32F103C8T6单片机，众所周知的，这一款但单片机是32位处理器，属于是ARMcortex-M内核的微处理器，这一款单片机的程序存储容量为64KB，正常工作电压是2V到3.6V之间，如果想要它正常工作，必须将其工作温度保持在-40摄氏度到85摄氏度，如果超过这个区间，严重的会将芯片损坏，甚至会发生爆炸的危险。")]),_._v(" "),t("p",[_._v("这一款单片机与传统的51单片机不同，它的总线宽度是32位的，这就预示着它同一时间处理的数据就是普通51单片机的4倍，除此之外，STM32单片机CPU的处理速度也是51单片机的几十倍，STM32单片机的系统时钟频率为72MHz，而普通的51单片机常用的时钟频率为12MHz和11.0592MHz。STM32单片机除了数度快之外，还提供外围设备的支持，其中包括DMA控制器，电机驱动的PWM输出，不同频率下的PWM输出，和频率占空比实时可变的PWM输出，并且提供12位高速AD采集器，避免了过多外设的连接，保证了开发的便捷性。此款单片机的输入输出引脚是三十七个，程序存储容量是64KB，并且这64KB的存储容量是可以扩展为8个64KB的FLASH存储类型，本款单片机的封装是使用的托盘式，封装是采用48-LQFP封装的，就有限定的工作温度范围，分别是零下四十摄氏度和零上八十五摄氏度。这一款单片机是使用的内部振荡器，同时提供十二位高速AD转换器，是在系统芯片内部的，不需要认为添加AD芯片，使用非常方便。")]),_._v(" "),t("p",[_._v("ARM的Cortex-M3处理器在很多年前就已经出现在了市场上，它是全新一代的ARM处理器,这个处理器也正是最为基础的嵌入式开发应用最为广泛的处理器。它应用的很多低成本开发的一些市场上常见的产品。比如说智能灯泡，智能洗衣机，智能插排，智能台灯，智能钟表，自动控制水龙头，人走灯灭系统的开发实验就是基于这些内容的，这一款单片机提供了卓越可观的计算性能，并且同时提供先进的中断服务系统响应。M3是32位单片机微处理器，属于RISC处理器，他这个处理器很有特点，它能够神奇地提供额外的代码效率，这个效率可不是简简单单的51单片机和16位处理器所能比拟的。对于这一个处理器STM32F103C8T6增强型系列是最基本的嵌入式开发平台，它内嵌了最为基础的ARM控制核心。它提供一种防止闪存存储器出现错误的检测手段。")]),_._v(" "),t("p",[_._v("单片机的中断控制器是单片机处理命令的最为重要的部分，这一款单片机也不例外，它拥有着低延迟的中断响应处理是紧耦合的NVIC的能力。这种方式的好处是中断向量的入口地址可以直接被内核识别，可以直接进入内核。采用的是紧耦合的NVIC接口，这个方式可以做到将中断实现早期处理。除了这个方面，STM32单片机对于程序中断的优先级的分配管理提供了相当具有优势的方式，它处理晚到的较高优先级中断的时候，它会将中断管理处理地天衣无缝，不存在任何出错现象。每当中断结束后，它可以自动回复，不需要将结束指令写出来用来结束和继续中断请求。")]),_._v(" "),t("p",[_._v("STM32的最有魅力的地方就是这一款单片机的时钟系统管理，本系统设计采用的STM32F103C8T6型号的单片机具有3个定时器可供选择，还有就是STM32的系统驱动的时钟电路有两种，一种是高速时钟采用的是72MHz晶振，另一种是低速时钟采用的是32.768kHz的晶振。在以下会做详细阐述。STM32F103C8T6单片机引脚图如下图所示。")]),_._v(" "),t("h3",{attrs:{id:"_1-2-复位电路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-复位电路"}},[_._v("#")]),_._v(" 1.2   复位电路：")]),_._v(" "),t("p",[_._v("所谓复位电路就是当该电路被触发时，单片机或其他器件会检测到该状态，从而让单片机自动重新启动，所有程序全部重新从头开始运行。 复位电路被触发后，主板控制器会重新启动，前期对其作的所有设置全部丢失，而恢复到默认设置状态。复位电路出现的原因是为了能够保证单片机的系统能在出现不可恢复的漏洞之后能够将单片机恢复到初始状态，能保证单片机能够继续保持稳定可靠的状态来进行程序的安全运行,必须要有复位电路。我总结了单片机使用过程中常用的复位电路，这些电路一般分为三种:第一种是微分型复位电路，这种电路是具备电容，利用电容的特性，完成电路的微分特性；第二种就是积分型的复位电路，这种电路方式则是完成实现积分电路的内容，同样是利用电容和电感的特性来实现的；第三种就是比较器型复位电路了，这种电路和前两种电路不同，这种是采用了一个比较器芯片来实现复位的。本课题设计使用的复位电路如下****所示。")]),_._v(" "),t("h3",{attrs:{id:"_1-3-晶振电路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-晶振电路"}},[_._v("#")]),_._v(" 1.3   晶振电路：")]),_._v(" "),t("p",[_._v("对于晶振电路的理解呢，顾名思义，它是单片机在工作的时候为系统提供最为基本的时钟信号，系统的正常运行离不开晶振电路的支持，如果没有晶振电路的支持，单片机就不能正常工作，就会停止不前，就如同是一个人没有了心脏一样。单片机的晶振电路就如同是单片机的心脏一样，一下一下地跳动，跳动传输着只有单片机才能理解的电信号，就好比是一个上升沿电平或者是一个下降沿电平触发程序的运行，一步步的运行使得单片机中的程序能够正常运行下去，不会出现掉句的情况。只有这样才能让单片机能够运行我们人写的程序代码。在本设计选择的这个STM32单片机中，它的晶振电路分为两个部分，首先是主要用来确保延时精确的慢速时钟电路，它是采用的32.768kHz的无源晶振体谐振器加上电容进行构成的振荡器，在实际使用过程中，这个时钟电路主要是提供相当精确的延时作用，可以精确表示我们世界中的一秒的时间，所以才选择的特定的32.768kHz的晶振，它的精度能达到十万分之一。在晶振旁组成的晶振电路的电容选择方面，我们要注意很多方面，在这里的电容C5、电容C6的选择时，建议使用质量极高的瓷介质电容器，参数在5pF到15pF之间。挑选符合单片机正常工作标准的晶体或者是谐振器。通常电容C5和电容C6的参数选择相同的参数，这样才能保证晶振电路正常工作。")]),_._v(" "),t("p",[_._v("另一个是高速时钟电路，STM32F103单片机，也就是本设计使用的单片机使用的高速时钟是4M到16M的晶体或者是另一种常用的陶瓷谐振器构成的。在实际使用的情况下 设计电路的时候，晶体或者谐振器在焊接的时候和负载电容要尽可能靠近振荡器的引脚，这样的话是为了避免在晶振电路运行的时候输出失真，并且还可以减少系统启动时的稳定时间。在晶振旁组成的晶振电路的电容选择方面，我们要注意很多方面，在这里的电容C3、电容C4的选择时，建议使用质量极高的瓷介质电容器，参数在5pF到15pF之间。挑选符合单片机正常工作标准的晶体或者是谐振器。通常电容C5和电容C6的参数选择相同的参数，这样才能保证晶振电路正常工作。本课题设计使用的STM32F103C8T6单片机的晶振电路如下****所示。")]),_._v(" "),t("h3",{attrs:{id:"_1-4-电源电路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-电源电路"}},[_._v("#")]),_._v(" 1.4   电源电路：")]),_._v(" "),t("h4",{attrs:{id:"_1-4-1-12v"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-12v"}},[_._v("#")]),_._v(" 1.4.1   12V")]),_._v(" "),t("p",[_._v("一个系统的能够正常工作的前提就是拥有着稳定可靠的电量供给，一个稳定可靠的电源是最为重要的部分了，如果电源不安全不稳定，一切系统都不会正常工作。")]),_._v(" "),t("p",[_._v("12V&5V：本设计对于电源电路的设计是这样的，首先是使用开关电源将220V家用交流电源稳压为5V和12V，5V是对于单片机外设需要5V驱动的模块进行电源提供，12V电源则是对步进驱动的使用提供电源支持，因为步进电机使用的电源是12V到36V，本系统是采用了12V电源。")]),_._v(" "),t("h4",{attrs:{id:"_1-4-2-5v"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-5v"}},[_._v("#")]),_._v(" 1.4.2   5V")]),_._v(" "),t("p",[_._v("本设计对于电源电路的设计是这样的，首先是使用开关电源将220V家用交流电源稳压为5V，5V是对于单片机外设需要5V驱动的模块进行电源提供。")]),_._v(" "),t("p",[_._v("一个系统的能够正常工作的前提就是拥有着稳定可靠的电量供给，一个稳定可靠的电源是最为重要的部分了，如果电源不安全不稳定，一切系统都不会正常工作。本设计对于电源电路的设计是这样的，首先是使用开关电源将220V家用交流电源稳压为5V，5V是对于单片机外设需要5V驱动的模块进行电源提供。")]),_._v(" "),t("p",[_._v("因为本课题设计的硬件使用的是STM32单片机，不像是51单片机的功耗大而需要5V电源娶动，本设计使用的STM32单片机需要的电源是3.3V的电源，为此，我们需要设计一个电路来实现这个问题，本设计采用的是AMS1117 – 3.3芯片来进行对单片机电源的提供，输入的是前端的+5V电源电压，使用AMS1117 – 3.3芯片进行稳压，即可得到我们单片机正常工作的时候所需要的3.3V电源电压。在输入的5V电压之后，首先在连接进入AMS1117芯片之前，我设计了使用104瓷片电容或者是使用105瓷片电容进行输入电压滤波处理，经过电路的旁路瓷片电容滤波之后，在AMS1117芯片的输出端就会有3.3V电压输出，仍然使用瓷片电容进行滤波处理，这样得到的电压纹波会非常之小，完全满足了本设计使用的单片机的正常工作的要求。除此之外，这个芯片组成的电路在断电之后还可以避免并且防止电压倒置影响单片机的寿命使用，3.3V电源稳压电路如下****所示。")]),_._v(" "),t("h2",{attrs:{id:"_2-显示电路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-显示电路"}},[_._v("#")]),_._v(" 2   显示电路：")]),_._v(" "),t("h3",{attrs:{id:"_2-1-oled"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-oled"}},[_._v("#")]),_._v(" 2.1   OLED")]),_._v(" "),t("p",[_._v("本课题设计的显示部分是使用了OLED显示屏技术，这个OLED技术到目前为止已经发展的非常成熟了，OLED主要是替代了以往的液晶显示技术，这种OLED显示技术的优点在于它的低延迟性，以往的LCD12864液晶屏幕显示在一些高速运行的显示程序运行的时候总是会重现拖影情况，不能做到干净彻底地显示，总是有延迟，这就使得项目开发研究阶段使用的时候会造成时间的浪费。之所以会有这种情况的出现，主要是因为两者的显示机制不同，OLED的全名是Organic Light-Emitting Diode，中文名称为有机电激光显示，这个显示技术是由邓青云（美籍华裔教授）发现的，那个时候是在一个午后，他走在实验室时无意间发现了这个技术，具有非常低的功耗，完全就是不费电的一个元器件，对比度也有相当高的优势，并且这个新兴技术还具有了自发光和广视角的特点，这个特性就表示在黑色显示的时候，是完全没有电量消耗的。在价格方面，相同点阵数的12864点阵的OLED屏幕需要￥12，相对比的LCD12864液晶屏幕则是需要￥20。相比之下，OLED显示技术具有相当大的优势了。本课题设计使用的OLED驱动电路如下****所示。")]),_._v(" "),t("h2",{attrs:{id:"_3-继电器电路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-继电器电路"}},[_._v("#")]),_._v(" 3   继电器电路")]),_._v(" "),t("p",[_._v("断电模块负责在检测短路成功后对电路开关进行开启和关闭。本系统采用继电器作为开关电路模块。继电器有很多的优点，比如说节能环保，使用小电流控制大电流的开关，开关瞬间通电，时间极短，平时通电的时候是处于不耗电的状态的。驱动电压只需要5V就可以完成，驱动时的电流小于0.1A ，经久耐用，不产生电子垃圾。继电器通过STM32的IO口控制继电器的通断来实现对电路的开关，本课题设计采用常闭的时候通电，规定在常开状态的时候处于开路端，选择的继电器是5V0.1A参数驱动的，它的尺寸是长7.3cm，宽6cm，厚度是1.3cm；电路图如下****所示。")]),_._v(" "),t("h2",{attrs:{id:"_4-按键控制电路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-按键控制电路"}},[_._v("#")]),_._v(" 4    按键控制电路：")]),_._v(" "),t("p",[_._v("按键的作用就是设置系统在调试过程中需要调整修改参数，需要人为调整，按键部分是重要的人机交互部分。我们可以通过外置按键去设置程序中的一些特殊模式和指定的数据参数，比如调整"),t("strong",[t("strong",[_._v("的")])]),_._v("值，来减少或者排除掉****。使用按键控制电路的电路图如下****所示。")]),_._v(" "),t("h2",{attrs:{id:"_5-24l01无线模块设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-24l01无线模块设计"}},[_._v("#")]),_._v(" 5    24L01无线模块设计：")]),_._v(" "),t("p",[_._v("本小节主要进行对2.4G无线通信模块的方案设计介绍和硬件使用特点。")]),_._v(" "),t("p",[_._v("说到2.4G无线通信，我想每个人都不会陌生，小到无线鼠标、无线键盘、无线遥控器，大无线Wifi网络、远距离无线通信、无线传呼机、通信基站等等都使用了无线通信的技术，这些技术的出现都离不开最基本的部分，那就是2.4G无线通信，本课题设计的无线通信模块使用的是24L01模块进行无线连接，使用STM32单片机进行驱动，对于2.4G无线网络通信，它是非常亲民的，不但它拥有亲民的价格，而且还有着亲民的实用性，无线遥控汽车的设计、无线鼠标等等产品都是实用性和成本低的代表。无线的安装和有线的安装相比，没有线缆的费用，而且对于故障的检查方面具有很强的便携性。除此之外，无线相比于有线来说，它的分布性和智能性有着相当大的优势，它不受空间的限制，可以放在任意一个地方，只要是没有信号屏蔽的地段都可以实现通信。尤其是在无线传感器的领域有着极大的扩展空间。没有了线缆的束缚，操作人员就很容易将各个采集点进行试验、安装和修理，具有明显的高灵活性特点。不只是在这些方面有优势，相比于有线通信，无线通信的施工周期更加短少，无线传感器系统可以自由地组建网络，并且能够迅速达到预期的工程目标，再看看有线通信网络的组建，往往会花费好几天的时间只进行铺线，大大浪费了时间而且拖后工期。在安全可靠的方面来说，无线通信有着很大的发展，无线通信的加密算法层出不穷，为无线通信的安全性加分。本课题设计使用的无线通信模块的连接电路图如下****所示。")]),_._v(" "),t("h2",{attrs:{id:"_6-lora模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-lora模块"}},[_._v("#")]),_._v(" 6    Lora模块：")]),_._v(" "),t("p",[_._v("说到无线通信，我想每个人都不会陌生，小到无线鼠标、无线键盘、无线遥控器，大无线Wifi网络、远距离无线通信、无线传呼机、通信基站等等都使用了无线通信的技术，这些技术的出现都离不开最基本的无线通信部分。本课题设计的无线通信模块使用的是正点原子组织开发的Lora模块进行无线连接，使用STM32单片机进行驱动，对于Lora无线网络通信，它是非常亲民的，不但它拥有亲民的价格，而且还有着亲民的实用性，无线遥控汽车的设计、无线鼠标等等产品都是实用性和成本低的代表。无线的安装和有线的安装相比，没有线缆的费用，而且对于故障的检查方面具有很强的便携性。除此之外，无线相比于有线来说，它的分布性和智能性有着相当大的优势，它不受空间的限制，可以放在任意一个地方，只要是没有信号屏蔽的地段都可以实现通信。尤其是在无线传感器的领域有着极大的扩展空间。没有了线缆的束缚，操作人员就很容易将各个采集点进行试验、安装和修理，具有明显的高灵活性特点。不只是在这些方面有优势，相比于有线通信，无线通信的施工周期更加短少，无线传感器系统可以自由地组建网络，并且能够迅速达到预期的工程目标，再看看有线通信网络的组建，往往会花费好几天的时间只进行铺线，大大浪费了时间而且拖后工期。在安全可靠的方面来说，无线通信有着很大的发展，无线通信的加密算法层出不穷，为无线通信的安全性加分。对于Lora模块，它的最为出色的特点就是扩频通信，扩频通信技术是由HedyLamarr发现的，她是一个影星，在自己二十六岁的时候发明了扩频通信技术。这种扩频技术可以有效地抗击干扰并且实现加密的功能。以我对Lora无线通信技术的理解，就是在很宽的频带内的跳频，以速率换灵敏度，普通RF模块，在一个理想屏蔽箱内，理论上能达到lora的灵敏度。但是在经过学习之后才了解接收灵敏度是每个射频模块的一个关键技术参数，lora模块是通过扩频技术使得接收灵敏度更低，进而传输距离更远，所有其他模块也只能是他自己标称的灵敏度范围内进行无线传输，和在不在屏蔽箱里测试没有关系。另外，相比Lora，cdma和wifi都运用了扩频技术，但是用途不同，而且原理又有差异。跳频与扩频并不是同一概念，跳频技术是指传输过程中的载波信号的频率切换，与扩频是不同的。本课题设计使用的Lora无线通信模块是使用正点原子的成品模块，连接电路图如下****所示。")]),_._v(" "),t("h2",{attrs:{id:"_7-温湿度传感器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-温湿度传感器"}},[_._v("#")]),_._v(" 7    温湿度传感器：")]),_._v(" "),t("p",[_._v("对于本设计使用的温湿度传感器是DHT11型号，其中湿度检测部分是采用的湿敏电阻型传感器，这个传感器具有极强的性能，外设引脚为四个引脚，引脚分配中的实际情况是有一个VCC引脚，用来连接5V的电源正极，另一个是GND引脚，用来连接主电路中共连的地，第三引脚是空脚，是为了PCB电路的设计而产生的，另外一个引脚就是数据引脚，用来传递数据用的，是具有输入输出的功能，也就是这个引脚连接单片机上，在单片机上通过单片机的引脚的输入输出功能来实现数据的写入和读取，这样就实现了温湿度传感器和单片机的信息传输。DHT11是一个数字温湿度传感器，输出的信号是数字信号，其中有着嵌入的芯片将模拟信息转换成为数字信号进行输出，这个传感器的组成部分是电阻式感湿元件和另外一种测量温度的元件叫NTC，除此之外，还继承了一个性能极高的单片机连着，这个单片机是一个高性能的8位数据处理器，因为有单片机的支持，才造就了本温湿度传感器的高地位，品质在同类产品中一直处于卓越地位、它的响应速度极快、性能和价格的比重也是相当可观。这个模块不光是性能上出众，在其便捷性和可移植性方面也同样拥有着旗舰级的水平。")]),_._v(" "),t("p",[_._v("在驱动程序的设计上，DHT11的通信方式是采用了串行接口，串行接口的好处就是节省线路排布，相比于并行接口来说，DHT11使用的接口方式更加高效方便，除此之外，对于串行接口也多种方式，有单线制串行接口和多线制串行接口之分，本DHT11模块使用的就是单线制串行通信方式，相比于多线制串行接口来说，更加节省了排线的困难，串行通信使用的是单线双向的通信模式。本模块另外一个优势就是封装问题了，DHT11模块是采用四脚封装的方式。和单片机连接只需要将第二个引脚上拉一个五千大小的电阻就可以实现和单片机的通信，连接非常地方便。")]),_._v(" "),t("h2",{attrs:{id:"_8-烟雾传感器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-烟雾传感器"}},[_._v("#")]),_._v(" 8    烟雾传感器：")]),_._v(" "),t("p",[_._v("在单片机项目设计中，烟雾传感器有着相当大的应用平台，就像范围性的火灾报警、公共场所为了限制人们抽烟的烟感报警装置、火灾预警装置等等都是生活中常见的应用，烟雾传感器一般从检测原理方面分类的话，可以分为物理化学性质的烟雾传感器，第二种就是基于利用物理性质的烟雾传感器，这种传感器使用的范围并不高，主要特点例子就是光干涉类型的烟雾传感器，剩下的最后一种烟雾传感器就是基于利用电化学性质的一种高精度高灵敏度的烟雾传感器。本课题设计的烟雾传感器是使用了MQ-02型号的烟雾传感器。烟雾传感器的实物如下所示。")]),_._v(" "),t("p",[_._v("检测原理是在烟雾传感器的突出的探测头里面的一个拥有电离能力的电离室发射阿尔法放射源锕码二四一，在这个地方会一直不间断地放射出阿尔法粒子射线，在发射出高速运动的阿尔法粒子射线之后，使其利用高速运动的特性来撞击在靠近探测头周围的空中的氮气、氧气分子，空气中的氮气氧气在高速运动的阿尔法粒子的轰击下产生电离现象，氮气、氧气分子在电离之后变成了大量的带着正负电荷的离子。这个情况发生后，空气就会由原来的具有绝缘性质的状态变成具有导电性质的状态。在烟雾传感器的突出的探测头里面的一个拥有电离能力的电离室的两端加上适当的电压，由于电离室中具有正负极的离子受到两端电压形成的的电场力之后，让空气中的正离子向电极的负极移动，让空气中的负离子向电极的正极移动，最终形成了电离电流。这个电离电流的大小是和多种情况有关的，就比如说突出的探测头里面的一个拥有电离能力的电离室的几何形状就影响着电离电流的大小，同时放射源的运动活性同样影响着电离电流的大小，除此之外、阿尔法离子的能量、电离室两端的电极电压也影响着形成电离电流的大小，当然除了传感器的基本性能的参数能够影响这个参数以外，空气的密度和空气的温湿度和气体流动的速度也是影响电离电流大小的重要因素，这也是检测不同气体烟雾的关键部分。")]),_._v(" "),t("p",[_._v("当模块处于检测状态的时候，烟雾颗粒进入电离室，这个时候烟雾中的气溶胶会吸附很多空气中的正负离子使电离室中的电性中和，如果烟雾的浓度变高会导致电离室中的离子复合的几率变大，从而离子复合的速度也会增加，最终影响着空气中电离电流会下降很快，当电离电流减小之后，突出的探测头里面的一个拥有电离能力的电离室的阻抗就会增加，通过输出引脚输出电阻的模拟值，然后通过单片机的AD采集方法采集到传感器表现出的数字电压信息，最终实现对烟雾的检测。")]),_._v(" "),t("p",[_._v("本课题设计使用的烟雾传感器的连接电路图如下****所示。")]),_._v(" "),t("h2",{attrs:{id:"_9-有害气体传感器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-有害气体传感器"}},[_._v("#")]),_._v(" 9    有害气体传感器：")]),_._v(" "),t("p",[_._v("在单片机项目设计中，有害气体传感器有着相当大的应用平台，就像范围性的矿井气体检测、火灾报警、公共场所为了限制人们抽烟的敏感气体报警装置、火灾预警装置等等都是生活中常见的应用，有害气体传感器一般从检测原理方面分类的话，可以分为物理化学性质的有害气体传感器，第二种就是基于利用物理性质的有害气体传感器，这种传感器使用的范围并不高，主要特点例子就是光干涉类型的有害气体传感器，剩下的最后一种有害气体传感器就是基于利用电化学性质的一种高精度高灵敏度的有害气体传感器。本课题设计的有害气体传感器是使用了MQ-135型号的有害气体传感器。有害气体传感器的实物如下所示。")]),_._v(" "),t("p",[_._v("检测原理是在有害气体传感器的突出的探测头里面的一个拥有电离能力的电离室发射阿尔法放射源锕码二四一，在这个地方会一直不间断地放射出阿尔法粒子射线，在发射出高速运动的阿尔法粒子射线之后，使其利用高速运动的特性来撞击在靠近探测头周围的空中的氮气、氧气分子，空气中的氮气氧气在高速运动的阿尔法粒子的轰击下产生电离现象，氮气、氧气分子在电离之后变成了大量的带着正负电荷的离子。这个情况发生后，空气就会由原来的具有绝缘性质的状态变成具有导电性质的状态。在有害气体传感器的突出的探测头里面的一个拥有电离能力的电离室的两端加上适当的电压，由于电离室中具有正负极的离子受到两端电压形成的的电场力之后，让空气中的正离子向电极的负极移动，让空气中的负离子向电极的正极移动，最终形成了电离电流。这个电离电流的大小是和多种情况有关的，就比如说突出的探测头里面的一个拥有电离能力的电离室的几何形状就影响着电离电流的大小，同时放射源的运动活性同样影响着电离电流的大小，除此之外、阿尔法离子的能量、电离室两端的电极电压也影响着形成电离电流的大小，当然除了传感器的基本性能的参数能够影响这个参数以外，空气的密度和空气的温湿度和气体流动的速度也是影响电离电流大小的重要因素，这也是检测不同气体有害气体的关键部分。")]),_._v(" "),t("p",[_._v("当模块处于检测状态的时候，有害气体颗粒进入电离室，这个时候有害气体中的气溶胶会吸附很多空气中的正负离子使电离室中的电性中和，如果有害气体的浓度变高会导致电离室中的离子复合的几率变大，从而离子复合的速度也会增加，最终影响着空气中电离电流会下降很快，当电离电流减小之后，突出的探测头里面的一个拥有电离能力的电离室的阻抗就会增加，通过输出引脚输出电阻的模拟值，然后通过单片机的AD采集方法采集到传感器表现出的数字电压信息，最终实现对有害气体的检测。")]),_._v(" "),t("p",[_._v("本课题设计使用的有害气体传感器的连接电路图如下所示。")]),_._v(" "),t("h2",{attrs:{id:"_10-可燃气体传感器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-可燃气体传感器"}},[_._v("#")]),_._v(" 10       可燃气体传感器：")]),_._v(" "),t("p",[_._v("在单片机项目设计中，可燃气体传感器有着相当大的应用平台，就像范围性的矿井气体检测、火灾报警、公共场所为了限制人们抽烟的敏感气体报警装置、火灾预警装置等等都是生活中常见的应用，可燃气体传感器一般从检测原理方面分类的话，可以分为物理化学性质的可燃气体传感器，第二种就是基于利用物理性质的可燃气体传感器，这种传感器使用的范围并不高，主要特点例子就是光干涉类型的可燃气体传感器，剩下的最后一种可燃气体传感器就是基于利用电化学性质的一种高精度高灵敏度的可燃气体传感器。本课题设计的可燃气体传感器是使用了MQ-135型号的可燃气体传感器。可燃气体传感器的实物如下所示。")]),_._v(" "),t("p",[_._v("检测原理是在可燃气体传感器的突出的探测头里面的一个拥有电离能力的电离室发射阿尔法放射源锕码二四一，在这个地方会一直不间断地放射出阿尔法粒子射线，在发射出高速运动的阿尔法粒子射线之后，使其利用高速运动的特性来撞击在靠近探测头周围的空中的氮气、氧气分子，空气中的氮气氧气在高速运动的阿尔法粒子的轰击下产生电离现象，氮气、氧气分子在电离之后变成了大量的带着正负电荷的离子。这个情况发生后，空气就会由原来的具有绝缘性质的状态变成具有导电性质的状态。在可燃气体传感器的突出的探测头里面的一个拥有电离能力的电离室的两端加上适当的电压，由于电离室中具有正负极的离子受到两端电压形成的的电场力之后，让空气中的正离子向电极的负极移动，让空气中的负离子向电极的正极移动，最终形成了电离电流。这个电离电流的大小是和多种情况有关的，就比如说突出的探测头里面的一个拥有电离能力的电离室的几何形状就影响着电离电流的大小，同时放射源的运动活性同样影响着电离电流的大小，除此之外、阿尔法离子的能量、电离室两端的电极电压也影响着形成电离电流的大小，当然除了传感器的基本性能的参数能够影响这个参数以外，空气的密度和空气的温湿度和气体流动的速度也是影响电离电流大小的重要因素，这也是检测不同气体可燃气体的关键部分。")]),_._v(" "),t("p",[_._v("当模块处于检测状态的时候，可燃气体颗粒进入电离室，这个时候可燃气体中的气溶胶会吸附很多空气中的正负离子使电离室中的电性中和，如果可燃气体的浓度变高会导致电离室中的离子复合的几率变大，从而离子复合的速度也会增加，最终影响着空气中电离电流会下降很快，当电离电流减小之后，突出的探测头里面的一个拥有电离能力的电离室的阻抗就会增加，通过输出引脚输出电阻的模拟值，然后通过单片机的AD采集方法采集到传感器表现出的数字电压信息，最终实现对可燃气体的检测。")]),_._v(" "),t("p",[_._v("本课题设计使用的可燃气体传感器的连接电路图如下****所示。")]),_._v(" "),t("h2",{attrs:{id:"_11-光电传感器开关模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-光电传感器开关模块"}},[_._v("#")]),_._v(" 11       光电传感器开关模块")]),_._v(" "),t("p",[_._v("本课题设计使用光电开关实现避障功能，分别在正前方、左前方和右前方加设光电开关，当左侧检测到物体后右拐，右侧有物体就左拐。光电开关是光电接近开关的缩写，它利用物体阻挡或反射光束，电路通过同步电路连接，检测物体的存在或不存在。对象不仅限于金属，而且可以检测到反射光（或阻挡光）的所有对象。光电开关将输入电流转换成发射器上的光信号，接收器根据接收到的光的强度或存在来检测目标物体。光电开关烟雾报警器常见于安全系统中，在工业上经常用来计算机器人手臂的运动次数，光电开关已应用于液位检测、液位控制、产品计数、宽度识别、速度检测、定尺剪切、孔洞识别、信号延时、自动门传感、色标检测、打孔剪切、安全防护等诸多领域。此外，在银行、仓库、商店、办公室和其他需要防盗的地方，利用红外线进行隐蔽也可以用作防盗警报器。光电开关电路原理图如图3-4所示，本课题设计的接线图如图3-5所示。")]),_._v(" "),t("h2",{attrs:{id:"_12-超声波测距模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-超声波测距模块"}},[_._v("#")]),_._v(" 12       超声波测距模块：")]),_._v(" "),t("p",[_._v("本课题设计使用超声波模块进行距离测量，超声波测距的方式是通过发送声波后开始计时，当收到声波之后停止计时并且计算时间差，根据声音传播的速度来计算前方声波被反射位置距离超声波模块的距离。使用的超声波模块是HC-SR04模块，实物图如下****所示。，有效测量距离为4m，对于本课题设计的要求已经达到。使用方法是通过单片机的一个控制口（trig口）发出一个大于10us的高电平，这样就可以在接收口等待高电平的输出，在发出大于10us的高电平之后单片机开始定时，在接收端检测到高电平输出之后停止计时，通过计算的这段时间和声音在空气中的传播速度就可以计算出距离数据了。在模块中trip引脚内部有着一个上拉的电阻用来设置端脚控制，当单片机引脚拉低之后才是准备状态。测量原理就是使用单片机IO口的触发测距，给大于10us的启动信号时间，通过另一个引脚来检测是否有信号返回，从而达到距离的检测。")]),_._v(" "),t("p",[_._v("本课题设计的超声波测距模块连接电路图如下****所示。")]),_._v(" "),t("h2",{attrs:{id:"_13-加速度计模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-加速度计模块"}},[_._v("#")]),_._v(" 13       加速度计模块：")]),_._v(" "),t("h2",{attrs:{id:"_14-抽水泵模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-抽水泵模块"}},[_._v("#")]),_._v(" 14       抽水泵模块：")]),_._v(" "),t("p",[_._v("采样模块采用底吸潜水泵鱼缸水泵抽水泵作为取水设备来抽取课题所需测量的水样，这个装置是使用了一个电动机也就是一个离心泵进行快速运转，离心泵中有叶轮和叶片两部分组成，离心泵在正常工作的时候不同地运转旋转，在接触到离心泵的叶轮和叶片两部分之后的水会在受到离心力，在受到离心力之后的水会做离心运动，这个时候这部分的水拥有很高的动能，以其快速的特点在压力的迫使下冲出水泵，经过水管流向指定位置。在水冲出之后，短时间内离心泵的叶轮和叶片的部分地方会变成真空，这个时候大气会将入水管的水压入水泵，从而实现不断地抽水放水。抽水装置图如下****所示。")]),_._v(" "),t("h2",{attrs:{id:"_15-rs485通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-rs485通信"}},[_._v("#")]),_._v(" 15       RS485通信")]),_._v(" "),t("p",[_._v("在RS485拥有较高的抗干扰能力，在通信芯片上我们SN65HVD11DR，该芯片采用3.3 V单电源供电，该芯片被设计为平衡传输线路，使其外围电路设计使用比较简单。该芯片中的总线收发器是单片设计为双向数据集成电路多点的差分式传输通信。该芯片的收发功能只需要单片机一个高低电平信号即可完成收发模式之间的转化，在待机情况下拥有很低的电量功耗。该电路在进行多机通信的时候，需要在主机和从机的最后一个进行阻抗匹配，主要是为了平衡收发功率，使通信能够正常进行，电阻选用最典型的120R并联在两条通信线路上。标准使用电路图如下*****所示。")])])}),[],!1,null,null,null);a.default=r.exports}}]);