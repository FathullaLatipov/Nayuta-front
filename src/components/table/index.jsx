import './main.scss'
import TableImg from '../../assets/images/logo.svg'
import UnlockImg from '../../assets/images/unlock.png'
import Key from '../../assets/images/key.svg'
import Key2 from '../../assets/images/key2.svg'
import { useTranslation } from 'react-i18next'
const TableHome = () => {
    const { t } = useTranslation();

    return (
        <div className="tablemain">
            <h1 className='tableh'>{t("table.title")}</h1>
            <div className='tables-section'>

                <div className="tables-section-titles">
                    <p>{t("table.desc")}</p>
                    <a href='/consultation'>{t("button.title")}</a>
                </div>
                <div className='tables'>
                    <table>
                        <tr>
                            <th></th>
                            <th><img src={TableImg} alt="" className='tableimg' /></th>
                            <th className='bankth'>{t("table.table_title2")}</th>
                        </tr>
                        <tr>
                            <th>{t("table.table_title3")}</th>
                            <th className='fs'>{t("table.table_title4")}</th>
                            <th className='fs'>{t("table.table_title5")}</th>
                        </tr>
                        <tr>
                            <td>{t("table.table_title6")}</td>
                            <td className='fs'>{t("table.table_title7")}</td>
                            <td className='fs'>{t("table.table_title8")}</td>
                        </tr>
                        <tr>
                            <td>{t("table.table_title9")}</td>
                            <td className='fs'>{t("table.table_title10")}</td>
                            <td className='fs'>{t("table.table_title11")}</td>
                        </tr>
                        <tr>
                            <td id='border-none'>{t("table.table_title12")}</td>
                            <td className='border-none'>{t("table.table_title13")}</td>
                            <td className='border-none'>{t("table.table_title14")}</td>
                        </tr>
                    </table>
                    <img className='img first' src={UnlockImg} alt="" />
                    <img className='img last' src={UnlockImg} alt="" />
                    <img className='img keyfirst' src={Key2} />
                    <img className='img keylast' src={Key} />

                </div>
            </div>
        </div>
    )
}
export default TableHome