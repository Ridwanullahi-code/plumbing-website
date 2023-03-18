import { BiTime } from 'react-icons/bi';
import { FiCodepen } from 'react-icons/fi'
import { SiCodepen } from 'react-icons/si'
import {SiMicrosoftedge} from 'react-icons/si'
import { FaCropAlt } from 'react-icons/fa';

export const choose = [
	{name:"Experienced and Skilled Plumbers",
	icon:<FaCropAlt className="h-10 w-10"/>,
	summary:"Our company has a team of experienced and skilled plumbers who are well-equipped to handle any plumbing issue you may be facing"
	},
	{
		name: "Reliable and Efficient Service",
		icon:<FiCodepen className="h-10 w-10" /> ,
		summary: "We strive to provide reliable and efficient service to our customers. We arrive on time, complete the work quickly and efficiently"
	},
	{
		name: "Competitive Pricing",
		icon: <SiCodepen className="h-10 w-10" />,
		summary: "We offer competitive pricing without compromising on the quality of our work"
	},
	{
		name: 'Customer Satisfaction',
		icon: <SiMicrosoftedge className="h-10 w-10" />,
		summary: "We listen to your needs and concerns, and we work with you to find the best solution for your plumbing issues"
	},
	{
		name: "24/7 Emergency Service",
		icon: <BiTime className="h-10 w-10" />,
		summary: "We offer 24/7 emergency plumbing services. If you have a plumbing emergency"
	}
]