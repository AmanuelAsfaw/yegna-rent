interface MuseumInterface {
    id: number;
    name: string;
    location: string;
    description: string;
    image: any;
}
const museum_list: MuseumInterface[] = [
    {
        id: 1,
        name : 'Science Museum',
        location: 'Addis Ababa, Unity Park',
        description: '',
        // image: '/museum/science-museum.jpg',
        image: require('../../assets/museum/science-museum.jpg')
    },
    {
        id: 2,
        name: 'National Museum of Ethiopia',
        location: '2QQ6+6P4, Addis Ababa Arada',
        description: "This museum’s greatest treasure is the partial skeleton of `Lucy`, a tiny human believed to have lived over three million years ago.",
        // image: '/museum/national-museum.webp',
        image: require('../../assets/museum/national-museum.webp')
    },
    {
        id: 3,
        name: 'Red Terror Martyrs Memorial Museum',
        location: 'Corner of the historical Meskel square, Addis Ababa',
        description: 'At the entrance, a bronze statue was erected. It consists of three girls who are crying and it represents the victims of the period of repression known as “Red Terror”(1977-1978).',
        image: require('../../assets/museum/red-terror-museum.jpg')
    },
    {
        id: 4,
        name: 'Ethnological Museum',
        location: '2QW5+P3Q, Algeria St, Addis Ababa',
        description: 'The Ethnological Museum, Addis Ababa, in Ethiopia, is a public institution dedicated to ethnology and culture.',
        image: require('../../assets/museum/ethnological-museum.jpg'),
    },
    {
        id: 5,
        name: 'The Africa Unbound Museum',
        location: '2533 Mundy St, Addis Ababa',
        description: "Specialty Pan-African museum located in Addis Ababa's historic Arada district. Expect a truly one-of-a-kind, memorable experience.",
        image: require('../../assets/museum/TheAfricaUnboundMuseum.jpg'),
    },
    {
        id: 6,
        name: 'Zoma Museum',
        location: 'Mekanisa, Addis Ababa',
        description: `
        Zoma Museum is a dream inspired 25 years ago by the timeless and structurally sound vernacular architecture of Ethiopia and other parts of the world. The Museum aims to bring traditional construction techniques into the present, demonstrating their ability to withstand time while maintaining their grace and beauty. Facilities includes a gallery, a library, a children center, a botanical garden, a school, an amphitheater and a gift shop. Future development plans also include an art and vernacular architecture school.
        `,
        image: require('../../assets/museum/zoma-museum.gif'),
    },
]

export default museum_list

export {
    MuseumInterface
}