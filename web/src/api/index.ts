import { tags, humans, courses, pathways } from './data'

export interface Human {
    id: string;
    name: string;
    email: string;
    location: string;
}

export interface Course {
    id: string;
    name: string;
    description: string;
    instructors: Human[];
    color: string;
    category: string;
}

export interface Pathway {
    id: string;
    name: string;
    //courses: Array<Course>;
    count: number;
    duration: number;
}

export interface Tag{
    text: string;
    color: string;
}

export async function fetchPopularCourses(): Promise<Course[]> {
    return courses
}

export async function fetchPopularPathways(): Promise<Pathway[]> {
    return pathways
}

export async function fetchTags(): Promise<Tag[]>{
    return tags
}


