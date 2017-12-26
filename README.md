<h1 align="center">Awesome Shiny Apps for Statistics</h1>

<div style="text-align: right;"> <a href = "https://www.rstudio.com"><img src="https://www.rstudio.com/wp-content/uploads/2014/04/shiny.png" align="right" width="100"></a></div>


<p id="intro">A curated list of awesome Shiny Apps for statistics (ASAS) can </p>

* help teachers teach basic statistics to their students.
* help self-learners to visualize statistics concepts.

<div align="center" style="padding-bottom:10px"> <a href="https://travis-ci.org/huyingjie/Awesome-shiny-apps-for-basic-statistics"><img src="https://travis-ci.org/huyingjie/Awesome-shiny-apps-for-basic-statistics.svg?branch=master"></a> </div>

<div align="center">
	<a href="http://asas.yingjiehu.com/">Website</a>&nbsp;&nbsp;&nbsp;
	<a href="#Help-Wanted">Help Wanted</a>&nbsp;&nbsp;&nbsp;
	<a href="https://github.com/huyingjie/Awesome-shiny-apps-for-basic-statistics/graphs/contributors">Contributors</a>&nbsp;&nbsp;&nbsp;
	<a href="https://www.patreon.com/yingjiehu" target="_blank">Donation</a>
</div>


<div align="center" style="padding-top:20px">
	<sub>Created and Maintained By <a href="http:yingjiehu.com" target="_blank">Yingjie Hu</a> with ❤️ &nbsp;Follow me on <a href="https://twitter.com/yingjieYJH" target="_blank">Twitter</a>.</sub>
</div>


<a id="table-of-contents"></a>

## Contents
* [Resources](#Resources)
* [Common Plots](#Common-plots)
* [Common Statistic](#Common-Statistic)
* [Common Distribution](#Common-Distribution)
* [Random Samples](#Random-Samples)
* [Two groups or multiple groups comparison](#Two-groups-or-multiple-groups-comparison)
* [Hypothesis Testing](#Hypothesis-Testing)
* [Linear Regression](#Linear-Regression)
* [Nonlinear models for continous variables](#Nonlinear-models-for-continous-variables)
* [Categorical Models](#Categorical-Models)
* [Survival Model](#Survival-Model)
* [Bayesian Analysis](#Bayesian-Analysis)
* [Longitudinal Analysis](#Longitudinal Analysis)
* [Test Analysis](#Test-Analysis)
* [Complete Data Analysis](#Complete-Data-Analysis)
* [Help Wanted](#Help-Wanted)

<a id="Resources"></a>
## Resources
 * [Awesome R Shiny](https://github.com/grabear/awesome-rshiny) - A curated list of resources for R Shiny.

<a id="Common-plots"></a>
## Common Plots 
* [Boxplots & Histograms](https://gallery.shinyapps.io/boxplot/)
* [List of R graphs](http://shinyapps.stat.ubc.ca/r-graph-catalog/)

<a id="Common-Statistic"></a>
## Common Statistic
* continuous variables
	* [Stability of Mean & Median](http://shinyapps.org/showapp.php?app=http://lmpp10e-mucesm.srv.mwn.de:3838/felix/TK/1&by=Tobias%20K%C3%A4chele&title=Robustness%20of%20Mean%20and%20Median&shorttitle=Robustness%20of%20Mean%20and%20Median)
	* [Correlation](https://gallery.shinyapps.io/correlation_game/)
* p-value
	* [When does a significant p-value indicate a true effect?](http://shinyapps.org/showapp.php?app=http://lmpp10e-mucesm.srv.mwn.de:3838/felix/PPV&by=Michael%20Zehetleitner%20and%20Felix%20Sch%C3%B6nbrodt&title=When%20does%20a%20significant%20p-value%20indicate%20a%20true%20effect?&shorttitle=When%20does%20a%20significant%20p-value%20indicate%20a%20true%20effect?)
	* [Hack p-value](http://shinyapps.org/apps/p-hacker/)
	* [the Vovk-Sellke maximum p-ratio](http://www.shinyapps.org/apps/vs-mpr/) -  the maximum diagnosticity of a two-sided p-value.

<a id="Common-Distribution"></a>
## Common Distribution
* Common distributions
	* uniform
	* nomal
	* binomial
	* Student's T
	* F
	* Chi-square
* Shiny
	
	* [Nomral, Binomial, Student's T, F, Chi-square](https://gallery.shinyapps.io/dist_calc/)
	* [Uniform](https://shiny.rstudio.com/gallery/single-file-shiny-app.html)
	* [Student's T](https://gallery.shinyapps.io/tdist/)

<a id="Random-Samples"></a>
## Random Samples
* [Sampling and standard error](https://gallery.shinyapps.io/sampling_and_stderr/)
* Central Limit Theorem
	* [Means](https://gallery.shinyapps.io/CLT_mean/)
	* [Proportions](https://gallery.shinyapps.io/CLT_prop/)

<a id="Two-groups-or-multiple-groups-comparison"></a>
## Two groups or multiple groups comparison
* [Cohen's d](http://shinyapps.org/showapp.php?app=http://lmpp10e-mucesm.srv.mwn.de:3838/felix/lakens_pcurve/&by=Daniel%20Lakens&title=P-value%20distribution%20and%20power%20curves%20for%20an%20independent%20two-tailed%20t-test&shorttitle=P-value%20distribution%20and%20power%20curves) 
* ANOVA
	* [Sums of squares in ANOVA](https://gallery.shinyapps.io/anova_shiny_rstudio/)
	* [BIC approximation for ANOVA designs](http://shinyapps.org/showapp.php?app=https://chsquare.shinyapps.io/BICapproxApp/&by=Christoph%20Huber-Huber&title=BIC%20approximation%20for%20ANOVA%20designs&shorttitle=BIC%20approximation%20for%20ANOVA%20designs)

<a id="Hypothesis-Testing"></a>
## Hypothesis Testing
* [Bootstrap resampling](http://rosetta.ahmedmoustafa.io/bootstrap/) - Demonstrate hypothesis testing using bootstrap resampling.
* [Power](https://liberos.shinyapps.io/power/) - Demonstrate the relationship of statistical power, effect size, and false positives
* [Calculate power](http://www.statstudio.net/free-tools/power-analysis/) - Calculat the power of a statistical hypothesis test for a two-sided symmetrical test and show how statistical power is related to the p-value and the significance level.
* [Trade Off](https://casertamarco.shinyapps.io/power/) - Visualize the trade off between type I and type II errors in a Null Hypothesis Significance Test (NHST). 

<a id="Linear-Regression"></a>		
## Linear Regression
* [Simple linear regression](https://gallery.shinyapps.io/simple_regression/)
* [Sum of Square in simple linear regression](https://paternogbc.shinyapps.io/SS_regression/) | [Code](https://github.com/paternogbc/SSregression) - Explore how sums of squares are calculated in simple linear regressions.
* [Fit a simple linear regression model](http://shinyapps.org/showapp.php?app=http://lmpp10e-mucesm.srv.mwn.de:3838/felix/lmfit&by=Felix%20Sch%C3%B6nbrodt&title=Find-a-fit!&shorttitle=Find-a-fit!)
* [Diagnostics for simple linear regression](https://gallery.shinyapps.io/slr_diag/)
* [Uncertainty](https://gallery.shinyapps.io/regression_bootstrap/)
* [Influence analysis](https://omaymas.shinyapps.io/Influence_Analysis/) - Demonstrates the leverage and influence of an adjustable point/outliers
* [Graphs for linear regression with high orders](http://shinyapps.org/showapp.php?app=http://lmpp10e-mucesm.srv.mwn.de:3838/felix/polySurface&by=Felix%20Sch%C3%B6nbrodt&title=Polynomial%20Surface%20Explorer&shorttitle=Polynomial%20Surface%20Explorer)
* [Multicollinearity](https://gallery.shinyapps.io/collinearity/)
* [Model selection](https://gallery.shinyapps.io/multi_regression/) - Choose models between simple regression, additive regression, and interactive models.
* others
	* [Residual error models](http://model.webpopix.org/model/individual/residualError.html)
	* [Meta analysis](http://kylehamilton.net/shiny/MAVIS/) | [Code](https://github.com/kylehamilton/MAVIS)

<a id="Nonlinear-models-for-continous-variables"></a>
## Nonlinear models for continous variables

### K-means Clustering
* [Estimate K](https://gallery.shinyapps.io/kcompshiny/)
* K-means Clustering
	* [Iris dataset](https://shiny.rstudio.com/gallery/kmeans-example.html)

<a id="Categorical-Models"></a>
## Categorical Models
* [Relationship between test accuracy, precision, sensitivity, and specificity](https://www.showmeshiny.com/predictive-value/)

<a id="Survival-Model"></a>
## Survival Model
* [Hazard model](http://shiny.webpopix.org/survival/hazard1/)

<a id="Bayesian-Analysis"></a>
## Bayesian Analysis
* [Bayes factors](http://lmpp10e-mucesm.srv.mwn.de:3838/felix/feel_BF2/)
* [Robustness analysis for Bayes factors: Two sample t test](http://shinyapps.org/showapp.php?app=http://lmpp10e-mucesm.srv.mwn.de:3838/felix/BF_robustness&by=Felix%20Sch%C3%B6nbrodt&title=Bayes%20factor%20robustness&shorttitle=Bayes%20factor%20robustness)
* [Bayesian Inference](http://lmpp10e-mucesm.srv.mwn.de:3838/felix/BayesLessons/BayesianLesson1.Rmd)
* [Posterior distribution](https://ahalterman.shinyapps.io/BayesCalculator/) | [Documentation](https://andrewhalterman.com/2014/04/02/good-judgement-project-and-bayes/) - Calculate posterior distribution based on different priors

<a id="Longitudinal Analysis"></a>
## Longitudinal Analysis
* [Longitudinal data exploration](http://slider.parisgeo.cnrs.fr/)

<a id="Test-Analysis"></a>
## Test Analysis
* [Text analysis of an uploaded .txt file](https://www.showmeshiny.com/text-analysis/)

<a id="Complete-Data-Analysis"></a>
## Complete Data Analysis
* [Linear regression](http://www.intro-stats.com/)
* [shinyData](https://github.com/yindeng/shinyData) | [Demo](https://roose.shinyapps.io/shinyData/)

**<div align="right"><a href="#table-of-contents">🔝 &nbsp; back to top</a></div>**

<a id="Help-Wanted"></a>
## Help Wanted

Several ways you can help

1. Add latest and greatest shiny apps for statistics
2. Delete broken links to shiny apps
3. Delete links to low-quality shiny apps
4. Design the appearance of [the website](http://asas.yingjiehu.com)

Please adhere to the [contribution guidelines](https://github.com/huyingjie/Awesome-shiny-apps-for-statistics/blob/master/CONTRIBUTING.md).

## License

[![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)

This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

[OSS Icon]: https://cdn.rawgit.com/Awesome-Windows/Awesome/master/media/OSS.svg
[Freeware Icon]: https://cdn.rawgit.com/Awesome-Windows/Awesome/master/media/free.svg