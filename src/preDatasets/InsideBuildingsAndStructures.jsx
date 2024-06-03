export const ENTRANCES = {
    DEPTH:{
        num: 1.4,
        name: "DEPTH",
        range: ">=1.8",
        unit: "Meters",
        desc: "Entrances with vestibules shall be provided with at least 1.80 m. at depth."
    },
    WIDTH:{
        num: 1.4,
        name: "WIDTH",
        range: ">=1.5",
        unit: "meters",
        desc: "Entrances with vestibules shall be provided with at least 1.50 m. at width."
    },
}

export const RAMPS = {
    CLEAR: {
        num: 2.2,
        name: "CLEAR WIDTH",
        range: ">=1.2",
        unit: "meters",
        desc: "Ramps shall have a minimum clear width of 1.20 m."
    },
    GRADIENT: {
        num: 2.3,
        name: "GRADIENT",
        range: "<=1:12",
        unit: "",
        desc: "The maximum gradient shall be 1:12"
    },
    LENGTH: {
        num: 2.4,
        name: "LENGTH",
        range: "<=6	",
        unit: "meters",
        desc: "The length of the ramp should not exceed 6.00 m. if the gradient is 1:12."
    },
    LANDING: {
        num: 2.4,
        name: "LANDING",
        range: ">=1.5",
        unit: "meters",
        desc: "Longer ramps whose graidient is 1:12 shall be provided with landings not less than 1.50 m."
    },
    LEVEL: {
        num: 2.5,
        name: "LEVEL AREA",
        range: ">=1.8",
        unit: "meters",
        desc: "A level area not less than 1.80 m should be provided at the top and bottom of any ramp."
    },
    HANDRAILS: {
        num: 2.6,
        name: "HANDRAILS FROM THE RAMP LEVEL	",
        range: "0.7	&	0.9",
        unit: "meters",
        desc: "Handrails will be provided on both sides of the ramp at 0.70 m and 0.90 m. from the ramp level."
    },
    CURBS: {
        num: 2.7,
        name: "CURBS",
        range: ">=0.1",
        unit: "meters",
        desc: "Ramps shall be equipped with curbs on both sides with a minimum height of 0.10 m."
    },
    RAILING: {
        num: 2.8,
        name: "RAILING",
        range: "1.8",
        unit: "meters",
        desc: ""
    },
}

export const DOORS = {
    WIDTH: {
        num: 3.1,
        name: "WIDTH",
        range: ">=0.8",
        unit: "meters",
        desc: "All doors shave a minimum clear width of 0.80 m."
    },
    LEVEL_SPACE: {
        num: 3.4,
        name: "LEVEL SPACE ",
        range: "1.5	x	1.5",
        unit: "meters",
        desc: "A minimum clear level space of 1.50 m. x 1.50 m. shall be provided before and extending beyond door."
    },
    LEVEL_SPACE_CORRIDOR: {
        num: 3.4,
        name: "LEVEL SPACE (CORRIDOR WIDTH)",
        range: ">=1.2",
        unit: "meters",
        desc: "Level space on the corridor side may be a minimum of 1.20 m corridor width."
    },
    DOORKNOBS: {
        num: 3.8,
        name: "DOORKNOBS AND OTHER HARDWARE",
        range: "0.82 - 1.06",
        unit: "meters",
        desc: "Doorknobs and other hardware should be located between 0.82 m and 1.06 m. ; 0.90 m. is preferred."
    },
    VERTICAL: {
        num: 3.9,
        name: "VERTICAL PULL HANDLES",
        range: "1.06",
        unit: "meters",
        desc: "Vertical pull handles, centered at 1.06 m., above the floor, are preferred to horizontal pull bars for swing doors or doors with locking devices."
    },
    KICK: {
        num: 3.1,
        name: "KICK PLATES",
        range: "0.3 - 0.4",
        unit: "meters",
        desc: "Doors along major circulation routes should be provided with kick plates made of durable materials at height of 0.30 m. to 0.40 m."
    }
}

export const THRESHOLDS = {
    MAX : {
        num: 4.1,
        name: "MAX HEIGHT",
        range: "<=25",
        unit: "millimeters",
        desc: "Thresholds and sliding door tracks shall have a maximum height of 25 mm. and preferably ramped."
    }
}

export const SWITCHES = {
    HEIGHT: {
        num: 5.1,
        name: "HEIGHT",
        range: "1.2 - 1.3	",
        unit: "meters",
        desc: "Manual switches shall be positioned within 1.20 m to 1.30 m. above the floor."
    },
    DISTANCE: {
        num: 5.2,
        name: "DISTANCE FROM THE LATCH	",
        range: "<=0.2",
        unit: "meters",
        desc: "Manual switches should be located no further than 0.20 m. from the latch side of the door."
    }
}

export const SIGNAGES = {
    SEE: {
        name: `SEE "SIGNAGES" UNDER SHEET A`,
    }
}

export const CORRIDORS = {
    WIDTH: {
        num: 7.1,
        name: "WIDTH",
        range: ">=1.2",
        unit: "meters",
        desc: "Corridors shall have a minimum clear width of 1.20 m."
    },
    TURNABOUTS_AREA: {
        num: 7.2,
        name: "TURNABOUTS AREA",
        range: ">=1.5	x	>=1.5",
        unit: "meters",
        desc: "Turnabouts shall have a minimum area of 1.50 m. x 1.50 m."
    },
    TURNABOUTS_SPACE: {
        num: 7.2,
        name: "TURNABOUTS SPACE",
        range: "<=12",
        unit: "meters",
        desc: "Turnabouts shall be spaced at a maximum of 12.00 m."
    },
    TURNABOUT_SPACES_DEAD_ENDS: {
        num: 7.3,
        name: "TURNABOUT SPACES AT DEAD ENDS",
        range: "<=3.5",
        unit: "meters",
        desc: "Turnabout spaces should be provided at or within 3.50 m. of every dead end."
    }
}

export const WASHROOMS_TOILETS = {
    WATER_CLOSET_AREA: {
        num: 8.2,
        name: "WATER CLOSET AREA",
        range: ">=1.7	x	>=1.8",
        unit: "meters",
        desc: "Accessible water closet shall have a minimum a area of 1.70 m x 1.80 m."
    },
    TURNING_SPACE_AREA: {
        num: 8.3,
        name: "TURNING SPACE AREA",
        range: 2.25,
        unit: "square meters",
        desc: "A turning space area of 2.25 sq m. for wheelchair shall be provided for water closet stalls for lateral mounting."
    },
    TURNING_SPACE_DIMENSION: {
        num: 8.3,
        name: "TURNING SPACE DIMENSION",
        range: ">=1.5",
        unit: "meters",
        desc: "A minimum turning space dimension of 1.50 m for wheelchair shall be provided for water closet stalls for lateral mounting."
    },
    SIGNAGE_THICK: {
        num: 8.6,
        name: "SIGNAGE THICKNESS",
        range: ">=7.5",
        unit: "millimeters",
        desc: "The signages should at least 7.5 mm. thick."
    },
    WATER_CLOSET_HEIGHT: {
        num: 8.7,
        name: "WATER CLOSET HEIGHT",
        range: 0.45,
        unit: "meters",
        desc: "The maximum height of water closets should be 0.80 m."
    },
    FLUSH_CONTROL_HEIGHT: {
        num: 8.7,
        name: "FLUSH CONTROL HEIGHT",
        range: "<=1.2",
        unit: "meters",
        desc: "Flush control should have a maxium height of 1.20 m."
    },
    LAVATORIES_HEIGHT: {
        num: 8.8,
        name: "LAVATORIES HEIGHT",
        range: "<=0.8",
        unit: "meters",
        desc: "Maximum height of lavatories should be 0.80 m."
    },
    KNEE_RECESS: {
        name: "KNEE RECESSES",
        range: "0.6 - 0.7",
        unit: "meters",
    },
    VERTICAL_CLEARANCE: {
        name: "VERTICAL CLEARANCE",
        range: 	0.5,
        unit: "meters",
    },
    URINAL_HEIGHT_LIP: {
        num: 8.9,
        name: "LAVATORIES HEIGHT",
        range: "<=0.48",
        unit: "meters",
        desc: "Urinals should have an elongated lip or though type; the maximum height of the lip should be 0.48 m."
    }
}

export const STAIRS = {
    TACTILE_STRIP_WIDTH: {
        num: 9.4,
        name: "TACTILE STRIP WIDTH",
        range: 0.3,
        unit: "meters",
        desc: "A tactile strip 0.30 m. wide shall be installed before hazardous areas."
    }
}

export const ELEVATORS = {
    LOCATION_FROM_ENTRANCE: {
        num: 10.1,
        name: "LOCATION FROM ENTRANCE",
        range: "<=30",
        unit: "meters",
        desc: "Accessible elevators should be located not more than 30.00 m. from the entrance and should be easy to locate with the aid of signs"
    },
    ELEVATOR_DIMENSION: {
        num: 10.2,
        name: "DIMENSION",
        range: ">=1.1	x	>=1.4",
        unit: "meters",
        desc: "Accesible elevators shall have a minimum dimension of 1.10 m. x 1.40 m."
    },
    CONTROL_PANEL_EMERGENCY_SYSTEM_LOCATION_FLOOR: {
        num: 10.3,
        name: "CONTROL PANEL/EMERGENCY SYSTEM LOCATION FROM FLOOR",
        range: "0.9 - 1.2",
        unit: "meters",
        desc: "Centerline heights of control panels and emergency system for the to most buttons shall be between 0.90 m. to 1.20 m. from the floor."
    },
    DIAMETER_ELEVATOR_BUTTONS: {
        num: 10.5,
        name: "DIAMETER OF ELEVATOR BUTTONS",
        range: ">=20",
        unit: "milimeters",
        desc: "Button sizes at elevator control panels shall have a minimum diameter of 20 mm."
    },
    DEPTH_ELEVATOR_BUTTONS: {
        num: 10.5,
        name: "DEPTH OF ELEVATOR BUTTONS",
        range: "<=1",
        unit: "milimeters",
        desc: "Button sizes at elevator control panels should have a maximum depression depth of 1 mm."
    }	
}

export const WATER_FOUNTAINS = {

}

export const PUBLIC_TELEPHONES = {

}

export const PLACES_ASSEMBLY = {
    
}
