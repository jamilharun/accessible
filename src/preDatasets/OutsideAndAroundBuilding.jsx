export const Dropped_Curbs = {
    WIDTH:{
        num: 1.3,
        name: "WIDTH",
        range: {
            operator: ">=",
            value: 0.9
        },
        unit: "Meters",
        desc: `Dropped curbs at crossings have a width corresponding to the width of the crossing; otherwise, the minimum width is <p class="highlight"> 0.90m </p>.`
    },
    GRADIENT:{
        num: 1.4,
        name: "GRADIENT (TOWARDS ADJOINING CURBS)",
        range: "<=1:12",
        unit: "",
        desc: `Dropped curbs shall be ramped towards adjoining curbs with a gradient not more than <p class="highlight"> 1:12 </p>.`,
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
        desc: `Dropped curbs shall be sloped towards the road with a maximum cross gradient of <p class="highlight"> 1:20 </p> to prevent water from collecting at the walkway.`
    },
    LOWEST: {
        num: 1.6,
        name: "LOWEST POINT OF HEIGHT ABOVE THE ROAD OR GUTTER",
        range: {
            operator: ">=",
            value: 25
        },
        unit: "millimeters",
        desc: `The lowest point of a dropped curb should not exceed <p class="highlight"> 25mm </p> from the road or gutter.`
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
        desc: `The minimum width of a curb cut-out should be <p class="highlight"> 0.90m </p>.`
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
        desc: `Dropped curbs shall be ramped towards adjoining curbs with a gradient not more than <p class="highlight"> 1:12 </p>.`
    },
}

export const WALKWAYS_AND_PASSAGEWAYS = { 
    GRADIENT:{
        num: 3.2,
        name: "GRADIENT",
        range: "<=1:20 or 5%",
        unit: "",
        desc: `Walkways should have a gradient no more than <p class="highlight"> 1:20 </p> or <p class="highlight"> 5% </p>.`
    },
    CROSS_GRADIENT:{
        num: 3.2,
        name: "CROSS GRADIENT",
        range: "<=1:100	",
        unit: "",
        desc: "Walkways should have a maximum cross gradient of 1:100."
    },
    WIDTH: {
        num: 3.4,
        name: "WIDTH",
        range: ">=1.2",
        unit: "meters",
        desc: "Walkways should have a minimum width of 1.20 m."
    },
    GRATING_OPENINGS: {
        num: 3.5,
        name: "GRATING OPENINGS",
        range: "<=13	x	13",
        unit: "millimeters",
        desc: "When occurring along walkways, grating openings should have a maximum dimension of 13 mm x 13 mm"
    },
    PROJECTION: {
        num: 3.5,
        name: "	PROJECTION ABOVE OR BELOW THE LEVEL OF WALKWAY ",
        range: "<=6.5",
        unit: "millimeters",
        desc: "When occurring along walkways, grating openings shall not project more than 6.5 mm above the level of the walkway."
    },
    INTERRUPTION : {
        num: 3.6,
        name: "INTERRUPTION BY CRACKS OR BREAK",
        range: ">=6.5",
        unit: "millimeters",
        desc: "Walkways should have a continuing surface without abrupt pitches in angle or interruptions by cracks or breaks creating edges above 6.50 mm."
    },
    SPACES_IN_LENGTHY_BUSY_WALKWAYS: {
        DIMENSION:{
            num: 3.7,
            name: "SPACES IN LENGTHY OR BUSY WALKWAYS",
            range: ">=1.5",
            unit: "meters",
            desc: "In lengthy or busy walkways, spaces should have a minimum dimension of 1.50 m."
        },
        DISTANCE:{
            num: 3.7,
            name: "DISTANCE BETWEEN STOPS",
            range: "<=12",
            unit: "meters",
            desc: "In lengthy or busy walkways, spaces should be spaced at a maximum distance of 12 m between stops."
        }
    },
    ANGLE: {
        num: 3.8,
        name: "ANGLE OF TURNS",
        range: "(==)90",
        unit: "degrees",
        desc: "Walkways should as much as possible follow straightforward routes with right angle turns."
    },
    DIMENSION : {
        num: 3.10,
        name: "DIMENSION OF HEADROOM",
        range: ">=2",
        unit: "meters",
        desc: "Walkway headroom should not be less than 2.0 m and preferably higher."
    },
}

export const HANDRAILS = {
    HEIGHT: {
        num: 4.2,
        name: "HEIGHT ABOVE STEPS OR RAMPS",
        range: "(==)0.7	&	(==)0.9",
        unit: "meters",
        desc: "Handrails shall be installed at 0.90 m and 0.70 m above steps or ramps."
    },
    HANDRAILS: {
        num: 4.2,
        name: "HANDRAILS FOR PROTECTION AT GREAT HEIGHTS",
        range: "1 - 1.06",
        unit: "meters",
        desc: "Handrails for protection at great heights may be installed at 1.0 m to 1.06 m."
    },
    EXTENSION: {
        num: 4.3,
        name: "EXTENSION OF HANDRAIL AT THE START AND END OF RAMPS AND STAIRS",
        range: 30,
        unit: "meters",
        desc: "A.0.30 m long extension of the handrail should be provided at the start and end of ramps and stairs."
    },
    HANDRAILS_FULL_GRIP: {
        num: 4.4,
        name: "HANDRAILS THAT REQUIRE FULL GRIP	",
        range: "30 - 50",
        unit: "millimeters",
        desc: "Handrails that require full grip should have a dimension of 30 mm to 50 mm."
    },
    CLEARANCE_HANDRAILS_ATTACHED_WALLS: {
        num: 4.5,
        name: "HANDRAILS THAT REQUIRE FULL GRIP	",
        range: ">=50",
        unit: "millimeters",
        desc: "Handrails attached to walls should have a clearance no less than 50 mm from the wall,"
    },
    CLEARANCE_HANDRAILS_LEDGES: {
        num: 4.5,
        name: "HANDRAILS THAT REQUIRE FULL GRIP	",
        range: ">=40",
        unit: "millimeters",
        desc: "Handrails on ledges should have a clearance not less than 40 mm."
    },
}

export const SIGNAGES = {
    INTERNATIONAL: {
        num: 6.3,
        name: "INTERNATIONAL SYMBOL FOR ACCESS",
        desc: "The international symbol for access should be used to designate routes and facilities that are accessible.",
        a:{
            name: "A: Access Symbol",
            range: "(==)10	x	10",
            unit: "centimeters"
        },
        b:{
            name: "B: Phone	",
            range: "(==)15	x	15",
            unit: "centimeters"
        },
        c:{
            name: "C. Elevator",
            range: "(==)22	x	22",
            unit: "centimeters"
        },
        d:{
            name: "D. Parking",
            range: "(==)30	x	30",
            unit: "centimeters"
        },
        e:{
            name: "E. Ramp",
            range: "(==)60	x	60",
            unit: "centimeters"
        },
        f:{
            name: "",
            range: "(==)20	x	60",
            unit: "centimeters"
        },
    },
    DIMENSION:{
        num: 6.4,
        name: "DIMENSION OF HEADROOM	",
        range: ">=2",
        unit: "meters",
        desc: "Signs protrude into a walkway or route should provide a minimum headroom of 2.0 m,"
    },
    HEIGHT1:{
        num: 6.5,
        name: "HEIGHT OF SIGNS ON WALLS AND DOORS	",
        range: "<=1.4",
        unit: "meters",
        desc: "Signs on walls and doors should be located at a maximum height of 1.6 m."
    },
    HEIGHT2:{
        num: 6.5,
        name: "HEIGHT OF SIGNS ON WALLS AND DOORS	",
        range: ">=1.6",
        unit: "meters",
        desc: "Signs on walls and doors should be located at a minimum height of 1.4 m."
    },
    HEIGHT_SIGNAGES_SYMBOLS_LETTERS_NUMBERS:{
        num: 6.6,
        name: "HEIGHT OF SIGNAGES SHOULD HAVE RAISED SYMBOLS, LETTERS, OR NUMBERS",
        range: ">=1",
        unit: "millimeters",
        desc: "Signages labeling public rooms and places should have raised symbols, letters or numbers with minimum height of 1 mm."
    }
}

export const CROSSINGS = {
    DEPTH:{
        num: 7.1,
        name: "DEPTH OF CENTRAL REFUGES	",
        range: ">=1.5",
        unit: "meters",
        desc: "All at grade crossing should have central refuges of at least 1.5 m in depth and preferably 2.0 m."
    },
    WIDTH:{
        num: 7.1,
        name: "WIDTH OF THE CARRIAGEWAY	",
        range: ">=10",
        unit: "meters",
        desc: "All at grade crossing should have central refuges, provided as a midcrossing shelter with a width of carriageway to be crossed exceeds 10 m."
    },
    CROSSING_PERIOD:{
        num: 7.6,
        name: "CROSSING PERIOD",
        range: ">=6",
        unit: "seconds",
        desc: "The minimum period for the steady green (for pedestrians) should not be less than 6 seconds or the crossing distance times 0.90 m/sec, whichever is the greatest,"
    }
}
// https://docs.google.com/spreadsheets/d/1INlWvv3XZu0cRbJc4_uIpCUtVAQyAWQD/htmlview#
// https://www.canva.com/design/DAGD_gM834g/DGDd2V7q8IXYXf1p3uJ4UA/edit?fbclid=IwZXh0bgNhZW0CMTAAAR16Vpr7R04hkw_UfvS5fpafyxx5Gm204tw5RYOg7fWRGPIcYIxCjWeNqmM_aem_AQQiXM9iatg-bsCnit-REApzbzDqwpd0OeLXbgkKdM-8kmiHUQ8ji5FQsDg1QcoDdSpc3Gl1sYszDn-frGtTOzuw
