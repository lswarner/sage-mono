import { Human, Course, Pathway } from '.'

export const tags= [
    { text:"uniting mind, body, and heart", color: 'bg-pink'},
    { text:"embodying compassionate social action", color: 'bg-sky'},
    { text:"healing from painful church experiences", color: 'bg-forest'},
    { text:"rediscovering the Christian mystic tradition", color: 'bg-pink'},
    { text:"holistic spiritual formation", color: 'bg-gold'},
    { text:"exploring gender, sexuality and God", color: 'bg-sky'},
    { text:"celebrating art, music, and beauty", color: 'bg-pink'},
    { text:"contemplative prayer and meditation", color: 'bg-sky'},
    { text:"a grounding connection with nature", color: 'bg-forest'},
    { text:"future-oriented faith communities", color: 'bg-sky'},
    { text:"embracing the wisdom within perennial religious traditions", color: 'bg-gold'},
    { text:"progressive faith explorers", color: 'bg-forest'},
    { text:"spiritual practicioners", color: 'bg-gold'},
    { text:"whole-life seekers", color: 'bg-pink'},
]

export const humans: Human[]= [
    
]

export const pathways: Pathway[]=  [{
    id:"1",
    name: "Introduction to Contemplative Christian Practice", 
    count: 5,
    duration: 36,
},
{
    id:"2",
    name: "Missional Church, Theology, & Practice",
    count: 6, 
    duration: 42,
}, 
{
    id:"3",
    name: "Exploring the Divine through the Lens of Gender and Sexuality",
    count: 4,
    duration: 31,
}]


export const courses: Course[] = [
    {
        id: 'crs_1',
        color: 'forest',
        name: 'Reword',
        description: `Repent. Sin. Salvation. God. Many theological words have lost their meaning. By bringing their original context and purpose into today's culture, we'll form a vibrant vocabulary which can help us navigate our present world.`,
        category: 'Reconstruct',
        instructors: [{
            id: 'hum_1',
            name: 'Luke Warner',
            email: 'lsw@lukewarner.net',
            location: 'Denver, CO. USA',

        }, {
            id: 'hum_3',
            name: "Andrew Breitenberg",
            email: "atb@breitenberg.com",
            location: "Virginia Beach, VA. USA"
        }],
    },
    {
        id: 'crs_2',
        color: 'royal',
        name: 'Theology of Harry Potter',
        description: `We'll take a fun look at the popular fiction series to tease out what Harry and his companions have to teach us about the most deepest questions of life. Some familiarity with the books is recommened.` ,
        category: 'Culture',
        instructors: [{
            id: '2',
            name: 'John Vernon',
            email: 'jtv@gmail.com',
            location: 'Greensboro, NC. USA',

        }],
    },
    {
        id: 'crs_3',
        color: 'pink',
        name: 'Spiritual Reflection in Non-Religious Communities',
        description: `Together Lacey and Ivar will share what their community has learned after 4 years of curating a monthly sacred gather among Seattleites who claim no religious affiliation.`,
        category: 'Community',
        instructors: [{
            id: 'hum_4',
            name: 'Lacey Brown',
            email: 'lacey@apostleschurch.org',
            location: 'Seattle, WA. USA',

        }, {
            id: 'hum_5',
            name: 'Ivar Hillesland',
            email: 'pastor@apostleschurch.org',
            location: 'Seattle, WA. USA',

        }],
    },
    {
        id: 'crs_4',
        color: 'sky',
        name: 'Enneagram for Spiritual Formation',
        description: 'A hands-on course aimed at introducing ways the enneagram can help a person grow toward integration. Students will be assumed to have some basic knowledge of the ennegram.',
        category: 'Formation',
        instructors: [{
            id: 'hum_6',
            name: 'Mickey ScottBey Jones',
            email: 'msj@mickeyscottbeyjones.com',
            location: '',

        }],
    },
]