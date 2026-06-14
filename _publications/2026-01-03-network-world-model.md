---
title: "Network-State World Model"
title_zh: "&#32593;&#32476;&#29366;&#24577;&#19990;&#30028;&#27169;&#22411;"
collection: publications
category: manuscripts
permalink: /publication/network-world-model/
excerpt: "Research internship work at Peking University PCNI Group on action-conditioned prediction and world-model signals for network-state dynamics."
excerpt_zh: "&#21271;&#20140;&#22823;&#23398;&#30005;&#23376;&#23398;&#38498; PCNI &#35838;&#39064;&#32452;&#31185;&#30740;&#23454;&#20064;&#39033;&#30446;&#65292;&#30740;&#31350;&#32593;&#32476;&#29366;&#24577;&#21160;&#21147;&#23398;&#20013;&#30340;&#21160;&#20316;&#26465;&#20214;&#39044;&#27979;&#19982;&#19990;&#30028;&#27169;&#22411;&#35757;&#32451;&#20449;&#21495;&#12290;"
date: 2026-01-03
order: 3
venue: "Research internship, PCNI Group, School of Electronics, Peking University"
venue_zh: "&#21271;&#20140;&#22823;&#23398;&#30005;&#23376;&#23398;&#38498; PCNI &#35838;&#39064;&#32452;&#31185;&#30740;&#23454;&#20064;&#39033;&#30446;"
research_tags:
  - "Research Internship"
  - "World Models"
  - "Action-conditioned Prediction"
  - "Code Available"
research_tags_zh:
  - "&#31185;&#30740;&#23454;&#20064;"
  - "&#19990;&#30028;&#27169;&#22411;"
  - "&#21160;&#20316;&#26465;&#20214;&#39044;&#27979;"
  - "&#20195;&#30721;&#21487;&#29992;"
---

<div class="lang-en" markdown="1">

<div class="detail-brief" markdown="1">
Research internship work at the [PCNI Group](http://pcni.pku.edu.cn/homepage.html), School of Electronics, Peking University, under the supervision of [Prof. Jianan Zhang](https://ele.pku.edu.cn/info/1023/2493.htm) ([personal homepage](https://jianan-z.github.io/)).
</div>

<div class="detail-grid" markdown="1">
<section markdown="1">

## Problem

<ul>
<li>Network-state dynamics are affected by edge actions, task states, and link conditions that evolve jointly over time.</li>
<li>A useful world model must predict state transitions under explicit actions and remain aligned with simulator behavior.</li>
</ul>

</section>
<section markdown="1">

## Method

<ul>
<li>Built action-conditioned prediction pipelines using AirFogSim-style network trajectories.</li>
<li>Compared baseline predictors, structured dual-branch models, and graph-rollout variants.</li>
<li>Evaluated prediction accuracy, seed stability, robustness, and runtime cost.</li>
</ul>

</section>
<section markdown="1">

## My Role

<ul>
<li>Research intern; responsible for model implementation, experiment orchestration, metric analysis, and result visualization.</li>
<li>Maintained a code repository that separates simulator data handling, training, and evaluation.</li>
</ul>

</section>
<section markdown="1">

## Artifacts

<ul>
<li>Code repository for network-state world-model experiments.</li>
<li>Representative prediction traces and metric comparisons are included below.</li>
</ul>

</section>
</div>

<figure class="research-figure">
  <img src="/images/research/network-world-model-prediction.png" alt="Action-conditioned link prediction traces for network-state world model">
  <figcaption>Action-conditioned link-rate prediction traces, comparing model rollouts with simulated network-state trajectories under strict action inputs.</figcaption>
</figure>

<figure class="research-figure">
  <img src="/images/research/network-world-model-metrics.png" alt="Dual-graph rollout metric comparison for network-state world model">
  <figcaption>Dual-graph rollout metric comparison across link-activity, link-rate, and task-state prediction objectives.</figcaption>
</figure>

<p class="project-actions"><a class="btn btn--primary" href="https://github.com/yys806/network-state-world-model">Code Repository</a></p>

</div>


<div class="lang-zh" markdown="1">

<div class="detail-brief" markdown="1">
&#21271;&#20140;&#22823;&#23398;&#30005;&#23376;&#23398;&#38498; [PCNI &#35838;&#39064;&#32452;](http://pcni.pku.edu.cn/homepage.html)&#31185;&#30740;&#23454;&#20064;&#24037;&#20316;&#65292;&#30001;[&#24352;&#22025;&#26976;&#32769;&#24072;](https://ele.pku.edu.cn/info/1023/2493.htm)&#65288;[&#20010;&#20154;&#20027;&#39029;](https://jianan-z.github.io/)&#65289;&#25351;&#23548;&#12290;
</div>

<div class="detail-grid" markdown="1">
<section markdown="1">

## &#38382;&#39064;&#32972;&#26223;

<ul>
<li>&#32593;&#32476;&#29366;&#24577;&#21160;&#21147;&#23398;&#21463;&#21040;&#36793;&#32536;&#21160;&#20316;&#12289;&#20219;&#21153;&#29366;&#24577;&#21644;&#38142;&#36335;&#26465;&#20214;&#20849;&#21516;&#28436;&#21270;&#30340;&#24433;&#21709;&#12290;</li>
<li>&#26377;&#25928;&#30340;&#19990;&#30028;&#27169;&#22411;&#38656;&#35201;&#22312;&#26174;&#24335;&#21160;&#20316;&#26465;&#20214;&#19979;&#39044;&#27979;&#29366;&#24577;&#36716;&#31227;&#65292;&#24182;&#19982;&#20223;&#30495;&#22120;&#34892;&#20026;&#20445;&#25345;&#19968;&#33268;&#12290;</li>
</ul>

</section>
<section markdown="1">

## &#26041;&#27861;

<ul>
<li>&#22522;&#20110; AirFogSim &#39118;&#26684;&#30340;&#32593;&#32476;&#36712;&#36857;&#26500;&#24314;&#21160;&#20316;&#26465;&#20214;&#39044;&#27979;&#27969;&#31243;&#12290;</li>
<li>&#27604;&#36739;&#22522;&#32447;&#39044;&#27979;&#22120;&#12289;&#32467;&#26500;&#21270;&#21452;&#20998;&#25903;&#27169;&#22411;&#19982;&#22270; rollout &#21464;&#20307;&#12290;</li>
<li>&#20351;&#29992;&#39044;&#27979;&#31934;&#24230;&#12289;&#36328;&#38543;&#26426;&#31181;&#23376;&#31283;&#23450;&#24615;&#12289;&#40065;&#26834;&#24615;&#21644;&#36816;&#34892;&#24320;&#38144;&#36827;&#34892;&#35780;&#20272;&#12290;</li>
</ul>

</section>
<section markdown="1">

## &#25105;&#30340;&#24037;&#20316;

<ul>
<li>&#31185;&#30740;&#23454;&#20064;&#29983;&#65307;&#36127;&#36131;&#27169;&#22411;&#23454;&#29616;&#12289;&#23454;&#39564;&#32452;&#32455;&#12289;&#25351;&#26631;&#20998;&#26512;&#19982;&#32467;&#26524;&#21487;&#35270;&#21270;&#12290;</li>
<li>&#32500;&#25252;&#20195;&#30721;&#20179;&#24211;&#65292;&#23558;&#20223;&#30495;&#25968;&#25454;&#22788;&#29702;&#12289;&#35757;&#32451;&#19982;&#35780;&#27979;&#27969;&#31243;&#20998;&#31163;&#12290;</li>
</ul>

</section>
<section markdown="1">

## &#20135;&#20986;

<ul>
<li>&#32593;&#32476;&#29366;&#24577;&#19990;&#30028;&#27169;&#22411;&#23454;&#39564;&#20195;&#30721;&#20179;&#24211;&#12290;</li>
<li>&#19979;&#26041;&#23637;&#31034;&#20195;&#34920;&#24615;&#39044;&#27979;&#26354;&#32447;&#19982;&#25351;&#26631;&#23545;&#27604;&#22270;&#12290;</li>
</ul>

</section>
</div>

<figure class="research-figure">
  <img src="/images/research/network-world-model-prediction.png" alt="&#32593;&#32476;&#29366;&#24577;&#19990;&#30028;&#27169;&#22411;&#30340;&#21160;&#20316;&#26465;&#20214;&#38142;&#36335;&#39044;&#27979;&#26354;&#32447;">
  <figcaption>&#21160;&#20316;&#26465;&#20214;&#38142;&#36335;&#36895;&#29575;&#39044;&#27979;&#26354;&#32447;&#65292;&#23545;&#27604;&#20005;&#26684;&#21160;&#20316;&#36755;&#20837;&#19979;&#27169;&#22411; rollout &#19982;&#20223;&#30495;&#32593;&#32476;&#29366;&#24577;&#36712;&#36857;&#30340;&#24046;&#24322;&#12290;</figcaption>
</figure>

<figure class="research-figure">
  <img src="/images/research/network-world-model-metrics.png" alt="&#32593;&#32476;&#29366;&#24577;&#19990;&#30028;&#27169;&#22411;&#21452;&#22270; rollout &#25351;&#26631;&#23545;&#27604;">
  <figcaption>&#21452;&#22270; rollout &#25351;&#26631;&#23545;&#27604;&#65292;&#35206;&#30422;&#38142;&#36335;&#27963;&#36291;&#24230;&#12289;&#38142;&#36335;&#36895;&#29575;&#19982;&#20219;&#21153;&#29366;&#24577;&#39044;&#27979;&#30446;&#26631;&#12290;</figcaption>
</figure>

<p class="project-actions"><a class="btn btn--primary" href="https://github.com/yys806/network-state-world-model">&#20195;&#30721;&#20179;&#24211;</a></p>

</div>
