---
layout: default
title: Phylogeny subsets
weight: 4
---



Phylogeny subsets
=================


<div class="alert alert-warning">
  <p><b>02 Nov 2017:</b> Phylogeny subsets are currently offline as we transition servers.</p>
</div>


This tool provides a simple way to produce distributions of trees with subsets
of taxa. The upper limit for the tool is 2,500 species. If larger subsets ar
required you can [download full trees](https://data.vertlife.org/sharktree/).

The tool first trims to a subset, and then samples trees from a chosen
pseudo-posterior distribution. *Note that any further analyses should only
be conducted with a large sample of trees.*

**Instructions**

1. Select species from the list. Then copy and paste or drag and drop
them into the box to the right. Alternatively, download the [taxonomy file](https://data.vertlife.org/sharktree/taxonomy.csv)
and paste species names from the "Scientific" column.  
2. Choose a tree distribution (see paper for details).  
3. Select the number of trees to download (defaults to minimum of 100)  
4. Click "Get Trees" to download a zipped set of randomly selected
trees with metadata including accession numbers and citations to original  
sources.  

<div class="container">
<div class="row">
<div class="speciesContainer col-md-3">
  {% include species.html %}
</div>

<textarea  class="selectedContainer col-md-3" id="selected" placeholder="Paste species names here (one binomial per line)."></textarea></div>
</div>



Please provide your email address: <input type="text" name="email" id="email" size="25">

Source of trees: <select name="treeset" id="treeset">
   <option selected="selected" value="all-sharks">All sharks</option>
</select>

Select number of trees to create (minimum 100, maximum 10,000): <input id="treenum" type="text" size="2" value="100">
<button class="btn" id="gettrees">Get Trees</button> <span><img id="loading" src="/images/loading.gif" onload="$(this).toggle(false)" style="display: none;"><span><span id="status"></span>
