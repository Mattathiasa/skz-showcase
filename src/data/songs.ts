export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  intro: string;
  gist: string;
  tags: string[];
  stats: {
    happy: number;
    sad: number;
    hype: number;
    calm: number;
    alone: number;
    inLove: number;
    outOfLove: number;
  };
}

export const songs: Song[] = [
  {
    id: "hellevator",
    title: "Hellevator",
    artist: "Stray Kids",
    album: "Mixtape",
    year: 2017,
    intro: "The debut that told the world who Stray Kids are. A raw, unfiltered cry from a generation told to fall in line.",
    gist: "A defiant anthem about being trapped in a suffocating system — school, society, expectations — and choosing to fall rather than stay.",
    tags: ["debut", "dark", "defiant", "coming-of-age"],
    stats: { happy: 2, sad: 6, hype: 8, calm: 1, alone: 7, inLove: 0, outOfLove: 0 }
  },
  {
    id: "miroh",
    title: "MIROH",
    artist: "Stray Kids",
    album: "Clé 1: MIROH",
    year: 2019,
    intro: "Stray Kids throwing the map away and charging forward. Best played loud, ideally right before something scary.",
    gist: "No fear. No map. The maze (미로, 'MIROH') is not an obstacle but a playground. A song about trusting yourself to find the way.",
    tags: ["empowerment", "bold", "no-fear", "banger"],
    stats: { happy: 7, sad: 1, hype: 10, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "god-menu",
    title: "God's Menu",
    artist: "Stray Kids",
    album: "GO生 (GO LIVE)",
    year: 2020,
    intro: "The moment SKZ went fully unhinged — in the best way. A flex wrapped in a cooking metaphor that somehow works perfectly.",
    gist: "Stray Kids serving up their music like a signature dish no one else can replicate. Pure confidence, zero apologies.",
    tags: ["flex", "banger", "unique", "loud"],
    stats: { happy: 6, sad: 0, hype: 10, calm: 0, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "back-door",
    title: "Back Door",
    artist: "Stray Kids",
    album: "IN生 (IN LIFE)",
    year: 2020,
    intro: "Skip the formalities. This is their VIP invite to the party — and you're already on the list.",
    gist: "A charismatic, playful track inviting the listener to enter through the back door — their exclusive world, no pretense needed.",
    tags: ["fun", "charismatic", "invitation", "banger"],
    stats: { happy: 8, sad: 0, hype: 9, calm: 1, alone: 0, inLove: 3, outOfLove: 0 }
  },
  {
    id: "thunderous",
    title: "Thunderous (소리꾼)",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "Korean traditional music collides with hard-hitting production. Ancient and futuristic at the same time.",
    gist: "Drawing from Korean pansori storytelling tradition — they are the 소리꾼 (sori-gun), the singer who commands the crowd with sound alone.",
    tags: ["cultural", "powerful", "traditional-fusion", "banger"],
    stats: { happy: 5, sad: 2, hype: 10, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "domino",
    title: "DOMINO",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "When everything is falling apart and you decide to fall with it — on purpose. Chaotic and freeing.",
    gist: "Chaos theory as self-expression. Once one thing falls, they let everything fall — and find freedom in the collapse.",
    tags: ["chaos", "freedom", "energetic", "edgy"],
    stats: { happy: 4, sad: 4, hype: 9, calm: 0, alone: 4, inLove: 0, outOfLove: 3 }
  },
  {
    id: "maniac",
    title: "MANIAC",
    artist: "Stray Kids",
    album: "ODDINARY",
    year: 2022,
    intro: "They're weird, they know it, and they want you to be weird with them. Own your 'crazy.'",
    gist: "Celebrating being different, eccentric, and unapologetically strange. Being a 'maniac' is not an insult — it's the whole point.",
    tags: ["self-acceptance", "eccentric", "fun", "bold"],
    stats: { happy: 7, sad: 1, hype: 9, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "case-143",
    title: "CASE 143",
    artist: "Stray Kids",
    album: "MAXIDENT",
    year: 2022,
    intro: "143 = I Love You in number-speak. SKZ goes full lovesick and it's adorable and intense at the same time.",
    gist: "Helplessly, embarrassingly in love. Every symptom points to the same diagnosis: 143.",
    tags: ["love", "cute", "playful", "upbeat"],
    stats: { happy: 8, sad: 1, hype: 7, calm: 2, alone: 0, inLove: 10, outOfLove: 0 }
  },
  {
    id: "hall-of-fame",
    title: "Hall of Fame",
    artist: "Stray Kids",
    album: "5-STAR",
    year: 2023,
    intro: "Their stadium-era declaration. This is not a hope — it's a statement of fact delivered with full confidence.",
    gist: "SKZ claiming their place in history. Not asking for recognition, simply announcing it has already been earned.",
    tags: ["anthem", "confidence", "milestone", "epic"],
    stats: { happy: 8, sad: 1, hype: 9, calm: 2, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "topline",
    title: "TOPLINE (Feat. Tiger JK)",
    artist: "Stray Kids",
    album: "5-STAR",
    year: 2023,
    intro: "The top of the line, literally. A confident brag track with hip-hop legend Tiger JK adding serious weight.",
    gist: "Being the best, setting the standard, staying at the top. A multi-generational flex with Tiger JK passing the torch.",
    tags: ["flex", "hiphop", "confident", "collab"],
    stats: { happy: 7, sad: 0, hype: 10, calm: 0, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "levanter",
    title: "Levanter",
    artist: "Stray Kids",
    album: "Clé: LEVANTER",
    year: 2019,
    intro: "A warm wind that changes direction. One of SKZ's most emotionally resonant songs — listen on a calm evening.",
    gist: "Moving forward despite not knowing where you're going. The levanter wind carries you even when you feel lost, and somehow that's enough.",
    tags: ["emotional", "hopeful", "gentle", "introspective"],
    stats: { happy: 5, sad: 5, hype: 2, calm: 8, alone: 4, inLove: 2, outOfLove: 0 }
  },
  {
    id: "i-am-you",
    title: "I am YOU",
    artist: "Stray Kids",
    album: "Clé 2: Yellow Wood",
    year: 2018,
    intro: "The softest SKZ gets. A song about finding yourself in someone else — deeply comforting.",
    gist: "You understand me because you are me. A song about the rare connection where two people mirror each other's pain and healing.",
    tags: ["emotional", "connection", "soft", "sincere"],
    stats: { happy: 4, sad: 5, hype: 1, calm: 7, alone: 3, inLove: 8, outOfLove: 1 }
  },
  {
    id: "double-knot",
    title: "Double Knot",
    artist: "Stray Kids",
    album: "Clé: LEVANTER",
    year: 2019,
    intro: "Tie your shoes tight — this one moves fast and doesn't slow down for anyone.",
    gist: "Fierce and aggressive self-assurance. Double-knotting means you're committed, prepared, and not going anywhere.",
    tags: ["fierce", "banger", "determined", "aggressive"],
    stats: { happy: 4, sad: 1, hype: 10, calm: 0, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "side-effects",
    title: "Side Effects",
    artist: "Stray Kids",
    album: "Clé 2: Yellow Wood",
    year: 2019,
    intro: "Their most sonically chaotic track. It sounds like a panic attack — that is intentional and that is the point.",
    gist: "The side effects of chasing an ideal or dream: anxiety, confusion, losing yourself. Hauntingly honest production to match.",
    tags: ["chaotic", "anxiety", "dark", "experimental"],
    stats: { happy: 1, sad: 7, hype: 7, calm: 0, alone: 8, inLove: 0, outOfLove: 2 }
  },
  {
    id: "my-pace",
    title: "My Pace",
    artist: "Stray Kids",
    album: "I Am WHO",
    year: 2018,
    intro: "The antidote to comparison culture. A warm reminder that you're on your own timeline.",
    gist: "Stop looking at others and walk at your own pace. The race is only with yourself — and that's more than okay.",
    tags: ["motivational", "warm", "self-love", "chill"],
    stats: { happy: 8, sad: 2, hype: 4, calm: 7, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "miroh-japanese",
    title: "MIROH (Japanese Ver.)",
    artist: "Stray Kids",
    album: "TOP (Japanese Album)",
    year: 2020,
    intro: "The Japanese version adds a slightly different texture to the same fearless energy.",
    gist: "Same maze, different language — just as bold in Japanese.",
    tags: ["japanese", "empowerment", "banger"],
    stats: { happy: 7, sad: 1, hype: 10, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "district-9",
    title: "District 9",
    artist: "Stray Kids",
    album: "I Am NOT",
    year: 2018,
    intro: "The song that introduced the world to SKZ's signature aggressive sound. A rebellion anthem.",
    gist: "Rejecting labels, cages, and the system that tries to define them. District 9 is where they refuse to belong.",
    tags: ["rebel", "debut-era", "aggressive", "identity"],
    stats: { happy: 3, sad: 4, hype: 10, calm: 0, alone: 5, inLove: 0, outOfLove: 0 }
  },
  {
    id: "voices",
    title: "Voices",
    artist: "Stray Kids",
    album: "I Am NOT",
    year: 2018,
    intro: "The anxious inner monologue made audible. This one hits differently at 3am.",
    gist: "The voices in your head that tear you down — and the struggle to silence or survive them.",
    tags: ["anxiety", "introspective", "dark", "vulnerable"],
    stats: { happy: 1, sad: 8, hype: 3, calm: 1, alone: 9, inLove: 0, outOfLove: 0 }
  },
  {
    id: "3rd-eye",
    title: "3rd Eye",
    artist: "Stray Kids",
    album: "I Am NOT",
    year: 2018,
    intro: "A deeply layered track about perception and seeing beyond the surface. Meditative and intense.",
    gist: "Opening a third eye to see the truth others miss — or the truth about yourself you've been avoiding.",
    tags: ["deep", "introspective", "spiritual", "intense"],
    stats: { happy: 2, sad: 6, hype: 5, calm: 4, alone: 6, inLove: 0, outOfLove: 0 }
  },
  {
    id: "miroh-2",
    title: "MIROH",
    artist: "Stray Kids",
    album: "Clé 1: MIROH",
    year: 2019,
    intro: "Already listed. (See MIROH)",
    gist: "Already listed.",
    tags: [],
    stats: { happy: 7, sad: 1, hype: 10, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "boxer",
    title: "Boxer",
    artist: "Stray Kids",
    album: "Clé 1: MIROH",
    year: 2019,
    intro: "Gloves up. This is about fighting — your critics, your doubts, every person who said no.",
    gist: "Standing in the ring of life and choosing to fight rather than fall. A pure adrenaline shot.",
    tags: ["fighting-spirit", "hype", "empowerment", "intense"],
    stats: { happy: 5, sad: 2, hype: 10, calm: 0, alone: 3, inLove: 0, outOfLove: 0 }
  },
  {
    id: "chronosaurus",
    title: "Chronosaurus",
    artist: "Stray Kids",
    album: "Clé 1: MIROH",
    year: 2019,
    intro: "Fighting time itself. SKZ vs. the clock — and they refuse to let time win.",
    gist: "The pressure of time, deadlines, and aging while trying to live fully. A monster called time is always chasing them.",
    tags: ["time", "pressure", "energetic", "metaphorical"],
    stats: { happy: 3, sad: 5, hype: 8, calm: 1, alone: 4, inLove: 0, outOfLove: 0 }
  },
  {
    id: "get-cool",
    title: "Get Cool",
    artist: "Stray Kids",
    album: "Clé 1: MIROH",
    year: 2019,
    intro: "SKZ being playfully self-aware about their 'cool' image. Lighthearted and fun.",
    gist: "A tongue-in-cheek track about looking cool, being cool, and the whole performance of cool.",
    tags: ["fun", "lighthearted", "playful", "upbeat"],
    stats: { happy: 9, sad: 0, hype: 7, calm: 2, alone: 0, inLove: 2, outOfLove: 0 }
  },
  {
    id: "haven",
    title: "Haven",
    artist: "Stray Kids",
    album: "GO生 (GO LIVE)",
    year: 2020,
    intro: "A rare, quiet moment in the SKZ universe — a gentle promise to be someone's safe place.",
    gist: "I'll be your haven. A sincere, warm declaration of being a shelter for someone you love.",
    tags: ["soft", "love", "comforting", "sincere"],
    stats: { happy: 6, sad: 2, hype: 1, calm: 9, alone: 1, inLove: 8, outOfLove: 0 }
  },
  {
    id: "easy",
    title: "Easy",
    artist: "Stray Kids",
    album: "GO生 (GO LIVE)",
    year: 2020,
    intro: "Nothing about this is easy — and that's the whole point. Calmly delivered, deeply felt.",
    gist: "Pretending everything is fine when it isn't. The word 'easy' used with heavy irony.",
    tags: ["emotional", "ironic", "vulnerable", "R&B"],
    stats: { happy: 2, sad: 8, hype: 1, calm: 5, alone: 7, inLove: 1, outOfLove: 4 }
  },
  {
    id: "pacemaker",
    title: "Pacemaker",
    artist: "Stray Kids",
    album: "GO生 (GO LIVE)",
    year: 2020,
    intro: "Set the pace for your own life — not anyone else's. An internal manifesto.",
    gist: "Being your own pacemaker: controlling the rhythm of your own life and not letting others dictate your speed.",
    tags: ["motivational", "introspective", "mid-tempo", "empowerment"],
    stats: { happy: 6, sad: 3, hype: 5, calm: 5, alone: 3, inLove: 0, outOfLove: 0 }
  },
  {
    id: "blueprint",
    title: "Blueprint (청사진)",
    artist: "Stray Kids",
    album: "GO生 (GO LIVE)",
    year: 2020,
    intro: "The future is already drawn in their minds. A hopeful, architectural vision of where they're going.",
    gist: "청사진 = blueprint. Their dreams and plans laid out clearly, a map of ambition and intention.",
    tags: ["hopeful", "dreamy", "future-focused", "sincere"],
    stats: { happy: 7, sad: 2, hype: 4, calm: 6, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "ta",
    title: "TA (타)",
    artist: "Stray Kids",
    album: "GO生 (GO LIVE)",
    year: 2020,
    intro: "One of their most cinematic tracks. 타 = 'ride' — they're on a journey and they're taking you along.",
    gist: "Riding toward the horizon with purpose. 타 means 'ride/board' — they're on a vehicle called destiny.",
    tags: ["cinematic", "journey", "epic", "mid-tempo"],
    stats: { happy: 6, sad: 3, hype: 6, calm: 4, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "airplane",
    title: "비행기 (Airplane)",
    artist: "Stray Kids",
    album: "GO生 (GO LIVE)",
    year: 2020,
    intro: "A love letter to flying — literally and metaphorically. Bittersweet and freeing.",
    gist: "The feeling of being airborne: leaving things behind, the freedom of altitude, and missing what's below.",
    tags: ["bittersweet", "travel", "nostalgic", "soft"],
    stats: { happy: 5, sad: 5, hype: 2, calm: 7, alone: 4, inLove: 2, outOfLove: 2 }
  },
  {
    id: "another-day",
    title: "Another Day (일상)",
    artist: "Stray Kids",
    album: "GO生 (GO LIVE)",
    year: 2020,
    intro: "Everyday life, observed with care. SKZ finding poetry in the mundane.",
    gist: "The beauty and weight of ordinary days. Not every day is dramatic — some days just exist, and that's also valuable.",
    tags: ["everyday", "gentle", "reflective", "warm"],
    stats: { happy: 5, sad: 4, hype: 1, calm: 8, alone: 4, inLove: 1, outOfLove: 0 }
  },
  {
    id: "phobia",
    title: "Phobia",
    artist: "Stray Kids",
    album: "GO生 (GO LIVE)",
    year: 2020,
    intro: "The fear of losing someone you love — named and examined. Vulnerable and raw.",
    gist: "You are their greatest phobia: the fear of losing you. Love that comes with the terror of its own fragility.",
    tags: ["fear", "love", "vulnerable", "emotional"],
    stats: { happy: 2, sad: 8, hype: 2, calm: 3, alone: 6, inLove: 7, outOfLove: 3 }
  },
  {
    id: "slump",
    title: "SLUMP",
    artist: "Stray Kids (HAN)",
    album: "Mixtape",
    year: 2018,
    intro: "HAN's most personal offering — the song that comes from his real struggle with anxiety and slumps.",
    gist: "The paralysis of a creative and emotional slump. Written by HAN as a mirror to his own mental state.",
    tags: ["HAN", "personal", "anxiety", "vulnerable", "rap"],
    stats: { happy: 1, sad: 9, hype: 2, calm: 2, alone: 9, inLove: 0, outOfLove: 0 }
  },
  {
    id: "top",
    title: "TOP (Tower of God OP)",
    artist: "Stray Kids",
    album: "Tower of God OST",
    year: 2020,
    intro: "An anime opening that transcends its format. Epic, driven, and genuinely one of their best.",
    gist: "Climbing to the top, no matter the cost. Written for the Tower of God webtoon — but the ambition is entirely Stray Kids.",
    tags: ["anime", "epic", "climbing", "OST", "hype"],
    stats: { happy: 6, sad: 2, hype: 10, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "mixtape-gone-days",
    title: "Gone Days (Mixtape)",
    artist: "Stray Kids",
    album: "Mixtape",
    year: 2018,
    intro: "Looking back at days that are gone. Nostalgic and quietly heartbreaking.",
    gist: "The days you can never get back — youth, relationships, moments. Gone, but not forgotten.",
    tags: ["nostalgic", "bittersweet", "reflective", "emotional"],
    stats: { happy: 2, sad: 8, hype: 1, calm: 6, alone: 7, inLove: 1, outOfLove: 2 }
  },
  {
    id: "chill",
    title: "CHILL",
    artist: "Stray Kids",
    album: "MAXIDENT",
    year: 2022,
    intro: "Exactly what it says. The most laid-back SKZ has ever been — and it suits them perfectly.",
    gist: "Just chill. No pressure, no performance, no front. A rare moment of pure ease.",
    tags: ["chill", "relaxed", "R&B", "smooth"],
    stats: { happy: 7, sad: 1, hype: 2, calm: 9, alone: 2, inLove: 3, outOfLove: 0 }
  },
  {
    id: "super-bowl",
    title: "Super Bowl",
    artist: "Stray Kids",
    album: "ODDINARY",
    year: 2022,
    intro: "Not about the game. It's about wanting someone so intensely it becomes a spectacle.",
    gist: "Love that's a full performance, a spectacle, a Super Bowl — they'll put on a show just for you.",
    tags: ["love", "intense", "showstopper", "bold"],
    stats: { happy: 6, sad: 2, hype: 8, calm: 1, alone: 1, inLove: 8, outOfLove: 0 }
  },
  {
    id: "venom",
    title: "VENOM",
    artist: "Stray Kids",
    album: "ODDINARY",
    year: 2022,
    intro: "Toxic and addictive — and fully aware of it. A dark self-examination of their own dangerous appeal.",
    gist: "They are the venom and the antidote. Their charisma poisons you but you keep coming back.",
    tags: ["dark", "intense", "charismatic", "introspective"],
    stats: { happy: 2, sad: 4, hype: 8, calm: 1, alone: 4, inLove: 4, outOfLove: 5 }
  },
  {
    id: "star-lost",
    title: "STAR LOST",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "Lost between stars. A dreamy, spacious track about being adrift in love and the universe.",
    gist: "Love that makes you lose your bearings — floating, untethered, willingly lost.",
    tags: ["dreamy", "love", "space", "floaty"],
    stats: { happy: 4, sad: 5, hype: 3, calm: 6, alone: 3, inLove: 7, outOfLove: 2 }
  },
  {
    id: "insomnia",
    title: "불면증 (Insomnia)",
    artist: "Stray Kids",
    album: "I Am YOU",
    year: 2018,
    intro: "The racing mind at 3am — captured perfectly. You'll feel this one in the silence between thoughts.",
    gist: "Can't sleep because the mind won't stop. Insomnia as a metaphor for emotional unrest.",
    tags: ["night", "anxiety", "quiet", "vulnerable"],
    stats: { happy: 1, sad: 7, hype: 2, calm: 3, alone: 9, inLove: 0, outOfLove: 3 }
  },
  {
    id: "scars",
    title: "Scars",
    artist: "Stray Kids",
    album: "I Am YOU",
    year: 2018,
    intro: "Wearing your scars as proof you survived. One of the most emotionally honest tracks in their catalog.",
    gist: "Scars as evidence of strength, not weakness. Every hurt has left a mark, and those marks tell a story worth telling.",
    tags: ["emotional", "healing", "sincere", "vulnerable"],
    stats: { happy: 3, sad: 7, hype: 3, calm: 4, alone: 6, inLove: 0, outOfLove: 0 }
  },
  {
    id: "awkward-silence",
    title: "Awkward Silence (갑자기 분위기 싸해질 필요 없잖아요)",
    artist: "Stray Kids",
    album: "Clé 2: Yellow Wood",
    year: 2019,
    intro: "The most self-aware SKZ can be about a social situation. Funny, relatable, charming.",
    gist: "Why does the mood have to get weird? An ode to keeping things light and enjoying the moment without drama.",
    tags: ["fun", "relatable", "lighthearted", "social"],
    stats: { happy: 8, sad: 1, hype: 5, calm: 4, alone: 1, inLove: 2, outOfLove: 0 }
  },
  {
    id: "19",
    title: "19",
    artist: "Stray Kids",
    album: "Clé 2: Yellow Wood",
    year: 2019,
    intro: "A love letter to being 19 — the last year of youth before everything changes.",
    gist: "The weight and lightness of being nineteen. Old enough to feel everything, young enough that nothing is final yet.",
    tags: ["nostalgic", "youth", "bittersweet", "emotional"],
    stats: { happy: 5, sad: 6, hype: 2, calm: 5, alone: 5, inLove: 3, outOfLove: 1 }
  },
  {
    id: "victory-song",
    title: "Victory Song",
    artist: "Stray Kids",
    album: "Clé 1: MIROH",
    year: 2019,
    intro: "This is what winning sounds like. Pure, uncomplicated triumph.",
    gist: "They won. Simple as that. A celebration of hard work paying off and the feeling of standing at the top.",
    tags: ["victory", "uplifting", "celebration", "hype"],
    stats: { happy: 9, sad: 0, hype: 9, calm: 1, alone: 0, inLove: 0, outOfLove: 0 }
  },
  {
    id: "miroh-on-track",
    title: "On Track (바보라도 알아)",
    artist: "Stray Kids",
    album: "Clé 1: MIROH",
    year: 2019,
    intro: "A self-assuring track about knowing you're headed in the right direction, even without proof.",
    gist: "Even a fool would know they're on track. Trust the process, trust yourself.",
    tags: ["confident", "self-trust", "mid-tempo", "warm"],
    stats: { happy: 6, sad: 2, hype: 4, calm: 6, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "winter-falls",
    title: "Winter Falls",
    artist: "Stray Kids",
    album: "Christmas EveL",
    year: 2021,
    intro: "Snow and longing. One of SKZ's most visually evocative songs — you can feel the cold.",
    gist: "Missing someone in winter. The season as metaphor: cold, quiet, and beautiful in its emptiness.",
    tags: ["winter", "longing", "soft", "beautiful"],
    stats: { happy: 3, sad: 7, hype: 1, calm: 7, alone: 6, inLove: 4, outOfLove: 3 }
  },
  {
    id: "silent-cry",
    title: "Silent Cry",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "The tears no one sees. Crying silently so as not to worry others — achingly relatable.",
    gist: "Performing strength while falling apart inside. The loudest cry is sometimes the one no one hears.",
    tags: ["emotional", "vulnerable", "hidden-pain", "sincere"],
    stats: { happy: 1, sad: 9, hype: 1, calm: 4, alone: 8, inLove: 0, outOfLove: 0 }
  },
  {
    id: "placebo",
    title: "Placebo",
    artist: "Stray Kids",
    album: "SKZ2021 (Compilation)",
    year: 2021,
    intro: "Is the cure real or just belief? This explores love as a psychological phenomenon.",
    gist: "Loving someone like medicine — maybe it doesn't actually work, but believing it does is enough to heal.",
    tags: ["metaphorical", "love", "introspective", "unique"],
    stats: { happy: 4, sad: 5, hype: 3, calm: 5, alone: 3, inLove: 6, outOfLove: 3 }
  },
  {
    id: "fam",
    title: "FAM",
    artist: "Stray Kids",
    album: "All In (Japanese Mini Album)",
    year: 2020,
    intro: "For STAY (their fandom). A direct, heartfelt letter to the people who showed up.",
    gist: "You are family. This is SKZ speaking directly to STAY — no metaphors, just gratitude and love.",
    tags: ["STAY", "fandom", "grateful", "sincere", "emotional"],
    stats: { happy: 7, sad: 3, hype: 2, calm: 6, alone: 1, inLove: 7, outOfLove: 0 }
  },
  {
    id: "all-in",
    title: "ALL IN",
    artist: "Stray Kids",
    album: "All In (Japanese Mini Album)",
    year: 2020,
    intro: "No half-measures. Everything, all at once, completely committed.",
    gist: "Going all in — on your dreams, on someone you love, on yourself. Total commitment, no safety net.",
    tags: ["commitment", "bold", "intense", "love"],
    stats: { happy: 6, sad: 2, hype: 8, calm: 1, alone: 1, inLove: 5, outOfLove: 0 }
  },
  {
    id: "thunderous-jp",
    title: "Thunderous -Japanese Version-",
    artist: "Stray Kids",
    album: "TOP (Japanese Album)",
    year: 2021,
    intro: "Same traditional-meets-modern energy in Japanese.",
    gist: "The 소리꾼 commands the stage in Japanese.",
    tags: ["japanese", "traditional-fusion", "powerful"],
    stats: { happy: 5, sad: 2, hype: 10, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "going-dumb",
    title: "Going Dumb",
    artist: "Alesso, Stray Kids & CORSAK",
    album: "Going Dumb (Single)",
    year: 2021,
    intro: "EDM collaboration that breaks every expectation. Losing your mind on the dancefloor.",
    gist: "Love (or a crowd, or a moment) so good it makes you go dumb — mindless, blissful, lost in it.",
    tags: ["EDM", "collab", "dancefloor", "fun", "hype"],
    stats: { happy: 8, sad: 0, hype: 9, calm: 0, alone: 0, inLove: 4, outOfLove: 0 }
  },
  {
    id: "in-the-dark",
    title: "In The Dark",
    artist: "DJ Snake & Stray Kids",

    album: "In The Dark (Single)",
    year: 2022,
    intro: "DJ Snake meets SKZ in a dark, throbbing club track. Their most dance-floor-ready collab.",
    gist: "Moving in the dark — anonymous, free, electric. The night as escape.",
    tags: ["EDM", "club", "collab", "dark", "hype"],
    stats: { happy: 5, sad: 2, hype: 10, calm: 0, alone: 2, inLove: 3, outOfLove: 0 }
  },
  {
    id: "circus",
    title: "CIRCUS",
    artist: "Stray Kids",
    album: "MAXIDENT",
    year: 2022,
    intro: "Life as a circus — absurd, beautiful, and slightly terrifying. SKZ as the ringmasters.",
    gist: "The whole world is a circus and they're the main act. Embracing the chaos and performing anyway.",
    tags: ["theatrical", "chaotic", "bold", "metaphorical"],
    stats: { happy: 5, sad: 3, hype: 8, calm: 1, alone: 2, inLove: 0, outOfLove: 2 }
  },
  {
    id: "freeze",
    title: "FREEZE",
    artist: "Stray Kids",
    album: "ODDINARY",
    year: 2022,
    intro: "Stop everything. An eerie, hypnotic track — you'll feel rooted in place.",
    gist: "Freezing time when you're with someone. Or being frozen by someone's gaze. Hypnotic and atmospheric.",
    tags: ["eerie", "hypnotic", "atmospheric", "love"],
    stats: { happy: 3, sad: 4, hype: 5, calm: 5, alone: 3, inLove: 6, outOfLove: 2 }
  },
  {
    id: "charmer",
    title: "Charmer",
    artist: "Stray Kids",
    album: "ODDINARY",
    year: 2022,
    intro: "They know exactly what they're doing to you. And they're doing it on purpose.",
    gist: "Self-aware charisma weaponized. They charm because they can — and they're not apologizing.",
    tags: ["charismatic", "confident", "playful", "seductive"],
    stats: { happy: 7, sad: 0, hype: 7, calm: 2, alone: 0, inLove: 5, outOfLove: 0 }
  },
  {
    id: "muddy-water",
    title: "Muddy Water",
    artist: "Stray Kids (Changbin, Hyunjin, HAN, Felix)",
    album: "ODDINARY",
    year: 2021,
    intro: "The dark horse of NOEASY. Raw, poetic, and deeply underrated.",
    gist: "Murky emotions, unclear paths, the mess inside — expressed with honesty and no filter.",
    tags: ["subunit", "raw", "poetic", "dark"],
    stats: { happy: 2, sad: 7, hype: 5, calm: 2, alone: 6, inLove: 0, outOfLove: 3 }
  },
  {
    id: "han-i-got-it",
    title: "I GOT IT (HAN)",
    artist: "HAN (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2019,
    intro: "HAN alone, proving everything he said. Solo track that showcases his full range.",
    gist: "I got it — the talent, the will, the receipts. HAN's personal declaration of his own capability.",
    tags: ["HAN", "solo", "rap", "confident", "personal"],
    stats: { happy: 5, sad: 3, hype: 8, calm: 1, alone: 4, inLove: 0, outOfLove: 0 }
  },
  {
    id: "close-han",
    title: "Close (HAN)",
    artist: "HAN (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2019,
    intro: "HAN in an introspective, quiet moment. Closer to the emotional core than most of his work.",
    gist: "Getting close to something — a person, a feeling, an answer — but never quite arriving.",
    tags: ["HAN", "solo", "emotional", "introspective"],
    stats: { happy: 3, sad: 6, hype: 2, calm: 5, alone: 7, inLove: 3, outOfLove: 2 }
  },
  {
    id: "connected-bangchan",
    title: "Connected (방찬)",
    artist: "Bang Chan (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2019,
    intro: "Bang Chan reaching across the distance. A gentle, sincere track for the fans.",
    gist: "We are connected regardless of distance. Bang Chan to STAY — a quiet, personal message.",
    tags: ["Bang Chan", "solo", "sincere", "gentle", "STAY"],
    stats: { happy: 6, sad: 3, hype: 1, calm: 8, alone: 2, inLove: 4, outOfLove: 0 }
  },
  {
    id: "yellow-wood",
    title: "Miroh (Yellow Wood Ver.)",
    artist: "Stray Kids",
    album: "Clé 2: Yellow Wood",
    year: 2019,
    intro: "A more rustic, organic remix of the fearless original.",
    gist: "The maze through a yellow wood — same boldness, softer palette.",
    tags: ["alternate", "acoustic", "organic", "MIROH"],
    stats: { happy: 7, sad: 1, hype: 7, calm: 3, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "the-sound",
    title: "THE SOUND",
    artist: "Stray Kids",
    album: "THE SOUND (Japanese Album)",
    year: 2023,
    intro: "This is their sound — loud, distinct, undeniable, theirs. A meta-anthem about their own music.",
    gist: "The sound of Stray Kids is theirs alone. This song is both the statement and the proof.",
    tags: ["meta", "identity", "bold", "loud", "anthem"],
    stats: { happy: 7, sad: 1, hype: 9, calm: 1, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "ultra",
    title: "ULTRA",
    artist: "Changbin (Stray Kids)",
    album: "HOP (SKZHOP HIPTAPE)",
    year: 2024,
    intro: "Maximum everything. Ultra as in beyond limits — SKZ past their own ceiling.",
    gist: "Going beyond every boundary. More than maximum — ultra.",
    tags: ["intense", "max-energy", "bold", "hype"],
    stats: { happy: 7, sad: 1, hype: 10, calm: 0, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "unfair",
    title: "Unfair",
    artist: "Felix (Stray Kids)",
    album: "HOP (SKZHOP HIPTAPE)",
    year: 2024,
    intro: "The world isn't fair — and SKZ leans into it. Driven, assertive, and real.",
    gist: "Life is unfair and they've decided to stop pretending otherwise. Channel that truth into motion.",
    tags: ["honest", "driven", "social-commentary", "mid-tempo"],
    stats: { happy: 3, sad: 6, hype: 7, calm: 2, alone: 4, inLove: 0, outOfLove: 2 }
  },
  {
    id: "bounce-back",
    title: "Bounce Back",
    artist: "Stray Kids",
    album: "HOP (SKZHOP HIPTAPE)",
    year: 2024,
    intro: "Get knocked down seven times, stand up eight. Pure resilience energy.",
    gist: "Resilience personified. Every setback is just momentum for the comeback.",
    tags: ["resilience", "comeback", "empowerment", "hype"],
    stats: { happy: 8, sad: 2, hype: 9, calm: 1, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "youth",
    title: "Youth",
    artist: "Lee Know (Stray Kids)",
    album: "HOP (SKZHOP HIPTAPE)",
    year: 2024,
    intro: "A celebration of youth as a state of mind, not an age. Warm and nostalgic.",
    gist: "Youth isn't an age — it's a feeling of being alive, vibrant, and unafraid. Cherish it.",
    tags: ["nostalgic", "warm", "youth", "emotional"],
    stats: { happy: 7, sad: 4, hype: 3, calm: 6, alone: 2, inLove: 2, outOfLove: 0 }
  },
  {
    id: "walkin-on-water",
    title: "Walkin On Water",
    artist: "Stray Kids",
    album: "HOP (SKZHOP HIPTAPE)",
    year: 2024,
    intro: "Defying gravity. Defying expectations. Doing the impossible like it's Tuesday.",
    gist: "They walk on water — doing what should be impossible, now mundane. Complete self-belief.",
    tags: ["confidence", "miraculous", "hype", "bold"],
    stats: { happy: 7, sad: 1, hype: 9, calm: 1, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "parade",
    title: "Parade",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "They're marching, and they're taking you with them. A triumphant procession.",
    gist: "Life as a parade — keep moving, keep the energy up, celebrate the march itself.",
    tags: ["celebratory", "marching", "uplifting", "anthemic"],
    stats: { happy: 8, sad: 1, hype: 8, calm: 2, alone: 0, inLove: 0, outOfLove: 0 }
  },
  {
    id: "phoenix",
    title: "Phoenix",
    artist: "Stray Kids",
    album: "KARMA",
    year: 2025,
    intro: "Burn. Rise. Repeat. The phoenix metaphor done with SKZ's signature intensity.",
    gist: "From the ashes, again and again. Being destroyed and choosing to rise is the whole story.",
    tags: ["resurrection", "powerful", "emotional", "hype"],
    stats: { happy: 5, sad: 4, hype: 9, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "in-my-head",
    title: "In My Head",
    artist: "Stray Kids",
    album: "KARMA",
    year: 2025,
    intro: "The thoughts won't stop. An immersive track that places you inside the spiral.",
    gist: "Trapped in your own head — the obsessive loop of thoughts about someone or something.",
    tags: ["obsessive", "introspective", "atmospheric", "emotional"],
    stats: { happy: 2, sad: 7, hype: 3, calm: 2, alone: 7, inLove: 5, outOfLove: 3 }
  },
  {
    id: "so-good",
    title: "So good",
    artist: "Hyunjin (Stray Kids)",
    album: "HOP (SKZHOP HIPTAPE)",
    year: 2024,
    intro: "Effortlessly smooth. They're this good and they barely even try.",
    gist: "Being undeniably, uncomplicatedly good at what you do. Confidence without shouting.",
    tags: ["smooth", "confident", "R&B", "cool"],
    stats: { happy: 8, sad: 0, hype: 5, calm: 6, alone: 0, inLove: 2, outOfLove: 0 }
  },
  {
    id: "ceremony",
    title: "CEREMONY",
    artist: "Stray Kids",
    album: "KARMA",
    year: 2025,
    intro: "The title track of KARMA — a full ceremony dedicated to everything they've built and everyone who built it with them.",
    gist: "CEREMONY is a declaration and a celebration: this moment, this bond, this achievement is worth marking with full presence. The title track that crowns the album.",
    tags: ["title-track", "milestone", "celebration", "sincere", "STAY", "KARMA"],
    stats: { happy: 8, sad: 2, hype: 4, calm: 5, alone: 0, inLove: 5, outOfLove: 0 }
  },
  {
    id: "hold-my-hand",
    title: "Hold my hand",
    artist: "HAN (Stray Kids)",
    album: "HOP (SKZHOP HIPTAPE)",
    year: 2024,
    intro: "Simple, tender, human. Sometimes all you need is someone to hold your hand.",
    gist: "Just hold my hand. No grand gestures — the simplest form of comfort becomes the most profound.",
    tags: ["tender", "simple", "love", "comforting", "emotional"],
    stats: { happy: 5, sad: 4, hype: 1, calm: 8, alone: 2, inLove: 9, outOfLove: 0 }
  },
  {
    id: "hallucination",
    title: "HALLUCINATION",
    artist: "I.N (Stray Kids)",
    album: "HOP (SKZHOP HIPTAPE)",
    year: 2024,
    intro: "Is this real or imagined? Love that blurs the line between reality and fantasy.",
    gist: "Love as hallucination — so intense it distorts your perception. You're not sure what's real anymore.",
    tags: ["surreal", "love", "dreamy", "intense"],
    stats: { happy: 3, sad: 5, hype: 4, calm: 3, alone: 3, inLove: 8, outOfLove: 2 }
  },
  {
    id: "giant",
    title: "GIANT",
    artist: "Stray Kids",
    album: "MAXIDENT",
    year: 2022,
    intro: "Standing tall against everything. They've always been giants — maybe the world just noticed.",
    gist: "They were always this big. The world is catching up. Quiet, earned confidence.",
    tags: ["confidence", "growth", "powerful", "sincere"],
    stats: { happy: 6, sad: 2, hype: 7, calm: 3, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "christmas-evel",
    title: "Christmas EveL",
    artist: "Stray Kids",
    album: "Christmas EveL (Single)",
    year: 2021,
    intro: "Christmas SKZ style — chaotic, dark, and somehow still festive. Only they could do this.",
    gist: "Christmas Eve + Evil = Christmas EveL. A holiday track with an edge — joyful destruction.",
    tags: ["holiday", "dark-fun", "unique", "chaotic"],
    stats: { happy: 6, sad: 1, hype: 9, calm: 0, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "taste",
    title: "TASTE",
    artist: "Stray Kids (Lee Know, Hyunjin, Felix)",
    album: "SKZ-RECORD",
    year: 2023,
    intro: "Three of SKZ's most charismatic members in one track. Elegant, sensual, refined.",
    gist: "Having taste — in everything. This subunit track oozes aesthetic awareness.",
    tags: ["subunit", "charismatic", "smooth", "aesthetic"],
    stats: { happy: 6, sad: 1, hype: 6, calm: 4, alone: 1, inLove: 5, outOfLove: 0 }
  },
  {
    id: "bleep",
    title: "BLEEP (삐처리)",
    artist: "Stray Kids",
    album: "KARMA",
    year: 2025,
    intro: "What you say when you can't say what you actually want to say. Frustration, censored.",
    gist: "All the words they can't say, bleeped out. The unspeakable feelings, expressed through their absence.",
    tags: ["witty", "frustrated", "bold", "unique"],
    stats: { happy: 4, sad: 4, hype: 7, calm: 1, alone: 3, inLove: 0, outOfLove: 3 }
  },
  {
    id: "never-alone",
    title: "Never Alone",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "A promise. You will never have to face anything alone as long as they're here.",
    gist: "The deepest reassurance SKZ can offer: we're in this together. An unconditional, sincere promise.",
    tags: ["promise", "comforting", "STAY", "emotional", "sincere"],
    stats: { happy: 6, sad: 4, hype: 2, calm: 7, alone: 1, inLove: 5, outOfLove: 0 }
  },
  {
    id: "escape",
    title: "ESCAPE",
    artist: "Stray Kids",
    album: "ATE",
    year: 2024,
    intro: "Escape from what? Everything. A high-energy chase track that feels like running.",
    gist: "Breaking free from limits, from boxes, from everything that holds you back. Run.",
    tags: ["freedom", "hype", "intense", "breaking-free"],
    stats: { happy: 6, sad: 2, hype: 10, calm: 0, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "truman",
    title: "Truman",
    artist: "Stray Kids",
    album: "ATE",
    year: 2024,
    intro: "Named after The Truman Show. Are we living our authentic lives or performing for an audience?",
    gist: "Life as a performance, the fear of it all being fake — and the courage to break the fourth wall.",
    tags: ["conceptual", "film-reference", "introspective", "existential"],
    stats: { happy: 2, sad: 6, hype: 5, calm: 3, alone: 6, inLove: 0, outOfLove: 2 }
  },
  {
    id: "cinema",
    title: "CINEMA",
    artist: "Stray Kids",
    album: "ATE",
    year: 2024,
    intro: "Love as cinema — dramatic, immersive, larger than life. A beautiful, cinematic love track.",
    gist: "You are the movie they'd watch a thousand times. Love expressed through the language of film.",
    tags: ["love", "cinematic", "romantic", "beautiful"],
    stats: { happy: 7, sad: 2, hype: 4, calm: 5, alone: 1, inLove: 9, outOfLove: 0 }
  },
  {
    id: "half-time",
    title: "Half Time (반전)",
    artist: "Stray Kids",
    album: "KARMA",
    year: 2025,
    intro: "반전 means plot twist — the kind that flips everything you thought you knew.",
    gist: "Not a halftime rest — a reversal. 반전 is the unexpected turn that changes the whole story. Things are never what they seem.",
    tags: ["reversal", "plot-twist", "unexpected", "KARMA"],
    stats: { happy: 5, sad: 4, hype: 5, calm: 5, alone: 3, inLove: 0, outOfLove: 0 }
  },
  {
    id: "super-board",
    title: "SUPER BOARD",
    artist: "Stray Kids",
    album: "MAXIDENT",
    year: 2022,
    intro: "Riding the biggest wave. Pure, unfiltered fun — surf culture meets SKZ energy.",
    gist: "Life is a board and they're riding it hard. Carefree, energetic, summer-coded.",
    tags: ["fun", "carefree", "energetic", "summer"],
    stats: { happy: 9, sad: 0, hype: 9, calm: 1, alone: 0, inLove: 2, outOfLove: 0 }
  },
  {
    id: "creed",
    title: "CREED",
    artist: "Stray Kids",
    album: "KARMA",
    year: 2025,
    intro: "A creed is what you live by. This is their doctrine — written in sound.",
    gist: "This is what we believe, who we are, what we stand for. SKZ's manifesto, distilled.",
    tags: ["manifesto", "identity", "anthem", "powerful"],
    stats: { happy: 6, sad: 2, hype: 8, calm: 2, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "ghost",
    title: "Ghost",
    artist: "Stray Kids",
    album: "KARMA",
    year: 2025,
    intro: "Haunting in the best sense. Staying with you long after it's over.",
    gist: "The ghost of someone who's gone — still present, still felt, still real in every corner of memory.",
    tags: ["haunting", "loss", "emotional", "atmospheric"],
    stats: { happy: 2, sad: 8, hype: 3, calm: 4, alone: 7, inLove: 3, outOfLove: 5 }
  },
  {
    id: "just-a-little",
    title: "Just a little",
    artist: "Stray Kids",
    album: "ATE",
    year: 2024,
    intro: "The smallest things carry the most weight. Subtle, restrained, and powerful because of it.",
    gist: "Just a little — gesture, love, kindness. The small moments that mean everything.",
    tags: ["subtle", "tender", "emotional", "love"],
    stats: { happy: 5, sad: 5, hype: 1, calm: 7, alone: 3, inLove: 7, outOfLove: 1 }
  },
  {
    id: "as-we-are",
    title: "As we are",
    artist: "Seungmin (Stray Kids)",
    album: "HOP (SKZHOP HIPTAPE)",
    year: 2024,
    intro: "No changes needed. You're enough, exactly as you are right now.",
    gist: "Acceptance. Not who you could be — who you are right now. As we are is enough.",
    tags: ["acceptance", "comforting", "self-love", "warm"],
    stats: { happy: 7, sad: 3, hype: 1, calm: 8, alone: 2, inLove: 5, outOfLove: 0 }
  },
  {
    id: "runners",
    title: "Runners",
    artist: "Stray Kids",
    album: "ATE",
    year: 2024,
    intro: "They never stop running. Forward momentum as a way of life.",
    gist: "Perpetual motion — they are runners, always moving, never stopping. The race has no finish line.",
    tags: ["running", "momentum", "hype", "determined"],
    stats: { happy: 7, sad: 2, hype: 9, calm: 1, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "mountains",
    title: "MOUNTAINS",
    artist: "Stray Kids",
    album: "ATE",
    year: 2024,
    intro: "Mountains to climb. Obstacles that make the view from the top worth it.",
    gist: "Every mountain in their path is just a new peak to reach. Difficulty reframed as opportunity.",
    tags: ["determination", "overcoming", "epic", "inspirational"],
    stats: { happy: 6, sad: 3, hype: 8, calm: 2, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "chk-chk-boom",
    title: "Chk Chk Boom",
    artist: "Stray Kids",
    album: "ATE",
    year: 2024,
    intro: "Load up and detonate. The most explosively fun track in their recent catalog.",
    gist: "Like cocking a gun and firing — precise, explosive, impactful. Pure hype energy.",
    tags: ["explosive", "fun", "loud", "hype", "banger"],
    stats: { happy: 7, sad: 0, hype: 10, calm: 0, alone: 0, inLove: 0, outOfLove: 0 }
  },
  {
    id: "party-not-over",
    title: "Party's Not Over",
    artist: "Stray Kids",
    album: "ATE",
    year: 2024,
    intro: "The night never ends if you don't let it. Keeping the energy alive past when it should.",
    gist: "Refusing to let the good times end. The party goes on because they say so.",
    tags: ["party", "fun", "energetic", "defiant"],
    stats: { happy: 9, sad: 1, hype: 9, calm: 0, alone: 0, inLove: 2, outOfLove: 0 }
  },
  {
    id: "burning-tires",
    title: "Burnin'",
    artist: "Stray Kids",
    album: "Mixtape: dominATE",
    year: 2025,
    intro: "Pedal to the floor. Tires burning. No destination, just velocity.",
    gist: "Speed for the sake of speed. Living so fast you leave marks on the ground.",
    tags: ["fast", "reckless", "hype", "freedom"],
    stats: { happy: 6, sad: 1, hype: 10, calm: 0, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "slash",
    title: "SLASH",
    artist: "Stray Kids",
    album: "Deadpool & Wolverine OST",
    year: 2024,
    intro: "Cut through everything. Sharp, precise, and devastatingly effective.",
    gist: "Slashing through obstacles, barriers, and limitations. Surgical precision in motion.",
    tags: ["intense", "sharp", "hype", "powerful"],
    stats: { happy: 5, sad: 2, hype: 10, calm: 0, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "saiyan",
    title: "Saiyan",
    artist: "Stray Kids",
    album: "ATE",
    year: 2024,
    intro: "Dragon Ball Z as a Stray Kids song. Transforming under pressure — and coming out stronger.",
    gist: "The Saiyan transformation: breaking point becomes breakthrough. Pain is fuel.",
    tags: ["anime-reference", "transformation", "power", "hype"],
    stats: { happy: 5, sad: 3, hype: 10, calm: 0, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "come-play",
    title: "Come Play",
    artist: "Stray Kids",
    album: "Arcane League of Legends OST",
    year: 2024,
    intro: "Written for the Arcane series. Dark, urgent, and immersive — it sounds like the show feels.",
    gist: "An invitation into chaos. Come play in the dark world where the stakes are real.",
    tags: ["OST", "dark", "anime", "cinematic", "collab"],
    stats: { happy: 3, sad: 4, hype: 9, calm: 1, alone: 3, inLove: 0, outOfLove: 0 }
  },
  {
    id: "always-love",
    title: "Always Love",
    artist: "d4vd feat. Hyunjin (Stray Kids)",
    album: "Always Love (Single)",
    year: 2023,
    intro: "A rare, unexpected collab — gentle and genuine. Hyunjin's softer side in a tender context.",
    gist: "Always loving, no conditions. A simple, true promise made softly.",
    tags: ["Hyunjin", "collab", "gentle", "love", "sincere"],
    stats: { happy: 7, sad: 3, hype: 1, calm: 8, alone: 2, inLove: 9, outOfLove: 0 }
  },
  {
    id: "seungmin-close-to-you",
    title: "Close to You",
    artist: "SEUNGMIN (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2023,
    intro: "Seungmin's tender solo offering. Pure, warm, and full of longing.",
    gist: "Just wanting to be close. Simple proximity as the deepest form of love.",
    tags: ["Seungmin", "solo", "tender", "love", "soft"],
    stats: { happy: 5, sad: 4, hype: 0, calm: 9, alone: 3, inLove: 9, outOfLove: 0 }
  },
  {
    id: "seungmin-here-always",
    title: "Here Always",
    artist: "SEUNGMIN (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2024,
    intro: "A permanent promise — not 'I'll try' but 'I'm here, always, full stop.'",
    gist: "Seungmin making an unconditional commitment. Being someone's constant.",
    tags: ["Seungmin", "solo", "sincere", "promise", "comforting"],
    stats: { happy: 6, sad: 3, hype: 0, calm: 9, alone: 1, inLove: 8, outOfLove: 0 }
  },
  {
    id: "han-alien",
    title: "Alien (외계인)",
    artist: "HAN (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2022,
    intro: "HAN exploring the feeling of being an outsider — alien in your own world.",
    gist: "Feeling foreign, out of place, like you don't belong on this planet. HAN's most vulnerable admission.",
    tags: ["HAN", "solo", "alien", "outsider", "vulnerable"],
    stats: { happy: 2, sad: 8, hype: 3, calm: 2, alone: 9, inLove: 0, outOfLove: 0 }
  },
  {
    id: "han-volcano",
    title: "VOLCANO",
    artist: "HAN (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2020,
    intro: "Pressure building. HAN is the volcano — and eruption is inevitable.",
    gist: "Creative and emotional pressure building until it must explode. HAN at his most cathartic.",
    tags: ["HAN", "solo", "intense", "cathartic", "rap"],
    stats: { happy: 3, sad: 5, hype: 9, calm: 0, alone: 5, inLove: 0, outOfLove: 2 }
  },
  {
    id: "hyunjin-contradicting",
    title: "Contradicting",
    artist: "Hyunjin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "Hyunjin sitting with his own contradictions. Deeply artistic and introspective.",
    gist: "Containing multitudes — being multiple things at once, contradicting yourself, and finding that okay.",
    tags: ["Hyunjin", "solo", "artistic", "introspective", "self-examination"],
    stats: { happy: 3, sad: 6, hype: 2, calm: 5, alone: 6, inLove: 1, outOfLove: 2 }
  },
  {
    id: "hyunjin-ice-cream",
    title: "ice.cream",
    artist: "Hyunjin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2022,
    intro: "Sweet, melting, fleeting — the lightest Hyunjin solo moment.",
    gist: "Love like ice cream: sweet, temporary, gone before you're ready. Enjoy it while it lasts.",
    tags: ["Hyunjin", "solo", "sweet", "metaphorical", "light"],
    stats: { happy: 7, sad: 3, hype: 2, calm: 7, alone: 1, inLove: 7, outOfLove: 2 }
  },
  {
    id: "deep-end-felix",
    title: "Deep end (필릭스)",
    artist: "Felix (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2019,
    intro: "Felix diving into the emotional deep end. Unexpectedly profound for a short track.",
    gist: "Jumping into the deep end — of love, of life, of everything — without knowing how to swim.",
    tags: ["Felix", "solo", "emotional", "brave", "vulnerable"],
    stats: { happy: 3, sad: 6, hype: 2, calm: 4, alone: 5, inLove: 4, outOfLove: 2 }
  },
  {
    id: "hyunjin-little-star",
    title: "꼬마별 (Little Star)",
    artist: "Hyunjin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "The most delicate thing in the SKZ catalog. Handle with care.",
    gist: "A tiny star in the vast sky — small but present, shining even when unseen. Tenderness about something fragile.",
    tags: ["Hyunjin", "gentle", "delicate", "beautiful", "solo"],
    stats: { happy: 5, sad: 5, hype: 0, calm: 9, alone: 4, inLove: 4, outOfLove: 0 }
  },
  {
    id: "in-natural",
    title: "인정하기 싫어 (Bang Chan)",
    artist: "Bang Chan (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2020,
    intro: "Bang Chan admitting something he doesn't want to admit. Vulnerable in a quiet way.",
    gist: "Not wanting to acknowledge the truth — that you're hurting, that something's wrong, that you still care.",
    tags: ["Bang Chan", "solo", "vulnerable", "denial", "emotional"],
    stats: { happy: 1, sad: 8, hype: 1, calm: 4, alone: 7, inLove: 3, outOfLove: 4 }
  },
  {
    id: "leeknow-love-me-leave",
    title: "Love me or Leave me (Cover)",
    artist: "Lee Know (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "Lee Know covering DAY6's emotional track with his own color. All in or all out.",
    gist: "No middle ground in love — love me completely or let me go. Lee Know delivering emotional precision.",
    tags: ["Lee Know", "cover", "DAY6", "emotional", "love"],
    stats: { happy: 2, sad: 7, hype: 2, calm: 4, alone: 5, inLove: 5, outOfLove: 6 }
  },
  {
    id: "seungmin-zombie",
    title: "Zombie Cover",
    artist: "Seungmin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "Seungmin covering DAY6's Zombie — and making it his own. Emotional and deeply felt.",
    gist: "Living like the walking dead — going through the motions without truly being present. Seungmin's sincerity elevates it.",
    tags: ["Seungmin", "cover", "DAY6", "emotional", "existential"],
    stats: { happy: 1, sad: 8, hype: 2, calm: 4, alone: 8, inLove: 0, outOfLove: 2 }
  },
  {
    id: "han-wish-you-back",
    title: "Wish You Back",
    artist: "HAN (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2022,
    intro: "HAN wishing something back that's already gone. Achingly simple and honest.",
    gist: "The simplest longing: I wish you were back. Not complicated — just honest and painful.",
    tags: ["HAN", "solo", "longing", "emotional", "loss"],
    stats: { happy: 1, sad: 9, hype: 1, calm: 4, alone: 8, inLove: 2, outOfLove: 6 }
  },
  {
    id: "han-happy",
    title: "HaPpY",
    artist: "HAN (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2022,
    intro: "Happiness as something hard to reach and harder to hold. HAN examining the concept.",
    gist: "What is happy? HAN turning the word over, questioning it, and finding it more complex than it looks.",
    tags: ["HAN", "solo", "introspective", "emotional", "questions"],
    stats: { happy: 4, sad: 6, hype: 2, calm: 4, alone: 5, inLove: 1, outOfLove: 2 }
  },
  {
    id: "changbin-cypher",
    title: "Cypher",
    artist: "Changbin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2019,
    intro: "Changbin unleashed. This is what happens when you give the 3RACHA rapper full creative freedom.",
    gist: "Pure Changbin — his voice, his pen, his flexing. A cypher as a declaration of rap identity.",
    tags: ["Changbin", "solo", "rap", "flex", "intense"],
    stats: { happy: 4, sad: 2, hype: 10, calm: 0, alone: 3, inLove: 0, outOfLove: 0 }
  },
  {
    id: "bangchan-railway",
    title: "Railway",
    artist: "Bang Chan (Stray Kids)",
    album: "HOP (SKZHOP HIPTAPE)",
    year: 2024,
    intro: "Bang Chan on a one-way track to somewhere meaningful. Reflective and forward-looking.",
    gist: "Life as a railway — one direction, predetermined stops, but the journey matters.",
    tags: ["Bang Chan", "solo", "reflective", "journey", "sincere"],
    stats: { happy: 5, sad: 4, hype: 3, calm: 6, alone: 3, inLove: 2, outOfLove: 0 }
  },
  {
    id: "han-seungmin-congratulations",
    title: "Congratulations",
    artist: "HAN & Seungmin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "Two unlikely vocalists pairing up for a bittersweet celebration.",
    gist: "Congratulations on moving on, on being happy — even when you're not the reason for that happiness.",
    tags: ["HAN", "Seungmin", "duet", "bittersweet", "breakup"],
    stats: { happy: 4, sad: 7, hype: 1, calm: 5, alone: 4, inLove: 2, outOfLove: 7 }
  },
  {
    id: "in-consolation",
    title: "Consolation (Cover)",
    artist: "I.N (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "I.N covering SHINee's Jonghyun — a deeply emotional, respectful tribute.",
    gist: "Consolation as the act of sitting with someone in their pain. I.N's delivery is pure, unadorned sincerity.",
    tags: ["I.N", "cover", "Jonghyun", "tribute", "emotional"],
    stats: { happy: 2, sad: 9, hype: 0, calm: 6, alone: 7, inLove: 2, outOfLove: 0 }
  },
  {
    id: "han-dont-say",
    title: "Don't Say",
    artist: "HAN (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "HAN asking for silence from someone who keeps saying the wrong thing.",
    gist: "Don't say it. Don't say goodbye, don't say it's over — the request to stop the words that end things.",
    tags: ["HAN", "solo", "emotional", "breakup", "plea"],
    stats: { happy: 1, sad: 9, hype: 2, calm: 3, alone: 7, inLove: 3, outOfLove: 7 }
  },
  {
    id: "in-scent-remains",
    title: "향기만 남아 (Only Scent Remains) Cover",
    artist: "I.N (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "Only the scent remains after someone leaves. I.N with ethereal tenderness.",
    gist: "After love ends, all that remains is a scent — fleeting, perfect, devastating.",
    tags: ["I.N", "cover", "nostalgic", "loss", "tender"],
    stats: { happy: 2, sad: 8, hype: 0, calm: 7, alone: 6, inLove: 4, outOfLove: 5 }
  },
  {
    id: "3racha-zone",
    title: "ZONE (방찬 & 창빈 & 한)",
    artist: "3RACHA (Bang Chan, Changbin, HAN)",
    album: "SKZ-RECORD / 3RACHA",
    year: 2019,
    intro: "3RACHA in their element — raw production, raw lyrics, raw them.",
    gist: "This is their zone — where they're completely themselves, completely unbothered.",
    tags: ["3RACHA", "rap", "raw", "unit", "authentic"],
    stats: { happy: 5, sad: 2, hype: 9, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },

  // ─── I Am NOT / I Am WHO / I Am YOU era ───────────────────────────────────
  {
    id: "grrr",
    title: "Grrr 총량의 법칙",
    artist: "Stray Kids",
    album: "I Am NOT",
    year: 2018,
    intro: "Physics class turned into a rap manifesto. Energy is never created or destroyed — it just becomes them.",
    gist: "The law of conservation of mass/energy as their thesis: their potential can't be eliminated, only transformed.",
    tags: ["debut-era", "rap", "science-metaphor", "intense", "I Am NOT"],
    stats: { happy: 4, sad: 2, hype: 9, calm: 0, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "mirror",
    title: "Mirror",
    artist: "Stray Kids",
    album: "I Am NOT",
    year: 2018,
    intro: "Stand in front of it long enough and you'll start to question what you see. A quiet reckoning.",
    gist: "Who is the person in the mirror? Confronting the gap between who you are and who you appear to be.",
    tags: ["debut-era", "introspective", "identity", "I Am NOT"],
    stats: { happy: 2, sad: 7, hype: 2, calm: 4, alone: 7, inLove: 0, outOfLove: 0 }
  },
  {
    id: "awaken",
    title: "Awaken",
    artist: "Stray Kids",
    album: "I Am WHO",
    year: 2018,
    intro: "The moment you come to life — really, fully alive. It's louder than you expected.",
    gist: "An awakening of self: stepping out of numbness and into full awareness of who you are and what you want.",
    tags: ["awakening", "powerful", "self-discovery", "I Am WHO"],
    stats: { happy: 5, sad: 3, hype: 8, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "mia",
    title: "M.I.A.",
    artist: "Stray Kids",
    album: "I Am WHO",
    year: 2018,
    intro: "Missing in action — but from yourself. The confusion of not knowing where you went.",
    gist: "Feeling absent from your own life. Emotionally AWOL. A quiet panic about losing your sense of self.",
    tags: ["lost", "identity", "anxious", "I Am WHO"],
    stats: { happy: 1, sad: 8, hype: 3, calm: 2, alone: 8, inLove: 0, outOfLove: 0 }
  },
  {
    id: "question",
    title: "Question",
    artist: "Stray Kids",
    album: "I Am NOT",
    year: 2018,
    intro: "Asking without expecting an answer. Sometimes a question is its own kind of answer.",
    gist: "Questioning everything — society, themselves, the system. The act of questioning is itself resistance.",
    tags: ["questioning", "defiant", "debut-era", "I Am NOT"],
    stats: { happy: 2, sad: 5, hype: 6, calm: 2, alone: 5, inLove: 0, outOfLove: 0 }
  },
  {
    id: "yayaya",
    title: "YAYAYA",
    artist: "Stray Kids",
    album: "I Am WHO",
    year: 2018,
    intro: "Sometimes the feeling doesn't need words. YAYAYA says everything by saying almost nothing.",
    gist: "Pure exuberance beyond language. The release of pent-up energy through sound alone.",
    tags: ["fun", "early-era", "carefree", "hype", "I Am WHO"],
    stats: { happy: 8, sad: 0, hype: 9, calm: 0, alone: 0, inLove: 1, outOfLove: 0 }
  },
  {
    id: "unlock",
    title: "Unlock",
    artist: "Stray Kids",
    album: "I Am WHO",
    year: 2018,
    intro: "Something in you is locked and you've finally found the key. The click is satisfying.",
    gist: "Unlocking your full potential, your true self, your hidden capability. The version of you that was always there.",
    tags: ["empowerment", "self-discovery", "I Am WHO"],
    stats: { happy: 6, sad: 2, hype: 7, calm: 2, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "grow-up",
    title: "Grow Up (잘 하고 있어)",
    artist: "Stray Kids",
    album: "I Am YOU",
    year: 2018,
    intro: "'You're doing well' — the words you needed to hear. Gentle, warm, honest.",
    gist: "Growing up is hard. 잘 하고 있어 means 'you're doing well' — and this song is that reassurance made into music.",
    tags: ["coming-of-age", "warm", "sincere", "I Am YOU"],
    stats: { happy: 6, sad: 4, hype: 2, calm: 7, alone: 3, inLove: 0, outOfLove: 0 }
  },
  {
    id: "spread-my-wings",
    title: "Spread My Wings (어린 날개)",
    artist: "Stray Kids",
    album: "Mixtape (Pre-debut)",
    year: 2017,
    intro: "Young wings, still learning to fly. A pre-debut declaration of who they would become.",
    gist: "어린 날개 = young/small wings. Dreams too big for the wings they have yet — but they'll grow into them.",
    tags: ["pre-debut", "dreamy", "hopeful", "early"],
    stats: { happy: 6, sad: 3, hype: 4, calm: 5, alone: 3, inLove: 0, outOfLove: 0 }
  },
  {
    id: "school-life",
    title: "School Life",
    artist: "Stray Kids",
    album: "Mixtape (Pre-debut)",
    year: 2017,
    intro: "Captured from inside a classroom they couldn't wait to leave. Raw and relatable.",
    gist: "The suffocation of school — rules, rankings, pressure — and the desire for something more real.",
    tags: ["pre-debut", "school", "youth", "raw", "relatable"],
    stats: { happy: 3, sad: 5, hype: 5, calm: 2, alone: 5, inLove: 0, outOfLove: 0 }
  },
  {
    id: "four-four-nineteen",
    title: "4419",
    artist: "Stray Kids",
    album: "Mixtape (Pre-debut)",
    year: 2017,
    intro: "Numbers that hold meaning only they fully understand. Mysterious, brooding, urgent.",
    gist: "A number that encodes a specific moment, date, or feeling — dense and personal, meant to be felt rather than decoded.",
    tags: ["pre-debut", "cryptic", "intense", "rap"],
    stats: { happy: 2, sad: 6, hype: 7, calm: 1, alone: 5, inLove: 0, outOfLove: 0 }
  },
  {
    id: "glow",
    title: "GLOW",
    artist: "Stray Kids",
    album: "I Am NOT",
    year: 2018,
    intro: "Some people shine — they can't help it. This song is that shine given a voice.",
    gist: "Radiating light regardless of circumstances. Glowing not because the world is bright but because you make it so.",
    tags: ["uplifting", "bright", "empowerment", "debut-era"],
    stats: { happy: 8, sad: 1, hype: 6, calm: 3, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "behind-the-light",
    title: "그림자도 빛이 있어야 존재 (Behind The Light)",
    artist: "Stray Kids",
    album: "I Am YOU",
    year: 2018,
    intro: "Even a shadow needs light to exist. One of their most quietly profound songs.",
    gist: "A shadow only exists because of light — you can't have one without the other. Fame, success, and the darkness they cast.",
    tags: ["philosophical", "duality", "poetic", "I Am YOU"],
    stats: { happy: 3, sad: 6, hype: 2, calm: 6, alone: 5, inLove: 0, outOfLove: 2 }
  },
  {
    id: "hello-stranger",
    title: "Hello Stranger",
    artist: "Stray Kids",
    album: "I Am YOU",
    year: 2018,
    intro: "You've met this person before. Or you think you have. Something familiar in a stranger's face.",
    gist: "The strange comfort of meeting someone new who feels like they've always been part of your story.",
    tags: ["connection", "meeting", "warm", "I Am YOU"],
    stats: { happy: 6, sad: 2, hype: 2, calm: 6, alone: 2, inLove: 5, outOfLove: 0 }
  },
  {
    id: "not",
    title: "NOT!",
    artist: "Stray Kids",
    album: "Clé 1: MIROH",
    year: 2019,
    intro: "A flat refusal. The most direct word in the language, shouted back at everyone who said no.",
    gist: "Not following, not conforming, not stopping. NOT! is a complete sentence and they mean it.",
    tags: ["defiant", "empowerment", "simple", "Clé 1"],
    stats: { happy: 4, sad: 1, hype: 9, calm: 0, alone: 2, inLove: 0, outOfLove: 0 }
  },

  // ─── Clé: LEVANTER bonus tracks ───────────────────────────────────────────
  {
    id: "stop",
    title: "STOP",
    artist: "Stray Kids",
    album: "Clé: LEVANTER",
    year: 2019,
    intro: "Just. Stop. A command directed inward — the moment you make yourself pause and breathe.",
    gist: "Asking everything around you — and inside you — to stop. A rare request for stillness in a catalog of motion.",
    tags: ["pause", "stillness", "emotional", "Clé LEVANTER"],
    stats: { happy: 3, sad: 6, hype: 2, calm: 6, alone: 5, inLove: 1, outOfLove: 2 }
  },
  {
    id: "you-can-stay",
    title: "You Can STAY",
    artist: "Stray Kids",
    album: "Clé: LEVANTER",
    year: 2019,
    intro: "Three words, complete sincerity. An open door left open for someone specific.",
    gist: "Permission and invitation: you can stay — here, with us, in this space. No conditions, just presence.",
    tags: ["sincere", "comforting", "warm", "Clé LEVANTER", "STAY"],
    stats: { happy: 7, sad: 2, hype: 1, calm: 8, alone: 1, inLove: 5, outOfLove: 0 }
  },
  {
    id: "astronaut",
    title: "Astronaut",
    artist: "Stray Kids",
    album: "Clé: LEVANTER",
    year: 2019,
    intro: "Floating untethered, watching the world from a distance. Beautiful and lonesome at the same time.",
    gist: "The astronaut as metaphor: drifting in vastness, isolated but free, small against an infinite backdrop.",
    tags: ["dreamy", "space", "lonely-beautiful", "Clé LEVANTER"],
    stats: { happy: 4, sad: 5, hype: 2, calm: 7, alone: 7, inLove: 1, outOfLove: 0 }
  },
  {
    id: "booster",
    title: "Booster",
    artist: "Stray Kids",
    album: "Clé: LEVANTER",
    year: 2019,
    intro: "The rocket needs a booster to escape gravity. This is the song that launches you.",
    gist: "A propulsive track about being each other's booster — the fuel that makes escape velocity possible.",
    tags: ["energetic", "uplifting", "Clé LEVANTER", "hype"],
    stats: { happy: 7, sad: 1, hype: 8, calm: 1, alone: 1, inLove: 2, outOfLove: 0 }
  },
  {
    id: "sunshine",
    title: "Sunshine",
    artist: "Stray Kids",
    album: "Clé: LEVANTER",
    year: 2019,
    intro: "Someone is their sunshine — and they want you to know it. Warm, bright, unambiguous.",
    gist: "Pure positive energy personified as sunshine. This is what SKZ sounds like when they're simply, completely happy.",
    tags: ["warm", "happy", "love", "bright", "Clé LEVANTER"],
    stats: { happy: 9, sad: 0, hype: 5, calm: 6, alone: 0, inLove: 7, outOfLove: 0 }
  },

  // ─── NOEASY missing tracks ────────────────────────────────────────────────
  {
    id: "wolfgang",
    title: "Wolfgang",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "Named for Mozart. The audacity of that comparison becomes justified within 30 seconds of listening.",
    gist: "Like Wolfgang Amadeus Mozart, they compose with purpose and perform with precision. A grand, orchestral declaration of artistic genius.",
    tags: ["Mozart", "orchestral", "grand", "artistic", "NOEASY"],
    stats: { happy: 4, sad: 3, hype: 10, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "ssick",
    title: "Ssick",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "Sick = incredible in slang. 씩 = smirk in Korean. Both definitions apply simultaneously.",
    gist: "Being undeniably, obviously, embarrassingly good at everything they do. A braggadocious track that earns its brag.",
    tags: ["flex", "confident", "hype", "NOEASY"],
    stats: { happy: 7, sad: 0, hype: 9, calm: 0, alone: 0, inLove: 0, outOfLove: 0 }
  },
  {
    id: "cheese",
    title: "Cheese",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "The lightest thing on NOEASY. A breather between the chaos — but no less catchy for it.",
    gist: "You're irresistibly cheesy — over-the-top, sickeningly sweet, impossible to ignore. And they're completely hooked.",
    tags: ["playful", "fun", "love", "cute", "NOEASY"],
    stats: { happy: 8, sad: 0, hype: 6, calm: 3, alone: 0, inLove: 7, outOfLove: 0 }
  },
  {
    id: "red-lights",
    title: "Red Lights",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "Every signal says stop. They don't stop. That's both the problem and the whole point.",
    gist: "Running every red light. Warnings ignored because the pull is stronger than the warning. Danger as attraction.",
    tags: ["danger", "obsession", "dark", "love", "NOEASY"],
    stats: { happy: 3, sad: 4, hype: 8, calm: 1, alone: 2, inLove: 6, outOfLove: 3 }
  },
  {
    id: "waiting-for-us",
    title: "Waiting For Us",
    artist: "Stray Kids (Bang Chan, Lee Know, Seungmin, I.N)",
    album: "ODDINARY",
    year: 2021,
    intro: "The four vocalists of SKZ standing still together — a rare, patient stillness in their catalog.",
    gist: "Whatever is coming, it's worth waiting for. Four voices holding each other through the anticipation.",
    tags: ["subunit", "hopeful", "patient", "vocal", "NOEASY"],
    stats: { happy: 5, sad: 4, hype: 1, calm: 8, alone: 2, inLove: 4, outOfLove: 0 }
  },

  // ─── ODDINARY missing ─────────────────────────────────────────────────────
  {
    id: "lonely-st",
    title: "Lonely St.",
    artist: "Stray Kids",
    album: "ODDINARY",
    year: 2022,
    intro: "Everyone has a Lonely Street in their head. This is theirs — and now yours too.",
    gist: "Walking the street of your own loneliness — solitary, honest, oddly comforting in how universal it feels.",
    tags: ["lonely", "introspective", "indie-ish", "ODDINARY"],
    stats: { happy: 2, sad: 7, hype: 2, calm: 5, alone: 9, inLove: 1, outOfLove: 2 }
  },
  {
    id: "give-me-tmi",
    title: "Give Me Your TMI",
    artist: "Stray Kids",
    album: "ODDINARY",
    year: 2022,
    intro: "TMI = Too Much Information. They want it all. Every embarrassing detail, every random thought.",
    gist: "Tell me everything — the oversharing, the random details, the TMI. All of it is welcome.",
    tags: ["fun", "love", "playful", "curious", "ODDINARY"],
    stats: { happy: 8, sad: 0, hype: 6, calm: 3, alone: 0, inLove: 7, outOfLove: 0 }
  },
  {
    id: "item",
    title: "ITEM",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "You are the rarest item — the drop they've been farming for. A love song for gamers and everyone else.",
    gist: "Love expressed through the language of gaming: you're the legendary item that changes everything.",
    tags: ["gaming-metaphor", "love", "playful", "Clé 2"],
    stats: { happy: 7, sad: 1, hype: 6, calm: 2, alone: 0, inLove: 8, outOfLove: 0 }
  },

  // ─── MAXIDENT missing ─────────────────────────────────────────────────────
  {
    id: "zero-three-two-five",
    title: "0325",
    artist: "Stray Kids",
    album: "MAXIDENT",
    year: 2022,
    intro: "March 25, 2018. The day Stray Kids debuted. A date tattooed on their hearts.",
    gist: "0325 = 03/25 = their debut date. A song dedicated to the moment they became who they are — and everyone who witnessed it.",
    tags: ["debut-anniversary", "sincere", "STAY", "meaningful", "MAXIDENT"],
    stats: { happy: 7, sad: 5, hype: 1, calm: 6, alone: 1, inLove: 6, outOfLove: 0 }
  },
  {
    id: "hoodie-season",
    title: "Hoodie Season",
    artist: "Stray Kids",
    album: "SKZ2021 (Compilation)",
    year: 2021,
    intro: "Autumn arrived in your arms. A song so cozy it practically has a scent.",
    gist: "Hoodie weather, warm drinks, comfortable silence with someone you love. Love that feels like a soft sweater.",
    tags: ["cozy", "love", "autumn", "soft", "MAXIDENT"],
    stats: { happy: 7, sad: 2, hype: 1, calm: 9, alone: 1, inLove: 8, outOfLove: 0 }
  },
  {
    id: "maze-of-memories",
    title: "Maze of Memories (잠깐의 고요)",
    artist: "Stray Kids",
    album: "MAXIDENT",
    year: 2022,
    intro: "Getting lost in memory is sometimes the only place you want to be.",
    gist: "A labyrinth built entirely of recollection. Wandering through memories — pleasant and painful in equal measure.",
    tags: ["nostalgic", "dreamlike", "emotional", "MAXIDENT"],
    stats: { happy: 4, sad: 6, hype: 1, calm: 7, alone: 5, inLove: 4, outOfLove: 2 }
  },

  // ─── 5-STAR missing ───────────────────────────────────────────────────────
  {
    id: "fnf",
    title: "FNF",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "Fun, fast, relentless. One of their most purely energetic tracks in years.",
    gist: "Full send, full speed, no hesitation. FNF distills SKZ's kinetic energy into its purest form.",
    tags: ["hype", "fast", "fun", "5-STAR"],
    stats: { happy: 8, sad: 0, hype: 10, calm: 0, alone: 0, inLove: 1, outOfLove: 0 }
  },
  {
    id: "youtiful",
    title: "Youtiful",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "You + Beautiful = Youtiful. They invented a word for STAY. That's how much they mean.",
    gist: "A word that doesn't exist in any dictionary was created just for the fans. Youtiful is you at your full, specific, irreplaceable beauty.",
    tags: ["STAY", "fandom", "warm", "sincere", "5-STAR"],
    stats: { happy: 9, sad: 1, hype: 3, calm: 7, alone: 0, inLove: 8, outOfLove: 0 }
  },
  {
    id: "tmt",
    title: "TMT",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "Too much, too fast, too everything — and somehow still not enough.",
    gist: "The excess of feeling — too much emotion, too much intensity, too much of everything. TMT owns the overflow.",
    tags: ["intense", "emotional", "excess", "5-STAR"],
    stats: { happy: 5, sad: 4, hype: 7, calm: 1, alone: 3, inLove: 4, outOfLove: 2 }
  },
  {
    id: "love-stay",
    title: "#LoveSTAY",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "A hashtag made into a song. Direct, online-coded, deeply heartfelt.",
    gist: "Love and STAY — both the word and the fandom name — merged into one declaration. Exactly as sincere as it sounds.",
    tags: ["STAY", "fandom", "sincere", "direct", "5-STAR"],
    stats: { happy: 8, sad: 2, hype: 2, calm: 7, alone: 0, inLove: 9, outOfLove: 0 }
  },
  {
    id: "hollow",
    title: "Hollow",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "Empty on the inside in a way no one else can see. Carefully designed emptiness.",
    gist: "The hollow feeling — performing wholeness while something inside echoes. Atmospheric and precise.",
    tags: ["empty", "atmospheric", "emotional", "5-STAR"],
    stats: { happy: 1, sad: 8, hype: 2, calm: 4, alone: 8, inLove: 1, outOfLove: 3 }
  },
  {
    id: "there",
    title: "There",
    artist: "Stray Kids",
    album: "THE SOUND (Japanese Album)",
    year: 2023,
    intro: "A single word loaded with everything. There — where you are, where they want to be.",
    gist: "Being 'there' for someone is the simplest and hardest promise. This song is that promise.",
    tags: ["sincere", "warm", "simple", "GO LIVE"],
    stats: { happy: 6, sad: 3, hype: 1, calm: 8, alone: 2, inLove: 5, outOfLove: 0 }
  },
  {
    id: "for-you",
    title: "For You",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "Everything dedicated to one person. A love letter with no hesitation.",
    gist: "Two words that contain everything: for you. Every song, every performance, every sleepless night.",
    tags: ["dedication", "love", "sincere", "5-STAR"],
    stats: { happy: 7, sad: 3, hype: 2, calm: 7, alone: 1, inLove: 8, outOfLove: 0 }
  },
  {
    id: "time-out",
    title: "Mixtape: Time Out",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "The world is moving too fast. Call it. Take the timeout you've been denying yourself.",
    gist: "Pause, breathe, reset. Time Out is the permission you didn't know you needed to stop and be still.",
    tags: ["rest", "breathe", "self-care", "Mixtape OH"],
    stats: { happy: 4, sad: 4, hype: 1, calm: 9, alone: 4, inLove: 0, outOfLove: 1 }
  },
  {
    id: "broken-compass",
    title: "고장난 나침반 (Broken Compass)",
    artist: "Stray Kids",
    album: "Mixtape: OH",
    year: 2022,
    intro: "Without a working compass, you navigate by feeling. This is that feeling.",
    gist: "Lost with no reliable direction — the compass that should guide them is broken. But maybe that's freedom.",
    tags: ["lost", "freedom", "navigating", "emotional", "Mixtape OH"],
    stats: { happy: 2, sad: 7, hype: 3, calm: 4, alone: 6, inLove: 0, outOfLove: 2 }
  },
  {
    id: "night",
    title: "NIGHT",
    artist: "Stray Kids",
    album: "Tower of God OST",
    year: 2020,
    intro: "The ending theme of Tower of God — the quiet after the chaos. The night as rest and reckoning.",
    gist: "After all the fighting, the night comes. NIGHT is the exhale after a long climb — tender and still.",
    tags: ["OST", "anime", "calm", "night", "Tower of God"],
    stats: { happy: 3, sad: 6, hype: 1, calm: 8, alone: 6, inLove: 1, outOfLove: 1 }
  },
  {
    id: "falling-up",
    title: "Falling Up",
    artist: "Stray Kids",
    album: "Tower of God OST",
    year: 2020,
    intro: "Defying physics: falling upward. The paradox of rising through descent.",
    gist: "Falling up — in a tower where the climb means falling into yourself, into your potential, into something greater.",
    tags: ["OST", "anime", "Tower of God", "paradox", "hype"],
    stats: { happy: 6, sad: 3, hype: 8, calm: 2, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "one-day",
    title: "One Day",
    artist: "Stray Kids",
    album: "IN生 (IN LIFE)",
    year: 2020,
    intro: "One day — the most hopeful phrase in any language. This song is patient with you.",
    gist: "One day it will be okay. One day the hard parts will be over. One day is not a promise of when, but of certainty.",
    tags: ["hopeful", "patient", "warm", "IN LIFE"],
    stats: { happy: 6, sad: 4, hype: 1, calm: 7, alone: 3, inLove: 2, outOfLove: 0 }
  },
  {
    id: "who",
    title: "WHO?",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "The oldest question in self-awareness: who? Disorienting and urgent.",
    gist: "Who are you? Who am I? The question mark at the end is doing a lot of work. Identity in freefall.",
    tags: ["identity", "existential", "urgent", "NOEASY"],
    stats: { happy: 2, sad: 6, hype: 6, calm: 1, alone: 7, inLove: 0, outOfLove: 0 }
  },
  {
    id: "mess",
    title: "엉망 (MESS)",
    artist: "Stray Kids",
    album: "KARMA",
    year: 2025,
    intro: "A beautiful disaster. A joyful wreck. The kind of mess that's somehow perfect.",
    gist: "엉망 = mess/chaos. Being a mess not as failure but as freedom — chaotic, imperfect, alive.",
    tags: ["chaotic", "fun", "self-acceptance", "5-STAR"],
    stats: { happy: 6, sad: 2, hype: 8, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "why",
    title: "WHY",
    artist: "Stray Kids",
    album: "I Am NOT",
    year: 2018,
    intro: "Three letters, infinite directions. Sometimes the question is the whole point.",
    gist: "Asking WHY — to the world, to themselves, to everyone who put them in boxes. A demand for explanation.",
    tags: ["questioning", "debut-era", "defiant", "I Am NOT"],
    stats: { happy: 2, sad: 6, hype: 7, calm: 1, alone: 5, inLove: 0, outOfLove: 2 }
  },

  // ─── Unit / Collab tracks ─────────────────────────────────────────────────
  {
    id: "drive-bangchan-leeknow",
    title: "Drive (방찬 & 리노)",
    artist: "Bang Chan & Lee Know (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "Two of SKZ's most effortlessly cool members on a late-night drive. The vibe is immaculate.",
    gist: "Smooth, nocturnal, cinematic. Driving without a destination, just the road and a good co-pilot.",
    tags: ["Bang Chan", "Lee Know", "duet", "cool", "late-night"],
    stats: { happy: 6, sad: 2, hype: 3, calm: 7, alone: 1, inLove: 3, outOfLove: 0 }
  },
  {
    id: "streetlight",
    title: "Streetlight (창빈 Feat. 방찬)",
    artist: "Changbin feat. Bang Chan (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "Under the streetlight, everything looks more honest. A late-night rap confessional.",
    gist: "The streetlight as the only witness to something raw and real. Changbin bringing Bang Chan into his most personal space.",
    tags: ["Changbin", "Bang Chan", "rap", "night", "reflective"],
    stats: { happy: 3, sad: 5, hype: 5, calm: 5, alone: 5, inLove: 0, outOfLove: 2 }
  },
  {
    id: "maknae-on-top",
    title: "막내온탑 (Maknae On Top)",
    artist: "I.N feat. Bang Chan & Changbin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "The youngest member declaring he runs this. Delightful audacity with full senior backing.",
    gist: "막내온탑 = maknae on top. I.N flipping the hierarchy — with Bang Chan and Changbin co-signing every word.",
    tags: ["I.N", "funny", "confident", "subunit", "playful"],
    stats: { happy: 9, sad: 0, hype: 8, calm: 1, alone: 0, inLove: 0, outOfLove: 0 }
  },
  {
    id: "najigeumi-leeknow",
    title: "나지막이 (Lee Know)",
    artist: "Lee Know (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "나지막이 means 'softly, quietly.' Lee Know at his most tender — barely above a whisper.",
    gist: "Speaking softly is sometimes the loudest thing you can do. Lee Know finding gentleness in a quiet solo space.",
    tags: ["Lee Know", "solo", "gentle", "quiet", "tender"],
    stats: { happy: 4, sad: 5, hype: 0, calm: 9, alone: 4, inLove: 4, outOfLove: 1 }
  },
  {
    id: "naeryeo-seungmin",
    title: "내려요 (Seungmin)",
    artist: "Seungmin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "내려요 means 'let it go down / step down.' Seungmin asking something in himself to descend.",
    gist: "Letting the weight come down — releasing something heavy with grace. Seungmin's quiet emotional precision.",
    tags: ["Seungmin", "solo", "emotional", "release", "sincere"],
    stats: { happy: 3, sad: 7, hype: 0, calm: 7, alone: 5, inLove: 2, outOfLove: 2 }
  },
  {
    id: "run-han",
    title: "RUN (한)",
    artist: "HAN (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "HAN running — from something, toward something, maybe just running. Either way, he doesn't stop.",
    gist: "The act of running as expression: urgency, escape, pursuit. HAN's intensity reduced to pure kinetic energy.",
    tags: ["HAN", "solo", "running", "intense", "rap"],
    stats: { happy: 4, sad: 4, hype: 9, calm: 0, alone: 4, inLove: 0, outOfLove: 0 }
  },
  {
    id: "doodle-changbin",
    title: "DOODLE (창빈)",
    artist: "Changbin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2022,
    intro: "Casual creativity: a doodle that becomes a masterpiece when Changbin holds the pen.",
    gist: "Sketching without pressure — the music that comes when you stop trying. Changbin's most playful, unguarded solo.",
    tags: ["Changbin", "solo", "creative", "playful", "casual"],
    stats: { happy: 7, sad: 1, hype: 6, calm: 4, alone: 2, inLove: 1, outOfLove: 0 }
  },
  {
    id: "love-untold-hyunjin",
    title: "Love Untold (현진)",
    artist: "Hyunjin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2022,
    intro: "The love that never got said out loud. Hyunjin painting it in sound instead.",
    gist: "All the things you never confessed, compressed into one song. Love that exists but was never spoken.",
    tags: ["Hyunjin", "solo", "unspoken-love", "emotional", "poetic"],
    stats: { happy: 3, sad: 7, hype: 1, calm: 6, alone: 5, inLove: 7, outOfLove: 3 }
  },
  {
    id: "my-side",
    title: "편 (My Side)",
    artist: "Changbin & Seungmin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "Two members, one unspoken agreement: we're on each other's side. Full stop.",
    gist: "편 = side/team. Being unconditionally on someone's side — not because it's easy, but because that's what you do.",
    tags: ["Changbin", "Seungmin", "loyalty", "duet", "sincere"],
    stats: { happy: 6, sad: 3, hype: 3, calm: 6, alone: 1, inLove: 3, outOfLove: 0 }
  },
  {
    id: "pieces",
    title: "조각 (Pieces)",
    artist: "Changbin & Seungmin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "The fragments left behind. Two voices picking up pieces together.",
    gist: "조각 = fragment/piece. A relationship or moment reduced to pieces — and the attempt to make something from them.",
    tags: ["Changbin", "Seungmin", "duet", "emotional", "fragmented"],
    stats: { happy: 3, sad: 7, hype: 1, calm: 5, alone: 4, inLove: 3, outOfLove: 5 }
  },
  {
    id: "ice-americano",
    title: "Ice Americano",
    artist: "Lee Know & HAN (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "An unexpected pairing over the most Korean-millennial beverage possible. Surprisingly delightful.",
    gist: "Like an iced Americano: sharp, cool, slightly bitter, and somehow the thing you come back to every day.",
    tags: ["Lee Know", "HAN", "duet", "fun", "coffee", "playful"],
    stats: { happy: 8, sad: 0, hype: 5, calm: 5, alone: 0, inLove: 3, outOfLove: 0 }
  },
  {
    id: "one-more-pic",
    title: "한장더 (One More Pic)",
    artist: "Bang Chan & Felix (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "One more. Just one more photo, one more moment, one more second of something you don't want to end.",
    gist: "The impulse to capture moments before they're gone — and the truth that the camera can never hold everything.",
    tags: ["Bang Chan", "Felix", "duet", "sweet", "nostalgic"],
    stats: { happy: 7, sad: 3, hype: 2, calm: 6, alone: 1, inLove: 5, outOfLove: 0 }
  },
  {
    id: "yeah-min-boss",
    title: "Yeah민Boss",
    artist: "Changbin & I.N (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "The oldest rapper and the youngest vocalist. Their chemistry is unexpected and completely wonderful.",
    gist: "A playful flex between an unlikely duo — Changbin's rap authority and I.N's sweetness colliding brilliantly.",
    tags: ["Changbin", "I.N", "duet", "fun", "playful"],
    stats: { happy: 9, sad: 0, hype: 7, calm: 2, alone: 0, inLove: 1, outOfLove: 0 }
  },
  {
    id: "nitpick-king",
    title: "잔소리대마왕 (Nitpick King)",
    artist: "Hyunjin & Seungmin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "When someone nags you endlessly — and somehow that becomes endearing. A funny, warm bicker-song.",
    gist: "잔소리 = nagging/nitpicking. The person who criticizes every little thing but does it because they care.",
    tags: ["Hyunjin", "Seungmin", "duet", "funny", "playful", "cute"],
    stats: { happy: 9, sad: 0, hype: 4, calm: 4, alone: 0, inLove: 4, outOfLove: 0 }
  },
  {
    id: "cant-stop",
    title: "Can't Stop",
    artist: "Seungmin & I.N (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2020,
    intro: "Two vocalists, one unstoppable feeling. Sweet and sincere.",
    gist: "Can't stop feeling this — whatever 'this' is. Love, longing, hope. Two pure voices refusing to hold it in.",
    tags: ["Seungmin", "I.N", "duet", "vocal", "sweet"],
    stats: { happy: 6, sad: 3, hype: 2, calm: 6, alone: 1, inLove: 7, outOfLove: 0 }
  },
  {
    id: "in-anajulgeyo",
    title: "안아줄게요 (I.N)",
    artist: "I.N (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "안아줄게요 = 'I'll hold you/hug you.' I.N making a promise that simple and that powerful.",
    gist: "I'll hold you. No conditions. Just the warmth of one human being offering to hold another.",
    tags: ["I.N", "solo", "warm", "comforting", "pure"],
    stats: { happy: 6, sad: 3, hype: 0, calm: 9, alone: 1, inLove: 7, outOfLove: 0 }
  },
  {
    id: "cause-i-like-you",
    title: "좋으니까 (Cause I Like You)",
    artist: "Stray Kids",
    album: "I Am YOU",
    year: 2018,
    intro: "The simplest reason in the world: because I like you. No argument to be made against it.",
    gist: "좋으니까 = because I like you/it. Love stripped of complexity — the purest admission of simple, honest affection.",
    tags: ["love", "simple", "sweet", "I Am YOU"],
    stats: { happy: 9, sad: 0, hype: 3, calm: 6, alone: 0, inLove: 9, outOfLove: 0 }
  },
  {
    id: "cause-i-like-you-cb-felix",
    title: "좋으니까 (Changbin & Felix)",
    artist: "Changbin & Felix (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "Changbin's grit plus Felix's warmth reimagining a sweet original. An unexpectedly great combination.",
    gist: "Two completely different vocal colors making something together that neither could alone.",
    tags: ["Changbin", "Felix", "duet", "sweet", "remix-energy"],
    stats: { happy: 8, sad: 0, hype: 4, calm: 5, alone: 0, inLove: 7, outOfLove: 0 }
  },
  {
    id: "biography",
    title: "위인전 (Biography)",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "위인전 = biography of great people. They're writing their own — and inviting you into the story.",
    gist: "Claiming their place in history not by being told they're great, but by writing the biography themselves.",
    tags: ["legacy", "bold", "confident", "5-STAR", "historical"],
    stats: { happy: 6, sad: 2, hype: 8, calm: 2, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "extremes",
    title: "극과 극 (Extreme)",
    artist: "Stray Kids",
    album: "I Am YOU",
    year: 2018,
    intro: "Polar opposites — and somehow, exactly right for each other. The chemistry of contrast.",
    gist: "극과 극 = polar extremes. Two opposite people, two opposite feelings — the tension between them is the whole story.",
    tags: ["opposites", "duality", "love", "tension", "I Am YOU"],
    stats: { happy: 5, sad: 4, hype: 5, calm: 3, alone: 2, inLove: 6, outOfLove: 2 }
  },
  {
    id: "rock",
    title: "ROCK (돌)",
    artist: "Stray Kids",
    album: "Clé 1: MIROH",
    year: 2019,
    intro: "Solid, immovable, essential. A rock-influenced track about standing firm under pressure.",
    gist: "돌 = rock/stone. Being as solid and unmovable as a rock regardless of what hits you.",
    tags: ["solid", "strong", "rock-influenced", "Clé 1"],
    stats: { happy: 4, sad: 2, hype: 8, calm: 3, alone: 3, inLove: 0, outOfLove: 0 }
  },
  {
    id: "collision",
    title: "Collision (충돌)",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "Two forces meeting at full speed. The crash is inevitable — and electric.",
    gist: "충돌 = collision. When two energies meet and neither yields — the sparks are the whole point.",
    tags: ["intense", "collision", "chemistry", "NOEASY"],
    stats: { happy: 3, sad: 3, hype: 9, calm: 0, alone: 2, inLove: 4, outOfLove: 2 }
  },
  {
    id: "jukeoboja",
    title: "죽어보자",
    artist: "Stray Kids",
    album: "Clé 2: Yellow Wood",
    year: 2019,
    intro: "죽어보자 is slang for 'let's go all out / give it everything.' Maximum effort, zero restraint.",
    gist: "An expression of total commitment — give everything, hold nothing back. The Korean spirit of going all the way.",
    tags: ["commitment", "all-in", "energy", "Clé 2"],
    stats: { happy: 5, sad: 2, hype: 9, calm: 0, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "haejang-guk",
    title: "해장국",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "해장국 is Korean hangover soup — the comfort food that fixes you. This song is that comfort.",
    gist: "You are my 해장국: the thing that heals me after the night I destroyed myself. A warm, specific kind of love.",
    tags: ["comfort", "love", "food-metaphor", "unique", "NOEASY"],
    stats: { happy: 7, sad: 2, hype: 3, calm: 7, alone: 1, inLove: 7, outOfLove: 0 }
  },
  {
    id: "battle-ground",
    title: "Battle Ground",
    artist: "Stray Kids",
    album: "THE SOUND (Japanese Album)",
    year: 2023,
    intro: "Every stage is a battlefield — and they come prepared. Intense and focused.",
    gist: "Making the stage their battlefield. Each performance is a fight they refuse to lose.",
    tags: ["battle", "stage", "intense", "I Am WHO"],
    stats: { happy: 4, sad: 2, hype: 9, calm: 0, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "fairytale",
    title: "Fairytale",
    artist: "Stray Kids",
    album: "I Am WHO",
    year: 2018,
    intro: "The story you tell yourself when the real one is too hard. Beautiful in its escapism.",
    gist: "Love as a fairytale — perfect, magical, slightly unreal. And the bittersweet awareness that fairytales end.",
    tags: ["dreamy", "love", "escapism", "I Am WHO"],
    stats: { happy: 6, sad: 4, hype: 2, calm: 6, alone: 2, inLove: 7, outOfLove: 2 }
  },
  {
    id: "lost-me",
    title: "Lost Me",
    artist: "Stray Kids",
    album: "THE SOUND (Japanese Album)",
    year: 2023,
    intro: "Somewhere between here and there, they lost themselves. The search is the song.",
    gist: "That specific disorientation of realizing you've lost track of who you are. Not dramatic — just quietly, completely lost.",
    tags: ["lost", "self", "NOEASY", "emotional"],
    stats: { happy: 1, sad: 8, hype: 2, calm: 3, alone: 8, inLove: 0, outOfLove: 2 }
  },
  {
    id: "novel",
    title: "Novel",
    artist: "Stray Kids",
    album: "THE SOUND (Japanese Album)",
    year: 2023,
    intro: "Life as a novel — chapters, plot twists, characters who leave. You're always the narrator.",
    gist: "The story of their life framed as a novel being written in real time. Each day is a new page.",
    tags: ["literary", "life-as-story", "emotional", "NOEASY"],
    stats: { happy: 5, sad: 5, hype: 2, calm: 6, alone: 4, inLove: 2, outOfLove: 1 }
  },
  {
    id: "your-eyes",
    title: "Your eyes",
    artist: "Stray Kids",
    album: "ODDINARY",
    year: 2022,
    intro: "Looking at eyes long enough to see something others miss. Quiet, focused, intimate.",
    gist: "Eyes as windows — what you see in someone's eyes that they haven't said aloud. Intimate and observant.",
    tags: ["intimate", "love", "quiet", "ODDINARY"],
    stats: { happy: 5, sad: 4, hype: 1, calm: 7, alone: 2, inLove: 8, outOfLove: 0 }
  },
  {
    id: "dlmlu",
    title: "DLMLU",
    artist: "Stray Kids",
    album: "THE SOUND (Japanese Album)",
    year: 2023,
    intro: "An acronym for something they'll only say in letters. Fragile and guarded.",
    gist: "DLMLU = Do Like Me Love U — the coded version of 'I love you' for those who can't say it directly yet.",
    tags: ["love", "coded", "shy", "MAXIDENT"],
    stats: { happy: 5, sad: 3, hype: 2, calm: 5, alone: 2, inLove: 8, outOfLove: 0 }
  },
  {
    id: "dlc",
    title: "DLC",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "Downloadable Content — the bonus version of themselves. More than the base game.",
    gist: "DLC as self-metaphor: there's always more to them than the surface version. The extra content is where the real story is.",
    tags: ["gaming-metaphor", "self-concept", "fun", "ODDINARY"],
    stats: { happy: 6, sad: 1, hype: 7, calm: 2, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "u-feat-tablo",
    title: "U (Feat. TABLO)",
    artist: "Stray Kids feat. TABLO",
    album: "HOP (SKZHOP HIPTAPE)",
    year: 2024,
    intro: "With Epik High's TABLO — two generations of storytellers in one track. Take your time with this one.",
    gist: "U — for you, for us, for the one who matters. TABLO adds weight and history. An unusually quiet and sincere SKZ track.",
    tags: ["TABLO", "collab", "sincere", "multi-generational", "emotional"],
    stats: { happy: 4, sad: 6, hype: 1, calm: 7, alone: 3, inLove: 6, outOfLove: 1 }
  },
  {
    id: "han-human",
    title: "사람이니까 (Human)",
    artist: "HAN (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2022,
    intro: "사람이니까 = because I'm human. HAN reminding himself — and you — that it's okay to be imperfect.",
    gist: "Being human as an excuse, a reason, and a comfort. HAN examining what it means to be fallible and alive.",
    tags: ["HAN", "solo", "human", "vulnerable", "sincere"],
    stats: { happy: 3, sad: 6, hype: 1, calm: 5, alone: 6, inLove: 0, outOfLove: 0 }
  },
  {
    id: "shukumei",
    title: "宿命 (Destiny)",
    artist: "Stray Kids",
    album: "Japanese Single",
    year: 2021,
    intro: "宿命 means destiny in Japanese. An inevitability stated with full conviction.",
    gist: "Fate, destiny, the predetermined path — 宿命 frames their journey as something written long before they chose it.",
    tags: ["Japanese", "fate", "destiny", "powerful"],
    stats: { happy: 5, sad: 4, hype: 7, calm: 3, alone: 2, inLove: 3, outOfLove: 0 }
  },
  {
    id: "never-ending-story",
    title: "끝나지 않을 이야기",
    artist: "Stray Kids",
    album: "GO生 (GO LIVE)",
    year: 2020,
    intro: "끝나지 않을 이야기 = a story that will never end. This is the promise they make to STAY.",
    gist: "The ongoing, permanent, never-finished story between Stray Kids and the people who love them.",
    tags: ["STAY", "promise", "eternal", "emotional", "sincere"],
    stats: { happy: 7, sad: 4, hype: 1, calm: 7, alone: 1, inLove: 7, outOfLove: 0 }
  },
  {
    id: "twilight",
    title: "또 다시 밤 (Twilight)",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "Night comes again, as it always does. This track arrives with the dark — and it belongs there.",
    gist: "또 다시 밤 = night again. The return of darkness — not as threat but as rhythm. Night is patient.",
    tags: ["night", "atmospheric", "cyclical", "NOEASY"],
    stats: { happy: 2, sad: 6, hype: 1, calm: 8, alone: 6, inLove: 1, outOfLove: 2 }
  },
  {
    id: "seungmin-love-again",
    title: "Love Again",
    artist: "Seungmin (Stray Kids)",
    album: "SKZ-RECORD",
    year: 2021,
    intro: "Falling again, after swearing you wouldn't. Seungmin making it sound inevitable.",
    gist: "Love Again — the second time, the surprise of it, the helplessness. You weren't supposed to fall and then you did.",
    tags: ["Seungmin", "solo", "love", "second-chances", "emotional"],
    stats: { happy: 5, sad: 5, hype: 1, calm: 6, alone: 2, inLove: 8, outOfLove: 2 }
  },
  {
    id: "twenty-four-to-twenty-five",
    title: "24 to 25",
    artist: "Stray Kids",
    album: "Christmas EveL",
    year: 2021,
    intro: "The year you stop being one thing and start being another. Marked not by what you did but by how you changed.",
    gist: "The transition between 24 and 25 — an age, a feeling, a year that changes everything in ways you can't name yet.",
    tags: ["age", "transition", "emotional", "MAXIDENT", "coming-of-age"],
    stats: { happy: 5, sad: 5, hype: 2, calm: 6, alone: 4, inLove: 2, outOfLove: 1 }
  },
  {
    id: "teuk",
    title: "특 (Special)",
    artist: "Stray Kids",
    album: "Mixtape: OH",
    year: 2022,
    intro: "특 = special. You are specifically, deliberately, undeniably special.",
    gist: "A direct declaration to someone that they are special — not generally, but specifically. 특 is precise.",
    tags: ["love", "sincere", "sweet", "Mixtape OH"],
    stats: { happy: 8, sad: 1, hype: 3, calm: 6, alone: 0, inLove: 9, outOfLove: 0 }
  },

  // ─── KARMA (4th Studio Album, 2025) ───────────────────────────────────────
  {
    id: "zero-eight-zero-one",
    title: "0801",
    artist: "Stray Kids",
    album: "KARMA",
    year: 2025,
    intro: "August 1st — a date written in sound. Numbers that carry weight only the ones who lived them fully understand.",
    gist: "A specific date encoded as a song: 08/01. The moment, the memory, the meaning — all sealed inside four digits.",
    tags: ["date", "meaningful", "KARMA", "sincere", "personal"],
    stats: { happy: 5, sad: 6, hype: 2, calm: 6, alone: 3, inLove: 4, outOfLove: 1 }
  },
  {
    id: "ceremony-festival",
    title: "CEREMONY (Festival Version)",
    artist: "Stray Kids",
    album: "KARMA",
    year: 2025,
    intro: "The festival version opens the celebration wider. Everyone is invited.",
    gist: "CEREMONY expanded into something communal and joyful — the whole crowd becomes part of the ritual.",
    tags: ["festival", "celebratory", "KARMA", "STAY", "title-track"],
    stats: { happy: 9, sad: 1, hype: 7, calm: 3, alone: 0, inLove: 5, outOfLove: 0 }
  },
  {
    id: "ceremony-english",
    title: "CEREMONY (English Version)",
    artist: "Stray Kids",
    album: "KARMA",
    year: 2025,
    intro: "The same ceremony, no language barrier. Every word lands exactly as intended.",
    gist: "CEREMONY in English — the meaning and emotion unchanged, now accessible to every corner of their global family.",
    tags: ["english", "KARMA", "title-track", "global", "STAY"],
    stats: { happy: 8, sad: 2, hype: 5, calm: 4, alone: 0, inLove: 6, outOfLove: 0 }
  },

  // ─── DO IT (SKZ IT TAPE Mixtape, 2025) ────────────────────────────────────
  {
    id: "do-it",
    title: "Do It",
    artist: "Stray Kids",
    album: "DO IT",
    year: 2025,
    intro: "Stop thinking, stop planning, stop hesitating. The title says everything: just do it.",
    gist: "Action over analysis. Do It is the rejection of overthinking — the moment you stop waiting for the right moment and move.",
    tags: ["action", "title-track", "motivational", "hype", "DO IT"],
    stats: { happy: 7, sad: 1, hype: 10, calm: 0, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "divine",
    title: "Divine (신선놀음)",
    artist: "Stray Kids",
    album: "DO IT",
    year: 2025,
    intro: "신선놀음 is a Korean idiom for living like an immortal — effortlessly, luxuriously, above it all. They've earned it.",
    gist: "신선놀음 = the leisurely play of immortals. Existing at a level so elevated that even effort looks effortless. Divinely unbothered.",
    tags: ["divine", "luxury", "title-track", "confident", "Korean-idiom", "DO IT"],
    stats: { happy: 8, sad: 0, hype: 8, calm: 4, alone: 0, inLove: 1, outOfLove: 0 }
  },
  {
    id: "holiday",
    title: "Holiday",
    artist: "Stray Kids",
    album: "DO IT",
    year: 2025,
    intro: "A well-earned exhale. After everything — the tours, the albums, the relentless motion — a holiday.",
    gist: "Permission to rest, to celebrate, to simply enjoy. Holiday is SKZ letting themselves be light for a moment.",
    tags: ["rest", "celebratory", "fun", "carefree", "DO IT"],
    stats: { happy: 9, sad: 1, hype: 6, calm: 6, alone: 0, inLove: 3, outOfLove: 0 }
  },
  {
    id: "photobook",
    title: "Photobook",
    artist: "Stray Kids",
    album: "DO IT",
    year: 2025,
    intro: "Every page a memory. A photobook is the most personal archive — and this song is its soundtrack.",
    gist: "Flipping through the pages of what they've shared — with each other, with STAY. A photobook of moments too good not to keep.",
    tags: ["nostalgic", "memories", "STAY", "sincere", "warm", "DO IT"],
    stats: { happy: 7, sad: 4, hype: 1, calm: 8, alone: 2, inLove: 6, outOfLove: 0 }
  },
  {
    id: "do-it-festival",
    title: "Do It (Festival Version)",
    artist: "Stray Kids",
    album: "DO IT",
    year: 2025,
    intro: "The festival version turns the command into a collective shout. The whole crowd doing it together.",
    gist: "Do It amplified — the energy of a live crowd folded into the track. When everyone does it together, something shifts.",
    tags: ["festival", "hype", "live-energy", "title-track", "DO IT"],
    stats: { happy: 8, sad: 0, hype: 10, calm: 0, alone: 0, inLove: 1, outOfLove: 0 }
  },

  // ─── GO LIVE missing ──────────────────────────────────────────────────────
  {
    id: "go-live-intro",
    title: "GO LIVE (Go生)",
    artist: "Stray Kids",
    album: "GO生 (GO LIVE)",
    year: 2020,
    intro: "The album opener that sets the entire mood. A statement of purpose before a single note of music.",
    gist: "GO LIVE — living fully, going all the way, choosing vitality over safety. The thesis of the whole album.",
    tags: ["intro", "statement", "GO LIVE", "bold"],
    stats: { happy: 7, sad: 1, hype: 7, calm: 2, alone: 1, inLove: 0, outOfLove: 0 }
  },

  // ─── NOEASY missing ───────────────────────────────────────────────────────
  {
    id: "the-view",
    title: "The View",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "Take a breath and look at what's around you. The view from here is worth the climb.",
    gist: "After all the struggle, the view from the top reveals something unexpected: it was the journey, not the destination.",
    tags: ["reflective", "perspective", "NOEASY", "emotional"],
    stats: { happy: 5, sad: 4, hype: 4, calm: 6, alone: 3, inLove: 0, outOfLove: 0 }
  },
  {
    id: "sorry-i-love-you",
    title: "Sorry, I Love You",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "An apology that is also a confession. Both feelings at once, neither canceling the other.",
    gist: "Sorry for loving you — for the complication it causes, the weight it adds. But not sorry enough to stop.",
    tags: ["love", "apology", "emotional", "sincere", "NOEASY"],
    stats: { happy: 3, sad: 7, hype: 2, calm: 5, alone: 3, inLove: 8, outOfLove: 2 }
  },
  {
    id: "secret-secret",
    title: "Secret Secret",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "Something kept between two people that changes everything. Secrets as intimacy.",
    gist: "A secret shared is a bond formed. Secret Secret is about the thing only you two know — and what it means to carry it together.",
    tags: ["intimate", "secret", "love", "quiet", "NOEASY"],
    stats: { happy: 5, sad: 4, hype: 2, calm: 6, alone: 2, inLove: 7, outOfLove: 1 }
  },
  {
    id: "surfin",
    title: "Surfin'",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "Riding the wave, not fighting it. One of the lightest moments in the album.",
    gist: "Life is a wave — surfin' means choosing to ride it rather than drown. Ease as strategy.",
    tags: ["fun", "carefree", "summer-coded", "NOEASY", "light"],
    stats: { happy: 9, sad: 0, hype: 6, calm: 5, alone: 0, inLove: 2, outOfLove: 0 }
  },
  {
    id: "gone-away",
    title: "Gone Away",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "Something left and didn't come back. The specific absence that reshapes everything around it.",
    gist: "Gone away — not just absent but no longer coming back. The permanence of departure and how you rebuild around it.",
    tags: ["loss", "absence", "emotional", "NOEASY"],
    stats: { happy: 1, sad: 9, hype: 1, calm: 4, alone: 7, inLove: 2, outOfLove: 5 }
  },
  {
    id: "mixtape-oh",
    title: "Mixtape: Oh",
    artist: "Stray Kids",
    album: "NOEASY",
    year: 2021,
    intro: "Oh — the sound of realization. The mixtape installment that lands with unexpected weight.",
    gist: "A moment of 'oh' — when something clicks, when the truth arrives. The exhale of understanding.",
    tags: ["realization", "mixtape-series", "NOEASY", "emotional"],
    stats: { happy: 4, sad: 6, hype: 3, calm: 5, alone: 4, inLove: 1, outOfLove: 2 }
  },

  // ─── 5-STAR missing ───────────────────────────────────────────────────────
  {
    id: "s-class",
    title: "S-Class",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "Above S-tier. A classification that doesn't exist because nothing was built to contain them.",
    gist: "S-Class: the rating above all ratings. They set the benchmark; everyone else just competes below it.",
    tags: ["confident", "flex", "S-tier", "hype", "5-STAR"],
    stats: { happy: 7, sad: 0, hype: 10, calm: 0, alone: 0, inLove: 1, outOfLove: 0 }
  },
  {
    id: "get-lit",
    title: "Get Lit",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "Turn the lights on. Turn everything up. Get lit — the instruction is the song.",
    gist: "Permission to ignite. Get Lit is the moment the night shifts from waiting to living.",
    tags: ["hype", "party", "energetic", "5-STAR"],
    stats: { happy: 9, sad: 0, hype: 9, calm: 0, alone: 0, inLove: 2, outOfLove: 0 }
  },
  {
    id: "the-sound-korean",
    title: "The Sound (Korean Ver.)",
    artist: "Stray Kids",
    album: "★★★★★ (5-STAR)",
    year: 2023,
    intro: "The Sound in Korean — the meta-anthem about their unmistakable sonic identity, now in their mother tongue.",
    gist: "This is the sound of Stray Kids: theirs alone, undeniable in any language. The Korean version lands with even more personal weight.",
    tags: ["identity", "meta", "anthem", "5-STAR", "Korean"],
    stats: { happy: 7, sad: 1, hype: 9, calm: 1, alone: 1, inLove: 0, outOfLove: 0 }
  },

  // ─── ROCK-STAR (2023) ─────────────────────────────────────────────────────
  {
    id: "megaverse",
    title: "MEGAVERSE",
    artist: "Stray Kids",
    album: "ROCK-STAR",
    year: 2023,
    intro: "Not a universe — a megaverse. The scope of ambition here is genuinely staggering.",
    gist: "Beyond the universe. MEGAVERSE positions SKZ at the center of something bigger than any single world — a realm they've built.",
    tags: ["epic", "grandiose", "title-adjacent", "ROCK-STAR"],
    stats: { happy: 7, sad: 1, hype: 10, calm: 1, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "lalalala",
    title: "LALALALA",
    artist: "Stray Kids",
    album: "ROCK-STAR",
    year: 2023,
    intro: "The title track of ROCK-STAR. Rock energy meets SKZ's signature chaos — and it's infectious.",
    gist: "LALALALA is a shout into the noise: syllables become a battle cry, repetition becomes a rallying point.",
    tags: ["title-track", "rock", "anthemic", "hype", "ROCK-STAR"],
    stats: { happy: 7, sad: 2, hype: 10, calm: 0, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "blind-spot",
    title: "BLIND SPOT",
    artist: "Stray Kids",
    album: "ROCK-STAR",
    year: 2023,
    intro: "What you can't see can still hurt you — or define you. The blind spot as metaphor.",
    gist: "The thing in your blind spot: what you miss about yourself, what others see that you can't.",
    tags: ["introspective", "self-awareness", "ROCK-STAR", "rock"],
    stats: { happy: 3, sad: 6, hype: 6, calm: 2, alone: 5, inLove: 1, outOfLove: 3 }
  },
  {
    id: "comflex",
    title: "COMFLEX",
    artist: "Stray Kids",
    album: "ROCK-STAR",
    year: 2023,
    intro: "Complex + comfort. The uneasy feeling of being at home in something complicated.",
    gist: "COMFLEX: comfort in complexity. Finding peace not in simplicity but in the full, messy, intricate version of yourself.",
    tags: ["wordplay", "self-acceptance", "ROCK-STAR", "rock", "complex"],
    stats: { happy: 5, sad: 4, hype: 5, calm: 4, alone: 4, inLove: 0, outOfLove: 1 }
  },
  {
    id: "cover-me",
    title: "Cover Me",
    artist: "Stray Kids",
    album: "ROCK-STAR",
    year: 2023,
    intro: "A request for shelter in the middle of the storm. Vulnerable and direct.",
    gist: "Cover me — protect me, keep me safe. A rare moment of asking for help, wrapped in rock guitars.",
    tags: ["vulnerable", "rock", "protection", "love", "ROCK-STAR"],
    stats: { happy: 4, sad: 6, hype: 4, calm: 4, alone: 5, inLove: 5, outOfLove: 1 }
  },
  {
    id: "leave",
    title: "Leave",
    artist: "Stray Kids",
    album: "ROCK-STAR",
    year: 2023,
    intro: "The word with the most weight in any relationship. Stay or leave — and the moment of choosing.",
    gist: "Leave — said or unsaid, the word that changes everything. A rock-leaning track about the decision neither party wants to make.",
    tags: ["breakup", "heavy", "rock", "decision", "ROCK-STAR"],
    stats: { happy: 1, sad: 9, hype: 4, calm: 2, alone: 7, inLove: 2, outOfLove: 7 }
  },
  {
    id: "social-path",
    title: "Social Path (feat. LiSA)",
    artist: "Stray Kids feat. LiSA",
    album: "ROCK-STAR",
    year: 2023,
    intro: "With anime legend LiSA — two forces that don't belong in the same room absolutely belonging in the same room.",
    gist: "A path carved socially, publicly, through every stage and screen. LiSA adds anime-era gravitas to SKZ's stadium rock.",
    tags: ["collab", "LiSA", "rock", "powerful", "ROCK-STAR"],
    stats: { happy: 6, sad: 3, hype: 9, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "lalalala-rock",
    title: "LALALALA (Rock Ver.)",
    artist: "Stray Kids",
    album: "ROCK-STAR",
    year: 2023,
    intro: "The rock version of LALALALA strips away the polish and lets the raw edge show.",
    gist: "LALALALA with the guitars turned up and the restraint turned off. The version that sounds like what it always wanted to be.",
    tags: ["rock", "alternate", "ROCK-STAR", "raw"],
    stats: { happy: 7, sad: 2, hype: 10, calm: 0, alone: 1, inLove: 0, outOfLove: 0 }
  },

  // ─── ATE missing ──────────────────────────────────────────────────────────
  {
    id: "jjam",
    title: "JJAM",
    artist: "Stray Kids",
    album: "ATE",
    year: 2024,
    intro: "짬 (JJAM) is Korean for experience, seniority, clout. This is that clout, made audible.",
    gist: "짬 = the earned credibility of time and experience. JJAM is SKZ claiming years of accumulated authority.",
    tags: ["confidence", "clout", "ATE", "Korean-slang"],
    stats: { happy: 6, sad: 1, hype: 9, calm: 1, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "i-like-it",
    title: "I Like It",
    artist: "Stray Kids",
    album: "ATE",
    year: 2024,
    intro: "The simplest songs are sometimes the most honest. I like it — full stop.",
    gist: "Direct admission: I like it. No analysis, no overthinking, no complicated feelings. Just pure positive preference.",
    tags: ["simple", "fun", "honest", "ATE", "carefree"],
    stats: { happy: 9, sad: 0, hype: 6, calm: 4, alone: 0, inLove: 4, outOfLove: 0 }
  },
  {
    id: "stray-kids-song",
    title: "Stray Kids",
    artist: "Stray Kids",
    album: "ATE",
    year: 2024,
    intro: "A song called Stray Kids by Stray Kids — the ultimate self-titled moment. This is them, distilled.",
    gist: "What does it mean to be Stray Kids? This song is the answer: everything, all at once, completely theirs.",
    tags: ["self-titled", "identity", "ATE", "manifesto", "sincere"],
    stats: { happy: 7, sad: 3, hype: 6, calm: 4, alone: 1, inLove: 3, outOfLove: 0 }
  },
  {
    id: "twilight-ate",
    title: "twilight",
    artist: "Stray Kids",
    album: "ATE",
    year: 2024,
    intro: "The borderland between day and night — neither, both, briefly perfect.",
    gist: "Twilight as the in-between: not darkness, not light. The transient state where everything is softened and nothing is decided.",
    tags: ["atmospheric", "ATE", "transition", "dreamy", "quiet"],
    stats: { happy: 4, sad: 5, hype: 2, calm: 7, alone: 4, inLove: 2, outOfLove: 1 }
  },

  // ─── Clé 2: Yellow Wood missing ───────────────────────────────────────────
  {
    id: "road-not-taken",
    title: "Road Not Taken",
    artist: "Stray Kids",
    album: "Clé 2: Yellow Wood",
    year: 2019,
    intro: "Named after the Frost poem. The road less traveled — and what it costs to take it.",
    gist: "Choosing the harder, lonelier path — and the weight of wondering about the one you didn't take.",
    tags: ["literary", "choice", "Clé 2", "introspective", "emotional"],
    stats: { happy: 3, sad: 6, hype: 3, calm: 5, alone: 6, inLove: 0, outOfLove: 1 }
  },

  // ─── IN生 (IN LIFE) missing ───────────────────────────────────────────────
  {
    id: "tortoise-hare",
    title: "The Tortoise and the Hare (토끼와 거북이)",
    artist: "Stray Kids",
    album: "IN生 (IN LIFE)",
    year: 2020,
    intro: "The fable remixed: what if the hare was right to run? SKZ examining hustle vs. patience.",
    gist: "토끼와 거북이 — the tortoise wins slowly, the hare loses fast. But what if speed itself is the point?",
    tags: ["fable", "metaphor", "reflective", "IN LIFE"],
    stats: { happy: 5, sad: 3, hype: 5, calm: 4, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "b-me",
    title: "B Me",
    artist: "Stray Kids",
    album: "IN生 (IN LIFE)",
    year: 2020,
    intro: "Be me — stop performing, stop editing, stop shrinking. Just be exactly what you are.",
    gist: "B Me is permission: to be unfiltered, imperfect, completely yourself. No audience version required.",
    tags: ["authenticity", "self-acceptance", "IN LIFE", "sincere"],
    stats: { happy: 7, sad: 2, hype: 4, calm: 6, alone: 2, inLove: 0, outOfLove: 0 }
  },
  {
    id: "any",
    title: "Any (아니)",
    artist: "Stray Kids",
    album: "IN生 (IN LIFE)",
    year: 2020,
    intro: "아니 = no. A soft refusal, an honest admission — not angry, just certain.",
    gist: "Sometimes the answer is simply no. 아니 — not this, not right now, not this way. Quiet clarity.",
    tags: ["refusal", "honest", "soft", "IN LIFE"],
    stats: { happy: 3, sad: 5, hype: 3, calm: 5, alone: 4, inLove: 1, outOfLove: 4 }
  },
  {
    id: "ex",
    title: "Ex (미친 놈)",
    artist: "Stray Kids",
    album: "IN生 (IN LIFE)",
    year: 2020,
    intro: "미친 놈 = crazy person. The ex-lover who made you feel like you were going mad.",
    gist: "An ex who turned you into someone unrecognizable. The specific insanity of loving the wrong person.",
    tags: ["breakup", "raw", "emotional", "IN LIFE"],
    stats: { happy: 1, sad: 7, hype: 5, calm: 1, alone: 5, inLove: 2, outOfLove: 8 }
  },
  {
    id: "we-go",
    title: "We Go (방찬, 창빈, 한)",
    artist: "Bang Chan, Changbin, HAN (Stray Kids)",
    album: "IN生 (IN LIFE)",
    year: 2020,
    intro: "3RACHA unit in full force. We go — together, forward, no hesitation.",
    gist: "The three rappers leading the charge: we go. The unit track that proves the trio is greater than its parts.",
    tags: ["3RACHA", "unit", "rap", "powerful", "IN LIFE"],
    stats: { happy: 6, sad: 1, hype: 10, calm: 0, alone: 1, inLove: 0, outOfLove: 0 }
  },
  {
    id: "wow",
    title: "Wow (리노, 현진, 필릭스)",
    artist: "Lee Know, Hyunjin, Felix (Stray Kids)",
    album: "IN生 (IN LIFE)",
    year: 2020,
    intro: "Three of the most visually and emotionally expressive members in one track. The result is stunning.",
    gist: "Wow — a reaction track. Three performers who know how to make people stop and stare, distilled into sound.",
    tags: ["unit", "charismatic", "visual", "IN LIFE"],
    stats: { happy: 7, sad: 1, hype: 7, calm: 3, alone: 0, inLove: 4, outOfLove: 0 }
  },
  {
    id: "my-universe",
    title: "My Universe (feat. Changbin)",
    artist: "Seungmin & I.N feat. Changbin (Stray Kids)",
    album: "IN생 (IN LIFE)",
    year: 2020,
    intro: "Three members across generations of SKZ's sound. A universe built from their connection.",
    gist: "You are my universe — the center of gravity. Seungmin and I.N's vocal warmth with Changbin's weight.",
    tags: ["unit", "love", "sincere", "vocal", "IN LIFE"],
    stats: { happy: 7, sad: 2, hype: 2, calm: 7, alone: 1, inLove: 8, outOfLove: 0 }
  },

  // ─── Mixtape pre-debut missing ────────────────────────────────────────────
  {
    id: "beware",
    title: "BEWARE",
    artist: "Stray Kids",
    album: "Mixtape (Pre-Debut)",
    year: 2018,
    intro: "Consider yourself warned. Even pre-debut, they came with an alert.",
    gist: "A caveat before you get too close: beware of what SKZ is capable of. The warning that turns out to be accurate.",
    tags: ["pre-debut", "warning", "dark", "bold"],
    stats: { happy: 2, sad: 3, hype: 8, calm: 0, alone: 2, inLove: 0, outOfLove: 2 }
  },

  // ─── I Am YOU missing ─────────────────────────────────────────────────────
  {
    id: "you-dot",
    title: "YOU.",
    artist: "Stray Kids",
    album: "I Am YOU",
    year: 2018,
    intro: "A single word, a period after it. You — complete, full stop, no more needed.",
    gist: "YOU. is the whole thing: the person, the feeling, the reason. The period means nothing more is required.",
    tags: ["love", "simple", "sincere", "I Am YOU"],
    stats: { happy: 6, sad: 3, hype: 2, calm: 6, alone: 2, inLove: 9, outOfLove: 0 }
  },
  {
    id: "heros-soup",
    title: "Hero's Soup (해장국)",
    artist: "Stray Kids",
    album: "I Am YOU",
    year: 2018,
    intro: "해장국 = Korean hangover cure soup. The comfort that fixes you after the night destroyed you.",
    gist: "You are my hero's soup — the thing that restores me when I'm at my worst. Deeply domestic, deeply sincere.",
    tags: ["comfort", "love", "food-metaphor", "I Am YOU", "sincere"],
    stats: { happy: 7, sad: 2, hype: 2, calm: 8, alone: 1, inLove: 7, outOfLove: 0 }
  },
  {
    id: "ns",
    title: "N/S",
    artist: "Stray Kids",
    album: "I Am YOU",
    year: 2018,
    intro: "North/South — opposite directions, equal certainty. Wherever they go, they go with intention.",
    gist: "N/S as compass: wherever you stand, you're always pointed somewhere. Direction as identity.",
    tags: ["direction", "metaphor", "I Am YOU", "early-era"],
    stats: { happy: 5, sad: 3, hype: 5, calm: 4, alone: 3, inLove: 1, outOfLove: 0 }
  },

  // ─── Clé 1: MIROH missing ─────────────────────────────────────────────────
  {
    id: "entrance",
    title: "Entrance",
    artist: "Stray Kids",
    album: "Clé 1: MIROH",
    year: 2019,
    intro: "The door is open. The maze begins. Entrance is the last breath before everything changes.",
    gist: "An intro that serves as a literal entrance into the world of Clé 1: MIROH. The threshold moment before the run.",
    tags: ["intro", "atmospheric", "Clé 1", "transition"],
    stats: { happy: 4, sad: 2, hype: 5, calm: 5, alone: 3, inLove: 0, outOfLove: 0 }
  },

  // ─── MAXIDENT missing ─────────────────────────────────────────────────────
  {
    id: "three-racha",
    title: "3RACHA",
    artist: "3RACHA (Bang Chan, Changbin, HAN)",
    album: "MAXIDENT",
    year: 2022,
    intro: "A track named for the unit itself. 3RACHA reminding everyone where the foundation was built.",
    gist: "3RACHA is the source: the pre-debut rap unit that became the core of Stray Kids. This song is their origin story retold.",
    tags: ["3RACHA", "unit", "rap", "origin", "MAXIDENT"],
    stats: { happy: 5, sad: 3, hype: 9, calm: 1, alone: 2, inLove: 0, outOfLove: 0 }
  },

  // ─── Mixtape: dominATE ────────────────────────────────────────────────────
  {
    id: "dominate",
    title: "dominATE",
    artist: "Stray Kids",
    album: "Mixtape: dominATE",
    year: 2025,
    intro: "Dominate + ATE. The appetizer before what comes next — and it sets the tone brutally well.",
    gist: "dominATE: to dominate completely. A mixtape that announces the next era before it arrives.",
    tags: ["hype", "declaration", "dominATE", "title-track", "2025"],
    stats: { happy: 6, sad: 1, hype: 10, calm: 0, alone: 1, inLove: 0, outOfLove: 0 }
  },

  // ─── Special / Digital Singles ────────────────────────────────────────────
  {
    id: "genie",
    title: "GENIE",
    artist: "HAN, Felix, I.N (Stray Kids)",
    album: "Genie, Make a Wish (OST)",
    year: 2025,
    intro: "Three members granting wishes in an OST. Warm, playful, magical — a perfect fit for the theme.",
    gist: "Wish granted. GENIE captures the magic of getting what you asked for — and the wonder of the one who made it happen.",
    tags: ["OST", "HAN", "Felix", "I.N", "magical", "unit"],
    stats: { happy: 8, sad: 1, hype: 4, calm: 5, alone: 0, inLove: 4, outOfLove: 0 }
  },
  {
    id: "resident-playbook-ost",
    title: "Resident Playbook OST",
    artist: "Lee Know, Seungmin, I.N (Stray Kids)",
    album: "Resident Playbook OST",
    year: 2025,
    intro: "Three members lending their voices to a drama. Sincere, grounded, and beautifully suited to the format.",
    gist: "A drama OST that showcases the quieter, more sincere side of Lee Know, Seungmin, and I.N — three members rarely grouped together.",
    tags: ["OST", "Lee Know", "Seungmin", "I.N", "drama", "sincere"],
    stats: { happy: 5, sad: 5, hype: 1, calm: 7, alone: 3, inLove: 5, outOfLove: 1 }
  },
  {
    id: "endless-sun",
    title: "Endless Sun",
    artist: "Stray Kids",
    album: "Digital Single",
    year: 2026,
    intro: "The sun that never sets. A 2026 release and a new chapter beginning to unfold.",
    gist: "Endless Sun — light that doesn't end, warmth that persists. A new era announced through radiance.",
    tags: ["2026", "new-era", "hopeful", "bright", "single"],
    stats: { happy: 8, sad: 2, hype: 5, calm: 6, alone: 1, inLove: 3, outOfLove: 0 }
  },
  {
    id: "byeol-bit-stay",
    title: "별, 빛 (STAY)",
    artist: "Stray Kids",
    album: "Digital Single",
    year: 2026,
    intro: "별 = star, 빛 = light. Released on March 25, 2026 — their debut anniversary. A song for STAY.",
    gist: "Stars and light — for STAY, who are both. Released on the day that made everything possible: their anniversary.",
    tags: ["STAY", "anniversary", "sincere", "2026", "fan-song"],
    stats: { happy: 8, sad: 4, hype: 1, calm: 8, alone: 0, inLove: 9, outOfLove: 0 }
  },
];

export const EMOTION_COLORS: Record<string, string> = {
  happy: '#fbbf24',
  sad: '#60a5fa',
  hype: '#f87171',
  calm: '#34d399',
  alone: '#a78bfa',
  inLove: '#f472b6',
  outOfLove: '#94a3b8',
};

export const EMOTION_LABELS: Record<string, string> = {
  happy: 'Happy',
  sad: 'Sad',
  hype: 'Hype',
  calm: 'Calm',
  alone: 'Alone',
  inLove: 'In Love',
  outOfLove: 'Out of Love',
};
