import Table from 'react-bootstrap/Table';
import React, { createRef, useState } from "react";
import "./Calculator.scss";
import Cancel from '../assets/images/Cancel.svg'
import { Button, Form, Modal } from "react-bootstrap";
import { PostData } from '../hooks/request';
import Pdf from "react-to-pdf";
import Pechat from './Vector.svg'
import { useTranslation } from 'react-i18next';
import Spinner from './loading/loading';

const Calculator = () => {
  const ref = createRef();


  const [price, setPrice] = useState('50000000')
  const [percentage, setPercentage] = useState(16)
  const [interest, setInterest] = useState(20)
  const [schedule, setSchedule] = useState('annuity')
  const [period, setPeriod] = useState(24)
  const [data, setData] = useState()
  const [amount, setAmount] = useState()
  const [loading, setLoading] = useState(false)
  console.log(amount, 'amount');
  const [show, setShow] = useState(false);
  // const [calculateList, setCalculateList] = useState()
  // const { lang } = useUserContext()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function Send(e) {


    e.preventDefault();
    setLoading(true)
    PostData("/calculate/", {
      "price": price,
      "down_payment_percentage": percentage,
      "loan_amount": (price - ((percentage / 100) * price)),
      "interest_rate": interest,
      "payment_schedule": schedule,
      "loan_period": parseInt(period)
    })
      .then(data => {
        setLoading(false)
        console.log(data)
        setData(data)
      })
      .catch(err => console.log(err))
  }
  const { t } = useTranslation()


  return (
    <section id='calculator'>
      <div className="calc-wrapper mt-5">
        <Form className='cal-form' onSubmit={Send}>
          <div className="cal-form-text">
            <p>{t("calculator.calcheader")}</p>
          </div>
          <div className="type-credit">
            <Form.Group className="" controlId="formBasicPassword">
              <Form.Label className='disabled'>{t("calculator.labels.kimga")}</Form.Label>
              <Form.Select onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
                <option value="annuity">{t("calculator.inputs.jismoniy")}</option>
                <option value="differentiated">{t("calculator.inputs.yuridik")}</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div className="first-child-form">
            
            <Form.Group className="" controlId="formBasicPassword">
              <Form.Label>{t("calculator.labels.narx")}</Form.Label>
              <Form.Control value={
                (price).replace(/\B(?=(\d{3})+(?!\d))/g, " ") 
              } onChange={(e) => setPrice(e.target.value)} type="text" placeholder="50000" />
            </Form.Group>
            <Form.Select disabled onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
              <option value="annuity">{t("calculator.inputs.sum")}</option>
            </Form.Select>
            <Form.Group className="" controlId="formBasicPassword">
              <Form.Label>{t("calculator.labels.tolov")}</Form.Label>
              <Form.Control value={percentage} onChange={(e) => setPercentage(e.target.value)} type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="" controlId="formBasicPassword">
              <Form.Control onChange={(e) => setPercentage(e.target.value)} type="text" value={
                ((percentage / 100) * price).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' сум'
              } placeholder=" 600.000" />
            </Form.Group>
          </div>

          <div className="second-child-form">
            <Form.Group className="" controlId="formBasicPassword">
              <Form.Label>{t("calculator.labels.miqdor")}</Form.Label>
              <Form.Control value={
                (price - ((percentage / 100) * price))
              }
                onChange={(e) => setAmount(e.target.value)} type="text" placeholder="" />
            </Form.Group>
            <Form.Select disabled onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
              <option value="annuity">{t("calculator.inputs.sum")}</option>
            </Form.Select>
          </div>
          <div className="thirt-child-form">
            <Form.Group className="" controlId="formBasicPassword">
              <Form.Label>{t("calculator.labels.stavka")}</Form.Label>
              <Form.Control value={interest} onChange={(e) => setInterest(e.target.value)} type="text" placeholder="20" />
            </Form.Group>
            <Form.Select disabled onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
              <option value="Годовых">{t("calculator.inputs.yiliga")}</option>
            </Form.Select>
            <Form.Group className="w-100"
              controlId="formBasicPassword">
              <Form.Label>{t("calculator.labels.qaytarish")}</Form.Label>
              <Form.Select onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
                <option value="annuity">{t("calculator.annuity")}</option>
                <option value="differentiated">{t("calculator.dif")}</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="fourth-child-form">
            <Form.Group className="w-100" controlId="formBasicPassword">
              <Form.Label>{t("calculator.labels.muddat")}</Form.Label>
              <Form.Control value={period} onChange={(e) => setPeriod(e.target.value)} type="text" placeholder="36" />
            </Form.Group>
            <Form.Select disabled onChange={(e) => setSchedule(e.target.value)} aria-label="Default select example">
              <option value="Месяц">{t("calculator.inputs.oy")}</option>
            </Form.Select>
          </div>
          <Button onClick={handleShow} variant="outiled" type="submit">
            {t("calculator.inputs.hisoblash")}
          </Button>
        </Form>
        <p className="title">
          {t("calculator.inputs.subtitle")}{" "}
          <a href="#contact">{t("calculator.inputs.span")}</a> {t("calculator.inputs.subtitle2")}
        </p>

        <Modal className='table-modal' show={show} onHide={handleClose}>

          {
            loading ? <Spinner /> :

              <>
                <Modal.Header>
                  <button onClick={() => setShow(false)}><img src={Cancel} alt="" /></button>
                </Modal.Header>
                <div className="result">
                  <div className="child">
                    <h1>{t("parametr.parametrkredit")}</h1>
                    <p>{t("parametr.narx")}<span>{data?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' сум'}</span></p>
                    <p>{t("parametr.tolov")} <span>{data?.down_payment_percentage}%</span></p>
                    <p>{t("parametr.summa")}<span>{data?.loan_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' сум'}</span></p>
                    <p>{t("parametr.muddat")} <span>{data?.loan_period} {t("calculator.inputs.oy")}</span></p>
                    <p>{t("parametr.foiz")}<span>{data?.interest_rate}%</span></p>
                    <p>{t("parametr.qaytarish")} <span>{data?.payment_schedule === "annuity" ? t("calculator.annuity") : t("calculator.dif")}</span></p>
                  </div>
                  <div className="child">
                    <h1>{t("parametr.rezultat")}</h1>
                    <p>{t("parametr.jami")} <span>{data?.total_payments.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' сум'}</span></p>
                    <p>{t("parametr.ortiqcha")} <span>{data?.overpayment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' сум'}</span></p>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                      {({ toPdf }) => <div className='pechat' onClick={toPdf}><img src={Pechat} alt="" /> {t("parametr.pechat")}</div>}
                    </Pdf>
                  </div>
                </div>
                <Modal.Body className='table-responsive text-nowrap' ref={ref}>
                  <Table striped bordered hover size="xxl">
                    <thead style={{
                      verticalAlign: "middle"
                    }}>
                      <tr>
                        <th>№</th>
                        <th>{t("parametr.rows.data")}</th>
                        <th>{t("parametr.rows.qolgan")}</th>
                        <th>{t("parametr.rows.qaytarish")}</th>
                        <th>{t("parametr.rows.prosent")}</th>
                        <th>{t("parametr.rows.itog")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data?.payments?.map((item, key) => (
                          <tr>
                            <td style={{
                              width: "0%"
                            }}>{item?.payment_number}</td>
                            <td>{item?.payment_date}</td>
                            <td>{item?.remaining_balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</td>
                            <td>{item?.principal_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</td>
                            <td>{item?.interest_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</td>
                            <td>{item?.payment_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </Table>
                </Modal.Body>
              </>
          }
        </Modal>
      </div >
    </section>
  );
};

export default Calculator;
