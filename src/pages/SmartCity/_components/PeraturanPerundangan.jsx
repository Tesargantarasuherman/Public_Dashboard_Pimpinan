import React from 'react'

function PeraturanPerundangan() {
    return (
        <>
            <h5 className='font-weight-bold'>Peraturan Perundangan</h5>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nomor</th>
                        <th scope="col">Judul</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>2021/PEG/XI</td>
                        <td>Peraturan Pegawai Nomor XI Tahun 2021</td>
                        <td>
                            <button type="button" class="btn bg-default text-light">Unduh</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>2021/PEG/XII</td>
                        <td>Peraturan Pegawai Nomor XII Tahun 2021</td>
                        <td>
                            <button type="button" class="btn bg-default text-light">Unduh</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>20212/PEG/XIV</td>
                        <td>Peraturan Pegawai Nomor XIV Tahun 2022</td>
                        <td>
                            <button type="button" class="btn bg-default text-light">Unduh</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PeraturanPerundangan