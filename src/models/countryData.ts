export class StateData {
    constructor(
        public StateName: string,
        public MalePatients: number,
        public FemalePatients: number,
        public MaleriaPatients: number,
        public DenguePatients: number,
        public CancerPatients: number,
        public Flue: number
    ) { }

    [key: string]: any;
}

export class CountryData {
    constructor(
        public CountryName: string,
        public Patients: Array<StateData>
    ) { }

    [key: string]: any;
}

export class Countries {
    constructor(
        public Countries: Array<CountryData>
    ) { }

    [key: string]: any;
}

