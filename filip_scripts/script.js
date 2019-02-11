

const dayz = "<h1>DayZ</h1>DayZ är ett överlevnadsspel utvecklat av Bohemia Interactive för Microsoft Windows och är en fristående version av DayZ (modd). En alfa av spelet släpptes den 16 december 2013. Det har också annonserats att en Playstation 4-version skall vara under utveckling. Men inget datum har angetts för när den skulle vara klar." +
  "Spelet utspelar sig fyra år efter Operation Harvest Red i den post-sovjetiska staten Chernarus vars yta är 230 km² stor. Ett okänt virus har dödat en stor del av världens befolkning och spelarna måste nu överleva i en zombie-apokalyps. Spelarna kan välja att attackera varandra eller samarbeta i det här gigantiska landskapet. Man startar spelet med " +
  "grundläggande kläder, en ficklampa och ett 9-volts batteri som går att sätta i ficklampan. Spelarens karaktär startar nära havet, oftast också nära en mindre by eller stad och man är fri att göra vad man vill efteråt. Spelarens mål i spelet är att överleva så länge man kan, genom att undvika zombies, skydda sig från olika typer av sjukdomar och akta sig" +
  " för andra, farliga spelare på samma server. För att överleva behöver man resurser såsom mat och vatten men också olika typer av vapen och medicin. Resurser hittas främst inne i olika byggnader och spelare dras därför lätt till städer, där det kan uppstå konflikter och krig. En rad olika kroppsrörelser, en lokal skriftlig chatt och en röstchatt kan användas" +
  " för att kommunicera med andra spelare.<br><a href=\"https://sv.wikipedia.org/wiki/DayZ_(datorspel)\">Läs mer på wikipedia</a>";

const rl = "<h1>Rocket League</h1>Rocket League är ett fordonsbaserat fotbollsspel utvecklat av Psyonix. Spelet släpptes den 7 juli 2015 till Microsoft Windows och Playstation 4, och den 17 februari 2016 till Xbox One. Porteringar till OS X och Linux släpptes 2016 och en portering till Nintendo Switch släpps 2017." +
  " Spelet, som kan spelas i både enspelarläge och flerspelarläge, har beskrivits som ''fotboll, fast med raketdrivna bilar''. Spelarna, uppdelade i två lag om en till fyra, använder dessa raketdrivna bilar för att skjuta en stor boll i mål på motståndarlaget. Bilarna kan både hoppa och slänga sig åt sidan. På spelplanen finns s.k. boosts utplacerade, " +
  "som spelarna kan plocka upp och använda för ökad hastighet. Man kan då använda de s.k. boosts för att flyga upp i luften för att utföra s.k. aerials." +
  "<br><a href=\"https://sv.wikipedia.org/wiki/Rocket_League\">Läs mer på wikipedia</a>";

const bf = "<h1>Battlefield 4</h1>Battlefield 4 (även känt som BF4) är ett tv- och datorspel inom genren förstapersonsskjutare. Spelet utvecklades av den svenska spelstudion DICE och lanserades av Electronic Arts. Battlefield 4 är det tolfte spelet i Battlefield-spelserien och en uppföljare till Battlefield 3 från 2011. Spelet gavs ut till Microsoft Windows, " +
  "Playstation 3 och Xbox 360 den 31 oktober 2013 i Sverige. I november samma år gavs spelet ut till plattformarna Playstation 4 och Xbox One." +
  "<br><a href=\"https://sv.wikipedia.org/wiki/Battlefield_4\">Läs mer på wikipedia</a>";

const pubg = "<h1>PlayerUnknown's Battlegrounds</h1> (PUBG) är ett flerspelarspel med Battle Royale-baserat tema. Spelet släppes som betaversion till operativsystemet Windows den 23 mars 2017 via speltjänsten Steam. Den 12 december 2017 släpptes spelet som en betaversion till Xbox One och släpptes i full version till Windows den 20 December 2017. Med en" +
  " spelarbas på ca 3 200 000 år 2017 gör det spelet till ett av de mest spelade spelen på Steam" +
  "<br><a href=\"https://sv.wikipedia.org/wiki/PlayerUnknown%27s_Battlegrounds\">Läs mer på wikipedia</a>";

const fifa = "<h1>Fifa 19</h1> FIFA 19 är ett fotbollsspel som utvecklas av EA Sports och utgivs av Electronic Arts. Spelet släpptes internationellt den 28 september 2018 till Microsoft Windows, Playstation 3, Playstation 4, Xbox 360, Xbox One och Nintendo Switch.\n" +
  "Spelet innehåller UEFA-klubben tävlingar för första gången,UEFA Champions League,UEFA Super Cup och Uefa Europa League har det rättigheterna till." +
  "<br><a href=\"https://sv.wikipedia.org/wiki/FIFA_19\">Läs mer på wikipedia</a>";

function myFunction(game) {
  if (game === 'dayz'){
    return dayz;
  }
  else if (game === 'rl'){
    return rl;
  }
  else if (game === 'bf'){
    return bf;
  }
  else if(game === 'pubg'){
    return pubg;
  }
  else if (game === 'fifa'){
    return fifa;
  }
};
