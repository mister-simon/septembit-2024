const bitImgs = import.meta.glob(
    './bits/*.gif',
    {
        eager: true,
    }
);

function getImg(day) {
    const imgPath = Object.keys(bitImgs)
        .find((path) => path.indexOf(`${day}-`) !== -1);

    return bitImgs[imgPath];
}

let day = 1;

function createBit(prompt, name, description, note = null, size = 32) {
    const currentDay = day++;
    const id = String(currentDay).padStart(2, '0');

    return {
        day: currentDay,
        img: getImg(currentDay).default,
        prompt,
        name,
        description,
        note,
        size,
        id
    }
}

export const bits = [
    createBit(
        `Fire`,
        `UrToast`,
        `A burning piece of toast that wants their revenge.`
    ),
    createBit(
        `Water`,
        `Otoa`,
        `This sea monster has an urge to consume.`
    ),
    createBit(
        `Air`,
        `The Airh`,
        `A hare-like critter that uses it's incredibly light gaseous form to pick up incredible speed, evading predators and hunters alike. You'd be lucky to notice one in the wild before it's long gone.`
    ),
    createBit(
        'Earth',
        `Hibearbait`,
        `Half earthworm, half bear cub, entirely just trying to scare people away because they know they're really not very dangerous. Will often flee and burrow to safety if their opponent doesn't back down.`
    ),
    createBit(
        'Metal',
        `Cutterlea`,
        `A sharp little monster who's face shines out brightly during a full moon.`
    ),
    createBit(
        'Electric',
        `The Stormflower`,
        `The deadly cousin to the sunflower... Stores energy in it's bulb shaped flower, uses it's wide network of roots to complete a circuit to anything that gets too close.`
    ),
    createBit(
        'Flying',
        `The Fastrel`,
        `You may find them hovering over grasslands, keen eyed, occasionally diving with incredible speed and delivering a concussive blast of energy to it's quarry.`
    ),
    createBit(
        'Fighting',
        `Oro`,
        `One of only a few remaining defender bugs. Small but mighty.`
    ),
    createBit(
        'Underground',
        `Speleomyotis`,
        `Also known as "danglin' death". A small critter that slowly grows a spear-like exoskeleton of cave deposits. With their extremely slow metabolism they need only feed once a year after skewering an unsuspecting target below.`
    ),
    createBit(
        'Plant',
        `Catroot`,
        `If you're wondering why all the produce from your vegetable patch has been nibbled... It's this lil guy, hiding themselves there in plain sight.`
    ),
    createBit(
        'Bug',
        `The Eidoloptera`,
        `Some say that if a butterfly has unfinished business when it passes away it'll stick around as a ghost, aimlessly haunting fruit bowls.`
    ),
    createBit(
        'Poison',
        `Mechtato`,
        `After learning about potato batteries, the next logical step was self-powered potato mechs... We never considered that potatoes eventually go bad.`
    ),
    createBit(
        'Happy',
        `Yarndale`,
        `Spotted frolicking in a meadow... It seems to be enjoying itself.`
    ),
    createBit(
        'Sad',
        `Angua`,
        `Just a sombre warewolf contemplating the city.`
    ),
    createBit(
        'Rage',
        `???`,
        `What was that? A creature of fury. We don't know. It was gone as quickly as it arrived.`
    ),
    createBit(
        'Ice',
        `Icemouse`,
        `Ice, mouse, ice ice mouse, pxichxijchpxichxijchpxichxijchpxichxijch ice, mouse, ice ice mouse.`
    ),
    createBit(
        'Lava',
        `Llama Lamp`,
        `These gentle creatures will spit lava as a defence mechanism. The lava circulating in their bodies can be seen glowing through their necks.`
    ),
    createBit(
        'Gas',
        `The Gasprite`,
        `Much like a hermit crab, will claim discarded objects as it's home. Expanding into the available space to get comfy.`
    ),
    createBit(
        'Ghost',
        `Blinker`,
        `They say this footage of a Blinker, caught in the forest just outside of town, can make a person go mad... Luckily, it's easily cured with a mouthful of cherries.`
    ),
    createBit(
        'Psychic',
        `Psymon`,
        `"Look at this cute little guy. I just want to pet it and take care of it. I want to bring it food. I must bring it food."`
    ),
    createBit(
        'Dark',
        `Darkwing`,
        `You won't see this bird on the lake during the day, and you'll only barely see them on the lake at night.`
    ),
    createBit(
        'Light',
        `Lightflower`,
        `This flower stares directly into the sun against the advice of all medical professionals.`
    ),
    createBit(
        'Sound',
        `The Earbug`,
        `Also known as The Aidbug. Much like the fictional "babelfish" this little critter will assist you in your interactions with the world by consuming incoming sound waves. They then telepathically relay to you. And with a little training and care your earbug can even apply EQ, amplify or dampen sound, and so much more.`
    ),
    createBit(
        'Hobby',
        `Hoblobs`,
        `These sprites come out at night and play with your toys and craft supplies. They're the folks scrambling your rubiks cubes when you're not looking.`
    ),
    createBit(
        'Food',
        `Croissain't`,
        `Ain't a croissant, and is happy to explain why.`
    ),
    createBit(
        'Object',
        `Achair`,
        `Graceful like gazelle, comfy like chair.`
    ),
    createBit(
        'Abstract',
        `Brbstrct`,
        `This flock blankets the sky - your eyes slide right over it trying to divine wing and beak.`
    ),
    createBit(
        'Evolve',
        `Gaspartments`,
        `When the old balloon factory was knocked down, we didn't anticipate all the displaced gasprites would fight back...`,
        `An evolution of <a href="#bit-18">18 - Gasprite</a>`,
        96
    ),
    createBit(
        'Combine',
        `Psychic Mechtato`,
        `When the Mechtato Mk.2200 went bad we were all worried. When it suddenly started offensively using psy-tech we were truly terrified.`,
        `A combination of <a href="#bit-20">20 (Psymon)</a> + <a href="#bit-12">12 (Mechtato)</a>`,
        96
    ),
    createBit(
        'Mythical',
        `Mythicalago`,
        `Even people who believe in Bigfoot don't seem to believe in the Mythicalago - a mountainous white rabbit. They're as huge as they are adorable.`,
        `...`,
        96
    )
];