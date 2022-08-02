---
id: mtr
title: MTRmod 更新日志
tags: 
  - 更新日志
description: MTRmod的更新日志
---

:::tip

本日志的中文翻译可能不太准确，您可以fork这个文档的GitHub仓库，在修改完成后通过pull提交给我们

:::

### 3.1.0-unofficial-2
- 修正了日语字符不能正确显示的问题。
- 修复了自动驾驶中列车停止后随机翻转的问题。
- 修正缆车车门突然关闭的问题。
- 改进并使用了新的列车BVE。
- 已知问题
    - 使用Forge 1.19游玩的玩家，请使用Architectury V5.7.xx，V5.8.xx或更高的版本可能会导致你的游戏崩溃。同时最新版本的Forge也有问题，也会导致你的游戏崩溃。目前我们已经测试了V41.0.63，它可以正常工作，但仍可能会出现意料之外的问题。
    - 一些玩家在手动驾驶列车时仍然遇到问题，包括但不限于服务器延迟以及看门狗错误。
    
<details>
<summary><b>英文原文</b></summary>

- Fixed Japanese characters not rendering properly
- Fixed manual vehicles randomly flipping after stopping
- Fixed cable car doors slamming shut
- Improved sound distance for trains using the new BVE sounds

Known Issues
- For Forge 1.19, please use Architectury version 5.7.xx. Versions 5.8.xx or higher might crash. The latest version of Forge also has problems. I have tested 41.0.63 and it seems to work.
- Some players are still experiencing issues with manual trains, including server lag and watchdog errors.

</details>

### 3.1.0-unofficial-1
- ```@Nemo```制作出了BVE格式的列车声音文件！如果有一个MTR MVP GitHub贡献者奖，你一定会获得他的。
到目前为止，使用这种格式的列车有：
    - London Underground 1995
    - London Underground 1996
    - London Underground D78
- 手动驾驶
    - 车辆段现在有 "手动驾驶 "选项
    - 按住司机键项，可以登上并控制车辆
    - 按 上/下箭头 来控制动力和刹车，用左箭头来打开或关闭车门
    - 列车在一定时间内无人操作会自动切换回自动模式（取决于侧线的设定）。
    - 除非列车有设定好的路径，否则列车是不会运行的。如果它不运行，请点击车库面板里的 "刷新路径"。
- 更多类型的文本显示已经采用缓存渲染以获得更好的性能，包括但不限于标志和车站名称。

<details>
<summary><b>英文原文</b></summary>

- Vehicle sounds in BVE format by ```@Nemo```! Really impressive! If there was an MTR MVP GitHub Contributor award, it would go to you. Trains using this format so far:
    - London Underground 1995
    - London Underground 1996
    - London Underground D78
- Manual vehicle driving
    - Sidings now have the "Drivable Vehicle" option
    - Hold the Driver Key item to board and control a vehicle
    - Press Up Arrow / Down Arrow to control the power and brake, and use the Left Arrow to open or close the doors
    - Vehicles will automatically switch back to auto mode after a certain time (specified by the siding)
    - Vehicles will not move unless there is a valid path generated for the vehicle. Click "Refresh Path" in the depot if it is not working.
- More types of text display now use cached rendering for better performance, including signs and station names

</details>