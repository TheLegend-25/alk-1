import { useState } from "react";
import { Car } from "./Car";

const CARS = ["Audi", "Alfa Romeo", "BMW", "Opel", "Skoda", "Volvo"];

export const CarContainer = () => {
    const [displayedCars, setDisplayedCars] = useState(CARS)

    const hideHandler = (car) => {
        const updatedList = displayedCars.filter(carName => carName !== car)
        setDisplayedCars(updatedList)
    }

    return <div>
        {displayedCars.map(car => <Car key={car} name={car} onHide={hideHandler} />)}
    </div>
}
