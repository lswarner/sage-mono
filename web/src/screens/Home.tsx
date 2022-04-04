import { FC, useEffect, useState } from 'react'

import Header from '../components/Header'
import CourseCard from '../containers/cards/CourseCard'
import PathwayCard from '../containers/cards/PathwayCard'
import useRandom  from '../hooks/UseRandom'
import { btnPrimary, btnAlternate, btnC, btnPrimaryDark, btnSoft, btnSoftC, btnSoftBright } from '../styles'

import {fetchTags, fetchPopularCourses, fetchPopularPathways, Pathway, Course, Tag} from  '../api'
const signedIn= false;
/*
const tags= [
    { text:"uniting mind, body, and heart", color: 'text-pink'},
    { text:"embodying compassionate social action", color: 'text-sky'},
    { text:"healing from painful church experiences", color: 'text-forest'},
    { text:"rediscovering the Christian mystic tradition", color: 'text-pink'},
    { text:"holistic spiritual formation", color: 'text-gold'},
    { text:"exploring gender, sexuality and God", color: 'text-sky'},
    { text:"celebrating art, music, and beauty", color: 'text-pink'},
    { text:"contemplative prayer and meditation", color: 'text-sky'},
    { text:"a grounding connection with nature", color: 'text-forest'},
    { text:"future-oriented faith communities", color: 'text-sky'},
    { text:"embracing the wisdom within perennial religious traditions", color: 'text-gold'},
    { text:"progressive faith explorers", color: 'text-forest'},
    { text:"spiritual practicioners", color: 'text-gold'},
    { text:"whole-life seekers", color: 'text-pink'},
]
*/



const HomeScreen: FC = () => {
    return(
        <div className="flex flex-col h-screen bg-bg-warm-gray-300 mx-20w-screen">
            <Header account={signedIn} />
            <div className='flex flex-row py-6 space-x-3'>
                {signedIn == false
                    ? <VisitorHome />
                    : <TeacherHome />
                }
                
              </div> 
                {/*
                <div className='py-2'>
                    In the days of the Silk Road spanning from China to Spain, countless roadside inns appeared to 
                    support the merchants, pilgrims, messengers, and others who traveled long distances. 
                    Often found in unassuming and inbetween locations, caravanserais were known as 
                    safe havens where people from diverse geographies, cultures, languages, and religions shared meals, 
                    stories, and human kindness for an evening. For these wayfarers, a caravanserai was a place to experience community
                     with others who had left home in search of something more.
                </div>
                <div className='py-2'>  
                    Like the caravanserais of old, this app aims to be part rest-stop for worn out seekers who are far from hom, 
                    part basecamp for spiritual exploration and practice, and part story-and-whiskey sharing around a 
                    late night campfire, all wrapped up in the guise of an education platform. Here you will find a collection 
                    of courses offered by faith leaders and spiritual teachers committed to creative, vibrant, forward-moving, 
                    inclusive, and transformative ways of being.
                    
                    , all rooted in their own local communities and cultures, and all ready
                    to share from the wisdom they've gained along the way.
                    Our hope is to 
                </div>
                */}
        </div>
    )
}

const VisitorHome: FC = () => {
    const [tags, setTags]= useState<Tag[]>()
    const [popularCourses, setPopularCourses]= useState<Course[]>()
    const [popularPathways, setPopularPathways]= useState<Pathway[]>()

    //const [r, setR]= useState<number>(0)
    const i= useRandom({ 
        max: tags?.length || 0, 
        delay: 6000
    })


    useEffect(()=>{
        async function loadTags(){
            const tags= await fetchTags()
            setTags(tags)
        }
        loadTags()
    }, [])
   
    useEffect(()=>{
        async function loadPopularCourses(){
            const courses= await fetchPopularCourses()
            setPopularCourses(courses)
        }
        loadPopularCourses()
    },[])

    useEffect(()=>{
        async function loadPathways(){
            const pathways= await fetchPopularPathways()
            setPopularPathways(pathways)
        }
        loadPathways()
    }, [])


    if(!tags || !popularPathways || !popularCourses){
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className='flex flex-col w-full'>
            <div className='flex flex-row mt-16 border-b-black border-b-2 pb-16'>
                <div className='w-3/5 mr-6'>
                    <div className='text-10xl text-black font-brand'>Spirituality For Life</div>
                    <div className='pt-8 text-4xl mb-1 text-warm-gray-500'>Caravanserai is a learning platform for...&nbsp;</div>
                    <div className='min-h-20'><span className={`${tags[i].color} text-white px-2 pb-1 text-3xl`}>{tags[i].text}.</span></div>
                    
                    
                    <div className='flex flex-row text-3xl justify-start mt-4'>
                        <div className={`${btnPrimary} py-3 px-6 text-xxl`}>Get Started</div>
                    </div>
                </div>
                <div className={`w-2/5 text-20xl text-center ${tags[i].color} text-warm-gray-300`}>
                    X
                </div>
            </div>

            {/* Popular Courses Section */}
            <div className='flex flex-col border-gray-400 border-2 rounded-lg text-black py-4 px-2 mt-16 pb-8 pt-8'>
                <div className='flex flex-row justify-between mx-3'>
                    <div className='text-3xl text-black mt-1'>Popular Courses</div>
                    <div className='flex flex-row'>
                        <input className='border-gray-400 border-3 bg-white text-gray-400  mr-2 px-2 active:border-black focus:border-black' placeholder='Search courses by keyword' />
                        <div className={btnSoft}>Search</div>
                    </div>
                   
                </div>
                <div className='flex flex-row mt-4'>
                {popularCourses.map(({id, name, category, instructors, description, color})=>(
                    <CourseCard 
                        key={id}
                        color={color || "pink"}
                        name={name || "Name"}
                        category={category || "Category"}
                        instructors={instructors}
                        description={description || "This is a brief description of the course. It should be no more than a sentence or two."}
                    />
                ))
                } 
                </div>  
            </div>

            <div className="mt-16">
                <div className='text-3xl text-black mt-10 text-center'>Not sure where to start?</div>
                <div className="w-1/2 m-auto">It can be a bit overwhelming any time you visit somewhere new. If you head is spinning, may we recommend a couple ways to get started? </div>
            </div>

            <div className="mt-16 border-b-black border-b-2 pb-16">
                 
                <div className="flex flex-row gap-8">
                    <div className='flex flex-col w-3/5 p-4 mt-16'>
                        <div className="flex flex-row justify-center">
                            <div className='bg-forest w-22 h-22 rounded-full'>
                                <img src="assets/img/pathways-white.png" className="w-15 h-15 m-auto mt-3"/>
                            </div>
                            
                            <div className='text-8xl ml-6 text-forest font-brand'>Pathways</div>
                        </div>
                        <div className='border-l-14 pl-4 border-l-forest py-2 mt-2'>
                            <div className="text-2xl text-warm-gray-500">Pathways are groups of courses curated by our instructors to gradually take you deeper into a field of study. </div>
                            
                            <div className='text-md text-warm-gray-500 mt-4'>Start with an entry course which aligns with your experience, then pursue subsequent courses as you feel comfortable. Think of this as our version of a guided backpacking trip or a 30-day fitness program- only with fewer mosquitos and less-sweaty armpits.</div>
             
                            <div className='text-xl text-warm-gray-500 mt-4'>It's your journey, but you don't have to travel alone.</div>
                        
                        </div>
                    </div>

                    <div className='flex flex-row flex-wrap w-2/5'>
                        {popularPathways.map(({id, name, count, duration})=>(
                            <PathwayCard
                                key={id} 
                                name={name} 
                                count={count}
                                duration={duration}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}




const TeacherHome:FC = () => {

    return(
        <div className='w-full mt-16 border-b-black border-b-2 pb-16'>
            <div className='text-2xl text-gold'>Welcome back, Luke</div>
            <ul className='text-md text-gray-500'>
                <li><span className='text-pink text-lg'>11</span> New Students</li> 
                <li><span className='text-pink text-lg'>3</span> Unread Messages</li>
                <li></li>
            </ul>
        </div>

    )
}

export default HomeScreen