import { Restaurant } from './restaurant.model';

export class RestaurantWrapper
{
    _embedded!: { restaurants: Restaurant[]};
}