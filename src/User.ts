import faker from 'faker'
import { Mapable } from './CustomMap';

// check that all rules of Mapable are satisfied
export class User implements Mapable {
	name: string;
	location: {
		lat: number;
		lng: number;
	}

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		}
	}

	markerContent(): string {
		return `User Name: ${this.name}`
	}
}
