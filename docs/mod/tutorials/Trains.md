自本mod的3.0.0-beta-5版本开始，列车只能在侧线轨道上生成。它们将按照车厂设定的时间表和说明运行。侧线的长度必须基于以下公式：

```
S = (L + 1)*C + 1
```

以下是公式各个字母的含义：

`S`: 所需要搭建的侧线轨道长

`L`: 所需列车类型的一卡车（一节车厢）的长度（见下表）

`C`: 车厢数量

> 比如，4节车厢的K-train小型，那么就是```(19+1)×4+1=81```，其中，81为侧线轨道所需要搭建的长度。

# 类型

目前，Mod中有八种不同的列车类型。

| 名称 | 颜色(十六进制) | 车长（即侧线轨道长度，单位：方块） | 唯一标识符 |
| --- | --- | --- | --- |
| SP1900 | ![#003399](https://via.placeholder.com/16/003399/000000?text=+) #003399 | 24<br>20 (小型)<br>12 (迷你) | `sp1900`<br>`sp1900_small`<br>`sp1900_mini` |
| C1141A | ![#B42249](https://via.placeholder.com/16/B42249/000000?text=+) #B42249 | 24<br>20 (小型)<br>12 (迷你) | `c1141a`<br>`c1141a_small`<br>`c1141a_mini` |
| M-Train | ![#999999](https://via.placeholder.com/16/999999/000000?text=+) #999999 | 24<br>19 (小型)<br>9 (迷你) | `m_train`<br>`m_train_small`<br>`m_train_mini` |
| Metro-Cammell Train (Unrefurbished M-Train) | ![#999999](https://via.placeholder.com/16/999999/000000?text=+) #999999 | 24<br>19 (小型)<br>9 (迷你) | `cm_stock`<br>`cm_stock_small`<br>`cm_stock_mini` |
| MLR | ![#6CB5E2](https://via.placeholder.com/16/6CB5E2/000000?text=+) #6CB5E2 | 24<br>20 (小型)<br>12 (迷你) | `mlr`<br>`mlr_small`<br>`mlr_mini` |
| E44 黄头 | ![#E7AF25](https://via.placeholder.com/16/E7AF25/000000?text=+) #E7AF25 | 24<br>20 (小型)<br>12 (迷你) | `e44`<br>`e44_small`<br>`e44_mini` |
| 迪士尼线列车 | ![#F287B7](https://via.placeholder.com/16/F287B7/000000?text=+) #F287B7 | 24 | `drl` |
| K-Train | ![#0EAB52](https://via.placeholder.com/16/0EAB52/000000?text=+) #0EAB52 | 24<br>19 (小型)<br>9 (迷你) | `k_train`<br>`k_train_small`<br>`k_train_mini` |
| K-Train（东涌线） | ![#0EAB52](https://via.placeholder.com/16/0EAB52/000000?text=+) #0EAB52 | 24<br>19 (小型)<br>9 (迷你) | `k_train_tcl`<br>`k_train_tcl_small`<br>`k_train_tcl_mini` |
| K-Train （机场快线） | ![#0EAB52](https://via.placeholder.com/16/0EAB52/000000?text=+) #0EAB52 | 24<br>19 (小型)<br>9 (迷你) | `k_train_ael`<br>`k_train_ael_small`<br>`k_train_ael_mini` |
| C-Train | ![#FDD900](https://via.placeholder.com/16/FDD900/000000?text=+) #FDD900 | 24<br>19 (小型)<br>9 (迷你) | `c_train`<br>`c_train_small`<br>`c_train_mini` |
| S-Train | ![#C1CD23](https://via.placeholder.com/16/C1CD23/000000?text=+) #C1CD23 | 24<br>19 (小型)<br>9 (迷你) | `s_train`<br>`s_train_small`<br>`s_train_mini` |
| CAF （东涌线） | ![#F69447](https://via.placeholder.com/16/F69447/000000?text=+) #F69447| 24<br>19 (小型)<br>9 (迷你) | `a_train_tcl`<br>`a_train_tcl_small`<br>`a_train_tcl_mini` |
| CAF 机场快线 | ![#008D8D](https://via.placeholder.com/16/008D8D/000000?text=+) #008D8D | 24<br>14 (迷你) | `a_train_ael`<br>`a_train_ael_mini` |
| Light Rail (Phase 1) | ![#D2A825](https://via.placeholder.com/16/D2A825/000000?text=+) #D2A825| 22 | `light_rail_1` |
| Light Rail (Phase 1 Refurbished) | ![#D2A825](https://via.placeholder.com/16/D2A825/000000?text=+) #D2A825| 22 | `light_rail_1r` |
| Light Rail (Phase 2) | ![#D2A825](https://via.placeholder.com/16/D2A825/000000?text=+) #D2A825| 22 | `light_rail_2` |
| Light Rail (Phase 3) | ![#D2A825](https://via.placeholder.com/16/D2A825/000000?text=+) #D2A825| 22 | `light_rail_3` |
| Light Rail (Phase 4) | ![#D2A825](https://via.placeholder.com/16/D2A825/000000?text=+) #D2A825| 22 | `light_rail_4` |
| Light Rail (Phase 5) | ![#D2A825](https://via.placeholder.com/16/D2A825/000000?text=+) #D2A825| 22 | `light_rail_5` |
| London Underground D78 Stock | ![#007229](https://via.placeholder.com/16/007229/000000?text=+) #007229 | 18<br>10 (迷你) | `london_underground_d78`<br>`london_underground_d78_mini` |
| London Underground 1995 Stock | ![#333333](https://via.placeholder.com/16/333333/000000?text=+) #333333 | 19 | `london_underground_1995` |
| London Underground 1996 Stock | ![#A1A5A7](https://via.placeholder.com/16/A1A5A7/000000?text=+) #A1A5A7 | 19 | `london_underground_1996` |
| R179 | ![#D5D5D5](https://via.placeholder.com/16/D5D5D5/000000?text=+) #D5D5D5 | 19<br>9 (迷你) | `r179`<br>`r179_mini` |
| R211 | ![#D5D5D5](https://via.placeholder.com/16/D5D5D5/000000?text=+) #D5D5D5 | 19<br>9 (迷你) | `r211`<br>`r211_mini` |
| R211T | ![#D5D5D5](https://via.placeholder.com/16/D5D5D5/000000?text=+) #D5D5D5 | 19<br>9 (迷你) | `r211t`<br>`r211t_mini` |
| Class 802 (GWR) | ![#021E15](https://via.placeholder.com/16/021E15/000000?text=+) #021E15 | 24<br>18 (迷你) | `class_802_gwr`<br>`class_802_gwr_mini` |
| Class 802 (TPE) | ![#00A6E6](https://via.placeholder.com/16/00A6E6/000000?text=+) #00A6E6 | 24<br>18 (迷你) | `class_802_tpe`<br>`class_802_tpe_mini` |
| Minecart | ![#666666](https://via.placeholder.com/16/666666/000000?text=+) #666666 | 1 | `minecart` |

# 行为

如果站台两旁有 [站台方块](https://github.com/jonafanho/Minecraft-Transit-Railway/wiki/Platform-Block) ，列车车门将会打开。所有类型的列车都必须通过步行登上列车。列车必须停在站台上才能让乘客上车。玩家可以在上车后在列车车厢内四处走动。

下车时，只需在列车车门打开时走下列车即可。在~~~紧急情况~~~某些应急情况下，玩家可以按下Shift键（默认情况下为LShift），就像在Minecraft中下矿车一样。
