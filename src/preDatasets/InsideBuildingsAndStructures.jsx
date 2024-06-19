export const ENTRANCES = {
    DEPTH:{
        num: 1.4,
        name: "DEPTH",
        range: {
            operator: ">=",
            value: 1.8
        },
        unit: "Meters",
        desc: `Entrances with vestibules shall be provided with at least <span class="highlight">1.80 m</span>. at depth.`
    },
    WIDTH:{
        num: 1.4,
        name: "WIDTH",
        range: {
            operator: ">=",
            value: 1.5
        },
        unit: "meters",
        desc: `Entrances with vestibules shall be provided with at least <span class="highlight">1.50m</span>. at width.`
    },
}

export const RAMPS = {
    CLEAR: {
        num: 2.2,
        name: "CLEAR WIDTH",
        range: {
            operator: ">=",
            value: 1.2
        },
        unit: "meters",
        desc: `Ramps shall have a minimum clear width of <span class="highlight">1.20m</span>.`
    },
    GRADIENT: {
        num: 2.3,
        name: "GRADIENT",
        // range: "<=1:12",
        parsedRange: {
            operator: "<=",
            numerator: 1,
            denominator: 12
        },
        unit: "",
        desc: `The maximum gradient shall be <span class="highlight">1:12</span>`
    },
    LENGTH: {
        num: 2.4,
        name: "LENGTH",
        range: {
            operator: "<=",
            value: 6
        },
        unit: "meters",
        desc: `The length of the ramp should not exceed 6.00 m. if the gradient is <span class="highlight">1:12</span>.`
    },
    LANDING: {
        num: 2.4,
        name: "LANDING",
        range: {
            operator: ">=",
            value: 1.5
        },
        unit: "meters",
        desc: `Longer ramps whose graidient is 1:12 shall be provided with landings not less than <span class="highlight">1.50m</span>.`
    },
    LEVEL: {
        num: 2.5,
        name: "LEVEL AREA",
        range: {
            operator: ">=",
            value: 1.8
        },
        unit: "meters",
        desc: `A level area not less than <span class="highlight">1.80m</span> should be provided at the top and bottom of any ramp.`
    },
    HANDRAILS_FROM_THE_RAMP_LEVEL: {
        num: 2.6,
        name: "HANDRAILS FROM THE RAMP LEVEL	",
        // range: "0.7	&	0.9",
        rangeParsed: {
            operator: "&",
            numerator: 0.7,
            denominator: 0.9
        },
        unit: "meters",
        desc: `Handrails will be provided on both sides of the ramp at <span class="highlight">0.70m</span> and <span class="highlight">0.90m</span>. from the ramp level.`
    },
    CURBS: {
        num: 2.7,
        name: "CURBS",
        range: {
            operator: ">=",
            value: 0.1
        },
        unit: "meters",
        desc: `Ramps shall be equipped with curbs on both sides with a minimum height of <span class="highlight">0.10m</span>.`
    },
    RAILING: {
        num: 2.8,
        name: "RAILING",
        range: {
            // operator: ">=",
            value: 1.5
        },
        unit: "meters",
        desc: `Any ramp with a rise greater than <span class="highlight">0.20m</span> and leads down towards ana rea where vehicular traffic is possible, should have a railing across the full width of its lower end, not less that <span class="highlight">1.50meters</span> from the foot of the ramp.`
    },
}

export const DOORS = {
    WIDTH: {
        num: 3.1,
        name: "WIDTH",
        range: {
            operator: ">=",
            value: 0.8
        },
        unit: "meters",
        desc: `All doors shave a minimum clear width of <span class="highlight">0.80m</span>.`
    },
    LEVEL_SPACE: {
        num: 3.4,
        name: "LEVEL SPACE ",
        rangeParsed: {
            expression: "1.5 x 1.5",
            operator: "x",
            numerator: 1.5,
            denominator: 1.5
        },
        unit: "meters",
        desc: `A minimum clear level space of <span class="highlight">1.50m</span>. x <span class="highlight">1.50m</span>. shall be provided before and extending beyond door.`
    },
    LEVEL_SPACE_CORRIDOR: {
        num: 3.4,
        name: "LEVEL SPACE (CORRIDOR WIDTH)",
        range: {
            operator: ">=",
            value: 1.2
        },
        unit: "meters",
        desc: `Level space on the corridor side may be a minimum of <span class="highlight">1.20m</span> corridor width.`
    },
    DOORKNOBS: {
        num: 3.8,
        name: "DOORKNOBS AND OTHER HARDWARE",
        range: {
            expression: "0.82 - 1.06",
            operator: "-",
            numerator: 0.82,
            denominator: 1.06
        },
        unit: "meters",
        desc: `Doorknobs and other hardware should be located between <span class="highlight">0.82m</span> and <span class="highlight">1.06m</span>. ; <span class="highlight">0.90m</span>. is preferred.`
    },
    VERTICAL: {
        num: 3.9,
        name: "VERTICAL PULL HANDLES",
        range: {
            value: 1.06
        },
        unit: "meters",
        desc: `Vertical pull handles, centered at <span class="highlight">1.06m</span>., above the floor, are preferred to horizontal pull bars for swing doors or doors with locking devices.`
    },
    KICK: {
        num: 3.1,
        name: "KICK PLATES",
        range: {
            expression: "0.3 - 0.4",
            operator: "-",
            min: 0.3,
            max: 0.4
        },
        unit: "meters",
        desc: `Doors along major circulation routes should be provided with kick plates made of durable materials at height of <span class="highlight">0.30m</span>. to <span class="highlight">0.40m</span>.`
    }
}

export const THRESHOLDS = {
    MAX : {
        num: 4.1,
        name: "MAX HEIGHT",
        range: {
            operator: "<=",
            value: 25
        },
        unit: "millimeters",
        desc: `Thresholds and sliding door tracks shall have a maximum height of <span class="highlight">25mm</span>. and preferably ramped.`
    }
}

export const SWITCHES = {
    HEIGHT: {
        num: 5.1,
        name: "HEIGHT",
        range: {
            expression: "1.2 - 1.3",
            min: 1.2,
            max: 1.3
        },
        unit: "meters",
        desc: `Manual switches shall be positioned within <span class="highlight">1.20m</span> to <span class="highlight">1.30m</span>. above the floor.`
    },
    DISTANCE: {
        num: 5.2,
        name: "DISTANCE FROM THE LATCH	",
        range: {
            expression: "<=0.2",
            operator: "<=",
            value: 0.2
        },
        unit: "meters",
        desc: `Manual switches should be located no further than <span class="highlight">0.20m</span>. from the latch side of the door.`
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
        range: {
            expression: ">=1.2",
            operator: ">=",
            value: 1.2
        },
        unit: "meters",
        desc: `Corridors shall have a minimum clear width of <span class="highlight">1.20m</span>.`
    },
    TURNABOUTS_AREA: {
        num: 7.2,
        name: "TURNABOUTS AREA",
        range: {
            expression: ">=1.5	x	>=1.5",
            operator: ">=",
            numerator: 1.5,
            denominator: 1.5
        },
        unit: "meters",
        desc: `Turnabouts shall have a minimum area of <span class="highlight">1.50m</span>. x <span class="highlight">1.50m</span>.`
    },
    TURNABOUTS_SPACE: {
        num: 7.2,
        name: "TURNABOUTS SPACE",
        range: {
            operator: "<=",
            value: 12
        },
        unit: "meters",
        desc: `Turnabouts shall be spaced at a maximum of <span class="highlight">12.00m</span>.`
    },
    TURNABOUT_SPACES_DEAD_ENDS: {
        num: 7.3,
        name: "TURNABOUT SPACES AT DEAD ENDS",
        range: {
            operator: "<=",
            value: 3.5
        },
        unit: "meters",
        desc: `Turnabout spaces should be provided at or within <span class="highlight">3.50m</span>. of every dead end.`
    }
}

export const WASHROOMS_TOILETS = {
    WATER_CLOSET_AREA: {
        num: 8.2,
        name: "WATER CLOSET AREA",
        range: {
            expression: ">=1.7	x	>=1.8",
            operator: ">=",
            numerator: 1.7,
            denominator: 1.8
        },
        unit: "meters",
        desc: `Accessible water closet shall have a minimum a area of <span class="highlight">1.70m</span> x <span class="highlight">1.80m</span>.`
    },
    TURNING_SPACE_AREA: {
        num: 8.3,
        name: "TURNING SPACE AREA",
        range: 2.25,
        unit: "square meters",
        desc: `A turning space area of <span class="highlight">2.25sqm</span>. for wheelchair shall be provided for water closet stalls for lateral mounting.`
    },
    TURNING_SPACE_DIMENSION: {
        num: 8.3,
        name: "TURNING SPACE DIMENSION",
        range: {
            expression: ">=1.5",
            operator: ">=",
            value: 1.5
        },
        unit: "meters",
        desc: `A minimum turning space dimension of <span class="highlight">1.50m</span> for wheelchair shall be provided for water closet stalls for lateral mounting.`
    },
    SIGNAGE_THICK: {
        num: 8.6,
        name: "SIGNAGE THICKNESS",
        range: {
            expression: ">=7.5",
            operator: ">=",
            value: 7.5
        },
        unit: "millimeters",
        desc: `The signages should at least <span class="highlight">7.5mm</span>. thick.`
    },
    WATER_CLOSET_HEIGHT: {
        num: 8.7,
        name: "WATER CLOSET HEIGHT",
        range: {
            expression: "<=0.45",
            operator: "<=",
            value: 0.45	
        },
        unit: "meters",
        desc: `The maximum height of water closets should be <span class="highlight">0.80m</span>.`
    },
    FLUSH_CONTROL_HEIGHT: {
        num: 8.7,
        name: "FLUSH CONTROL HEIGHT",
        range: {
            expression: "<=1.2",
            operator: "<=",
            value: 1.2
        },
        unit: "meters",
        desc: `Flush control should have a maxium height of <span class="highlight">1.20m</span>.`
    },
    LAVATORIES_HEIGHT: {
        num: 8.8,
        name: "LAVATORIES HEIGHT",
        range: {
            expression: "<=0.8",
            operator: "<=",
            value: 0.8
        },
        unit: "meters",
        desc: `Maximum height of lavatories should be <span class="highlight">0.80m</span>.`
    },
    KNEE_RECESS: {
        name: "KNEE RECESSES",
        range: {
            expression: "0.6 - 0.7",
            operator: ">=",
            numerator: 0.6,
            denominator: 0.7
        },
        unit: "meters",
    },
    VERTICAL_CLEARANCE: {
        name: "VERTICAL CLEARANCE",
        range: 	0.5,
        unit: "meters",
    },
    URINAL_HEIGHT_LIP: {
        num: 8.9,
        name: "URINAL HEIGHT OF THE LIP",
        range: {
            operator: "<=",
            value: 0.48
        },
        unit: "meters",
        desc: `Urinals should have an elongated lip or though type; the maximum height of the lip should be <span class="highlight">0.48m</span>.`
    }
}

export const STAIRS = {
    // should be equal
    TACTILE_STRIP_WIDTH: {
        num: 9.4,
        name: "TACTILE STRIP WIDTH",
        range: 0.3,
        unit: "meters",
        desc: `A tactile strip <span class="highlight">0.30m</span>. wide shall be installed before hazardous areas.`
    }
}

export const ELEVATORS = {
    LOCATION_FROM_ENTRANCE: {
        num: 10.1,
        name: "LOCATION FROM ENTRANCE",
        // range: "<=30",
        range: {
            operator: "<=",
            value: 30
        },
        unit: "meters",
        desc: `Accessible elevators should be located not more than <span class="highlight">30.00m</span>. from the entrance and should be easy to locate with the aid of signs`
    },
    ELEVATOR_DIMENSION: {
        num: 10.2,
        name: "ELEVATOR DIMENSION",
        // range: ">=1.1	x	>=1.4",
        range: {
            operator: ">=",
            numerator: 1.1,
            denominator: 1.4
        },
        unit: "meters",
        desc: `Accesible elevators shall have a minimum dimension of <span class="highlight">1.10m</span>. x <span class="highlight">1.40m</span>.`
    },
    CONTROL_PANEL_EMERGENCY_SYSTEM_LOCATION_FLOOR: {
        num: 10.3,
        name: "CONTROL PANEL/EMERGENCY SYSTEM LOCATION FROM FLOOR",
        // range: "0.9 - 1.2",
        range: {
            operator: " - ",
            numerator: 0.9,
            denominator: 1.2
        },
        unit: "meters",
        desc: `Centerline heights of control panels and emergency system for the to most buttons shall be between <span class="highlight">0.90m</span>. to <span class="highlight">1.20m</span>. from the floor.`
    },
    DIAMETER_ELEVATOR_BUTTONS: {
        num: 10.5,
        name: "DIAMETER OF ELEVATOR BUTTONS",
        range: {
            expression: ">=",
            operator: ">=",
            value: 20
        },
        unit: "milimeters",
        desc: `Button sizes at elevator control panels shall have a minimum diameter of <span class="highlight">20mm</span>.`
    },
    DEPTH_ELEVATOR_BUTTONS: {
        num: 10.5,
        name: "DEPTH OF ELEVATOR BUTTONS",
        range: {
            expression: "<=1",
            operator: "<=",
            value: 1
        },
        unit: "milimeters",
        desc: `Button sizes at elevator control panels should have a maximum depression depth of <span class="highlight">1mm</span>.`
    }	
}

export const WATER_FOUNTAINS = {
    LOCATION : {
        num: 11.1,
        name: "	LOCATION OF FOUNTAIN",
        // range: "1	EVERY	2, 000   input: number of fountains... input sqm value ",
        range: {
            value: 1
        },
        unit: "sq. meters",
        desc: `At least one (1) fountain shall be provided for every <span class="highlight">2,000 sq.m</span>. of floor area and there shall not be less than one (1) on each floor.`
    },
    WALL_MOUNTED : {
        num: 11.1,
        name: "	WALL-MOUNTED W.F. HEIGHT	",
        range: {
            operator: "<=",
            value: 0.85
        },
        unit: "meters",
        desc: `If wall-mounted, the maximum height of the water fountain shall be <span class="highlight">0.85m</span>. from the floor to the rim..`
    },
    FLOOR_MOUNTED : {
        num: 11.1,
        name: "	FLOOR-MOUNTED W.F. HEIGHT",
        range: {
            operator: ">",
            value: 0.85
        },
        unit: "meters",
        desc: `If floor-mounted, the height shall be higher that <span class="highlight">0.85m</span>. up to the rim.`
    }
}

export const PUBLIC_TELEPHONES = {
    SPACE_INFRONT : {
        num: 12.1,
        name: "SPACE INFRONT OF TELEPHONES",
        // 1.5	x	1.5	
        range: {
            operator: "==",
            value: 1.5
        },
        unit: "meters",
        desc: `Provide a clear, unobstructed space of <span class="highlight">1.50m</span>. x <span class="highlight">1.50m</span>. in front of wallmounted and free standing units.`
    },
    TELEPHONE: {
        num: 12.2,
        name: "TELEPHONE BOOTH DOOR WIDTH",
        range: {
            operator: ">=",
            value: 0.8
        },
        unit: "meters",
        desc: `Telephone booth door openings should have a minimum clear width of 0.80 m.`
    },
    COINS_SLOT: {
        num: 12.3,
        name: "COINS SLOT, DIALING CONTROLS ETC.",
        range: {
            operator: "<=",
            value: 1.1
        },
        unit: "meters",
        desc: `Coin slots, dialing controls, receivers and instructional signs shall be located at a maximum of <span class="highlight">1.10m</span> above the floor.
`
    },
}

export const PLACES_ASSEMBLY = {
    WHEELCHAIR_TURNABOUT_SPACE: {
        num: 13.1/7.3,
        name: "WHEELCHAIR TURNABOUT SPACE",
        range: 3.5	,
        unit: "meters",
        desc: ""
    },
    WHEELCHAIR_WIDTH: {
        num: 13.1,
        name: "WHEELCHAIR TURNABOUT SPACE",
        range: 0.6,
        unit: "meters",
        desc: ""
    },
    SPACEPERSON_BRACES_CRUTCHES: {
        num: 13.1/7.3,
        name: "SPACE/PERSON WITH BRACES OR CRUTCHES",
        range: 0.45	,
        unit: "meters",
        desc: ""
    },
}
