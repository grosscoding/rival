import type { endpointsToOperations } from '../pages/api/[...entity].js';
import type { playgroundActions } from '../pages/playground/_actions.js';

export type EndpointsToOperations = typeof endpointsToOperations;
export type Endpoint = keyof EndpointsToOperations;

export type Products = Product[];
export interface Product {
	name: string;
	category: string;
	technology: string;
	id: number;
	description: string;
	price: string;
	discount: string;
}

export type Users = User[];
export interface User {
	id: number;
	name: string;
	avatar: string;
	email: string;
	biography: string;
	position: string;
	country: string;
	status: string;
}

export type Players = Player[]

export interface Player{
	id: number,
	name: string,
	points: number
}

export type Teams = Team[]
export interface Team{
	id: number,
	players: Player[]
}

export type Matches = Match[]

export interface Match{
	id: number,
	teams: Team[],
	winner_team_id: number
}

export type PlaygroundAction = (typeof playgroundActions)[number];
