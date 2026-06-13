---
title: "Traffic VLM Evaluation & Bias Analysis"
title_zh: "交通场景 VLM 评测与偏差分析"
collection: publications
category: manuscripts
permalink: /publication/traffic-vlm/
excerpt: "Research internship work at Tsinghua SIGS on traffic-scene VQA construction, VLM evaluation, visual grounding, and bias diagnostics."
excerpt_zh: "清华大学深圳国际研究生院科研实习项目，研究交通场景 VQA 构建、VLM 评测、视觉定位与偏差诊断。"
date: 2026-01-02
order: 2
venue: "Research internship, Tsinghua Shenzhen International Graduate School"
venue_zh: "清华大学深圳国际研究生院科研实习项目"
---

<div class="lang-en" markdown="1">

This project is part of my research internship with [Prof. Xinlei Chen's Group](https://www.sigs.tsinghua.edu.cn/cxl/main.psp) at Tsinghua Shenzhen International Graduate School. The work studies how vision-language models understand traffic scenes, with emphasis on evaluation data construction, visual grounding, counterfactual perturbations, and bias-source diagnostics.

The project builds traffic-scene VQA cases from driving and aerial-view datasets, evaluates VLM responses under controlled visual changes, and compares attribution or saliency signals before and after counterfactual editing. The goal is to identify when model answers are supported by target objects and when they are driven by background, context shortcuts, or spurious visual evidence.

<figure class="research-figure">
  <img src="/images/research/traffic-vlm-attention.png" alt="Traffic VLM saliency comparison before and after counterfactual editing">
  <figcaption>Gradient-based saliency comparison for an intersection case, showing how model evidence shifts between the original image and counterfactual variants.</figcaption>
</figure>

<figure class="research-figure">
  <img src="/images/research/traffic-vlm-bias-case.png" alt="Traffic VLM target-constrained occlusion bias diagnostic case">
  <figcaption>Target-constrained occlusion analysis for diagnosing whether a VLM answer relies on the queried vehicle or on surrounding contextual cues.</figcaption>
</figure>

<p class="project-actions"><a class="btn" href="https://github.com/yys806/traffic-vlm-eval-bias-analysis">Code Repository</a></p>

</div>

<div class="lang-zh" markdown="1">

该项目是我在清华大学深圳国际研究生院[陈鑫磊老师课题组](https://www.sigs.tsinghua.edu.cn/cxl/main.psp)的科研实习工作。研究内容围绕交通场景视觉语言模型展开，重点关注评测数据构建、视觉定位、反事实扰动与偏差来源诊断。

项目从驾驶与空中视角交通数据中构建 VQA 评测样例，在受控视觉变化下评估 VLM 回答，并对比反事实编辑前后的归因与显著性信号。核心目标是判断模型回答是否真正由目标车辆支撑，还是受到背景、上下文捷径或其他伪相关视觉证据影响。

<figure class="research-figure">
  <img src="/images/research/traffic-vlm-attention.png" alt="交通 VLM 反事实编辑前后的显著性对比">
  <figcaption>交叉口样例中的梯度显著性对比，用于观察原图与反事实变体之间模型视觉证据的变化。</figcaption>
</figure>

<figure class="research-figure">
  <img src="/images/research/traffic-vlm-bias-case.png" alt="交通 VLM 目标约束遮挡偏差诊断样例">
  <figcaption>目标约束遮挡分析，用于诊断 VLM 的回答是否依赖被询问车辆本身，还是依赖周围上下文线索。</figcaption>
</figure>

<p class="project-actions"><a class="btn" href="https://github.com/yys806/traffic-vlm-eval-bias-analysis">代码仓库</a></p>

</div>
