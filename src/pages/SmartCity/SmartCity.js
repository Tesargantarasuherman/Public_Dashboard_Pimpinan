import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import IMG from '../../img/city.svg'
import moment from "moment";
import PeraturanPerundangan from './_components/PeraturanPerundangan';
import DewanSmartCity from './_components/DewanSmartCity';
import NilaiSmartCity from './_components/NilaiSmartCity';
function SmartCity() {
    const [active, setActive] = useState({ active: 'peraturan perundangan' });
    const renderSwitch = (active) => {
        switch (active) {
            case "peraturan perundangan":
                return (
                    <PeraturanPerundangan />
                );
            case "dewan smart city":
                return (
                    <DewanSmartCity />
                );
            case "nilai smart city":
                return (
                    <NilaiSmartCity />
                );
            default:
                return (
                    <PeraturanPerundangan />
                );
        }
    };
    return (
        <div className="p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center" style={{ minHeight: 400 }}>
                            <div>
                                <h1>
                                    Smart City Kota Bandung
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={IMG} alt="" srcset="" height={400} className="d-none d-sm-none d-md-block" />
                    </div>
                </div>
            </div>
            <div className="container my-4" style={{ minHeight: 400 }}>
                <div className="d-flex justify-content-between my-4">
                    <button type="button" class="btn bg-default actived text-light" onClick={() => setActive({ active: "peraturan perundangan" })}>Peraturan Perundangan</button>
                    <button type="button" class="btn bg-default text-light" onClick={() => setActive({ active: "dewan smart city" })}>Dewan Smart City</button>
                    <button type="button" class="btn bg-default text-light" onClick={() => setActive({ active: "nilai smart city" })}>Nilai Smart City / Tahun </button>
                    <button type="button" class="btn bg-default text-light">Dimensi Smart City</button>
                    <button type="button" class="btn bg-default text-light">Master Plan Smart City</button>
                </div>
                <div className="content">
                    {renderSwitch(active.active)}

                </div>

            </div>

        </div>
    )
}

export default SmartCity