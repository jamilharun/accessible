export const FENCING = {
    TOP_RAIL: {
        num: 1.1,
        name: "TOP RAIL ABOVE THE ADJACENT SURFACE",
        range: {
            operator: ">=",
            value: 1
        },
        unit: "meters",
        desc: `The height of the top of the rail should be at least <span class="highlight">1.00m</span>. above the adjacent surface.`
    },
    TAPPING_RAIL: {
        num: 1.2,
        name: "TAPPING RAIL ABOVE THE ADJACENT SURFACE	",
        range: {
            operator: "<=",
            value: 0.35
        },
        unit: "meters",
        desc: `The railing should incorporate a tapping rail to assist the blind, and this shoud not be greater than <span class="highlight">0.35m</span>. above the adjacent surface.`
    },
}

export const COVERS = {
    EFFECTIVE : {
        num: "2.3.1",
        name: "EFFECTIVE WIDTH OF FOOTWAYS	",
        range: {
            operator: ">=",
            value: 1.2
        },
        unit: "meters",
        desc: `Effective width of footways past any obstructin should not be less than <span class="highlight">1.20m</span>.`
    },
    KICKBOARD  : {
        num: "2.3.2",
        name: "KICKBOARD HEIGHT	",
        range: {
            operator: ">=",
            value: 0.2
        },
        unit: "meters",
        desc: `Kickboard should at least <span class="highlight">0.20m</span>. high that will serve as a tapping board for the blind.`
    },
}

export const SIGNAGE = {
    AVAILABLE   : {
        num: "3.1.2",
        name: "AVAILABLE FOOTWAY WIDTH	",
        range: {
            operator: ">=",
            value: 1.2
        },
        unit: "meters",
        desc: `Signs should not reduce the available footway width to less than <span class="highlight">1.20m</span>.`
    },
}