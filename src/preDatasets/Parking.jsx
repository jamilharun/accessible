export const PARKING_AREAS = {
    WIDTH: {
        name: "WIDTH OF PARKING SLOTS",
        range: {
            operator: ">=",
            value: 3.7
        },
        unit: "meters",
        desc: `Accessible parking slots should have a minimum width of <span class="highlight">3.70m</span>.`
    },
    CLEAR: {
        name: "CLEAR WIDTH BETWEEN THE FRONT ENDS OF PARKED CARS",
        range: {
            operator: ">=",
            value: 1.2
        },
        unit: "meters",
        desc: `A walkway from accessible spaces of <span class="highlight">1.20m</span>. clear width shall be provided between the front ends of parked cars.`
    }
}