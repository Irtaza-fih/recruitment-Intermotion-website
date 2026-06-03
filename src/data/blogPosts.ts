export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "wat-doet-een-recruitmentbureau",
    title: "Wat doet een recruitmentbureau? En wanneer heb je er één nodig?",
    description:
      "Een recruitmentbureau helpt bedrijven bij het vinden van de juiste professionals. Maar wanneer schakel je er één in, en wat mag je verwachten?",
    date: "2026-06-03",
    author: "Recruitment Intermotion",
    category: "Werkgevers",
    content: `
<p>Een recruitmentbureau verbindt bedrijven met gekwalificeerde professionals. Of het nu gaat om een vaste aanstelling of een interim opdracht — een gespecialiseerd bureau neemt het wervingsproces uit handen, van de eerste intake tot de definitieve plaatsing.</p>

<h2>Wat doet een recruitmentbureau precies?</h2>

<p>Een recruitmentbureau zoekt, selecteert en bemiddelt kandidaten voor openstaande functies. Het bureau heeft een actief netwerk van professionals en weet waar passief talent te vinden is — mensen die niet actief zoeken maar wel openstaan voor een mooie stap.</p>

<p>De belangrijkste taken zijn:</p>

<ul>
  <li>Functieprofiel opstellen samen met de opdrachtgever</li>
  <li>Actief zoeken via netwerk, LinkedIn en andere kanalen</li>
  <li>Kandidaten screenen op kennis, ervaring en cultuurfit</li>
  <li>Gesprekken organiseren en begeleiden</li>
  <li>Onderhandelen over arbeidsvoorwaarden</li>
  <li>Nazorg na plaatsing</li>
</ul>

<h2>Wanneer schakel je een recruitmentbureau in?</h2>

<p>Een recruitmentbureau is waardevol wanneer:</p>

<ul>
  <li>Je weinig tijd hebt om zelf te werven</li>
  <li>Je zoekt naar schaars talent (zoals finance of IT specialisten)</li>
  <li>Je een vertrouwelijke zoektocht wilt uitvoeren</li>
  <li>Je eerder zelf heeft geprobeerd te werven zonder succes</li>
  <li>Je een interim professional nodig hebt op korte termijn</li>
</ul>

<h2>Wat kost een recruitmentbureau?</h2>

<p>De meeste bureaus werken op basis van een percentage van het jaarsalaris — meestal tussen de 15% en 25%. Bij interim plaatsingen wordt gewerkt met een uurtarief of een dag tarief inclusief marge. Recruitment Intermotion werkt altijd transparant en bespreekt de tarieven vooraf.</p>

<h2>Wat maakt Recruitment Intermotion anders?</h2>

<p>Wij geloven niet in een one-size-fits-all aanpak. Elk bedrijf is anders, elke zoekopdracht is uniek. Met meer dan 15 jaar ervaring in Finance, IT en Sales weten wij waar de juiste professionals te vinden zijn — en hoe we ze aan u binden.</p>

<p>Benieuwd wat wij voor uw organisatie kunnen betekenen? <a href="/contact">Neem contact op</a>.</p>
    `,
  },
];
