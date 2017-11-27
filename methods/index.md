---
layout: default
title: Methods
weight: 2
---


Methods
=======

*General approach*


Our tree construction approach combines relaxed clock molecular trees of well-supported avian clades with a fossil calibrated backbone with representatives from each clade. It is neither a typical supertree (i.e. a combination of existing trees) nor a supermatrix approach (a single analysis applied to the entire genetic data matrix). We follow four steps:

1. Each species is assigned to one of 158 clades;
2. Relaxed-clock trees are generated for each clade;
3. Species without genetic information are partially constrained within their clade based on a combination of consensus trees from step 2 and taxonomic information. Placement of these species is then consistent with the partial constraints and a pure birth model of diversification;
4. Steps 2 and 3 generate trees for each clade that are based either on only species with genetic data (step 2) or on all species including those with and without genetic data (step 3). Construction of final trees is achieved by combining trees from either step 2 or step 3 with time-calibrated relaxed molecular clock backbone trees.

Expanded methods: [Jetz et al. 2012, Supplementary Methods section 1.1.1](http://www.nature.com/nature/journal/v491/n7424/extref/nature11631-s1.pdf)

*Backbone trees*

We constructed and dated distributions of "backbone" trees each containing 158 tips. Each tip represents a crown clade in the complete avian tree. A portion of the topology of these backbone trees is highly constrained on the basis of strong support (posterior probabilities => 0.95) from studies by either Hackett et al. (2008) or Ericson et al. (2006). The remaining nodes with posterior probabilities &lt;0.95 were not constrained (41 nodes based on Hackett et al. 2008 and 37 based on Ericson et al. 2006). The backbone contains 129 avian crown clades with more than four species and 29 smaller clades with four or fewer species.

Expanded methods: [Jetz et al. 2012, Supplementary Methods section 1.1.2](http://www.nature.com/nature/journal/v491/n7424/extref/nature11631-s1.pdf)

*Tree versions: Overview:*

| **Version** | **Paper**        | **Summary of changes**                                                                                                                | **Change type**      |
|:------------|:----------------:|:--------------------------------------------------------------------------------------------------------------------------------------|:--------------------:|
| _V1_        | Jetz et al. 2012 | -                                                                                                                                     | -                    |
| _V2.i_      | Jetz et al. 2014 | Crown psittaciform (_Mopsitta tanta_) calibration replaced with the younger stem psittaciform _Avolatavis tenens_                     | Backbone calibration |
| _V2.ii_     | Jetz et al. 2014 | Psittaciform _Mopsitta tanta_ and debated charadriiform _Morsoravis sedilis_ removed                                                  | Backbone calibration |
| _V2.iii_    | Jetz et al. 2014 | As in (ii), but with additional removal of the calibration for Anseriformes and altering the soft maximum age on the root of the tree | Backbone calibration |

  
*Tree versions: detailed:*

**V1** : Trees are taken from Jetz et al. 2012 and follow all methods described therein (see summary and links above).

**V2** : Following **Global Distribution and Conservation of Evolutionary Distinctness in Birds** (Current Biology 2014; doi: [http://dx.doi.org/10.1016/j.cub.2014.03.011](http://dx.doi.org/10.1016/j.cub.2014.03.011)). The trees developed for this study follow the same structure and taxonomy as Jetz et al (2012), but have different fossil calibrations. Revisions were made to the fossil calibration in the light of criticism from Mayr (2013). Mayrs suggested that four of the calibrations used in Jetz et al (2012) were problematic: the minimum ages of stem Cacatuidae + Psittacidae (or crown Psittaciformes), crown Charadriiformes, crown Anseriformes, and the soft maximum age for Neornithes.

**V2.i** Crown psittaciform (_Mopsitta tanta_) calibration replaced with the younger stem psittaciform _Avolatavis tenens_ \[Parrot\_decisive\]

For this version we removed the psittaciform _Mopsitta tanta_ (Waterhouse et al. 2008) because it is represented by fragmentary remains and its affinities are uncertain with recent analyses suggesting that it may belong to the Threskiorinithae (Mayr and Bertelli 2011). We replaced the crown psittaciform calibration with the younger stem psittaciform, _Avolatavis tenens, _from the Fossil Butte member of the Green River Formation (Ksepka and Clarke 2012). Revising the psittaciform calibration allows (but does not enforce) a potentially younger (more recent) age for the Psittaciformes. Since it is also the closest calibration to the Passeriformes, it also allows a more recent origin for this major radiation.

**V2.ii** Psittaciform _Mopsitta tanta_ and debated charadriiform _Morsoravis sedilis_ removed \[MayrParSho\_decisive\]

In addition to the removal (here without replacement) of _Mopsitta _we also removed the putative charadriiform _Morsoravis sedilis. _The affinities of this exceptionally well-preserved fossilhave been questioned, suggesting that it may not be a charadriiform (Mayr 2011, 2013). Indeed, phylogenetic evidence appears uncertain and challenges the perspective of Dyke and van Tuinen (Dyke and Van Tuinen 2004) and Bertelli et al. (Bertelli et al. 2010). Exclusion of _Morsoravis _allows a more recent origin for crown Charadriiformes.

**V2.iii** As in (ii), but with additional removal of the calibration for Anseriformes and altering the soft maximum age on the root of the tree \[MayrAll\_decisive\]

This final calibration approach extended the changes detailed in (ii) by additionally removing the calibration for Anseriformes and altering the soft maximum age on the root of the tree. Mayr (2013) suggested that the placement of the putative Anseriform _Vegavis iaai_ is "not unambiguous" and questioned specific anatomical features but did not provide explicit phylogenetic evidence to refute the conclusions of (Clarke et al. 2005). The apparently robust phylogenetic evidence in support of an Anseriform affiliation for _Vegavis_ (Clarke et al. 2005) has led to its acceptance as a robust fossil calibration (e.g.Slack et al. 2006, Brown et al. 2007).However, Mayr's concerns have since been corroborated by analyses suggesting that while _Vegavis_ belongs to the crown Neornithes its position within the clade, and specifically as an Anseriform are not well supported (Lee et al. 2014). We originally (Jetz et al. 2012) used the Ornithurae fossil _Gansus yumensis _(You et al. 2006)to provide a soft maximum age on the root of the tree. The justification was based on an extension of the logic of Benton and Donoghue (Benton and Donoghue 2007) who propose using the abundant Ornithurae taxa _Hesperornis, Baptornis _and _Ichthyornis_ from the Niobrara Chalk Formation of Kansus as a soft maximum age constraint. _Ganus yumensis _falls within the Ornithurae grade (You et al. 2006)but heralds from much older deposits thus extending the maximum age constraint into the Early Cretaceous. The calibration density apportions only a 5% probability that the root age of the tree would be older than _Ganus yumensis_. Mayr (2013) suggests that the choice of _Ganus yumensis _is arbitrary so here we revert to the original recommendation of Benton and Donoghue.

*References*

Baker, A. J., S. L. Pereira, and T. A. Paton. 2007. Phylogenetic relationships and divergence times of Charadriiformes genera: multigene evidence for the Cretaceous origin of at least 14 clades of shorebirds. Biology Letters **3** :205-210.

Benton, M. J., and P. C. J. Donoghue. 2007. Paleontological Evidence to Date the Tree of Life. Mol Biol Evol **24** :26-53.

Bertelli, S., B. Lindow, G. J. Dyke, and G. Mayr. 2013. Another charadriiform-like bird from the Lower Eocene of Denmark. . Paleontological Journal **in press**.

Bertelli, S., B. E. Lindow, G. J. Dyke, and L. M. Chiappe. 2010. A well‐preserved 'charadriiform‐like'fossil bird from the Early Eocene Fur Formation of Denmark. Palaeontology **53** :507-531.

Boles, W. 1999. Early Eocene shorebirds (Aves: Charadriiformes) from the Tingamarra Local Fauna, Murgon, Queensland, Australia. Records of the Western Australian Museum Supplement **57** :229-238.

Brown, J., R. Payn, and D. Mindell. 2007. Comment. Nuclear DNA does not reconcile 'rocks' and 'clocks' in Neoaves: a comment on Ericson et al. BIology Letters:FirstCite-FirstCite.

Clarke, J. A., C. P. Tambussi, J. I. Noriega, G. M. Erickson, and R. A. Ketcham. 2005. Definitive fossil evidence for the extant avian radiation in the Cretaceous. Nature **433** :305-308.

Drummond, A., and A. Rambaut. 2007. BEAST: Bayesian evolutionary analysis by sampling trees. BMC Evolutionary Biology **7** :214.

Dyke, G. J., and M. Van Tuinen. 2004. The evolutionary radiation of modern birds (Neornithes): reconciling molecules, morphology and the fossil record. Zoological Journal of the Linnean Society **141** :153-177.

Ericson, P. G. P., D. Zuccon, J. I. Ohlson, U. S. Johansson, H. Alvarenga, and R. O. Prum. 2006. Higher-level phylogeny and morphological evolution of tyrant flycatchers, cotingas, manakins, and their allies (Aves: Tyrannida). Molecular Phylogenetics and Evolution **40** :471-483.

Hackett, S. J., R. T. Kimball, S. Reddy, R. C. K. Bowie, E. L. Braun, M. J. Braun, J. L. Chojnowski, W. A. Cox, K.-L. Han, J. Harshman, C. J. Huddleston, B. D. Marks, K. J. Miglia, W. S. Moore, F. H. Sheldon, D. W. Steadman, C. C. Witt, and T. Yuri. 2008. A Phylogenomic Study of Birds Reveals Their Evolutionary History. Science **320** :1763-1768.

Hou, L., and P. G. Ericson. 2002. A middle Eocene shorebird from China. The Condor **104** :896-899.

Jetz, W., G. H. Thomas, J. B. Joy, K. Hartmann, and A. O. Mooers. 2012. The global diversity of birds in space and time. Nature **491** :444-448.

Jetz, W., G. H. Thomas, J. B. Joy, K. Hartmann, D. Redding, and A. O. Mooers. 2014. Distribution and conservation of global evolutionary distinctness in birds. Current Biology **24** :919-930.

Ksepka, D. T., and J. A. Clarke. 2012. A New Stem Parrot from the Green River Formation and the Complex Evolution of the Grasping Foot in Pan-Psittaciformes. Journal of Vertebrate Paleontology **32** :395-406.

Lee, M. S. Y., A. Cau, D. Naish, and G. J. Dyke. 2014. Morphological clocks in palaeontology, and a mid-Cretaceous origin of crown Aves. Systematic Biology.

Mayr, G. 2011. On the osteology and phylogenetic affinities of Morsoravis sedilis (Aves) from the Early Eocene Fur Formation of Denmark. Bulletin of the Geological Society of Denmark **59** :23-35.

Mayr, G. 2013. The age of the crown group of passerine birds and its evolutionary significance – molecular calibrations versus the fossil record. Systematics and Biodiversity **11** :7-13.

Mayr, G., and S. Bertelli. 2011. A record of Rhynchaeites (Aves, Threskiornithidae) from the early Eocene Fur Formation of Denmark, and the affinities of the alleged parrot Mopsitta. Palaeobiodiversity and Palaeoenvironments **91** :229-236.

Slack, K. E., C. M. Jones, T. Ando, G. A. Harrison, R. E. Fordyce, U. Arnason, and D. Penny. 2006. Early penguin fossils, plus mitochondrial genomes, calibrate avian evolution. Molecular Biology and Evolution **23** :1144-1155.

Waterhouse, D. M., B. E. Lindow, N. V. Zelenkov, and G. J. Dyke. 2008. Two new parrots (Psittaciformes) from the lower Eocene fur formation of Denmark. Palaeontology **51** :575-582.

You, H.-l., M. C. Lamanna, J. D. Harris, L. M. Chiappe, J. O'Connor, S.-a. Ji, J.-c. Lu, C.-x. Yuan, D.-q. Li, X. Zhang, K. J. Lacovara, P. Dodson, and Q. Ji. 2006. A Nearly Modern Amphibious Bird from the Early Cretaceous of Northwestern China. Science **312** :1640-1643.
