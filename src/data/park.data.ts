interface ParkInterface {
    id: number;
    name: string;
    location: string;
    description: string;
    image: any;
}
const park_list: ParkInterface[] = [
    {
        id: 1,
        name : 'Entoto Park',
        location: 'Addis Ababa',
        description: '',
        image: require('../../assets/park/entoto-park.jpg')
    },
    {
        id: 2,
        name: 'Unity Park',
        location: '2QF7+7H, Addis Ababa Arada',
        description: "This museum’s greatest treasure is the partial skeleton of `Lucy`, a tiny human believed to have lived over three million years ago.",
        // image: '/museum/national-museum.webp',
        image: require('../../assets/park/unity-park.jpg')
    },
    {
        id: 3,
        name: 'Africa Park',
        location: 'Menelik II Avenue, Addis Ababa',
        description: 'At the entrance, a bronze statue was erected. It consists of three girls who are crying and it represents the victims of the period of repression known as “Red Terror”(1977-1978).',
        image: require('../../assets/park/africa-park.jpg')
    },
    {
        id: 4,
        name: 'Ethio-Cuba Park',
        location: '2QC2+2HX, Churchill Ave, Addis Ababa',
        description: 'The Ethnological Museum, Addis Ababa, in Ethiopia, is a public institution dedicated to ethnology and culture.',
        image: require('../../assets/park/ethio-cuba-park.jpg'),
    },
    {
        id: 5,
        name: 'Ambasador Park',
        location: '2Q93+8X4, Addis Ababa',
        description: "Specialty Pan-African museum located in Addis Ababa's historic Arada district. Expect a truly one-of-a-kind, memorable experience.",
        image: require('../../assets/park/ambasador-park.jpg'),
    },
    {
        id: 6,
        name: 'Friendship Park',
        location: 'Arat Kilo, Addis Ababa',
        description: `
        Zoma Museum is a dream inspired 25 years ago by the timeless and structurally sound vernacular architecture of Ethiopia and other parts of the world. The Museum aims to bring traditional construction techniques into the present, demonstrating their ability to withstand time while maintaining their grace and beauty. Facilities includes a gallery, a library, a children center, a botanical garden, a school, an amphitheater and a gift shop. Future development plans also include an art and vernacular architecture school.
        `,
        image: require('../../assets/park/friendship-park.jpg'),
    },
]

export default park_list

export {
    ParkInterface
}