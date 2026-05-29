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
    gist: "They recorded this in an elevator in JYP's building while knowing some of them would be eliminated. The elevator going down is them choosing to leave rather than stay trapped. This wasn't metaphor — it was their exact situation.",
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
    gist: "미로 is Korean for maze — but they reversed the word into MIROH and reversed the meaning too. The maze isn't the obstacle, it's the playground. This was written after years of being told their music was wrong, and every line sounds like eight people who've stopped caring what the exit looks like.",
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
    gist: "Bang Chan, Changbin, and Han wrote this in their own studio using sounds their label called unmarketable. The cooking metaphor is a thesis: their recipe was invented by them, cannot be copied, and you will eat it. The confidence isn't performance — they literally built the kitchen.",
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
    gist: "The back door bypasses the industry, the label, the gatekeeper — it's a direct line from SKZ to you. Every lyric is a flex that doesn't feel like one because it's too specific: they're not bragging about being big, they're inviting you past the velvet rope that everyone else is still waiting behind.",
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
    gist: "소리꾼 is the traditional Korean storyteller-singer who commands a crowd with nothing but voice. SKZ made this comparison when K-pop was becoming increasingly polished and synthetic — they wore hanbok in the MV, sampled real pansori, and meant every word of the claim.",
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
    gist: "Changbin once described this as the feeling of knowing you're about to cry in public and deciding to just let everything fall. Once the first domino tips, you stop fighting the chain. The whole emotional arc is the relief of giving up control — and discovering freedom in the wreckage.",
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
    gist: "They put their most 'unmarketable' sounds into an album called ODDINARY and made it their biggest commercial era. MANIAC reclaims the word — this isn't them being called crazy, this is them writing the definition of it and signing their names underneath.",
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
    gist: "143 = I Love You counted by letters. The diagnosis framing (case number, symptoms, clinical record) is SKZ doing something they almost never do — being pure, uncomplicated sweethearts about it. The wordplay makes the emotion bearable. The emotion makes the wordplay land.",
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
    gist: "Written in their stadium era after selling out arenas worldwide. There's no asking in this song — no 'we hope to' or 'one day.' Just a quiet announcement in the present tense: we're already there. The hall of fame isn't a destination. They live there.",
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
    gist: "Tiger JK pioneered Korean hip-hop before most of SKZ were born. Having him on this track isn't a feature — it's a handshake across generations. The moment his verse kicks in, you understand exactly why they asked him and why he said yes.",
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
    gist: "A levanter is a warm Mediterranean wind that shifts direction unpredictably. Written during a period when SKZ had no clear direction — no confirmed next album, no certain future. The warmth isn't wishful thinking; it's the specific comfort of being carried by something you didn't choose and finding it's enough.",
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
    gist: "Bang Chan wrote this after noticing that multiple members had the exact same expression during difficult stretches — the specific look of someone trying not to show it. You are me. I am you. The recognition of yourself in someone else's silence is the whole song.",
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
    gist: "Double-knotting is the last thing you do before a race — the final preparation before everything becomes real. This dropped right before their Clé: LEVANTER comeback and it sounds exactly like that: laces tied, no more time to hesitate, only forward.",
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
    gist: "The production is deliberately broken — the beat cuts in and out, the vocals distort at specific moments — because 3RACHA designed it to feel like a panic attack from the inside. It's uncomfortable on purpose. The instability isn't a production choice; it's the subject matter becoming the structure.",
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
    gist: "One of the only SKZ songs where the message is literally: slow down. In a catalog that almost never rests, this is them telling themselves as much as the listener. The softness of the production isn't incidental — it's the instruction.",
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
    gist: "In the film District 9, aliens are penned in a ghetto and told to be grateful they're allowed to exist. SKZ borrowed that number for their debut — they were the trainees in JYP's system, locked in a district no one was supposed to break out of. They broke out anyway.",
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
    gist: "HAN wrote this about the specific voices that came at him in the dead of the night — not abstract anxiety, but the named inner critic telling him his rap wasn't good enough, his Korean wasn't pure enough, that he was the weakest link. The voices have addresses. That's what makes this one hurt.",
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
    gist: "The third eye in many traditions sees what physical eyes can't — other people's hidden suffering, the truth underneath the performance. This is the member who notices too much, who can't stop reading rooms. The gift and the burden are the same thing.",
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
    gist: "Bang Chan reportedly wrote this after a prolonged stretch of creative frustration — feeling like he was boxing alone against an industry that wanted simpler music from them. The boxer in the ring isn't fighting a person. He's fighting every A&R meeting that said: tone it down.",
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
    gist: "3RACHA coined 'chronosaurus' for the specific monster that eats time — the gap between who you are at 20 and who you were supposed to be by now. The dinosaur isn't the enemy. The clock on its back is. And it's always right behind you.",
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
    gist: "The self-awareness is the joke — they're making a song about being cool by being completely uncool about it. Sunny, slightly dorky production that sounds like a reference to early 2000s K-pop. The irony makes it work. The earnestness underneath the irony makes it charming.",
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
    gist: "Bang Chan wrote this thinking about fans going through things he could never know about. The promise he could actually keep: be a safe sound in someone's headphones when everything else is loud and wrong. Haven isn't a love song — it's a shelter song.",
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
    gist: "Bang Chan sings 'easy' in a register that makes clear he doesn't believe the word for a second. This is the SKZ song about performing okayness while the thing underneath stays broken — and the specific exhaustion of making it look effortless.",
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
    gist: "A pacemaker exists because the heart can't maintain its own rhythm without external help. This is about being that device for someone — or needing one yourself. Setting your own cadence in an industry that sets it for you.",
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
    gist: "청사진 = blueprint. Written during the period when SKZ were beginning to fully design their own creative direction. The whole album had already been drawn in their heads. This song is them showing you the schematics — the future exists on paper before the world can see it.",
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
    gist: "Felix contributed to this song about the specific terror of loving someone so much that losing them becomes a phobia — a diagnosable condition with a name. Your presence is what I'm afraid of not having. The clinical framing makes the emotion hit harder than a straightforward love song ever could.",
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
    gist: "HAN's most directly autobiographical song. He wrote this about specific periods where he couldn't produce anything — not writer's block but a full emotional shutdown. The production sounds like someone slumping because it was made by someone who was. This song exists because he wrote it during the thing the song is about.",
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
    gist: "Written for Tower of God — a webtoon about a tower you can only climb if you're willing to lose everything along the way. SKZ took that premise and wrote their whole career into it. This is one of the rare cases where writing for someone else's story made their own story clearer.",
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
    gist: "The most relaxed SKZ has ever been on record. Bang Chan once described CHILL as sounding like lying on your back in a field — and listening to it feels exactly like that. After years of intense concepts, this is what it sounds like when they let themselves just exist.",
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
    gist: "They're not just saying 'I love you' — they're halftime-showing it. The Super Bowl framing means: I'm putting on the biggest spectacle I have, for an audience of one, and I'll do it every time. Love as maximum production value.",
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
    gist: "Changbin wrote the hook about his own stage presence — specifically about how his performance energy can read as threatening or toxic. The self-awareness is the twist: this isn't a villain origin, it's a person who knows exactly what effect they have and is examining it honestly.",
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
    gist: "Written pre-debut when members were first living in dorms away from home. The insomnia is specific: the 2–5am window when training is over but the mind replays every critique, every doubtful moment, in an empty room far from family. The quiet of this track is not peace — it's the silence of being alone with that.",
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
    gist: "SKZ frequently talks about their training period as something that broke them open and rebuilt them simultaneously. Scars is the specific accounting — not the wounds, but the marks they left behind. The argument of the song is: I'm showing you these because they prove I survived the thing that made them.",
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
    gist: "Every member has talked about performing okayness during hard stretches — the active work of not showing it so others won't worry. Silent Cry is about that labor. Not just crying silently but the energy it takes to maintain the silence. From the inside, the silence is the loudest sound in the room.",
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
    gist: "If love works the same way as placebo — if the belief that it heals is what makes it heal — does the mechanism matter? Bang Chan examines the question and lands somewhere surprising: maybe it doesn't matter if it's real, as long as the person in front of you is getting better because of it.",
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
    gist: "Members have described moments on tour — looking out at a crowd and feeling, with physical certainty, that they were looking at family. People who showed up even when the industry told them to look elsewhere. FAM is what it sounds like when you try to put that recognition into words and realize words are almost enough.",
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
    gist: "Written during a period of genuine uncertainty about the group's future. Going all in with no safety net is different when the stakes are real — when this might be it, or it might be everything. The intensity in this Japanese track is the memory of actual risk, not a concept.",
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
    gist: "Working with Alesso pushed Bang Chan to produce in a completely different mode — club-ready, bass-forward, designed for movement rather than meaning. Going dumb isn't stupidity; it's the specific bliss-state when your critical brain shuts off and your body takes over completely.",
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
    gist: "DJ Snake's production carves negative space that SKZ fills differently than any of their regular tracks. The darkness here isn't threatening — it's the specific freedom of a club at 1am when no one knows your name and the whole crowd moves as one indistinguishable thing.",
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
    gist: "They're the circus and the audience simultaneously — the act and the spectators watching themselves perform impossible things. The ringmaster who is also the trick. This is SKZ examining their own public life and deciding: yes, it's absurd. Yes, we'll keep going. The show must go on because we are the show.",
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
    gist: "The production on FREEZE literally stops at moments — the beat drops out, the world goes silent — because being frozen by someone's presence is a physiological fact, not a metaphor. SKZ recreated the experience rather than described it. Listen with headphones and you'll feel it happen.",
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
    gist: "Lee Know is widely cited as the member who embodies this most — someone so naturally charismatic that trying isn't part of the equation. Charmer is the self-aware examination of that specific power: knowing you have an effect on people without choosing to, and deciding what to do with that knowledge.",
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
    gist: "The Changbin/Hyunjin/Han/Felix subunit at their least filtered. Muddy water is the opposite of clarity — but sometimes you need to wade through the unclear to find anything real. These four together are at their most unguarded, and the rawness shows.",
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
    gist: "HAN grew up between Australia and Korea, came to JYP alone as a teenager, and spent years being told his style didn't fit. I GOT IT is the receipt he saved from all of that — the capability he had while the industry was still trying to figure out what to do with him.",
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
    gist: "HAN in his most introspective register — not rapping over a beat, just existing next to a feeling he can't quite name. 'Close' describes the perpetual almost of it: almost healed, almost okay, almost arrived. The distance that never fully closes.",
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
    gist: "Bang Chan wrote this when the group was still relatively unknown, performing in small venues and wondering who was actually on the other end of the music. Connected is the answer he gave himself: regardless of where you are or how many of you there are — we are connected. He needed to say it.",
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
    gist: "THE SOUND is a meta-statement: this is what we sound like, this specific thing, and it belongs only to us. After years of being told their production was too rough, making a song called THE SOUND and delivering it with zero apology is the most SKZ thing they've ever done.",
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
    gist: "Changbin's ULTRA is his entire discography distilled: not just maximum, not just beyond — ultra. The word he chose because every other superlative had already run out. His voice alone could fill a stadium and this track exists to prove it.",
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
    gist: "Felix's solo confronts the specific unfairness of an industry that measured him against a standard he never agreed to. Unfair isn't angry — it's the calm observation of someone who's accepted the rules of a rigged game and decided to win anyway.",
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
    gist: "Resilience as a literal physical property — the object that returns to shape after impact. The difference between this and generic empowerment is specificity: they name things that knocked them down and then demonstrate, measure by measure, that they came back harder each time.",
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
    gist: "Lee Know's take on youth is different because he trained under another company and nearly quit before SKZ happened. His 'youth' has a specific texture: the years spent almost giving up, the version of himself that almost never made it here. Cherish it differently when you almost lost it.",
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
    gist: "The miracle isn't that they walk on water — it's that they do it often enough that it's stopped being miraculous to them. The impossibility has become routine. This song is about that specific shift: when what should be extraordinary has simply become how you move through the world.",
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
    gist: "A parade by definition includes everyone watching — the march is designed to pull people in until the crowd becomes part of the procession. SKZ have never been content to perform for the few. The parade doesn't end; it just keeps growing.",
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
    gist: "KARMA as an album is a reckoning — actions weighed against their consequences. The phoenix appears here because this era is built on what was incinerated before it. Rise isn't the happy ending; it's the middle of an ongoing loop. Burn completely. Come back completely different. Repeat indefinitely.",
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
    gist: "The spiral of thoughts about someone that won't stop — rewinding interactions, projecting futures, having arguments with people who aren't in the room. Being trapped in a head that won't stop producing content about one subject. The production mirrors it: it keeps cycling, never landing.",
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
    gist: "Hyunjin states 'so good' the way someone observes weather. It's not a boast — it's an observation with no particular attachment to it. He's not trying to convince you. The effortlessness is the evidence, and the evidence is the whole point.",
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
    gist: "KARMA means the weighing of actions against their consequences. The CEREMONY is the formal marking of what SKZ built — eight years, a world tour, a fandom that became family. Not a celebration of success. A ritual acknowledgment that what was done mattered, and it was done on purpose.",
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
    gist: "HAN once said this came from wanting to comfort someone but not knowing how — realizing that the most sophisticated gesture available was the most primitive one. Just hold my hand. No explanation, no fix, no fix needed. The simplicity is not laziness; it's precision.",
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
    gist: "I.N, the youngest member, writing about love that distorts reality is unexpectedly sophisticated. The production blurs the lines between waking and dreaming deliberately. You're inside the hallucination while you listen — which means you can't tell from inside whether it's real either.",
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
    gist: "GIANT was written after they sold out stadiums they couldn't have imagined playing during training. The quiet confidence here is different from their usual energy: not 'look how far we've come' but 'we were always this size — the world just needed time to catch up to us.'",
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
    gist: "Christmas Eve + Evil/Level = Christmas EveL. Only SKZ could take a holiday concept and make it sound like a heist. The festivity is real; the chaos is realer. It's the most fun they've had with a concept and it absolutely works because they're genuinely enjoying every second.",
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
    gist: "Lee Know, Hyunjin, and Felix — three of SKZ's most performance-focused members — making something that tastes like their combined aesthetic. Refined, specific, considered. Having taste is a different kind of confidence from having power. This is the quiet flex.",
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
    gist: "삐처리 = bleeped-out. All the specific things they cannot say out loud — at their label, to their critics, about their situation — expressed precisely through their absence. The beep is louder than the word it replaced.",
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
    gist: "Bang Chan described writing this after a tour stop where he looked out at the crowd and felt the weight of everyone there who had come through something. Never Alone is the most unconditional promise in their catalog: whatever the thing is, you don't have to do it without us.",
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
    gist: "A creed is what you fall back on when everything external becomes uncertain. KARMA's CREED is SKZ distilling eight years of choices, principles, and hard-made decisions into something short enough to carry and hold up under pressure. This is what they stand for. It fits in a single song.",
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
    gist: "The ghost is both the person who left and the version of you that existed when they were present. Both haunt equally. The production creates the specific presence-in-absence of something gone: sound filling the room while proving the room is empty.",
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
    gist: "The smallest things accumulate differently than the large ones. Just a little — a look, a gesture, a moment of attention left over after everything else was taken. SKZ at their quietest is often their most devastating, and this is the quietest they've been.",
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
    gist: "Seungmin's radical acceptance solo: not 'as we will be' or 'as we should be' — as we are, right now, incomplete and imperfect and exactly enough. In a group that is relentlessly self-improving, this is the most countercultural thing on the HOP tape.",
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
    gist: "This is the group that doesn't stop — not because they can't, but because the running itself has become the point. Forward momentum as identity, not strategy. Runners don't run toward things; they run because standing still doesn't fit anymore.",
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
    gist: "The mountains are not obstacles in this framing — they're proof that there's somewhere higher. Every mountain they've climbed has revealed another one behind it. In the SKZ universe, that's not discouraging. That's the entire reason to keep moving.",
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
    gist: "Load, aim, detonate. The gap between the first note and the impact is measured in milliseconds. Chk Chk Boom is designed to replicate live concert energy in recorded form — that specific feeling of the bass hitting your chest before you've processed that the song started.",
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
    gist: "The refusal to let the night end when every signal says it should. The party is a metaphor for a specific kind of alive-ness — the feeling of being so fully present that stopping feels like death. They're not unaware the party should end. They're choosing to ignore it.",
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
    gist: "Mixtape: dominATE is where they burn the previous version of the Mixtape series and build forward. Burning tires means moving so fast you're leaving marks on the ground behind you — the evidence of velocity. The destination doesn't matter. The velocity does.",
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
    gist: "In Dragon Ball Z, Saiyans grow stronger from near-defeat — the closer they come to breaking, the higher their power level rises after. SKZ used this mythology because they know that pattern from the inside. The adversity isn't something that happened to them. It's the mechanism.",
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
    gist: "Arcane is about two sisters separated by class, power, and violence — one who got out and one who was left behind. SKZ wrote a song for that fracture. Come Play sounds like one of them calling to the other across the line: dark invitation, full of love that has learned to look like danger.",
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
    gist: "d4vd and Hyunjin is one of the least expected collaborations in either discography, and it works because both operate in the same register of unadorned sincerity. 'Always' means without condition, without exception, without end date. They both mean it. That shared earnestness is everything.",
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
    gist: "Seungmin has the most traditionally beautiful voice in the group — pure, clear, unaffected. This solo uses it at its most essential: wanting only to be near someone. Not touching, not speaking — just the specific comfort of shared physical space.",
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
    gist: "Close to You was wanting to be there. Here Always is already being there — past tense of presence, now continuous. I'm not on my way. I'm here. The difference between those two sentences is what this song is about.",
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
    gist: "VOLCANO tracks HAN's own emotional pressure management — years of internalized anxiety that builds without release until there's only one direction it can go. The production mirrors it: slow accumulation, then a moment where everything gives way at once. Cathartic because it was built to be.",
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
    gist: "Hyunjin has described himself as someone who thinks too much, feels too much, and contains too many opposing impulses. Contradicting is him finally deciding that the multiple, conflicting versions of himself aren't a problem to solve — they're the complete answer. He stopped trying to resolve the tension.",
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
    gist: "Hyunjin wrote this in a rare window of pure lightness — a moment where the weight lifted. Ice cream: sweet, specific, already starting to melt while you're holding it. This is his permission slip to enjoy something beautiful while knowing it won't last, and to not ruin the experience by mourning it early.",
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
    gist: "Felix was one of the youngest when they debuted — thrown into deep water before he'd learned how to swim in it. This solo is the memory of that choice: seeing the depth, not knowing what's down there, and jumping anyway. Not because he was ready. Because the alternative was staying out of the water forever.",
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
    gist: "The most delicate thing in the SKZ catalog, written by their most artistic member. A tiny star is not impressive — it's small, it's easy to miss, it barely registers against the darkness. This song is entirely about the things that matter exactly because of their smallness.",
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
    gist: "Bang Chan in his most disarmed state — not wanting to admit something, and the song is the admission. Not the hurt itself, but the resistance to acknowledging it. The title 인정하기 싫어 = 'I don't want to admit it.' He wrote the song anyway. That's the whole conflict.",
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
    gist: "Lee Know chose DAY6's Love Me or Leave Me because the binary resonates with his own nature — he doesn't do halfway. His cover is a choice: all in or all out, no middle ground, no slow fade. The delivery is calm because the decision was already made.",
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
    gist: "Seungmin chose Zombie during a period when the pandemic had stopped all live performances — every member going through the motions of being an artist with no audience, no stage, no confirmation that any of it was real. His sincerity makes the metaphor land as fact.",
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
    gist: "HAN stripped of production armor — just the confession in its most basic form. I wish you were back. No analysis, no craft, no distance. In a discography of densely layered production, this nakedness is the most unsettling thing he's made.",
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
    gist: "HAN treating 'happy' as a foreign object — holding it up, turning it over, not sure if it applies to him. The title's unusual capitalization (HaPpY) is the visual version of the uncertainty: the word doesn't fit right, doesn't sit still. Is this what it is? He's genuinely not sure.",
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
    gist: "3RACHA is the production engine that runs underneath SKZ. Changbin's Cypher is what he sounds like with no group consideration, no audience calibration — just the rapper with the lowest voice in K-pop proving why that voice alone could fill rooms. This is the unfiltered source material.",
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
    gist: "Bang Chan examining his life through the railway metaphor — not fighting the track, not pretending the stops were chosen, just observing that this is how journeys work. One direction. Predetermined stops. And the exact scenery you see between them is yours alone.",
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
    gist: "Two members whose vocal textures are completely different creating the perfect bittersweet thing: congratulations to someone who moved on. HAN's roughness and Seungmin's clarity make the ambivalence exact — the happiness for them and the hurt for yourself existing in the same breath.",
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
    gist: "I.N covering Jonghyun's Consolation is one of the most quietly significant things any SKZ member has done. Jonghyun wrote about sitting beside someone in their pain without trying to fix it. I.N, the youngest member, chose this song specifically. The choice tells you everything about who he is.",
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
    gist: "HAN asking someone to stop before the damage becomes permanent — specifically, to not say the words that, once said, can't be unsaid. This isn't anger; it's the desperate arithmetic of realizing you're seconds from a version of things you can't walk back from.",
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
    gist: "Scent is the memory sense — involuntary, visceral, impossible to control. After someone goes, their face fades first, then their voice, and the scent is what stays longest. I.N covering this with his pristine voice makes the fragility of the metaphor into something you feel physically.",
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
    gist: "The law of conservation of energy used as a rap thesis: if energy can neither be created nor destroyed, only transformed — then every attempt to eliminate them just converts their potential into something new. The physics lesson is the rebuttal to everyone who said no.",
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
    gist: "Debut-era SKZ examining the gap between the person in the mirror and the person the training system was trying to produce. The confrontation is quiet but the stakes were real: if you don't know who you are, the industry will tell you, and you might believe them.",
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
    gist: "Coming awake — not gradually but suddenly. The I Am WHO era is about claiming your identity rather than waiting to be assigned one, and Awaken is the moment the claiming happens. The loudness is because silence was what came before.",
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
    gist: "Missing in action — from yourself specifically. Not lost in a dramatic way but in the quiet way where you go through every daily motion perfectly and realize at some point that you checked out without noticing. The panic isn't loud. That's what makes it worse.",
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
    gist: "잘 하고 있어 = you're doing well. The rarest words in the training system — SKZ probably didn't hear them often enough. This song is the reassurance they didn't receive, given back to STAY and to each other. You are in the middle of it and you are doing well. That's the whole message.",
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
    gist: "어린 날개 = young wings. Pre-debut, before they knew how far they'd go, when the dreams were larger than the evidence. The gap between who they were and who they'd become is what this song lives inside — and the bet they were making on themselves before anyone else did.",
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
    gist: "Pre-debut SKZ, inside a school system that ranked them and sorted them and told them their value. Captured from the classroom they couldn't wait to leave — and the knowledge that they were right to want something more real than this.",
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
    gist: "Some people glow despite circumstances, not because of them. Debut-era SKZ writing this as an act of willful brightness — choosing to radiate when the training system was designed to make you doubt. The light here is defiant.",
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
    gist: "그림자도 빛이 있어야 존재 = a shadow can only exist where there is light. Early wisdom about duality from a group that was just beginning to understand the size of what they were chasing: the bigger the light, the longer the shadow it casts. You can't have one without the other.",
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
    gist: "The recognition that happens before you know why — someone new who feels like they've existed in your story all along. This is I Am YOU's answer to loneliness: sometimes the stranger you meet was never really a stranger, just someone whose arrival was running late.",
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
    gist: "One word and an exclamation point. NOT is a complete sentence — they don't need to explain what they're refusing or why. The simplicity of the refusal is the point: you don't owe a detailed explanation to every force that asks you to be smaller.",
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
    gist: "In a catalog that almost never stops moving, STOP is the song that asks everything to cease — including the part of you that keeps pushing when you should rest. The command is directed inward. Making yourself still when your nature is perpetual motion is the hardest thing.",
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
    gist: "You Can STAY doubles as a message to their fandom (STAY) and a plain human invitation. The door is open. No requirement, no performance required. The title answers the question the listener was too afraid to ask.",
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
    gist: "Floating in the vastness where down doesn't have a direction. The astronaut sees more than anyone on the ground but can't be touched by any of them. Beautiful and specifically lonely — not the loneliness of rejection but the loneliness of perspective too large for the available company.",
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
    gist: "Sunshine is what SKZ sounds like when they put down every heavy thing for a moment and just exist in warmth. No concept, no complexity — someone is their sunshine, and they want you to know it with zero irony. This is the version of them that the training system tried to eliminate.",
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
    gist: "Mozart composed his first symphony at 8. SKZ invoked his name not because they're classical composers but because of the audacity of that level of talent — the idea of something so specifically, undeniably gifted that the world has no choice but to accommodate it. That's the comparison they're making. They're not wrong.",
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
    gist: "씩 in Korean is the sound of a subtle smirk — the corner-of-the-mouth kind. 'Sick' in English means incredible. Ssick contains both meanings simultaneously. The brag is delivered with that specific smirk of someone who doesn't need to raise their voice because they already know how the conversation ends.",
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
    gist: "The one where SKZ goes full K-pop cute, and it works because they commit completely. In Korean, 'cheesy' describes someone who's excessively sweet and melodramatic — you are so over-the-top about everything, and somehow that's exactly what makes you impossible to resist.",
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
    gist: "Every red light says stop. They see it clearly — the signal, the meaning, the consequence — and drive through anyway. This isn't recklessness; it's the specific way love disables the warning system. You knew. You still went. The song doesn't judge; it just observes.",
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
    gist: "Everyone has a Lonely Street — the internal address where you go when the loneliness gets specific. ODDINARY owns the word 'odd' and this is SKZ being oddly honest: the street exists, they walk it sometimes, and naming it makes it slightly less lonely to be there.",
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
    gist: "TMI — Too Much Information — means every embarrassing detail, every random midnight thought, every thing you'd filter out for anyone else. This is SKZ asking for the unfiltered version of you. The intimacy of wanting someone's overflow, not their highlight reel.",
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
    gist: "March 25, 2018. The day matters because they know how close they came to not having it — their near-elimination from JYP was reversed. 0325 is not just a birthday; it's the number of the day that could have been the last. The song is gratitude and disbelief in equal measure.",
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
    gist: "Hoodie season: the specific comfort of autumn, warmth, staying in, and the person who makes stillness feel like enough. If any SKZ song smells like cold air and coffee, it's this one. Love described entirely through sensory texture rather than declaration.",
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
    gist: "잠깐의 고요 = a moment of quiet. The maze here is not MIROH's playground — it's built from memories you keep returning to without meaning to. The wandering is involuntary. You don't enter the maze; you find yourself already inside it.",
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
    gist: "FNF is what's left when you strip away every layer of concept and meaning and just run. One of their most purely kinetic tracks — no message, no metaphor, just the feeling of going full speed with people you trust. Sometimes that's the entire point.",
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
    gist: "They invented a word. In a discography full of creative language, making up 'youtiful' specifically for STAY — not beautiful, not any existing word, but a new one that applies only to them — might be the most personal thing in their catalog. You are youtiful. That word belongs to you.",
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
    gist: "Too much — too much feeling, too much information, too much of the person you're consumed by. TMT is overwhelm as a feature rather than a flaw. The production deliberately drowns you in the same way the emotion does. You're not supposed to surface cleanly.",
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
    gist: "The hashtag was already trending before they made the song. Turning a fandom rallying cry into an actual track could have been cringe — but the delivery is so unguarded that it lands exactly right. #LoveSTAY is not a marketing decision. It's Bang Chan being honest.",
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
    gist: "Hollow is not depression — it's the specific absence of feeling while everything on the outside appears intact. Performing wholeness while something inside just echoes. The atmospheric production is designed to replicate that resonance: a sound that fills the room while proving nothing is home.",
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
    gist: "The Mixtape series is where SKZ is most honest about their actual state. Time Out is the rare admission: we need to stop. Not forever, not as giving up — just right now, this moment, take the timeout. The world keeps going. They're allowed to call it.",
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
    gist: "A broken compass doesn't become worthless — it just means you navigate differently. This is the Mixtape series at its most honestly disoriented: the reliable internal instrument that should tell them where to go has failed, and they're figuring out what moving forward looks like without it.",
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
    gist: "WHO? is the I Am series' central question finally screamed instead of whispered. After three EPs of asking it quietly through concept and metaphor, this is the moment it becomes raw: who are you? who am I? The question mark at the end is the whole crisis.",
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
    gist: "엉망 = complete chaos. In the KARMA era — after eight years of being told to be cleaner, tighter, more manageable — this is SKZ owning every piece of accumulated entropy and deciding: we made this mess intentionally, and we like it.",
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
    gist: "Three letters pointing in every direction at once: why these rules, why this standard, why does conformity get to call itself success. Debut-era SKZ didn't have the platform yet — but they had the question. And making a song out of it was already the answer.",
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
    gist: "Late night, city empty, no destination — Bang Chan and Lee Know in the SKZ equivalent of a 3am drive where the only rule is honesty. Two of the most effortlessly cool members making something that feels exactly like the city looks at that hour.",
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
    gist: "Changbin brought Bang Chan into this because the streetlight — the only illumination on a private night — is also a witness. Something about having someone else there makes the honesty possible. A confessional that needed exactly one other person present.",
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
    gist: "막내온탑 = the youngest on top. I.N flipping the entire hierarchy with Bang Chan and Changbin's explicit blessing — the oldest rapper and the group leader rapping backup for the youngest vocalist. Both a joke and completely serious. The most self-aware moment in their discography.",
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
    gist: "TABLO has written about fatherhood, about being Korean-American in an industry that had no category for him, about surviving public humiliation. SKZ brought him in for a reason. The 'U' here is addressed to someone real, and the weight of everything TABLO's survived makes the sincerity of this collaboration land like a hand on your shoulder.",
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
    gist: "사람이니까 = because I'm human. HAN's most disarming solo: the reason I made mistakes, the reason I was scared, the reason I couldn't do better — is that this is what humans do. Not an excuse. Not an apology. The most precise, quietly relieving description of what being alive actually is.",
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
    gist: "끝나지 않을 이야기 = a story that will never end. Written during COVID when live performances were impossible and the future was genuinely uncertain — and still they made a promise with no end date. The certainty in a song from an uncertain time is the whole point.",
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
    gist: "The entire SKZ philosophy compressed into two words. Every album, every creative choice, every bet on themselves — they did it before they knew it would work. Do It is both the autobiography and the instruction.",
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
    gist: "신선놀음 is a Korean idiom for the casual play of an immortal — someone so far above the struggle that even their leisure looks miraculous. After eight years, SKZ has finally earned the right to be divinely unbothered. Divine is the sequel to all the work it took to get here.",
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
    gist: "S-Class is the tier above all tiers — the classification that doesn't exist because nothing was built to contain them. This is SKZ setting the benchmark and watching everyone else figure out how to approach it. There's no chart. They're the chart.",
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
    gist: "Get Lit is the instruction and the event simultaneously. The moment the lights go up on a SKZ stage and the entire crowd becomes one thing. They're not performing the ignition — they are it.",
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
    gist: "Not a universe — a megaverse. ROCK-STAR opens with this because it needs to establish scale before anything else happens. After stadium tours and million-selling albums, the category SKZ occupies requires a word that didn't exist before they needed it.",
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
    gist: "LALALALA is what happens when the lyrical complexity runs out and pure sound takes over. Syllables become a rallying cry. The repetition isn't emptiness — it's the moment where language hits its limit and the crowd shouts anyway, together, because the collective noise is the whole point.",
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
    gist: "A blind spot is not ignorance — it's a structural gap in what you're able to perceive. ROCK-STAR examining what exists in the space where self-awareness runs out: what others see that you can't, what you've been missing about yourself because you were too close to see it.",
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
    gist: "Complex + comfort — the uneasy feeling of being at home in something complicated. SKZ have never been simple, never been tidy, never been easy to categorize. COMFLEX is the moment they stopped wishing they were and started calling it an address.",
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
    gist: "Cover me — military language for 'I'm moving, keep me protected.' A rare moment of openly asking to be kept safe rather than performing invulnerability. The rock guitars make the vulnerability harder to dismiss. You can't be soft and loud at the same time, until you can.",
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
    gist: "The word with the most weight in any relationship — one syllable that changes the shape of everything that came before it. ROCK-STAR's most emotionally precise track. It's not angry. It's the specific heaviness of two people who know what has to happen and haven't said it yet.",
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
    gist: "LiSA has soundtracked some of the most culturally significant anime moments of the 2010s. SKZ put her on a track about paths made publicly, in front of millions, knowing the whole world is watching. Two artists who built their audiences the hard way, together in a room that sounds like a stadium.",
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
    gist: "짬 is Korean for the specific credibility that only comes from years of being in the game — seniority, experience, the quiet authority of someone who was here before you arrived. ATE-era SKZ looking back at how much they've accumulated and deciding it's time to name it.",
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
    gist: "After years of complex concepts and layered production, I Like It is SKZ saying: sometimes it really is just this simple. I like it. Full stop. No metaphor required. The simplicity is not laziness — it's earned permission to enjoy something without explaining it.",
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
    gist: "A self-titled song is the ultimate statement of identity. After years of naming albums and tracks after everything except themselves, Stray Kids made a song called Stray Kids. It's their answer to the question the whole discography has been building toward: what does it mean to be us?",
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
