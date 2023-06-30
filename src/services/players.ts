/* eslint-disable no-param-reassign */
import * as fs from 'fs';
import type { Players } from '../types/entities.js';

import playersStaticJSON from '../../data/players.json' assert { type: 'json' };

let playersStaticData: Players = playersStaticJSON;

export function updatePlayer(id: number, points: number) {
	const toUpdate = playersStaticData.find((player) => player.id === id)
	toUpdate.points = points
	fs.writeFileSync('data/players.json', JSON.stringify(playersStaticData));
	playersStaticData = fs.readFileSync('data/players.json')
}

export function getPlayers() {
	const result = playersStaticData;
	return result;
}

