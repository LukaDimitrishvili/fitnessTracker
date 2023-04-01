export interface Workout {
    name: string,
    image: string,
    timer: number,
    calories: number,
    description: string,
    done: boolean,
    id: number,
}

export interface SearchedWorkout {
    difficulty: string,
    equipment: string,
    instructions: string,
    muscle: string,
    name: string,
    type: string,
}