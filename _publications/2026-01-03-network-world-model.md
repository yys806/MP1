---
title: "Network-State World Model"
title_zh: "网络状态世界模型"
collection: publications
category: manuscripts
permalink: /publication/network-world-model/
excerpt: "Research internship work at Peking University PCNI Group on action-conditioned prediction and world-model signals for network-state dynamics."
excerpt_zh: "北京大学电子学院 PCNI 课题组科研实习项目，研究网络状态动力学中的动作条件预测与世界模型训练信号。"
date: 2026-01-03
order: 3
venue: "Research internship, PCNI Group, School of Electronics, Peking University"
venue_zh: "北京大学电子学院 PCNI 课题组科研实习项目"
---

<div class="lang-en" markdown="1">

This project is part of my research internship at the [PCNI Group](http://pcni.pku.edu.cn/homepage.html), School of Electronics, Peking University, under the supervision of [Prof. Jianan Zhang](https://ele.pku.edu.cn/info/1023/2493.htm) ([personal homepage](https://jianan-z.github.io/)). The work studies world-model learning for network-state dynamics, with a focus on action-conditioned prediction and simulator-aligned evaluation.

The project uses AirFogSim-style network trajectories to model how edge actions, task states, and link conditions evolve over time. The implementation compares baseline predictors, structured dual-branch models, and graph-rollout variants, using prediction accuracy, seed stability, robustness, and runtime as evaluation signals.

<figure class="research-figure">
  <img src="/images/research/network-world-model-prediction.png" alt="Action-conditioned link prediction traces for network-state world model">
  <figcaption>Action-conditioned link-rate prediction traces, comparing model rollouts with simulated network-state trajectories under strict action inputs.</figcaption>
</figure>

<figure class="research-figure">
  <img src="/images/research/network-world-model-metrics.png" alt="Dual-graph rollout metric comparison for network-state world model">
  <figcaption>Dual-graph rollout metric comparison across link-activity, link-rate, and task-state prediction objectives.</figcaption>
</figure>

<p class="project-actions"><a class="btn" href="https://github.com/yys806/network-state-world-model">Code Repository</a></p>

</div>

<div class="lang-zh" markdown="1">

该项目是我在北京大学电子学院 [PCNI 课题组](http://pcni.pku.edu.cn/homepage.html)的科研实习工作，由[张嘉楠老师](https://ele.pku.edu.cn/info/1023/2493.htm)（[个人主页](https://jianan-z.github.io/)）指导。研究内容围绕网络状态动力学的世界模型学习，重点关注动作条件预测与仿真器对齐评估。

项目基于 AirFogSim 风格的网络轨迹，建模边缘动作、任务状态与链路状态随时间演化的过程。实现中比较了基线预测器、结构化双分支模型与图 rollout 变体，并用预测精度、跨随机种子稳定性、鲁棒性和运行时开销作为评估信号。

<figure class="research-figure">
  <img src="/images/research/network-world-model-prediction.png" alt="网络状态世界模型的动作条件链路预测曲线">
  <figcaption>动作条件链路速率预测曲线，对比严格动作输入下模型 rollout 与仿真网络状态轨迹的差异。</figcaption>
</figure>

<figure class="research-figure">
  <img src="/images/research/network-world-model-metrics.png" alt="网络状态世界模型双图 rollout 指标对比">
  <figcaption>双图 rollout 指标对比，覆盖链路活跃度、链路速率与任务状态预测目标。</figcaption>
</figure>

<p class="project-actions"><a class="btn" href="https://github.com/yys806/network-state-world-model">代码仓库</a></p>

</div>
