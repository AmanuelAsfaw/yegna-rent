interface EventInterface {
    id: number;
    name: string;
    date: string;
    location: string;
    description: string;
    image: any;
}
const event_list: EventInterface[] = [
    {
        id: 1,
        name : 'African Ministerial Conference on the Environment 2023',
        location: 'Addis Ababa',
        date: '14 - 18 Aug 2023',
        description: "The upcoming African Ministerial Conference on the Environment aims to strengthen collaboration and implement environmental frameworks to address Africa's environmental challenges and seize opportunities for sustainable development.",
        // image: require('../../assets/park/entoto-event.jpg')
        image: require('../../assets/event/AMCEN7.jpg')
    },
    {
        id: 2,
        name: 'Annual Conference on Interdisciplinary Research Studies 2023',
        location: '2QF7+7H, Addis Ababa Arada',
        date: 'Mon Agust 2, 2023',
        description: "Annual Conference on Interdisciplinary Research Studies theme will be 'The Nile: Building Partnerships from Source to Shore'.",
        // image: '/museum/national-museum.webp',
        // image: require('../../assets/park/unity-event.jpg')
        image: require('../../assets/event/Logo-for-2020-Conference.png')
    },
    {
        id: 3,
        name: 'Annual Power Tech Africa 2023',
        location: 'Radisson Blu Hotel Addis Ababa',
        date: 'Sep 2023',
        description: 'At the entrance, a bronze statue was erected. It consists of three girls who are crying and it represents the victims of the period of repression known as “Red Terror”(1977-1978).',
        // image: require('../../assets/park/africa-event.jpg')
        image: require('../../assets/event/eventlogo-12-1605082943.jpg')
    },
    {
        id: 4,
        name: 'PAMCA Annual Conference and Exhibition 2023',
        location: '2QC2+2HX, Churchill Ave, Addis Ababa',
        date: '17 - 21 Sep 2023',
        description: 'The Ethnological Museum, Addis Ababa, in Ethiopia, is a public institution dedicated to ethnology and culture.',
        // image: require('../../assets/park/ethio-cuba-event.jpg'),
        image: require('../../assets/event/PAMCA_Logo_0.jpg'),
    },
    {
        id: 5,
        name: 'COMEXPO Ethiopia 2023',
        location: '2Q93+8X4, Addis Ababa',
        date: '29 Sep - 01 Oct 2023',
        description: "Specialty Pan-African museum located in Addis Ababa's historic Arada district. Expect a truly one-of-a-kind, memorable experience.",
        // image: require('../../assets/park/ambasador-event.jpg'),
        image: require('../../assets/event/LMSPDA.png'),
    },
    {
        id: 6,
        name: 'PanAfrican Conference on Artificial Intelligence 2023',
        location: 'A Virtual Event',
        date: '05 - 06 Oct 2023',
        description: `
        Zoma Museum is a dream inspired 25 years ago by the timeless and structurally sound vernacular architecture of Ethiopia and other parts of the world. The Museum aims to bring traditional construction techniques into the present, demonstrating their ability to withstand time while maintaining their grace and beauty. Facilities includes a gallery, a library, a children center, a botanical garden, a school, an amphitheater and a gift shop. Future development plans also include an art and vernacular architecture school.
        `,
        // image: require('../../assets/park/friendship-event.jpg'),
        image: require('../../assets/event/panadricaai.jpg'),
    },
]

export default event_list

export {
    EventInterface
}