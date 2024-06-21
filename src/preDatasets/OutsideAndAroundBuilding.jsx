export const Dropped_Curbs = {
    WIDTH:{
        num: 1.3,
        name: "WIDTH",
        range: {
            operator: ">=",
            value: 0.9
        },
        unit: "meters",
        desc: `Dropped curbs at crossings have a width corresponding to the width of the crossing; otherwise, the minimum width is <span  class="highlight">0.90m</span >.`
    },
    GRADIENT:{
        num: 1.4,
        name: "GRADIENT (TOWARDS ADJOINING CURBS)",
        range: "<=1:12",
        unit: "",
        desc: `Dropped curbs shall be ramped towards adjoining curbs with a gradient not more than <span class="highlight">1:12</span>.`,
        parsedRange: {
            operator: "<=",
            numerator: 1,
            denominator: 12
        }
    },
    MAXIMUM: {
        num: 1.5,
        name: "MAXIMUM CROSS GRADIENT (SLOPED TOWARDS THE ROAD)",
        range: "<=1:20",
        parsedRange: {
            operator: "<=",
            numerator: 1,
            denominator: 20
        },
        unit: "",
        desc: `Dropped curbs shall be sloped towards the road with a maximum cross gradient of <span  class="highlight">1:20</span > to prevent water from collecting at the walkway.`
    },
    LOWEST: {
        num: 1.6,
        name: "LOWEST POINT OF HEIGHT ABOVE THE ROAD OR GUTTER",
        range: {
            operator: ">=",
            value: 25
        },
        unit: "millimeters",
        desc: `The lowest point of a dropped curb should not exceed <span  class="highlight">25mm</span > from the road or gutter.`
    }
}

export const Curb_CutOuts = { 
    WIDTH: {
        num: 2.2,
        name: "WIDTH",
        range: {
            operator: ">=",
            value: 0.9
        },
        unit: "meters",
        desc: `The minimum width of a curb cut-out should be <span class="highlight">0.90m</span>.`
    },
    GRADIENT:{
        num: 2.3,
        name: "GRADIENT",
        range: "<=1:12",
        parsedRange: {
            operator: "<=",
            numerator: 1,
            denominator: 12
        },
        unit: "",
        desc: `Dropped curbs shall be ramped towards adjoining curbs with a gradient not more than <span class="highlight">1:12 </span>.`
    },
}

export const WALKWAYS_AND_PASSAGEWAYS = { 
    GRADIENT: {
        num: 3.2,
        name: "GRADIENT",
        range: "<=1:20 or 5%",
        unit: "",
        desc: `Walkways should have a gradient no more than <span class="highlight"> 1:20 </span> or <span class="highlight"> 5%</span>.`,
        parsedRange: {
            ratio: {
                operator: "<=",
                numerator: 1,
                denominator: 20
            },
            percentage: 5
        }
    },
    CROSS_GRADIENT:{
        num: 3.2,
        name: "CROSS GRADIENT",
        range: "<=1:100	",
        parsedRange: {
            operator: "<=",
            numerator: 1,
            denominator: 100
        },
        unit: "",
        desc: `Walkways should have a maximum cross gradient of <span class="highlight">1:100</span>.`
    },
    WIDTH: {
        num: 3.4,
        name: "WIDTH",
        range: {
            operator: ">=",
            value: 1.2
        },
        unit: "meters",
        desc: `Walkways should have a minimum width of <span class="highlight">1.20m</span>.`
    },
    GRATING_OPENINGS: {
        num: 3.5,
        name: "GRATING OPENINGS",
        range: {
            operator: "<=",
            width: 13,
            height: 13,
        },
        unit: "millimeters",
        desc: `When occurring along walkways, grating openings should have a maximum dimension of <span class="highlight">13mm</span> x <span class="highlight">13mm</span>.`
    },
    PROJECTION: {
        num: 3.5,
        name: "	PROJECTION ABOVE OR BELOW THE LEVEL OF WALKWAY ",
        range: {
            operator: "<=",
            value: 6.5
        },
        unit: "millimeters",
        desc: `When occurring along walkways, grating openings shall not project more than <span class="highlight">6.5mm</span> above the level of the walkway.`
    },
    INTERRUPTION : {
        num: 3.6,
        name: "INTERRUPTION BY CRACKS OR BREAK",
        range: {
            operator: ">=",
            value: 6.5
        },
        unit: "millimeters",
        desc: `Walkways should have a continuing surface without abrupt pitches in angle or interruptions by cracks or breaks creating edges above <span class="highlight">6.50mm</span>.`
    },
    SPACES_IN_LENGTHY_BUSY_WALKWAYS: {
        DIMENSION: {
            num: 3.7,
            name: "Dimension",
            range: {
                operator: ">=",
                value: 1.5
            },
            unit: "meters",
            desc: `In lengthy or busy walkways, spaces should have a minimum dimension of <span class="highlight">1.50m</span>.`
        },
        DISTANCE: {
            num: 3.7,
            name: "DISTANCE BETWEEN STOPS",
            range: {
                operator: "<=",
                value: 12
            },
            unit: "meters",
            desc: `In lengthy or busy walkways, spaces should be spaced at a maximum distance of <span class="highlight">12m</span> between stops.`
        }
    },
    ANGLE: {
        num: 3.8,
        name: "ANGLE OF TURNS",
        range: {
            operator: "(==)",
            value: 90
        },
        unit: "degrees",
        desc: "Walkways should as much as possible follow straightforward routes with right angle turns."
    },
    DIMENSION : {
        num: 3.10,
        name: "DIMENSION OF HEADROOM",
        range: {
            operator: ">=",
            value: 2
        },
        unit: "meters",
        desc: `Walkway headroom should not be less than <span class="highlight">2.0m</span> and preferably higher.`
    },
}

export const HANDRAILS = {
    HEIGHT: {
        num: 4.2,
        name: "HEIGHT ABOVE STEPS OR RAMPS",
        range: "(==)0.7	&	(==)0.9",
        parsedRange: {
            numerator: 0.7,
            denominator: 0.9
        },
        unit: "meters",
        desc: `Handrails shall be installed at <span class="highlight">0.90m</span> and <span class="highlight">0.70m</span> above steps or ramps.`
    },
    HANDRAILS: {
        num: 4.2,
        name: "HANDRAILS FOR PROTECTION AT GREAT HEIGHTS",
        range: "1 - 1.06",
        parsedRange: {
            operator: "min max",
            numerator: 1,
            denominator: 1.06
        },
        unit: "meters",
        desc: `Handrails for protection at great heights may be installed at <span class="highlight">1.0m</span> to <span class="highlight">1.06m</span>.`
    },
    EXTENSION: {
        num: 4.3,
        name: "EXTENSION OF HANDRAIL AT THE START AND END OF RAMPS AND STAIRS",
        // range: "(==)30",
        range: {
            operator: "==",
            value: 30
        },
        unit: "meters",
        desc: `A.<span class="highlight">0.30</span> long extension of the handrail should be provided at the start and end of ramps and stairs.`
    },
    HANDRAILS_FULL_GRIP: {
        num: 4.4,
        name: "HANDRAILS THAT REQUIRE FULL GRIP	",
        range: "30 - 50",
        parsedRange: {
            operator: "min max",
            numerator: 30,
            denominator: 50
        },
        unit: "millimeters",
        desc: `Handrails that require full grip should have a dimension of <span class="highlight">30mm</span> to <span class="highlight">50mm</span>.`
    },
    CLEARANCE_HANDRAILS_ATTACHED_WALLS: {
        num: 4.5,
        name: "CLEARANCE OF HANDRAILS ATTACHED TO WALLS	",
        // range: ">=50",
        range: {
            operator: ">=",
            value: 50
        },
        unit: "millimeters",
        desc: `Handrails attached to walls should have a clearance no less than <span class="highlight">50mm</span> from the wall.`
    },
    CLEARANCE_HANDRAILS_LEDGES: {
        num: 4.5,
        name: "CLEARANCE OF HANDRAILS ON LEDGES	",
        // range: ">=40",
        range: {
            operator: ">=",
            value: 40
        },
        unit: "millimeters",
        desc: `Handrails on ledges should have a clearance not less than <span class="highlight">40mm</span>.`
    },
}

export const SIGNAGES = {
    INTERNATIONAL: {
        num: 6.3,
        name: "INTERNATIONAL SYMBOL FOR ACCESS",
        desc: "The international symbol for access should be used to designate routes and facilities that are accessible.",
        a:{
            name: "A: Access Symbol",
            // range: "(==)10	x	10",
            range: {
                operator: "==",
                value: 10
            },
            unit: "centimeters"
        },
        b:{
            name: "B: Phone	",
            // range: "(==)15	x	15",
            range: {
                operator: "==",
                value: 15
            },
            unit: "centimeters"
        },
        c:{
            name: "C. Elevator",
            // range: "(==)22	x	22",
            range: {
                operator: "==",
                value: 22
            },
            unit: "centimeters"
        },
        d:{
            name: "D. Parking",
            // range: "(==)30	x	30",
            range: {
                operator: "==",
                value: 30
            },
            unit: "centimeters"
        },
        e:{
            name: "E. Ramp",
            // range: "(==)60	x	60",
            range: {
                operator: "==",
                value: 60
            },
            unit: "centimeters"
        },
        f:{
            name: "",
            // range: "(==)20	x	60",
            range: {
                operator: "==",
                numerator: 20,
                denominator: 60
            },
            unit: "centimeters"
        },
    },
    DIMENSION:{
        num: 6.4,
        name: "DIMENSION OF HEADROOM	",
        range: {
            operator: ">=",
            value: 2
        },
        unit: "meters",
        desc: `Signs protrude into a walkway or route should provide a minimum headroom of <span class="highlight">2.0m</span>.`
    },
    HEIGHT1:{
        num: 6.5,
        name: "HEIGHT OF SIGNS ON WALLS AND DOORS	",
        range: {
            operator: "<=",
            value: 1.4
        },
        unit: "meters",
        desc: `Signs on walls and doors should be located at a maximum height of <span class="highlight">1.6m</span>.`
    },
    HEIGHT2:{
        num: 6.5,
        name: "HEIGHT OF SIGNS ON WALLS AND DOORS	",
        range: {
            operator: ">=",
            value: 1.6
        },
        unit: "meters",
        desc: `Signs on walls and doors should be located at a minimum height of <span class="highlight">1.4m</span>.`
    },
    HEIGHT_SIGNAGES_SYMBOLS_LETTERS_NUMBERS:{
        num: 6.6,
        name: "HEIGHT OF SIGNAGES SHOULD HAVE RAISED SYMBOLS, LETTERS, OR NUMBERS",
        range: {
            operator: ">=",
            value: 1
        },
        unit: "millimeters",
        desc: `Signages labeling public rooms and places should have raised symbols, letters or numbers with minimum height of <span class="highlight">1mm</span>.`
    }
}

export const CROSSINGS = {
    DEPTH: {
        num: 7.1,
        name: "DEPTH OF CENTRAL REFUGES	",
        range: {
            operator: ">=",
            value: 1.5
        },
        unit: "meters",
        desc: `All at grade crossing should have central refuges of at least <span class="highlight">1.5m</span> in depth and preferably <span class="highlight">2.0m</span>.`
    },
    WIDTH: {
        num: 7.1,
        name: "WIDTH OF THE CARRIAGEWAY	",
        range: {
            operator: ">=",
            value: 10
        },
        unit: "meters",
        desc: `All at grade crossing should have central refuges, provided as a midcrossing shelter with a width of carriageway to be crossed exceeds <span class="highlight">10m</span>.`
    },
    CROSSING_PERIOD: {
        num: 7.6,
        name: "CROSSING PERIOD",
        range: {
            operator: ">=",
            value: 6
        },
        unit: "seconds",
        desc: `The minimum period for the steady green (for pedestrians) should not be less than <span class="highlight">6</span> seconds or the crossing distance times <span class="highlight">0.90m/sec</span>, whichever is the greatest.`
    }
}
// https://docs.google.com/spreadsheets/d/1INlWvv3XZu0cRbJc4_uIpCUtVAQyAWQD/htmlview#
// https://www.canva.com/design/DAGD_gM834g/DGDd2V7q8IXYXf1p3uJ4UA/edit?fbclid=IwZXh0bgNhZW0CMTAAAR16Vpr7R04hkw_UfvS5fpafyxx5Gm204tw5RYOg7fWRGPIcYIxCjWeNqmM_aem_AQQiXM9iatg-bsCnit-REApzbzDqwpd0OeLXbgkKdM-8kmiHUQ8ji5FQsDg1QcoDdSpc3Gl1sYszDn-frGtTOzuw
