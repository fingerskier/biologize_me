const topics = [
  {
    id: 'molecular-biology',
    title: 'Molecular Biology',
    icon: '🧬',
    color: '#4f46e5',
    description: 'DNA replication, transcription, translation, and gene regulation.',
    sections: [
      {
        title: 'DNA Replication',
        content: `DNA replication is a semiconservative process in which each strand of the original double helix serves as a template for a new complementary strand. The process begins at specific sequences called **origins of replication** (oriC in prokaryotes), where the enzyme **helicase** unwinds the double helix, creating a replication fork.

**Key enzymes and their roles:**
- **Helicase** — unwinds the double helix ahead of the replication fork
- **Single-strand binding proteins (SSBs)** — stabilize separated strands
- **Topoisomerase (gyrase)** — relieves torsional strain ahead of the fork
- **Primase** — synthesizes short RNA primers (~10 nt) to provide a 3′-OH for DNA polymerase
- **DNA Polymerase III** — primary replicative polymerase; synthesizes DNA 5′→3′, has 3′→5′ proofreading exonuclease activity
- **DNA Polymerase I** — removes RNA primers and fills gaps
- **DNA Ligase** — seals nicks between Okazaki fragments on the lagging strand

The **leading strand** is synthesized continuously in the 5′→3′ direction toward the fork. The **lagging strand** is synthesized discontinuously as **Okazaki fragments** (100–200 nt in eukaryotes, 1000–2000 nt in prokaryotes), which are later joined.

In eukaryotes, replication occurs at multiple origins simultaneously, with **Pol ε** on the leading strand and **Pol δ** on the lagging strand. The **sliding clamp (PCNA)** increases processivity, while the **clamp loader (RFC)** loads PCNA onto DNA.`,
      },
      {
        title: 'Transcription',
        content: `Transcription converts genetic information from DNA into RNA, catalyzed by **RNA polymerase**. In prokaryotes, a single RNA polymerase transcribes all RNA types. In eukaryotes, three RNA polymerases divide the labor:
- **RNA Pol I** — rRNA (28S, 18S, 5.8S)
- **RNA Pol II** — mRNA and most snRNAs
- **RNA Pol III** — tRNA, 5S rRNA, and other small RNAs

**Stages of transcription:**

**1. Initiation:** The σ (sigma) factor in prokaryotes recognizes the **-10 (Pribnow box)** and **-35** promoter elements. In eukaryotes, general transcription factors (TFIIA, B, D, E, F, H) assemble at the promoter. **TFIID** contains **TBP (TATA-binding protein)**, which binds the TATA box. **TFIIH** has helicase and kinase activities — it phosphorylates the CTD (C-terminal domain) of Pol II to initiate elongation.

**2. Elongation:** RNA polymerase synthesizes RNA 5′→3′ using the template (antisense) strand. The transcription bubble is ~17 bp.

**3. Termination:** In prokaryotes, termination is **ρ-dependent** (Rho helicase) or **ρ-independent** (intrinsic hairpin followed by poly-U). In eukaryotes, cleavage and polyadenylation signals (AAUAAA) trigger release.

**Post-transcriptional processing (eukaryotes):**
- **5′ cap** — 7-methylguanosine added co-transcriptionally; aids ribosome recognition and protects from exonucleases
- **3′ poly-A tail** — ~200 adenines; enhances stability and export
- **Splicing** — removal of introns by the **spliceosome** (snRNPs U1, U2, U4, U5, U6); involves two transesterification reactions forming a lariat intermediate`,
      },
      {
        title: 'Translation',
        content: `Translation decodes mRNA into a polypeptide at the **ribosome** (70S in prokaryotes: 30S + 50S; 80S in eukaryotes: 40S + 60S).

**The genetic code:**
- 64 codons: 61 sense + 3 stop (UAA, UAG, UGA)
- **AUG** = start codon (methionine; fMet in prokaryotes)
- The code is degenerate (redundant) but unambiguous
- **Wobble base pairing** at the 3rd codon position allows fewer tRNAs than codons

**Stages of translation:**

**1. Initiation:**
- Prokaryotes: 30S subunit binds the **Shine-Dalgarno sequence** upstream of AUG; IF1, IF2 (GTPase), and IF3 facilitate assembly
- Eukaryotes: 40S subunit, loaded with eIF1, eIF1A, eIF3, and the **ternary complex** (eIF2·GTP·Met-tRNAi), binds the 5′ cap via **eIF4F** and scans to the first AUG (**Kozak sequence** context: ACCAUGG)

**2. Elongation:**
- **Aminoacyl-tRNA** delivered to the A site by **EF-Tu·GTP** (prokaryotes) / **eEF1A** (eukaryotes)
- **Peptidyl transferase** (a ribozyme — the 23S/28S rRNA catalyzes peptide bond formation)
- **Translocation** by **EF-G** / **eEF2** moves the ribosome one codon along the mRNA

**3. Termination:**
- Release factors **RF1** (UAA, UAG) and **RF2** (UAA, UGA) in prokaryotes; **eRF1** in eukaryotes recognizes all three stop codons
- **RF3 / eRF3** (GTPase) stimulates RF dissociation
- Ribosome recycling factor (RRF) and EF-G disassemble the complex`,
      },
      {
        title: 'Gene Regulation',
        content: `Gene expression is regulated at multiple levels to ensure appropriate spatial and temporal protein production.

**Prokaryotic regulation — Operons:**
- **Lac operon** (inducible): In the absence of lactose, the **LacI repressor** binds the operator, blocking transcription. Allolactose (inducer) binds LacI, causing conformational change and derepression. Full activation requires **CAP-cAMP** at the CAP site when glucose is low (catabolite repression).
- **Trp operon** (repressible): When tryptophan is abundant, it acts as a **corepressor**, binding the TrpR repressor to activate operator binding. **Attenuation** provides fine-tuning via ribosome stalling at a leader peptide.

**Eukaryotic regulation:**
- **Chromatin remodeling**: Histone acetylation (HATs → open chromatin), deacetylation (HDACs → condensed), methylation (context-dependent), and ATP-dependent remodeling complexes (SWI/SNF)
- **Transcription factors**: Activators (e.g., enhancer-binding) and repressors (e.g., silencer-binding); the **Mediator complex** bridges TFs and Pol II
- **Epigenetics**: DNA methylation at CpG islands (gene silencing); histone code (H3K4me3 = active, H3K27me3 = repressed)
- **Post-transcriptional**: mRNA stability (AU-rich elements), **miRNA**-mediated silencing (RISC complex, Argonaute), alternative splicing
- **Post-translational**: Phosphorylation, ubiquitination (proteasome degradation), sumoylation`,
      },
    ],
    quiz: [
      {
        question: 'Which enzyme removes RNA primers during DNA replication and fills the resulting gaps with DNA?',
        options: ['DNA Polymerase III', 'DNA Polymerase I', 'Primase', 'DNA Ligase'],
        answer: 1,
        explanation: 'DNA Polymerase I uses its 5′→3′ exonuclease activity to remove RNA primers and its polymerase activity to fill in the resulting gaps with DNA.',
      },
      {
        question: 'What is the function of TFIIH during eukaryotic transcription initiation?',
        options: [
          'Binds the TATA box',
          'Recruits RNA Pol II to the promoter',
          'Unwinds DNA and phosphorylates the CTD of Pol II',
          'Adds the 5′ cap to the nascent mRNA',
        ],
        answer: 2,
        explanation: 'TFIIH has both helicase activity (to unwind DNA at the transcription start site) and kinase activity (to phosphorylate the C-terminal domain of RNA Pol II, enabling the transition from initiation to elongation).',
      },
      {
        question: 'In the lac operon, what must occur for maximal transcription?',
        options: [
          'High glucose, high lactose',
          'Low glucose, high lactose',
          'High glucose, low lactose',
          'Low glucose, low lactose',
        ],
        answer: 1,
        explanation: 'Maximal lac operon transcription requires lactose (to inactivate the LacI repressor via allolactose) AND low glucose (so cAMP levels are high, allowing CAP-cAMP to bind and activate transcription).',
      },
      {
        question: 'Which histone modification is generally associated with transcriptional activation?',
        options: ['H3K27me3', 'H3K9me3', 'H3K4me3', 'DNA methylation at CpG islands'],
        answer: 2,
        explanation: 'Trimethylation of histone H3 at lysine 4 (H3K4me3) is a well-established mark of active promoters. H3K27me3 and H3K9me3 are associated with gene silencing.',
      },
      {
        question: 'The peptidyl transferase activity of the ribosome is catalyzed by:',
        options: ['Ribosomal proteins', 'EF-Tu', 'The large subunit rRNA (ribozyme)', 'Aminoacyl-tRNA synthetase'],
        answer: 2,
        explanation: 'Peptide bond formation is catalyzed by the 23S rRNA (prokaryotes) or 28S rRNA (eukaryotes) of the large ribosomal subunit. This makes the ribosome a ribozyme — an RNA-based enzyme.',
      },
    ],
  },
  {
    id: 'cell-biology',
    title: 'Cell Biology',
    icon: '🔬',
    color: '#059669',
    description: 'Cell signaling, membrane transport, cytoskeleton, and the cell cycle.',
    sections: [
      {
        title: 'Signal Transduction',
        content: `Cells communicate through signaling cascades that convert extracellular signals into intracellular responses.

**Types of signaling:**
- **Endocrine** — hormones travel through the bloodstream (long range)
- **Paracrine** — local mediators diffuse to nearby cells
- **Autocrine** — cell signals itself
- **Juxtacrine** — direct cell-cell contact (e.g., Notch-Delta)

**Receptor types:**

**1. G protein-coupled receptors (GPCRs):** 7-transmembrane domain receptors coupled to heterotrimeric G proteins (Gα, Gβ, Gγ). Ligand binding triggers Gα to exchange GDP→GTP and dissociate.
- **Gαs** → activates **adenylyl cyclase** → ↑cAMP → activates **PKA**
- **Gαi** → inhibits adenylyl cyclase → ↓cAMP
- **Gαq** → activates **phospholipase C (PLC)** → cleaves PIP₂ into **IP₃** (releases Ca²⁺ from ER) and **DAG** (activates **PKC**)

**2. Receptor tyrosine kinases (RTKs):** Ligand binding causes dimerization and autophosphorylation of tyrosine residues. Phosphotyrosines recruit adaptor proteins (e.g., Grb2 → SOS → Ras → Raf → MEK → ERK/**MAPK cascade**). Critical for growth, differentiation, and survival.

**3. Ligand-gated ion channels:** Direct, rapid signaling (e.g., nicotinic acetylcholine receptor → Na⁺ influx → depolarization).

**4. Nuclear receptors:** Intracellular receptors for lipophilic ligands (steroids, thyroid hormones, retinoids). Act as transcription factors when ligand-bound.

**Second messengers:** cAMP, cGMP, IP₃, DAG, Ca²⁺, and phosphoinositides amplify signals.`,
      },
      {
        title: 'Membrane Transport',
        content: `The plasma membrane is a selectively permeable barrier composed of a phospholipid bilayer with embedded proteins.

**Passive transport (no energy required):**
- **Simple diffusion** — small, nonpolar molecules (O₂, CO₂, N₂) cross directly
- **Facilitated diffusion** — channel proteins (aquaporins, ion channels) or carrier proteins (GLUT transporters) mediate transport down the concentration gradient
- **Osmosis** — water movement through aquaporins or the lipid bilayer from low to high solute concentration

**Active transport (energy required):**
- **Primary active transport** — directly uses ATP hydrolysis
  - **Na⁺/K⁺-ATPase**: Pumps 3 Na⁺ out, 2 K⁺ in per ATP; maintains resting membrane potential (~-70 mV) and cell volume
  - **Ca²⁺-ATPase (SERCA)**: Pumps Ca²⁺ into the ER/SR
  - **H⁺/K⁺-ATPase**: Acidifies the stomach lumen
- **Secondary active transport** — uses electrochemical gradients established by primary active transport
  - **Symport** (cotransport): Na⁺-glucose symporter (SGLT1) in intestinal epithelium
  - **Antiport** (exchange): Na⁺/Ca²⁺ exchanger in cardiac myocytes

**Vesicular transport:**
- **Endocytosis**: Receptor-mediated (clathrin-coated pits), phagocytosis, pinocytosis
- **Exocytosis**: Constitutive (continuous secretion) and regulated (stimulus-dependent, e.g., neurotransmitter release via SNARE proteins)`,
      },
      {
        title: 'The Cell Cycle',
        content: `The eukaryotic cell cycle is divided into **interphase** (G₁, S, G₂) and **M phase** (mitosis + cytokinesis).

**Interphase:**
- **G₁ (Gap 1):** Cell growth, organelle duplication, preparation for DNA synthesis. Cells may enter **G₀** (quiescence) if they stop dividing.
- **S (Synthesis):** DNA replication; each chromosome is duplicated into two sister chromatids joined at the centromere. Centrosome duplication also occurs.
- **G₂ (Gap 2):** Further growth; synthesis of proteins needed for mitosis (e.g., tubulin). Error-checking before M phase entry.

**Mitosis (PMAT):**
- **Prophase:** Chromatin condenses into visible chromosomes; mitotic spindle begins forming; nucleolus disappears
- **Prometaphase:** Nuclear envelope breaks down; kinetochores attach to spindle microtubules
- **Metaphase:** Chromosomes align at the metaphase plate; all kinetochores attached (spindle assembly checkpoint)
- **Anaphase:** Cohesin cleavage by **separase** (activated when APC/C-Cdc20 degrades securin); sister chromatids separate; anaphase A (kinetochore MT shortening) and B (spindle elongation)
- **Telophase:** Nuclear envelope reforms; chromosomes decondense; cytokinesis begins

**Cell cycle regulation — Cyclin-CDK complexes:**
- **G₁/S:** Cyclin D-CDK4/6 → phosphorylates Rb → releases E2F → transcribes S-phase genes
- **S phase:** Cyclin E-CDK2 → fires replication origins; Cyclin A-CDK2 → prevents re-replication
- **G₂/M:** Cyclin B-CDK1 (MPF) → triggers mitotic entry

**Checkpoints:**
- **G₁ checkpoint (Restriction Point):** Checks for DNA damage (p53 → p21 → inhibits CDK); growth factor dependence
- **Intra-S checkpoint:** Stalls replication forks upon damage (ATR → Chk1)
- **G₂/M checkpoint:** Verifies complete replication and repairs (ATM → Chk2 → inhibits Cdc25 → keeps CDK1 inactive)
- **Spindle Assembly Checkpoint (SAC):** Mad2/BubR1 inhibit APC/C until all kinetochores are properly attached`,
      },
    ],
    quiz: [
      {
        question: 'A Gαq-coupled receptor activates phospholipase C. What are the two second messengers produced?',
        options: [
          'cAMP and Ca²⁺',
          'IP₃ and DAG',
          'cGMP and NO',
          'DAG and cAMP',
        ],
        answer: 1,
        explanation: 'PLC cleaves PIP₂ (phosphatidylinositol 4,5-bisphosphate) into IP₃ (inositol 1,4,5-trisphosphate), which releases Ca²⁺ from the ER, and DAG (diacylglycerol), which activates protein kinase C (PKC).',
      },
      {
        question: 'The Na⁺/K⁺-ATPase pumps, per cycle:',
        options: [
          '2 Na⁺ out, 3 K⁺ in',
          '3 Na⁺ out, 2 K⁺ in',
          '3 Na⁺ in, 2 K⁺ out',
          '2 Na⁺ in, 3 K⁺ out',
        ],
        answer: 1,
        explanation: 'The Na⁺/K⁺-ATPase is electrogenic: it pumps 3 Na⁺ out of the cell and 2 K⁺ into the cell per ATP hydrolyzed, contributing to the negative resting membrane potential.',
      },
      {
        question: 'What triggers the metaphase-to-anaphase transition?',
        options: [
          'Cyclin B accumulation',
          'APC/C-Cdc20 activation leading to securin degradation and separase activation',
          'CDK1 phosphorylation of cohesin',
          'Checkpoint kinase Chk2 activation',
        ],
        answer: 1,
        explanation: 'When all kinetochores are properly attached (satisfying the SAC), APC/C-Cdc20 ubiquitinates securin for proteasomal degradation. This releases separase, which cleaves cohesin, allowing sister chromatids to separate.',
      },
      {
        question: 'At the G₁ restriction point, DNA damage activates which pathway?',
        options: [
          'Ras-MAPK cascade',
          'p53 → p21 → CDK inhibition',
          'Wnt/β-catenin signaling',
          'JAK-STAT signaling',
        ],
        answer: 1,
        explanation: 'DNA damage activates ATM/ATR kinases, which stabilize p53. p53 transcriptionally activates p21 (a CDK inhibitor), which blocks Cyclin D-CDK4/6 and Cyclin E-CDK2, arresting the cell in G₁.',
      },
    ],
  },
  {
    id: 'biochemistry',
    title: 'Biochemistry',
    icon: '⚗️',
    color: '#d97706',
    description: 'Enzyme kinetics, metabolic pathways, and bioenergetics.',
    sections: [
      {
        title: 'Enzyme Kinetics',
        content: `Enzymes are biological catalysts that lower activation energy (ΔG‡) without altering the equilibrium of a reaction.

**Michaelis-Menten kinetics:**
The rate equation for a simple enzyme-catalyzed reaction (E + S ⇌ ES → E + P):

**v = Vmax[S] / (Km + [S])**

- **Vmax** = maximum velocity when enzyme is fully saturated
- **Km** = Michaelis constant = [S] at which v = Vmax/2; reflects substrate affinity (low Km = high affinity)
- **kcat** = turnover number = Vmax/[E]total; reactions per enzyme per second
- **Catalytic efficiency** = kcat/Km; approaches the diffusion limit (~10⁸–10⁹ M⁻¹s⁻¹) for "catalytically perfect" enzymes (e.g., carbonic anhydrase, triosephosphate isomerase)

**Lineweaver-Burk (double-reciprocal) plot:** 1/v vs 1/[S] gives a straight line: y-intercept = 1/Vmax, x-intercept = -1/Km

**Inhibition types:**
- **Competitive:** Inhibitor binds active site; ↑Km (apparent), Vmax unchanged. Overcome by increasing [S].
- **Uncompetitive:** Inhibitor binds ES complex only; ↓Km (apparent), ↓Vmax. Lines parallel on Lineweaver-Burk.
- **Noncompetitive (mixed):** Inhibitor binds E or ES at an allosteric site; Km unchanged (pure noncompetitive), ↓Vmax.
- **Irreversible:** Covalent modification (e.g., aspirin acetylates COX; nerve agents phosphorylate acetylcholinesterase)

**Allosteric regulation:** Cooperative binding (sigmoidal kinetics, Hill equation). Allosteric activators shift the curve left (↑ affinity); inhibitors shift right.`,
      },
      {
        title: 'Glycolysis & Gluconeogenesis',
        content: `**Glycolysis** (Embden-Meyerhof pathway) converts one glucose (6C) into two pyruvate (3C) in the cytoplasm. Net yield: **2 ATP** (substrate-level phosphorylation) + **2 NADH**.

**The 10 steps — key regulatory enzymes:**
1. **Hexokinase** (or glucokinase in liver): Glucose → Glucose-6-phosphate (irreversible; inhibited by G6P)
2. Phosphoglucose isomerase: G6P → Fructose-6-phosphate
3. **Phosphofructokinase-1 (PFK-1)**: F6P → Fructose-1,6-bisphosphate (rate-limiting step; activated by AMP, fructose-2,6-bisphosphate; inhibited by ATP, citrate)
4–5. Aldolase and TPI: F1,6BP → 2 × G3P
6–7. G3P dehydrogenase and phosphoglycerate kinase: G3P → 3PG (substrate-level phosphorylation; produces NADH)
8–9. Mutase and enolase: 3PG → PEP
10. **Pyruvate kinase**: PEP → Pyruvate (substrate-level phosphorylation; activated by F1,6BP; inhibited by ATP, alanine)

**Fate of pyruvate:**
- Aerobic: Pyruvate → Acetyl-CoA (via pyruvate dehydrogenase complex) → TCA cycle
- Anaerobic: Pyruvate → Lactate (lactate dehydrogenase, regenerates NAD⁺) or Ethanol (yeast)

**Gluconeogenesis** (primarily liver, kidney cortex) is essentially the reverse of glycolysis but bypasses the three irreversible steps:
1. Pyruvate → OAA (pyruvate carboxylase, mitochondrial) → PEP (PEPCK)
2. F1,6BP → F6P (fructose-1,6-bisphosphatase)
3. G6P → Glucose (glucose-6-phosphatase, ER membrane)

Cost: 4 ATP + 2 GTP per glucose synthesized.`,
      },
      {
        title: 'TCA Cycle & Oxidative Phosphorylation',
        content: `**The TCA (Krebs) cycle** operates in the mitochondrial matrix, oxidizing acetyl-CoA to CO₂ while capturing energy as reduced coenzymes.

**Per acetyl-CoA:** 3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂

**Key regulatory enzymes:**
- **Citrate synthase:** Acetyl-CoA + OAA → Citrate (inhibited by ATP, NADH, citrate)
- **Isocitrate dehydrogenase:** Isocitrate → α-ketoglutarate + CO₂ (activated by ADP; inhibited by ATP, NADH)
- **α-Ketoglutarate dehydrogenase:** α-KG → Succinyl-CoA + CO₂ (inhibited by succinyl-CoA, NADH; activated by Ca²⁺)

**Anaplerotic reactions** replenish TCA intermediates:
- Pyruvate carboxylase: Pyruvate → OAA (biotin-dependent; activated by acetyl-CoA)
- Glutamate → α-ketoglutarate (transamination or glutamate dehydrogenase)

**Oxidative Phosphorylation (inner mitochondrial membrane):**

The **electron transport chain (ETC)** creates a proton gradient (ΔψH⁺) across the inner membrane:
- **Complex I (NADH dehydrogenase):** NADH → ubiquinone; pumps 4 H⁺
- **Complex II (succinate dehydrogenase):** FADH₂ → ubiquinone; no proton pumping (also a TCA enzyme!)
- **Complex III (cytochrome bc₁):** Ubiquinol → cytochrome c; pumps 4 H⁺ (Q cycle)
- **Complex IV (cytochrome c oxidase):** Cytochrome c → O₂ (final electron acceptor → H₂O); pumps 2 H⁺

**ATP synthase (Complex V):** The proton-motive force drives H⁺ through the Fo channel, rotating the c-ring and driving conformational changes in F₁ that synthesize ATP.
- ~10 H⁺ per 3 ATP (varies by organism)
- **P/O ratios:** NADH → ~2.5 ATP; FADH₂ → ~1.5 ATP
- **Total yield per glucose:** ~30–32 ATP (aerobic)

**Uncouplers** (e.g., 2,4-DNP, thermogenin/UCP1 in brown fat) dissipate the gradient as heat without ATP synthesis.`,
      },
    ],
    quiz: [
      {
        question: 'An enzyme has a Km of 2 mM. At what substrate concentration is the reaction rate exactly half of Vmax?',
        options: ['1 mM', '2 mM', '4 mM', '0.5 mM'],
        answer: 1,
        explanation: 'By definition, Km is the substrate concentration at which the reaction rate is half of Vmax. Therefore, at [S] = Km = 2 mM, v = Vmax/2.',
      },
      {
        question: 'Which enzyme catalyzes the rate-limiting step of glycolysis?',
        options: ['Hexokinase', 'Phosphofructokinase-1', 'Pyruvate kinase', 'Aldolase'],
        answer: 1,
        explanation: 'PFK-1 catalyzes the committed, rate-limiting step: F6P → F1,6BP. It is allosterically activated by AMP and fructose-2,6-bisphosphate, and inhibited by ATP and citrate.',
      },
      {
        question: 'Which ETC complex does NOT pump protons across the inner mitochondrial membrane?',
        options: ['Complex I', 'Complex II', 'Complex III', 'Complex IV'],
        answer: 1,
        explanation: 'Complex II (succinate dehydrogenase) transfers electrons from FADH₂ to ubiquinone but does not pump protons. This is why FADH₂ yields fewer ATP (~1.5) than NADH (~2.5).',
      },
      {
        question: 'A competitive inhibitor of an enzyme will:',
        options: [
          'Decrease Vmax without affecting Km',
          'Increase apparent Km without affecting Vmax',
          'Decrease both Km and Vmax',
          'Increase both Km and Vmax',
        ],
        answer: 1,
        explanation: 'A competitive inhibitor competes with the substrate for the active site, effectively increasing the apparent Km (more substrate needed for half-max velocity), but Vmax can still be reached if enough substrate is added to outcompete the inhibitor.',
      },
    ],
  },
  {
    id: 'genetics',
    title: 'Genetics & Genomics',
    icon: '🧪',
    color: '#dc2626',
    description: 'Mendelian genetics, population genetics, and modern genomics techniques.',
    sections: [
      {
        title: 'Mendelian & Complex Inheritance',
        content: `**Mendel's Laws:**
- **Law of Segregation:** Two alleles for each gene separate during gamete formation; each gamete carries one allele.
- **Law of Independent Assortment:** Genes on different chromosomes assort independently during meiosis (does not apply to linked genes).

**Extensions of Mendelian genetics:**
- **Incomplete dominance:** Heterozygote has an intermediate phenotype (e.g., snapdragon flower color: RR = red, Rr = pink, rr = white)
- **Codominance:** Both alleles are fully expressed (e.g., ABO blood type: IAIA and IBIB are codominant; ii is recessive)
- **Multiple alleles:** More than two alleles in the population (e.g., ABO: IA, IB, i)
- **Pleiotropy:** One gene affects multiple phenotypes (e.g., sickle cell allele → anemia, malaria resistance, organ damage)
- **Epistasis:** One gene masks or modifies the expression of another (e.g., Labrador coat color: E gene is epistatic to B gene)
- **Polygenic inheritance:** Multiple genes contribute additively to a continuous trait (e.g., height, skin color)
- **Quantitative trait loci (QTL):** Genomic regions associated with quantitative traits

**Linkage and recombination:**
- Genes on the same chromosome tend to be inherited together (linkage)
- **Recombination frequency** between two loci reflects their physical distance (1 cM ≈ 1% recombination ≈ ~1 Mb in humans)
- **Three-point cross** determines gene order and map distances; double crossovers reveal the middle gene`,
      },
      {
        title: 'Population Genetics',
        content: `**Hardy-Weinberg Equilibrium (HWE):**
For a locus with two alleles (p = freq of A, q = freq of a), genotype frequencies are:
**p² + 2pq + q² = 1** (and p + q = 1)

HWE assumes: large population, random mating, no mutation, no migration, no selection.

**Forces of evolution (deviations from HWE):**

**1. Natural selection:**
- **Directional:** Favors one extreme phenotype (e.g., antibiotic resistance)
- **Stabilizing:** Favors intermediate phenotype (e.g., human birth weight)
- **Disruptive:** Favors both extremes (e.g., beak size in variable environments)
- **Fitness (w)** and **selection coefficient (s = 1 - w)** quantify reproductive success

**2. Genetic drift:**
- Random fluctuations in allele frequency, strongest in small populations
- **Founder effect:** Small group colonizes new area with non-representative allele frequencies
- **Bottleneck:** Drastic population reduction eliminates genetic diversity
- **Effective population size (Ne):** Breeding individuals; often much smaller than census size

**3. Gene flow (migration):** Transfer of alleles between populations; homogenizes allele frequencies

**4. Mutation:** Ultimate source of genetic variation; typically low rate (~10⁻⁸–10⁻⁹ per bp per generation in humans)

**5. Non-random mating:**
- **Assortative mating:** Like phenotypes preferentially mate; increases homozygosity
- **Inbreeding:** Mating between relatives; increases homozygosity genome-wide (inbreeding coefficient F)

**Molecular evolution:**
- **Neutral theory (Kimura):** Most molecular evolution is due to drift of selectively neutral mutations
- **dN/dS ratio (Ka/Ks):** Nonsynonymous/synonymous substitution rate; dN/dS > 1 = positive selection; < 1 = purifying selection; ≈ 1 = neutral`,
      },
      {
        title: 'Genomics Techniques',
        content: `**DNA Sequencing:**
- **Sanger sequencing:** Chain termination with ddNTPs; gel/capillary electrophoresis; reads ~800 bp; gold standard for validation
- **Next-generation sequencing (NGS):**
  - **Illumina:** Sequencing by synthesis; short reads (150–300 bp); massively parallel; dominant platform
  - **PacBio (SMRT):** Single-molecule real-time; long reads (10–25 kb HiFi); resolves repetitive regions and structural variants
  - **Oxford Nanopore:** Direct sequencing through protein nanopores; ultra-long reads (>100 kb possible); portable (MinION)

**Genome editing — CRISPR-Cas9:**
- **Guide RNA (sgRNA)** directs Cas9 to a target sequence adjacent to a **PAM** (5′-NGG for SpCas9)
- Cas9 creates a **double-strand break (DSB)**
- Repair via **NHEJ** (error-prone → knockouts) or **HDR** (template-directed → precise edits)
- Variants: **dCas9** (dead Cas9 for CRISPRi/CRISPRa), **base editors** (C→T or A→G without DSB), **prime editing** (search-and-replace)

**Transcriptomics:**
- **RNA-seq:** Converts mRNA to cDNA library → NGS → quantifies gene expression; replaces microarrays
- **Single-cell RNA-seq (scRNA-seq):** Profiles transcriptomes of individual cells; reveals heterogeneity (e.g., 10x Genomics Chromium)

**Epigenomics:**
- **ChIP-seq:** Chromatin immunoprecipitation + sequencing; maps histone modifications and TF binding
- **ATAC-seq:** Assay for Transposase-Accessible Chromatin; maps open chromatin regions
- **Bisulfite sequencing:** Detects DNA methylation at single-base resolution

**Proteomics / Multi-omics:**
- **Mass spectrometry (LC-MS/MS):** Identifies and quantifies proteins
- **Spatial transcriptomics:** Maps gene expression within tissue context (e.g., MERFISH, Visium)`,
      },
    ],
    quiz: [
      {
        question: 'In a population in Hardy-Weinberg equilibrium, the frequency of the recessive allele (q) is 0.3. What is the frequency of heterozygous carriers?',
        options: ['0.09', '0.42', '0.49', '0.21'],
        answer: 1,
        explanation: 'With q = 0.3, p = 0.7. Heterozygote frequency = 2pq = 2(0.7)(0.3) = 0.42, or 42% of the population.',
      },
      {
        question: 'CRISPR-Cas9 requires which sequence adjacent to the target for cleavage?',
        options: ['Shine-Dalgarno sequence', 'Kozak sequence', 'PAM (protospacer adjacent motif)', 'TATA box'],
        answer: 2,
        explanation: 'Cas9 requires a PAM (protospacer adjacent motif, typically 5′-NGG for SpCas9) immediately downstream of the target sequence. Without a PAM, Cas9 cannot bind and cleave the DNA.',
      },
      {
        question: 'A dN/dS ratio significantly greater than 1 indicates:',
        options: [
          'Purifying (negative) selection',
          'Neutral evolution',
          'Positive (diversifying) selection',
          'Genetic drift',
        ],
        answer: 2,
        explanation: 'dN/dS > 1 means nonsynonymous substitutions (which change amino acids) are accumulating faster than synonymous ones, indicating positive selection is driving protein sequence divergence.',
      },
      {
        question: 'Which technique provides ultra-long sequencing reads (>100 kb) and is portable?',
        options: ['Illumina NovaSeq', 'Sanger sequencing', 'Oxford Nanopore MinION', 'PacBio Sequel'],
        answer: 2,
        explanation: 'Oxford Nanopore sequencing can produce reads exceeding 100 kb (and even megabase-length reads have been achieved). The MinION device is pocket-sized and can be used in field settings.',
      },
    ],
  },
  {
    id: 'evolution',
    title: 'Evolutionary Biology',
    icon: '🌿',
    color: '#7c3aed',
    description: 'Phylogenetics, speciation, macroevolution, and evo-devo.',
    sections: [
      {
        title: 'Phylogenetics',
        content: `Phylogenetics reconstructs the evolutionary relationships among organisms using morphological or molecular data.

**Tree terminology:**
- **Clade (monophyletic group):** An ancestor and ALL of its descendants
- **Paraphyletic group:** An ancestor and SOME descendants (e.g., "reptiles" excluding birds)
- **Polyphyletic group:** Members sharing a trait NOT from a common ancestor (convergence)
- **Sister taxa:** Two clades sharing the most recent common ancestor
- **Outgroup:** A taxon outside the group of interest, used to root the tree

**Tree-building methods:**

**1. Distance-based:**
- **UPGMA:** Assumes molecular clock (equal rates); ultrametric tree
- **Neighbor-Joining:** Does not assume equal rates; better for diverse taxa

**2. Character-based:**
- **Maximum Parsimony:** Prefers the tree requiring the fewest character state changes; can be misled by long-branch attraction
- **Maximum Likelihood:** Evaluates the probability of observed data given a tree and evolutionary model; statistically rigorous but computationally intensive
- **Bayesian Inference:** Uses Markov chain Monte Carlo (MCMC) to estimate posterior probabilities of trees; produces credible intervals

**Molecular clocks:** Calibrate divergence times using fossil evidence or known geological events. Rates vary among lineages (relaxed clock models accommodate this).

**Homology vs. analogy:**
- **Homologous** structures share a common evolutionary origin (e.g., vertebrate forelimbs)
- **Analogous** structures arise independently via convergent evolution (e.g., wings of bats and insects)
- **Orthologous** genes: separated by speciation; **Paralogous** genes: separated by gene duplication`,
      },
      {
        title: 'Speciation',
        content: `**Species concepts:**
- **Biological (Mayr):** Groups of interbreeding natural populations reproductively isolated from other groups
- **Phylogenetic:** Smallest monophyletic group diagnosable by shared derived characters (synapomorphies)
- **Morphological:** Based on distinct physical features
- **Ecological:** Based on niche occupation

**Modes of speciation:**

**1. Allopatric speciation:** Geographic barrier physically separates populations → independent evolution → reproductive isolation. Most common mode. Example: Darwin's finches on different Galápagos islands.

**2. Sympatric speciation:** Speciation without geographic separation. Mechanisms include:
- **Polyploidy** (especially in plants): Autopolyploidy (genome duplication within species) or Allopolyploidy (hybridization + genome duplication). Polyploid offspring are reproductively isolated from diploid parents.
- **Disruptive selection** on resource use (e.g., apple maggot fly host race formation)
- **Assortative mating** within habitat

**3. Parapatric speciation:** Adjacent populations with a contact zone; limited gene flow across an environmental gradient

**4. Peripatric speciation:** Small peripheral population diverges from main population (founder effect + drift)

**Reproductive isolation mechanisms:**
- **Prezygotic:** Temporal, habitat, behavioral (courtship signals), mechanical, gametic isolation
- **Postzygotic:** Hybrid inviability, hybrid sterility (e.g., mule), hybrid breakdown (F2 or later generations unfit)

**Reinforcement:** Natural selection strengthens prezygotic barriers when hybrids are less fit.`,
      },
      {
        title: 'Evo-Devo',
        content: `Evolutionary developmental biology (evo-devo) explores how changes in developmental processes drive morphological evolution.

**Key concepts:**

**1. Hox genes and body plan evolution:**
- **Hox genes** are a conserved family of transcription factors containing the **homeodomain** (60 aa DNA-binding motif)
- They specify segment identity along the anterior-posterior axis in bilaterian animals
- **Collinearity:** Hox genes are arranged on the chromosome in the same order as their expression along the body axis
- Vertebrates have 4 Hox clusters (A–D) with 13 paralog groups (due to two rounds of whole-genome duplication)
- Changes in Hox gene expression domains can produce dramatic morphological changes (e.g., snake body plan: expanded thoracic Hox expression → extra ribs, no limbs)

**2. Cis-regulatory evolution:**
- Most morphological evolution occurs through changes in **cis-regulatory elements (enhancers)** rather than coding sequences
- Enhancer mutations can alter when, where, and how much a gene is expressed without disrupting the protein itself
- Example: Loss of a pelvic enhancer of **Pitx1** in stickleback fish → pelvic spine reduction (repeated independently in multiple populations)

**3. Deep homology:**
- Distantly related organisms share conserved genetic toolkits (e.g., **Pax6/eyeless** controls eye development in both insects and vertebrates)
- Similar signaling pathways (Wnt, Hedgehog, BMP, Notch, FGF) are reused across phyla for different structures

**4. Heterochrony and heterotopy:**
- **Heterochrony:** Changes in the timing of developmental events (e.g., **neoteny** — retention of juvenile features in adults, as in axolotls)
- **Heterotopy:** Changes in the spatial location of gene expression

**5. Modularity:** Body structures develop as semi-independent modules (e.g., limbs, segments) that can evolve somewhat independently, enabling mosaic evolution.`,
      },
    ],
    quiz: [
      {
        question: 'Which group is paraphyletic?',
        options: [
          'Mammals (including monotremes, marsupials, placentals)',
          'Reptiles (excluding birds)',
          'Vertebrates',
          'Arthropods',
        ],
        answer: 1,
        explanation: 'Traditional "Reptilia" excludes birds, but birds evolved from within reptiles (they are dinosaurs). Excluding birds from the reptile clade makes it paraphyletic — it includes an ancestor but not all descendants.',
      },
      {
        question: 'Which speciation mode is most commonly associated with polyploidy in plants?',
        options: ['Allopatric', 'Sympatric', 'Parapatric', 'Peripatric'],
        answer: 1,
        explanation: 'Polyploidy (especially allopolyploidy) causes immediate reproductive isolation without geographic separation because the polyploid cannot produce viable offspring with diploid parents. This is sympatric speciation and is especially common in plants.',
      },
      {
        question: 'What does evo-devo research suggest is the primary driver of morphological evolution?',
        options: [
          'Changes in protein-coding sequences',
          'Changes in cis-regulatory elements (enhancers)',
          'Gene deletion',
          'Whole-genome duplication',
        ],
        answer: 1,
        explanation: 'Most morphological evolution occurs through changes in cis-regulatory elements (enhancers) rather than in the protein-coding sequences themselves. This allows spatial and temporal changes in gene expression without disrupting protein function.',
      },
    ],
  },
  {
    id: 'immunology',
    title: 'Immunology',
    icon: '🛡️',
    color: '#0891b2',
    description: 'Innate and adaptive immunity, antibodies, and immunological memory.',
    sections: [
      {
        title: 'Innate Immunity',
        content: `The innate immune system provides immediate, non-specific defense against pathogens.

**Physical and chemical barriers:**
- Skin (keratinized epithelium), mucous membranes, ciliary escalator
- Antimicrobial peptides (defensins, cathelicidins), lysozyme (cleaves peptidoglycan), low pH (stomach, skin)
- Normal microbiota (competitive exclusion)

**Pattern recognition receptors (PRRs):**
PRRs detect conserved pathogen-associated molecular patterns (PAMPs) and damage-associated molecular patterns (DAMPs):
- **Toll-like receptors (TLRs):** TLR4 (LPS from Gram-negative bacteria), TLR3/7/8/9 (nucleic acids), TLR2 (lipoproteins)
- **NOD-like receptors (NLRs):** Intracellular; NOD1/NOD2 detect peptidoglycan fragments. **NLRP3 inflammasome** → activates caspase-1 → cleaves pro-IL-1β and pro-IL-18
- **RIG-I-like receptors (RLRs):** Detect cytoplasmic viral RNA
- **cGAS-STING pathway:** Detects cytoplasmic dsDNA → type I interferon response

**Cellular components:**
- **Neutrophils:** First responders; phagocytosis, degranulation, NETs (neutrophil extracellular traps)
- **Macrophages:** Phagocytosis, antigen presentation (MHC II), cytokine production. M1 (pro-inflammatory) vs. M2 (anti-inflammatory/tissue repair)
- **Dendritic cells:** Professional APCs; bridge innate and adaptive immunity; migrate to lymph nodes
- **Natural killer (NK) cells:** Kill virus-infected and tumor cells; activated when inhibitory signals (MHC I) are absent ("missing self" hypothesis); ADCC via FcγRIII (CD16)
- **Complement system:** Three pathways (classical, lectin, alternative) converge on C3 convertase → C3b opsonization, C3a/C5a anaphylatoxins (inflammation), MAC (C5b-9, membrane attack complex → lysis)`,
      },
      {
        title: 'Adaptive Immunity',
        content: `The adaptive immune system provides specific, long-lasting immunity with immunological memory.

**T cells (mature in thymus):**
- **CD4⁺ T helper cells:** Recognize antigen on MHC class II (presented by APCs)
  - **Th1:** Produce IFN-γ; activate macrophages; cell-mediated immunity against intracellular pathogens
  - **Th2:** Produce IL-4, IL-5, IL-13; promote B cell class switching to IgE; defense against helminths; drive allergic responses
  - **Th17:** Produce IL-17; recruit neutrophils; mucosal defense against extracellular bacteria/fungi
  - **Tfh (follicular helper):** Reside in germinal centers; critical for B cell affinity maturation and class switching
  - **Treg:** Produce IL-10, TGF-β; suppress immune responses; maintain self-tolerance
- **CD8⁺ cytotoxic T lymphocytes (CTLs):** Recognize antigen on MHC class I (on all nucleated cells); kill target cells via perforin/granzyme and Fas/FasL pathways

**T cell activation requires two signals:**
1. TCR-MHC/peptide interaction (Signal 1)
2. Co-stimulation: B7 (CD80/CD86) on APC binds CD28 on T cell (Signal 2)
Without Signal 2 → T cell **anergy** (tolerance mechanism)

**B cells (mature in bone marrow):**
- **BCR** = membrane-bound immunoglobulin (IgM or IgD)
- **Activation:** T-dependent (Tfh provides CD40L-CD40 + cytokines) or T-independent (repetitive epitopes, e.g., polysaccharides)
- **Germinal center reactions:**
  - **Somatic hypermutation (SHM):** AID introduces point mutations in variable regions → affinity maturation
  - **Class switch recombination (CSR):** Changes constant region (IgM → IgG, IgA, or IgE) without altering antigen specificity
- **Differentiation:** → Plasma cells (antibody factories) + Memory B cells

**Antibody isotypes:**
- **IgM:** Pentamer; first response; complement activation
- **IgG:** Most abundant; crosses placenta; opsonization, complement, ADCC
- **IgA:** Dimer (secretory); mucosal immunity (gut, respiratory, breast milk)
- **IgE:** Allergic responses; binds FcεRI on mast cells → degranulation; anti-helminth defense
- **IgD:** BCR co-receptor; function not fully understood`,
      },
    ],
    quiz: [
      {
        question: 'Which receptor detects LPS from Gram-negative bacteria?',
        options: ['TLR3', 'TLR4', 'NOD2', 'RIG-I'],
        answer: 1,
        explanation: 'TLR4 (Toll-like receptor 4) on the surface of macrophages and dendritic cells is the primary receptor for lipopolysaccharide (LPS), a major component of the Gram-negative bacterial outer membrane.',
      },
      {
        question: 'What is required for T cell activation besides TCR engagement with MHC-peptide?',
        options: [
          'Antibody binding',
          'Co-stimulation via B7-CD28 interaction',
          'Complement activation',
          'NK cell assistance',
        ],
        answer: 1,
        explanation: 'T cell activation requires two signals: (1) TCR recognition of MHC-peptide and (2) co-stimulatory signal from B7 (CD80/CD86) on the APC binding CD28 on the T cell. Without co-stimulation, the T cell becomes anergic.',
      },
      {
        question: 'Which antibody isotype is the first produced during a primary immune response?',
        options: ['IgG', 'IgA', 'IgM', 'IgE'],
        answer: 2,
        explanation: 'IgM is the first antibody produced in a primary immune response. Its pentameric form is efficient at complement activation and agglutination, providing early defense before class switching produces IgG and other isotypes.',
      },
      {
        question: 'Somatic hypermutation in germinal center B cells functions to:',
        options: [
          'Generate class-switched antibodies',
          'Create new V(D)J combinations',
          'Introduce point mutations in variable regions for affinity maturation',
          'Activate complement via the classical pathway',
        ],
        answer: 2,
        explanation: 'Somatic hypermutation (SHM), mediated by AID (activation-induced cytidine deaminase), introduces point mutations in the variable regions of immunoglobulin genes. B cells with higher-affinity BCRs are selected in the germinal center (affinity maturation).',
      },
    ],
  },
  {
    id: 'neuroscience',
    title: 'Neuroscience',
    icon: '🧠',
    color: '#be185d',
    description: 'Neural signaling, synaptic transmission, and brain organization.',
    sections: [
      {
        title: 'Neural Signaling',
        content: `Neurons communicate via electrical and chemical signals.

**Resting membrane potential (~-70 mV):**
- Established by the Na⁺/K⁺-ATPase (3 Na⁺ out, 2 K⁺ in) and K⁺ leak channels
- At rest, the membrane is most permeable to K⁺ → resting potential is close to EK (~-90 mV) but not equal due to small Na⁺ permeability
- **Nernst equation:** E = (RT/zF) ln([ion]out/[ion]in) — calculates equilibrium potential for a single ion
- **Goldman equation:** Considers permeability of multiple ions to calculate Vm

**Action potential (all-or-none):**
1. **Threshold (~-55 mV):** Stimulus depolarizes membrane past threshold
2. **Depolarization:** Voltage-gated Na⁺ channels open → rapid Na⁺ influx → membrane approaches ENa (+60 mV)
3. **Repolarization:** Na⁺ channels inactivate (ball-and-chain); voltage-gated K⁺ channels open (delayed) → K⁺ efflux
4. **Hyperpolarization (undershoot):** K⁺ channels slow to close → briefly more negative than resting potential
5. **Refractory periods:**
   - **Absolute:** Na⁺ channels inactivated; no stimulus can trigger another AP
   - **Relative:** Some Na⁺ channels recovered; stronger stimulus needed

**Propagation:**
- **Unmyelinated axons:** Continuous conduction; slower (0.5–2 m/s)
- **Myelinated axons:** **Saltatory conduction** — AP jumps between nodes of Ranvier; much faster (up to 120 m/s)
- Speed also increases with axon diameter`,
      },
      {
        title: 'Synaptic Transmission',
        content: `**Chemical synapses** (most common in the CNS):

**Sequence of events:**
1. AP arrives at presynaptic terminal → depolarization opens **voltage-gated Ca²⁺ channels**
2. Ca²⁺ influx triggers **SNARE-mediated vesicle fusion** (synaptobrevin, syntaxin, SNAP-25) with the presynaptic membrane
3. Neurotransmitter released into the **synaptic cleft** (~20 nm)
4. NT binds **postsynaptic receptors** → ionotropic (ligand-gated channels, fast) or metabotropic (GPCRs, slow)
5. Signal termination: reuptake (transporters), enzymatic degradation, or diffusion

**Major neurotransmitters:**
- **Glutamate:** Primary excitatory NT in CNS
  - **AMPA receptors:** Fast EPSP (Na⁺ influx)
  - **NMDA receptors:** Voltage-dependent Mg²⁺ block; permeable to Ca²⁺; critical for **LTP** and learning. Requires both glutamate binding AND postsynaptic depolarization (coincidence detector)
- **GABA:** Primary inhibitory NT in CNS
  - **GABAA receptors:** Cl⁻ channels → IPSP; targets of benzodiazepines, barbiturates, alcohol
  - **GABAB receptors:** Metabotropic → K⁺ efflux → slow inhibition
- **Acetylcholine:** Neuromuscular junction (nicotinic receptors); autonomic nervous system; CNS (muscarinic receptors)
- **Dopamine:** Reward, motivation, motor control; pathways: mesolimbic (reward), nigrostriatal (movement), mesocortical, tuberoinfundibular
- **Serotonin (5-HT):** Mood, sleep, appetite; target of SSRIs
- **Norepinephrine:** Arousal, attention, fight-or-flight

**Synaptic plasticity:**
- **Long-term potentiation (LTP):** Sustained strengthening of synapses; depends on NMDA receptor activation → Ca²⁺ influx → CaMKII activation → AMPA receptor insertion. Basis of learning and memory.
- **Long-term depression (LTD):** Sustained weakening; low-frequency stimulation → moderate Ca²⁺ → phosphatase activation → AMPA receptor removal`,
      },
    ],
    quiz: [
      {
        question: 'During an action potential, the rapid depolarization phase is caused by:',
        options: [
          'K⁺ efflux through voltage-gated K⁺ channels',
          'Na⁺ influx through voltage-gated Na⁺ channels',
          'Ca²⁺ influx through voltage-gated Ca²⁺ channels',
          'Cl⁻ influx through GABA receptors',
        ],
        answer: 1,
        explanation: 'The depolarization phase of the action potential is driven by the opening of voltage-gated Na⁺ channels, allowing rapid Na⁺ influx down its electrochemical gradient. The membrane potential moves toward ENa (+60 mV).',
      },
      {
        question: 'The NMDA receptor is unique because it requires:',
        options: [
          'Only glutamate binding for activation',
          'Both glutamate binding AND postsynaptic depolarization to relieve Mg²⁺ block',
          'GABA as a co-agonist',
          'Presynaptic Ca²⁺ for activation',
        ],
        answer: 1,
        explanation: 'The NMDA receptor is a coincidence detector: it requires both glutamate binding (ligand-gating) and sufficient postsynaptic depolarization (to expel the Mg²⁺ ion blocking the channel). This property is essential for LTP and associative learning.',
      },
      {
        question: 'Saltatory conduction increases action potential speed by:',
        options: [
          'Increasing axon diameter',
          'Allowing the AP to jump between nodes of Ranvier in myelinated axons',
          'Opening more Na⁺ channels simultaneously',
          'Increasing neurotransmitter release',
        ],
        answer: 1,
        explanation: 'In myelinated axons, the myelin sheath (formed by Schwann cells in PNS, oligodendrocytes in CNS) insulates the axon. Action potentials are regenerated only at the nodes of Ranvier, effectively "jumping" between nodes. This saltatory conduction increases speed up to 120 m/s.',
      },
    ],
  },
];

export default topics;
