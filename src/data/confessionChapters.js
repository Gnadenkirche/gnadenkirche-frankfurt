// src/data/confessionChapters.js
import { bibleVerses } from './bibleVerses'; // Import the separate file

export const confessionChapters = [
  /* ============================
     KAPITEL 1 (UNCHANGED)
     ============================ */
  {
    chapter: "1",
    title: "Über die Heilige Schrift",
    points: [
      {
        id: "1",
        title: "Die Notwendigkeit der Heiligen Schrift",
        text: `
Die Heilige Schrift ist die einzig ausreichende, sichere und unfehlbare Richtlinie für alle zum Heil notwendige Erkenntnis, für den rettenden Glauben und den Glaubensgehorsam, obschon das Licht der Natur und die Werke der Schöpfung und Vorsehung in so hohem Grade die Güte, Weisheit und Macht Gottes offenbaren, dass sie die Menschen ohne Entschuldigung lassen; doch sind sie nicht ausreichend, um jene Erkenntnis Gottes und seines Willens zu geben, die zum Heil notwendig ist. Deshalb gefiel es dem Herrn, sich zu verschiedenen Zeiten und auf unterschiedliche Art und Weise zu offenbaren, dies als seinen Willen für seine Gemeinde bekannt zu machen und ihn anschließend vollständig schriftlich abfassen zu lassen, damit die Wahrheit besser bewahrt und verbreitet wird und die Gemeinde gegen die fleischliche Verdorbenheit und die Bosheiten Satans und der Welt besser gegründet und gestärkt ist. Daher ist die Heilige Schrift völlig unentbehrlich, nachdem es jene früheren Arten, auf die Gott seinen Willen seinem Volk zu erkennen gegeben hatte, nun nicht mehr gibt.
        `,
        references: [
          { ref: "2Tim 3,15–17", verse: bibleVerses["2Tim 3,15–17"] },
          { ref: "Jes 8,20", verse: bibleVerses["Jes 8,20"] },
          { ref: "Lk 16,29.31", verse: bibleVerses["Lk 16,29.31"] },
          { ref: "Eph 2,20", verse: bibleVerses["Eph 2,20"] },
          { ref: "Röm 1,19–21", verse: bibleVerses["Röm 1,19–21"] },
          { ref: "Röm 2,14–15", verse: bibleVerses["Röm 2,14–15"] },
          { ref: "Ps 19,2–4", verse: bibleVerses["Ps 19,2–4"] },
          { ref: "Hebr 1,1", verse: bibleVerses["Hebr 1,1"] },
          { ref: "Spr 22,19–21", verse: bibleVerses["Spr 22,19–21"] },
          { ref: "Röm 15,4", verse: bibleVerses["Röm 15,4"] },
          { ref: "2Petr 1,19–20", verse: bibleVerses["2Petr 1,19–20"] }
        ]
      },
      {
        id: "2",
        title: "Der Umfang des Kanons",
        text: `
Unter dem Namen der Heiligen Schrift oder des geschriebenen Wortes Gottes sind nun alle Bücher des Alten und Neuen Testaments wie folgt zusammengefasst:

Altes Testament: 1. Mose (Genesis), 2. Mose (Exodus), 3. Mose (Levitikus), 4. Mose (Numeri), 5. Mose (Deuteronomium), Josua, Richter, Ruth, 1. Samuel, 2. Samuel, 1. Könige, 2. Könige, 1. Chronik, 2. Chronik, Esra, Nehemia, Ester, Hiob, Psalmen, Sprüche, Prediger, Hohelied, Jesaja, Jeremia, Klagelieder, Hesekiel, Daniel, Hosea, Joel, Amos, Obadja, Jona, Micha, Nahum, Habakuk, Zefanja, Haggai, Sacharja, Maleachi

Neues Testament: Matthäus, Markus, Lukas, Johannes, Apostelgeschichte, Römer, 1. Korinther, 2. Korinther, Galater, Epheser, Philipper, Kolosser, 1. Thessalonicher, 2. Thessalonicher, 1. Timotheus, 2. Timotheus, Titus, Philemon, Hebräer, Jakobus, 1. Petrus, 2. Petrus, 1. Johannes, 2. Johannes, 3. Johannes, Judas, Offenbarung

Diese wurden alle durch die Inspiration Gottes gegeben, um die Richtlinie für Glauben und Leben zu sein.
        `,
        references: [
          { ref: "2Tim 3,16", verse: bibleVerses["2Tim 3,16"] }
        ]
      },
      {
        id: "3",
        title: "Die Apokryphen",
        text: `
Die Bücher, die gewöhnlich Apokryphen genannt werden, gehören nicht zum Kanon der Heiligen Schrift (der verbindlichen Liste von autoritativen Schriften), da sie nicht von Gott inspiriert sind. Deshalb haben sie keine Autorität für die Gemeinde Gottes. Sie sollen auch nicht auf andere Weise anerkannt oder gebraucht werden als andere menschliche Schriften.
        `,
        references: [
          { ref: "Lk 24,27.44", verse: bibleVerses["Lk 24,27.44"] },
          { ref: "Röm 3,2", verse: bibleVerses["Röm 3,2"] }
        ]
      },
      {
        id: "4",
        title: "Die Autorität der Heiligen Schrift",
        text: `
Die Autorität der Heiligen Schrift, deretwegen man ihr glauben und gehorchen soll, beruht nicht auf dem Zeugnis irgendeines Menschen oder einer Gemeinde, sondern vollständig auf Gott (der die Wahrheit selbst ist) als ihrem Autor. Sie muss also deshalb angenommen werden, weil sie das Wort Gottes ist.
        `,
        references: [
          { ref: "2Petr 1,19–21", verse: bibleVerses["2Petr 1,19–21"] },
          { ref: "2Tim 3,16", verse: bibleVerses["2Tim 3,16"] },
          { ref: "2Thess 2,13", verse: bibleVerses["2Thess 2,13"] },
          { ref: "1Joh 5,9", verse: bibleVerses["1Joh 5,9"] }
        ]
      },
      {
        id: "5",
        title: "Das innere Zeugnis des Heiligen Geistes",
        text: `
Wir können zwar durch das Zeugnis der Gemeinde Gottes zu einer hohen und ehrerbietigen Wertschätzung der Heiligen Schrift bewegt und angeleitet werden. Auch das himmlische Wesen ihres Inhalts, die Wirksamkeit ihrer Lehre, der würdige Stil, die Übereinstimmung aller ihrer Teile, der Zweck des Ganzen (der darin besteht, Gott alle Ehre zu geben), die vollständige Offenbarung des einzigen Heilswegs für den Menschen, viele andere unvergleichliche Vorzüge und ihre gänzliche Vollkommenheit sind Gründe, durch die sie selbst sehr deutlich beweist, dass sie das Wort Gottes ist. Trotzdem wird unsere volle Überzeugung und Gewissheit bezüglich der unfehlbaren Wahrheit und göttlichen Autorität derselben durch das innere Wirken des Heiligen Geistes hervorgebracht, der durch das Wort und mit dem Wort in unseren Herzen davon Zeugnis gibt.
        `,
        references: [
          { ref: "Joh 16,13–14", verse: bibleVerses["Joh 16,13–14"] },
          { ref: "1Kor 2,10–12", verse: bibleVerses["1Kor 2,10–12"] },
          { ref: "1Joh 2,20.27", verse: bibleVerses["1Joh 2,20.27"] }
        ]
      },
      {
        id: "6",
        title: "Die Genugsamkeit der Schrift",
        text: `
Der ganze Ratschluss Gottes bezüglich all der Dinge, die zu seiner eigenen Ehre und für die Erlösung, den Glauben und das Leben des Menschen notwendig sind, ist entweder ausdrücklich in der Schrift dargelegt oder kann mit Gewissheit aus der Schrift erschlossen werden. Zu ihr darf zu keiner Zeit irgendetwas hinzugefügt werden, weder durch neue Offenbarung des Geistes noch durch menschliche Überlieferungen. Trotzdem erkennen wir an, dass die innere Erleuchtung durch den Geist Gottes nötig ist, um das rettende Verständnis für das zu erlangen, was im Wort geoffenbart ist. Ebenso erkennen wir an, dass es einige Umstände betreffs des Gottesdienstes und der Leitung der Gemeinde gibt, die allen menschlichen Handlungen und Gesellschaften gemeinsam sind, die durch das Licht der Natur und die christliche Vernunft geordnet werden müssen, gemäß den allgemeinen Richtlinien des Wortes, die dabei immer beachtet werden müssen.
        `,
        references: [
          { ref: "2Tim 3,15–17", verse: bibleVerses["2Tim 3,15–17"] },
          { ref: "Gal 1,8–9", verse: bibleVerses["Gal 1,8–9"] },
          { ref: "Joh 6,45", verse: bibleVerses["Joh 6,45"] },
          { ref: "1Kor 2,9–12", verse: bibleVerses["1Kor 2,9–12"] },
          { ref: "1Kor 11,13–14", verse: bibleVerses["1Kor 11,13–14"] },
          { ref: "1Kor 14,26.40", verse: bibleVerses["1Kor 14,26.40"] }
        ]
      },
      {
        id: "7",
        title: "Die Klarheit der Schrift",
        text: `
In der Schrift sind weder alle Dinge in sich selbst gleichermaßen verständlich noch in gleichem Maß für alle klar; aber die Dinge, die notwendigerweise zum Heil erkannt, geglaubt und beachtet werden müssen, sind an der einen oder anderen Stelle in der Schrift so klar dargelegt und geoffenbart, dass nicht nur die Gelehrten, sondern auch die Ungelehrten beim rechten Gebrauch der gewöhnlichen Mittel ein ausreichendes Verständnis erlangen können.
        `,
        references: [
          { ref: "2Petr 3,16", verse: bibleVerses["2Petr 3,16"] },
          { ref: "Ps 19,8", verse: bibleVerses["Ps 19,8"] },
          { ref: "Ps 119,130", verse: bibleVerses["Ps 119,130"] }
        ]
      },
      {
        id: "8",
        title: "Die ursprünglichen Sprachen und Übersetzungen",
        text: `
Das Alte Testament wurde in Hebräisch (von alters her die Muttersprache des Volkes Gottes) und das Neue Testament in Griechisch (zur Zeit der Niederschrift die am meisten verbreitete Sprache unter den Völkern) unmittelbar von Gott inspiriert und durch seine einzigartige Sorgfalt und Vorsehung zu allen Zeiten rein erhalten, weshalb sie authentisch sind, so dass sich die Gemeinde in allen religiösen Auseinandersetzungen letztlich auf sie berufen muss. Da die ursprünglichen Sprachen nicht dem ganzen Volk Gottes bekannt sind, das ein Recht auf die Schrift und ein Interesse an ihr hat und dem befohlen ist, sie in Gottesfurcht zu lesen und zu erforschen, muss sie in die gewöhnliche Sprache jedes Volkes, zu dem sie gelangt, übersetzt werden, damit das Wort Gottes in allen reichlich wohne, damit sie Gott in angemessener Weise verehren und sie durch Geduld und den Trost der Schrift Hoffnung haben.
        `,
        references: [
          { ref: "Röm 3,2", verse: bibleVerses["Röm 3,2"] },
          { ref: "Jes 8,20", verse: bibleVerses["Jes 8,20"] },
          { ref: "Apg 15,15", verse: bibleVerses["Apg 15,15"] },
          { ref: "Joh 5,39", verse: bibleVerses["Joh 5,39"] },
          { ref: "1Kor 14,6.9.11–12.24.28", verse: bibleVerses["1Kor 14,6.9.11–12.24.28"] },
          { ref: "Kol 3,16", verse: bibleVerses["Kol 3,16"] }
        ]
      },
      {
        id: "9",
        title: "Die Auslegung der Schrift",
        text: `
Die unfehlbare Richtlinie für die Auslegung der Schrift ist die Schrift selbst: Wenn es also eine Frage über den wahren und vollen Sinn einer Schriftstelle gibt (der nicht vielfältig, sondern eindeutig ist), muss er deshalb anhand anderer Stellen, die ihn deutlicher ausdrücken, untersucht werden.
        `,
        references: [
          { ref: "2Petr 1,20–21", verse: bibleVerses["2Petr 1,20–21"] },
          { ref: "Apg 15,15–16", verse: bibleVerses["Apg 15,15–16"] }
        ]
      },
      {
        id: "10",
        title: "Die höchste Autorität der Schrift",
        text: `
Der höchste Richter, durch den alle Religionsstreitigkeiten entschieden werden müssen und durch den alle Beschlüsse von Konzilien, Meinungen alter Schriftsteller, menschliche Lehren und persönliche Meinungen geprüft werden müssen und in dessen Urteil wir Ruhe finden sollen, kann kein anderer sein als die durch den Heiligen Geist eingegebene Heilige Schrift. Auf die so eingegebene Schrift ist unser Glaube letztlich gegründet.
        `,
        references: [
          { ref: "Mt 22,29.31", verse: bibleVerses["Mt 22,29.31"] },
          { ref: "Eph 2,20", verse: bibleVerses["Eph 2,20"] },
          { ref: "Apg 28,23", verse: bibleVerses["Apg 28,23"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 2
     ============================ */
  {
    chapter: "2",
    title: "Über Gott und die heilige Dreieinigkeit",
    points: [
      {
        id: "1",
        title: "Der eine wahre Gott",
        text: `
Der Herr, unser Gott, ist der einzige, lebendige und wahre Gott. Er erhält sich in und durch sich selbst und ist unendlich in seinem Dasein und seiner Vollkommenheit: Sein Wesen kann nur von ihm selbst begriffen werden. Er ist reinster Geist, unsichtbar, ohne Leib, einzelne Teile oder unbeherrschte Gemütsregungen, er allein ist unsterblich und wohnt in dem Licht, dem sich kein Mensch nähern kann. Er ist unwandelbar, unermesslich, ewig, unbegreiflich, allmächtig, in jeder Hinsicht unbegrenzt, absolut heilig, vollkommen weise, vollkommen frei und von nichts und niemand abhängig. Er bewirkt alles nach dem Rat seines eigenen unwandelbaren und höchst gerechten Willens zu seiner eigenen Ehre. Er ist voller Liebe, gnädig, barmherzig, geduldig, reich an Güte und Wahrheit. Er vergibt Unrecht, Übertretung und Sünde. Er belohnt diejenigen, die ihn eindringlich suchen, und gleichzeitig ist er absolut gerecht und furchtbar in seinen Urteilen, denn er hasst jegliche Sünde und wird den Schuldigen niemals freisprechen.
        `,
        references: [
          { ref: "1Kor 8,4.6", verse: bibleVerses["1Kor 8,4.6"] },
          { ref: "5Mose 6,4", verse: bibleVerses["5Mose 6,4"] },
          { ref: "Jer 10,10", verse: bibleVerses["Jer 10,10"] },
          { ref: "Jes 48,12", verse: bibleVerses["Jes 48,12"] },
          { ref: "2Mose 3,14", verse: bibleVerses["2Mose 3,14"] },
          { ref: "Joh 4,24", verse: bibleVerses["Joh 4,24"] },
          { ref: "1Tim 1,17", verse: bibleVerses["1Tim 1,17"] },
          { ref: "5Mose 4,15–16", verse: bibleVerses["5Mose 4,15–16"] },
          { ref: "Mal 3,6", verse: bibleVerses["Mal 3,6"] },
          { ref: "1Kön 8,27", verse: bibleVerses["1Kön 8,27"] },
          { ref: "Jer 23,23", verse: bibleVerses["Jer 23,23"] },
          { ref: "Ps 90,2", verse: bibleVerses["Ps 90,2"] },
          { ref: "1Mose 17,1", verse: bibleVerses["1Mose 17,1"] },
          { ref: "Jes 6,3", verse: bibleVerses["Jes 6,3"] },
          { ref: "Ps 115,3", verse: bibleVerses["Ps 115,3"] },
          { ref: "Jes 46,10", verse: bibleVerses["Jes 46,10"] },
          { ref: "Spr 16,4", verse: bibleVerses["Spr 16,4"] },
          { ref: "Röm 11,36", verse: bibleVerses["Röm 11,36"] },
          { ref: "2Mose 34,6–7", verse: bibleVerses["2Mose 34,6–7"] },
          { ref: "Hebr 11,6", verse: bibleVerses["Hebr 11,6"] },
          { ref: "Neh 9,32–33", verse: bibleVerses["Neh 9,32–33"] },
          { ref: "Ps 5,6–7", verse: bibleVerses["Ps 5,6–7"] },
          { ref: "2Mose 34,7", verse: bibleVerses["2Mose 34,7"] },
          { ref: "Nah 1,2–3", verse: bibleVerses["Nah 1,2–3"] }
        ]
      },
      {
        id: "2",
        title: "Gottes Selbstgenügsamkeit",
        text: `
Da Gott alles Leben, alle Herrlichkeit, alle Güte und allen Segen in sich selbst und aus sich selbst besitzt, ist er alleine in und für sich selbst allgenugsam. Er benötigt weder irgendeines der Geschöpfe, die er geschaffen hat, noch ist seine Ehre in irgendeiner Weise von ihnen abhängig, sondern er offenbart allein seine eigene Herrlichkeit in ihnen, an ihnen, durch sie und für sie. Er allein ist die Quelle allen Seins: Von ihm, durch ihn und zu ihm hin sind alle Dinge. Er hat uneingeschränkte Herrschaft über alle Geschöpfe, so dass er durch sie, für sie und an ihnen tun kann, was immer ihm gefällt. Vor seinen Augen sind alle Dinge offen und sichtbar. Sein Wissen ist unendlich, unfehlbar und unabhängig von seinen Geschöpfen. Daher ist für ihn nichts ungewiss oder unsicher: Er ist vollkommen heilig in seinen Ratschlüssen, in allen seinen Werken und in allen seinen Geboten. Ihm steht von Engeln und Menschen jegliche Verehrung zu, jeglicher Dienst oder Gehorsam, den sie als Geschöpfe dem Schöpfer schuldig sind, und was immer ihm sonst noch von ihnen zu fordern gefällt.
        `,
        references: [
          { ref: "Joh 5,26", verse: bibleVerses["Joh 5,26"] },
          { ref: "Ps 148,13", verse: bibleVerses["Ps 148,13"] },
          { ref: "Ps 119,68", verse: bibleVerses["Ps 119,68"] },
          { ref: "Hiob 22,2–3", verse: bibleVerses["Hiob 22,2–3"] },
          { ref: "Röm 11,34–36", verse: bibleVerses["Röm 11,34–36"] },
          { ref: "Dan 4,22.31–32", verse: bibleVerses["Dan 4,22.31–32"] },
          { ref: "Hebr 4,13", verse: bibleVerses["Hebr 4,13"] },
          { ref: "Hes 11,5", verse: bibleVerses["Hes 11,5"] },
          { ref: "Apg 15,18", verse: bibleVerses["Apg 15,18"] },
          { ref: "Ps 145,17", verse: bibleVerses["Ps 145,17"] },
          { ref: "Offb 5,12–14", verse: bibleVerses["Offb 5,12–14"] }
        ]
      },
      {
        id: "3",
        title: "Die heilige Dreieinigkeit",
        text: `
Dieses göttliche und unendliche Wesen besteht aus drei Seinsweisen, dem Vater, dem Wort (oder Sohn) und dem Heiligen Geist. Sie sind wesenseins, haben dieselbe Macht und sind in gleicher Weise ewig. Jeder von ihnen besitzt die volle göttliche Natur, dennoch ist diese Natur nicht geteilt: Der Vater ist von niemandem, er ist weder gezeugt noch geboren. Der Sohn ist von Ewigkeit her vom Vater gezeugt. Der Heilige Geist geht vom Vater und vom Sohn aus. Alle sind unendlich und ohne Anfang. Daher ist es nur ein Gott, der in seiner Natur und seinem Dasein nicht geteilt werden kann. Jedoch unterscheiden sie sich durch etliche charakteristische Eigenschaften und personhafte Beziehungen untereinander. Diese Lehre der Dreieinigkeit ist die Grundlage unserer ganzen Gemeinschaft mit Gott und unserer sorgenfreien Abhängigkeit von ihm.
        `,
        references: [
          { ref: "1Joh 5,7", verse: bibleVerses["1Joh 5,7"] },
          { ref: "Mt 28,19", verse: bibleVerses["Mt 28,19"] },
          { ref: "2Kor 13,13", verse: bibleVerses["2Kor 13,13"] },
          { ref: "2Mose 3,14", verse: bibleVerses["2Mose 3,14"] },
          { ref: "Joh 14,11", verse: bibleVerses["Joh 14,11"] },
          { ref: "1Kor 8,6", verse: bibleVerses["1Kor 8,6"] },
          { ref: "Joh 1,14.18", verse: bibleVerses["Joh 1,14.18"] },
          { ref: "Joh 15,26", verse: bibleVerses["Joh 15,26"] },
          { ref: "Gal 4,6", verse: bibleVerses["Gal 4,6"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 3
     ============================ */
  {
    chapter: "3",
    title: "Über den Ratschluss Gottes",
    points: [
      {
        id: "1",
        title: "Der ewige Ratschluss",
        text: `
Gott hat in sich selbst von aller Ewigkeit her durch den vollkommen weisen und heiligen Ratschluss seines eigenen Willens frei und unveränderbar alles, was immer geschieht, festgelegt; allerdings so, dass Gott dadurch weder der Urheber der Sünde noch in irgendeiner Weise an ihr mitbeteiligt ist. Auch wird dem Willen der Geschöpfe keine Gewalt angetan, noch ist die Freiheit oder die Möglichkeit zu zweiten Ursachen aufgehoben, sondern gerade darin festgelegt. Seine Weisheit zeigt sich dadurch, dass er alles bewirkt, und seine Kraft und Treue darin, dass er seinen Ratschluss ausführt.
        `,
        references: [
          { ref: "Jes 46,10", verse: bibleVerses["Jes 46,10"] },
          { ref: "Eph 1,11", verse: bibleVerses["Eph 1,11"] },
          { ref: "Hebr 6,17", verse: bibleVerses["Hebr 6,17"] },
          { ref: "Röm 9,15.18", verse: bibleVerses["Röm 9,15.18"] },
          { ref: "Jak 1,15.17", verse: bibleVerses["Jak 1,15.17"] },
          { ref: "1Joh 1,5", verse: bibleVerses["1Joh 1,5"] },
          { ref: "Apg 4,27–28", verse: bibleVerses["Apg 4,27–28"] },
          { ref: "Joh 19,11", verse: bibleVerses["Joh 19,11"] },
          { ref: "4Mose 23,19", verse: bibleVerses["4Mose 23,19"] },
          { ref: "Eph 1,3–5", verse: bibleVerses["Eph 1,3–5"] }
        ]
      },
      {
        id: "2",
        title: "Kein Vorherwissen als Grund",
        text: `
Obwohl Gott weiß, was immer in jeder nur vorstellbaren Situation geschehen mag oder geschehen kann, hat er dennoch nichts deshalb verordnet, weil er es als Zukunft oder als das, was unter den gegebenen Umständen geschehen würde, vorhersah.
        `,
        references: [
          { ref: "Apg 15,18", verse: bibleVerses["Apg 15,18"] },
          { ref: "Röm 9,11.13.16.18", verse: bibleVerses["Röm 9,11.13.16.18"] }
        ]
      },
      {
        id: "3",
        title: "Erwählung und Verwerfung",
        text: `
Durch den Ratschluss Gottes sind zur Offenbarung seiner Herrlichkeit einige Menschen und Engel durch Jesus Christus zu ewigem Leben auserwählt oder vorherbestimmt zum Preise seiner wunderbaren Gnade. Andere sind einem Leben in Sünde überlassen, zu ihrer gerechten Verurteilung, zum Preise seiner wunderbaren Gerechtigkeit.
        `,
        references: [
          { ref: "1Tim 5,21", verse: bibleVerses["1Tim 5,21"] },
          { ref: "Mt 25,41", verse: bibleVerses["Mt 25,41"] },
          { ref: "Eph 1,5–6", verse: bibleVerses["Eph 1,5–6"] },
          { ref: "Röm 9,22–23", verse: bibleVerses["Röm 9,22–23"] },
          { ref: "Jud 4", verse: bibleVerses["Jud 4"] }
        ]
      },
      {
        id: "4",
        title: "Die feste Zahl der Erwählten",
        text: `
Jeder dieser Engel und Menschen, die so auserwählt und vorherbestimmt sind, ist einzeln und unabänderlich ausersehen. Ihre Zahl ist so sicher und genau bestimmt, dass sie weder vergrößert noch verkleinert werden kann.
        `,
        references: [
          { ref: "2Tim 2,19", verse: bibleVerses["2Tim 2,19"] },
          { ref: "Joh 13,18", verse: bibleVerses["Joh 13,18"] }
        ]
      },
      {
        id: "5",
        title: "Die Erwählung der Menschen",
        text: `
Diejenigen der Menschheit, die zum Leben erwählt sind, hat Gott, ehe die Welt geschaffen wurde, gemäß seinem ewigen und unveränderlichen Vorsatz sowie seinem geheimen Ratschluss und dem Wohlgefallen seines Willens entsprechend in Christus zur ewigen Herrlichkeit auserwählt. Er tat dies aus seiner völlig freien Gnade und Liebe, ohne dass ihn irgendetwas im Geschöpf dazu gezwungen oder veranlasst hätte.
        `,
        references: [
          { ref: "Eph 1,4.9.11", verse: bibleVerses["Eph 1,4.9.11"] },
          { ref: "Röm 8,30", verse: bibleVerses["Röm 8,30"] },
          { ref: "2Tim 1,9", verse: bibleVerses["2Tim 1,9"] },
          { ref: "1Thess 5,9", verse: bibleVerses["1Thess 5,9"] },
          { ref: "Röm 9,13.16", verse: bibleVerses["Röm 9,13.16"] },
          { ref: "Eph 1,6.12", verse: bibleVerses["Eph 1,6.12"] }
        ]
      },
      {
        id: "6",
        title: "Die Mittel der Erwählung",
        text: `
Ebenso wie Gott die Erwählten zur Herrlichkeit bestimmt hat, hat er durch den ewigen und völlig freien Entschluss seines Willens auch alle dafür notwendigen Mittel vorherbestimmt. Deshalb sind die Erwählten, obwohl sie in Adam gefallen sind, durch Christus erlöst, wirksam zum Glauben an Christus berufen, durch seinen Geist, der zur gegebenen Zeit wirkt, gerechtfertigt, als Kinder angenommen, geheiligt und durch seine Kraft mittels des Glaubens zum Heil bewahrt. So ist auch niemand anders von Christus erlöst, wirksam berufen, gerechtfertigt, als Kind angenommen, geheiligt und gerettet als allein die Erwählten.
        `,
        references: [
          { ref: "1Petr 1,2", verse: bibleVerses["1Petr 1,2"] },
          { ref: "2Thess 2,13", verse: bibleVerses["2Thess 2,13"] },
          { ref: "1Thess 5,9–10", verse: bibleVerses["1Thess 5,9–10"] },
          { ref: "Röm 8,30", verse: bibleVerses["Röm 8,30"] },
          { ref: "2Thess 2,13", verse: bibleVerses["2Thess 2,13"] },
          { ref: "1Petr 1,5", verse: bibleVerses["1Petr 1,5"] },
          { ref: "Joh 10,26", verse: bibleVerses["Joh 10,26"] },
          { ref: "Joh 17,9", verse: bibleVerses["Joh 17,9"] },
          { ref: "Joh 6,64", verse: bibleVerses["Joh 6,64"] }
        ]
      },
      {
        id: "7",
        title: "Die Lehre von der Erwählung",
        text: `
Die Lehre dieses großen Geheimnisses der Erwählung muss mit besonderer Vorsicht und Sorgfalt behandelt werden, damit diejenigen, die den in Gottes Wort geoffenbarten Willen Gottes beachten und ihm gehorchen, im Blick auf die Gewissheit ihrer wirksamen Berufung ihrer ewigen Erwählung gewiss sein können. So soll diese Lehre zum Lob, zur Verehrung und zur Bewunderung Gottes führen sowie zu Demut, Fleiß und reichlichem Trost für alle, die aufrichtig dem Evangelium gehorchen.
        `,
        references: [
          { ref: "1Thess 1,4–5", verse: bibleVerses["1Thess 1,4–5"] },
          { ref: "2Petr 1,10", verse: bibleVerses["2Petr 1,10"] },
          { ref: "Eph 1,6", verse: bibleVerses["Eph 1,6"] },
          { ref: "Röm 11,33", verse: bibleVerses["Röm 11,33"] },
          { ref: "Röm 11,5–6", verse: bibleVerses["Röm 11,5–6"] },
          { ref: "Lk 10,20", verse: bibleVerses["Lk 10,20"] }
        ]
      }
    ]
  },
  /* ============================
     KAPITEL 4
     ============================ */
  {
    chapter: "4",
    title: "Über die Schöpfung",
    points: [
      {
        id: "1",
        title: "Die Schöpfung der Welt",
        text: `
Am Anfang gefiel es Gott, dem Vater, Sohn und Heiligen Geist, um die Herrlichkeit seiner ewigen Macht, Weisheit und Güte offenbarzumachen, die Welt und alle Dinge in ihr, sowohl das Sichtbare als auch das Unsichtbare, innerhalb von sechs Tagen zu erschaffen oder zu machen, und alles war sehr gut.
        `,
        references: [
          { ref: "Joh 1,2–3", verse: bibleVerses["Joh 1,2–3"] },
          { ref: "Hebr 1,2", verse: bibleVerses["Hebr 1,2"] },
          { ref: "Hiob 26,13", verse: bibleVerses["Hiob 26,13"] },
          { ref: "Röm 1,20", verse: bibleVerses["Röm 1,20"] },
          { ref: "Kol 1,16", verse: bibleVerses["Kol 1,16"] },
          { ref: "1Mose 2,1–2", verse: bibleVerses["1Mose 2,1–2"] }
        ]
      },
      {
        id: "2",
        title: "Die Schöpfung des Menschen",
        text: `
Nachdem Gott alle anderen Geschöpfe gemacht hatte, schuf er den Menschen als Mann und Frau mit vernünftigen und unsterblichen Seelen, befähigt zum Leben für Gott, wozu sie geschaffen worden waren. Sie waren nach Gottes Ebenbild, in Erkenntnis, Gerechtigkeit und wahrer Heiligkeit erschaffen. Ihnen war das Gesetz Gottes in ihre Herzen geschrieben, und sie waren fähig, es zu erfüllen, jedoch mit der Möglichkeit, es zu übertreten, wobei sie der Freiheit ihres eigenen Willens, der sich ändern konnte, überlassen waren.
        `,
        references: [
          { ref: "1Mose 1,27", verse: bibleVerses["1Mose 1,27"] },
          { ref: "1Mose 2,7", verse: bibleVerses["1Mose 2,7"] },
          { ref: "Pred 7,29", verse: bibleVerses["Pred 7,29"] },
          { ref: "1Mose 1,26", verse: bibleVerses["1Mose 1,26"] },
          { ref: "Röm 2,14–15", verse: bibleVerses["Röm 2,14–15"] },
          { ref: "1Mose 3,6", verse: bibleVerses["1Mose 3,6"] }
        ]
      },
      {
        id: "3",
        title: "Das Gebot im Garten",
        text: `
Neben dem Gesetz, das in ihre Herzen geschrieben worden war, erhielten sie das Gebot, nicht vom Baum der Erkenntnis des Guten und Bösen zu essen. Solange sie dies hielten, erfreuten sie sich ihrer Gemeinschaft mit Gott und herrschten über die Geschöpfe.
        `,
        references: [
          { ref: "1Mose 2,17", verse: bibleVerses["1Mose 2,17"] },
          { ref: "1Mose 3,8–10", verse: bibleVerses["1Mose 3,8–10"] },
          { ref: "1Mose 1,26.28", verse: bibleVerses["1Mose 1,26.28"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 5
     ============================ */
  {
    chapter: "5",
    title: "Über die göttliche Vorsehung",
    points: [
      {
        id: "1",
        title: "Die Erhaltung und Lenkung aller Dinge",
        text: `
Gott, der gute Schöpfer aller Dinge, erhält, leitet, lenkt und beherrscht in seiner unendlichen Macht und Weisheit alle Geschöpfe und Dinge — vom größten bis hin zum kleinsten — durch seine vollkommen weise und heilige Vorsehung zu dem Ziel, zu dem sie geschaffen wurden — seiner unfehlbaren vorherigen Kenntnis und des freien und unwandelbaren Rates seines eigenen Willens entsprechend —: dem Lob der Herrlichkeit seiner Weisheit, Macht, Gerechtigkeit, grenzenlosen Güte und Barmherzigkeit.
        `,
        references: [
          { ref: "Hebr 1,3", verse: bibleVerses["Hebr 1,3"] },
          { ref: "Hiob 38,11", verse: bibleVerses["Hiob 38,11"] },
          { ref: "Jes 46,10–11", verse: bibleVerses["Jes 46,10–11"] },
          { ref: "Ps 135,6", verse: bibleVerses["Ps 135,6"] },
          { ref: "Mt 10,29–31", verse: bibleVerses["Mt 10,29–31"] },
          { ref: "Eph 1,11", verse: bibleVerses["Eph 1,11"] }
        ]
      },
      {
        id: "2",
        title: "Die Art der Vorsehung",
        text: `
Auch wenn der vorherigen Kenntnis und dem Ratschluss Gottes, der ersten Ursache, gemäß alle Dinge unwandelbar und unfehlbar geschehen, so dass es gar nichts gibt, was irgendjemandem durch Zufall oder ohne seine Vorsehung zustößt, hat er doch in derselben Vorsehung angeordnet, dass sich all dies nach der Art der zweiten Ursache zuträgt, entweder zwangsläufig, frei oder zufällig.
        `,
        references: [
          { ref: "Apg 2,23", verse: bibleVerses["Apg 2,23"] },
          { ref: "Spr 16,33", verse: bibleVerses["Spr 16,33"] },
          { ref: "1Mose 8,22", verse: bibleVerses["1Mose 8,22"] }
        ]
      },
      {
        id: "3",
        title: "Der Gebrauch von Mitteln",
        text: `
Gott macht in seiner üblichen Vorsehung von Mitteln Gebrauch, jedoch ist er frei, wie es ihm gefällt, ohne sie, über sie hinweg und gegen sie zu wirken.
        `,
        references: [
          { ref: "Apg 27,31.44", verse: bibleVerses["Apg 27,31.44"] },
          { ref: "Jes 55,10–11", verse: bibleVerses["Jes 55,10–11"] },
          { ref: "Hos 1,7", verse: bibleVerses["Hos 1,7"] },
          { ref: "Röm 4,19–21", verse: bibleVerses["Röm 4,19–21"] },
          { ref: "Dan 3,27", verse: bibleVerses["Dan 3,27"] }
        ]
      },
      {
        id: "4",
        title: "Die Vorsehung und die Sünde",
        text: `
Die allmächtige Gewalt, unerforschliche Weisheit und grenzenlose Güte Gottes offenbaren sich in seiner Vorsehung bis dahin, dass sein festgelegter Ratschluss sich sogar auf den ersten Fall und alle anderen sündigen Taten von Engeln und Menschen erstreckt. Dies geschieht nicht lediglich durch Zulassung, obgleich er sie mit größter Weisheit und Gewalt einschränkt, und andererseits in vielfältiger Fügung zu seinem heiligen Zweck hin leitet und lenkt, sondern so, dass die Sündhaftigkeit ihrer Taten nur von den Geschöpfen ausgeht und nicht von Gott, der vollkommen heilig und gerecht ist und weder Sünde hervorbringen noch gutheißen kann.
        `,
        references: [
          { ref: "Röm 11,32–34", verse: bibleVerses["Röm 11,32–34"] },
          { ref: "2Sam 24,1", verse: bibleVerses["2Sam 24,1"] },
          { ref: "1Chr 21,1", verse: bibleVerses["1Chr 21,1"] },
          { ref: "1Mose 50,20", verse: bibleVerses["1Mose 50,20"] },
          { ref: "Jes 10,6–7.12", verse: bibleVerses["Jes 10,6–7.12"] },
          { ref: "2Kön 19,28", verse: bibleVerses["2Kön 19,28"] },
          { ref: "Ps 76,11", verse: bibleVerses["Ps 76,11"] },
          { ref: "Ps 50,21", verse: bibleVerses["Ps 50,21"] },
          { ref: "1Joh 2,16", verse: bibleVerses["1Joh 2,16"] }
        ]
      },
      {
        id: "5",
        title: "Die Vorsehung gegenüber den Erwählten",
        text: `
Der vollkommen weise, gerechte und gnädige Gott überlässt seine eigenen Kinder oftmals für eine bestimmte Zeit vielfältigen Versuchungen und der Verdorbenheit ihres eigenen Herzens, um sie für ihre früheren Sünden zu züchtigen oder ihnen die geheime Kraft der Verdorbenheit und Unaufrichtigkeit ihres Herzens klar zu machen, damit sie gedemütigt werden. Er tut dies auch, um sie in eine engere und beständigere Abhängigkeit von seiner Hilfe zu bringen. Er tut dies ferner, damit sie sich bei künftigen Anlässen zur Sünde vorsehen, und er tut dies aus weiteren gerechten und heiligen Gründen. Daher geschieht alles, was immer einem seiner Erwählten widerfährt, nach seiner Anordnung zu seiner Ehre und zu ihrem Besten.
        `,
        references: [
          { ref: "2Chr 32,25–26.31", verse: bibleVerses["2Chr 32,25–26.31"] },
          { ref: "2Sam 24,1", verse: bibleVerses["2Sam 24,1"] },
          { ref: "2Kor 12,7–9", verse: bibleVerses["2Kor 12,7–9"] },
          { ref: "Röm 8,28", verse: bibleVerses["Röm 8,28"] }
        ]
      },
      {
        id: "6",
        title: "Die Verhärtung der Gottlosen",
        text: `
Von denjenigen bösen und gottlosen Menschen, die Gott als der gerechte Richter wegen früherer Sünden blind macht und verhärtet, hält er nicht nur seine Gnade zurück — wodurch sie in ihrem Verständnis hätten erleuchtet werden können und die sich auf ihre Herzen hätte auswirken können — sondern nimmt auch manchmal die Gaben, die sie hatten, wieder zurück und überlässt sie solchen Angelegenheiten, durch die ihre Verdorbenheit Gelegenheit zum Sündigen findet. Dabei überlässt er sie ihren eigenen Lüsten, den Versuchungen der Welt und der Macht Satans, wobei es geschieht, dass sie sich sogar unter dem Einfluss derselben Mittel selbst verhärten, die Gott benutzt, um andere zu erweichen.
        `,
        references: [
          { ref: "Röm 1,24.26.28", verse: bibleVerses["Röm 1,24.26.28"] },
          { ref: "Röm 11,7–8", verse: bibleVerses["Röm 11,7–8"] },
          { ref: "5Mose 29,3", verse: bibleVerses["5Mose 29,3"] },
          { ref: "Mt 13,12", verse: bibleVerses["Mt 13,12"] },
          { ref: "5Mose 2,30", verse: bibleVerses["5Mose 2,30"] },
          { ref: "2Kön 8,12–13", verse: bibleVerses["2Kön 8,12–13"] },
          { ref: "Ps 81,12–13", verse: bibleVerses["Ps 81,12–13"] },
          { ref: "2Thess 2,10–12", verse: bibleVerses["2Thess 2,10–12"] },
          { ref: "2Mose 8,15.32", verse: bibleVerses["2Mose 8,15.32"] },
          { ref: "Jes 6,9–10", verse: bibleVerses["Jes 6,9–10"] },
          { ref: "1Petr 2,7–8", verse: bibleVerses["1Petr 2,7–8"] }
        ]
      },
      {
        id: "7",
        title: "Die besondere Vorsehung für die Gemeinde",
        text: `
So wie sich die Vorsehung Gottes im allgemeinen Sinne auf alle Geschöpfe erstreckt, so kümmert sie sich in ganz besonderer Weise um seine Gemeinde und bewegt alle Dinge zu ihrem Besten.
        `,
        references: [
          { ref: "1Tim 4,10", verse: bibleVerses["1Tim 4,10"] },
          { ref: "Am 9,8–9", verse: bibleVerses["Am 9,8–9"] },
          { ref: "Jes 43,3–5", verse: bibleVerses["Jes 43,3–5"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 6
     ============================ */
  {
    chapter: "6",
    title: "Über den Fall des Menschen, über Sünde und ihre Bestrafung",
    points: [
      {
        id: "1",
        title: "Der Fall des Menschen",
        text: `
Obwohl Gott den Menschen rechtschaffen und vollkommen geschaffen und ihm ein gerechtes Gesetz gegeben hatte — das ihm Leben versprach, wenn er es halten würde, und den Tod androhte, sollte er es brechen —, blieb er dennoch nicht lange in dieser ehrenvollen Stellung. Satan benutzte den Scharfsinn der Schlange, um Eva zu verführen und anschließend durch sie Adam zu verführen, der ohne jeglichen Zwang absichtlich das Gesetz ihrer Schöpfung und das ihnen gegebene Gebot übertrat, indem er die verbotene Frucht aß. Es gefiel Gott, dass er dies gemäß seinem heiligen und weisen Ratschluss zuließ, da er beabsichtigte, es zu seiner eigenen Ehre zu gebrauchen.
        `,
        references: [
          { ref: "1Mose 2,16–17", verse: bibleVerses["1Mose 2,16–17"] },
          { ref: "1Mose 3,12–13", verse: bibleVerses["1Mose 3,12–13"] },
          { ref: "2Kor 11,3", verse: bibleVerses["2Kor 11,3"] }
        ]
      },
      {
        id: "2",
        title: "Die Folgen des Sündenfalls",
        text: `
Durch diese Sünde fielen unsere ersten Eltern von ihrer ursprünglichen Gerechtigkeit und Gemeinschaft mit Gott ab und wir in ihnen, wodurch der Tod zu allen Menschen kam: Daher sind alle Menschen tot in Sünde, und alle Fähigkeiten und Teile von Leib und Seele sind vollkommen verdorben.
        `,
        references: [
          { ref: "Röm 3,23", verse: bibleVerses["Röm 3,23"] },
          { ref: "Röm 5,12", verse: bibleVerses["Röm 5,12"] },
          { ref: "Tit 1,15", verse: bibleVerses["Tit 1,15"] },
          { ref: "1Mose 6,5", verse: bibleVerses["1Mose 6,5"] },
          { ref: "Jer 17,9", verse: bibleVerses["Jer 17,9"] },
          { ref: "Röm 3,10–19", verse: bibleVerses["Röm 3,10–19"] }
        ]
      },
      {
        id: "3",
        title: "Die Weitergabe der Sünde",
        text: `
Da sie der Anfang der Menschheit sind und durch Gottes Anordnung für und an Stelle der ganzen Menschheit stehen, wurde all ihren Nachkommen, die von ihnen durch gewöhnliche Fortpflanzung abstammen, die Schuld der Sünde zugeschrieben und die verdorbene Natur auf sie übertragen. Sie werden nun in Sünde geboren und sind von Natur aus Kinder des Zorns, Sklaven der Sünde, dem Tod und allen anderen geistlichen, zeitlichen und ewigen Nöten unterworfen, es sei denn, der Herr Jesus befreit sie.
        `,
        references: [
          { ref: "Röm 5,12–19", verse: bibleVerses["Röm 5,12–19"] },
          { ref: "1Kor 15,21–22.45.49", verse: bibleVerses["1Kor 15,21–22.45.49"] },
          { ref: "Ps 51,7", verse: bibleVerses["Ps 51,7"] },
          { ref: "Hiob 14,4", verse: bibleVerses["Hiob 14,4"] },
          { ref: "Eph 2,3", verse: bibleVerses["Eph 2,3"] },
          { ref: "Röm 6,20", verse: bibleVerses["Röm 6,20"] },
          { ref: "Röm 5,12", verse: bibleVerses["Röm 5,12"] },
          { ref: "Hebr 2,14", verse: bibleVerses["Hebr 2,14"] },
          { ref: "1Thess 1,10", verse: bibleVerses["1Thess 1,10"] }
        ]
      },
      {
        id: "4",
        title: "Die völlige Verderbtheit des Menschen",
        text: `
Aus dieser ursprünglichen Verdorbenheit, durch die wir völlig untauglich, unfähig zu und feindlich gegenüber allem Guten sind und vielmehr zu allem Bösen neigen, rühren alle gegenwärtigen Übertretungen her.
        `,
        references: [
          { ref: "Röm 8,7", verse: bibleVerses["Röm 8,7"] },
          { ref: "Kol 1,21", verse: bibleVerses["Kol 1,21"] },
          { ref: "Jak 1,14–15", verse: bibleVerses["Jak 1,14–15"] },
          { ref: "Mt 15,19", verse: bibleVerses["Mt 15,19"] }
        ]
      },
      {
        id: "5",
        title: "Die bleibende Sündhaftigkeit im Gläubigen",
        text: `
Die Verdorbenheit der Natur bleibt während dieses Lebens in denen, die wiedergeboren sind; und obgleich sie durch Christus vergeben und getötet ist, ist dennoch sie selbst und ihr wesentlicher Beweggrund echte und wirkliche Sünde.
        `,
        references: [
          { ref: "Röm 7,18.23", verse: bibleVerses["Röm 7,18.23"] },
          { ref: "Pred 7,20", verse: bibleVerses["Pred 7,20"] },
          { ref: "1Joh 1,8", verse: bibleVerses["1Joh 1,8"] },
          { ref: "Röm 7,24–25", verse: bibleVerses["Röm 7,24–25"] },
          { ref: "Gal 5,17", verse: bibleVerses["Gal 5,17"] }
        ]
      }
    ]
  },
  /* ============================
     KAPITEL 7
     ============================ */
  {
    chapter: "7",
    title: "Über Gottes Bund",
    points: [
      {
        id: "1",
        title: "Die Notwendigkeit des Bundes",
        text: `
Der Abstand zwischen Gott und dem Geschöpf ist so gewaltig, dass vernunftbegabte Geschöpfe, auch wenn sie ihm als ihrem Schöpfer Gehorsam schuldig sind, dennoch den Lohn des Lebens niemals anders als durch Gottes freiwillige Herablassung erlangen können. Es gefiel ihm, diese durch das Mittel des Bundes zum Ausdruck zu bringen.
        `,
        references: [
          { ref: "Lk 17,10", verse: bibleVerses["Lk 17,10"] },
          { ref: "Hiob 35,7–8", verse: bibleVerses["Hiob 35,7–8"] }
        ]
      },
      {
        id: "2",
        title: "Der Bund der Gnade",
        text: `
Nachdem sich der Mensch durch seinen Fall selbst unter den Fluch des Gesetzes gebracht hatte, gefiel es dem Herrn ferner, einen Bund der Gnade einzurichten, in dem er Sündern Leben und Erlösung durch Jesus Christus frei anbietet. Er fordert von ihnen, dass sie an ihn glauben, um erlöst zu werden, und verspricht all denen, die zum ewigen Leben bestimmt sind, seinen Heiligen Geist, um sie zum Glauben willig und fähig zu machen.
        `,
        references: [
          { ref: "1Mose 2,17", verse: bibleVerses["1Mose 2,17"] },
          { ref: "Gal 3,10", verse: bibleVerses["Gal 3,10"] },
          { ref: "Röm 3,20–21", verse: bibleVerses["Röm 3,20–21"] },
          { ref: "Röm 8,3", verse: bibleVerses["Röm 8,3"] },
          { ref: "Mk 16,15–16", verse: bibleVerses["Mk 16,15–16"] },
          { ref: "Joh 3,16", verse: bibleVerses["Joh 3,16"] },
          { ref: "Hes 36,26–27", verse: bibleVerses["Hes 36,26–27"] },
          { ref: "Joh 6,44–45", verse: bibleVerses["Joh 6,44–45"] },
          { ref: "Ps 110,3", verse: bibleVerses["Ps 110,3"] }
        ]
      },
      {
        id: "3",
        title: "Die Offenbarung des Bundes der Gnade",
        text: `
Dieser Bund ist im Evangelium geoffenbart, zuerst an Adam in der Verheißung der Erlösung durch den Nachkommen der Frau und anschließend in weiteren Schritten, bis die völlige Enthüllung darüber im Neuen Testament abgeschlossen war. Dieser Bund beruht auf dem ewigen Bundesschluss, der zwischen dem Vater und dem Sohn über die Errettung der Erwählten bestand. Nur durch die Gnade dieses Bundes erhielt die ganze Nachkommenschaft des gefallenen Adam, die jemals errettet worden ist, Leben und selige Unsterblichkeit, da der Mensch jetzt in keinster Weise unter den Voraussetzungen, die Adam in seinem Stand der Unschuld besaß, von Gott angenommen werden kann.
        `,
        references: [
          { ref: "1Mose 3,15", verse: bibleVerses["1Mose 3,15"] },
          { ref: "Hebr 1,1", verse: bibleVerses["Hebr 1,1"] },
          { ref: "2Tim 1,9", verse: bibleVerses["2Tim 1,9"] },
          { ref: "Tit 1,2", verse: bibleVerses["Tit 1,2"] },
          { ref: "Hebr 11,6.13", verse: bibleVerses["Hebr 11,6.13"] },
          { ref: "Röm 4,1–2", verse: bibleVerses["Röm 4,1–2"] },
          { ref: "Apg 4,12", verse: bibleVerses["Apg 4,12"] },
          { ref: "Joh 8,56", verse: bibleVerses["Joh 8,56"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 8
     ============================ */
  {
    chapter: "8",
    title: "Über Christus, den Mittler",
    points: [
      {
        id: "1",
        title: "Die Erwählung Christi zum Mittler",
        text: `
Es gefiel Gott in seinem ewigen Vorsatz, den Herrn Jesus, seinen eingeborenen Sohn — gemäß des ewigen Bundes, der zwischen beiden geschlossen wurde — zu erwählen und zu bestimmen, dass er Mittler zwischen Gott und Menschen, Prophet, Priester und König, Haupt und Erlöser seiner Gemeinde, Erbe aller Dinge und Richter der Welt sei. Ihm hat er von Ewigkeit her ein Volk gegeben, das seine Nachkommenschaft sein sollte und von ihm zu seiner Zeit erlöst, berufen, gerechtfertigt, geheiligt und verherrlicht werden sollte.
        `,
        references: [
          { ref: "Jes 42,1", verse: bibleVerses["Jes 42,1"] },
          { ref: "1Petr 1,19–20", verse: bibleVerses["1Petr 1,19–20"] },
          { ref: "Apg 3,22", verse: bibleVerses["Apg 3,22"] },
          { ref: "Hebr 5,5–6", verse: bibleVerses["Hebr 5,5–6"] },
          { ref: "Ps 2,6", verse: bibleVerses["Ps 2,6"] },
          { ref: "Lk 1,33", verse: bibleVerses["Lk 1,33"] },
          { ref: "Eph 5,23", verse: bibleVerses["Eph 5,23"] },
          { ref: "Hebr 1,2", verse: bibleVerses["Hebr 1,2"] },
          { ref: "Apg 17,31", verse: bibleVerses["Apg 17,31"] },
          { ref: "Jes 53,10", verse: bibleVerses["Jes 53,10"] },
          { ref: "Joh 17,6", verse: bibleVerses["Joh 17,6"] },
          { ref: "Röm 8,30", verse: bibleVerses["Röm 8,30"] }
        ]
      },
      {
        id: "2",
        title: "Die Person Christi",
        text: `
Der Sohn Gottes, die zweite Person in der Dreieinigkeit, ist wahrer und ewiger Gott, der Abglanz der Herrlichkeit des Vaters, von einem Wesen und gleich mit dem, der die Welt erschaffen hat und der alle Dinge, die er gemacht hat, erhält und regiert. Als die Fülle der Zeit gekommen war, nahm er die menschliche Natur mit all ihren wesensmäßigen Eigenschaften und allgemeinen Schwachheiten an, jedoch ohne Sünde. Er wurde durch den Heiligen Geist im Leib der Jungfrau Maria empfangen. Dies geschah, indem der Heilige Geist auf sie herniederkam und die Kraft des Höchsten sie überschattete. Auf diese Weise wurde er von einer Frau aus dem Stamme Juda aus der Nachkommenschaft Abrahams und Davids geboren, wie es die Schrift angekündigt hatte. So sind die beiden vollständigen, vollkommenen und unterschiedlichen Naturen untrennbar in einer Person vereinigt, ohne Verwandlung, Zusammensetzung oder Vermischung. Diese Person ist wahrer Gott und wahrer Mensch, doch nur ein Christus, der einzige Mittler zwischen Gott und Menschen.
        `,
        references: [
          { ref: "Joh 1,1.14", verse: bibleVerses["Joh 1,1.14"] },
          { ref: "Gal 4,4", verse: bibleVerses["Gal 4,4"] },
          { ref: "Röm 8,3", verse: bibleVerses["Röm 8,3"] },
          { ref: "Hebr 2,14.16–17", verse: bibleVerses["Hebr 2,14.16–17"] },
          { ref: "Hebr 4,15", verse: bibleVerses["Hebr 4,15"] },
          { ref: "Lk 1,27.31.35", verse: bibleVerses["Lk 1,27.31.35"] },
          { ref: "Röm 9,5", verse: bibleVerses["Röm 9,5"] },
          { ref: "1Tim 2,5", verse: bibleVerses["1Tim 2,5"] }
        ]
      },
      {
        id: "3",
        title: "Die Ausrüstung Christi",
        text: `
Der Herr Jesus Christus — auf diese Weise in seiner menschlichen mit seiner göttlichen Natur in der Person des Sohnes vereinigt — wurde über die Maßen geheiligt und mit dem Heiligen Geist gesalbt. In ihm sind alle Schätze der Weisheit und Erkenntnis. Es gefiel dem Vater, dass in ihm alle Fülle wohnen sollte, mit dem Ziel, dass er — heilig, unschuldig, unbefleckt und voller Gnade und Wahrheit — völlig ausgerüstet sei, um das Amt des Mittlers und Bürgen auszuführen. Er hatte dieses Amt nicht selbst ergriffen, sondern wurde von seinem Vater dazu berufen. Dieser hat ihm auch alle Macht und alles Gericht in die Hand gegeben und ihn beauftragt, diese auszuführen.
        `,
        references: [
          { ref: "Ps 45,8", verse: bibleVerses["Ps 45,8"] },
          { ref: "Apg 10,38", verse: bibleVerses["Apg 10,38"] },
          { ref: "Joh 3,34", verse: bibleVerses["Joh 3,34"] },
          { ref: "Kol 2,3", verse: bibleVerses["Kol 2,3"] },
          { ref: "Kol 1,19", verse: bibleVerses["Kol 1,19"] },
          { ref: "Hebr 7,26", verse: bibleVerses["Hebr 7,26"] },
          { ref: "Joh 1,14", verse: bibleVerses["Joh 1,14"] },
          { ref: "Hebr 7,22", verse: bibleVerses["Hebr 7,22"] },
          { ref: "Hebr 5,5", verse: bibleVerses["Hebr 5,5"] },
          { ref: "Joh 5,22.27", verse: bibleVerses["Joh 5,22.27"] },
          { ref: "Mt 28,18", verse: bibleVerses["Mt 28,18"] },
          { ref: "Apg 2,36", verse: bibleVerses["Apg 2,36"] }
        ]
      },
      {
        id: "4",
        title: "Das Werk Christi",
        text: `
Dieses Amt hat der Herr Jesus völlig freiwillig angenommen. Um es auszuführen, wurde er unter das Gesetz getan. Er erfüllte es vollständig. Er erlitt die Strafe, die wir verdient haben, die wir erdulden und erleiden hätten sollen, indem er für uns zur Sünde und zum Fluch gemacht wurde. Er erduldete die bittersten Qualen an seiner Seele und die schmerzhaftesten Leiden an seinem Leib. Er wurde gekreuzigt und starb. Er blieb im Zustand des Todes, aber verweste nicht. Am dritten Tag ist er mit demselben Leib, in dem er gelitten hatte, von den Toten auferstanden, mit diesem fuhr er auch in den Himmel auf, sitzt dort zur Rechten seines Vaters und legt Fürsprache ein. Von dort wird er wiederkommen, um Menschen und Engel am Ende der Welt zu richten.
        `,
        references: [
          { ref: "Ps 40,8–9", verse: bibleVerses["Ps 40,8–9"] },
          { ref: "Hebr 10,5–11", verse: bibleVerses["Hebr 10,5–11"] },
          { ref: "Joh 10,18", verse: bibleVerses["Joh 10,18"] },
          { ref: "Gal 4,4", verse: bibleVerses["Gal 4,4"] },
          { ref: "Mt 3,15", verse: bibleVerses["Mt 3,15"] },
          { ref: "Gal 3,13", verse: bibleVerses["Gal 3,13"] },
          { ref: "Jes 53,6", verse: bibleVerses["Jes 53,6"] },
          { ref: "1Petr 3,18", verse: bibleVerses["1Petr 3,18"] },
          { ref: "2Kor 5,21", verse: bibleVerses["2Kor 5,21"] },
          { ref: "Mt 26,37–38", verse: bibleVerses["Mt 26,37–38"] },
          { ref: "Lk 22,44", verse: bibleVerses["Lk 22,44"] },
          { ref: "Mt 27,46", verse: bibleVerses["Mt 27,46"] },
          { ref: "Apg 13,37", verse: bibleVerses["Apg 13,37"] },
          { ref: "Joh 20,25.27", verse: bibleVerses["Joh 20,25.27"] },
          { ref: "1Kor 15,3–4", verse: bibleVerses["1Kor 15,3–4"] },
          { ref: "Mk 16,19", verse: bibleVerses["Mk 16,19"] },
          { ref: "Apg 1,9–11", verse: bibleVerses["Apg 1,9–11"] },
          { ref: "Röm 8,34", verse: bibleVerses["Röm 8,34"] },
          { ref: "Hebr 9,24", verse: bibleVerses["Hebr 9,24"] },
          { ref: "Apg 10,42", verse: bibleVerses["Apg 10,42"] },
          { ref: "Röm 14,9–10", verse: bibleVerses["Röm 14,9–10"] },
          { ref: "Apg 1,10", verse: bibleVerses["Apg 1,10"] }
        ]
      },
      {
        id: "5",
        title: "Das vollbrachte Werk Christi",
        text: `
Durch seinen vollkommenen Gehorsam und das Opfer seiner selbst, das er durch den ewigen Geist ein für alle Mal Gott darbrachte, hat der Herr Jesus der Gerechtigkeit Gottes völlige Genüge geleistet. Damit hat er die Versöhnung bewirkt und ein ewiges Erbe im Himmelreich für alle diejenigen erworben, welche ihm der Vater gegeben hat.
        `,
        references: [
          { ref: "Hebr 9,14", verse: bibleVerses["Hebr 9,14"] },
          { ref: "Hebr 10,14", verse: bibleVerses["Hebr 10,14"] },
          { ref: "Röm 3,25–26", verse: bibleVerses["Röm 3,25–26"] },
          { ref: "Joh 17,2", verse: bibleVerses["Joh 17,2"] },
          { ref: "Hebr 9,15", verse: bibleVerses["Hebr 9,15"] }
        ]
      },
      {
        id: "6",
        title: "Die Erlösung im Alten Testament",
        text: `
Obwohl der Preis für die Erlösung von Christus vor seiner Menschwerdung nicht wirklich bezahlt worden war, so hatten die Erwählten doch teil an dessen Geltung, Wirksamkeit und Nutzen zu allen aufeinanderfolgenden Zeiten seit Beginn der Welt, in und durch jene Verheißungen, Vorbilder und Opfer, in denen er geoffenbart wurde und die darauf hindeuteten, dass er der Nachkomme der Frau sei, der den Kopf der Schlange zertreten sollte, und das Lamm, das von Grundlegung der Welt an geschlachtet worden ist, derselbe gestern und heute und in Ewigkeit.
        `,
        references: [
          { ref: "1Kor 4,10", verse: bibleVerses["1Kor 4,10"] },
          { ref: "Hebr 4,2", verse: bibleVerses["Hebr 4,2"] },
          { ref: "1Petr 1,10–11", verse: bibleVerses["1Petr 1,10–11"] },
          { ref: "Offb 13,8", verse: bibleVerses["Offb 13,8"] },
          { ref: "Hebr 13,8", verse: bibleVerses["Hebr 13,8"] }
        ]
      },
      {
        id: "7",
        title: "Die zwei Naturen Christi",
        text: `
Christus handelt im Werk der Mittlerschaft nach beiden Naturen, durch jede Natur so, wie es ihr selbst entspricht; doch wegen der Einheit der Person wird in der Schrift manchmal das, was zur einen Natur gehört, der Person zugeschrieben, die als die andere Natur bezeichnet wird.
        `,
        references: [
          { ref: "Joh 3,13", verse: bibleVerses["Joh 3,13"] },
          { ref: "Apg 20,28", verse: bibleVerses["Apg 20,28"] }
        ]
      },
      {
        id: "8",
        title: "Die Anwendung der Erlösung",
        text: `
Auf all diejenigen, für welche Christus die ewige Erlösung erworben hat, wendet er sie sicher und wirksam an und lässt sie daran teilhaben. Dabei tritt er für sie als Fürsprecher ein, vereint sie durch seinen Geist mit sich selbst, offenbart ihnen in und durch sein Wort das Geheimnis der Erlösung, bringt sie dazu, zu glauben und gehorsam zu sein, regiert ihre Herzen durch sein Wort und seinen Geist und überwindet durch seine allmächtige Kraft und Weisheit alle ihre Feinde. Dies tut er auf eine Art und Weise, die völlig seiner wunderbaren und unerforschlichen Fügung entspricht, und sämtlich aus freier und vollkommener Gnade, ohne dass irgendeine Voraussetzung, um die Gnade herbeizuführen, in den Erlösten vorhergesehen wurde.
        `,
        references: [
          { ref: "Joh 6,37", verse: bibleVerses["Joh 6,37"] },
          { ref: "Joh 10,15–16", verse: bibleVerses["Joh 10,15–16"] },
          { ref: "Joh 17,9", verse: bibleVerses["Joh 17,9"] },
          { ref: "Röm 5,10", verse: bibleVerses["Röm 5,10"] },
          { ref: "Joh 17,6", verse: bibleVerses["Joh 17,6"] },
          { ref: "Eph 1,9", verse: bibleVerses["Eph 1,9"] },
          { ref: "1Joh 5,20", verse: bibleVerses["1Joh 5,20"] },
          { ref: "Röm 8,9.14", verse: bibleVerses["Röm 8,9.14"] },
          { ref: "Ps 110,1", verse: bibleVerses["Ps 110,1"] },
          { ref: "1Kor 15,25–26", verse: bibleVerses["1Kor 15,25–26"] },
          { ref: "Joh 3,8", verse: bibleVerses["Joh 3,8"] },
          { ref: "Eph 1,8", verse: bibleVerses["Eph 1,8"] }
        ]
      },
      {
        id: "9",
        title: "Die Einzigartigkeit des Mittleramtes",
        text: `
Dieses Amt des Mittlers zwischen Gott und Menschen hat allein Christus inne, denn er ist der Prophet, Priester und König der Gemeinde Gottes. Es darf weder ganz noch teilweise von ihm auf irgend jemand anderen übertragen werden.
        `,
        references: [
          { ref: "1Tim 2,5", verse: bibleVerses["1Tim 2,5"] }
        ]
      },
      {
        id: "10",
        title: "Die Notwendigkeit der drei Ämter",
        text: `
Diese Anzahl und Anordnung von Ämtern ist notwendig. Denn hinsichtlich unserer Unwissenheit brauchen wir sein prophetisches Amt. Hinsichtlich unserer Entfremdung von Gott und der Unvollkommenheit selbst unserer besten Dienste brauchen wir sein priesterliches Amt, um uns zu versöhnen und uns Gott annehmbar darzustellen. Hinsichtlich unserer Abneigung und vollkommenen Unfähigkeit, zu Gott umzukehren, und zu unserem Schutz und unserer Sicherheit vor unseren geistlichen Feinden brauchen wir sein königliches Amt, damit er uns überführt, unterwirft, zu sich zieht, aufrecht erhält, rettet und für sein himmlisches Königreich bewahrt.
        `,
        references: [
          { ref: "Joh 1,18", verse: bibleVerses["Joh 1,18"] },
          { ref: "Kol 1,21", verse: bibleVerses["Kol 1,21"] },
          { ref: "Gal 5,17", verse: bibleVerses["Gal 5,17"] },
          { ref: "Joh 16,8", verse: bibleVerses["Joh 16,8"] },
          { ref: "Ps 110,3", verse: bibleVerses["Ps 110,3"] },
          { ref: "Lk 1,74–75", verse: bibleVerses["Lk 1,74–75"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 9
     ============================ */
  {
    chapter: "9",
    title: "Über den freien Willen",
    points: [
      {
        id: "1",
        title: "Die natürliche Freiheit",
        text: `
Gott hat den Willen des Menschen mit der natürlichen Freiheit und Fähigkeit dazu versehen, nach seiner eigenen Wahl zu handeln, die nicht aufgezwungen noch durch irgendeinen Zwang der Natur dazu bestimmt ist, Gutes oder Böses zu tun.
        `,
        references: [
          { ref: "Mt 17,12", verse: bibleVerses["Mt 17,12"] },
          { ref: "Jak 1,14", verse: bibleVerses["Jak 1,14"] },
          { ref: "5Mose 30,19", verse: bibleVerses["5Mose 30,19"] }
        ]
      },
      {
        id: "2",
        title: "Im Stand der Unschuld",
        text: `
In seinem Stand der Unschuld besaß der Mensch die Freiheit und Fähigkeit dazu, das zu wollen und zu tun, was vor Gott gut und wohlgefällig ist, er war aber nicht darauf festgelegt, so dass er davon abfallen konnte.
        `,
        references: [
          { ref: "Pred 7,29", verse: bibleVerses["Pred 7,29"] },
          { ref: "1Mose 3,6", verse: bibleVerses["1Mose 3,6"] }
        ]
      },
      {
        id: "3",
        title: "Im Stand der Sünde",
        text: `
Durch seinen Fall in einen Stand der Sünde, hat der Mensch jegliche Willensfähigkeit zu etwas geistlich Gutem, das mit der Erlösung verbunden ist, verloren, so dass ein natürlicher Mensch — der gegenüber diesem Guten völlig abgeneigt und tot in Sünde ist — unfähig dazu ist, sich durch seine eigene Kraft selbst zu bekehren oder sich selbst darauf vorzubereiten.
        `,
        references: [
          { ref: "Röm 5,6", verse: bibleVerses["Röm 5,6"] },
          { ref: "Röm 8,7", verse: bibleVerses["Röm 8,7"] },
          { ref: "Eph 2,1.5", verse: bibleVerses["Eph 2,1.5"] },
          { ref: "Tit 3,3–5", verse: bibleVerses["Tit 3,3–5"] },
          { ref: "Joh 6,44", verse: bibleVerses["Joh 6,44"] }
        ]
      },
      {
        id: "4",
        title: "Im Stand der Gnade",
        text: `
Wenn Gott einen Sünder bekehrt und ihn in den Stand der Gnade versetzt, befreit er ihn von der natürlichen Knechtschaft unter die Sünde und macht ihn allein durch seine Gnade dazu fähig, frei das zu wollen und zu tun, was geistlich gut ist; jedoch so, dass er wegen seiner bleibenden Verdorbenheit weder vollkommen noch ausschließlich das will, was gut ist, sondern er auch das will, was böse ist.
        `,
        references: [
          { ref: "Kol 1,13", verse: bibleVerses["Kol 1,13"] },
          { ref: "Joh 8,36", verse: bibleVerses["Joh 8,36"] },
          { ref: "Phil 2,13", verse: bibleVerses["Phil 2,13"] },
          { ref: "Röm 7,15.18–19.21.23", verse: bibleVerses["Röm 7,15.18–19.21.23"] }
        ]
      },
      {
        id: "5",
        title: "Im Stand der Herrlichkeit",
        text: `
Der Wille des Menschen ist erst im Stand der Herrlichkeit vollkommen und unwandelbar frei, allein das Gute zu wollen.
        `,
        references: [
          { ref: "Eph 4,13", verse: bibleVerses["Eph 4,13"] }
        ]
      }
    ]
  },
    /* ============================
     KAPITEL 10
     ============================ */
  {
    chapter: "10",
    title: "Über die wirksame Berufung",
    points: [
      {
        id: "1",
        title: "Das Wesen der wirksamen Berufung",
        text: `
Es gefällt Gott, diejenigen, die er zum Leben vorherbestimmt hat, zu der von ihm bestimmten und ihm angenehmen Zeit wirksam durch sein Wort und seinen Geist aus dem Stand der Sünde und des Todes, in dem sie von Natur aus sind, zur Gnade und Erlösung durch Jesus Christus zu berufen, indem er ihren Verstand geistlich und zum Heil erleuchtet, damit sie die göttlichen Dinge verstehen können; indem er ihr steinernes Herz wegnimmt und ihnen ein fleischernes Herz gibt. Dadurch erneuert er ihren Willen und bestimmt sie durch seine allmächtige Kraft zum Guten, und er zieht sie wirksam zu Jesus Christus, doch so, dass sie völlig freiwillig kommen, da sie durch seine Gnade dazu gebracht worden sind, es selbst zu wollen.
        `,
        references: [
          { ref: "Röm 8,30", verse: bibleVerses["Röm 8,30"] },
          { ref: "Röm 11,7", verse: bibleVerses["Röm 11,7"] },
          { ref: "Eph 1,10–11", verse: bibleVerses["Eph 1,10–11"] },
          { ref: "2Thess 2,13–14", verse: bibleVerses["2Thess 2,13–14"] },
          { ref: "Eph 2,1–6", verse: bibleVerses["Eph 2,1–6"] },
          { ref: "Apg 26,18", verse: bibleVerses["Apg 26,18"] },
          { ref: "Eph 1,17–18", verse: bibleVerses["Eph 1,17–18"] },
          { ref: "Hes 36,26", verse: bibleVerses["Hes 36,26"] },
          { ref: "5Mose 30,6", verse: bibleVerses["5Mose 30,6"] },
          { ref: "Hes 36,27", verse: bibleVerses["Hes 36,27"] },
          { ref: "Eph 1,19", verse: bibleVerses["Eph 1,19"] },
          { ref: "Ps 110,3", verse: bibleVerses["Ps 110,3"] },
          { ref: "Hld 1,4", verse: bibleVerses["Hld 1,4"] }
        ]
      },
      {
        id: "2",
        title: "Die Gnade der Berufung",
        text: `
Diese wirksame Berufung geschieht allein durch die freie und besondere Gnade Gottes, keinesfalls durch irgendetwas, das im Menschen vorausgesehen wurde, noch durch irgendeine Fähigkeit oder Tätigkeit im Menschen, die mit seiner besonderen Gnade zusammenwirken würde. Der Mensch ist dabei vollkommen passiv, da er in Sünden und Übertretungen tot ist, bis er vom Heiligen Geist belebt und erneuert wird. Dadurch ist er dazu fähig, diesem Ruf zu folgen und die darin angebotene und vermittelte Gnade anzunehmen, und das durch keine geringere Macht als die, die Christus von den Toten auferweckte.
        `,
        references: [
          { ref: "2Tim 1,9", verse: bibleVerses["2Tim 1,9"] },
          { ref: "Eph 2,8", verse: bibleVerses["Eph 2,8"] },
          { ref: "1Kor 2,14", verse: bibleVerses["1Kor 2,14"] },
          { ref: "Eph 2,5", verse: bibleVerses["Eph 2,5"] },
          { ref: "Joh 5,25", verse: bibleVerses["Joh 5,25"] },
          { ref: "Eph 1,19–20", verse: bibleVerses["Eph 1,19–20"] }
        ]
      },
      {
        id: "3",
        title: "Berufung von Unmündigen und Unfähigen",
        text: `
Erwählte Kleinkinder, die in ihrer Kindheit sterben, sind durch Christus mittels des Geistes wiedergeboren und erlöst. Er wirkt wann, wo und wie es ihm gefällt. Ebenso verhält es sich auch bei allen anderen erwählten Personen, die nicht in der Lage sind, äußerlich durch den Dienst des Wortes berufen zu werden.
        `,
        references: [
          { ref: "Joh 3,3.5–6", verse: bibleVerses["Joh 3,3.5–6"] },
          { ref: "Joh 3,8", verse: bibleVerses["Joh 3,8"] }
        ]
      },
      {
        id: "4",
        title: "Die Nicht-Erwählten",
        text: `
Andere, die nicht erwählt sind, — auch wenn sie durch den Dienst des Wortes gerufen werden und vielleicht einige allgemeine Wirkungen des Geistes erfahren, jedoch nicht wirksam vom Vater gezogen werden — wollen noch können weder wirklich zu Christus kommen und können daher nicht gerettet werden. Noch viel weniger können Menschen, die den christlichen Glauben nicht annehmen, errettet werden, auch wenn sie noch so gewissenhaft ihr Leben im Licht der natürlichen Offenbarung und nach dem Gesetz ihrer Religion führen.
        `,
        references: [
          { ref: "Mt 22,14", verse: bibleVerses["Mt 22,14"] },
          { ref: "Mt 13,20–21", verse: bibleVerses["Mt 13,20–21"] },
          { ref: "Hebr 6,4–5", verse: bibleVerses["Hebr 6,4–5"] },
          { ref: "Joh 6,44–45.65", verse: bibleVerses["Joh 6,44–45.65"] },
          { ref: "1Joh 2,24–25", verse: bibleVerses["1Joh 2,24–25"] },
          { ref: "Apg 4,12", verse: bibleVerses["Apg 4,12"] },
          { ref: "Joh 4,22", verse: bibleVerses["Joh 4,22"] },
          { ref: "Joh 17,3", verse: bibleVerses["Joh 17,3"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 11
     ============================ */
  {
    chapter: "11",
    title: "Über Rechtfertigung",
    points: [
      {
        id: "1",
        title: "Das Wesen der Rechtfertigung",
        text: `
Diejenigen, die Gott wirksam beruft, rechtfertigt er auch aus Gnaden; nicht indem er sie mit Gerechtigkeit erfüllt, sondern indem er ihnen die Sünden vergibt und sie selbst für gerecht erklärt und als gerecht annimmt; nicht auf Grund von etwas, was in ihnen bewirkt oder von ihnen getan worden ist, sondern allein um Christi willen. Weder den Glauben selbst noch die Handlung des Glaubens noch irgendeinen anderen evangelischen Gehorsam rechnet er ihnen als ihre Gerechtigkeit an. Vielmehr rechnet er ihnen Christi aktiven Gehorsam gegenüber dem ganzen Gesetz und seinen passiven Gehorsam in seinem Tod als ihre vollkommene und einzige Gerechtigkeit an, wobei sie sich auf ihn und seine Gerechtigkeit verlassen und diese durch den Glauben empfangen. Diesen Glauben haben sie jedoch nicht aus sich selbst — er ist eine Gabe Gottes.
        `,
        references: [
          { ref: "Röm 3,24", verse: bibleVerses["Röm 3,24"] },
          { ref: "Röm 8,30", verse: bibleVerses["Röm 8,30"] },
          { ref: "Röm 4,5–8", verse: bibleVerses["Röm 4,5–8"] },
          { ref: "Eph 1,7", verse: bibleVerses["Eph 1,7"] },
          { ref: "1Kor 1,30–31", verse: bibleVerses["1Kor 1,30–31"] },
          { ref: "Röm 5,17–19", verse: bibleVerses["Röm 5,17–19"] },
          { ref: "Phil 3,8–9", verse: bibleVerses["Phil 3,8–9"] },
          { ref: "Eph 2,8–10", verse: bibleVerses["Eph 2,8–10"] },
          { ref: "Joh 1,12", verse: bibleVerses["Joh 1,12"] },
          { ref: "Röm 5,17", verse: bibleVerses["Röm 5,17"] }
        ]
      },
      {
        id: "2",
        title: "Glaube und Werke",
        text: `
Glaube, der auf diese Weise Christus und seine Gerechtigkeit aufnimmt und sich darauf verlässt, ist das einzige Mittel der Rechtfertigung; doch nicht das einzige, das sich bei einer gerechtfertigten Person findet, vielmehr ist er stets mit allen anderen rettenden Gnadengaben verbunden. Es ist auch kein toter Glaube, sondern einer, der aus Liebe tätig ist.
        `,
        references: [
          { ref: "Röm 3,28", verse: bibleVerses["Röm 3,28"] },
          { ref: "Gal 5,6", verse: bibleVerses["Gal 5,6"] },
          { ref: "Jak 2,17.22.26", verse: bibleVerses["Jak 2,17.22.26"] }
        ]
      },
      {
        id: "3",
        title: "Das Werk Christi in der Rechtfertigung",
        text: `
Christus hat durch seinen Gehorsam und seinen Tod die Schuld all derer, die gerechtfertigt sind, vollständig getilgt. Indem er sich selbst opferte, hat er für sie im Blut seines Kreuzes — indem er an ihrer Stelle die ihnen gebührende Strafe erduldete — die angemessene, wirkliche und vollkommene Sühnung vor Gottes Gericht erwirkt. Da er nun vom Vater für sie hingegeben wurde und da sein Gehorsam und seine Sühnung stellvertretend für sie gelten und ihnen beides frei und nicht für etwas, das in ihnen ist, zugerechnet wird, geschieht ihre Rechtfertigung allein aus freier Gnade, damit beide, sowohl die strikte Gerechtigkeit als auch die reiche Gnade Gottes, bei der Rechtfertigung von Sündern verherrlicht werden.
        `,
        references: [
          { ref: "Hebr 10,14", verse: bibleVerses["Hebr 10,14"] },
          { ref: "1Petr 1,18–19", verse: bibleVerses["1Petr 1,18–19"] },
          { ref: "Jes 53,5–6", verse: bibleVerses["Jes 53,5–6"] },
          { ref: "Röm 8,32", verse: bibleVerses["Röm 8,32"] },
          { ref: "2Kor 5,21", verse: bibleVerses["2Kor 5,21"] },
          { ref: "Röm 3,26", verse: bibleVerses["Röm 3,26"] },
          { ref: "Eph 1,6–7", verse: bibleVerses["Eph 1,6–7"] },
          { ref: "Eph 2,7", verse: bibleVerses["Eph 2,7"] }
        ]
      },
      {
        id: "4",
        title: "Der Zeitpunkt der Rechtfertigung",
        text: `
Gott hat von aller Ewigkeit her beschlossen, alle Erwählten zu rechtfertigen, und Christus ist, als die Zeit erfüllt war, für ihre Sünden gestorben und um ihrer Rechtfertigung willen wieder von den Toten auferstanden. Dennoch werden sie selbst nicht eher gerechtfertigt, bis ihnen der Heilige Geist zur rechten Zeit Christus tatsächlich zueignet.
        `,
        references: [
          { ref: "Gal 3,8", verse: bibleVerses["Gal 3,8"] },
          { ref: "1Petr 1,2", verse: bibleVerses["1Petr 1,2"] },
          { ref: "1Tim 2,6", verse: bibleVerses["1Tim 2,6"] },
          { ref: "Röm 4,25", verse: bibleVerses["Röm 4,25"] },
          { ref: "Kol 1,21–22", verse: bibleVerses["Kol 1,21–22"] },
          { ref: "Tit 3,4–7", verse: bibleVerses["Tit 3,4–7"] }
        ]
      },
      {
        id: "5",
        title: "Die Vergebung nach der Rechtfertigung",
        text: `
Gott hört nicht auf, denjenigen, die gerechtfertigt sind, ihre Sünden zu vergeben. Und obwohl sie niemals aus dem Stand der Rechtfertigung fallen können, kann es dennoch geschehen, dass sie sich wegen ihrer Sünden Gottes väterliches Missfallen zuziehen. In diesem Zustand leuchtet gewöhnlich das Licht seines Angesichtes nicht eher wieder über ihnen, bis sie sich demütigen, ihre Sünden bekennen, um Vergebung bitten und ihren Glauben und ihre Buße erneuern.
        `,
        references: [
          { ref: "Mt 6,12", verse: bibleVerses["Mt 6,12"] },
          { ref: "1Joh 1,7.9", verse: bibleVerses["1Joh 1,7.9"] },
          { ref: "Joh 10,28", verse: bibleVerses["Joh 10,28"] },
          { ref: "Ps 89,32–34", verse: bibleVerses["Ps 89,32–34"] },
          { ref: "Ps 32,5", verse: bibleVerses["Ps 32,5"] },
          { ref: "Ps 51", verse: bibleVerses["Ps 51"] },
          { ref: "Mt 26,75", verse: bibleVerses["Mt 26,75"] }
        ]
      },
      {
        id: "6",
        title: "Rechtfertigung im Alten und Neuen Testament",
        text: `
Die Rechtfertigung der Gläubigen im Alten Testament war in jeglicher Hinsicht ein und dieselbe wie die Rechtfertigung der Gläubigen im Neuen Testament.
        `,
        references: [
          { ref: "Gal 3,9", verse: bibleVerses["Gal 3,9"] },
          { ref: "Röm 4,22–24", verse: bibleVerses["Röm 4,22–24"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 12
     ============================ */
  {
    chapter: "12",
    title: "Über die Adoption",
    points: [
      {
        id: "1",
        title: "Die Gnade der Kindschaft",
        text: `
All denen, die gerechtfertigt sind, gewährte Gott in seinem und um seines einzigen Sohnes Jesu Christi willen, dass sie an der Gnade der Kindschaft teilhaben, durch die sie in die Schar der Kinder Gottes aufgenommen werden und deren Freiheiten und Vorrechte genießen, seinen Namen tragen, den Geist der Kindschaft empfangen, freimütigen Zugang zum Thron der Gnade haben, „Abba, Vater“ rufen können, von ihm Erbarmen, Schutz, Fürsorge und Züchtigung wie von einem Vater erfahren, doch werden sie niemals verstoßen, vielmehr sind sie auf den Tag der Erlösung hin versiegelt und empfangen als Erben die Verheißungen des ewigen Heils.
        `,
        references: [
          { ref: "Eph 1,5", verse: bibleVerses["Eph 1,5"] },
          { ref: "Gal 4,4–5", verse: bibleVerses["Gal 4,4–5"] },
          { ref: "Joh 1,12", verse: bibleVerses["Joh 1,12"] },
          { ref: "Röm 8,17", verse: bibleVerses["Röm 8,17"] },
          { ref: "2Kor 6,18", verse: bibleVerses["2Kor 6,18"] },
          { ref: "Offb 3,12", verse: bibleVerses["Offb 3,12"] },
          { ref: "Röm 8,15", verse: bibleVerses["Röm 8,15"] },
          { ref: "Gal 4,6", verse: bibleVerses["Gal 4,6"] },
          { ref: "Eph 2,18", verse: bibleVerses["Eph 2,18"] },
          { ref: "Ps 103,13", verse: bibleVerses["Ps 103,13"] },
          { ref: "Spr 14,26", verse: bibleVerses["Spr 14,26"] },
          { ref: "1Petr 5,7", verse: bibleVerses["1Petr 5,7"] },
          { ref: "Hebr 12,6", verse: bibleVerses["Hebr 12,6"] },
          { ref: "Jes 54,8–9", verse: bibleVerses["Jes 54,8–9"] },
          { ref: "Klgld 3,31", verse: bibleVerses["Klgld 3,31"] },
          { ref: "Eph 4,30", verse: bibleVerses["Eph 4,30"] },
          { ref: "Hebr 1,14", verse: bibleVerses["Hebr 1,14"] },
          { ref: "Hebr 6,12", verse: bibleVerses["Hebr 6,12"] }
        ]
      }
    ]
  },
  /* ============================
     KAPITEL 13
     ============================ */
  {
    chapter: "13",
    title: "Über Heiligung",
    points: [
      {
        id: "1",
        title: "Das Wesen der Heiligung",
        text: `
Diejenigen, die mit Christus verbunden, wirksam berufen und wiedergeboren sind, haben in sich durch die Kraft von Christi Tod und Auferstehung ein neu erschaffenes Herz und einen neuen Geist. Auch weiterhin werden sie wirklich und persönlich durch dieselbe Kraft mittels seines Wortes und Geistes, der in ihnen wohnt, geheiligt. Die Herrschaft des ganzen Leibes der Sünde ist gebrochen, und seine vielfältigen Begierden werden mehr und mehr geschwächt und abgetötet. Und sie selbst werden mehr und mehr in allen rettenden Gnadengaben belebt und gestärkt, um in jeder wahren Heiligung zu leben, ohne die niemand den Herrn sehen wird.
        `,
        references: [
          { ref: "Apg 20,32", verse: bibleVerses["Apg 20,32"] },
          { ref: "Röm 6,5–6", verse: bibleVerses["Röm 6,5–6"] },
          { ref: "Joh 17,17", verse: bibleVerses["Joh 17,17"] },
          { ref: "Eph 3,16–19", verse: bibleVerses["Eph 3,16–19"] },
          { ref: "1Thess 5,21–23", verse: bibleVerses["1Thess 5,21–23"] },
          { ref: "Röm 6,14", verse: bibleVerses["Röm 6,14"] },
          { ref: "Gal 5,24", verse: bibleVerses["Gal 5,24"] },
          { ref: "Kol 1,11", verse: bibleVerses["Kol 1,11"] },
          { ref: "2Kor 7,1", verse: bibleVerses["2Kor 7,1"] },
          { ref: "Hebr 12,14", verse: bibleVerses["Hebr 12,14"] }
        ]
      },
      {
        id: "2",
        title: "Die Unvollkommenheit der Heiligung",
        text: `
Diese Heiligung betrifft den ganzen Menschen durch und durch, bleibt jedoch in diesem Leben unvollkommen. Es bleiben in jedem Bereich noch einige Reste der Verdorbenheit zurück, woraus ein anhaltender und unversöhnlicher Kampf entsteht, in dem das Fleisch gegen den Geist und der Geist gegen das Fleisch aufbegehrt.
        `,
        references: [
          { ref: "1Thess 5,23", verse: bibleVerses["1Thess 5,23"] },
          { ref: "Röm 7,18.23", verse: bibleVerses["Röm 7,18.23"] },
          { ref: "Gal 5,17", verse: bibleVerses["Gal 5,17"] },
          { ref: "1Petr 2,11", verse: bibleVerses["1Petr 2,11"] }
        ]
      },
      {
        id: "3",
        title: "Das Wachstum in der Heiligung",
        text: `
Obwohl in diesem Kampf ihre bleibende Verdorbenheit noch in vielem eine Zeitlang vorherrschen mag, überwindet der wiedergeborene Teil diese dennoch durch die ständige Zurüstung mit Kraft von dem heiligenden Geist Christi. Und so wachsen die Heiligen in der Gnade, indem sie im evangelischen Gehorsam gegenüber allen Geboten, die Christus als ihr Haupt und König ihnen in seinem Wort geboten hat, ihre Heiligung in der Furcht Gottes vervollkommnen und auf ein himmlisches Leben ausgerichtet sind.
        `,
        references: [
          { ref: "Röm 7,23", verse: bibleVerses["Röm 7,23"] },
          { ref: "Röm 6,14", verse: bibleVerses["Röm 6,14"] },
          { ref: "Eph 4,15–16", verse: bibleVerses["Eph 4,15–16"] },
          { ref: "2Kor 3,18", verse: bibleVerses["2Kor 3,18"] },
          { ref: "2Kor 7,1", verse: bibleVerses["2Kor 7,1"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 14
     ============================ */
  {
    chapter: "14",
    title: "Über den rettenden Glauben",
    points: [
      {
        id: "1",
        title: "Die Entstehung des Glaubens",
        text: `
Die Gnadengabe des Glaubens, durch welche die Erwählten dazu befähigt werden, zur Rettung ihrer Seelen zu glauben, ist das Werk des Geistes Christi in ihren Herzen. Sie wird gewöhnlich durch den Dienst des Wortes bewirkt, durch den sie auch ebenso wie durch die Spendung der Taufe und des Abendmahls, durch Gebet und andere von Gott verordnete Mittel zunimmt und gestärkt wird.
        `,
        references: [
          { ref: "2Kor 4,13", verse: bibleVerses["2Kor 4,13"] },
          { ref: "Eph 2,8", verse: bibleVerses["Eph 2,8"] },
          { ref: "Röm 10,14.17", verse: bibleVerses["Röm 10,14.17"] },
          { ref: "Lk 17,5", verse: bibleVerses["Lk 17,5"] },
          { ref: "1Petr 2,2", verse: bibleVerses["1Petr 2,2"] },
          { ref: "Apg 20,32", verse: bibleVerses["Apg 20,32"] }
        ]
      },
      {
        id: "2",
        title: "Das Wesen des rettenden Glaubens",
        text: `
Durch diesen Glauben hält ein Christ um der Autorität Gottes willen alles für wahr, was im Wort geoffenbart ist, und er erkennt in ihm einen Vorzug gegenüber allen anderen Schriften und Dingen in dieser Welt, da es die Herrlichkeit Gottes in seinen Eigenschaften, die Vorzüglichkeit Christi in seiner Natur und seinen Ämtern und die Kraft und Fülle des Heiligen Geistes in seinen Werken und Handlungen hervorbringt: Dadurch wird er in die Lage versetzt, sich mit seiner Seele auf die Wahrheit, an die er auf diese Weise glauben kann, zu verlassen. Er verhält sich auch unterschiedlich, je nachdem, was die jeweilige Schriftstelle beinhaltet: Er leistet den Geboten Gehorsam. Er zittert vor den Drohungen. Er ergreift die Verheißungen Gottes für dieses und das zukünftige Leben. Aber die grundlegenden Handlungen des rettenden Glaubens stehen in unmittelbarer Verbindung zu Christus: ihn anzunehmen, ihn zu empfangen und sich auf Grund des Gnadenbundes auf ihn allein zur Rechtfertigung, zur Heiligung und zum ewigen Leben zu verlassen.
        `,
        references: [
          { ref: "Apg 24,14", verse: bibleVerses["Apg 24,14"] },
          { ref: "Ps 19,8–11", verse: bibleVerses["Ps 19,8–11"] },
          { ref: "Ps 119,72", verse: bibleVerses["Ps 119,72"] },
          { ref: "2Tim 1,12", verse: bibleVerses["2Tim 1,12"] },
          { ref: "Joh 15,14", verse: bibleVerses["Joh 15,14"] },
          { ref: "Jes 66,2", verse: bibleVerses["Jes 66,2"] },
          { ref: "Hebr 11,13", verse: bibleVerses["Hebr 11,13"] },
          { ref: "Joh 1,12", verse: bibleVerses["Joh 1,12"] },
          { ref: "Apg 16,31", verse: bibleVerses["Apg 16,31"] },
          { ref: "Gal 2,20", verse: bibleVerses["Gal 2,20"] },
          { ref: "Apg 15,11", verse: bibleVerses["Apg 15,11"] }
        ]
      },
      {
        id: "3",
        title: "Das Wachstum und der Sieg des Glaubens",
        text: `
Dieser Glaube, auch wenn er verschiedene Grade aufweist und schwach oder stark sein kann, besitzt dennoch auch schon im geringsten Maße — ebenso wie die übrige Gnade der Errettung — ein anderes Wesen und eine andere Natur als der Glaube und die allgemeine Gnade bei denen, die eine Zeit lang glauben. Daher behält er, auch wenn er viele Male angefochten und geschwächt sein kann, dennoch den Sieg, indem er in vielen zur Erlangung völliger Gewissheit durch Christus heranwächst, der sowohl der Anfänger als auch der Vollender unseres Glaubens ist.
        `,
        references: [
          { ref: "Hebr 5,13–14", verse: bibleVerses["Hebr 5,13–14"] },
          { ref: "Mt 6,30", verse: bibleVerses["Mt 6,30"] },
          { ref: "Röm 4,19–20", verse: bibleVerses["Röm 4,19–20"] },
          { ref: "2Petr 1,1", verse: bibleVerses["2Petr 1,1"] },
          { ref: "Eph 6,16", verse: bibleVerses["Eph 6,16"] },
          { ref: "1Joh 5,4–5", verse: bibleVerses["1Joh 5,4–5"] },
          { ref: "Hebr 6,11–12", verse: bibleVerses["Hebr 6,11–12"] },
          { ref: "Kol 2,2", verse: bibleVerses["Kol 2,2"] },
          { ref: "Hebr 12,2", verse: bibleVerses["Hebr 12,2"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 15
     ============================ */
  {
    chapter: "15",
    title: "Über Buße zum Leben und zur Erlösung",
    points: [
      {
        id: "1",
        title: "Buße bei späterer Bekehrung",
        text: `
Denjenigen der Erwählten, die sich erst im fortgeschrittenen Alter bekehren und schon für geraume Zeit in ihrem natürlichen Zustand gelebt und dabei mancherlei Begierden und Lüsten gedient hatten, schenkt Gott bei ihrer wirksamen Berufung Buße zum Leben.
        `,
        references: [
          { ref: "Tit 3,2–5", verse: bibleVerses["Tit 3,2–5"] }
        ]
      },
      {
        id: "2",
        title: "Die Notwendigkeit der Buße für Gläubige",
        text: `
In Anbetracht der Tatsache, dass es niemanden gibt, der Gutes tut und nicht sündigt, und dass die besten Menschen durch die Macht und den Betrug der in ihnen wohnenden Verdorbenheit mit der herrschenden Versuchung in große Sünden und Lästerungen geraten, hat Gott es im Bund der Gnade barmherzigerweise so eingerichtet, dass Gläubige, die so sündigen und zu Fall kommen, durch die Buße zum Heil erneuert werden.
        `,
        references: [
          { ref: "Pred 7,20", verse: bibleVerses["Pred 7,20"] },
          { ref: "Lk 22,31–32", verse: bibleVerses["Lk 22,31–32"] }
        ]
      },
      {
        id: "3",
        title: "Das Wesen der Buße",
        text: `
Diese rettende Buße ist eine evangelische Gnade, durch die sich derjenige, der vom Heiligen Geist ein Empfinden für die vielfältigen Schlechtigkeiten seiner Sünde vermittelt bekommen hat, wegen dieser durch den Glauben an Christus mit Gott wohlgefälliger Reue, Abscheu und Selbstverachtung, demütigt. Er bittet um Vergebung und Kraft durch die Gnade, wobei er sich vornimmt und sich darum bemüht, mit der Hilfe des Geistes vor Gott zu leben, um ihm in allen Dingen wohlzugefallen.
        `,
        references: [
          { ref: "Sach 12,10", verse: bibleVerses["Sach 12,10"] },
          { ref: "Apg 11,18", verse: bibleVerses["Apg 11,18"] },
          { ref: "Hes 36,31", verse: bibleVerses["Hes 36,31"] },
          { ref: "2Kor 7,11", verse: bibleVerses["2Kor 7,11"] },
          { ref: "Ps 119,6.128", verse: bibleVerses["Ps 119,6.128"] }
        ]
      },
      {
        id: "4",
        title: "Die lebenslange Buße",
        text: `
So wie Buße wegen unseres dem Tod verfallenen Leibes und dessen Beweggründen unser ganzes Leben lang nicht aufhören darf, so ist es die Pflicht eines jeden Menschen, für seine konkreten Sünden jedes Mal wieder Buße zu tun.
        `,
        references: [
          { ref: "Lk 19,8", verse: bibleVerses["Lk 19,8"] },
          { ref: "1Tim 1,13.15", verse: bibleVerses["1Tim 1,13.15"] }
        ]
      },
      {
        id: "5",
        title: "Keine Sünde zu groß für Buße",
        text: `
Gott hat es durch Christus im Bund der Gnade für die Bewahrung der Gläubigen zum Heil so eingerichtet, dass es, auch wenn es keine Sünde gibt, die so gering ist, dass sie nicht die Verdammung verdient hätte, dennoch keine Sünde gibt, die so groß ist, dass sie diejenigen verdammt, die Buße tun. Daher ist es notwendig, dass ständig über Buße gepredigt wird.
        `,
        references: [
          { ref: "Röm 6,23", verse: bibleVerses["Röm 6,23"] },
          { ref: "Jes 1,16.18", verse: bibleVerses["Jes 1,16.18"] },
          { ref: "Jes 55,7", verse: bibleVerses["Jes 55,7"] }
        ]
      }
    ]
  },
  /* ============================
     KAPITEL 16
     ============================ */
  {
    chapter: "16",
    title: "Über die guten Werke",
    points: [
      {
        id: "1",
        title: "Was gute Werke sind",
        text: `
Nur diejenigen Werke sind gute Werke, die Gott in seinem heiligen Wort geboten hat, und nicht diejenigen, die sich Menschen ohne diesen Anspruch im blinden Eifer oder unter dem Vorwand guter Absichten selbst ausgedacht haben.
        `,
        references: [
          { ref: "Mi 6,8", verse: bibleVerses["Mi 6,8"] },
          { ref: "Hebr 13,21", verse: bibleVerses["Hebr 13,21"] },
          { ref: "Mt 15,9", verse: bibleVerses["Mt 15,9"] },
          { ref: "Jes 29,13", verse: bibleVerses["Jes 29,13"] }
        ]
      },
      {
        id: "2",
        title: "Die Früchte guter Werke",
        text: `
Wenn diese guten Werke im Gehorsam gegenüber Gottes Geboten getan werden, sind sie Früchte und Kennzeichen eines wahren und lebendigen Glaubens. Die Gläubigen bringen durch sie ihre Dankbarkeit zum Ausdruck, stärken ihre Gewissheit, erbauen ihre Geschwister, zieren das Bekenntnis zum Evangelium, stopfen den Mund der Widersacher und verherrlichen Gott, dessen Werk sie sind, in Christus Jesus dazu geschaffen, dass sie, indem sie ihre Frucht zur Heiligkeit bringen, am Ende schließlich das ewige Leben haben.
        `,
        references: [
          { ref: "Jak 2,18.22", verse: bibleVerses["Jak 2,18.22"] },
          { ref: "Ps 116,12–13", verse: bibleVerses["Ps 116,12–13"] },
          { ref: "1Joh 2,3.5", verse: bibleVerses["1Joh 2,3.5"] },
          { ref: "2Petr 1,5–11", verse: bibleVerses["2Petr 1,5–11"] },
          { ref: "Mt 5,16", verse: bibleVerses["Mt 5,16"] },
          { ref: "1Tim 6,1", verse: bibleVerses["1Tim 6,1"] },
          { ref: "1Petr 2,15", verse: bibleVerses["1Petr 2,15"] },
          { ref: "Phil 1,11", verse: bibleVerses["Phil 1,11"] },
          { ref: "Eph 2,10", verse: bibleVerses["Eph 2,10"] },
          { ref: "Röm 6,22", verse: bibleVerses["Röm 6,22"] }
        ]
      },
      {
        id: "3",
        title: "Die Quelle der guten Werke",
        text: `
Ihre Fähigkeit, gute Werke zu tun, stammt keineswegs von ihnen selbst, sondern ausschließlich vom Geist Christi. Und damit sie zu ihnen fähig sind, ist, abgesehen von den Gnadenerweisen, die sie bereits empfangen haben, ein direkter Einfluss desselben Heiligen Geistes erforderlich, um in ihnen das Wollen und das Vollbringen dessen, was ihm wohlgefällt, zu wirken. Sie dürfen jedoch auf Grund dieser Tatsache nicht nachlässig werden, als ob sie — es sei denn, der Geist veranlasst sie in besonderer Weise dazu — überhaupt keine Pflichten erfüllen müssten, vielmehr sollen sie eifrig darum bemüht sein, die Gabe Gottes, die in ihnen ist, anzufachen.
        `,
        references: [
          { ref: "Joh 15,4.6", verse: bibleVerses["Joh 15,4.6"] },
          { ref: "2Kor 3,5", verse: bibleVerses["2Kor 3,5"] },
          { ref: "Phil 2,13", verse: bibleVerses["Phil 2,13"] },
          { ref: "Phil 2,12", verse: bibleVerses["Phil 2,12"] },
          { ref: "Hebr 6,11–12", verse: bibleVerses["Hebr 6,11–12"] },
          { ref: "Jes 64,6", verse: bibleVerses["Jes 64,6"] }
        ]
      },
      {
        id: "4",
        title: "Die Unvollkommenheit guter Werke",
        text: `
Diejenigen, die in ihrem Gehorsam die höchste Stufe erreichen, die in diesem Leben möglich ist, sind dennoch weit von der Fähigkeit entfernt, etwas zu leisten, was über ihre Pflicht hinausgeht, und mehr zu tun, als Gott fordert. Vielmehr bleiben sie in vielem weit hinter dem zurück, was sie zu tun schuldig sind.
        `,
        references: [
          { ref: "Hiob 9,2–3", verse: bibleVerses["Hiob 9,2–3"] },
          { ref: "Gal 5,17", verse: bibleVerses["Gal 5,17"] },
          { ref: "Lk 17,10", verse: bibleVerses["Lk 17,10"] }
        ]
      },
      {
        id: "5",
        title: "Gute Werke verdienen nichts",
        text: `
Wegen des großen Missverhältnisses, das zwischen unseren besten Werken und der künftigen Herrlichkeit besteht, und wegen des unendlichen Abstands, der zwischen uns und Gott besteht, dem wir durch sie weder etwas nützen noch für die Schuld unserer früheren Sünden Sühne leisten können, können wir durch unsere besten Werke weder Sündenvergebung noch ewiges Leben von Gott verdienen. Wenn wir aber alles getan haben, was wir tun können, so haben wir doch nur unsere Pflicht erfüllt und sind unnütze Knechte. Denn so weit die Werke gut sind, kommen sie von seinem Geist, und soweit sie von uns selbst gewirkt werden, sind sie verunreinigt und mit so viel Schwachheit und Unvollkommenheit vermischt, dass sie vor der Strenge des göttlichen Gerichts keinen Bestand haben.
        `,
        references: [
          { ref: "Röm 3,20", verse: bibleVerses["Röm 3,20"] },
          { ref: "Eph 2,8–9", verse: bibleVerses["Eph 2,8–9"] },
          { ref: "Röm 4,6", verse: bibleVerses["Röm 4,6"] },
          { ref: "Gal 5,22–23", verse: bibleVerses["Gal 5,22–23"] },
          { ref: "Jes 64,5", verse: bibleVerses["Jes 64,5"] },
          { ref: "Ps 143,2", verse: bibleVerses["Ps 143,2"] }
        ]
      },
      {
        id: "6",
        title: "Die Annahme guter Werke",
        text: `
Ebenso wie die Gläubigen in ihrer Person durch Christus angenommen sind, werden auch ihre guten Werke in ihm angenommen; nicht als seien sie in diesem Leben aus Gottes Sicht völlig tadellos und unsträflich, sondern weil es ihm — indem er in seinem Sohn auf sie blickt — gefällt, das anzunehmen und zu belohnen, was aufrichtig ist, auch wenn es mit vielen Schwachheiten und Unvollkommenheiten verbunden ist.
        `,
        references: [
          { ref: "Eph 1,6", verse: bibleVerses["Eph 1,6"] },
          { ref: "1Petr 2,5", verse: bibleVerses["1Petr 2,5"] },
          { ref: "Mt 25,21.23", verse: bibleVerses["Mt 25,21.23"] },
          { ref: "Hebr 6,10", verse: bibleVerses["Hebr 6,10"] }
        ]
      },
      {
        id: "7",
        title: "Werke der Unwiedergeborenen",
        text: `
Werke, die von nicht wiedergeborenen Menschen getan werden, auch wenn sie der Sache nach etwas sein können, was Gott geboten hat und was sowohl für sie selbst als auch für andere gut und nützlich ist, sind dennoch sündig, weil sie aus keinem durch Glauben gereinigten Herzen hervorgebracht werden und weder in rechter, dem Wort entsprechender Weise noch mit der rechten Absicht, nämlich zur Ehre Gottes, getan werden. Sie können Gott nicht gefallen und auch keinen Menschen in die Lage versetzen, dass er von Gott Gnade empfängt. Und dennoch ist die Unterlassung derselben noch sündiger und missfällt Gott weitaus mehr.
        `,
        references: [
          { ref: "2Kön 10,30", verse: bibleVerses["2Kön 10,30"] },
          { ref: "1Kön 21,27.29", verse: bibleVerses["1Kön 21,27.29"] },
          { ref: "1Mose 4,5", verse: bibleVerses["1Mose 4,5"] },
          { ref: "Hebr 11,4.6", verse: bibleVerses["Hebr 11,4.6"] },
          { ref: "1Kor 13,1", verse: bibleVerses["1Kor 13,1"] },
          { ref: "Mt 6,2.5", verse: bibleVerses["Mt 6,2.5"] },
          { ref: "Am 5,21–22", verse: bibleVerses["Am 5,21–22"] },
          { ref: "Röm 9,16", verse: bibleVerses["Röm 9,16"] },
          { ref: "Tit 3,5", verse: bibleVerses["Tit 3,5"] },
          { ref: "Hiob 21,14–15", verse: bibleVerses["Hiob 21,14–15"] },
          { ref: "Mt 25,41–43", verse: bibleVerses["Mt 25,41–43"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 17
     ============================ */
  {
    chapter: "17",
    title: "Über das Beharren der Heiligen",
    points: [
      {
        id: "1",
        title: "Das Beharren der Erwählten",
        text: `
Diejenigen, die Gott in dem Geliebten angenommen, durch seinen Geist wirksam berufen und geheiligt hat und denen er den kostbaren Glauben seiner Erwählten gegeben hat, können weder ganz noch endgültig aus dem Stand der Gnade fallen, sondern werden darin gewiss bis ans Ende beharren und ewig errettet sein. Denn die Gnadengaben und Berufungen Gottes sind unwiderruflich, weshalb er in ihnen auch fortwährend Glauben, Buße, Liebe, Freude, Hoffnung und all die anderen Gnadengaben des Geistes zur Unsterblichkeit hervorbringt und fördert. Und selbst wenn sich viele Stürme und Fluten erheben und auf sie einstürzen, sind diese doch nicht in der Lage, sie von ihrem Fundament und Felsen zu stürzen, auf dem sie durch den Glauben befestigt sind. Dennoch kann durch Unglauben und die Versuchungen Satans die bewusste Wahrnehmung von Gottes Licht und Liebe eine Zeit lang vor ihnen verdunkelt und verborgen sein, doch bleibt er derselbe, und sie sollen dessen gewiss sein, dass sie durch die Kraft Gottes zum Heil bewahrt bleiben, wo sie sich ihres erworbenen Eigentums erfreuen dürfen, die sie in seine Handflächen eingraviert sind und deren Namen von Ewigkeit her im Buch des Lebens geschrieben stehen.
        `,
        references: [
          { ref: "Joh 10,28–29", verse: bibleVerses["Joh 10,28–29"] },
          { ref: "Phil 1,6", verse: bibleVerses["Phil 1,6"] },
          { ref: "2Tim 2,19", verse: bibleVerses["2Tim 2,19"] },
          { ref: "1Joh 2,19", verse: bibleVerses["1Joh 2,19"] },
          { ref: "Ps 89,32–33", verse: bibleVerses["Ps 89,32–33"] },
          { ref: "1Kor 11,32", verse: bibleVerses["1Kor 11,32"] },
          { ref: "Mal 3,6", verse: bibleVerses["Mal 3,6"] }
        ]
      },
      {
        id: "2",
        title: "Die Grundlage des Beharrens",
        text: `
Dieses Beharren der Heiligen beruht nicht auf ihrem eigenen freien Willen, sondern auf dem unveränderlichen Ratschluss der Erwählung, der aus der freien und unwandelbaren Liebe Gottes des Vaters hervorkommt, auf der Wirksamkeit des Verdienstes und der Fürsprache Jesu Christi und der Einheit mit ihm, dem Eid Gottes, darauf, dass der Geist und der Same Gottes in ihnen bleiben, und auf der Beschaffenheit des Gnadenbundes. Aus all diesem entsteht auch die Gewissheit und Unfehlbarkeit desselben.
        `,
        references: [
          { ref: "Röm 8,30", verse: bibleVerses["Röm 8,30"] },
          { ref: "Röm 9,11.16", verse: bibleVerses["Röm 9,11.16"] },
          { ref: "Röm 5,9–10", verse: bibleVerses["Röm 5,9–10"] },
          { ref: "Joh 14,19", verse: bibleVerses["Joh 14,19"] },
          { ref: "Hebr 6,17–18", verse: bibleVerses["Hebr 6,17–18"] },
          { ref: "1Joh 3,9", verse: bibleVerses["1Joh 3,9"] },
          { ref: "Jer 32,40", verse: bibleVerses["Jer 32,40"] }
        ]
      },
      {
        id: "3",
        title: "Mögliche Rückfälle und Bewahrung",
        text: `
Es kann zwar sein, dass sie durch die Versuchung Satans und der Welt, durch das Vorherrschen der in ihnen verbliebenen Verdorbenheit und durch den nachlässigen Gebrauch der Mittel für ihre Bewahrung in schwere Sünden fallen und eine Zeit lang darin verharren, wodurch sie Gottes Missfallen erregen und seinen Heiligen Geist betrüben, wodurch sie so weit kommen, dass ihre Gnaden und ihr Trost geschwächt werden, wodurch ihre Herzen verhärtet und ihre Gewissen verletzt werden, sie andere verletzen und bei ihnen Anstoß erregen und sie vorübergehende Strafen auf sich bringen. Dennoch werden sie ihre Buße erneuern und durch Glauben an Christus Jesus bis zum Ende bewahrt bleiben.
        `,
        references: [
          { ref: "Mt 26,70.72.74", verse: bibleVerses["Mt 26,70.72.74"] },
          { ref: "Jes 64,4.8", verse: bibleVerses["Jes 64,4.8"] },
          { ref: "Eph 4,30", verse: bibleVerses["Eph 4,30"] },
          { ref: "Ps 51,10.12", verse: bibleVerses["Ps 51,10.12"] },
          { ref: "Ps 32,3–4", verse: bibleVerses["Ps 32,3–4"] },
          { ref: "2Sam 12,14", verse: bibleVerses["2Sam 12,14"] },
          { ref: "Lk 22,32.61–62", verse: bibleVerses["Lk 22,32.61–62"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 18
     ============================ */
  {
    chapter: "18",
    title: "Über die Gewissheit der Gnade und Errettung",
    points: [
      {
        id: "1",
        title: "Die Möglichkeit der Gewissheit",
        text: `
Auch wenn es sein kann, dass diejenigen, die eine Zeit lang glauben, und andere nicht wiedergeborene Menschen sich selbst mit falschen Hoffnungen und fleischlichen Anmaßungen vergeblich damit betrügen, dass sie unter Gottes Gunst und im Stand der Errettung seien, wird ihre Hoffnung zu Grunde gehen. Doch diejenigen, die wirklich an den Herrn Jesus glauben und ihn aufrichtig lieben, indem sie sich bemühen, mit völlig reinem Gewissen vor ihm zu leben, können in diesem Leben völlig gewiss sein, dass sie im Stand der Gnade sind, und können sich der Hoffnung auf die Herrlichkeit Gottes rühmen, eine Hoffnung, die sie niemals zuschanden werden lassen wird.
        `,
        references: [
          { ref: "Hiob 8,13–14", verse: bibleVerses["Hiob 8,13–14"] },
          { ref: "Mt 7,22–23", verse: bibleVerses["Mt 7,22–23"] },
          { ref: "1Joh 2,3", verse: bibleVerses["1Joh 2,3"] },
          { ref: "1Joh 3,14.18–19.21.24", verse: bibleVerses["1Joh 3,14.18–19.21.24"] },
          { ref: "1Joh 5,13", verse: bibleVerses["1Joh 5,13"] },
          { ref: "Röm 5,2.5", verse: bibleVerses["Röm 5,2.5"] }
        ]
      },
      {
        id: "2",
        title: "Die Grundlage der Gewissheit",
        text: `
Diese Gewissheit ist nicht nur eine mutmaßliche und wahrscheinliche Überzeugung, die auf einer fehlbaren Hoffnung beruht, sondern eine unfehlbare Glaubensgewissheit, die sich auf das Blut und die Gerechtigkeit Christi, wie sie im Evangelium offenbart sind, auf den inneren Erweis der Gnadengaben des Geistes, die verheißen worden sind, und auf das Zeugnis des Geistes der Kindschaft gründet, der zusammen mit unserem Geist Zeugnis gibt, dass wir Kinder Gottes sind. Als Frucht davon bewahrt sie das Herz sowohl in einer demütigen als auch heiligen Haltung.
        `,
        references: [
          { ref: "Hebr 6,11.19", verse: bibleVerses["Hebr 6,11.19"] },
          { ref: "Hebr 6,17–18", verse: bibleVerses["Hebr 6,17–18"] },
          { ref: "2Petr 1,4–5.10–11", verse: bibleVerses["2Petr 1,4–5.10–11"] },
          { ref: "Röm 8,15–16", verse: bibleVerses["Röm 8,15–16"] },
          { ref: "1Joh 3,1–3", verse: bibleVerses["1Joh 3,1–3"] }
        ]
      },
      {
        id: "3",
        title: "Der Weg zur Gewissheit",
        text: `
Diese unfehlbare Gewissheit gehört nicht so zum Wesen des Glaubens, dass ein wahrer Gläubiger nicht auch lange darauf warten und mit vielen Schwierigkeiten zu kämpfen haben könnte, bis er an ihr teil hat. Doch durch den Geist dazu befähigt, die Dinge zu erkennen, die ihm von Gott frei gegeben sind, kann er sie ohne eine außergewöhnliche Offenbarung durch den rechten Gebrauch der Mittel erlangen. Darum haben alle die Pflicht, allen Fleiß anzuwenden, sich ihrer Berufung und Erwählung zu vergewissern, damit ihr Herz dadurch an Frieden und Freude im Heiligen Geist, an Liebe und Dankbarkeit gegenüber Gott und an Kraft und Bereitwilligkeit in den Pflichten des Gehorsams zunimmt, welche die besonderen Früchte dieser Gewissheit sind. Dies ist sehr weit davon entfernt, Menschen zur Nachlässigkeit zu verleiten.
        `,
        references: [
          { ref: "Jes 50,10", verse: bibleVerses["Jes 50,10"] },
          { ref: "Ps 88", verse: bibleVerses["Ps 88"] },
          { ref: "Ps 77,2–13", verse: bibleVerses["Ps 77,2–13"] },
          { ref: "1Joh 4,13", verse: bibleVerses["1Joh 4,13"] },
          { ref: "Hebr 6,11–12", verse: bibleVerses["Hebr 6,11–12"] },
          { ref: "Röm 5,1–2.5", verse: bibleVerses["Röm 5,1–2.5"] },
          { ref: "Röm 14,17", verse: bibleVerses["Röm 14,17"] },
          { ref: "Ps 119,32", verse: bibleVerses["Ps 119,32"] },
          { ref: "Röm 6,1–2", verse: bibleVerses["Röm 6,1–2"] },
          { ref: "Tit 2,11–12.14", verse: bibleVerses["Tit 2,11–12.14"] }
        ]
      },
      {
        id: "4",
        title: "Mögliche Erschütterungen der Gewissheit",
        text: `
Die Heilsgewissheit von wahren Gläubigen kann auf verschiedene Weise erschüttert, geschwächt oder unterbrochen werden, beispielsweise dadurch, dass sie es vernachlässigen, diese zu bewahren, dadurch dass sie in eine besondere Sünde fallen, die das Gewissen verwundet und den Geist betrübt, dadurch dass sie plötzlich oder heftig versucht werden, oder dadurch dass Gott das Licht seines Angesichts verbirgt und sogar die, die ihn fürchten, in Finsternis wandeln und kein Licht haben lässt. Dennoch verlieren sie niemals den Samen Gottes und das Leben durch den Glauben, die Liebe zu Christus und den Geschwistern, die Aufrichtigkeit des Herzens und das Pflichtbewusstsein, aus denen durch die Wirksamkeit des Geistes die Gewissheit zur rechten Zeit wieder neu belebt werden kann und durch die sie in der Zwischenzeit vor der völligen Verzweiflung bewahrt bleiben.
        `,
        references: [
          { ref: "Hld 5,2–3.6", verse: bibleVerses["Hld 5,2–3.6"] },
          { ref: "Ps 51,10.14.16", verse: bibleVerses["Ps 51,10.14.16"] },
          { ref: "Ps 116,11", verse: bibleVerses["Ps 116,11"] },
          { ref: "Ps 77,8–9", verse: bibleVerses["Ps 77,8–9"] },
          { ref: "Ps 31,23", verse: bibleVerses["Ps 31,23"] },
          { ref: "Ps 30,8", verse: bibleVerses["Ps 30,8"] },
          { ref: "1Joh 3,9", verse: bibleVerses["1Joh 3,9"] },
          { ref: "Lk 22,32", verse: bibleVerses["Lk 22,32"] },
          { ref: "Ps 42,6.12", verse: bibleVerses["Ps 42,6.12"] },
          { ref: "Klgld 3,26–31", verse: bibleVerses["Klgld 3,26–31"] }
        ]
      }
    ]
  },
  /* ============================
     KAPITEL 19
     ============================ */
  {
    chapter: "19",
    title: "Über das Gesetz Gottes",
    points: [
      {
        id: "1",
        title: "Das Gesetz im Stand der Unschuld",
        text: `
Gott gab Adam ein Gesetz, das auf sein Herz geschrieben war und allumfassenden Gehorsam forderte, und die konkrete Anweisung, nicht von der Frucht des Baumes der Erkenntnis des Guten und Bösen zu essen. Dadurch hat er ihn und alle seine Nachkommen zu persönlichem, vollkommenem, gewissenhaftem und stetigem Gehorsam verpflichtet, bei der Erfüllung Leben verheißen und bei der Übertretung den Tod angedroht und ihm auch Kraft und Fähigkeit verliehen, es zu halten.
        `,
        references: [
          { ref: "1Mose 1,27", verse: bibleVerses["1Mose 1,27"] },
          { ref: "Pred 7,29", verse: bibleVerses["Pred 7,29"] },
          { ref: "Röm 10,5", verse: bibleVerses["Röm 10,5"] },
          { ref: "Gal 3,10.12", verse: bibleVerses["Gal 3,10.12"] }
        ]
      },
      {
        id: "2",
        title: "Das Moralgesetz und die Zehn Gebote",
        text: `
Dasselbe Gesetz, das anfangs auf das Herz des Menschen geschrieben worden war, blieb auch nach dem Fall ein vollkommener Maßstab für die Gerechtigkeit. Es wurde von Gott auf dem Berg Sinai in den Zehn Geboten übergeben und auf zwei Tafeln geschrieben, von denen die ersten vier unsere Schuldigkeit gegenüber Gott und die anderen sechs unsere Schuldigkeit gegenüber den Menschen beinhalten.
        `,
        references: [
          { ref: "Röm 2,14–15", verse: bibleVerses["Röm 2,14–15"] },
          { ref: "5Mose 10,4", verse: bibleVerses["5Mose 10,4"] }
        ]
      },
      {
        id: "3",
        title: "Die Zeremonialgesetze",
        text: `
Neben diesem Gesetz, das man gewöhnlich Moralgesetz nennt, hat es Gott gefallen, dem Volk Israel Zeremonialgesetze zu geben, die verschiedene sinnbildliche Anordnungen enthalten. Teilweise beziehen diese sich auf den Gottesdienst, indem sie im voraus Christus, seine Gnadengaben, Taten, Leiden und Wohltaten darstellen, und teilweise bieten sie verschiedene Anweisungen für moralische Pflichten. Alle diese Zeremonialgesetze, die nur bis zum Zeitpunkt der Neugestaltung in Kraft waren, wurden von Jesus Christus, dem wahren Messias und alleinigen Gesetzgeber, der vom Vater dazu bevollmächtigt wurde, aufgehoben und beseitigt.
        `,
        references: [
          { ref: "Hebr 10,1", verse: bibleVerses["Hebr 10,1"] },
          { ref: "Kol 2,17", verse: bibleVerses["Kol 2,17"] },
          { ref: "1Kor 5,7", verse: bibleVerses["1Kor 5,7"] },
          { ref: "Kol 2,14.16–17", verse: bibleVerses["Kol 2,14.16–17"] },
          { ref: "Eph 2,14.16", verse: bibleVerses["Eph 2,14.16"] }
        ]
      },
      {
        id: "4",
        title: "Die Judizialgesetze",
        text: `
Er gab ihnen auch verschiedene Judizialgesetze, die zusammen mit dem Ende der staatlichen Existenz dieses Volkes ihre Gültigkeit verloren haben, so dass nun niemand mehr kraft dieses Rechts gebunden ist. Lediglich ihre allgemeine Entsprechung ist von moralischem Nutzen.
        `,
        references: [
          { ref: "1Kor 9,8–10", verse: bibleVerses["1Kor 9,8–10"] }
        ]
      },
      {
        id: "5",
        title: "Die bleibende Verpflichtung des Moralgesetzes",
        text: `
Das Moralgesetz verpflichtet für immer alle Menschen zum Gehorsam, sowohl die Gerechtfertigten als auch die anderen, und dies nicht nur hinsichtlich der in ihm enthaltenen Bestimmungen, sondern auch im Blick auf die Autorität Gottes, des Schöpfers, der es gegeben hat. Ebenso löst Christus diese Verpflichtung im Evangelium keineswegs auf, sondern verstärkt sie sogar noch deutlich.
        `,
        references: [
          { ref: "Röm 13,8–10", verse: bibleVerses["Röm 13,8–10"] },
          { ref: "Jak 2,8.10–12", verse: bibleVerses["Jak 2,8.10–12"] },
          { ref: "Jak 2,10–11", verse: bibleVerses["Jak 2,10–11"] },
          { ref: "Mt 5,17–19", verse: bibleVerses["Mt 5,17–19"] },
          { ref: "Röm 3,31", verse: bibleVerses["Röm 3,31"] }
        ]
      },
      {
        id: "6",
        title: "Der Nutzen des Gesetzes für Gläubige",
        text: `
Obwohl sich wahre Gläubige nicht unter dem Gesetz als einem Bund der Werke befinden, um dadurch gerechtfertigt oder verdammt zu werden, ist es dennoch für sie wie auch für andere von großem Nutzen, weil es ihnen als Maßstab für das Leben den Willen Gottes und ihre eigene Schuldigkeit mitteilt: Es gebietet ihnen und verpflichtet sie dazu, dementsprechend zu leben, und deckt die sündhaften Verunreinigungen ihrer Natur, ihres Herzens und ihrer Lebensführung auf, so dass sie, wenn sie sich selbst daran prüfen, an Sündenerkenntnis, Demütigung wegen der Sünde und Hass auf die Sünde zunehmen können und gleichzeitig zu einer klareren Einsicht darüber gelangen können, wie nötig sie Christus und die Vollkommenheit seines Gehorsams haben. Ferner ist das Gesetz für die Wiedergeborenen dazu nützlich, ihre Verdorbenheit dadurch einzudämmen, dass es Sünde verbietet; und seine Drohungen dienen dazu, ihnen zu zeigen, was selbst ihre Sünden noch verdient haben und welche Nöte sie in diesem Leben dafür erwarten müssen, auch wenn sie von seinem Fluch und seiner ungeminderten Härte befreit sind. Die Verheißungen des Gesetzes zeigen ihnen in gleicher Weise Gottes Wohlgefallen am Gehorsam und welche Segnungen sie bei seiner Erfüllung erwarten dürfen; doch haben sie durch das Gesetz keinen Anspruch darauf wie bei einem Bund der Werke. Wenn daher ein Mensch Gutes tut und Böses unterlässt, weil das Gesetz ihn zu dem einen ermutigt und vom anderen abhält, ist dies kein Anzeichen dafür, dass er unter dem Gesetz und nicht unter der Gnade ist.
        `,
        references: [
          { ref: "Röm 6,14", verse: bibleVerses["Röm 6,14"] },
          { ref: "Gal 2,16", verse: bibleVerses["Gal 2,16"] },
          { ref: "Röm 8,1", verse: bibleVerses["Röm 8,1"] },
          { ref: "Röm 10,4", verse: bibleVerses["Röm 10,4"] },
          { ref: "Röm 3,20", verse: bibleVerses["Röm 3,20"] },
          { ref: "Röm 7,7", verse: bibleVerses["Röm 7,7"] },
          { ref: "Röm 6,12–14", verse: bibleVerses["Röm 6,12–14"] },
          { ref: "1Petr 3,8–13", verse: bibleVerses["1Petr 3,8–13"] }
        ]
      },
      {
        id: "7",
        title: "Gesetz und Evangelium",
        text: `
Ebenso stehen die zuvor erwähnten Gebrauchsweisen des Gesetzes nicht im Widerspruch zur Gnade des Evangeliums, sondern stimmen harmonisch damit überein. Denn der Geist Christi unterwirft und befähigt den Willen des Menschen, freiwillig und freudig das zu tun, was der im Gesetz geoffenbarte Wille Gottes zu tun fordert.
        `,
        references: [
          { ref: "Gal 3,21", verse: bibleVerses["Gal 3,21"] },
          { ref: "Hes 36,27", verse: bibleVerses["Hes 36,27"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 20
     ============================ */
  {
    chapter: "20",
    title: "Über das Evangelium und das Ausmaß seiner Gnade",
    points: [
      {
        id: "1",
        title: "Die erste Offenbarung des Evangeliums",
        text: `
Nachdem der Bund der Werke durch die Sünde gebrochen worden war und kein Leben mehr geben konnte, gefiel es Gott, die Verheißung des Christus, des Samens der Frau, als das Mittel bekannt zu geben, durch das er die Erwählten beruft und in ihnen Glauben und Buße hervorbringt. In dieser Verheißung wurde das Evangelium in seinem wesentlichen Gehalt geoffenbart, und es war darin zur Bekehrung und Errettung von Sündern wirksam.
        `,
        references: [
          { ref: "1Mose 3,15", verse: bibleVerses["1Mose 3,15"] },
          { ref: "Offb 13,8", verse: bibleVerses["Offb 13,8"] }
        ]
      },
      {
        id: "2",
        title: "Die Offenbarung allein durch das Wort",
        text: `
Diese Verheißung des Christus und die Erlösung durch ihn wird nur durch das Wort Gottes offenbart. Die Werke der Schöpfung oder der Vorsehung enthüllen zusammen mit dem Licht der Natur Christus oder die von ihm ausgehende Gnade nicht einmal in einer ganz allgemeinen und unklaren Weise. Noch viel weniger können Menschen durch sie in die Lage versetzt werden, rettenden Glauben und Buße zu erlangen, ohne die Offenbarung von ihm durch die Verheißung oder das Evangelium zu kennen.
        `,
        references: [
          { ref: "Röm 1,17", verse: bibleVerses["Röm 1,17"] },
          { ref: "Röm 10,14–15.17", verse: bibleVerses["Röm 10,14–15.17"] },
          { ref: "Spr 29,18", verse: bibleVerses["Spr 29,18"] },
          { ref: "Jes 25,7", verse: bibleVerses["Jes 25,7"] },
          { ref: "Jes 60,2–3", verse: bibleVerses["Jes 60,2–3"] }
        ]
      },
      {
        id: "3",
        title: "Die souveräne Verteilung des Evangeliums",
        text: `
Die Offenbarung des Evangeliums an Sünder, die zu unterschiedlichen Zeiten und in verschiedenen Teilen geschah — wobei für die Nationen und Personen, denen es anvertraut wurde, Verheißungen und Gebote hinsichtlich des darin geforderten Gehorsams hinzugefügt wurden — geht ausschließlich auf den souveränen Willen und das Wohlgefallen Gottes zurück. Sie ist nicht kraft irgendeiner Verheißung mit der angemessenen Vervollkommnung der natürlichen Fähigkeiten des Menschen verknüpft, und auch nicht kraft des allgemeinen Lichts, das man auch ohne das Evangelium empfängt, was nie jemand geschafft hat oder schaffen kann. Daher ist die Predigt des Evangeliums zu allen Zeiten einzelnen Personen und Nationen anvertraut worden, um es gemäß dem Ratschluss des Willens Gottes auf sehr unterschiedliche Weise auszubreiten oder einzudämmen.
        `,
        references: [
          { ref: "Ps 147,20", verse: bibleVerses["Ps 147,20"] },
          { ref: "Apg 16,7", verse: bibleVerses["Apg 16,7"] },
          { ref: "Röm 1,18–32", verse: bibleVerses["Röm 1,18–32"] }
        ]
      },
      {
        id: "4",
        title: "Das Wirken des Heiligen Geistes",
        text: `
Auch wenn das Evangelium das einzige äußerliche Mittel ist, um Christus und die rettende Gnade zu offenbaren, und auch wenn es als solches völlig ausreichend dazu ist; so ist doch — damit Menschen, die in ihren Übertretungen tot sind, von neuem geboren, lebendig gemacht oder wiedergeboren werden — darüber hinaus ein wirksames, unwiderstehliches Wirken des Heiligen Geistes an der ganzen Seele nötig, um in ihnen ein neues geistliches Leben zu erzeugen, denn ohne dies kann kein anderes Mittel ihre Bekehrung zu Gott erwirken.
        `,
        references: [
          { ref: "Ps 110,3", verse: bibleVerses["Ps 110,3"] },
          { ref: "1Kor 2,14", verse: bibleVerses["1Kor 2,14"] },
          { ref: "Eph 1,19–20", verse: bibleVerses["Eph 1,19–20"] },
          { ref: "Joh 6,44", verse: bibleVerses["Joh 6,44"] },
          { ref: "2Kor 4,4.6", verse: bibleVerses["2Kor 4,4.6"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 21
     ============================ */
  {
    chapter: "21",
    title: "Über die christliche Freiheit und die Freiheit des Gewissens",
    points: [
      {
        id: "1",
        title: "Die christliche Freiheit",
        text: `
Die Freiheit, die Christus den Gläubigen unter dem Evangelium erworben hat, besteht in ihrer Freiheit von der Sündenschuld, dem verdammenden Zorn Gottes, der Härte und dem Fluch des Gesetzes und in ihrer Erlösung aus dieser gegenwärtigen bösen Welt, der Knechtschaft Satans und der Herrschaft der Sünde, von dem Übel der Leiden, der Furcht und dem Stachel des Todes, dem Sieg des Hades und der ewigen Verdammnis; ebenso in ihrem freien Zugang zu Gott und ihrem ihm ergebenen Gehorsam, der nicht aus knechtischer Furcht, sondern aus kindlicher Liebe und Bereitwilligkeit geschieht. Im Wesentlichen hatten an all dem auch die Gläubigen unter dem Gesetz Anteil. Aber unter dem Neuen Bund ist die Freiheit der Christen noch weiter vergrößert worden, indem sie vom Joch des Zeremonialgesetzes befreit worden sind, dem die jüdische Gemeinde unterworfen war, und indem sie mit größerer Freimütigkeit Zugang zum Gnadenthron haben und eine umfassendere Mitteilung des freien Geistes Gottes empfangen, als sie den Gläubigen unter dem Gesetz normalerweise zu Teil wurde.
        `,
        references: [
          { ref: "Gal 3,13", verse: bibleVerses["Gal 3,13"] },
          { ref: "Gal 1,4", verse: bibleVerses["Gal 1,4"] },
          { ref: "Apg 26,18", verse: bibleVerses["Apg 26,18"] },
          { ref: "Röm 8,3", verse: bibleVerses["Röm 8,3"] },
          { ref: "Röm 8,28", verse: bibleVerses["Röm 8,28"] },
          { ref: "1Kor 15,54–57", verse: bibleVerses["1Kor 15,54–57"] },
          { ref: "2Thess 1,10", verse: bibleVerses["2Thess 1,10"] },
          { ref: "Röm 8,15", verse: bibleVerses["Röm 8,15"] },
          { ref: "Lk 1,74–75", verse: bibleVerses["Lk 1,74–75"] },
          { ref: "1Joh 4,18", verse: bibleVerses["1Joh 4,18"] },
          { ref: "Gal 3,9.14", verse: bibleVerses["Gal 3,9.14"] },
          { ref: "Joh 7,38–39", verse: bibleVerses["Joh 7,38–39"] },
          { ref: "Hebr 10,19–21", verse: bibleVerses["Hebr 10,19–21"] }
        ]
      },
      {
        id: "2",
        title: "Die Freiheit des Gewissens",
        text: `
Gott allein ist Herr des Gewissens, und er hat es nicht an menschliche Lehren und Gebote gebunden, die in irgendeiner Weise seinem Wort entgegenstehen oder nicht darin enthalten sind. Daher wird die wahre Gewissensfreiheit verraten, wenn unter Berufung auf das Gewissen solchen Lehren geglaubt und solchen Geboten Gehorsam geleistet wird. Ebenso bedeutet die Forderung nach blindem Glauben und absolutem und blindem Gehorsam, dass die Gewissensfreiheit und auch die Freiheit der Vernunft zerstört werden.
        `,
        references: [
          { ref: "Jak 4,12", verse: bibleVerses["Jak 4,12"] },
          { ref: "Röm 14,4", verse: bibleVerses["Röm 14,4"] },
          { ref: "Apg 4,19", verse: bibleVerses["Apg 4,19"] },
          { ref: "Apg 5,29", verse: bibleVerses["Apg 5,29"] },
          { ref: "1Kor 7,23", verse: bibleVerses["1Kor 7,23"] },
          { ref: "Mt 15,9", verse: bibleVerses["Mt 15,9"] },
          { ref: "Kol 2,20.22–23", verse: bibleVerses["Kol 2,20.22–23"] },
          { ref: "1Kor 3,5", verse: bibleVerses["1Kor 3,5"] },
          { ref: "2Kor 1,24", verse: bibleVerses["2Kor 1,24"] }
        ]
      },
      {
        id: "3",
        title: "Missbrauch der christlichen Freiheit",
        text: `
Diejenigen, die unter dem Vorwand christlicher Freiheit irgendeine Sünde begehen oder an irgendeiner sündigen Lust festhalten, zerstören so — da sie dadurch die wesentliche Absicht der Gnade des Evangeliums zu ihrem eigenen Verderben verdrehen — völlig den Zweck der christlichen Freiheit, der darin besteht, dass wir, die wir aus den Händen all unserer Feinde befreit sind, ohne Furcht dem Herrn dienen, in Heiligkeit und Gerechtigkeit vor ihm alle Tage unseres Lebens.
        `,
        references: [
          { ref: "Röm 6,1–2", verse: bibleVerses["Röm 6,1–2"] },
          { ref: "Gal 5,13", verse: bibleVerses["Gal 5,13"] },
          { ref: "2Petr 2,18–21", verse: bibleVerses["2Petr 2,18–21"] }
        ]
      }
    ]
  },
  /* ============================
     KAPITEL 22
     ============================ */
  {
    chapter: "22",
    title: "Über den Gottesdienst und den Sabbat",
    points: [
      {
        id: "1",
        title: "Das Licht der Natur und die wahre Anbetung",
        text: `
Das Licht der Natur zeigt, dass es einen Gott gibt, der Herrschaft und uneingeschränkte Gewalt über alles hat; der gerecht und gut und wohltätig gegenüber jedermann ist und der deshalb mit ganzem Herzen, mit ganzer Seele und mit ganzer Kraft gefürchtet, geliebt, gepriesen und angerufen werden soll und dem vertraut und gedient werden soll. Dabei ist die angemessene Art und Weise, in welcher der wahre Gott verehrt werden soll, von ihm selbst festgesetzt worden und durch seinen eigenen geoffenbarten Willen derart gebunden, dass er nicht nach den Vorstellungen und Einfällen von Menschen oder gemäß den Anregungen Satans durch irgendwelche sichtbaren Darstellungen oder auf irgendeine sonstige Weise, die nicht in der Heiligen Schrift angeordnet ist, verehrt werden darf.
        `,
        references: [
          { ref: "Jer 10,7", verse: bibleVerses["Jer 10,7"] },
          { ref: "Mk 12,33", verse: bibleVerses["Mk 12,33"] },
          { ref: "5Mose 13,1", verse: bibleVerses["5Mose 13,1"] },
          { ref: "2Mose 20,4–6", verse: bibleVerses["2Mose 20,4–6"] }
        ]
      },
      {
        id: "2",
        title: "Wem Gottesdienst gebührt",
        text: `
Ausschließlich Gott, der Vater, Sohn und Heilige Geist, darf gottesdienstlich verehrt werden — nicht Engel, Heilige oder irgendwelche anderen Geschöpfe — und seit dem Sündenfall nicht ohne einen Mittler oder durch die Vermittlung irgend eines anderen außer Christus allein.
        `,
        references: [
          { ref: "Mt 4,9–10", verse: bibleVerses["Mt 4,9–10"] },
          { ref: "Joh 6,23", verse: bibleVerses["Joh 6,23"] },
          { ref: "Mt 28,19", verse: bibleVerses["Mt 28,19"] },
          { ref: "Röm 1,25", verse: bibleVerses["Röm 1,25"] },
          { ref: "Kol 2,18", verse: bibleVerses["Kol 2,18"] },
          { ref: "Offb 19,10", verse: bibleVerses["Offb 19,10"] },
          { ref: "Joh 14,6", verse: bibleVerses["Joh 14,6"] },
          { ref: "1Tim 2,5", verse: bibleVerses["1Tim 2,5"] }
        ]
      },
      {
        id: "3",
        title: "Das Gebet",
        text: `
Gott fordert von allen Menschen Gebet mit Danksagung, was ein besonderer Teil des natürlichen Gottesdienstes ist. Aber damit es annehmbar ist, muss es im Namen des Sohnes mit der Hilfe des Geistes, in Übereinstimmung mit seinem Willen vorgebracht werden; mit Verständnis, Ehrfurcht, Demut, Inbrunst, Glauben, Liebe und Beharrlichkeit, und wenn andere dabei sind, in einer bekannten Sprache.
        `,
        references: [
          { ref: "Ps 95,1–7", verse: bibleVerses["Ps 95,1–7"] },
          { ref: "Ps 65,3", verse: bibleVerses["Ps 65,3"] },
          { ref: "Joh 14,13–14", verse: bibleVerses["Joh 14,13–14"] },
          { ref: "Röm 8,26", verse: bibleVerses["Röm 8,26"] },
          { ref: "1Joh 5,14", verse: bibleVerses["1Joh 5,14"] },
          { ref: "1Kor 14,16–17", verse: bibleVerses["1Kor 14,16–17"] }
        ]
      },
      {
        id: "4",
        title: "Für wen gebetet werden soll",
        text: `
Man soll für die Dinge beten, die das Gesetz gutheißt, und für jegliche Menschen, die jetzt leben oder künftig leben werden; aber nicht für die Toten oder für die, von denen bekannt ist, dass sie die Sünde zum Tode begangen haben.
        `,
        references: [
          { ref: "1Tim 2,1–2", verse: bibleVerses["1Tim 2,1–2"] },
          { ref: "2Sam 7,29", verse: bibleVerses["2Sam 7,29"] },
          { ref: "2Sam 12,21–23", verse: bibleVerses["2Sam 12,21–23"] },
          { ref: "1Joh 5,16", verse: bibleVerses["1Joh 5,16"] }
        ]
      },
      {
        id: "5",
        title: "Elemente des Gottesdienstes",
        text: `
Das Lesen der Heiligen Schrift, das Predigen und Hören von Gottes Wort, das Lehren und gegenseitige Ermahnen mit Psalmen, Lobliedern und geistlichen Liedern — indem wir dem Herrn in unseren Herzen mit Gnade singen — sowie die Spende von Taufe und Abendmahl sind allesamt Teile des Gottesdienstes, die im Gehorsam gegenüber Gott mit rechtem Verständnis, in Treue, Ehrerbietung und Gottesfurcht ausgeführt werden sollen. Darüber hinaus soll in besonderen Situationen eine würdevolle Demütigung unter Fasten und Danksagung in heiliger und religiöser Weise durchgeführt werden.
        `,
        references: [
          { ref: "1Tim 4,13", verse: bibleVerses["1Tim 4,13"] },
          { ref: "2Tim 4,2", verse: bibleVerses["2Tim 4,2"] },
          { ref: "Lk 8,18", verse: bibleVerses["Lk 8,18"] },
          { ref: "Kol 3,16", verse: bibleVerses["Kol 3,16"] },
          { ref: "Eph 5,19", verse: bibleVerses["Eph 5,19"] },
          { ref: "Mt 28,19–20", verse: bibleVerses["Mt 28,19–20"] },
          { ref: "1Kor 11,26", verse: bibleVerses["1Kor 11,26"] },
          { ref: "Est 4,16", verse: bibleVerses["Est 4,16"] },
          { ref: "Joel 2,12", verse: bibleVerses["Joel 2,12"] },
          { ref: "2Mose 15,1", verse: bibleVerses["2Mose 15,1"] },
          { ref: "Ps 107", verse: bibleVerses["Ps 107"] }
        ]
      },
      {
        id: "6",
        title: "Ort und Zeit des Gottesdienstes",
        text: `
Weder Gebet noch irgend ein anderer Teil des Gottesdienstes ist jetzt unter dem Evangelium an einen bestimmten Ort gebunden oder annehmbarer, wenn es dort vollzogen wird oder zu ihm hin gerichtet ist. Vielmehr soll Gott überall in Geist und Wahrheit angebetet werden, täglich im engsten Kreise der Familie, im Verborgenen von jedem für sich selbst und um so ernsthafter in den öffentlichen Gemeindeversammlungen, die nicht sorglos oder absichtlich vernachlässigt oder versäumt werden dürfen, wenn Gott durch sein Wort oder seine Vorsehung dazu aufruft.
        `,
        references: [
          { ref: "Joh 4,21", verse: bibleVerses["Joh 4,21"] },
          { ref: "Mal 1,11", verse: bibleVerses["Mal 1,11"] },
          { ref: "1Tim 2,8", verse: bibleVerses["1Tim 2,8"] },
          { ref: "Mt 6,11", verse: bibleVerses["Mt 6,11"] },
          { ref: "Ps 55,18", verse: bibleVerses["Ps 55,18"] },
          { ref: "Apg 10,2", verse: bibleVerses["Apg 10,2"] },
          { ref: "Mt 6,6", verse: bibleVerses["Mt 6,6"] },
          { ref: "Hebr 10,25", verse: bibleVerses["Hebr 10,25"] },
          { ref: "Apg 2,42", verse: bibleVerses["Apg 2,42"] }
        ]
      },
      {
        id: "7",
        title: "Der Sabbat",
        text: `
So wie das Gesetz der Natur durch Gottes Bestimmung vorsieht, dass üblicherweise ein Teil der Zeit für den Gottesdienst bestimmt ist, so hat Gott in seinem Wort in einem eindeutigen, moralischen und immer gültigen Gebot, das für alle Menschen zu allen Zeiten bindend ist, einen von sieben Tagen als Sabbat festgelegt, der für ihn heilig gehalten werden soll. Vom Anfang der Welt bis zur Auferstehung Christi war dies der letzte Tag der Woche, seit der Auferstehung Christi wurde er auf den ersten Tag der Woche verlegt, der Tag des Herrn genannt wird: Dieser soll bis zum Ende der Welt als christlicher Sabbat beibehalten werden, wodurch die Einhaltung des letzten Tages der Woche aufgehoben ist.
        `,
        references: [
          { ref: "2Mose 20,8", verse: bibleVerses["2Mose 20,8"] },
          { ref: "1Kor 16,1–2", verse: bibleVerses["1Kor 16,1–2"] },
          { ref: "Apg 20,7", verse: bibleVerses["Apg 20,7"] },
          { ref: "Offb 1,10", verse: bibleVerses["Offb 1,10"] }
        ]
      },
      {
        id: "8",
        title: "Die Heiligung des Sabbats",
        text: `
Der Sabbat wird dann dem Herrn heilig gehalten, wenn man nach angemessener Vorbereitung des Herzens und nachdem man die alltäglichen Angelegenheiten im Voraus erledigt hat, sich nicht lediglich den ganzen Tag über eine heilige Ruhe von den eigenen Werken, Worten und Gedanken über die weltliche Arbeit und Vergnügungen gönnt, sondern wenn man darüber hinaus die ganze Zeit mit der öffentlichen und privaten Verehrung Gottes beschäftigt ist und mit den Pflichten, die notwendig sind und welche die Barmherzigkeit von uns fordert.
        `,
        references: [
          { ref: "Jes 58,13", verse: bibleVerses["Jes 58,13"] },
          { ref: "Neh 13,15–23", verse: bibleVerses["Neh 13,15–23"] },
          { ref: "Mt 12,1–13", verse: bibleVerses["Mt 12,1–13"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 23
     ============================ */
  {
    chapter: "23",
    title: "Über rechtmäßige Eide und Gelübde",
    points: [
      {
        id: "1",
        title: "Die Natur des Eides",
        text: `
Ein rechtmäßiger Eid ist Teil der Gottesverehrung, worin jemand in Wahrheit, Rechtschaffenheit und mit Urteilsvermögen schwört und feierlich Gott zum Zeugen für das anruft, was er schwört, und zum Richter über sich selbst anruft, je nachdem, ob er den Eid treu einhält oder ihn bricht.
        `,
        references: [
          { ref: "2Mose 20,7", verse: bibleVerses["2Mose 20,7"] },
          { ref: "5Mose 10,20", verse: bibleVerses["5Mose 10,20"] },
          { ref: "Jer 4,2", verse: bibleVerses["Jer 4,2"] },
          { ref: "2Chr 6,22–23", verse: bibleVerses["2Chr 6,22–23"] }
        ]
      },
      {
        id: "2",
        title: "Bei wem geschworen werden darf",
        text: `
Menschen dürfen allein beim Namen Gottes schwören, der dabei mit aller heiligen Furcht und Ehrerbietung gebraucht werden muss. Deswegen ist unnötiges und übereiltes Schwören bei diesem herrlichen und furchterregenden Namen oder überhaupt Schwören bei irgendeiner anderen Sache sündig und muss verabscheut werden. Weil jedoch in gewichtigen und weitreichenden Angelegenheiten ein Eid vom Wort Gottes her gerechtfertigt ist, um die Wahrheit zu bekräftigen und allen Streit zu beenden, soll ein rechtmäßiger Eid, der in solchen Angelegenheiten von einer rechtmäßigen Autorität eingefordert wird, auch geleistet werden.
        `,
        references: [
          { ref: "Mt 5,34.37", verse: bibleVerses["Mt 5,34.37"] },
          { ref: "Jak 5,12", verse: bibleVerses["Jak 5,12"] },
          { ref: "Hebr 6,16", verse: bibleVerses["Hebr 6,16"] },
          { ref: "2Kor 1,23", verse: bibleVerses["2Kor 1,23"] },
          { ref: "Neh 13,25", verse: bibleVerses["Neh 13,25"] }
        ]
      },
      {
        id: "3",
        title: "Die Sorgfalt beim Schwören",
        text: `
Jeder, der einen vom Wort Gottes her gerechtfertigten Eid leistet, soll in angemessener Weise erwägen, wie gewichtig eine solch ernste Handlung ist, und sich dabei ausschließlich für das verbürgen, wovon er weiß, dass es die Wahrheit ist; denn vorschnelle, falsche und unnütze Eide erzürnen den Herrn, und unter ihnen leidet dieses Land.
        `,
        references: [
          { ref: "3Mose 19,12", verse: bibleVerses["3Mose 19,12"] },
          { ref: "Jer 23,10", verse: bibleVerses["Jer 23,10"] }
        ]
      },
      {
        id: "4",
        title: "Die Form des Eides",
        text: `
Ein Eid soll im offenkundigen und üblichen Sinn der Worte ohne Zweideutigkeit oder inneren Vorbehalt geleistet werden.
        `,
        references: [
          { ref: "Ps 24,4", verse: bibleVerses["Ps 24,4"] }
        ]
      },
      {
        id: "5",
        title: "Gelübde",
        text: `
Ein Gelübde, das nicht gegenüber irgendeinem Geschöpf, sondern allein gegenüber Gott abgelegt werden darf, muss mit aller religiösen Sorgfalt und Treue erfüllt werden. Doch papistische klösterliche Gelübde zu lebenslanger Ehelosigkeit, ausgesprochener Armut und Ordensgehorsam sind weit davon entfernt, Grade höherer Vollkommenheit zu sein, so dass sie abergläubische und sündhafte Schlingen sind, in die sich kein Christ verstricken sollte.
        `,
        references: [
          { ref: "Ps 76,12", verse: bibleVerses["Ps 76,12"] },
          { ref: "1Mose 28,20–22", verse: bibleVerses["1Mose 28,20–22"] },
          { ref: "1Kor 7,2.9", verse: bibleVerses["1Kor 7,2.9"] },
          { ref: "Eph 4,28", verse: bibleVerses["Eph 4,28"] },
          { ref: "Mt 19,11", verse: bibleVerses["Mt 19,11"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 24
     ============================ */
  {
    chapter: "24",
    title: "Über die staatliche Obrigkeit",
    points: [
      {
        id: "1",
        title: "Die Einsetzung der Obrigkeit",
        text: `
Gott, der oberste Herr und König der ganzen Welt, hat zu seiner eigenen Ehre und zum öffentlichen Wohl staatliche Obrigkeiten unter sich über das Volk eingesetzt. Zu diesem Zweck hat er sie mit der Gewalt des Schwertes ausgerüstet, um diejenigen, die Gutes tun, zu schützen und zu ermutigen und um die Übeltäter zu bestrafen.
        `,
        references: [
          { ref: "Röm 13,1–4", verse: bibleVerses["Röm 13,1–4"] }
        ]
      },
      {
        id: "2",
        title: "Christen in obrigkeitlichen Ämtern",
        text: `
Es ist Christen erlaubt, ein obrigkeitliches Amt anzunehmen und auszuüben, wenn sie dazu berufen werden. Da es vor allem ihre Aufgabe ist, Gerechtigkeit und Frieden gemäß den guten Gesetzen eines jeden Staates und Gemeinwesens aufrechtzuerhalten, sind sie zu diesem Zweck auch jetzt unter dem Neuen Bund berechtigt, aus gerechten und notwendigen Anlässen Krieg zu führen.
        `,
        references: [
          { ref: "2Sam 23,3", verse: bibleVerses["2Sam 23,3"] },
          { ref: "Ps 82,3–4", verse: bibleVerses["Ps 82,3–4"] },
          { ref: "Lk 3,14", verse: bibleVerses["Lk 3,14"] }
        ]
      },
      {
        id: "3",
        title: "Die Pflicht gegenüber der Obrigkeit",
        text: `
Staatliche Obrigkeiten sind von Gott für die zuvor genannten Ziele eingesetzt worden. Wir sollen ihnen in allen rechtmäßigen Dingen, die sie befehlen, im Herrn untertänig sein, nicht nur um der Strafe, sondern auch um des Gewissens willen. Ebenso sollen wir Fürbitte tun und für Könige und alle, die Macht ausüben, beten, damit wir unter ihnen ein ruhiges und friedliches Leben in aller Gottesfurcht und Ehrbarkeit führen können.
        `,
        references: [
          { ref: "Röm 13,5–7", verse: bibleVerses["Röm 13,5–7"] },
          { ref: "1Petr 2,17", verse: bibleVerses["1Petr 2,17"] },
          { ref: "1Tim 2,1–2", verse: bibleVerses["1Tim 2,1–2"] }
        ]
      }
    ]
  },
  /* ============================
     KAPITEL 25
     ============================ */
  {
    chapter: "25",
    title: "Über Ehe",
    points: [
      {
        id: "1",
        title: "Die Definition der Ehe",
        text: `
Eine Ehe besteht zwischen einem Mann und einer Frau. Weder ist es irgendeinem Mann gestattet, gleichzeitig mehr als eine Frau, noch irgendeiner Frau, gleichzeitig mehr als einen Mann zu haben.
        `,
        references: [
          { ref: "1Mose 2,24", verse: bibleVerses["1Mose 2,24"] },
          { ref: "Mal 2,15", verse: bibleVerses["Mal 2,15"] },
          { ref: "Mt 19,5–6", verse: bibleVerses["Mt 19,5–6"] }
        ]
      },
      {
        id: "2",
        title: "Die Zwecke der Ehe",
        text: `
Die Ehe ist zur gegenseitigen Hilfe von Mann und Frau bestimmt, zur Vermehrung der Menschheit durch legitime Nachkommen und zur Vermeidung von Unreinheit.
        `,
        references: [
          { ref: "1Mose 2,18", verse: bibleVerses["1Mose 2,18"] },
          { ref: "1Mose 1,28", verse: bibleVerses["1Mose 1,28"] },
          { ref: "1Kor 7,2.9", verse: bibleVerses["1Kor 7,2.9"] }
        ]
      },
      {
        id: "3",
        title: "Wer heiraten darf",
        text: `
Allen Menschen, die in der Lage sind, zurechnungsfähig ihre Einwilligung zu geben, ist es erlaubt zu heiraten. Doch ist es die Pflicht der Christen, die Ehe im Herrn zu schließen. Daher sollen diejenigen, die sich zur wahren Religion bekennen, nicht mit Ungläubigen oder Götzendienern die Ehe eingehen, noch sollen Gottesfürchtige unter fremdartigem Joch gehen, indem sie solche heiraten, die ein gottloses Leben führen oder an verdammenswerten Irrlehren festhalten.
        `,
        references: [
          { ref: "Hebr 13,4", verse: bibleVerses["Hebr 13,4"] },
          { ref: "1Tim 4,3", verse: bibleVerses["1Tim 4,3"] },
          { ref: "1Kor 7,39", verse: bibleVerses["1Kor 7,39"] },
          { ref: "Neh 13,25–27", verse: bibleVerses["Neh 13,25–27"] }
        ]
      },
      {
        id: "4",
        title: "Verbotene Ehen",
        text: `
Eine Ehe darf nicht zwischen den Graden von Blutsverwandtschaft oder Verschwägerung bestehen, die im Wort verboten sind. Auch kann keine solch blutschänderische Ehe durch irgendein menschliches Gesetz oder durch das beiderseitige Einverständnis der Partner jemals rechtmäßig werden, so dass diese Personen wie Mann und Frau zusammenleben dürften.
        `,
        references: [
          { ref: "Lev 18", verse: bibleVerses["Lev 18"] },
          { ref: "Mk 6,18", verse: bibleVerses["Mk 6,18"] },
          { ref: "1Kor 5,1", verse: bibleVerses["1Kor 5,1"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 26
     ============================ */
  {
    chapter: "26",
    title: "Über die Gemeinde",
    points: [
      {
        id: "1",
        title: "Die unsichtbare Gemeinde",
        text: `
Die katholische oder weltweite Gemeinde, die (im Blick auf das innere Wirken des Geistes und der Wahrheit der Gnade) unsichtbar genannt werden kann, besteht aus der Gesamtzahl der Erwählten, die in Vergangenheit, Gegenwart oder Zukunft unter Christus, ihrem Haupt, in eins vereinigt sind. Sie ist die Braut, der Leib und die Fülle dessen, der alles in allen erfüllt.
        `,
        references: [
          { ref: "Hebr 12,23", verse: bibleVerses["Hebr 12,23"] },
          { ref: "Kol 1,18", verse: bibleVerses["Kol 1,18"] },
          { ref: "Eph 1,10.22–23", verse: bibleVerses["Eph 1,10.22–23"] },
          { ref: "Eph 5,23.27.32", verse: bibleVerses["Eph 5,23.27.32"] }
        ]
      },
      {
        id: "2",
        title: "Die sichtbare Gemeinde",
        text: `
Alle diejenigen auf der ganzen Welt, die den Glauben des Evangeliums bekennen und im entsprechenden Gehorsam gegenüber Gott durch Christus leben, wobei sie ihr eigenes Bekenntnis nicht durch irgendwelche Irrtümer, die das Fundament umkehren, oder durch unheiligen Umgang zerstören, sind sichtbare Heilige und können so genannt werden. Und aus solchen sollen sich die einzelnen Ortsgemeinden zusammensetzen.
        `,
        references: [
          { ref: "1Kor 1,2", verse: bibleVerses["1Kor 1,2"] },
          { ref: "Apg 11,26", verse: bibleVerses["Apg 11,26"] },
          { ref: "Röm 1,7", verse: bibleVerses["Röm 1,7"] },
          { ref: "Eph 1,20–22", verse: bibleVerses["Eph 1,20–22"] }
        ]
      },
      {
        id: "3",
        title: "Die Reinheit der Gemeinden",
        text: `
Die reinsten Gemeinden unter dem Himmel sind Vermischung und Irrtum unterworfen, und manche sind so entartet, dass sie nicht einmal mehr Gemeinden Christi sind, sondern Synagogen Satans. Dennoch hatte Christus immer ein Reich in dieser Welt, und er wird es auch bis zu ihrem Ende haben, das aus denen besteht, die an ihn glauben und seinen Namen bekennen.
        `,
        references: [
          { ref: "1Kor 5", verse: bibleVerses["1Kor 5"] },
          { ref: "Offb 2–3", verse: bibleVerses["Offb 2–3"] },
          { ref: "Offb 18,2", verse: bibleVerses["Offb 18,2"] },
          { ref: "2Thess 2,11–12", verse: bibleVerses["2Thess 2,11–12"] },
          { ref: "Mt 16,18", verse: bibleVerses["Mt 16,18"] },
          { ref: "Ps 72,17", verse: bibleVerses["Ps 72,17"] },
          { ref: "Ps 102,29", verse: bibleVerses["Ps 102,29"] },
          { ref: "Offb 12,17", verse: bibleVerses["Offb 12,17"] }
        ]
      },
      {
        id: "4",
        title: "Christus als Haupt der Gemeinde",
        text: `
Der Herr Jesus Christus ist das Haupt der Gemeinde, auf den durch die Einsetzung des Vaters alle Macht zur Berufung, Einsetzung, Ordnung und Leitung der Gemeinde in höchster und souveräner Weise übertragen worden ist. Auch der römische Papst kann in keiner Weise ihr Haupt sein, vielmehr ist er der Antichrist, der Mensch der Gesetzlosigkeit und der Sohn des Verderbens, der sich in der Gemeinde gegen Christus auflehnt und sich über alles, was Gott heißt, überhebt; ihn wird der Herr bei der Erscheinung seiner Ankunft vernichten.
        `,
        references: [
          { ref: "Kol 1,18", verse: bibleVerses["Kol 1,18"] },
          { ref: "Mt 28,18–20", verse: bibleVerses["Mt 28,18–20"] },
          { ref: "Eph 4,11–12", verse: bibleVerses["Eph 4,11–12"] },
          { ref: "2Thess 2,3–9", verse: bibleVerses["2Thess 2,3–9"] }
        ]
      },
      {
        id: "5",
        title: "Die Berufung zur Gemeinde",
        text: `
In der Ausübung der ihm in dieser Weise anvertrauten Macht, ruft der Herr Jesus mittels des Dienstes seines Wortes durch seinen Geist diejenigen aus der Welt zu sich, die ihm von seinem Vater gegeben worden sind, damit sie in uneingeschränktem Gehorsam vor ihm leben, wie er es ihnen in seinem Wort vorgeschrieben hat. All denen, die so berufen wurden, hat er geboten, ihm gemeinsam in einzelnen Gemeinschaften oder Ortsgemeinden nachzufolgen, zu ihrer gegenseitigen Erbauung und um den Gottesdienst, den er von ihnen in der Welt fordert, in angemessener Weise öffentlich abzuhalten.
        `,
        references: [
          { ref: "Joh 10,16", verse: bibleVerses["Joh 10,16"] },
          { ref: "Joh 12,32", verse: bibleVerses["Joh 12,32"] },
          { ref: "Mt 28,20", verse: bibleVerses["Mt 28,20"] },
          { ref: "Mt 18,15–20", verse: bibleVerses["Mt 18,15–20"] }
        ]
      },
      {
        id: "6",
        title: "Die Glieder der Gemeinde",
        text: `
Die Glieder dieser Gemeinden sind auf Grund ihrer Berufung Heilige, die (in ihrem Bekenntnis und durch ihren Lebenswandel) sichtbar ihren Gehorsam gegenüber dieser Berufung Christi offenbar machen und belegen; und die bereitwillig darin übereinkommen, gemeinsam Christus seiner Anordnung entsprechend nachzufolgen, indem sie sich selbst nach Gottes Willen dem Herrn und einander völlig hingeben, wobei sie öffentlich bekennen, dass sie sich den Anordnungen des Evangeliums unterordnen.
        `,
        references: [
          { ref: "Röm 1,7", verse: bibleVerses["Röm 1,7"] },
          { ref: "1Kor 1,2", verse: bibleVerses["1Kor 1,2"] },
          { ref: "Apg 2,41–42", verse: bibleVerses["Apg 2,41–42"] },
          { ref: "Apg 5,13–14", verse: bibleVerses["Apg 5,13–14"] },
          { ref: "2Kor 9,13", verse: bibleVerses["2Kor 9,13"] }
        ]
      },
      {
        id: "7",
        title: "Die Autorität der Ortsgemeinde",
        text: `
Jeder einzelnen Gemeinde, die sich auf diese Weise versammelt, hat er — gemäß seinem Willen, der in seinem Wort dargelegt ist — all die Macht und Autorität gegeben, die auf jeden Fall notwendig ist, damit sie die Anordnung bezüglich des Gottesdienstes und der Gemeindezucht ausführen können, was er ihnen in Verbindung mit Geboten und Regeln für den rechten Gebrauch und die rechte Ausübung dieser Macht zu befolgen geboten hat.
        `,
        references: [
          { ref: "Mt 18,17–18", verse: bibleVerses["Mt 18,17–18"] },
          { ref: "1Kor 5,4–5.13", verse: bibleVerses["1Kor 5,4–5.13"] },
          { ref: "2Kor 2,6–8", verse: bibleVerses["2Kor 2,6–8"] }
        ]
      },
      {
        id: "8",
        title: "Die Ämter in der Gemeinde",
        text: `
Eine Ortsgemeinde, die sich im Sinne Christi versammelt und vollständig eingerichtet ist, besteht aus Amtsträgern und Gliedern. Die von Christus berufenen Amtsträger, die von der (zu diesem Zwecke eigens zusammengerufenen) Gemeinde bestimmt und ausgesondert werden sollen, um die besondere Verwaltung der Anordnungen wahrzunehmen und die Vollmacht, die er ihnen anvertraut, und die Pflicht, zu der er sie beruft, auszuüben, was bis zum Ende der Welt beibehalten werden soll, sind Aufseher oder Älteste und Diakone.
        `,
        references: [
          { ref: "Apg 20,17.28", verse: bibleVerses["Apg 20,17.28"] },
          { ref: "Phil 1,1", verse: bibleVerses["Phil 1,1"] }
        ]
      },
      {
        id: "9",
        title: "Die Einsetzung der Amtsträger",
        text: `
Die von Christus festgelegte Art und Weise zur Berufung eines Mannes, der vom Heiligen Geist zum Amt des Aufsehers oder Ältesten in einer Gemeinde befähigt und begabt ist, ist die, dass dieser dazu durch gemeinsame Abstimmung von der Gemeinde selbst bestimmt wird. Durch Fasten und Beten soll er feierlich mit Handauflegung der Gemeindeältesten ausgesondert werden, falls schon vorher welche dazu eingesetzt worden waren. Auch ein Diakon soll in gleicher Weise durch Abstimmung bestimmt und durch Gebet ausgesondert werden, ebenfalls mit Handauflegung.
        `,
        references: [
          { ref: "Apg 14,23", verse: bibleVerses["Apg 14,23"] },
          { ref: "1Tim 4,14", verse: bibleVerses["1Tim 4,14"] },
          { ref: "Apg 6,3.5–6", verse: bibleVerses["Apg 6,3.5–6"] }
        ]
      },
      {
        id: "10",
        title: "Die Aufgabe der Pastoren",
        text: `
Die Aufgabe der Pastoren besteht darin, sich ständig dem Dienst für Christus in seinen Gemeinden zu widmen, in der Verkündigung des Wortes und im Gebet, indem sie sich um ihre Seelen kümmern, weil sie Christus Rechenschaft geben müssen. Die Gemeinden, denen sie dienen, sind dazu verpflichtet, ihnen nicht nur den nötigen Respekt entgegenzubringen, sondern ihnen auch, so weit das möglich ist, von all ihren eigenen Gütern etwas zukommen zu lassen, so dass sie gut versorgt sind, ohne selbst in weltliche Dinge verwickelt zu sein, und auch anderen gegenüber gastfreundlich sein können. Dies fordert das Gesetz der Natur und die ausdrückliche Anordnung unseres Herrn Jesus, der befohlen hat, dass diejenigen, welche das Evangelium verkündigen, vom Evangelium leben sollen.
        `,
        references: [
          { ref: "Apg 6,4", verse: bibleVerses["Apg 6,4"] },
          { ref: "Hebr 13,17", verse: bibleVerses["Hebr 13,17"] },
          { ref: "1Tim 5,17–18", verse: bibleVerses["1Tim 5,17–18"] },
          { ref: "Gal 6,6–7", verse: bibleVerses["Gal 6,6–7"] },
          { ref: "2Tim 2,4", verse: bibleVerses["2Tim 2,4"] },
          { ref: "1Tim 3,2", verse: bibleVerses["1Tim 3,2"] },
          { ref: "1Kor 9,6–14", verse: bibleVerses["1Kor 9,6–14"] }
        ]
      },
      {
        id: "11",
        title: "Das Predigen des Wortes",
        text: `
Obwohl die Aufseher oder Pastoren der Gemeinden auf Grund ihres Amtes dringend dazu verpflichtet sind, das Wort zu verkünden, ist das Predigen des Wortes dennoch nicht auf sie allein beschränkt. Andere, die ebenfalls vom Heiligen Geist dafür begabt und befähigt sind und von der Gemeinde anerkannt und dazu berufen wurden, dürfen und sollen ebenfalls predigen.
        `,
        references: [
          { ref: "Apg 11,19–21", verse: bibleVerses["Apg 11,19–21"] },
          { ref: "1Petr 4,10–11", verse: bibleVerses["1Petr 4,10–11"] }
        ]
      },
      {
        id: "12",
        title: "Die Gemeindezucht",
        text: `
So wie alle Gläubigen verpflichtet sind, sich selbst Ortsgemeinden anzuschließen, wenn und wo sie die Möglichkeit dazu haben, dies zu tun, so stehen alle, die zu den Vorrechten einer Gemeinde zugelassen sind, auch unter deren Zucht und Leitung gemäß der Herrschaft Christi.
        `,
        references: [
          { ref: "1Thess 5,14", verse: bibleVerses["1Thess 5,14"] },
          { ref: "2Thess 3,6.14–15", verse: bibleVerses["2Thess 3,6.14–15"] }
        ]
      },
      {
        id: "13",
        title: "Umgang mit Kränkungen",
        text: `
Ein Gemeindeglied, das durch irgendetwas gekränkt wurde — nachdem es die Pflicht erfüllt hat, die von ihm gegenüber demjenigen verlangt wird, durch den es sich gekränkt fühlt — soll die Ordnung der Gemeinde nicht stören oder sich selbst von den Gemeindeversammlungen oder der Durchführung einer der Anordnungen mit der Begründung fernhalten, dass es durch ein anderes Glied gekränkt wurde, sondern im weiteren Vorgehen der Gemeinde die Hoffnung auf Christus setzen.
        `,
        references: [
          { ref: "Mt 18,15–17", verse: bibleVerses["Mt 18,15–17"] },
          { ref: "Eph 4,2–3", verse: bibleVerses["Eph 4,2–3"] }
        ]
      },
      {
        id: "14",
        title: "Gemeindeverbindung",
        text: `
So wie jede Gemeinde und alle ihre Glieder dazu verpflichtet sind, ständig für das Wohl und Gedeihen aller Gemeinden Christi an allen Orten zu beten und sie bei jeder Gelegenheit zu unterstützen (jede einzelne innerhalb ihres Gebietes und ihrer Berufung durch die Ausübung ihrer Begabungen und Gnadengaben), so sollen die Gemeinden (wenn sie nach Gottes Vorsehung gegründet wurden, soweit sie die Möglichkeit und Gelegenheit dazu besitzen) Verbindung untereinander haben, zu ihrem Frieden, zum Wachstum in der Liebe und zur gegenseitigen Erbauung.
        `,
        references: [
          { ref: "Eph 6,18", verse: bibleVerses["Eph 6,18"] },
          { ref: "Ps 122,6", verse: bibleVerses["Ps 122,6"] },
          { ref: "Röm 16,1–2", verse: bibleVerses["Röm 16,1–2"] },
          { ref: "3Joh 8–10", verse: bibleVerses["3Joh 8–10"] }
        ]
      },
      {
        id: "15",
        title: "Synoden und Räte",
        text: `
In den Fällen, dass Schwierigkeiten oder Meinungsverschiedenheiten auftreten, sei es bezüglich einer Lehre oder einer Amtsausübung — wobei entweder die Gemeinden im allgemeinen oder eine einzelne Gemeinde in ihrem Frieden, ihrer Einheit und ihrer Erbauung betroffen sind — oder dass eines oder mehrere Glieder einer Gemeinde in einem oder durch ein Gemeindezuchtverfahren gekränkt wurden, das nicht der Wahrheit und Ordnung entsprach, entspricht es dem Willen Christi, dass viele Gemeinden, die in Verbindung miteinander stehen, mittels Delegierter zusammenkommen, um zu beraten und einen Rat bezüglich der Meinungsverschiedenheit zu geben, was allen betroffenen Gemeinden mitgeteilt werden soll. Dabei sind die versammelten Delegierten nicht mit Gemeindegewalt, die richtigerweise so genannt wird, oder Gerichtsbarkeit über die Gemeinden selbst ausgestattet, weder um Zucht über irgendwelche Gemeinden oder Personen auszuüben noch um ihren Beschluss den Gemeinden oder Amtsträgern aufzuzwingen.
        `,
        references: [
          { ref: "Apg 15,2.4.6.22–23.25", verse: bibleVerses["Apg 15,2.4.6.22–23.25"] },
          { ref: "2Kor 1,24", verse: bibleVerses["2Kor 1,24"] },
          { ref: "1Joh 4,1", verse: bibleVerses["1Joh 4,1"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 27
     ============================ */
  {
    chapter: "27",
    title: "Über die Glaubensgemeinschaft der Heiligen",
    points: [
      {
        id: "1",
        title: "Die Gemeinschaft mit Christus und untereinander",
        text: `
Alle Heiligen, die mit Jesus Christus, ihrem Haupt, durch seinen Geist und durch den Glauben vereinigt sind, auch wenn sie dadurch nicht eine Person mit ihm geworden sind, haben Gemeinschaft an seinen Gnadengaben, seinen Leiden, seinem Tod, seiner Auferstehung und seiner Herrlichkeit. Und indem sie miteinander in Liebe verbunden sind, haben sie untereinander Gemeinschaft an den Begabungen und Gnadengaben der anderen und sind dazu verpflichtet, solchen Pflichten in der rechten Weise öffentlich und privat nachzukommen, die für ihr gegenseitiges Wohl sowohl am äußeren als auch am inneren Menschen förderlich sind.
        `,
        references: [
          { ref: "1Joh 1,3", verse: bibleVerses["1Joh 1,3"] },
          { ref: "Joh 1,16", verse: bibleVerses["Joh 1,16"] },
          { ref: "Phil 3,10", verse: bibleVerses["Phil 3,10"] },
          { ref: "Röm 6,5–6", verse: bibleVerses["Röm 6,5–6"] },
          { ref: "Eph 4,15–16", verse: bibleVerses["Eph 4,15–16"] },
          { ref: "1Kor 12,7", verse: bibleVerses["1Kor 12,7"] },
          { ref: "1Kor 3,21–23", verse: bibleVerses["1Kor 3,21–23"] },
          { ref: "1Thess 5,11.14", verse: bibleVerses["1Thess 5,11.14"] },
          { ref: "Röm 1,12", verse: bibleVerses["Röm 1,12"] },
          { ref: "1Joh 3,17–18", verse: bibleVerses["1Joh 3,17–18"] },
          { ref: "Gal 6,10", verse: bibleVerses["Gal 6,10"] }
        ]
      },
      {
        id: "2",
        title: "Die Ausübung der Gemeinschaft",
        text: `
Diejenigen, die sich als Heilige bekennen, sind dazu verpflichtet, einen heiligen Umgang und eine heilige Gemeinschaft in der Anbetung Gottes zu pflegen und derartige andere geistliche Dienste auszuüben, die auf ihre gegenseitige Erbauung ausgerichtet sind. Ebenso sollen sie sich auch je nach ihren unterschiedlichen Fähigkeiten und Bedürfnissen gegenseitig in weltlichen Angelegenheiten unterstützen. Auch wenn diese Gemeinschaft nach der Anordnung des Evangeliums von ihnen hauptsächlich in ihren jeweiligen Beziehungen, sei es in der Familie oder in den Gemeinden, ausgeübt werden soll, so ist sie doch, so wie Gott die Gelegenheit dazu gibt, auf alle Hausgenossen des Glaubens auszudehnen, sogar auf alle diejenigen, die an jedem Ort den Namen des Herrn Jesus anrufen. Dennoch hebt die Gemeinschaft, die sie als Heilige miteinander haben, weder das Recht oder Eigentum, das jeder an seinen Gütern und an seinem Besitz hat, auf, noch schränkt sie es ein.
        `,
        references: [
          { ref: "Hebr 10,24–25", verse: bibleVerses["Hebr 10,24–25"] },
          { ref: "Hebr 3,12–13", verse: bibleVerses["Hebr 3,12–13"] },
          { ref: "Apg 11,29–30", verse: bibleVerses["Apg 11,29–30"] },
          { ref: "Eph 6,4", verse: bibleVerses["Eph 6,4"] },
          { ref: "1Kor 12,14–27", verse: bibleVerses["1Kor 12,14–27"] },
          { ref: "Apg 5,4", verse: bibleVerses["Apg 5,4"] },
          { ref: "Eph 4,28", verse: bibleVerses["Eph 4,28"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 28
     ============================ */
  {
    chapter: "28",
    title: "Über die Taufe und das Abendmahl",
    points: [
      {
        id: "1",
        title: "Die Sakramente des Neuen Testaments",
        text: `
Taufe und Abendmahl sind Anordnungen von ausdrücklichem und oberstem Recht, die vom Herrn Jesus, dem einzigen Gesetzgeber, festgelegt worden sind, damit sie in seiner Gemeinde bis ans Ende der Welt durchgeführt werden.
        `,
        references: [
          { ref: "Mt 28,19–20", verse: bibleVerses["Mt 28,19–20"] },
          { ref: "1Kor 11,26", verse: bibleVerses["1Kor 11,26"] }
        ]
      },
      {
        id: "2",
        title: "Die Verwaltung der Sakramente",
        text: `
Diese heiligen Verordnungen dürfen nur von solchen verwaltet werden, die dafür geeignet und nach dem Befehl Christi dazu berufen worden sind.
        `,
        references: [
          { ref: "Mt 28,19", verse: bibleVerses["Mt 28,19"] },
          { ref: "1Kor 4,1", verse: bibleVerses["1Kor 4,1"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 29
     ============================ */
  {
    chapter: "29",
    title: "Über die Taufe",
    points: [
      {
        id: "1",
        title: "Die Bedeutung der Taufe",
        text: `
Die Taufe ist eine Anordnung des Neuen Testaments, die von Jesus Christus eingesetzt wurde. Sie ist für den Getauften ein Zeichen für die Gemeinschaft mit ihm in seinem Tod und seiner Auferstehung, für sein Eingepfropftsein in ihn, für die Sündenvergebung und für seine Hingabe an Gott durch Jesus Christus, um in der Neuheit des Lebens zu leben und zu wandeln.
        `,
        references: [
          { ref: "Röm 6,3–5", verse: bibleVerses["Röm 6,3–5"] },
          { ref: "Kol 2,12", verse: bibleVerses["Kol 2,12"] },
          { ref: "Gal 3,27", verse: bibleVerses["Gal 3,27"] },
          { ref: "Mk 1,4", verse: bibleVerses["Mk 1,4"] },
          { ref: "Apg 22,16", verse: bibleVerses["Apg 22,16"] },
          { ref: "Röm 6,2.4", verse: bibleVerses["Röm 6,2.4"] }
        ]
      },
      {
        id: "2",
        title: "Die Empfänger der Taufe",
        text: `
Diejenigen, die tatsächlich Buße zu Gott, Glauben an und Gehorsam gegenüber unserem Herrn Jesus bekennen, sind die allein zulässigen Empfänger dieser Anordnung.
        `,
        references: [
          { ref: "Mk 16,16", verse: bibleVerses["Mk 16,16"] },
          { ref: "Apg 8,36–37", verse: bibleVerses["Apg 8,36–37"] }
        ]
      },
      {
        id: "3",
        title: "Die Form der Taufe",
        text: `
Das äußere Element, das für diese Anordnung verwendet werden soll, ist Wasser, in dem der Täufling im Namen des Vaters und des Sohnes und des Heiligen Geistes getauft wird.
        `,
        references: [
          { ref: "Mt 28,19–20", verse: bibleVerses["Mt 28,19–20"] },
          { ref: "Apg 8,38", verse: bibleVerses["Apg 8,38"] }
        ]
      },
      {
        id: "4",
        title: "Die Durchführung der Taufe",
        text: `
Untertauchen oder Eintauchen der Person in Wasser ist für eine angemessene Durchführung dieser Anordnung notwendig.
        `,
        references: [
          { ref: "Mt 3,16", verse: bibleVerses["Mt 3,16"] },
          { ref: "Joh 3,23", verse: bibleVerses["Joh 3,23"] }
        ]
      }
    ]
  },
  /* ============================
     KAPITEL 30
     ============================ */
  {
    chapter: "30",
    title: "Über das Abendmahl",
    points: [
      {
        id: "1",
        title: "Die Einsetzung des Abendmahls",
        text: `
Das Abendmahl wurde von unserem Herrn Jesus in derselben Nacht eingesetzt, in der er überliefert wurde, damit es in seinen Gemeinden bis ans Ende der Welt gehalten würde zur beständigen Erinnerung und Verkündigung seiner Selbstaufopferung in seinem Tod, zur Festigung des Glaubens der Gläubigen an die daraus entstammenden Wohltaten, zu ihrer geistlichen Nahrung und ihrem Wachstum in ihm, zu ihrem weiteren Einsatz für alle und gegenüber allen Pflichten, die sie ihm schuldig sind, und damit es ein Band und sicheres Zeichen ihrer Gemeinschaft mit ihm und untereinander sei.
        `,
        references: [
          { ref: "1Kor 11,23–26", verse: bibleVerses["1Kor 11,23–26"] },
          { ref: "1Kor 10,16–17.21", verse: bibleVerses["1Kor 10,16–17.21"] }
        ]
      },
      {
        id: "2",
        title: "Das Abendmahl als Erinnerung",
        text: `
In dieser Anordnung wird Christus nicht seinem Vater geopfert, noch wird überhaupt irgendein tatsächliches Opfer zur Vergebung der Sünden von Lebenden oder Toten dargebracht. Es ist vielmehr eine bloße Erinnerung an die einmalige Selbstaufopferung, die er selbst ein für alle Mal am Kreuz dargebracht hat, sowie ein geistliches Opfer des größtmöglichen Lobes Gottes dafür. Daher ist das Messopfer der papistischen Kirche, wie sie es nennen, äußerst abscheulich, eine Beleidigung von Christi eigenem einmaligen Opfer, welches das alleinige Sühnopfer für alle Sünden der Erwählten ist.
        `,
        references: [
          { ref: "Hebr 9,25–26.28", verse: bibleVerses["Hebr 9,25–26.28"] },
          { ref: "1Kor 11,24", verse: bibleVerses["1Kor 11,24"] },
          { ref: "Mt 26,26–27", verse: bibleVerses["Mt 26,26–27"] }
        ]
      },
      {
        id: "3",
        title: "Die Durchführung des Abendmahls",
        text: `
Der Herr Jesus hat in dieser Anordnung seine Diener angewiesen, zu beten und die Elemente, Brot und Wein, zu segnen und sie damit von einem gewöhnlichen zum heiligen Gebrauch abzusondern und das Brot zu nehmen und zu brechen, den Kelch zu nehmen und beide, wobei sie auch selbst daran teilnehmen, den Kommunikanten zu geben.
        `,
        references: [
          { ref: "1Kor 11,23–26", verse: bibleVerses["1Kor 11,23–26"] }
        ]
      },
      {
        id: "4",
        title: "Missbräuche des Abendmahls",
        text: `
Dem Volk den Kelch vorzuenthalten, die Elemente anzubeten, sie zur Anbetung in die Höhe zu heben oder herumzutragen und sie für irgendeinen angeblich religiösen Zweck aufzubewahren, steht alles dem Wesen dieser Anordnung und der Einsetzung durch Christus entgegen.
        `,
        references: [
          { ref: "Mt 26,26–28", verse: bibleVerses["Mt 26,26–28"] },
          { ref: "Mt 15,9", verse: bibleVerses["Mt 15,9"] },
          { ref: "2Mose 20,4–5", verse: bibleVerses["2Mose 20,4–5"] }
        ]
      },
      {
        id: "5",
        title: "Die Elemente und ihre Bedeutung",
        text: `
Die äußeren Elemente in dieser Anordnung stehen zu ihm, dem Gekreuzigten, wenn sie in der rechten Weise zu den von Christus verordneten Gebrauchsweisen ausgesondert worden sind, in einer derartigen Beziehung, dass sie in der Tat manchmal — wenn auch mit bildlich gebrauchten Worten — so genannt werden wie die Dinge, die sie darstellen, nämlich Leib und Blut Christi, obwohl sie in ihrer Substanz und ihrer Natur nach tatsächlich und ausschließlich Brot und Wein bleiben, wie sie es vorher waren.
        `,
        references: [
          { ref: "1Kor 11,27", verse: bibleVerses["1Kor 11,27"] },
          { ref: "1Kor 11,26.28", verse: bibleVerses["1Kor 11,26.28"] }
        ]
      },
      {
        id: "6",
        title: "Ablehnung der Transsubstantiation",
        text: `
Jene Lehre, die auf einer Wandlung der Substanz von Brot und Wein in die Substanz des Leibes und Blutes Christi (gewöhnlich Transsubstantiation genannt) durch die Weihung eines Priesters oder auf irgendeine andere Weise besteht, ist nicht nur mit der Schrift, sondern auch mit dem gesunden Menschenverstand und der Vernunft unvereinbar. Sie zerstört das Wesen dieser Anordnung und war und ist bis heute die Ursache für vielfältigen Aberglauben, ja für ausgeprägten Götzendienst.
        `,
        references: [
          { ref: "Apg 3,21", verse: bibleVerses["Apg 3,21"] },
          { ref: "Lk 24,6.39", verse: bibleVerses["Lk 24,6.39"] },
          { ref: "1Kor 11,24–25", verse: bibleVerses["1Kor 11,24–25"] }
        ]
      },
      {
        id: "7",
        title: "Die geistliche Gegenwart Christi",
        text: `
Würdige Empfänger, die äußerlich an den sichtbaren Elementen dieser Anordnung teilhaben, empfangen dabei durch den Glauben auch innerlich wirklich und tatsächlich — zwar nicht fleischlich und leiblich, sondern geistlich — den gekreuzigten Christus und alle Wohltaten seines Todes und stärken sich an ihm. Der Leib und das Blut Christi sind demnach nicht leiblich oder fleischlich, sondern geistlich im Glauben der Gläubigen in dieser Anordnung ebenso gegenwärtig, wie es die Elemente selbst für ihre äußerliche Sinneswahrnehmung sind.
        `,
        references: [
          { ref: "1Kor 10,16", verse: bibleVerses["1Kor 10,16"] },
          { ref: "1Kor 11,23–26", verse: bibleVerses["1Kor 11,23–26"] }
        ]
      },
      {
        id: "8",
        title: "Unwürdige Teilnahme",
        text: `
Da sie sich nicht an der Gemeinschaft mit Christus erfreuen können, sind alle unwissenden und gottlosen Personen somit des Tisches des Herrn unwürdig und können nicht ohne große Sünde gegen ihn an diesen heiligen Geheimnissen teilhaben oder zu ihnen zugelassen werden, solange sie in diesem Zustand verharren. Jeder, der sie unwürdig empfängt, ist wahrhaftig am Leib und Blut des Herrn schuldig und isst und trinkt sich selbst zum Gericht.
        `,
        references: [
          { ref: "2Kor 6,14–15", verse: bibleVerses["2Kor 6,14–15"] },
          { ref: "1Kor 11,29", verse: bibleVerses["1Kor 11,29"] },
          { ref: "Mt 7,6", verse: bibleVerses["Mt 7,6"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 31
     ============================ */
  {
    chapter: "31",
    title: "Über den Zustand des Menschen nach dem Tod und über die Auferstehung der Toten",
    points: [
      {
        id: "1",
        title: "Der Zwischenzustand",
        text: `
Die Körper der Menschen werden nach dem Tod wieder zu Staub und verwesen; doch da ihre Seelen (die weder sterben noch schlafen) eine unsterbliche Seinsweise besitzen, kehren sie sofort zu Gott zurück, der sie gegeben hat. Die Seelen der Gerechten, die dann in Heiligkeit vollkommen gemacht sind, werden ins Paradies aufgenommen, wo sie bei Christus sind und das Angesicht Gottes in Licht und Herrlichkeit erblicken, während sie auf die völlige Erlösung ihrer Körper warten. Die Seelen der Gottlosen werden in die Hölle geworfen, wo sie in Qualen und äußerster Finsternis bleiben, aufbewahrt zum Gericht jenes großen Tages. Außer diesen beiden Aufenthaltsorten für die von ihren Körpern getrennten Seelen kennt die Schrift keinen.
        `,
        references: [
          { ref: "1Mose 3,19", verse: bibleVerses["1Mose 3,19"] },
          { ref: "Apg 13,36", verse: bibleVerses["Apg 13,36"] },
          { ref: "Pred 12,7", verse: bibleVerses["Pred 12,7"] },
          { ref: "Lk 23,43", verse: bibleVerses["Lk 23,43"] },
          { ref: "2Kor 5,1.6.8", verse: bibleVerses["2Kor 5,1.6.8"] },
          { ref: "Phil 1,23", verse: bibleVerses["Phil 1,23"] },
          { ref: "Hebr 12,23", verse: bibleVerses["Hebr 12,23"] },
          { ref: "Jud 6–7", verse: bibleVerses["Jud 6–7"] },
          { ref: "1Petr 3,19", verse: bibleVerses["1Petr 3,19"] },
          { ref: "Lk 16,23–24", verse: bibleVerses["Lk 16,23–24"] }
        ]
      },
      {
        id: "2",
        title: "Die Auferstehung",
        text: `
Am letzten Tag werden die Heiligen, die als Lebende vorgefunden werden, nicht entschlafen, sondern verwandelt werden. Und alle Toten werden nicht mit einem anderen, sondern mit ihren eigenen Körpern auferweckt werden, auch wenn diese veränderte Eigenschaften besitzen. Dabei werden diese für immer mit ihren Seelen wiedervereinigt werden.
        `,
        references: [
          { ref: "1Kor 15,51–52", verse: bibleVerses["1Kor 15,51–52"] },
          { ref: "1Thess 4,17", verse: bibleVerses["1Thess 4,17"] },
          { ref: "Hiob 19,26–27", verse: bibleVerses["Hiob 19,26–27"] },
          { ref: "1Kor 15,42–43", verse: bibleVerses["1Kor 15,42–43"] }
        ]
      },
      {
        id: "3",
        title: "Die unterschiedliche Auferstehung",
        text: `
Die Körper der Ungerechten werden durch die Kraft Christi zur Unehre auferweckt werden. Die Körper der Gerechten werden durch seinen Geist zur Ehre auferweckt und seinem eigenen verherrlichten Leib gleichgestaltet werden.
        `,
        references: [
          { ref: "Apg 24,15", verse: bibleVerses["Apg 24,15"] },
          { ref: "Joh 5,28–29", verse: bibleVerses["Joh 5,28–29"] },
          { ref: "Phil 3,21", verse: bibleVerses["Phil 3,21"] }
        ]
      }
    ]
  },

  /* ============================
     KAPITEL 32
     ============================ */
  {
    chapter: "32",
    title: "Über das Jüngste Gericht",
    points: [
      {
        id: "1",
        title: "Der Tag des Gerichts",
        text: `
Gott hat einen Tag bestimmt, an dem er die Welt durch Jesus Christus, dem alle Vollmacht und das gesamte Gericht vom Vater übergeben worden ist, in Gerechtigkeit richten wird. An diesem Tag werden nicht nur die gefallenen Engel gerichtet werden, sondern es werden gleichfalls alle Menschen, die auf der Erde gelebt haben, vor dem Richterstuhl Christi erscheinen, um über ihre Gedanken, Worte und Taten Rechenschaft abzulegen und um entweder Gutes oder Böses zu empfangen, entsprechend dem, was sie während ihres Erdenlebens getan haben.
        `,
        references: [
          { ref: "Apg 17,31", verse: bibleVerses["Apg 17,31"] },
          { ref: "Joh 5,22.27", verse: bibleVerses["Joh 5,22.27"] },
          { ref: "1Kor 6,3", verse: bibleVerses["1Kor 6,3"] },
          { ref: "Jud 6", verse: bibleVerses["Jud 6"] },
          { ref: "2Kor 5,10", verse: bibleVerses["2Kor 5,10"] },
          { ref: "Pred 12,14", verse: bibleVerses["Pred 12,14"] },
          { ref: "Mt 12,36", verse: bibleVerses["Mt 12,36"] },
          { ref: "Röm 14,10.12", verse: bibleVerses["Röm 14,10.12"] },
          { ref: "Mt 25,32", verse: bibleVerses["Mt 25,32"] }
        ]
      },
      {
        id: "2",
        title: "Der Zweck des Gerichts",
        text: `
Gott hat diesen Tag dazu bestimmt, seine Herrlichkeit durch seine Barmherzigkeit in der ewigen Erlösung der Erwählten und durch seine Gerechtigkeit in der ewigen Verdammnis der Verworfenen, die gottlos und ungehorsam sind, zu offenbaren. Denn dann werden die Gerechten in das ewige Leben eingehen und in der Gegenwart des Herrn die Fülle der Freude und Herrlichkeit mit ewigem Lohn empfangen. Doch die Gottlosen, die Gott nicht kennen und dem Evangelium Jesu Christi nicht gehorsam sind, werden in ewige Qualen geworfen, und sie werden mit ewigem Verderben bestraft vom Angesicht des Herrn und von der Herrlichkeit seiner Stärke.
        `,
        references: [
          { ref: "Röm 9,22–23", verse: bibleVerses["Röm 9,22–23"] },
          { ref: "Mt 25,21.34", verse: bibleVerses["Mt 25,21.34"] },
          { ref: "2Tim 4,8", verse: bibleVerses["2Tim 4,8"] },
          { ref: "Mt 25,46", verse: bibleVerses["Mt 25,46"] },
          { ref: "Mk 9,48", verse: bibleVerses["Mk 9,48"] },
          { ref: "2Thess 1,7–10", verse: bibleVerses["2Thess 1,7–10"] }
        ]
      },
      {
        id: "3",
        title: "Die Ungewissheit des Tages",
        text: `
So wie Christus möchte, dass wir fest davon überzeugt sind, dass ein Tag des Gerichts kommen wird, damit dadurch einerseits alle Menschen von der Sünde abgeschreckt werden und andererseits die Gottesfürchtigen in ihrer Anfechtung größeren Trost erfahren, so wird er auch diesen Tag den Menschen unbekannt sein lassen, damit sie alle fleischliche Sicherheit abschütteln und stets wachsam sind, da sie nicht wissen, zu welcher Stunde der Herr kommen wird, und damit sie immer bereit sind, zu sprechen: Komm, Herr Jesus, komme bald! Amen.
        `,
        references: [
          { ref: "2Kor 5,10–11", verse: bibleVerses["2Kor 5,10–11"] },
          { ref: "2Thess 1,5–7", verse: bibleVerses["2Thess 1,5–7"] },
          { ref: "Mk 13,35–37", verse: bibleVerses["Mk 13,35–37"] },
          { ref: "Lk 12,35–40", verse: bibleVerses["Lk 12,35–40"] },
          { ref: "Offb 22,20", verse: bibleVerses["Offb 22,20"] }
        ]
      }
    ]
  }
];

