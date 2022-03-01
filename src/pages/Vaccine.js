import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import IMG from '../img/medical.svg'
import moment from "moment";

function Vaccine() {
    const [vaksin, setVaksin] = useState([]);
    const [vaksin1, setVaksin1] = useState([]);
    const [vaksin2, setVaksin2] = useState([]);
    const [vaksin3, setVaksin3] = useState([]);
    useEffect(() => {
        getVaksin()
    }, [])
    const getVaksin = () => {
        axios.get(`http://data.bandung.go.id/service/index.php/vaksinasi/terkini`).then(res => {
            console.log('res', res.data)
            setVaksin(res.data)
            setVaksin1(res.data.data[0])
            setVaksin2(res.data.data[1])
            setVaksin3(res.data.data[2])

        })
    }
    return (
        <>
            <div className="p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex align-items-center">
                                <div>
                                    <h1>
                                        Pusat Informasi & Koordinasi Vaksin Kota Bandung
                                    </h1>
                                    <p>
                                        Media komunikasi dan informasi penanganan Vaksin satu pintu di Kota Bandung. Hadirkan data dan visualisasi perkembangan kasus terkini Covid-19. Dilengkapi ragam layanan kesehatan digital pendukung kedaruratan pandemi.
                                    </p>
                                    <button type="button" class="btn btn-info">Selengkpanya</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={IMG} alt="" srcset="" height={400} className="d-none d-sm-none d-md-block" />
                        </div>
                    </div>
                </div>

            </div>
            <div style={{ backgroundColor: '#f1f2f6' }} className="py-2">
                <div className="container bg-default" style={{ borderRadius: 10 }}>
                    <div className="row  px-2 mt-4 py-2 border border-light shape-rounded">
                        <div className="mt-2 mb-4 d-flex justify-content-center">
                            <h2 className="font-weight-bold text-light font-medium">
                                UPDATE VAKSINASI COVID-19
                                <div
                                    style={{ fontSize: 16, marginLeft: 0, marginTop: 10 }}
                                    className="font-weight-bold font-medium"
                                >
                                    KOTA BANDUNG
                                </div>
                            </h2>
                        </div>
                        <div className="col-md-12 w-100 border border-light pt-5 shape-rounded">
                            <div className="bg-7 tanggal-vaksin shape-rounded">
                                <h6 className="text-center font-weight-bold font-update"> UPDATE : {moment(vaksin.date).format("LL")}</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="w-25 width-mobile-50 px-2 bg-1 shape-rounded d-flex justify-content-center align-items-center card-sasaran">
                                    <div>
                                        <div className="text-center font-weight-bold font-medium"> TOTAL SASARAN</div>
                                        <div className="text-center font-weight-bold font-big"> {vaksin.total_vaksinasi1 + vaksin.total_vaksinasi2 + vaksin.total_vaksinasi3}</div>
                                    </div>
                                </div>
                                <div className="w-75 width-mobile-50 px-2">
                                    <div className="bg-1 rounded p-2 mb-2">
                                        <div className="text-center font-weight-bold font-medium"> SASARAN YANG TELAH DI VAKSIN</div>
                                    </div>
                                    <div class="card-deck">
                                        <div className="card bg-1">
                                            <div className="card-body text-center">
                                                <div className="text-sasaran font-weight-bold">Total Vaksin 1</div>
                                                <div className=" font-weight-bold nilai-sasaran">{vaksin.total_vaksinasi1}</div>
                                            </div>
                                        </div>
                                        <div className="card bg-1">
                                            <div className="card-body text-center">
                                                <div className="text-sasaran font-weight-bold">Total Vaksin 2</div>
                                                <div className=" font-weight-bold nilai-sasaran">{vaksin.total_vaksinasi2}</div>
                                            </div>
                                        </div>
                                        <div className="card bg-1">
                                            <div className="card-body text-center">
                                                <div className="text-sasaran font-weight-bold">Total Vaksin 3</div>
                                                <div className=" font-weight-bold nilai-sasaran">{vaksin.total_vaksinasi3}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="d-flex justify-content-between my-2">
                                <div className="w-25 width-mobile-50 px-4 bg-2 shape-rounded d-flex justify-content-center align-items-center  body-nomor-sasaran card-sasaran">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h6 className="nomor-sasaran color-2 bg-2">1</h6>
                                            <h6 className="text-center font-weight-bold font-mobile-sm"> SDM Kesehatan</h6>
                                        </div>
                                        <div className="col-md-12 ">
                                            <div class="border-card d-flex justify-content-between">
                                                <div className="text-sasaran align-self-center mt-2 mr-2">Sasaran </div>
                                                <div className="nilai-sasaran align-self-center">{vaksin.sasaran_nakes}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-75 width-mobile-50 px-2">
                                    <div class="card-deck">

                                        <div className="card bg-2">
                                            <div className="card-body text-center">
                                                <h6 className="total-vaksin font-weight-bold">Vaksin 1</h6>
                                                <div className="nilai-total-vaksin font-weight-bold nilai-sasaran">{vaksin1.vaksin_nakes}</div>
                                            </div>
                                        </div>
                                        <div className="card bg-2">
                                            <div className="card-body text-center">
                                                <h6 className="total-vaksin font-weight-bold">Vaksin 2</h6>
                                                <div className="nilai-total-vaksin font-weight-bold nilai-sasaran">{vaksin2.vaksin_nakes}</div>
                                            </div>
                                        </div>
                                        <div className="card bg-2">
                                            <div className="card-body text-center">
                                                <h6 className="total-vaksin font-weight-bold">Vaksin 3</h6>
                                                <div className="nilai-total-vaksin font-weight-bold nilai-sasaran">{vaksin3.vaksin_nakes}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="d-flex justify-content-between my-2">
                                <div className="w-25 width-mobile-50 px-4 bg-3 shape-rounded d-flex justify-content-center align-items-center  body-nomor-sasaran card-sasaran">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h6 className="nomor-sasaran color-3 bg-3">2</h6>
                                            <h6 className="text-center font-weight-bold font-mobile-sm"> Petugas Publik</h6>
                                        </div>
                                        <div className="col-md-12 ">
                                            <div class="border-card d-flex justify-content-between">
                                                <div className="text-sasaran align-self-center mt-2 mr-2">Sasaran </div>
                                                <div className="nilai-sasaran align-self-center">{vaksin.sasaran_petugas_publik}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-75 width-mobile-50 px-2">
                                    <div class="card-deck">

                                        <div className="card bg-3">
                                            <div className="card-body text-center">
                                                <h6 className="card-title font-weight-bold">Vaksin 1</h6>
                                                <p className="card-text font-weight-bold">{vaksin1.vaksin_petugas_publik}</p>
                                            </div>
                                        </div>
                                        <div className="card bg-3">
                                            <div className="card-body text-center">
                                                <h6 className="card-title font-weight-bold">Vaksin 2</h6>
                                                <p className="card-text font-weight-bold">{vaksin2.vaksin_petugas_publik}</p>
                                            </div>
                                        </div>
                                        <div className="card bg-3">
                                            <div className="card-body text-center">
                                                <h6 className="card-title font-weight-bold">Vaksin 3</h6>
                                                <p className="card-text font-weight-bold">{vaksin3.vaksin_petugas_publik}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="d-flex justify-content-between my-2">
                                <div className="w-25 width-mobile-50 px-4 bg-4 shape-rounded d-flex justify-content-center align-items-center  body-nomor-sasaran card-sasaran">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h6 className="nomor-sasaran color-4 bg-4">3</h6>
                                            <h6 className="text-center font-weight-bold font-mobile-sm"> Lanjut Usia</h6>
                                        </div>
                                        <div className="col-md-12 ">
                                            <div class="border-card d-flex justify-content-between">
                                                <div className="text-sasaran align-self-center mt-2 mr-2">Sasaran </div>
                                                <div className="nilai-sasaran align-self-center">{vaksin.sasaran_lansia}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-75 width-mobile-50 px-2">
                                    <div class="card-deck">

                                        <div className="card bg-4">
                                            <div className="card-body text-center">
                                                <h6 className="card-title font-weight-bold">Vaksin 1</h6>
                                                <p className="card-text font-weight-bold">{vaksin1.vaksin_lansia}</p>
                                            </div>
                                        </div>
                                        <div className="card bg-4">
                                            <div className="card-body text-center">
                                                <h6 className="card-title font-weight-bold">Vaksin 2</h6>
                                                <p className="card-text font-weight-bold">{vaksin2.vaksin_lansia}</p>
                                            </div>
                                        </div>
                                        <div className="card bg-4">
                                            <div className="card-body text-center">
                                                <h6 className="card-title font-weight-bold">Vaksin 3</h6>
                                                <p className="card-text font-weight-bold">{vaksin3.vaksin_lansia}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="d-flex justify-content-between my-2">
                                <div className="w-25 width-mobile-50 px-4 bg-5 shape-rounded d-flex justify-content-center align-items-center  body-nomor-sasaran card-sasaran">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h6 className="nomor-sasaran color-5 bg-5">4</h6>
                                            <h6 className="text-center font-weight-bold font-mobile-sm"> Masy. Rentan & Umum</h6>
                                        </div>
                                        <div className="col-md-12 ">
                                            <div class="border-card d-flex justify-content-between">
                                                <div className="text-sasaran align-self-center mt-2 mr-2">Sasaran </div>
                                                <div className="nilai-sasaran align-self-center">{vaksin.sasaran_masyarakat}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-75 width-mobile-50 px-2">
                                    <div class="card-deck">

                                        <div className="card bg-5">
                                            <div className="card-body text-center">
                                                <h6 className="card-title font-weight-bold">Vaksin 1</h6>
                                                <p className="card-text font-weight-bold">{vaksin1.vaksin_masyarakat}</p>
                                            </div>
                                        </div>
                                        <div className="card bg-5">
                                            <div className="card-body text-center">
                                                <h6 className="card-title font-weight-bold">Vaksin 2</h6>
                                                <p className="card-text font-weight-bold">{vaksin2.vaksin_masyarakat}</p>
                                            </div>
                                        </div>
                                        <div className="card bg-5">
                                            <div className="card-body text-center">
                                                <h6 className="card-title font-weight-bold">Vaksin 3</h6>
                                                <p className="card-text font-weight-bold">{vaksin3.vaksin_masyarakat}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="d-flex justify-content-between my-2">
                                <div className="w-25 width-mobile-50 px-4 bg-6 shape-rounded d-flex justify-content-center align-items-center  body-nomor-sasaran card-sasaran">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h6 className="nomor-sasaran color-6 bg-6">5</h6>
                                            <h6 className="text-center font-weight-bold font-mobile-sm"> Remaja</h6>
                                        </div>
                                        <div className="col-md-12 ">
                                            <div class="border-card d-flex justify-content-between">
                                                <div className="text-sasaran align-self-center mt-2 mr-2">Sasaran </div>
                                                <div className="nilai-sasaran align-self-center">{vaksin.sasaran_remaja}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-75 width-mobile-50 px-2">
                                    <div class="card-deck">

                                        <div className="card bg-6">
                                            <div className="card-body text-center">
                                                <h6 className="card-title font-weight-bold">Vaksin 1</h6>
                                                <p className="card-text font-weight-bold">{vaksin1.vaksin_remaja}</p>
                                            </div>
                                        </div>
                                        <div className="card bg-6">
                                            <div className="card-body text-center">
                                                <h6 className="card-title font-weight-bold">Vaksin 2</h6>
                                                <p className="card-text font-weight-bold">{vaksin2.vaksin_remaja}</p>
                                            </div>
                                        </div>
                                        <div className="card bg-6">
                                            <div className="card-body text-center">
                                                <h6 className="card-title font-weight-bold">Vaksin 3</h6>
                                                <p className="card-text font-weight-bold">{vaksin3.vaksin_remaja}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                        <div className="py-2 d-flex justify-content-between w-100">
                            <div>
                                <h6 className="card-title font-weight-bold font-mobile-sm">Sumber Data: {vaksin.Sumber}</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Vaccine