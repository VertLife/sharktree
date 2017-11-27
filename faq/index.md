---
layout: default
title: FAQ
weight: 6
---

FAQ
===

1. __Have you got/should I use a consensus tree?__:

> Consensus trees may be useful representations for the sequenced species tree distributions.  Consensus topologies can be created from downloaded samples using scripts supplied with the R-packages 'ape' or 'RPhylip,' though these do not supply edge lengths. For that, one could use MrBayes.  For "All species" bird trees, consensus representations can be misleading (for both edge lengths and topologies), and we advise that analyses using full trees are done across a reasonable number (>>100)  of draws from the distributions we supply. 

2. __Chains not mixing when using distributions of the bird tree in BayesTraits__:

> We have received reports, courtesy of Chris Venditti and Andrew Meade, that some BayesTraits users cannot get chains to mix properly when using samples of the bird tree. This happens when there is a lack of resolution in the tree because the likelihood latches on to a particular relationship (or resolution) where there is a good fit to the comparative data.  
> This is not a bug with BayesTraits. It is a general problem that can arise if some resolutions of a tree fit the comparative data better than others. It can occur with any tree distribution but is likely to be particularly problematic when using samples from the “All species” bird trees. This is because of the inherently greater topological uncertainty associated with the placement of “missing” species such that there is likely to be unusually high variation in the fit to the comparative data among trees. We suggest if this problem occurs and problematic trees cannot be readily identified, that users consider using samples from the sequenced species tree distributions.

3. _Can I use my own subtrees_?:

> Our distributions are stored as newick trees, but these do not have named nodes. There is no trivial way to find the relevant nodes to cut out and substitute in your own subtrees.  However, if the trees are not too large or too many, one can find ingroup nodes, cut tips and add in your own subclades using 'getMRCA(),' 'drop.tip()' and 'bind.tree()' in ape.



