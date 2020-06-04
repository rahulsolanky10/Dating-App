import { Photo } from './photo';

export interface User {
    id: number;
    userName: string;
    age: number;
    gender: string;
    knownsAs: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    introduction?: string;
    interests?: string;
    lookingFor?: string;
    photos?: Photo[];
    roles?: string[];

}
