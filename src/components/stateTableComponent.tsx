import React from "react";
import { StateData } from "../models/countryData";

interface StateTableComponentProps {
    editState: (stateData: StateData) => void;
    states: Array<StateData>;
}

interface StateTableComponentState {

}

class StateTableComponent extends React.Component<StateTableComponentProps, StateTableComponentState> {

    render() {
        return (

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <td>State Name</td>
                        <td>Male Patients</td>
                        <td>Female Patients</td>
                        <td>Maleria Patients</td>
                        <td>Dengue Patients</td>
                        <td>Cancer Patients</td>
                        <td>Flue Patients</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.states.map((p, i) => (
                        <tr key={i} onClick={() => this.props.editState(p)}
                            className={p.MalePatients >= 1000 || p.FemalePatients >= 1000 ||
                                p.MaleriaPatients >= 1000 || p.DenguePatients >= 1000 ||
                                p.CancerPatients >= 1000 || p.Flue >= 1000
                                ?
                                "col-warning" : ""}
                        >
                            <td>{p.StateName}</td>
                            <td>{p.MalePatients}</td>
                            <td>{p.FemalePatients}</td>
                            <td>{p.MaleriaPatients}</td>
                            <td>{p.DenguePatients}</td>
                            <td>{p.CancerPatients}</td>
                            <td>{p.Flue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default StateTableComponent;