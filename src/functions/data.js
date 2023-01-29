import work1 from '../logo/work1.jpeg'
import work2 from '../logo/work2.jpeg'
import work3 from '../logo/work3.jpeg'
import work4 from '../logo/work4.jpeg'
import work7 from '../logo/work7.jpeg'
import work8 from '../logo/work8.jpeg'
import { Images } from './overview'

export const data = {
    rows: [
        {
            title: "Tell me about kasbass enterprises?",
            content: `Kasbass mission is to provide the highest quality
            plumbing services to our customers. We specialize in installation, repair,
            and maintenance of all types of plumbing systems, as well as hot water heater
            services, sewer line repairs, and drain cleaning. Our team strives to deliver
            prompt, reliable, and quality service on every job. We guarantee quality
            workmanship and are
            committed to providing excellent customer satisfaction.`
            ,
        },
        
        {
            title: "Why should we hire you?",
            content: `More than the skills and the experience you should hire us for
            three main reasons:
            <ul>
                <li>1. We put my 100% on every project that We work on, We make sure that the outputs
                    that We provide are not half baked and if possible We can deliver on or before the
                    deadline with highest quality output
                </li>
                <li>2. We am proactive and We love sharing ideals to help business grow 
                </li>
                <li>3. We am result-oriented and We will provide you with relevant software applications
                that will your decision making  and help you decide what's best for your business
                </li>
            </ul>
            `,
        },
        {
            title: "How are you going to react about a negative feedback from a client?",
            content: `We strive to improve our services continually, so feedback like this is invaluable.`,
        },
        {
            title: "If We gave you a bunch tasks but you realized you can't meet the deadline. What would you do?",
            content:`We will prioritize the tasks with the highest value or impact for your business and then ask
            you for additional hours or days to finish the remaining tasks because honestly there are times that we think we can finish a task on a certain time frame but due to unexpected challenges there might be some 
            delays`,
        },
        {
            title: "What is your work process?",
            content: `As a professional Plumbing company, our work process involves troubleshooting and diagnosing plumbing problems,
            making repairs and installations, ensuring system safety and efficiency, and providing preventive maintenance.
            We would also strive to ensure compliance with relevant regulations and standards
            `,
        },
        
        {
            title: "What type of projects do you usually work on?",
            content: `We usually work on projects related to water management and plumbing systems.
            This can include repairing and replacing pipelines and fixtures, installing new appliances,
            fitting insulation and surface coverings, replacing seals and washers, and carrying out inspections
            to ensure the safety and efficiency of the system.`,
        },
        {
            title: "What is the best way to message you?",
            content: `The best way to message us is through email. You can also contact us
            via social media or by phone. You can find us contact information our website
            `,
        },
    ],
};

export const project = [
    {
        id: 1,
        image: Images[0][0],
        overview: Images[0],
        alt:'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        title: 'Earthen Bottle'
    },
    {   
        id: 2,
        image: Images[1][3],
        overview: Images[1],
        alt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        title: 'Nomad Tumbler'
    },
    {
        id: 3,
        image: Images[2][2],
        overview: Images[2],
        alt: 'Person using a pen to cross a task off a productivity paper card.',
        title: 'Focus Paper Refill'
    },
    {
        id: 4,
        image: Images[3][0],
        overview: Images[3],
        alt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        title:' Machined Mechanical Pencil'
    },
    {
        id: 5,
        image: Images[4][2],
        overview: Images[4],
        alt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        title: 'Machined Mechanical Pencil'
    },
    {
        id: 6,
        image: Images[5][1],
        overview: Images[5],
        alt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        title: ' Machined Mechanical Pencil'
    }
]