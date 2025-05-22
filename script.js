// Sample data for ethics and philosophy search results
const searchData = [
  {
    id: 1,
    title: "Utilitarianism",
    snippet:
      "Utilitarianism is a family of normative ethical theories that prescribe actions that maximize happiness and well-being for all affected individuals.",
    imageUrl:
      "https://www.econlib.org/wp-content/uploads/2022/03/Single-individual-Depositphotos_39584099_S-e1648238764476.jpg",
    content: {
      intro:
        "Utilitarianism is a family of normative ethical theories that prescribe actions that maximize happiness and well-being for all affected individuals. Although different varieties of utilitarianism admit different characterizations, the basic idea behind all of them is to in some sense maximize utility, which is often defined in terms of well-being or related concepts.",
      sections: [
        {
          title: "Classical Utilitarianism",
          content:
            "Classical utilitarianism, as outlined by Jeremy Bentham and John Stuart Mill, holds that actions are right if they tend to promote happiness or pleasure and wrong if they tend to produce unhappiness or pain—not just for the performer of the action but also for everyone else affected by it. The most influential contributors to this theory are considered to be the 18th and 19th-century British philosophers Jeremy Bentham and John Stuart Mill. Bentham, who is regarded as the founder of utilitarianism, formulated the principle of utility as the 'greatest happiness principle' or the principle of the 'greatest happiness of the greatest number.'",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/John_Stuart_Mill_by_London_Stereoscopic_Company%2C_c1870.jpg/800px-John_Stuart_Mill_by_London_Stereoscopic_Company%2C_c1870.jpg",
          imageCaption:
            "John Stuart Mill, who developed the theory of utilitarianism further in his work 'Utilitarianism' (1863)",
        },
        {
          title: "Act vs. Rule Utilitarianism",
          content:
            "Act utilitarianism states that an action is right if it maximizes utility; rule utilitarianism states that an action is right if it conforms to a rule that maximizes utility. In the history of ethical thought, act utilitarianism was proposed first, by Bentham and Mill. Rule utilitarianism was proposed later, by thinkers like Richard Brandt and John Rawls, as a way to address some of the problems and criticisms that had been raised against act utilitarianism. The distinction between act and rule utilitarianism is a central debate in normative ethics.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/John_Rawls_%281971_photo_portrait%29.jpg/800px-John_Rawls_%281971_photo_portrait%29.jpg",
          imageCaption: "John Rawls, who contributed to the development of rule utilitarianism",
        },
        {
          title: "Criticisms and Responses",
          content:
            "Utilitarianism has been criticized for many reasons. One common criticism is that it is difficult, if not impossible, to measure and compare the utilities of different actions. Another criticism is that utilitarianism ignores justice and rights. For example, according to utilitarianism, if killing one innocent person would save many other innocent people, then this would be the right action, which many find counterintuitive. Utilitarians have responded to these criticisms in various ways. Some have argued that a proper understanding of utility would not lead to the counterintuitive conclusions that critics suggest. Others have modified the theory, for example by incorporating rules or by focusing on preference satisfaction rather than pleasure and pain.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Peter_Singer_2017_%28cropped%29.jpg/800px-Peter_Singer_2017_%28cropped%29.jpg",
          imageCaption: "Peter Singer, a contemporary philosopher who defends a version of utilitarianism",
        },
      ],
      relatedTopics: [
        "Consequentialism",
        "John Stuart Mill",
        "Jeremy Bentham",
        "Hedonism",
        "Preference Utilitarianism",
      ],
    },
  },
  {
    id: 2,
    title: "Deontological Ethics",
    snippet:
      "Deontological ethics or deontology is the normative ethical theory that the morality of an action should be based on whether that action itself is right or wrong under a series of rules, rather than based on the consequences of the action.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Immanuel_Kant_%28painted_portrait%29.jpg/800px-Immanuel_Kant_%28painted_portrait%29.jpg",
    content: {
      intro:
        "Deontological ethics or deontology is the normative ethical theory that the morality of an action should be based on whether that action itself is right or wrong under a series of rules, rather than based on the consequences of the action. It is sometimes described as duty-based ethics, because deontological theories typically emphasize the importance of fulfilling one's duty. Deontological ethics is commonly contrasted with consequentialist and virtue ethical theories.",
      sections: [
        {
          title: "Kantian Ethics",
          content:
            "The most prominent deontological theory is that of Immanuel Kant, which emphasizes the notion of duty and the categorical imperative. Kant believed that there are certain actions that are absolutely prohibited, even if they would bring about more happiness than the alternatives. For Kant, the rightness of an action depends not on its consequences but on whether it fulfills our duty. Kant formulated the categorical imperative in several ways, but the most well-known version states that we should 'act only according to that maxim whereby you can, at the same time, will that it should become a universal law.' This means that an action is morally right if and only if you could rationally will that the maxim (or principle) behind your action should become a universal law that everyone follows.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Kant_Groundwork_Title.jpg/320px-Kant_Groundwork_Title.jpg",
          imageCaption: "Kant's 'Groundwork of the Metaphysics of Morals', a key text in deontological ethics",
        },
        {
          title: "Divine Command Theory",
          content:
            "Divine command theory is a form of deontological ethics which states that an action is right if God has decreed that it is right. According to divine command theory, things are morally good or bad, or morally obligatory, permissible, or prohibited, solely because of God's commands or nature. The theory is supported by the idea that God is all-knowing, all-powerful, and perfectly good, so God's commands will always be morally correct. However, this theory faces the Euthyphro dilemma: Is something good because God commands it, or does God command it because it is good? If the former, then goodness seems arbitrary; if the latter, then there seems to be a standard of goodness independent of God.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Euthyphro_Stephanus_1578_p_2.jpg/800px-Euthyphro_Stephanus_1578_p_2.jpg",
          imageCaption: "Plato, whose dialogue 'Euthyphro' presents a dilemma for divine command theory",
        },
        {
          title: "Criticisms and Responses",
          content:
            "Deontological ethics has been criticized for several reasons. One criticism is that it can lead to moral absolutism, where certain actions are considered wrong regardless of their consequences. This can lead to situations where following a moral rule would result in significant harm. Another criticism is that deontological theories often do not provide clear guidance on how to resolve conflicts between different duties or rules. Deontologists have responded to these criticisms in various ways. Some have argued that properly understood, deontological ethics does not lead to the counterintuitive conclusions that critics suggest. Others have modified the theory, for example by incorporating elements of consequentialism or virtue ethics.",
          image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/W-D-Ross.jpg",
          imageCaption:
            "W. D. Ross, who developed a pluralistic deontological theory that acknowledges multiple moral duties",
        },
      ],
      relatedTopics: ["Immanuel Kant", "Categorical Imperative", "Divine Command Theory", "Duty Ethics", "W. D. Ross"],
    },
  },
  {
    id: 3,
    title: "Virtue Ethics",
    snippet:
      "Virtue ethics is a broad term for theories that emphasize the role of character and virtues in moral philosophy rather than either doing one's duty or acting in order to bring about good consequences.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/800px-Aristotle_Altemps_Inv8575.jpg",
    content: {
      intro:
        "Virtue ethics is a broad term for theories that emphasize the role of character and virtues in moral philosophy rather than either doing one's duty or acting in order to bring about good consequences. A virtue ethicist is likely to give you this kind of moral advice: 'Act as a virtuous person would act in your situation.' Virtue ethics is currently one of three major approaches in normative ethics, the other two being deontological ethics and consequentialism.",
      sections: [
        {
          title: "Aristotelian Virtue Ethics",
          content:
            "Aristotle is the founder of virtue ethics, and his ethical theory is centered on the concept of eudaimonia, often translated as 'happiness' or 'flourishing.' According to Aristotle, the virtuous person is someone who has ideal character traits. These traits derive from natural internal tendencies, but need to be nurtured; however, once established, they will become stable. For Aristotle, virtue is the golden mean between two vices: excess and deficiency. For example, courage is a virtue, while rashness is an excess of courage and cowardice is a deficiency. The virtuous person knows the right amount of courage to display in each situation.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/8/82/Aristotelis_De_Moribus_ad_Nicomachum.jpg",
          imageCaption: "Title page of Aristotle's 'Nicomachean Ethics', a foundational text in virtue ethics",
        },
        {
          title: "Contemporary Virtue Ethics",
          content:
            "Contemporary virtue ethics was popularized during the late 20th century in large part as a response to G. E. M. Anscombe's 'Modern Moral Philosophy'. Anscombe argues that consequentialist and deontological ethics are not well-grounded. She recommends a return to the virtue ethical theories of the ancients, particularly Aristotle. Following Anscombe's work, philosophers such as Alasdair MacIntyre, Philippa Foot, and Rosalind Hursthouse have contributed to the development of contemporary virtue ethics. These philosophers have sought to develop a virtue ethics that can address the challenges of modern moral philosophy while remaining true to the insights of ancient virtue ethics.",
          image: "https://www.thetimes.co.uk/imageserver/image//methode/times/prodmigration/web/bin/cb9c5eaf-a50a-36f5-b11f-6a339f7dea37.jpg?crop=780%2C520%2C0%2C0",
          imageCaption: "Philippa Foot, a key figure in the revival of virtue ethics in the 20th century",
        },
        {
          title: "Criticisms and Responses",
          content:
            "Virtue ethics has been criticized for several reasons. One criticism is that it does not provide clear guidance on how to act in specific situations, as it focuses on character rather than actions. Another criticism is that virtue ethics may not be able to address complex moral issues that require balancing different considerations. Virtue ethicists have responded to these criticisms in various ways. Some have argued that virtue ethics does provide action guidance, as it tells us to act as a virtuous person would act. Others have developed more detailed accounts of how virtue ethics can address complex moral issues, for example by incorporating elements of other ethical theories or by developing more nuanced accounts of the virtues.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Martha_Nussbaum_2010_%28cropped%29.jpg/250px-Martha_Nussbaum_2010_%28cropped%29.jpg",
          imageCaption:
            "Martha Nussbaum, a contemporary philosopher who has developed a capabilities approach that draws on virtue ethics",
        },
      ],
      relatedTopics: ["Aristotle", "Eudaimonia", "Character Ethics", "Alasdair MacIntyre", "Philippa Foot"],
    },
  },
  {
    id: 4,
    title: "Social Contract Theory",
    snippet:
      "Social contract theory is the view that persons' moral and/or political obligations are dependent upon a contract or agreement among them to form the society in which they live.",
    imageUrl:
      "https://cdn.britannica.com/03/11003-159-2677F790/Thomas-Hobbes-detail-oil-painting-John-Michael.jpg",
    content: {
      intro:
        "Social contract theory is the view that persons' moral and/or political obligations are dependent upon a contract or agreement among them to form the society in which they live. The theory was popularized by philosophers such as Thomas Hobbes, John Locke, and Jean-Jacques Rousseau. According to these philosophers, individuals have consented, either explicitly or tacitly, to surrender some of their freedoms and submit to the authority of the ruler or magistrate (or to the decision of a majority), in exchange for protection of their remaining rights or maintenance of the social order.",
      sections: [
        {
          title: "Hobbes and the State of Nature",
          content:
            "Thomas Hobbes's version of social contract theory is based on the idea of the state of nature, a hypothetical situation that would exist if there were no government, no civilization, no laws, and no common power to restrain human nature. According to Hobbes, the state of nature would be a 'war of all against all' (bellum omnium contra omnes), in which human life would be 'solitary, poor, nasty, brutish, and short.' To avoid this, individuals agree to a social contract and establish a civil society. In Hobbes's view, the sovereign (whether a monarch or a parliament) has absolute authority, as people have transferred all their rights to the sovereign in exchange for security.",
          image:
            "https://devonandexeterinstitution.org/wp-content/uploads/2021/02/1-664x1024.jpg",
          imageCaption: "Frontispiece of Thomas Hobbes's 'Leviathan', a key text in social contract theory",
        },
        {
          title: "Locke and Natural Rights",
          content:
            "John Locke's version of social contract theory differs from Hobbes's in several ways. Locke believed that individuals in the state of nature would be bound by natural law and would have natural rights to life, liberty, and property. The state of nature would not be a war of all against all, but it would be inconvenient because there would be no impartial judge to settle disputes. Therefore, individuals agree to a social contract and establish a civil society to protect their natural rights. In Locke's view, the government's authority is limited, and if the government fails to protect natural rights or exceeds its authority, the people have the right to rebel.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/JohnLocke.png/800px-JohnLocke.png",
          imageCaption: "John Locke, whose social contract theory influenced the American and French Revolutions",
        },
        {
          title: "Contemporary Social Contract Theory",
          content:
            "Contemporary social contract theory is associated with philosophers such as John Rawls and David Gauthier. Rawls's theory of justice as fairness is a form of social contract theory that uses a thought experiment called the 'original position.' In the original position, individuals are behind a 'veil of ignorance,' meaning they do not know their place in society, their class position or social status, their natural abilities, or their conception of the good. From this position, Rawls argues, individuals would agree to principles of justice that are fair to all. Gauthier's contractarianism, on the other hand, is based on the idea of mutual advantage and does not rely on a hypothetical original position.",
          image: "https://upload.wikimedia.org/wikipedia/commons/2/28/A_Theory_of_Justice_-_first_American_hardcover_edition.jpg",
          imageCaption: "John Rawls, whose 'A Theory of Justice' is a landmark in contemporary social contract theory",
        },
      ],
      relatedTopics: ["Thomas Hobbes", "John Locke", "Jean-Jacques Rousseau", "John Rawls", "Political Philosophy"],
    },
  },
  {
    id: 5,
    title: "Moral Relativism",
    snippet:
      "Moral relativism is the view that moral judgments are true or false only relative to some particular standpoint (for instance, that of a culture or a historical period) and that no standpoint is uniquely privileged over all others.",
    imageUrl:
      "https://existenceofgod.org/wp-content/uploads/2016/12/moral-relativism.jpg",
    content: {
      intro:
        "Moral relativism is the view that moral judgments are true or false only relative to some particular standpoint (for instance, that of a culture or a historical period) and that no standpoint is uniquely privileged over all others. It has often been associated with other claims about morality: notably, the thesis that different cultures often exhibit radically different moral values; the denial that there are universal moral values shared by every human society; and the insistence that we should refrain from passing moral judgments on beliefs and practices characteristic of cultures other than our own.",
      sections: [
        {
          title: "Descriptive vs. Metaethical Relativism",
          content:
            "Descriptive moral relativism is the empirical claim that different cultures have different moral codes. This is a widely accepted anthropological thesis, supported by extensive ethnographic research. Metaethical moral relativism, on the other hand, is the philosophical claim that the truth or falsity of moral judgments is not absolute but relative to some group of persons. This is a more controversial claim, as it implies that there are no objective moral truths that apply to all people at all times. A third form of moral relativism, normative moral relativism, is the prescriptive view that because there is no universal moral standard by which to judge others, we ought to tolerate the behavior of others, even when it runs counter to our personal or cultural moral standards.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ruth_Benedict.jpg/800px-Ruth_Benedict.jpg",
          imageCaption: "Ruth Benedict, an anthropologist whose work 'Patterns of Culture' influenced moral relativism",
        },
        {
          title: "Arguments For and Against",
          content:
            "Arguments for moral relativism often appeal to the diversity of moral beliefs across cultures and times. If moral beliefs vary so widely, the argument goes, it is implausible that there are objective moral truths that apply to all people. Arguments against moral relativism often point out that it seems to imply that we cannot criticize practices like slavery or genocide in other cultures, which many find counterintuitive. Another argument against moral relativism is that it seems to be self-defeating: if all moral beliefs are relative, then the belief that moral relativism is true is also relative, which undermines the claim that moral relativism is objectively true.",
          image: "https://upload.wikimedia.org/wikipedia/en/4/4f/James_Rachels.png",
          imageCaption:
            "James Rachels, a philosopher who critiqued moral relativism in his work 'The Elements of Moral Philosophy'",
        },
        {
          title: "Cultural Relativism",
          content:
            "Cultural relativism is a form of moral relativism that emphasizes the cultural context of moral judgments. According to cultural relativism, moral standards are culturally defined, which is to say that whether an action is right or wrong depends on the moral norms of the society in which it is practiced. Cultural relativism was popularized in the early 20th century by anthropologists like Franz Boas and Ruth Benedict, who were reacting against the ethnocentrism they perceived in the Western approach to other cultures. Cultural relativism has been criticized for potentially leading to a form of moral nihilism, where no moral judgments can be made, and for potentially justifying harmful practices in the name of cultural respect.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/62/FranzBoas.jpg",
          imageCaption: "Franz Boas, an anthropologist who promoted cultural relativism",
        },
      ],
      relatedTopics: ["Cultural Relativism", "Moral Objectivism", "Ethnocentrism", "Metaethics", "Moral Nihilism"],
    },
  },
  {
    id: 6,
    title: "Existentialism",
    snippet:
      "Existentialism is a philosophical movement that emphasizes individual existence, freedom, and choice. It holds that humans define their own meaning in life, and try to make rational decisions despite existing in an irrational universe.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jean_Paul_Sartre_1965.jpg/800px-Jean_Paul_Sartre_1965.jpg",
    content: {
      intro:
        "Existentialism is a philosophical movement that emphasizes individual existence, freedom, and choice. It holds that humans define their own meaning in life, and try to make rational decisions despite existing in an irrational universe. It focuses on the question of human existence, and the feeling that there is no purpose or explanation at the core of existence. It holds that, as there is no God or any other transcendent force, the only way to counter this nothingness (and hence to find meaning in life) is by embracing existence.",
      sections: [
        {
          title: "Key Figures and Concepts",
          content:
            "Existentialism is associated with several 19th and 20th-century philosophers, including Søren Kierkegaard, Friedrich Nietzsche, Martin Heidegger, Jean-Paul Sartre, and Simone de Beauvoir. Key concepts in existentialism include existence precedes essence, absurdity, alienation, authenticity, and freedom. 'Existence precedes essence' is a central tenet of existentialism, which means that the most important consideration for individuals is that they are individuals—independently acting and responsible, conscious beings. The 'absurd' refers to the conflict between the human tendency to seek inherent value and meaning in life and the human inability to find any in a purposeless, meaningless or chaotic and irrational universe.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/S%C3%B8ren_Kierkegaard_%281813-1855%29_-_%28cropped%29.jpg/500px-S%C3%B8ren_Kierkegaard_%281813-1855%29_-_%28cropped%29.jpg",
          imageCaption: "Søren Kierkegaard, often considered the first existentialist philosopher",
        },
        {
          title: "Existentialist Ethics",
          content:
            "Existentialist ethics emphasizes individual freedom and responsibility. According to existentialism, individuals are entirely free and must take personal responsibility for themselves, although with this responsibility comes angst, a profound anguish or dread. Sartre argued that a central proposition of existentialism is that existence precedes essence, which means that the most important consideration for individuals is that they are individuals—independently acting and responsible, conscious beings ('existence')—rather than what labels, roles, stereotypes, definitions, or other preconceived categories the individuals fit ('essence'). The actual life of the individuals is what constitutes what could be called their 'true essence' instead of there being an arbitrarily attributed essence others use to define them.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/5/55/Simone_De_Beauvoir_%28cropped%29.jpg",
          imageCaption:
            "Simone de Beauvoir, whose work 'The Ethics of Ambiguity' is a major contribution to existentialist ethics",
        },
        {
          title: "Existentialism in Literature and Art",
          content:
            "Existentialism has had a significant influence on literature and art. Existentialist themes are displayed in the works of Franz Kafka, Fyodor Dostoevsky, and Albert Camus, among others. In Kafka's 'The Metamorphosis,' the protagonist, Gregor Samsa, wakes up one morning to find himself transformed into a giant insect, which can be seen as a metaphor for the alienation and absurdity that existentialists see in human existence. Camus, who is often associated with existentialism despite his rejection of the label, explored existentialist themes in his novels and essays, particularly the concept of the absurd. In his essay 'The Myth of Sisyphus,' Camus compares human existence to the figure of Sisyphus, who, according to Greek mythology, was condemned to repeat forever the same meaningless task of pushing a boulder up a mountain, only to see it roll down again.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg/800px-Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg",
          imageCaption: "Albert Camus, whose works explore existentialist themes",
        },
      ],
      relatedTopics: ["Jean-Paul Sartre", "Simone de Beauvoir", "Absurdism", "Phenomenology", "Authenticity"],
    },
  },
  
]
// Add this after the searchData array definition
const philosopherData = [
  {
    id: 1,
    name: "Aristotle",
    dates: "384-322 BCE",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/800px-Aristotle_Altemps_Inv8575.jpg",
    bio: "Aristotle was a Greek philosopher and polymath during the Classical period in Ancient Greece. He was the founder of the Lyceum and the Peripatetic school of philosophy. Along with his teacher Plato, he is considered the 'Father of Western Philosophy'. His writings cover many subjects including physics, biology, zoology, metaphysics, logic, ethics, aesthetics, poetry, theatre, music, rhetoric, psychology, linguistics, economics, politics, and government.",
    contributions: [
      {
        title: "Virtue Ethics",
        description:
          "Aristotle's ethical theory is centered on the concept of virtue (arete) and the pursuit of eudaimonia (happiness or flourishing). He argued that virtues are character traits that enable a person to lead a good life, and that virtue is a mean between two vices: excess and deficiency.",
      },
      {
        title: "Metaphysics",
        description:
          "Aristotle developed a comprehensive system of metaphysics, including his theory of causality (material, formal, efficient, and final causes) and his understanding of substance, form, and matter.",
      },
      {
        title: "Logic",
        description:
          "Aristotle was the first to formalize logic as a discipline. His logical works, collectively known as the Organon, include his theory of the syllogism, which dominated logic until the 19th century.",
      },
    ],
    keyWorks: ["Nicomachean Ethics", "Politics", "Metaphysics", "Poetics", "Prior Analytics", "Posterior Analytics"],
  },
  {
    id: 2,
    name: "Immanuel Kant",
    dates: "1724-1804",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Immanuel_Kant_%28painted_portrait%29.jpg/800px-Immanuel_Kant_%28painted_portrait%29.jpg",
    bio: "Immanuel Kant was a German philosopher who is a central figure in modern philosophy. Kant argued that the human mind creates the structure of human experience, that reason is the source of morality, that aesthetics arises from a faculty of disinterested judgment, that space and time are forms of human sensibility, and that the world as it is 'in-itself' is independent of humanity's concepts of it.",
    contributions: [
      {
        title: "Deontological Ethics",
        description:
          "Kant developed a deontological moral theory based on the categorical imperative, which states that one should 'act only according to that maxim whereby you can, at the same time, will that it should become a universal law.' His ethical theory emphasizes duty, good will, and respect for rational beings.",
      },
      {
        title: "Transcendental Idealism",
        description:
          "Kant's transcendental idealism distinguishes between appearances (phenomena) and things-in-themselves (noumena). He argued that we can only know things as they appear to us, not as they are in themselves.",
      },
      {
        title: "Critique of Pure Reason",
        description:
          "In this groundbreaking work, Kant sought to determine the limits and scope of pure reason, arguing against both rationalism and empiricism, and attempting to synthesize these traditions.",
      },
    ],
    keyWorks: [
      "Critique of Pure Reason",
      "Critique of Practical Reason",
      "Critique of Judgment",
      "Groundwork of the Metaphysics of Morals",
    ],
  },
  {
    id: 3,
    name: "John Stuart Mill",
    dates: "1806-1873",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/John_Stuart_Mill_by_London_Stereoscopic_Company%2C_c1870.jpg/800px-John_Stuart_Mill_by_London_Stereoscopic_Company%2C_c1870.jpg",
    bio: "John Stuart Mill was a British philosopher, political economist, and civil servant. He was one of the most influential thinkers in the history of classical liberalism. He contributed widely to social theory, political theory, and political economy. Dubbed 'the most influential English-speaking philosopher of the nineteenth century', he conceived of liberty as justifying the freedom of the individual in opposition to unlimited state and social control.",
    contributions: [
      {
        title: "Utilitarianism",
        description:
          "Mill refined Bentham's utilitarianism, arguing that pleasures differ in quality as well as quantity. He introduced the distinction between 'higher' and 'lower' pleasures, claiming that intellectual and moral pleasures are superior to physical ones.",
      },
      {
        title: "On Liberty",
        description:
          "Mill's 'On Liberty' addresses the nature and limits of power that can be legitimately exercised by society over the individual. He introduced the 'harm principle,' stating that the only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others.",
      },
      {
        title: "The Subjection of Women",
        description:
          "Mill argued for women's suffrage and gender equality, claiming that the subordination of women was a relic from the past that hindered human improvement.",
      },
    ],
    keyWorks: [
      "Utilitarianism",
      "On Liberty",
      "The Subjection of Women",
      "A System of Logic",
      "Principles of Political Economy",
    ],
  },
  {
    id: 4,
    name: "Jeremy Bentham",
    dates: "1748-1832",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Jeremy_Bentham_by_Henry_William_Pickersgill_detail.jpg",
    bio: "Jeremy Bentham was an English philosopher, jurist, and social reformer regarded as the founder of modern utilitarianism. He advocated for individual and economic freedoms, the separation of church and state, freedom of expression, equal rights for women, the right to divorce, and the decriminalizing of homosexual acts. He called for the abolition of slavery, capital punishment and physical punishment, including that of children.",
    contributions: [
      {
        title: "Utilitarianism",
        description:
          "Bentham formulated the principle of utility, or the 'greatest happiness principle,' which states that actions are right if they tend to promote happiness or pleasure and wrong if they tend to produce unhappiness or pain.",
      },
      {
        title: "Legal Reform",
        description:
          "Bentham was a significant legal reformer and critic of the common law. He advocated for a scientific approach to legislation and the codification of laws.",
      },
      {
        title: "Panopticon",
        description:
          "Bentham designed the Panopticon, a type of institutional building and system of control that allows all inmates of an institution to be observed by a single watchman without the inmates being able to tell whether they are being watched.",
      },
    ],
    keyWorks: [
      "An Introduction to the Principles of Morals and Legislation",
      "The Rationale of Punishment",
      "Panopticon",
    ],
  },
  {
    id: 5,
    name: "Plato",
    dates: "428/427-348/347 BCE",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/800px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
    bio: "Plato was an Athenian philosopher during the Classical period in Ancient Greece, founder of the Platonist school of thought and the Academy, the first institution of higher learning in the Western world. He is widely considered the pivotal figure in the history of Ancient Greek and Western philosophy, along with his teacher, Socrates, and his most famous student, Aristotle.",
    contributions: [
      {
        title: "Theory of Forms",
        description:
          "Plato's theory of Forms argues that non-material abstract forms (or ideas), and not the material world of change known to us through sensation, possess the highest and most fundamental kind of reality.",
      },
      {
        title: "Political Philosophy",
        description:
          "In 'The Republic,' Plato outlines his vision of an ideal state, ruled by philosopher-kings who possess knowledge of the Good. He explores concepts of justice, education, and the nature of reality.",
      },
      {
        title: "Epistemology",
        description:
          "Plato believed that knowledge is innate and can be brought to consciousness through questioning, a process he called anamnesis or recollection. This is demonstrated in his dialogue 'Meno,' where Socrates leads an uneducated slave boy to discover geometric truths.",
      },
    ],
    keyWorks: ["The Republic", "Symposium", "Phaedo", "Meno", "Apology", "Phaedrus"],
  },
  {
    id: 6,
    name: "Jean-Paul Sartre",
    dates: "1905-1980",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Jean_Paul_Sartre_1965.jpg/800px-Jean_Paul_Sartre_1965.jpg",
    bio: "Jean-Paul Sartre was a French philosopher, playwright, novelist, screenwriter, political activist, biographer, and literary critic. He was one of the key figures in the philosophy of existentialism and phenomenology, and one of the leading figures in 20th-century French philosophy and Marxism.",
    contributions: [
      {
        title: "Existentialism",
        description:
          "Sartre developed existentialism as a philosophical movement that emphasizes individual existence, freedom, and choice. His famous dictum 'existence precedes essence' means that humans first exist and then create their essence through their actions and choices.",
      },
      {
        title: "Being and Nothingness",
        description:
          "In his magnum opus, Sartre presents a complex analysis of human existence, arguing that consciousness is essentially nothingness and that human beings are 'condemned to be free.'",
      },
      {
        title: "Political Engagement",
        description:
          "Sartre was deeply engaged with political issues of his time, including Marxism, anti-colonialism, and the student protests of 1968. He refused the Nobel Prize for Literature in 1964, saying that he did not wish to be 'institutionalized.'",
      },
    ],
    keyWorks: ["Being and Nothingness", "Existentialism is a Humanism", "Nausea", "No Exit", "The Age of Reason"],
  },
]

// DOM Elements
const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")
const resultsContainer = document.getElementById("resultsContainer")
const articleView = document.getElementById("articleView")
const searchResults = document.getElementById("searchResults")
const articleContent = document.getElementById("articleContent")
const tableOfContents = document.getElementById("tableOfContents")
const relatedTopics = document.getElementById("relatedTopics")
const backToResults = document.getElementById("backToResults")

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Initial display of all results
  displaySearchResults(searchData)

  // Search button click event
  searchButton.addEventListener("click", performSearch)

  // Enter key in search input
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch()
    }
  })

  // Back to results button
  backToResults.addEventListener("click", () => {
    articleView.classList.add("d-none")
    searchResults.classList.remove("d-none")
  })
})

// Functions
function performSearch() {
  const query = searchInput.value.trim().toLowerCase()

  if (query === "") {
    displaySearchResults(searchData)
    return
  }

  const filteredResults = searchData.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.snippet.toLowerCase().includes(query) ||
      item.content.intro.toLowerCase().includes(query) ||
      item.content.sections.some(
        (section) => section.title.toLowerCase().includes(query) || section.content.toLowerCase().includes(query),
      ),
  )

  displaySearchResults(filteredResults)
}

function displaySearchResults(results) {
  resultsContainer.innerHTML = ""

  if (results.length === 0) {
    resultsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <h3>No results found</h3>
                <p>Try different search terms or browse all philosophical concepts.</p>
            </div>
        `
    return
  }

  results.forEach((result) => {
    const resultCard = document.createElement("div")
    resultCard.className = "col-md-4 mb-4"
    resultCard.innerHTML = `
            <div class="card search-result-card">
                <img src="${result.imageUrl}" class="card-img-top search-result-image" alt="${result.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${result.title}</h5>
                    <p class="card-text">${result.snippet}</p>
                    <button class="btn read-more-btn mt-auto" data-id="${result.id}">Read More</button>
                </div>
            </div>
        `

    resultsContainer.appendChild(resultCard)

    // Add event listener to the Read More button
    const readMoreBtn = resultCard.querySelector(".read-more-btn")
    readMoreBtn.addEventListener("click", () => {
      const articleId = Number.parseInt(readMoreBtn.getAttribute("data-id"))
      displayArticle(articleId)
    })
  })
}

function displayArticle(id) {
  // Show loading state
  articleContent.innerHTML = `
        <div class="text-center py-5">
            <div class="loading-spinner"></div>
            <p class="mt-3">Loading article...</p>
        </div>
    `

  // Show article view
  searchResults.classList.add("d-none")
  articleView.classList.remove("d-none")

  // Simulate loading delay
  setTimeout(() => {
    const article = searchData.find((item) => item.id === id)

    if (!article) {
      articleContent.innerHTML = `
                <div class="alert alert-danger">
                    Article not found. Please try another search.
                </div>
            `
      return
    }

    // Build article content
    let articleHTML = `
            <h1>${article.title}</h1>
            <p class="lead">${article.content.intro}</p>
            <hr class="my-4">
        `

    // Add sections
    article.content.sections.forEach((section, index) => {
      const sectionId = `section-${index}`
      articleHTML += `
                <h2 id="${sectionId}">${section.title}</h2>
                <p>${section.content}</p>
            `

      if (section.image) {
        articleHTML += `
                    <figure class="text-center">
                        <img src="${section.image}" alt="${section.title}" class="article-image">
                        <figcaption class="article-image-caption">${section.imageCaption}</figcaption>
                    </figure>
                `
      }
    })

    // Update article content
    articleContent.innerHTML = articleHTML

    // Build table of contents
    tableOfContents.innerHTML = ""
    article.content.sections.forEach((section, index) => {
      const li = document.createElement("li")
      li.innerHTML = `<a href="#section-${index}">${section.title}</a>`
      tableOfContents.appendChild(li)
    })

    // Build related topics
    relatedTopics.innerHTML = ""
    article.content.relatedTopics.forEach((topic) => {
      const li = document.createElement("li")
      li.innerHTML = `<a href="#" class="related-topic">${topic}</a>`
      relatedTopics.appendChild(li)

      // Add event listener to related topic
      const topicLink = li.querySelector("a")
      topicLink.addEventListener("click", (e) => {
        e.preventDefault()
        searchInput.value = topic
        performSearch()
        articleView.classList.add("d-none")
        searchResults.classList.remove("d-none")
      })
    })

    // Add this new code after the related topics section
    // Check for philosopher names in the article content and add click events
    document.querySelectorAll("#articleContent p").forEach((paragraph) => {
      philosopherData.forEach((philosopher) => {
        if (paragraph.textContent.includes(philosopher.name)) {
          const regex = new RegExp(`\\b${philosopher.name}\\b`, "g")
          paragraph.innerHTML = paragraph.innerHTML.replace(
            regex,
            `<a href="#" class="philosopher-link" data-id="${philosopher.id}">${philosopher.name}</a>`,
          )
        }
      })
    })

    // Add event listeners to philosopher links
    document.querySelectorAll(".philosopher-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const philosopherId = Number.parseInt(link.getAttribute("data-id"))
        displayPhilosopher(philosopherId)
      })
    })
  }, 800) // Simulate network delay
}

// Now add a new function to display philosopher information
// Add this function after the displayArticle function

function displayPhilosopher(id) {
  // Show loading state
  articleContent.innerHTML = `
    <div class="text-center py-5">
      <div class="loading-spinner"></div>
      <p class="mt-3">Loading philosopher profile...</p>
    </div>
  `

  // Simulate loading delay
  setTimeout(() => {
    const philosopher = philosopherData.find((item) => item.id === id)

    if (!philosopher) {
      articleContent.innerHTML = `
        <div class="alert alert-danger">
          Philosopher profile not found. Please try another search.
        </div>
      `
      return
    }

    // Build philosopher profile content
    let profileHTML = `
      <h1>${philosopher.name}</h1>
      <p class="philosopher-dates">${philosopher.dates}</p>
      
      <div class="row mb-4">
        <div class="col-md-4">
          <img src="${philosopher.imageUrl}" alt="${philosopher.name}" class="img-fluid rounded article-image">
        </div>
        <div class="col-md-8">
          <p class="lead">${philosopher.bio}</p>
        </div>
      </div>
      
      <h2>Key Contributions</h2>
    `

    // Add contributions
    philosopher.contributions.forEach((contribution) => {
      profileHTML += `
        <div class="mb-3">
          <h3>${contribution.title}</h3>
          <p>${contribution.description}</p>
        </div>
      `
    })

    // Add key works
    profileHTML += `
      <h2>Key Works</h2>
      <ul class="list-group mb-4">
    `

    philosopher.keyWorks.forEach((work) => {
      profileHTML += `<li class="list-group-item">${work}</li>`
    })

    profileHTML += `</ul>`

    // Update article content
    articleContent.innerHTML = profileHTML

    // Update table of contents
    tableOfContents.innerHTML = ""
    const tocItems = [
      { id: "top", title: "Biography" },
      { id: "contributions", title: "Key Contributions" },
      { id: "works", title: "Key Works" },
    ]

    tocItems.forEach((item) => {
      const li = document.createElement("li")
      li.innerHTML = `<a href="#${item.id}">${item.title}</a>`
      tableOfContents.appendChild(li)
    })

    // Update related topics with other philosophers
    relatedTopics.innerHTML = ""
    const otherPhilosophers = philosopherData.filter((p) => p.id !== id).slice(0, 5) // Limit to 5 related philosophers

    otherPhilosophers.forEach((relatedPhilosopher) => {
      const li = document.createElement("li")
      li.innerHTML = `<a href="#" class="related-philosopher" data-id="${relatedPhilosopher.id}">${relatedPhilosopher.name}</a>`
      relatedTopics.appendChild(li)

      // Add event listener to related philosopher
      const philosopherLink = li.querySelector("a")
      philosopherLink.addEventListener("click", (e) => {
        e.preventDefault()
        displayPhilosopher(relatedPhilosopher.id)
      })
    })
  }, 800) // Simulate network delay
}
