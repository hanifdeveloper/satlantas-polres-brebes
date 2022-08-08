/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { StepperNav } from 'vertical-stepper-nav';
import styles from './BPKBCheck.module.css';

export default function BPKBCheck() {
  const [modal, setModal] = React.useState(false);
  const [timeModal, setTimeModal] = React.useState(false);
  const [queueModal, setQueueModal] = React.useState(false);
  const [dateValue, setDateValue] = React.useState(null);
  const [timeValue, setTimeValue] = React.useState(null);
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);

  const [resultBPKB, setResultBPKB] = React.useState({});

  const [nopol1, setNopol1] = React.useState('');
  const [nopol2, setNopol2] = React.useState('');
  const [nopol3, setNopol3] = React.useState('');
  const [submit, setSubmit] = React.useState(false);

  const dataBPKB = [
    {
      nopol: 'G-5557-PG',
      name: 'Kasmuni Bin Wastam',
      process: 'Mutasi Datang',
      steps: [
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                1 Apr 2022, 15:14 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                Berkas Terregister
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                1 Apr 2022, 10:21 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                Verifikasi berkas
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                1 Apr 2022, 16:20 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                BPKB tercetak
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
      ].reverse(),
    },
    {
      nopol: 'G-1577-GR',
      name: 'M. Setiabudi',
      process: 'Ganti Pemilik',
      steps: [
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                1 Apr 2022, 15:14 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                Berkas Terregister
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                1 Apr 2022, 10:21 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                Verifikasi berkas
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                1 Apr 2022, 16:20 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                BPKB tercetak
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                2 Apr 2022, 10:20 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                Menunggu pickup
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                2 Apr 2022, 16:10 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                BPKB telah di pickup oleh PT Pos Indonesia
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
      ].reverse(),
    },
    {
      nopol: 'G-5595-UU',
      name: 'Lisna Fitriani',
      process: 'Rubah Warna',
      steps: [
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                1 Apr 2022, 15:14 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                Berkas Terregister
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                1 Apr 2022, 10:21 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                Verifikasi berkas
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                1 Apr 2022, 16:20 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                BPKB tercetak
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                2 Apr 2022, 10:20 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                Menunggu pickup
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                2 Apr 2022, 16:10 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                BPKB telah di pickup oleh PT Pos Indonesia
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                2 Apr 2022, 19:10 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                POATING LOKET : BREBES 52212
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                3 Apr 2022, 10:05 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                PROSES ANTAR : BREBES 52212
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
        {
          stepContent: () => (
            <div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 70,
              }}
              >
                3 Apr 2022, 19:25 WIB
              </div>
              <div style={{
                fontSize: 14, position: 'absolute', left: 250,
              }}
              >
                SELESAI ANTAR : BREBES 52276 : STATUS : Diri Sendiri
              </div>
            </div>
          ),
          stepStatusCircleSize: 22,
          stepStateColor: '#0094FF',
        },
      ].reverse(),
    },
  ];

  const result = `${nopol1}-${nopol2}-${nopol3}`;

  const handleOnChange1 = (e) => {
    setNopol1(e.target.value);
  };

  const handleOnChange2 = (e) => {
    setNopol2(e.target.value);
  };

  const handleOnChange3 = (e) => {
    setNopol3(e.target.value);
  };

  const handleOnChangeDate = (e) => {
    setDateValue(e.target.value);
  };

  const handleOnChangeTime = (e) => {
    setTimeValue(e.target.value);
  };

  const randomNumber = () => {
    const arr = Math.random().toFixed(5).replace(/\d\./, '').toString()
      .split('');
    return arr;
  };

  const handleModal = () => {
    setSubmit(true);
    if (result !== '' && dataBPKB.some((value) => value.nopol === result)) {
      const resultFilter = dataBPKB.filter((value) => value.nopol === result)[0];
      setResultBPKB(resultFilter);
      setModal1(false);
      setModal2(true);
    }
  };

  const hanldeSubmitTime = () => {
    if (dateValue !== null && timeValue !== null) {
      setTimeModal(false);
      return setQueueModal(true);
    }
    return null;
  };

  return (
    <div>
      <div className="col-sm-12" style={{ cursor: 'pointer' }} onClick={() => setModal(true)} role="button">
        <img src="/assets/track-bpkb.png" width="100%" height={250} alt="Check BPKB" />
      </div>
      {modal && (
        <div
          className="modal"
          style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLiveLabel">Satlantas Polres Brebes</h5>
                <button type="button" className="btn-close" onClick={() => setModal(false)} />
              </div>
              <div className="modal-body" style={{ display: 'flex', padding: '45px' }}>
                <button className={styles.btn__option} style={{ marginRight: 10 }} onClick={() => { setModal(false); setTimeModal(true); }}>Antrian BPKB Online</button>
                <button className={styles.btn__option} style={{ background: '#0094FF' }} onClick={() => { setModal(false); setModal1(true); }}>Tracking BPKB</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {queueModal && (
      <div
        className="modal"
        style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLiveLabel">Satlantas Polres Brebes</h5>
              <button type="button" className="btn-close" onClick={() => setQueueModal(false)} />
            </div>
            <div className="modal-body">
              <h6>
                <center>
                  Silahkan Tunjukkan  dibawah ini ke
                  {' '}
                  <br />
                  Petugas loket antrian online
                </center>
              </h6>
              <center>
                {randomNumber().map((value) => (
                  <span style={{
                    background: '#FFD93D', padding: '6px', display: 'inline-block', borderRadius: '4px', marginRight: 10,
                  }}
                  >
                    {value}
                  </span>
                ))}
              </center>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setQueueModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
      )}

      {timeModal && (
      <div
        className="modal"
        style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLiveLabel">Satlantas Polres Brebes</h5>
              <button type="button" className="btn-close" onClick={() => setTimeModal(false)} />
            </div>
            <div className="modal-body">
              <h6>Kapan anda ingin datang ke Kantor?</h6>
              <p>
                Pilih Tanggal
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="date" onChange={handleOnChangeDate} />
              </p>
              <p>
                Jam
                {' '}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="time" onChange={handleOnChangeTime} />
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setTimeModal(false)}>Close</button>
              <button type="button" className="btn btn-primary" onClick={() => hanldeSubmitTime()}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      )}

      {modal1 && (
        <div
          className="modal"
          style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLiveLabel">BPKB Delivery</h5>
                <button type="button" className="btn-close" onClick={() => { setModal1(false); setSubmit(false); }} />
              </div>
              <div className="modal-body">
                <h6>Input Nopol Kendaraan Anda</h6>
                <div className="row">
                  <div className={`col-sm-4 ${styles.input__nopol_wrapper}`}>
                    <input className={styles.input__nopol} onChange={handleOnChange1} />
                  </div>
                  <div className={`col-sm-4 ${styles.input__nopol_wrapper}`}>
                    <input className={styles.input__nopol_custom} onChange={handleOnChange2} />
                  </div>
                  <div className={`col-sm-4 ${styles.input__nopol_wrapper}`}>
                    <input className={styles.input__nopol} onChange={handleOnChange3} />
                  </div>
                  <div className="col-sm-12">
                    {(result !== '' && (dataBPKB.some((value) => value.nopol !== result)) && submit === true) && <div style={{ color: '#F75C4E' }}>Nopol Kendaraan Anda tidak ditemukan</div>}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => { setModal1(false); setSubmit(false); }}>Close</button>
                <button type="button" className="btn btn-primary" onClick={() => handleModal()}>Mulai Tracking</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {modal2 && (
      <div
        className="modal"
        style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLiveLabel">Detail Delivery</h5>
              <button type="button" className="btn-close" onClick={() => { setModal2(false); setSubmit(false); }} />
            </div>
            <div className="modal-body">
              <h6>Info Kendaraan</h6>
              <p>
                Nopol:
                {' '}
                {resultBPKB.nopol}
              </p>
              <p>
                Nama Pemilik :
                {' '}
                {resultBPKB.name}
              </p>
              <p>
                Proses:
                {' '}
                <b>{resultBPKB.process}</b>
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #C4C4C4',
                borderRadius: '8px',
                padding: 28,
              }}
              >
                {' '}
                <div style={{ marginLeft: -25 }}>
                  <StepperNav
                    steps={resultBPKB.steps}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => { setModal2(false); setSubmit(false); }}>Close</button>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
