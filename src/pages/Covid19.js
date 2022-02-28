import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import IMG from '../img/information.png'
import moment from "moment";

function Covid19() {
    const [news, setNews] = useState([]);
    const [covid, setCovid] = useState([]);
    const [covidIndo, setCovidIndo] = useState([]);
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=3172d77d8b094821ac0c66afd307a87b`).then(res => {
            setNews(res.data.articles)
        })
        getCovidIndo()
        getCovid()
    }, [])
    const getCovid = () => {
        axios.get(`https://covid19.bandung.go.id/api/covid19bdg/v1/covidsummary/get`, {
            headers: {
                Authorization: 'RkplDPdGFxTSjARZkZUYi3FgRdakJy',
            }
        }).then(res => {
            console.log(res.data.data)
            setCovid(res.data.data)
        })
    }
    const getCovidIndo = () => {
        axios.get('https://data.covid19.go.id/public/api/update.json').then(res => {
            console.log(res.data.update.total)
            setCovidIndo(res.data.update.total)
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
                                        Pusat Informasi & Koordinasi Covid-19 Kota Bandung
                                    </h1>
                                    <p>
                                        Media komunikasi dan informasi penanganan Covid-19 satu pintu di Kota Bandung. Hadirkan data dan visualisasi perkembangan kasus terkini Covid-19. Dilengkapi ragam layanan kesehatan digital pendukung kedaruratan pandemi.
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
            <div className="py-4" style={{ backgroundColor: '#f1f2f6' }}>
                <h3 className='text-center'>Angka Kejadian Di Kota Bandung</h3>
                <p className='text-center'>Update Terakhir : {moment(covid.date).format("LL")}</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-2">
                            <div class="card bg-default" style={{ padding: '20px 10px', borderRadius: 5 }}>
                                <p className="label-default text-light">Total Konfirmasi</p>
                                <p>Kota Bandung</p>
                                <h3>{covid?.positif?.toLocaleString()}</h3>
                                <p>{covid.dpositif > 0 ? "+" : ""} {covid?.dpositif?.toLocaleString()}</p>
                                <p>Indonesia</p>
                                <h3>{covidIndo?.jumlah_positif?.toLocaleString()}</h3>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div class="card bg-default" style={{ padding: '20px 10px', borderRadius: 5 }}>
                                <p className="label-default text-light">Konfirmasi Aktif</p>
                                <p>Kota Bandung</p>
                                <h3>{covid?.positif_dirawat?.toLocaleString()}</h3>
                                <p>{covid.daktif > 0 ? "+" : ""} {covid?.daktif?.toLocaleString()}</p>
                                <p>Indonesia</p>
                                <h3>{covidIndo?.jumlah_dirawat?.toLocaleString()}</h3>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div class="card bg-default" style={{ padding: '20px 10px', borderRadius: 5 }}>
                                <p className="label-default text-light">Konfirmasi Sembuh</p>
                                <p>Kota Bandung</p>
                                <h3>{covid?.sembuh?.toLocaleString()}</h3>
                                <p>{covid.dsembuh > 0 ? "+" : ""} {covid?.dsembuh?.toLocaleString()}</p>
                                <p>Indonesia</p>
                                <h3>{covidIndo?.jumlah_sembuh?.toLocaleString()}</h3>
                            </div>
                        </div>
                        <div className="col-md-3 mb-2">
                            <div class="card bg-default" style={{ padding: '20px 10px', borderRadius: 5 }}>
                                <p className="label-default text-light">Konfirmasi Meninggal</p>
                                <p>Kota Bandung</p>
                                <h3>{covid?.meninggal?.toLocaleString()}</h3>
                                <p>{covid.dmeninggal > 0 ? "+" : ""} {covid?.dmeninggal?.toLocaleString()}</p>
                                <p>Indonesia</p>
                                <h3>{covidIndo?.jumlah_meninggal?.toLocaleString()}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Covid19