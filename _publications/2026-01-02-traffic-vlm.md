---
title: "Traffic VLM Evaluation & Bias Analysis"
title_zh: "&#20132;&#36890;&#22330;&#26223; VLM &#35780;&#27979;&#19982;&#20559;&#24046;&#20998;&#26512;"
collection: publications
category: manuscripts
permalink: /publication/traffic-vlm/
excerpt: "Research internship work at Tsinghua SIGS on traffic-scene VQA construction, VLM evaluation, visual grounding, and bias diagnostics. Paper: Spatial Bias in Vision Language Models (OpenReview)."
excerpt_zh: "&#28165;&#21326;&#22823;&#23398;&#28145;&#22323;&#22269;&#38469;&#30740;&#31350;&#29983;&#38498;&#31185;&#30740;&#23454;&#20064;&#39033;&#30446;&#65292;&#30740;&#31350;&#20132;&#36890;&#22330;&#26223; VQA &#26500;&#24314;&#12289;VLM &#35780;&#27979;&#12289;&#35270;&#35273;&#23450;&#20301;&#19982;&#20559;&#24046;&#35786;&#26029;&#12290;&#35770;&#25991;&#12298;Spatial Bias in Vision Language Models&#12299;&#35265; OpenReview&#12290;"
date: 2026-01-02
order: 2
venue: "Research internship, Tsinghua Shenzhen International Graduate School &#183; Paper: Spatial Bias in Vision Language Models (OpenReview)"
venue_zh: "&#28165;&#21326;&#22823;&#23398;&#28145;&#22323;&#22269;&#38469;&#30740;&#31350;&#29983;&#38498;&#31185;&#30740;&#23454;&#20064;&#39033;&#30446; &#183; &#35770;&#25991; Spatial Bias in Vision Language Models&#65288;OpenReview&#65289;"
research_tags:
  - "Research Internship"
  - "VLM Evaluation"
  - "Bias Diagnostics"
  - "Paper on OpenReview"
  - "Code Available"
research_tags_zh:
  - "&#31185;&#30740;&#23454;&#20064;"
  - "VLM &#35780;&#27979;"
  - "&#20559;&#24046;&#35786;&#26029;"
  - "OpenReview &#35770;&#25991;"
  - "&#20195;&#30721;&#21487;&#29992;"
---

<div class="lang-en" markdown="1">

This project is part of my research internship with [Prof. Xinlei Chen's Group](https://www.sigs.tsinghua.edu.cn/cxl/main.psp) at Tsinghua Shenzhen International Graduate School. The work studies how vision-language models understand traffic scenes, with emphasis on evaluation data construction, visual grounding, counterfactual perturbations, and bias-source diagnostics.

The project builds traffic-scene VQA cases from driving and aerial-view datasets, evaluates VLM responses under controlled visual changes, and compares attribution or saliency signals before and after counterfactual editing. The goal is to identify when model answers are supported by target objects and when they are driven by background, context shortcuts, or spurious visual evidence. The resulting paper is **Spatial Bias in Vision Language Models**, available on [OpenReview](https://openreview.net/forum?id=dQF4SKZs0i).

<figure class="research-figure">
  <img src="/images/research/traffic-vlm-attention.png" alt="Traffic VLM saliency comparison before and after counterfactual editing">
  <figcaption>Gradient-based saliency comparison for an intersection case, showing how model evidence shifts between the original image and counterfactual variants.</figcaption>
</figure>

<figure class="research-figure">
  <img src="/images/research/traffic-vlm-bias-case.png" alt="Traffic VLM target-constrained occlusion bias diagnostic case">
  <figcaption>Target-constrained occlusion analysis for diagnosing whether a VLM answer relies on the queried vehicle or on surrounding contextual cues.</figcaption>
</figure>

<p class="project-actions"><a class="btn" href="https://openreview.net/forum?id=dQF4SKZs0i">Paper (OpenReview)</a><a class="btn" href="https://github.com/yys806/traffic-vlm-eval-bias-analysis">Code Repository</a></p>

</div>

<div class="lang-zh" markdown="1">

&#35813;&#39033;&#30446;&#26159;&#25105;&#22312;&#28165;&#21326;&#22823;&#23398;&#28145;&#22323;&#22269;&#38469;&#30740;&#31350;&#29983;&#38498;[&#38472;&#37995;&#30922;&#32769;&#24072;&#35838;&#39064;&#32452;](https://www.sigs.tsinghua.edu.cn/cxl/main.psp)&#30340;&#31185;&#30740;&#23454;&#20064;&#24037;&#20316;&#12290;&#30740;&#31350;&#20869;&#23481;&#22260;&#32469;&#20132;&#36890;&#22330;&#26223;&#35270;&#35273;&#35821;&#35328;&#27169;&#22411;&#23637;&#24320;&#65292;&#37325;&#28857;&#20851;&#27880;&#35780;&#27979;&#25968;&#25454;&#26500;&#24314;&#12289;&#35270;&#35273;&#23450;&#20301;&#12289;&#21453;&#20107;&#23454;&#25200;&#21160;&#19982;&#20559;&#24046;&#26469;&#28304;&#35786;&#26029;&#12290;

&#39033;&#30446;&#20174;&#39550;&#39542;&#19982;&#31354;&#20013;&#35270;&#35282;&#20132;&#36890;&#25968;&#25454;&#20013;&#26500;&#24314; VQA &#35780;&#27979;&#26679;&#20363;&#65292;&#22312;&#21463;&#25511;&#35270;&#35273;&#21464;&#21270;&#19979;&#35780;&#20272; VLM &#22238;&#31572;&#65292;&#24182;&#23545;&#27604;&#21453;&#20107;&#23454;&#32534;&#36753;&#21069;&#21518;&#30340;&#24402;&#22240;&#19982;&#26174;&#33879;&#24615;&#20449;&#21495;&#12290;&#26680;&#24515;&#30446;&#26631;&#26159;&#21028;&#26029;&#27169;&#22411;&#22238;&#31572;&#26159;&#21542;&#30495;&#27491;&#30001;&#30446;&#26631;&#36710;&#36742;&#25903;&#25745;&#65292;&#36824;&#26159;&#21463;&#21040;&#32972;&#26223;&#12289;&#19978;&#19979;&#25991;&#25463;&#24452;&#25110;&#20854;&#20182;&#20266;&#30456;&#20851;&#35270;&#35273;&#35777;&#25454;&#24433;&#21709;&#12290;&#30740;&#31350;&#25104;&#26524;&#25972;&#29702;&#20026;&#35770;&#25991;&#12298;Spatial Bias in Vision Language Models&#12299;&#65292;&#35265; [OpenReview](https://openreview.net/forum?id=dQF4SKZs0i)&#12290;

<figure class="research-figure">
  <img src="/images/research/traffic-vlm-attention.png" alt="&#20132;&#36890; VLM &#21453;&#20107;&#23454;&#32534;&#36753;&#21069;&#21518;&#30340;&#26174;&#33879;&#24615;&#23545;&#27604;">
  <figcaption>&#20132;&#21449;&#21475;&#26679;&#20363;&#20013;&#30340;&#26799;&#24230;&#26174;&#33879;&#24615;&#23545;&#27604;&#65292;&#29992;&#20110;&#35266;&#23519;&#21407;&#22270;&#19982;&#21453;&#20107;&#23454;&#21464;&#20307;&#20043;&#38388;&#27169;&#22411;&#35270;&#35273;&#35777;&#25454;&#30340;&#21464;&#21270;&#12290;</figcaption>
</figure>

<figure class="research-figure">
  <img src="/images/research/traffic-vlm-bias-case.png" alt="&#20132;&#36890; VLM &#30446;&#26631;&#32422;&#26463;&#36974;&#25377;&#20559;&#24046;&#35786;&#26029;&#26679;&#20363;">
  <figcaption>&#30446;&#26631;&#32422;&#26463;&#36974;&#25377;&#20998;&#26512;&#65292;&#29992;&#20110;&#35786;&#26029; VLM &#30340;&#22238;&#31572;&#26159;&#21542;&#20381;&#36182;&#34987;&#35810;&#38382;&#36710;&#36742;&#26412;&#36523;&#65292;&#36824;&#26159;&#20381;&#36182;&#21608;&#22260;&#19978;&#19979;&#25991;&#32447;&#32034;&#12290;</figcaption>
</figure>

<p class="project-actions"><a class="btn" href="https://openreview.net/forum?id=dQF4SKZs0i">&#35770;&#25991;&#65288;OpenReview&#65289;</a><a class="btn" href="https://github.com/yys806/traffic-vlm-eval-bias-analysis">&#20195;&#30721;&#20179;&#24211;</a></p>

</div>
