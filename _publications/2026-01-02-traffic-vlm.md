---
title: "Traffic VLM Evaluation & Bias Analysis"
title_zh: "&#20132;&#36890;&#22330;&#26223; VLM &#35780;&#27979;&#19982;&#20559;&#24046;&#20998;&#26512;"
collection: publications
category: manuscripts
permalink: /publication/traffic-vlm/
excerpt: "Research internship work at Tsinghua SIGS on traffic-scene VQA construction, VLM evaluation, visual grounding, and bias diagnostics."
excerpt_zh: "&#28165;&#21326;&#22823;&#23398;&#28145;&#22323;&#22269;&#38469;&#30740;&#31350;&#29983;&#38498;&#31185;&#30740;&#23454;&#20064;&#39033;&#30446;&#65292;&#30740;&#31350;&#20132;&#36890;&#22330;&#26223; VQA &#26500;&#24314;&#12289;VLM &#35780;&#27979;&#12289;&#35270;&#35273;&#23450;&#20301;&#19982;&#20559;&#24046;&#35786;&#26029;&#12290;"
date: 2026-01-02
order: 2
venue: "Research internship, Tsinghua Shenzhen International Graduate School"
venue_zh: "&#28165;&#21326;&#22823;&#23398;&#28145;&#22323;&#22269;&#38469;&#30740;&#31350;&#29983;&#38498;&#31185;&#30740;&#23454;&#20064;&#39033;&#30446;"
research_tags:
  - "Research Internship"
  - "VLM Evaluation"
  - "Bias Diagnostics"
  - "Code Available"
research_tags_zh:
  - "&#31185;&#30740;&#23454;&#20064;"
  - "VLM &#35780;&#27979;"
  - "&#20559;&#24046;&#35786;&#26029;"
  - "&#20195;&#30721;&#21487;&#29992;"
---

<div class="lang-en" markdown="1">

<div class="detail-brief" markdown="1">
Research internship work with [Prof. Xinlei Chen's Group](https://www.sigs.tsinghua.edu.cn/cxl/main.psp) at Tsinghua Shenzhen International Graduate School.
</div>

<div class="detail-grid" markdown="1">
<section markdown="1">

## Problem

<ul>
<li>Traffic-scene VLM answers can be driven by shortcuts in background context rather than the queried vehicle or road element.</li>
<li>Reliable evaluation requires controlled visual perturbations and evidence diagnostics, not only answer accuracy.</li>
</ul>

</section>
<section markdown="1">

## Method

<ul>
<li>Constructed traffic-scene VQA cases from driving and aerial-view datasets.</li>
<li>Evaluated VLM responses under counterfactual visual edits and target-constrained occlusion.</li>
<li>Compared saliency and attribution signals before and after controlled perturbations.</li>
</ul>

</section>
<section markdown="1">

## My Role

<ul>
<li>Research intern; responsible for data construction, evaluation scripts, perturbation experiments, and diagnostic analysis.</li>
<li>Organized code and analysis outputs for reproducible experiment review.</li>
</ul>

</section>
<section markdown="1">

## Artifacts

<ul>
<li>Code repository for traffic VLM evaluation and bias analysis.</li>
<li>Saliency and occlusion examples included below as representative diagnostic figures.</li>
</ul>

</section>
</div>

<figure class="research-figure">
  <img src="/images/research/traffic-vlm-attention.png" alt="Traffic VLM saliency comparison before and after counterfactual editing">
  <figcaption>Gradient-based saliency comparison for an intersection case, showing how model evidence shifts between the original image and counterfactual variants.</figcaption>
</figure>

<figure class="research-figure">
  <img src="/images/research/traffic-vlm-bias-case.png" alt="Traffic VLM target-constrained occlusion bias diagnostic case">
  <figcaption>Target-constrained occlusion analysis for diagnosing whether a VLM answer relies on the queried vehicle or surrounding contextual cues.</figcaption>
</figure>

<p class="project-actions"><a class="btn btn--primary" href="https://github.com/yys806/traffic-vlm-eval-bias-analysis">Code Repository</a></p>

</div>


<div class="lang-zh" markdown="1">

<div class="detail-brief" markdown="1">
&#28165;&#21326;&#22823;&#23398;&#28145;&#22323;&#22269;&#38469;&#30740;&#31350;&#29983;&#38498;[&#38472;&#37995;&#30922;&#32769;&#24072;&#35838;&#39064;&#32452;](https://www.sigs.tsinghua.edu.cn/cxl/main.psp)&#31185;&#30740;&#23454;&#20064;&#24037;&#20316;&#12290;
</div>

<div class="detail-grid" markdown="1">
<section markdown="1">

## &#38382;&#39064;&#32972;&#26223;

<ul>
<li>&#20132;&#36890;&#22330;&#26223; VLM &#30340;&#22238;&#31572;&#21487;&#33021;&#21463;&#32972;&#26223;&#19978;&#19979;&#25991;&#25463;&#24452;&#24433;&#21709;&#65292;&#32780;&#19981;&#26159;&#30495;&#27491;&#20381;&#36182;&#34987;&#35810;&#38382;&#30340;&#36710;&#36742;&#25110;&#36947;&#36335;&#20803;&#32032;&#12290;</li>
<li>&#21487;&#38752;&#35780;&#27979;&#19981;&#33021;&#21482;&#30475;&#31572;&#26696;&#23545;&#38169;&#65292;&#36824;&#38656;&#35201;&#21487;&#25511;&#35270;&#35273;&#25200;&#21160;&#21644;&#35777;&#25454;&#26469;&#28304;&#35786;&#26029;&#12290;</li>
</ul>

</section>
<section markdown="1">

## &#26041;&#27861;

<ul>
<li>&#20174;&#39550;&#39542;&#35270;&#35282;&#19982;&#31354;&#20013;&#35270;&#35282;&#20132;&#36890;&#25968;&#25454;&#20013;&#26500;&#24314; VQA &#35780;&#27979;&#26679;&#20363;&#12290;</li>
<li>&#22312;&#21453;&#20107;&#23454;&#35270;&#35273;&#32534;&#36753;&#21644;&#30446;&#26631;&#32422;&#26463;&#36974;&#25377;&#19979;&#35780;&#20272; VLM &#22238;&#31572;&#12290;</li>
<li>&#23545;&#27604;&#21487;&#25511;&#25200;&#21160;&#21069;&#21518;&#30340;&#26174;&#33879;&#24615;&#19982;&#24402;&#22240;&#20449;&#21495;&#12290;</li>
</ul>

</section>
<section markdown="1">

## &#25105;&#30340;&#24037;&#20316;

<ul>
<li>&#31185;&#30740;&#23454;&#20064;&#29983;&#65307;&#36127;&#36131;&#25968;&#25454;&#26500;&#24314;&#12289;&#35780;&#27979;&#33050;&#26412;&#12289;&#25200;&#21160;&#23454;&#39564;&#19982;&#35786;&#26029;&#20998;&#26512;&#12290;</li>
<li>&#25972;&#29702;&#20195;&#30721;&#19982;&#20998;&#26512;&#36755;&#20986;&#65292;&#20415;&#20110;&#22797;&#29616;&#23454;&#39564;&#26816;&#26597;&#12290;</li>
</ul>

</section>
<section markdown="1">

## &#20135;&#20986;

<ul>
<li>&#20132;&#36890; VLM &#35780;&#27979;&#19982;&#20559;&#24046;&#20998;&#26512;&#20195;&#30721;&#20179;&#24211;&#12290;</li>
<li>&#19979;&#26041;&#23637;&#31034;&#26174;&#33879;&#24615;&#19982;&#36974;&#25377;&#35786;&#26029;&#30340;&#20195;&#34920;&#24615;&#22270;&#20363;&#12290;</li>
</ul>

</section>
</div>

<figure class="research-figure">
  <img src="/images/research/traffic-vlm-attention.png" alt="&#20132;&#36890; VLM &#21453;&#20107;&#23454;&#32534;&#36753;&#21069;&#21518;&#30340;&#26174;&#33879;&#24615;&#23545;&#27604;">
  <figcaption>&#20132;&#21449;&#21475;&#26679;&#20363;&#20013;&#30340;&#26799;&#24230;&#26174;&#33879;&#24615;&#23545;&#27604;&#65292;&#29992;&#20110;&#35266;&#23519;&#21407;&#22270;&#19982;&#21453;&#20107;&#23454;&#21464;&#20307;&#20043;&#38388;&#27169;&#22411;&#35270;&#35273;&#35777;&#25454;&#30340;&#21464;&#21270;&#12290;</figcaption>
</figure>

<figure class="research-figure">
  <img src="/images/research/traffic-vlm-bias-case.png" alt="&#20132;&#36890; VLM &#30446;&#26631;&#32422;&#26463;&#36974;&#25377;&#20559;&#24046;&#35786;&#26029;&#26679;&#20363;">
  <figcaption>&#30446;&#26631;&#32422;&#26463;&#36974;&#25377;&#20998;&#26512;&#65292;&#29992;&#20110;&#35786;&#26029; VLM &#30340;&#22238;&#31572;&#26159;&#21542;&#20381;&#36182;&#34987;&#35810;&#38382;&#36710;&#36742;&#26412;&#36523;&#65292;&#36824;&#26159;&#20381;&#36182;&#21608;&#22260;&#19978;&#19979;&#25991;&#32447;&#32034;&#12290;</figcaption>
</figure>

<p class="project-actions"><a class="btn btn--primary" href="https://github.com/yys806/traffic-vlm-eval-bias-analysis">&#20195;&#30721;&#20179;&#24211;</a></p>

</div>
